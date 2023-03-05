// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: [
            "src/components/**/*.scss",
            "src/assests/*.scss",
            "src/pages/*.scss",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "dev/design",
        short_name: "devdesign",
        icon: "src/images/favicon-32x32.png",
        icons: [
          {
            src: "src/images/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/images/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-9TBCHW96QR", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
