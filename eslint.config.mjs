import antfu from '@antfu/eslint-config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: true,
    astro: true,
    formatters: {
      options: {
        prettierOptions: {
          arrowParens: 'avoid',
        },
      },
    },
    typescript: {
      overrides: {
        'ts/consistent-type-imports': ['error', {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
        }],
      },
    },
  },
  {
    ignores: ['**/dist/**', '**/.history/**'],
  },
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      // 重複の無効化
      'import/order': 'off',
      'sort-imports': 'off',
    },
  },
)
