module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
  ? '/vue_pwa/dist/'
  : '/',

  pwa: {
      workboxPluginMode: "InjectManifest",
      workboxOptions: {
          swSrc: "src/service-worker.js"
      }
  }
};