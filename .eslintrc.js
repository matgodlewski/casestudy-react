module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    },
    'import/core-modules': ['rxjs/operators', 'rxjs'],
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    commonjs: true,
    amd: true,
    jest: true,
    jquery: true,
    es6: true,
  },
  rules: {
    'indent': 'error',
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'global-require': 0,
    'no-restricted-globals': 1,
    'no-param-reassign': 1,
    'quotes': 1,
    'quote-props': [
      1,
      'consistent-as-needed',
    ],
    'default-case': 1,
    'no-else-return': 1,
    'max-len': [
      1,
      120,
      4,
      {
        ignoreComments: true,
      },
    ],
    'linebreak-style': [
      1,
      'unix',
    ],
    'space-infix-ops': 0,
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        svg: 'always',
        json: 'always',
      },
    ],
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-access-state-in-setstate': 1,
    'react/no-array-index-key': 1,
    'react/require-default-props': 1,
    'react/prefer-stateless-function': 1,
    'react/destructuring-assignment': 1,
    'react/no-unused-prop-types': 1,
  },
};
