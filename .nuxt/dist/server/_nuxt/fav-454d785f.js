import { u as useI18n, d as useRouter, a as useHead } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "defu";
const _sfc_main = {
  __name: "fav",
  __ssrInlineRender: true,
  setup(__props) {
    const favState = null;
    console.log(favState);
    const { locale } = useI18n();
    useRouter();
    let currentLang = ref(locale);
    useHead({
      title: currentLang.value == "ar" ? "المفضلة / الكثيري للسيارات" : "alkathiri motors / favourite"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container favCars" style="${ssrRenderStyle({ "margin-top": "150px", "min-height": "75vh" })}"><h3 class="head"${ssrRenderAttr("data-fav", _ctx.$t("REACH YOUR CAR"))}>${ssrInterpolate(_ctx.$t("YOUR FAVORITE"))}</h3><div class="row justify-content-center gap-2 p-2"><!--[-->`);
      ssrRenderList(unref(favState), (car) => {
        _push(`<div style="${ssrRenderStyle({ "cursor": "pointer" })}" class="mainlatestbox col-xl-2 col-lg-2 col-md-4"><div class="image"><img${ssrRenderAttr("src", car.main_image)} loading="lazy" alt=""></div><h3>${ssrInterpolate(car.name)}</h3><div class="text1"><div class="price"><span>${ssrInterpolate(_ctx.$t("price"))}</span><h4>${ssrInterpolate(car.selling_price)}</h4></div><div class="after"><span>${ssrInterpolate(_ctx.$t("after vat"))}</span><h4>${ssrInterpolate(car.selling_price_after_vat == null ? 0 : car.selling_price_after_vat)}</h4></div></div><span class="detail">${ssrInterpolate(_ctx.$t("details"))} <i class="fa-solid fa-chevron-right"></i></span><div class="overlay"></div><i class="${ssrRenderClass([{ "fa-solid": car.is_in_favorite }, "fa-regular fa-heart fav"])}"></i></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(favState) == null) {
        _push(`<div class="d-flex my-4 align-items-center justify-content-center"><p class="text-primar fw-bold fs-2 my-5">${ssrInterpolate(_ctx.$t("No products on your favorites list!"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=fav-454d785f.js.map
