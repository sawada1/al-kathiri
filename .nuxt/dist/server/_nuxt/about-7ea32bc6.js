import { _ as __nuxt_component_0 } from "./client-only-29ef7f45.js";
import { g as getUrl } from "./url-8b8d35cc.js";
import { u as useI18n, a as useHead } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_6, b as _imports_7, c as _imports_8 } from "./box3-54fbe1e7.js";
import axios from "axios";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "devalue";
import "klona";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "defu";
const _imports_0 = "" + __buildAssetsURL("aboutUs.83481f85.png");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    let url = getUrl();
    const { locale } = useI18n();
    let lang = ref(locale);
    let aboutData = ref([]);
    let pending = ref(true);
    const general = async () => {
      let generalAbout = await axios.get(`${url}/general`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (generalAbout.status == 200) {
        pending.value = false;
      }
      aboutData.value = generalAbout.data;
    };
    general();
    useHead({
      title: lang.value == "ar" ? "من نحن/الكثيري للسيارات" : "alkathiri motors / about us"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="about-us"><div class="row"><div class="col-12 col-xl-5 col-lg-5 col-md-5"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="col-12 col-xl-7 col-lg-7 col-md-7 px-5"><div class="d-flex flex-column align-items-center gap-3"><h3 class=""${ssrRenderAttr("data-about-us", _ctx.$t("NOW MORE ABOUT US"))}>${ssrInterpolate(_ctx.$t("WELCOME TO AL KATIRI MOTORS"))}</h3>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div><div class="about-play"><div class="image"><iframe${ssrRenderAttr("src", `https://www.youtube.com/embed/${unref(aboutData).about_us_video_url}`)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe><div class="overlay"><i class="fa-regular fa-circle-play"></i></div></div><img class="backpic"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="why-choose"><div class="head"><h3 class="fw-bolder"${ssrRenderAttr("data-why", _ctx.$t("AL KATHIRI MOTORS"))}>${ssrInterpolate(_ctx.$t("why choose us"))}</h3></div><div class="main mb-5 position-relative"><div class="boxes row d-flex align-items-center justify-content-center gap-5"><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_6)} alt=""><div class="text">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_7)} alt=""><div class="text">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_8)} alt=""><div class="text">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-7ea32bc6.js.map
