// @ts-check

import angular from 'angular-eslint';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import pluginJest from 'eslint-plugin-jest';

export default tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintConfigPrettier,
    ],
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    rules: {
      '@typescript-eslint/no-extraneous-class': ['off'],
      '@angular-eslint/no-output-native': ['off'],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: ['app', 'cb'],
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['app', 'cb'],
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Component', 'Page', 'Tab'],
        },
      ],
    },
  },
  {
    files: ['*.js', '*.cjs', 'mjs'],
    extends: [eslint.configs.recommended, tseslint.configs.disableTypeChecked, eslintConfigPrettier],
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility, eslintConfigPrettier],
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    plugins: { jest: pluginJest },
    ...pluginJest.configs['flat/recommended'],
    ...pluginJest.configs['flat/style'],
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/dot-notation': 'off',
      ...pluginJest.configs['flat/recommended'].rules,
      ...pluginJest.configs['flat/style'].rules,
      'jest/expect-expect': 'error',
      'jest/unbound-method': 'error',
    },
  }
);
