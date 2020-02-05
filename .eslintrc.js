module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        htmlWhitespaceSensitivity: "ignore",
        vueIndentScriptAndStyle: true,
        indentHandlebars: true,
        quiet: true,
        endOfLine: "auto",
        wordWrap: "on"
      }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/*/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
