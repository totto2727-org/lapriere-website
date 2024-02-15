import eslintConfigPrettier from "eslint-config-prettier"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat()

export default [
  {
    ignores: ["**/dist/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...compat.extends("plugin:tailwindcss/recommended"),
  {
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  eslintConfigPrettier,
]
