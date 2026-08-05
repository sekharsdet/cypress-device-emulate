const js = require('@eslint/js')
const tseslint = require('typescript-eslint')
const cypress = require('eslint-plugin-cypress')
const prettier = require('eslint-config-prettier')

const tsFiles = ['src/**/*.ts']

module.exports = [
  {
    ignores: ['dist/**', 'node_modules/**', 'example-site/**', 'cypress/videos/**', 'cypress/screenshots/**'],
  },
  { ...js.configs.recommended, files: tsFiles },
  ...tseslint.configs.recommended.map((config) => ({ ...config, files: tsFiles })),
  {
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // `declare global { namespace Cypress { ... } }` is the documented pattern
      // for augmenting Cypress's own Chainable interface with custom commands —
      // there is no ES2015-module equivalent for extending a third-party global
      // namespace, so this rule doesn't apply here.
      '@typescript-eslint/no-namespace': 'off',
    },
  },
  {
    files: ['cypress.config.js', 'eslint.config.js', 'example-site/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      sourceType: 'module',
    },
  },
  {
    files: ['cypress/**/*.cy.js'],
    ...cypress.configs.recommended,
    rules: {
      ...cypress.configs.recommended.rules,
      // cypress/demo/record.cy.js uses cy.wait(ms) deliberately, to pace a
      // screen recording for the README GIF — not a flaky-test smell there.
      'cypress/no-unnecessary-waiting': 'off',
    },
  },
  prettier,
]
