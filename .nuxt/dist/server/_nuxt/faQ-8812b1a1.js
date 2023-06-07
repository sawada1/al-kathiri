import { _ as __nuxt_component_0 } from "./client-only-29ef7f45.js";
import { u as useI18n, a as useHead } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import { g as getUrl } from "./url-fc757438.js";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
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
      title: lang.value == "ar" ? "الأسئلة الشائعة/الكثيري للسيارات" : "alkathiri motors / faQ",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=faQ-8812b1a1.js.map
