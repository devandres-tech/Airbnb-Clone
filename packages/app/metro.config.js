const path = require('path');
let blacklist;
try {
  // >= 0.57
  blacklist = require('metro-config/src/defaults/blacklist');
} catch (e) {
  // <= 0.56
  blacklist = require('metro/src/blacklist');
}
const reactNativeLib = path.resolve(__dirname, '../../');

console.log("react native lib ", reactNativeLib);

module.exports = {
  watchFolders: [path.resolve(__dirname, 'node_modules'), reactNativeLib],
  nodeModules: path.join(__dirname, "../.."),
  resolver: {
    blacklistRE: blacklist([
      new RegExp(`${reactNativeLib}/node_modules/react-native/.*`),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

console.log("modules ", module.exports.watchFolders)
