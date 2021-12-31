module.exports = {
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
