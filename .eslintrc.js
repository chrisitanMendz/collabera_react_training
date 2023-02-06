module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/button-has-type': 0,
    'no-param-reassign': 0,
    'react/state-in-constructor': 0,
    'class-methods-use-this': 0,
    'react/function-component-definition': 0,
    'no-alert': 0,
    'arrow-body-style': 0,
    // 'react/function-component-definition': {
    //   namedComponents:
    //     'function-declaration' |
    //     'function-expression' |
    //     'arrow-function' |
    //     (Array < 'function-declaration') |
    //     'function-expression' |
    //     'arrow-function',
    //   unnamedComponents:
    //     'function-expression' |
    //     'arrow-function' |
    //     (Array < 'function-expression') |
    //     'arrow-function',
    // },
  },
};
