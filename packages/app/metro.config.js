// const blacklist = require("metro-config/src/defaults/blacklist");
// const getWorkspaces = require("get-yarn-workspaces");
// const path = require("path");

// function getConfig(from, options = {}) {
//   const workspaces = getWorkspaces(from);
//   console.log("from is ", from)

//   function getProjectRoots() {
//     return [
//       // Keep your project directory.
//       path.resolve(from),

//       // Include your forked package as a new root.
//       options.nodeModules || path.resolve(from, "..", "node_modules")
//     ].concat(workspaces);
//   }

//   const config = {
//     watchFolders: getProjectRoots(),
//     resolver: {
//       blacklistRE: blacklist(
//         workspaces.map(
//           workspacePath =>
//             `/${workspacePath.replace(
//               /\//g,
//               '[/\\\\]'
//             )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`
//         )
//       ),
//       extraNodeModules: {
//         "react-native": path.resolve(from, "node_modules/react-native")
//       }
//     }
//   };
//   console.log('CONfig', config.resolver)
//   return config;
// };

// module.exports = getConfig(__dirname);
// const getConfig = require('metro-config/src/defaults');
// module.exports = getConfig(__dirname)

const path = require('path');
let blacklist;
try {
  // >= 0.57
  blacklist = require('metro-config/src/defaults/blacklist');
} catch (e) {
  // <= 0.56
  blacklist = require('metro/src/blacklist');
}
const reactNativeLib = path.resolve(__dirname, '..');

module.exports = {
  watchFolders: [path.resolve(__dirname, 'node_modules'), reactNativeLib],
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