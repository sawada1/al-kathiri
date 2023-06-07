import { _ as __nuxt_component_0 } from "./nuxt-link-28d4e889.js";
import { u as useLocalePath } from "./composables-63b0a683.js";
import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./point-cec22af4.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
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
  __name: "submited",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container bookPart d-flex flex-column gap-3 align-items-center justify-content-center"><img${ssrRenderAttr("src", _imports_0)} alt=""><h3>${ssrInterpolate(_ctx.$t("YOUR APPLICATION SUBMITTED SUCCESSFULLY"))}</h3><p>${ssrInterpolate(_ctx.$t("We will contact you as soon as possible"))}</p><div class="btns d-flex align-items-center gap-3">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>${ssrInterpolate(_ctx.$t("back to home"))}</button>`);
          } else {
            return [
              createVNode("button", null, toDisplayString(_ctx.$t("back to home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/career")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="back"${_scopeId}>${ssrInterpolate(_ctx.$t("Explore more opportunities"))}</button>`);
          } else {
            return [
              createVNode("button", { class: "back" }, toDisplayString(_ctx.$t("Explore more opportunities")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/submited.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=submited-ebd9ae90.js.map
