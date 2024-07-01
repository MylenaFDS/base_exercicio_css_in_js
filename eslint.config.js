import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      parser: typescriptParser,
    },
    plugins: {
      react,
      '@typescript-eslint': typescript,
    },
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
  },
];
