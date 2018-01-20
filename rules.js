/* eslint sort-keys: "error" */

module.exports = Object.assign(
	{
		'accessor-pairs': 'error',
		'array-bracket-newline': 'off',
		'array-bracket-spacing': [
			'error',
			'never',
		],
		'array-callback-return': 'error',
		'array-element-newline': 'off',
		'arrow-body-style': 'error',
		'arrow-parens': [
			'error',
			'always',
		],
		'arrow-spacing': [
			'error',
			{
				after: true,
				before: true,
			},
		],
		'block-scoped-var': 'error',
		'block-spacing': [
			'error',
			'never',
		],
		'brace-style': 'error',
		'callback-return': 'error',
		camelcase: ['error', {properties: 'never'}],
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'comma-spacing': 'error',
		'comma-style': [
			'error',
			'last',
		],
		complexity: 'off',
		'computed-property-spacing': [
			'error',
			'never',
		],
		'consistent-return': 'error',
		'consistent-this': 'error',
		'constructor-super': 'error',
		curly: 'error',
		'default-case': 'off',
		'dot-location': [
			'error',
			'property',
		],
		'dot-notation': 'error',
		'eol-last': 'error',
		eqeqeq: 'error',
		'for-direction': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'error',
		'func-names': [
			'error',
			'never',
		],
		'func-style': 'error',
		'function-paren-newline': ['error', 'consistent'],
		'generator-star-spacing': [
			'error',
			{
				after: true,
				before: false,
			},
		],
		'getter-return': 'error',
		'global-require': 'error',
		'guard-for-in': 'warn',
		'handle-callback-err': 'error',
		'id-blacklist': 'error',
		'id-length': 'off',
		'id-match': 'error',
		'implicit-arrow-linebreak': 'error',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'indent-legacy': 'off',
		'init-declarations': 'error',
		'jsx-quotes': 'error',
		'key-spacing': 'error',
		'keyword-spacing': [
			'error',
			{
				after: true,
				before: true,
			},
		],
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': 'error',
		'lines-around-directive': 'error',
		'lines-between-class-members': [
			'error',
			'always',
		],
		'max-depth': 'error',
		'max-len': [
			'warn',
			200,
		],
		'max-lines': 'off',
		'max-nested-callbacks': 'error',
		'max-params': [
			'warn',
			3,
		],
		'max-statements': 'off',
		'max-statements-per-line': 'error',
		'multiline-comment-style': [
			'error',
			'separate-lines',
		],
		'multiline-ternary': 'off',
		'new-cap': [
			'error',
			{capIsNew: false},
		],
		'new-parens': 'error',
		'newline-after-var': 'off',
		'newline-before-return': 'off',
		'newline-per-chained-call': 'off',
		'no-alert': 'off',
		'no-array-constructor': 'error',
		'no-await-in-loop': 'off',
		'no-bitwise': 'off',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-catch-shadow': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-confusing-arrow': 'off',
		'no-console': 'error',
		'no-const-assign': 'error',
		'no-constant-condition': [
			'error',
			{checkLoops: false},
		],
		'no-continue': 'off',
		'no-control-regex': 'off',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-empty-function': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-label': 'error',
		'no-extra-parens': 'off',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'off',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		'no-inner-declarations': [
			'error',
			'functions',
		],
		'no-invalid-regexp': 'error',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-mixed-operators': 'off',
		'no-mixed-requires': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-native-reassign': 'error',
		'no-negated-condition': 'warn',
		'no-negated-in-lhs': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'off',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-path-concat': 'error',
		'no-plusplus': 'off',
		'no-process-env': 'off',
		'no-process-exit': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-restricted-globals': 'error',
		'no-restricted-imports': ['error', 'lodash'],
		'no-restricted-modules': 'error',
		'no-restricted-properties': [2, {
			message: 'Use ** operator instead.',
			object: 'Math',
			property: 'pow',
		}, {
			object: 'arguments',
			property: 'callee',
		}],
		'no-restricted-syntax': [
			'error',
			'EmptyStatement',
			'BinaryExpression[operator=\'in\']',
			{
				message: 'Use for..of or Object.entries() instead.',
				selector: 'ForInStatement',
			},
			'LabeledStatement',
			'WithStatement',
		],
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': ['error', {allow: ['_', 'resolve', 'reject']}],
		'no-shadow-restricted-names': 'error',
		'no-spaced-func': 'error',
		'no-sparse-arrays': 'error',
		'no-sync': 'error',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': ['error', {allowAfterThis: true}],
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': 'off',
		'object-curly-spacing': [
			'error',
			'never',
		],
		'object-property-newline': [
			'error',
			{
				allowMultiplePropertiesPerLine: true,
			},
		],
		'object-shorthand': 'error',
		'one-var': 'off',
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': 'error',
		'padded-blocks': [
			'error',
			'never',
		],
		'padding-line-between-statements': 'off',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': ['error', {
			array: false,
			object: true,
		}],
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-reflect': 'off',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': [
			'error',
			'as-needed',
		],
		quotes: [
			'error',
			'single',
		],
		radix: ['error', 'as-needed'],
		'require-await': 'error',
		'require-jsdoc': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': [
			'error',
			'never',
		],
		semi: 'error',
		'semi-spacing': 'error',
		'semi-style': ['error', 'last'],
		'sort-imports': 'error',
		'sort-keys': 'off',
		'sort-vars': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': 'off',
		'space-in-parens': [
			'error',
			'never',
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always',
		],
		strict: [
			'error',
			'never',
		],
		'switch-colon-spacing': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': [
			'error',
			'never',
		],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': [
			'error',
			'never',
		],
		'use-isnan': 'error',
		'valid-jsdoc': 'error',
		'valid-typeof': 'error',
		'vars-on-top': 'off',
		'wrap-iife': 'error',
		'wrap-regex': 'error',
		'yield-star-spacing': 'error',
		yoda: ['error', 'never', {
			exceptRange: true,
		}],
	},

	// eslint-plugin-react

	{
		'react/boolean-prop-naming': 'off',
		'react/button-has-type': 'error',
		'react/default-props-match-prop-types': 'error',
		'react/destructuring-assignment': 'off',
		'react/display-name': 'error',
		'react/forbid-component-props': 'error',
		'react/forbid-elements': 'error',
		'react/forbid-foreign-prop-types': 'error',
		'react/forbid-prop-types': 'warn',
		'react/jsx-boolean-value': ['error', 'never'],
		'react/jsx-closing-bracket-location': 'error',
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-brace-presence': ['error', 'never'],
		'react/jsx-curly-spacing': 'error',
		'react/jsx-equals-spacing': 'error',
		'react/jsx-filename-extension': 'error',
		'react/jsx-first-prop-new-line': 'error',
		'react/jsx-handler-names': 'error',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-key': 'error',
		'react/jsx-max-props-per-line': ['error', {when: 'multiline'}],
		'react/jsx-no-bind': ['error', {ignoreRefs: true}],
		'react/jsx-no-comment-textnodes': 'error',
		'react/jsx-no-duplicate-props': 'error',
		'react/jsx-no-literals': 'off',
		'react/jsx-no-target-blank': 'error',
		'react/jsx-no-undef': 'error',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-pascal-case': 'error',
		'react/jsx-sort-props': 'off',
		'react/jsx-space-before-closing': 'off', // deprecated
		'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'never'}],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-wrap-multilines': 'error',
		'react/no-access-state-in-setstate': 'error',
		'react/no-array-index-key': 'off',
		'react/no-children-prop': 'error',
		'react/no-danger': 'error',
		'react/no-danger-with-children': 'error',
		'react/no-deprecated': 'error',
		'react/no-did-mount-set-state': 'error',
		'react/no-did-update-set-state': 'error',
		'react/no-direct-mutation-state': 'error',
		'react/no-find-dom-node': 'error',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': ['error', {ignoreStateless: true}],
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value': 'error',
		'react/no-set-state': 'off',
		'react/no-string-refs': 'error',
		'react/no-typos': 'error',
		'react/no-unescaped-entities': 'error',
		'react/no-unknown-property': 'error',
		'react/no-unused-prop-types': 'error',
		'react/no-unused-state': 'error',
		'react/no-will-update-set-state': 'error',
		'react/prefer-es6-class': 'error',
		'react/prefer-stateless-function': 'error',
		'react/prop-types': 'error',
		'react/react-in-jsx-scope': 'error',
		'react/require-default-props': 'error',
		'react/require-optimization': 'off',
		'react/require-render-return': 'error',
		'react/self-closing-comp': 'error',
		'react/sort-comp': 'off',
		'react/sort-prop-types': 'off',
		'react/style-prop-object': 'error',
		'react/void-dom-elements-no-children': 'error',
	},

	// eslint-plugin-array-plural

	{
		'array-plural/array-plural': 'error',
	}
);