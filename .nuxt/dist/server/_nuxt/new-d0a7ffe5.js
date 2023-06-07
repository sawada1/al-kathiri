import { _ as __nuxt_component_0 } from "./client-only-29ef7f45.js";
import { g as getUrl } from "./url-8b8d35cc.js";
import { u as useI18n, d as useRouter, b as useRoute, a as useHead } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./time-72384467.js";
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
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    let url = getUrl();
    const { locale } = useI18n();
    let lang = ref(locale);
    let pending = ref(false);
    useRouter();
    const MainRoute = useRoute();
    let id = MainRoute.query.id;
    let theproduct = ref([]);
    const productNews = async () => {
      pending.value = true;
      const product = await axios(`${url}/news/${id}`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (product.status == 200) {
        pending.value = false;
      }
      theproduct.value = product.data.data;
      useHead({
        title: lang.value == "ar" ? `${theproduct.value.title}/ الكثيري للسيارات` : `alkathiri motors / ${theproduct.value.title}`,
        meta: [
          { name: "description", content: theproduct.value.description }
        ]
      });
    };
    productNews();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container thelatestcar"><div class="thebox"><img class="bigpic"${ssrRenderAttr("src", unref(theproduct).cover_image)}${ssrRenderAttr("alt", unref(theproduct).title)}><div class="title w-100"><h5>${ssrInterpolate(unref(theproduct).title)}</h5><div class="icons"><div class="icon"><img${ssrRenderAttr("src", _imports_0)} alt=""><span>${ssrInterpolate(_ctx.$t("tag name"))}</span></div><div class="icon"><img${ssrRenderAttr("src", _imports_1)} alt=""><span>${ssrInterpolate(unref(theproduct).created_at)}</span></div></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=new-d0a7ffe5.js.map
