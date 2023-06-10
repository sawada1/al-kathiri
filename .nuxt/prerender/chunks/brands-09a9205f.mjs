import { u as useLocalePath } from './composables-2717fe6a.mjs';
import { u as useI18n, d as useRouter, a as useHead } from './server.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './url-8b8d35cc.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import axios from 'file://F:/github/AlKathiri-Frontend/node_modules/axios/index.js';
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
  __name: "brands",
  __ssrInlineRender: true,
  setup(__props) {
    useLocalePath();
    const { locale } = useI18n();
    let lang = ref(locale);
    let url = getUrl();
    useRouter();
    let brandArray = ref([]);
    let pending = ref(false);
    const brandsFunc = async () => {
      pending.value = true;
      let brands = await axios.get(`${url}/brands`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (brands.status == 200) {
        pending.value = false;
      }
      brandArray.value = brands.data.data;
    };
    brandsFunc();
    useHead({
      title: lang.value == "ar" ? "\u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / cars"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="brands"><div class="head"><h3 class="fw-bolder"${ssrRenderAttr("data-brands", _ctx.$t("AUTHORIZED DISTRIBUTOR"))}>${ssrInterpolate(_ctx.$t("car brands"))}</h3></div><div class="container"><div class="boxes row d-flex justify-content-center gap-3 align-items-center"><!--[-->`);
      ssrRenderList(unref(brandArray), (box) => {
        _push(`<div class="box col-5 col-xl-1 col-lg-2" style="${ssrRenderStyle({ "cursor": "pointer" })}"><img${ssrRenderAttr("src", box.image)}${ssrRenderAttr("alt", box.name)}><span>${ssrInterpolate(box.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (unref(pending)) {
        _push(`<div class="mainLoader"><span class="loader"></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/brands.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=brands-09a9205f.mjs.map
