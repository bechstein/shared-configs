module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.js', '*.mjs', '.cjs'],
      options: {
        endOfLine: 'lf',
        printWidth: 120,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
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
        trailingComma: 'none',
        useTabs: false,
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
