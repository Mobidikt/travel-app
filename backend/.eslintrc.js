module.exports = {
    env: {
      es6: true,
      node: true,
    },
    extends: "eslint:recommended",
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    // parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    // plugins: [],
    rules: {
      "semi": "off",
      "no-console": "off",
      "linebreak-style": 0,
      "func-names":"off",
      "no-underscore-dangle": 0
      },
    settings: {},
  };