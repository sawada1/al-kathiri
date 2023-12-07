export default defineNuxtConfig({
  modules: ["nuxt-swiper", "@nuxtjs/i18n"],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        name: "english",
        file: "en.json",
      },
      {
        code: "ar",
        iso: "ar",
        dir: "rtl",
        name: "عربي",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
  },

  ssr: true, //server side rendered enabled //When true
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  }, // and static, nuxt generates a hybrid static site

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },

      meta: [
        {
          name: "theme-color",
          content: "#1B395F",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity:
            "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        //              {
        //   rel: "stylesheet",
        //   href: "https://slider.rotanacarshowroom.com/revslider/public/assets/css/settings.css",
        //   type: "text/css",
        //   media: "all",
        // },
        // {
        //   rel: "stylesheet",
        //   href: "https://test-slider.webstdy.net/revslider/public/assets/css/settings.css",
        //   type: "text/css",
        //   media:"all"

        // }
      ],
      script: [
        
        {
          src: "/jquery.js",
        },
        // {
        //   innerHTML: `
        //   var $ = jQuery.noConflict();
        //   // let locale = "ar";
        //   // let imagesBasePath = "https://altamwean.com/public/storage/Images";
        // `,
        //   type: "text/javascript",
        // },
        // {
        //   src: "https://test-slider.webstdy.net/revslider/public/assets/js/jquery.themepunch.tools.min.js",
        // },
        // {
        //   src: "https://test-slider.webstdy.net/revslider/public/assets/js/jquery.themepunch.revolution.min.js",
        // },
        {
          src: "/bootstrap.bundle.min.js",
          async: true,
        },
        {
          src: "/lazy.js",
          async: true,
        },
      ],
    },
  },


  // plugins: [{src:'~/plugins/jquery-no-conflict.js'}],

  css: [
    "~/assets/css/bootstrap.css",
    "~/assets/rome/rome.css",
    "~/assets/style.css",
  ],
});
