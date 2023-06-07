import { g as useLocalePath$1, d as useRouter, b as useRoute, h as getComposer, e as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
import "devalue";
import "klona";
import "js-cookie";
function useLocalePath() {
  return useLocalePath$1({
    router: useRouter(),
    route: useRoute(),
    i18n: getComposer(useNuxtApp().$i18n)
  });
}
export {
  useLocalePath as u
};
//# sourceMappingURL=composables-63b0a683.js.map
