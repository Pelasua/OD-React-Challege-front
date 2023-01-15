module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'react-app/jest'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^@?\\w'],

              ['^(@|components)(/.*|$)'],

              ['^\\u0000'],

              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

              ['^.+\\.?(css)$']
            ]
          }
        ],
        'newline-after-var': ['error', 'always'],
        'import/newline-after-import': ['error', { count: 1 }]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
