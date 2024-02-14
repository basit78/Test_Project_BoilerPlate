module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "react-native-reanimated/plugin",
      {
        relativeSourceLocation: true,
      },
    ],
    [
      "module-resolver",
      {
        alias: {
          src: "./src",
        },
      },
    ],
  ],
};
