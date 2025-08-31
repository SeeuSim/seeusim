import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ...pluginImport.flatConfigs.recommended,
    rules: {
      ...pluginImport.flatConfigs.recommended.rules,
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node
            'external', // external
            'internal', // internal path alias
            ['parent', 'sibling', 'index'], // relative imports
            'object', // import * as React from 'react';
            'type',
          ],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': [
        'error',
        {
          ignore: [
            '^@react-router/.*', // react-router packages
          ],
        },
      ],
    },
  },
]);
