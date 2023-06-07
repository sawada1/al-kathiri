import { _ as __nuxt_component_0 } from "./nuxt-link-28d4e889.js";
import { u as useLocalePath } from "./composables-63b0a683.js";
import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { b as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./point-cec22af4.js";
import "ufo";
import "js-cookie";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "is-https";
import "defu";
const _sfc_main = {
  __name: "booked",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const route = useRoute();
    let id = route.query.id ? route.query.id : null;
    let time = route.query.time ? route.query.time : null;
    let date = route.query.date ? route.query.date : null;
    let city = route.query.city ? route.query.city : null;
    let branch = route.query.branch ? route.query.branch : null;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container bookPart d-flex flex-column gap-3 align-items-center justify-content-center"><img${ssrRenderAttr("src", _imports_0)} alt=""><h3>${ssrInterpolate(_ctx.$t("YOU BOOKED YOUR APPOINTMENT SUCCESSFULLY"))}</h3><p>visit id: `);
      if (unref(id)) {
        _push(`<span>${ssrInterpolate(unref(id))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><div class="d-flex gap-5"><div class="col"><p>${ssrInterpolate(_ctx.$t("date"))}: `);
      if (unref(date)) {
        _push(`<span>${ssrInterpolate(unref(date))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><p>${ssrInterpolate(_ctx.$t("time"))}: `);
      if (unref(time)) {
        _push(`<span>${ssrInterpolate(unref(time))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><span class="theline"></span><div class="col"><p>${ssrInterpolate(_ctx.$t("city"))}: `);
      if (unref(city)) {
        _push(`<span>${ssrInterpolate(unref(city))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><p>${ssrInterpolate(_ctx.$t("branch"))}: `);
      if (unref(branch)) {
        _push(`<span>${ssrInterpolate(unref(branch))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div></div><div class="btns d-flex align-items-center gap-3">`);
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
        to: unref(localePath)("/maintenance")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="back"${_scopeId}>${ssrInterpolate(_ctx.$t("back to another appointment"))}</button>`);
          } else {
            return [
              createVNode("button", { class: "back" }, toDisplayString(_ctx.$t("back to another appointment")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/booked.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=booked-e61e9374.js.map
