module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/test/**",
    "!app.js",
    "!**/coverage/**",
    "!jest.config.js",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
};
