module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/typescript/recommended", "@vue/prettier", "@vue/prettier/@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-namespace": "off",
    "vue/require-v-for-key": "off",
    "vue/max-len": [
      "error",
      {
        code: 160,
        template: 120,
        ignoreHTMLTextContents: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "prettier/prettier": [
      //   "off",

      "error",
      {
        htmlWhitespaceSensitivity: "ignore",
        "vue/require-v-for-key": false,
        printWidth: 120,
      },
    ],
  },
};
