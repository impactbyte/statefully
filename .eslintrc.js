module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["typescript"],
  parser: "typescript-eslint-parser",
  rules: {
    "typescript/adjacent-overload-signatures": "error",
    "typescript/class-name-casing": "error",
    "typescript/explicit-member-accessibility": "error",
    "typescript/generic-type-naming": "error",
    "typescript/interface-name-prefix": "error",
    "typescript/member-delimiter-style": "error",
    "typescript/member-naming": "error",
    "typescript/member-ordering": "error",
    "typescript/no-angle-bracket-type-assertion": "error",
    "typescript/no-array-constructor": "error",
    "typescript/no-empty-interface": "error",
    "typescript/no-inferrable-types": "error",
    "typescript/no-namespace": "error",
    "typescript/no-non-null-assertion": "error",
    "typescript/no-parameter-properties": "error",
    "typescript/no-triple-slash-reference": "error",
    "typescript/no-unused-vars": "error",
    "typescript/no-use-before-define": "error",
    "typescript/no-var-requires": "error",
    "typescript/prefer-namespace-keyword": "error",
    "typescript/type-annotation-spacing": "error",
  },
};
