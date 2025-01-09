import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';

export default {
  ...js.configs.all,
  ...eslintConfigPrettier,
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
};
