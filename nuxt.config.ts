

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
     defaultLocale:"ar"
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
            lang: 'ar ',
            dir: 'rtl'
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
             
            ],
                      script:[
                        {
                            src:'/bootstrap.bundle.min.js',
                          },
                           {
                              src:'/moment.min.js'
                          },
                          {
                            src:'/rome.standalone.min.js',
                          },
                          
                          {
                              src:'/rome.js'
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
