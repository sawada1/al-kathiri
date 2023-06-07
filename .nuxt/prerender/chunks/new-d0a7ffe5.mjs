import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { g as getUrl } from './url-8b8d35cc.mjs';
import { u as useI18n, d as useRouter, b as useRoute, a as useHead } from './server.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_1 } from './time-72384467.mjs';
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
import './renderer.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';

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
        title: lang.value == "ar" ? `${theproduct.value.title}/ \u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A` : `alkathiri motors / ${theproduct.value.title}`,
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

export { _sfc_main as default };
//# sourceMappingURL=new-d0a7ffe5.mjs.map
