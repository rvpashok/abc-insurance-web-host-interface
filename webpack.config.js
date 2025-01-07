const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // remotes: {
  //   //"mfe1": "http://localhost:3000/remoteEntry.js",    
  //   //"poc-app": "http://localhost:5201/remoteEntry.js"
  // },
  
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
