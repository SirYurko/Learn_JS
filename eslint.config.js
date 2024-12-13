import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
       globals: {...globals.browser, ...globals.node},
    }
  },
  pluginJs.configs.recommended,
  {
    files: ['scriptsFolder/Libraries/Mocha & Chai/**/*.js'], // Шлях до тестових файлів
    rules: {
      'no-undef': 'off', // Вимкнути правило no-undef для файлів
      'no-unused-vars': 'off', // Вимкнути правило no-unused-vars для цих файлів
      'quotes': ["error", "single"],
    },
  },
];