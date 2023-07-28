import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { u as useLocalePath } from './composables-2717fe6a.mjs';
import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './point-cec22af4.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ofetch/dist/node.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/hookable/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unctx/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unhead/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/h3/dist/index.mjs';
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
  __name: "submited",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "margin-top": "150px" })}" class="container bookPart d-flex flex-column gap-3 align-items-center justify-content-center"><img${ssrRenderAttr("src", _imports_0)} alt=""><h3>${ssrInterpolate(_ctx.$t("YOUR APPLICATION SUBMITTED SUCCESSFULLY"))}</h3><p>${ssrInterpolate(_ctx.$t("We will contact you as soon as possible"))}</p><div class="btns d-flex align-items-center gap-3">`);
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

export { _sfc_main as default };
//# sourceMappingURL=submited-1b2ffe4b.mjs.map
