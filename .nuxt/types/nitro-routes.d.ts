// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__i18n__/precompile': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/i18n/dist/runtime/server/precompile').default>>>>
    }
    '/__i18n__/prerender/:hash': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/i18n/dist/runtime/server/dynamic').default>>>>
    }
  }
}
export {}