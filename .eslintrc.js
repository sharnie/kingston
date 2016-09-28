module.exports = {
  "extends": "standard",
  "installedESLint": true,
  "plugins": [
    "standard",
    "promise",
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "comma-dangle": ["error", "always-multiline"],
  }
};
