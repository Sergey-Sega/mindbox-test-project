const eslintPluginReact = require('eslint-plugin-react')
const eslintPluginReactHooks = require('eslint-plugin-react-hooks')
const eslintPluginImport = require('eslint-plugin-import')
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y')
const eslintPluginPrettier = require('eslint-plugin-prettier')
const eslintPluginTypescript = require('@typescript-eslint/eslint-plugin')
const typescriptParser = require('@typescript-eslint/parser')

module.exports = [
  {
    ignores: ['node_modules/', 'dist/'], // Игнорируемые папки
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      import: require('eslint-plugin-import'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
      prettier: require('eslint-plugin-prettier'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
        },
      ],
      'linebreak-style': ['error', 'unix'], // Устанавливает стиль переносов строк
      'semi': ['error', 'never'], // Отключить точки с запятой
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
