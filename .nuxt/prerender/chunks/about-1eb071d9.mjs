import { b as buildAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { g as getUrl } from './useState-8b8d35cc.mjs';
import { u as useI18n, a as useHead } from './server.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_1, a as _imports_8, b as _imports_9, c as _imports_10 } from './box3-7eec1162.mjs';
import axios from 'file://F:/github/AlKathiri-Frontend/node_modules/axios/index.js';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/h3/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ufo/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ofetch/dist/node.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/destr/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/hookable/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/scule/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/defu/dist/defu.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ohash/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unstorage/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/radix3/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/bundle-utils/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/pathe/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unctx/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unhead/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/cookie-es/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/is-https/dist/index.mjs';

const _imports_0 = "" + buildAssetsURL("aboutUs.83481f85.png");
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
      title: lang.value == "ar" ? "\u0645\u0646 \u0646\u062D\u0646/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / about us"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="about-us" style="${ssrRenderStyle({ "margin-top": "150px" })}"><div class="row"><div class="col-12 col-xl-5 col-lg-5 col-md-5"><img class="first"${ssrRenderAttr("src", _imports_0)} alt="about us image"></div><div class="col-12 col-xl-7 col-lg-7 col-md-7 px-5"><div class="d-flex flex-column align-items-center gap-3"><h3 class=""${ssrRenderAttr("data-about-us", _ctx.$t("NOW MORE ABOUT US"))}>${ssrInterpolate(_ctx.$t("WELCOME TO AL KATIRI MOTORS"))}</h3>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div><div class="about-play"><div class="image"><iframe${ssrRenderAttr("src", `https://www.youtube.com/embed/${unref(aboutData).about_us_video_url}`)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe><div class="overlay"><i class="fa-regular fa-circle-play"></i></div></div><img class="backpic"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="why-choose"><div class="head"><h3 class="fw-bolder my-5"${ssrRenderAttr("data-why", _ctx.$t("AL KATHIRI MOTORS"))}>${ssrInterpolate(_ctx.$t("why choose us"))}</h3></div><div class="main mb-5 position-relative"><div class="boxes row d-flex justify-content-center gap-5"><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_8)} loading="lazy" alt="why-choose"><div class="text">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
      if (_ctx.generalSpinner) {
        _push(`<div class="text-center"><div class="spinner-border" role="status"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_9)} loading="lazy" alt="why-choose"><div class="text">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
      if (_ctx.generalSpinner) {
        _push(`<div class="text-center"><div class="spinner-border" role="status"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_10)} loading="lazy" alt="why-choose"><div class="text">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
      if (_ctx.generalSpinner) {
        _push(`<div class="text-center"><div class="spinner-border" role="status"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=about-1eb071d9.mjs.map
