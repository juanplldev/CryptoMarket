module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Added
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true,
      }],
      // 'react-native-classname-to-style',
      // ['react-native-platform-specific-extensions', { extensions: ['css'] }],
    ],
  };
};
