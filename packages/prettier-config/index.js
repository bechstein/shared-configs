export default {
  overrides: [
    {
      files: ['*.ts', '*.js', '*.mjs', '.cjs'],
      options: {
        endOfLine: 'lf',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        printWidth: 120,
        trailingComma: 'es5',
        useTabs: false,
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
    {
      files: ['*.java'],
      options: {
        printWidth: 140,
        tabWidth: 4,
        useTabs: false,
        trailingComma: 'none',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'mdx',
      },
    },
  ],
};
