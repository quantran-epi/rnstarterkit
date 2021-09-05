module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
            "@abstract": "./src/abstract",
            "@assets": "./src/assets",
            "@modules": "./src/modules",
            "@services": "./src/services",
            "@navigation": "./src/navigation",
            "@widgets": "./src/widgets",
            "@components": "./src/shared/components",
            "@styles": "./src/shared/styles",
            "@utils": "./src/shared/utils",
            "@hooks": "./src/shared/hooks",
        }
      }
    ],
  ]
};