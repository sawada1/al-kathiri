

export default defineNuxtConfig({
  modules: [
    'nuxt-swiper',
    '@nuxtjs/i18n',
  ],
   i18n: {
     lazy: true,
     langDir: "locales",
     strategy: "prefix_and_default",
     locales: [
       {
         code: "en",
         iso: 'en',
         dir:'ltr',
         name: "english",
         file: "en.json",
       },
       {
         code: "ar",
         iso: 'ar',
         dir:'rtl',
         name: "عربي",
         file: "ar.json",
       },

     ],
     defaultLocale:"en"
  },
  ssr: true, //server side rendered enabled //When true
  nitro: {
    prerender: {
      crawlLinks: true
    }
  }, // and static, nuxt generates a hybrid static site
 
    app: {
      // baseURL: "/al-kathiri/",
      head: {
          htmlAttrs:{
            lang: 'en',
            dir: 'ltr'
          },
            meta: [
              {
                name: "theme-color",
              content:"#1B395F"  
             }
            ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/logo.png' },
                {
                        rel: 'stylesheet',
                        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
                        integrity: "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
                        crossorigin: 'anonymous',
                        referrerpolicy:'no-referrer'
                },
                {
                        rel: 'stylesheet',
                        href: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css',
                },
            ],
                      script:[
                        {
                            src:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
                            integrity:'sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe',
                            crossorigin:"anonymous",
                          },
                          {
                            src:'https://cdn.jsdelivr.net/npm/sweetalert2@11'
                        },
                           {
                              src:'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js'
                          },
                          {
                            src:'https://cdnjs.cloudflare.com/ajax/libs/rome/3.0.2/rome.standalone.min.js',
                          },
                          
                          {
                              src:'https://cdnjs.cloudflare.com/ajax/libs/rome/3.0.2/rome.js'
                          },
                         

                       ],     

     }
  },
    
    css: [
       '~/assets/css/bootstrap.css',
       '~/assets/rome/rome.css',
        '~/assets/style.css',
  ],
 
})
