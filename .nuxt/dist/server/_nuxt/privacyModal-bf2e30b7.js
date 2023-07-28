import { g as getUrl } from "./useState-8b8d35cc.js";
import { u as useI18n } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import axios from "axios";
const _sfc_main$1 = {
  __name: "TermsModal",
  __ssrInlineRender: true,
  setup(__props) {
    let url = getUrl();
    const { locale } = useI18n();
    let currentLang = ref(locale);
    let pending = ref(true);
    let generalData = ref([]);
    const generalFunc = async () => {
      let general = await axios.get(`${url}/general`, {
        headers: {
          "Content-Language": `${currentLang.value}`
        }
      });
      if (general.status == 200) {
        pending.value = false;
      }
      generalData.value = general.data;
    };
    generalFunc();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal fade" id="termsModal" tabindex="-1" aria-labelledby="termsModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="exampleModalLabel">${ssrInterpolate(_ctx.$t("Term And Conditions"))}</h1></div><div class="modal-body"><p>${ssrInterpolate(unref(generalData).terms_and_conditions)}</p>`);
      if (unref(pending)) {
        _push(`<div class="spinner-border" role="status"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${ssrInterpolate(_ctx.$t("close"))}</button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TermsModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "privacyModal",
  __ssrInlineRender: true,
  setup(__props) {
    let url = getUrl();
    const { locale } = useI18n();
    let currentLang = ref(locale);
    let pending = ref(true);
    let generalData = ref([]);
    const generalFunc = async () => {
      let general = await axios.get(`${url}/general`, {
        headers: {
          "Content-Language": `${currentLang.value}`
        }
      });
      if (general.status == 200) {
        pending.value = false;
      }
      generalData.value = general.data;
    };
    generalFunc();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="exampleModalLabel">${ssrInterpolate(_ctx.$t("Privacy Policy"))}</h1></div><div class="modal-body"><p>${ssrInterpolate(unref(generalData).privacy_policy)}</p>`);
      if (unref(pending)) {
        _push(`<div class="spinner-border" role="status"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${ssrInterpolate(_ctx.$t("close"))}</button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/privacyModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;
export {
  __nuxt_component_1 as _,
  __nuxt_component_2 as a
};
//# sourceMappingURL=privacyModal-bf2e30b7.js.map
