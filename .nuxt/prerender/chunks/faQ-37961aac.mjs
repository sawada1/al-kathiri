import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { u as useI18n, a as useHead } from './server.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './url-8b8d35cc.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
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
  __name: "faQ",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    let lang = ref(locale);
    ref(false);
    let url = getUrl();
    let theFaqs = ref([]);
    let pending = ref(true);
    const faQFunc = async () => {
      let faqs = await axios.get(`${url}/faqs`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (faqs.status == 200) {
        pending.value = false;
      }
      theFaqs.value = faqs.data.data;
    };
    faQFunc();
    useHead({
      title: lang.value == "ar" ? "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / faQ",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "width": "90%", "margin": "20px auto" })}"><div class="row theFaq gap-4"><div class="col-12 col-xl-3 col-lg-3 col-md-4"><h3${ssrRenderAttr("data-faq", _ctx.$t("FIND YOUR ANSWER"))}>${ssrInterpolate(_ctx.$t("FREQUENTLY ASK QUESTION"))}</h3></div><div class="col-12 col-xl-8 col-lg-8 col-md-7 d-flex flex-column gap-4"><div class="accordion d-flex flex-column gap-3" id="accordionExample"><!--[-->`);
      ssrRenderList(unref(theFaqs), (item, index) => {
        _push(`<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse${item.id}`)} aria-expanded="true" aria-controls="collapseOne"><span>${ssrInterpolate(item.question)}</span></button></h2><div${ssrRenderAttr("id", `collapse${item.id}`)} class="${ssrRenderClass([{ "show": index == 0 }, "accordion-collapse collapse"])}" data-bs-parent="#accordionExample"><div class="accordion-body">`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faQ.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faQ-37961aac.mjs.map
