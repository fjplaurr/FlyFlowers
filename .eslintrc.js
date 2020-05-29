module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  parser: "babel-eslint",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: "node_modules/",
  rules: {
    "no-unused-expressions": "off",
    "no-underscore-dangle": "off",
    "linebreak-style": 0,
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "jsx-a11y/label-has-for": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "react/jsx-props-no-spreading": [
      1,
      {
        custom: "ignore",
      },
    ],
    //Next is a workaround until there is a fix for: https://github.com/benmosher/eslint-plugin-import/issues/1558
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
      },
    ],
  },
};
