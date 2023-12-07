// @ts-nocheck


export const localeCodes = [
  "en",
  "ar"
]

export const localeMessages = { 
  "en": [
      { key: "../locales/en.json", load: () => import("../locales/en.json" /* webpackChunkName: "locale_F_58_F_58_al_kathiri_nuxt_locales_en_json" */), cache: true },
  ],
  "ar": [
      { key: "../locales/ar.json", load: () => import("../locales/ar.json" /* webpackChunkName: "locale_F_58_F_58_al_kathiri_nuxt_locales_ar_json" */), cache: true },
  ],
}

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = {
  "experimental": {
    "jsTsFormatResource": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "iso": "en",
      "dir": "ltr",
      "name": "english",
      "files": [
        "locales/en.json"
      ]
    },
    {
      "code": "ar",
      "iso": "ar",
      "dir": "rtl",
      "name": "عربي",
      "files": [
        "locales/ar.json"
      ]
    }
  ],
  "defaultLocale": "ar",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_and_default",
  "lazy": true,
  "langDir": "locales",
  "rootRedirect": null,
  "detectBrowserLanguage": false,
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}
  
  const vueI18nConfigLoader = async loader => {
    const config = await loader().then(r => r.default || r)
    if (typeof config === 'object') return config
    if (typeof config === 'function') return await config()
    return {}
  }

  const deepCopy = (src, des, predicate) => {
    for (const key in src) {
      if (typeof src[key] === 'object') {
        if (!(typeof des[key] === 'object')) des[key] = {}
        deepCopy(src[key], des[key], predicate)
      } else {
        if (predicate) {
          if (predicate(src[key], des[key])) {
            des[key] = src[key]
          }
        } else {
          des[key] = src[key]
        }
      }
    }
  }
  
  const mergeVueI18nConfigs = async (loader) => {
    const layerConfig = await vueI18nConfigLoader(loader)
    const cfg = layerConfig || {}
    
    for (const [k, v] of Object.entries(cfg)) {
      if(nuxtI18nOptions.vueI18n?.[k] === undefined || typeof nuxtI18nOptions.vueI18n?.[k] !== 'object') {
        nuxtI18nOptions.vueI18n[k] = v
      } else {
        deepCopy(v, nuxtI18nOptions.vueI18n[k])
      }
    }
  }

  nuxtI18nOptions.vueI18n = { messages: {} }
  
    
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = {
  "experimental": {
    "jsTsFormatResource": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": null,
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false
}

export const nuxtI18nInternalOptions = {
  "__normalizedLocales": [
    {
      "code": "en",
      "iso": "en",
      "dir": "ltr",
      "name": "english",
      "files": [
        {
          "path": "locales/en.json"
        }
      ]
    },
    {
      "code": "ar",
      "iso": "ar",
      "dir": "rtl",
      "name": "عربي",
      "files": [
        {
          "path": "locales/ar.json"
        }
      ]
    }
  ]
}
 
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
