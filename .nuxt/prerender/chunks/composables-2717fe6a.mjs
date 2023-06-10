import { e as useLocalePath$1, d as useRouter, b as useRoute, g as getComposer, f as useNuxtApp } from './server.mjs';

function useLocalePath() {
  return useLocalePath$1({
    router: useRouter(),
    route: useRoute(),
    i18n: getComposer(useNuxtApp().$i18n)
  });
}

export { useLocalePath as u };
//# sourceMappingURL=composables-2717fe6a.mjs.map
