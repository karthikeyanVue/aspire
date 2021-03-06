module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/styles.scss";`,
      },
    },
  },
  pwa: {
    name: "My App",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "./public/service-worker.js",
      // ...other Workbox options...
    },
  },
};
