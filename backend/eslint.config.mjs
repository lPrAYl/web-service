import baseConfig from '../eslint.config.js'

export default [
  ...baseConfig,

  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.mjs'],
  },
]
