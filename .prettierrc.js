module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 160,
      },
    },
  ],
};
