import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['dist'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      2,
      { fixStyle: 'separate-type-imports' },
    ],
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    { files: ['*.{c,m,}{t,j}s', '*.{t,j}sx'] },
    { files: ['*{test,spec}.{t,j}s?(x)'], env: { jest: true } },
  ],
})
