const { shareAll, withModuleFederationPlugin, ModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: [
    {
      type: 'script',
      remoteEntry:
        'http://localhost:3000/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: 'Module',
      elementName: 'mfe1-element',
    }
  ],
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
