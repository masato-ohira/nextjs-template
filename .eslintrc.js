module.exports = {
  extends: [
    'next',
  ],
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react/prop-types': 0,
    'comma-dangle': 0,
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 0,
    'no-unused-vars': 1,
    'no-unused-vars': 1,
    'max-len': 0,
    // 'quotes': 0,
    'quotes': [1, 'single', {allowTemplateLiterals: true}],

    // セミコロン省略
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  },
}
