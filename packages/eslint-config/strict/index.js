// @ts-check

const eslint = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier
);
