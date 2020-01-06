module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    },
  },
  /* chainWebpack: (config) => {
    config.plugin('workbox');
  }, */
  // https://naturaily.com/blog/pwa-vue-cli-3

};
