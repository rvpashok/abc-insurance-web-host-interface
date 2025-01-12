// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = withModuleFederationPlugin({
//    name: 'web_mf_host',
//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },

//   // remotes: {
// //       //   'web-mf-insurance': 'http://localhost:4201/remoteEntry.js', // MFA remote entry
// //       // },

// //shareScope: 'insurance',  // Share scope name
//  // remoteType: 'window', // The type of the remote container  
//   exposes: {
//             './UserProfileResponse': './src/app/model/common-models.ts', // Expose model here
//             './testModule':'./src/app/shared.module.ts',
//             'UserProfileResponse': './src/app/model/common-models.ts', // Expose model here

//           },
//           // shared: {
//           //           '@angular/core': { singleton: true },
//           //           '@angular/common': { singleton: true },
//           //           'shared': { singleton: true }, // Share services, models
//           //         },
//         //  sharedMappings: ['shared'],

// });

const { ModuleFederationPlugin } = require("webpack").container;
const { shareAll, SharedMappings } = require('@angular-architects/module-federation/webpack');
const sharedMappings = new SharedMappings();

module.exports = {
  plugins: [
    sharedMappings.getPlugin(),
    new ModuleFederationPlugin({
      name: 'web_mf_host',
      // remotes: {
      //   'web-mf-insurance': 'http://localhost:4201/remoteEntry.js', // MFA remote entry
      // },
      exposes: {
        './UserProfileResponse': './src/app/model/common-models.ts', // Expose model here
      },
      // shared: {
      //   '@angular/core': { singleton: true },
      //   '@angular/common': { singleton: true },
      //   'shared': { singleton: true }, // Share services, models
      // },

        shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

    }),
  ],
};

