import { _ as __nuxt_component_0 } from "./nuxt-link-28d4e889.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./privacyModal-640f8386.js";
import { u as useI18n, d as useRouter } from "../server.mjs";
import { u as useLocalePath } from "./composables-63b0a683.js";
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, isRef, useSSRContext } from "vue";
import { g as getUrl } from "./url-fc757438.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import axios from "axios";
import "ufo";
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
import "js-cookie";
import "is-https";
import "defu";
const _imports_0 = "" + __buildAssetsURL("logo.c9ab7cb7.svg");
const _imports_1 = "" + __buildAssetsURL("ar.406acbdb.svg");
const _imports_2 = "" + __buildAssetsURL("en.20b1032a.svg");
const _imports_3 = "data:image/png;base64,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";
const _imports_4 = "" + __buildAssetsURL("footer2.6db134cc.png");
const _imports_5 = "" + __buildAssetsURL("logo-footer.6afad4af.svg");
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { locales, locale, setLocale } = useI18n();
    const localePath = useLocalePath();
    ref(false);
    let langPic = ref("en");
    const currentLang = ref(locale);
    console.log(currentLang.value);
    let url = getUrl();
    let generalData = ref([]);
    let pending = ref(false);
    const generalFunc = async () => {
      pending.value = true;
      let general = await axios(`${url}/general`, {
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
    useRouter();
    let checkNav = ref(false);
    let navActive = ref(1);
    let checkfav = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_TermsModal = __nuxt_component_1;
      const _component_privacyModal = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav style="${ssrRenderStyle({ "padding": "20px 30px" })}" class="${ssrRenderClass([{ "active": unref(checkNav) }, "navbar navbar-expand-lg"])}"><div class="container">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="الكثيري للسيارات" class="navbar-brand"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "الكثيري للسيارات",
                class: "navbar-brand"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/"),
        class: ["nav-link", { "active": unref(navActive) == 1 }],
        "aria-current": "page"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/brands"),
        class: ["nav-link", { "active": unref(navActive) == 2 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("cars"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("cars")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/offers"),
        class: ["nav-link", { "active": unref(navActive) == 3 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("offers"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("offers")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/faQ"),
        class: ["nav-link", { "active": unref(navActive) == 4 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("faq"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("faq")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/about"),
        class: ["nav-link", { "active": unref(navActive) == 5 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("about us"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("about us")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/contact"),
        class: ["nav-link", { "active": unref(navActive) == 6 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("contact us"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("contact us")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="mainBook d-flex align-items-center text-center gap-5"><div class="icons d-flex align-items-center gap-3">`);
      if (unref(langPic) == "en") {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(langPic) == "ar") {
        _push(`<img${ssrRenderAttr("src", _imports_2)} alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/fav"),
        onClick: ($event) => isRef(checkfav) ? checkfav.value = true : checkfav = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="${ssrRenderClass([{ "fa-regular": !unref(checkfav), "fa-solid": unref(checkfav) }, "fa-heart"])}"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", {
                class: ["fa-heart", { "fa-regular": !unref(checkfav), "fa-solid": unref(checkfav) }]
              }, null, 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/brandcar")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-solid fa-magnifying-glass"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-solid fa-magnifying-glass" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="book">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/maintenance")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class=""${_scopeId}>${ssrInterpolate(_ctx.$t("book appointment"))}</button>`);
          } else {
            return [
              createVNode("button", { class: "" }, toDisplayString(_ctx.$t("book appointment")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="fw-bold">${ssrInterpolate(_ctx.$t("For Maintenance"))}</span></div></div></div></div></nav>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_TermsModal, null, null, _parent));
      _push(ssrRenderComponent(_component_privacyModal, null, null, _parent));
      _push(`<div class="footer"><div class="img-left"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="img-right"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="mainboxes position-relative row gap-5 justify-content-center align-items-center"><div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12"><img${ssrRenderAttr("src", _imports_4)} alt="الكثيري للسيارات"></div><div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12"><h4>${ssrInterpolate(_ctx.$t("Important Links"))}</h4><div class="links">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("home"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/brands")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("cars"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("cars")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/offers")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("offers"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("offers")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span style="${ssrRenderStyle({ "cursor": "pointer" })}">${ssrInterpolate(_ctx.$t("purchase"))}</span>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/faQ")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("faq"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("faq")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12"><div class="links">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("contact us"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("contact us")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/news")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("news"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("news")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/careers")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("careers"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("careers")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span type="button" data-bs-toggle="modal" data-bs-target="#termsModal">${ssrInterpolate(_ctx.$t("Term And Conditions"))}</span><span type="button" data-bs-toggle="modal" data-bs-target="#privacyModal">${ssrInterpolate(_ctx.$t("Privacy Policy"))}</span></div></div><div class="box theicons col-xl-3 col-lg-4 col-md-6 col-sm-12"><div class="icons"><a target="_blank"${ssrRenderAttr("href", unref(generalData).facebook_url)}><i class="fa-brands fa-facebook-f"></i></a><a target="_blank"${ssrRenderAttr("href", `https://wa.me/${unref(generalData).whatsapp}`)}><i class="fa-brands fa-whatsapp"></i></a><a target="_blank"${ssrRenderAttr("href", unref(generalData).instagram_url)}><i class="fa-brands fa-instagram"></i></a><a target="_blank"${ssrRenderAttr("href", unref(generalData).twitter_url)}><i class="fa-brands fa-twitter"></i></a></div>`);
      if (unref(pending)) {
        _push(`<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="book">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(localePath)("/maintenance")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("book appointment"))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("book appointment")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-2">${ssrInterpolate(_ctx.$t("For Maintenance"))}</p></div></div></div><div class="text"><span>© ${ssrInterpolate(_ctx.$t("AL KATHIRI MOTORS"))}, ${ssrInterpolate(_ctx.$t("All Rights Reserved"))}</span><p><span>${ssrInterpolate(_ctx.$t("Developed By"))}</span><a href="https://www.webstdy.com/ar" target="_blank" rel="noopener noreferrer"><img${ssrRenderAttr("src", _imports_5)} alt="webstdy"></a></p></div><i class="fa-solid fa-arrow-up" id="arrow-up"></i></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-5c8b7ccc.js.map
