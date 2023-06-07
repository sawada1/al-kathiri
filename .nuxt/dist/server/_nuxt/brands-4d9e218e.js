import { u as useLocalePath } from "./composables-63b0a683.js";
import { u as useI18n, d as useRouter, a as useHead } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import { g as getUrl } from "./url-8b8d35cc.js";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
import "js-cookie";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "is-https";
import "defu";
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
      title: lang.value == "ar" ? "السيارات/الكثيري للسيارات" : "alkathiri motors / cars",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
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
export {
  _sfc_main as default
};
//# sourceMappingURL=brands-4d9e218e.js.map
