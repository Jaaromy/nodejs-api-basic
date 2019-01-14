module.exports = {
  clearMocks: true,
  collectCoverage: true,
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
