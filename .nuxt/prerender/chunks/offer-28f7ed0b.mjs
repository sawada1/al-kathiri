import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { u as useI18n, b as useRoute, d as useRouter, a as useHead } from './server.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './url-8b8d35cc.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
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
        title: lang.value == "ar" ? `${theOffer.value.title}/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A` : `alkathiri motors / ${theOffer.value.title}`,
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

export { _sfc_main as default };
//# sourceMappingURL=offer-28f7ed0b.mjs.map
