import { _ as __nuxt_component_0 } from "./client-only-29ef7f45.js";
import { u as useI18n, b as useRoute, d as useRouter, a as useHead } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { g as getUrl } from "./url-fc757438.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
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
  __name: "offer",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    let lang = ref(locale);
    const MainRoute = useRoute();
    useRouter();
    let id = MainRoute.query.id;
    let url = getUrl();
    let pending = ref(false);
    let theOffer = ref([]);
    let offersCar = ref([]);
    const offerFanc = async () => {
      pending.value = true;
      let box = await axios.get(`${url}/offers/${id}`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (box.status == 200) {
        pending.value = false;
      }
      theOffer.value = box.data.offer;
      offersCar.value = box.data.offer_cars;
      useHead({
        title: lang.value == "ar" ? `${theOffer.value.title}/الكثيري للسيارات` : `alkathiri motors / ${theOffer.value.title}`,
        meta: [
          { name: "description", content: theOffer.value.description }
        ]
      });
    };
    offerFanc();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(pending)) {
        _push(`<div class="theOffer mt-5"><div class="container"><div class="containe px-3"><img${ssrRenderAttr("src", unref(theOffer).image)} class="w-100"${ssrRenderAttr("alt", unref(theOffer).title)}><h3 class="my-3 fw-bolder thehead">${ssrInterpolate(unref(theOffer).title)}</h3>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div><div class="includedOffers"><h3 class="fw-bolder pt-3 thehead">${ssrInterpolate(_ctx.$t("Vehicles Included In The Offer"))}</h3><div class="row justify-content-center gap-1"><!--[-->`);
        ssrRenderList(unref(offersCar), (offer) => {
          _push(`<div style="${ssrRenderStyle({ "cursor": "pointer" })}" class="mainlatestbox col-xl-2 col-lg-2 col-md-4"><div class="image"><img${ssrRenderAttr("src", offer.main_image)}${ssrRenderAttr("alt", offer.name)}></div><h3>${ssrInterpolate(offer.name)}</h3><div class="text1"><div class="price"><span>${ssrInterpolate(_ctx.$t("price"))}</span><h4>${ssrInterpolate(offer.selling_price)} SAR</h4></div><div class="after"><span>${ssrInterpolate(_ctx.$t("after vat"))}</span><h4>${ssrInterpolate(offer.selling_price_after_vat)} SAR</h4></div></div><span class="detail">${ssrInterpolate(_ctx.$t("details"))} <i class="fa-solid fa-chevron-right"></i></span><div class="overlay"></div><i class="fa-regular fa-heart fav"></i></div>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=offer-78a52dae.js.map
