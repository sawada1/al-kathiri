import { u as useI18n, d as useRouter, a as useHead } from './server.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ofetch/dist/node.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/hookable/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unctx/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unhead/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/h3/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ufo/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/cookie-es/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/is-https/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/defu/dist/defu.mjs';
import './nitro-prerenderer.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/destr/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/scule/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ohash/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unstorage/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/radix3/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/bundle-utils/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  __name: "fav",
  __ssrInlineRender: true,
  setup(__props) {
    const favState = null;
    console.log(favState);
    const { locale } = useI18n();
    useRouter();
    let currentLang = ref(locale);
    useHead({
      title: currentLang.value == "ar" ? "\u0627\u0644\u0645\u0641\u0636\u0644\u0629 / \u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / favourite",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container favCars"><h3 class="head"${ssrRenderAttr("data-fav", _ctx.$t("REACH YOUR CAR"))}>${ssrInterpolate(_ctx.$t("YOUR FAVORITE"))}</h3><div class="row justify-content-center gap-2 p-2"><!--[-->`);
      ssrRenderList(unref(favState), (car) => {
        _push(`<div style="${ssrRenderStyle({ "cursor": "pointer" })}" class="mainlatestbox col-xl-2 col-lg-2 col-md-4"><div class="image"><img${ssrRenderAttr("src", car.main_image)} loading="lazy" alt=""></div><h3>${ssrInterpolate(car.name)}</h3><div class="text1"><div class="price"><span>${ssrInterpolate(_ctx.$t("price"))}</span><h4>${ssrInterpolate(car.selling_price)}</h4></div><div class="after"><span>${ssrInterpolate(_ctx.$t("after vat"))}</span><h4>${ssrInterpolate(car.selling_price_after_vat == null ? 0 : car.selling_price_after_vat)}</h4></div></div><span class="detail">${ssrInterpolate(_ctx.$t("details"))} <i class="fa-solid fa-chevron-right"></i></span><div class="overlay"></div><i class="${ssrRenderClass([{ "fa-solid": car.is_in_favorite }, "fa-regular fa-heart fav"])}"></i></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(favState) == null) {
        _push(`<div class="d-flex my-4 align-items-center justify-content-center"><p class="text-danger fw-bold fs-2 my-5">${ssrInterpolate(_ctx.$t("This Cart Is Empty"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=fav-eb89d6a1.mjs.map
