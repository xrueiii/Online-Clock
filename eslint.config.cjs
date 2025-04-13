// eslint.config.cjs
module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        document: true,
        setInterval: true,
        clearInterval: true,
        window: true
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'semi': ['warn', 'always'],
    },
  }
];
