module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb-base', 'plugin:flowtype/recommended', 'plugin:jest/recommended'],
	plugins: ['flowtype', 'jest', 'filenames'],
	env: {
		node: true,
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
	rules: {
		'arrow-parens': ['error', 'always'],
		'class-methods-use-this': 'off',
		curly: ['error', 'all'],
		'max-len': ['error', 120],
		'no-console': 'error',
		'no-multiple-empty-lines': ['error', { max: 1 }],
		'no-process-env': 'error',
		'no-restricted-imports': [
			'error',
			{
				patterns: ['./*', '../*'],
			},
		],
		'no-underscore-dangle': 'off',
		'no-use-before-define': ['error', { variables: true, functions: false, classes: true }],
		'object-curly-newline': 'off',
		'import/prefer-default-export': 'off',
		'filenames/match-regex': ['error', '^[a-z0-9.-]+$', true],
	},
};
