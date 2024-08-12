module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'arrow-body-style': 0,
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/naming-convention': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
    }],
    'react/display-name': 0,
    '@typescript-eslint/no-shadow': 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'array-callback-return': 0,
    'consistent-return': 0,
  },
};
