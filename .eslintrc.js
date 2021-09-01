module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['/.*', '/*config.js', '/*config.ts'],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterOverload: true, exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { overrides: { constructors: 'no-public' } },
    ],
  },
};
