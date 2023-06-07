export const localeCodes = ["en","ar"]

export const localeMessages = {
  "en": [{ key: "../locales/en.json", load: () => import("../locales/en.json" /* webpackChunkName: "lang_en_json_en_json" */) }],
  "ar": [{ key: "../locales/ar.json", load: () => import("../locales/ar.json" /* webpackChunkName: "lang_ar_json_ar_json" */) }],
}

export const additionalMessages = Object({"en":[],"ar":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  nuxtI18nOptions.experimental = Object({"jsTsFormatResource":false})
  nuxtI18nOptions.precompile = Object({"strictMessage":true,"escapeHtml":false})
 const vueI18nConfigLoader = async (loader) => {
            const config = await loader().then(r => r.default || r)
            return typeof config === 'object'
              ? config
              : typeof config === 'function'
                ? await config()
                : {}
          }
  nuxtI18nOptions.vueI18n = Object({})
  nuxtI18nOptions.locales = [Object({"code":"en","iso":"en","dir":"ltr","name":"english","file":"en.json","hash":"b9fcf575","type":"static"}),Object({"code":"ar","iso":"ar","dir":"rtl","name":"عربي","file":"ar.json","hash":"4a1ec83a","type":"static"})]
  nuxtI18nOptions.defaultLocale = "ar"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_and_default"
  nuxtI18nOptions.lazy = true
  nuxtI18nOptions.langDir = "locales"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.types = "composition"
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({experimental: Object({"jsTsFormatResource":false}),precompile: Object({"strictMessage":true,"escapeHtml":false}),vueI18n: "",locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,types: "composition",debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","iso":"en","dir":"ltr","name":"english","file":"en.json","hash":"b9fcf575","type":"static"}),Object({"code":"ar","iso":"ar","dir":"rtl","name":"عربي","file":"ar.json","hash":"4a1ec83a","type":"static"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const NUXT_I18N_PRECOMPILE_ENDPOINT = "/__i18n__/precompile"
export const NUXT_I18N_PRECOMPILED_LOCALE_KEY = "i18n-locales"
export const NUXT_I18N_PRERENDERED_PATH = "/__i18n__/prerender"
export const NULL_HASH = "00000000"
export const isSSG = false
