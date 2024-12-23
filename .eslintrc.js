module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Désactiver les règles spécifiques
    '@typescript-eslint/no-unused-vars': ['warn', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      argsIgnorePattern: '^_'
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    '@next/next/no-img-element': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
