import { u as useI18n, d as useRouter, a as useHead } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { u as useLocalePath } from "./composables-63b0a683.js";
import { g as getUrl } from "./url-fc757438.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
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
import "js-cookie";
import "is-https";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    let lang = ref(locale);
    useRouter();
    let pending = ref(true);
    let offersArr = ref([]);
    useLocalePath();
    let url = getUrl();
    const offersFunc = async () => {
      pending.value = true;
      let offers = await axios.get(`${url}/offers`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      offersArr.value = offers.data.data;
      if (offers.status == 200) {
        pending.value = false;
      }
      console.log(offers);
    };
    offersFunc();
    useHead({
      title: lang.value == "ar" ? "العروض/الكثيري للسيارات" : "alkathiri motors / offers",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(pending)) {
        _push(`<div class="offersCars my-5"><div class="container"><div class="head"><h3${ssrRenderAttr("data-offers", _ctx.$t("GET our"))}>${ssrInterpolate(_ctx.$t("SPATIAL OFFERS"))}</h3></div><div class="row offers px-2 justify-content-around gap-2"><!--[-->`);
        ssrRenderList(unref(offersArr), (box) => {
          _push(`<div style="${ssrRenderStyle({ "cursor": "pointer" })}" class="offer col-xl-3 col-lg-3 col-sm-5 col-md-4 d-flex gap-3 flex-column justify-content-between"><img${ssrRenderAttr("src", box.image)}${ssrRenderAttr("alt", box.title)}><h5 class="fw-bolder">${ssrInterpolate(box.title)}</h5></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-2a5cbe59.js.map
