/* eslint sort-keys: "error" */

module.exports = {
	...{
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
		'brace-style': ['error', '1tbs'],
		'callback-return': 'error',
		camelcase: [
			'error',
			{
				ignoreDestructuring: true,
				properties: 'never',
			},
		],
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
		'default-param-last': 'error',
		'dot-location': [
			'error',
			'property',
		],
		'dot-notation': 'error',
		'eol-last': 'error',
		eqeqeq: ['error', 'always'],
		'for-direction': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'error',
		'func-names': [
			'error',
			'never',
		],
		'func-style': 'error',
		'function-call-argument-newline': 'off',
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
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
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
		'max-classes-per-file': 'off',
		'max-depth': 'off',
		'max-len': [
			'warn',
			{
				code: 150,
				comments: 150,
				ignoreComments: true,
				ignorePattern: undefined,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				tabWidth: 4,
			},
		],
		'max-lines': 'off',
		'max-lines-per-function': 'off',
		'max-nested-callbacks': 'error',
		'max-params': [
			'warn',
			3,
		],
		'max-statements': 'off',
		'max-statements-per-line': 'error',
		'multiline-comment-style': 'off',
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
		'no-async-promise-executor': 'error',
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
		'no-constructor-return': 'error',
		'no-continue': 'off',
		'no-control-regex': 'off',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'off', // => eslint-plugin-import
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
		'no-import-assign': 'error',
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
		'no-lonely-if': 'off',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-misleading-character-class': 'error',
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
		'no-setter-return': 'error',
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
		'no-useless-catch': 'error',
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
			AssignmentExpression: {
				array: true,
				object: false,
			},
			VariableDeclarator: {
				array: true,
				object: true,
			},
		}, {
			enforceForRenamedProperties: false,
		}],
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-reflect': 'off',
		'prefer-regex-literals': 'error',
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
		'require-atomic-updates': 'error',
		'require-await': 'error',
		'require-jsdoc': 'error',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'rest-spread-spacing': [
			'error',
			'never',
		],
		semi: 'error',
		'semi-spacing': 'error',
		'semi-style': ['error', 'last'],
		'sort-imports': 'off', // => eslint-plugin-import
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

	...{
		'react/boolean-prop-naming': 'off',
		'react/button-has-type': 'error',
		'react/default-props-match-prop-types': 'error',
		'react/destructuring-assignment': 'off',
		'react/display-name': 'error',
		'react/forbid-component-props': 'error',
		'react/forbid-dom-props': 'off',
		'react/forbid-elements': 'error',
		'react/forbid-foreign-prop-types': 'error',
		'react/forbid-prop-types': 'warn',
		'react/jsx-boolean-value': ['error', 'never'],
		'react/jsx-child-element-spacing': 'error',
		'react/jsx-closing-bracket-location': 'error',
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-brace-presence': ['error', 'never'],
		'react/jsx-curly-newline': ['error', 'consistent'],
		'react/jsx-curly-spacing': ['error', {children: true, when: 'never'}],
		'react/jsx-equals-spacing': 'error',
		'react/jsx-filename-extension': 'error',
		'react/jsx-first-prop-new-line': 'error',
		'react/jsx-fragments': 'error',
		'react/jsx-handler-names': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-key': 'error',
		'react/jsx-max-depth': 'off',
		'react/jsx-max-props-per-line': ['error', {when: 'multiline'}],
		'react/jsx-no-bind': ['error', {ignoreRefs: true}],
		'react/jsx-no-comment-textnodes': 'error',
		'react/jsx-no-duplicate-props': 'error',
		'react/jsx-no-literals': 'off',
		'react/jsx-no-target-blank': 'error',
		'react/jsx-no-undef': 'error',
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-pascal-case': 'error',
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-default-props': 'off',
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
		'react/no-this-in-sfc': 'error',
		'react/no-typos': 'error',
		'react/no-unescaped-entities': 'error',
		'react/no-unknown-property': 'error',
		'react/no-unsafe': 'error',
		'react/no-unused-prop-types': 'error',
		'react/no-unused-state': 'error',
		'react/no-will-update-set-state': 'error',
		'react/prefer-es6-class': 'error',
		'react/prefer-read-only-props': 'off',
		'react/prefer-stateless-function': 'error',
		'react/prop-types': 'error',
		'react/react-in-jsx-scope': 'error',
		'react/require-default-props': 'error',
		'react/require-optimization': 'off',
		'react/require-render-return': 'error',
		'react/self-closing-comp': 'error',
		'react/sort-comp': 'off',
		'react/sort-prop-types': 'off',
		'react/state-in-constructor': ['error', 'always'],
		'react/static-property-placement': ['error', 'static public field'],
		'react/style-prop-object': 'error',
		'react/void-dom-elements-no-children': 'error',
	},

	// eslint-plugin-array-plural

	...{
		'array-plural/array-plural': 'error',
	},

	// eslint-plugin-private-props

	...{
		'private-props/no-unused-or-undeclared': 'error',
		'private-props/no-use-outside': 'error',
	},

	// eslint-plugin-mysticatea

	...{
		'mysticatea/arrow-parens': 'off',
		'mysticatea/block-scoped-var': 'off',
		'mysticatea/no-instanceof-array': 'error',
		'mysticatea/no-instanceof-wrapper': 'error',
		'mysticatea/no-literal-call': 'error',
		'mysticatea/no-this-in-static': 'error',
		'mysticatea/no-use-ignored-vars': 'off',
		'mysticatea/no-useless-rest-spread': 'off',
		'mysticatea/prefer-for-of': 'error',
	},

	// eslint-plugin-node

	...{
		'node/exports-style': ['error', 'module.exports'],
		'node/file-extension-in-import': 'off', // => eslint-plugin-import
		'node/no-callback-literal': 'off',
		'node/no-deprecated-api': 'error',
		'node/no-exports-assign': 'error',
		'node/no-extraneous-import': 'off', // => eslint-plugin-import
		'node/no-extraneous-require': 'error',
		'node/no-hide-core-modules': 'off',
		'node/no-missing-import': 'off', // => eslint-plugin-import
		'node/no-missing-require': 'error',
		'node/no-unpublished-bin': 'error',
		'node/no-unpublished-import': 'off', // => eslint-plugin-import
		'node/no-unpublished-require': 'off',
		'node/no-unsupported-features': 'off',
		'node/no-unsupported-features/es-builtins': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'node/no-unsupported-features/node-builtins': 'off',
		'node/prefer-global/buffer': 'error',
		'node/prefer-global/console': 'error',
		'node/prefer-global/process': 'error',
		'node/prefer-global/text-decoder': 'error',
		'node/prefer-global/text-encoder': 'error',
		'node/prefer-global/url': 'error',
		'node/prefer-global/url-search-params': 'error',
		'node/prefer-promises/dns': 'error',
		'node/prefer-promises/fs': 'error',
		'node/process-exit-as-throw': 'error',
		'node/shebang': 'error',
	},

	// eslint-plugin-vue

	...{
		'vue/array-bracket-spacing': ['error', 'never'],
		'vue/arrow-spacing': [
			'error',
			{
				after: true,
				before: true,
			},
		],
		'vue/attribute-hyphenation': 'error',
		'vue/attributes-order': 'error',
		'vue/block-spacing': [
			'error',
			'never',
		],
		'vue/brace-style': ['error', '1tbs'],
		'vue/camelcase': [
			'error',
			{
				ignoreDestructuring: true,
				properties: 'never',
			},
		],
		'vue/comma-dangle': [
			'error',
			'always-multiline',
		],
		'vue/comment-directive': 'error',
		'vue/component-name-in-template-casing': ['error', 'kebab-case'],
		'vue/dot-location': [
			'error',
			'property',
		],
		'vue/eqeqeq': ['error', 'always'],
		'vue/html-closing-bracket-newline': 'error',
		'vue/html-closing-bracket-spacing': ['error', {
			endTag: 'never',
			selfClosingTag: 'never',
			startTag: 'never',
		}],
		'vue/html-end-tags': 'error',
		'vue/html-indent': ['error', 'tab'],
		'vue/html-quotes': 'error',
		'vue/html-self-closing': 'error',
		'vue/jsx-uses-vars': 'error',
		'vue/key-spacing': 'error',
		'vue/keyword-spacing': [
			'error',
			{
				after: true,
				before: true,
			},
		],
		'vue/match-component-file-name': 'off',
		'vue/max-attributes-per-line': ['error', {
			multiline: {
				allowFirstLine: false,
				max: 1,
			},
			singleline: 3,
		}],
		'vue/multiline-html-element-content-newline': 'error',
		'vue/mustache-interpolation-spacing': ['error', 'never'],
		'vue/name-property-casing': 'error',
		'vue/no-async-in-computed-properties': 'error',
		'vue/no-boolean-default': ['error', 'default-false'],
		'vue/no-confusing-v-for-v-if': 'off',
		'vue/no-deprecated-scope-attribute': 'error',
		'vue/no-dupe-keys': 'error',
		'vue/no-duplicate-attributes': 'error',
		'vue/no-empty-pattern': 'error',
		'vue/no-multi-spaces': 'error',
		'vue/no-parsing-error': 'error',
		'vue/no-reserved-keys': 'error',
		'vue/no-restricted-syntax': 'off',
		'vue/no-shared-component-data': 'error',
		'vue/no-side-effects-in-computed-properties': 'error',
		'vue/no-spaces-around-equal-signs-in-attribute': 'error',
		'vue/no-template-key': 'error',
		'vue/no-template-shadow': 'error',
		'vue/no-textarea-mustache': 'error',
		'vue/no-unused-components': 'error',
		'vue/no-unused-vars': 'error',
		'vue/no-use-v-if-with-v-for': 'error',
		'vue/no-v-html': 'error',
		'vue/object-curly-spacing': ['error', 'never'],
		'vue/order-in-components': 'error',
		'vue/prop-name-casing': 'error',
		'vue/require-component-is': 'error',
		'vue/require-default-prop': 'error',
		'vue/require-direct-export': 'error',
		'vue/require-prop-type-constructor': 'error',
		'vue/require-prop-types': 'error',
		'vue/require-render-return': 'error',
		'vue/require-v-for-key': 'error',
		'vue/require-valid-default-prop': 'error',
		'vue/return-in-computed-property': 'error',
		'vue/script-indent': [
			'error',
			'tab',
			{
				baseIndent: 0,
				switchCase: 1,
			},
		],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/space-infix-ops': 'error',
		'vue/space-unary-ops': 'error',
		'vue/this-in-template': 'error',
		'vue/use-v-on-exact': 'error',
		'vue/v-bind-style': 'error',
		'vue/v-on-function-call': ['error', 'never'],
		'vue/v-on-style': 'error',
		'vue/v-slot-style': 'error',
		'vue/valid-template-root': 'error',
		'vue/valid-v-bind': 'error',
		'vue/valid-v-cloak': 'error',
		'vue/valid-v-else': 'error',
		'vue/valid-v-else-if': 'error',
		'vue/valid-v-for': 'error',
		'vue/valid-v-html': 'error',
		'vue/valid-v-if': 'error',
		'vue/valid-v-model': 'error',
		'vue/valid-v-on': 'error',
		'vue/valid-v-once': 'error',
		'vue/valid-v-pre': 'error',
		'vue/valid-v-show': 'error',
		'vue/valid-v-slot': 'error',
		'vue/valid-v-text': 'error',
	},

	// import

	...{
		'import/default': 'error',
		'import/dynamic-import-chunkname': 'off',
		'import/export': 'error',
		'import/exports-last': 'off',
		'import/extensions': ['error', 'always'],
		'import/first': 'error',
		'import/group-exports': 'off',
		'import/imports-first': 'error',
		'import/max-dependencies': 'off',
		'import/named': 'error',
		'import/namespace': 'off',
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'off',
		'import/no-commonjs': 'off',
		'import/no-cycle': 'error',
		'import/no-default-export': 'off',
		'import/no-deprecated': 'error',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'off',
		'import/no-extraneous-dependencies': 'error',
		'import/no-internal-modules': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-default': 'error',
		'import/no-named-export': 'off',
		'import/no-namespace': 'error',
		'import/no-nodejs-modules': 'off',
		'import/no-relative-parent-imports': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-self-import': 'error',
		'import/no-unassigned-import': 'off',
		'import/no-unresolved': 'error',
		'import/no-unused-modules': 'off',
		'import/no-useless-path-segments': 'error',
		'import/no-webpack-loader-syntax': 'off',
		'import/order': ['error', {
			alphabetize: 'asc',
		}],
		'import/prefer-default-export': 'error',
		'import/unambiguous': 'off',
	},
};
