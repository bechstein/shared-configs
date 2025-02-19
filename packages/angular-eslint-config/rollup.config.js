export default {
  external: ['@eslint/js', 'angular-eslint', 'eslint', 'eslint-config-prettier', 'typescript', 'typescript-eslint'],
  input: 'index.js',
  output: {
    file: 'index.cjs',
    format: 'cjs',
    generatedCode: {
      constBindings: true,
      objectShorthand: true,
    },
  },
};
