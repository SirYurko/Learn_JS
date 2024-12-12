import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Ігнорувати невикористовувані змінні, якщо вони починаються з підкреслення
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    },
  },
  pluginJs.configs.recommended,
];