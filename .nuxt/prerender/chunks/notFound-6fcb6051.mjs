import { b as buildAssetsURL } from './renderer.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './useState-8b8d35cc.mjs';
import { u as useI18n } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import axios from 'file://F:/github/AlKathiri-Frontend/node_modules/axios/index.js';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/h3/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ufo/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ofetch/dist/node.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/destr/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/hookable/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/scule/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/defu/dist/defu.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ohash/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unstorage/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/radix3/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/bundle-utils/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/pathe/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unctx/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unhead/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/cookie-es/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/is-https/dist/index.mjs';

const _imports_0 = "" + buildAssetsURL("notfound.a3289856.svg");
const _sfc_main = {
  __name: "notFound",
  __ssrInlineRender: true,
  setup(__props) {
    let cites = ref([]);
    let url = getUrl();
    const { locale } = useI18n();
    let lang = ref(locale);
    let spinner = ref(false);
    let mainObj = ref({
      name: null,
      phone: null,
      car_name: null,
      city_id: null
    });
    const getCites = async () => {
      let result = await axios.get(`${url}/make-appointment-form-data`);
      cites.value = result.data.cities;
    };
    getCites();
    let nameError = ref(null);
    let phoneError = ref(null);
    let carNameError = ref(null);
    let cityError = ref(null);
    let completed = ref("Request completed successfully");
    let success = ref("success");
    if (lang.value == "ar") {
      completed.value = "\u062A\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D";
      success.value = "\u0646\u062C\u0627\u062D";
    } else if (lang.value == "en") {
      completed.value = "Request completed successfully";
      success.value = "success";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container notFoundPage"><div class="row image"><div class="col-12 col-xl-5 col-lg-5 col-md-4 text"><h3>${ssrInterpolate(_ctx.$t("Didn't Find Your Car?"))}</h3><h3>${ssrInterpolate(_ctx.$t("We Can Provide It For You."))}</h3><p>${ssrInterpolate(_ctx.$t("fill the info"))}</p></div><img class="col-12 col-xl-5 col-lg-5 col-md-5"${ssrRenderAttr("src", _imports_0)} alt=""></div><form action="" class="mt-5"><div class="row"><div class="col-12 col-xl-6 col-lg-6 col-md-5 my-2 inp"><label for="">${ssrInterpolate(_ctx.$t("full name"))} *</label><input type="text"${ssrRenderAttr("value", unref(mainObj).name)}${ssrRenderAttr("placeholder", _ctx.$t("write your name.."))}>`);
      if (unref(nameError)) {
        _push(`<span class="errorMessage text-danger fw-bold">${ssrInterpolate(unref(nameError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-12 col-xl-6 col-lg-6 col-md-5 my-2 inp"><label for="">${ssrInterpolate(_ctx.$t("mobile number"))} *</label><input type="text"${ssrRenderAttr("value", unref(mainObj).phone)} placeholder="0xxxxxxxx">`);
      if (unref(phoneError)) {
        _push(`<span class="errorMessage text-danger fw-bold">${ssrInterpolate(unref(phoneError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row"><div class="col-12 col-xl-6 col-lg-6 col-md-5 my-2 inp"><label for="">${ssrInterpolate(_ctx.$t("city"))} *</label><select name="" id="" class="w-100"><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("Choose your city"))}</option><!--[-->`);
      ssrRenderList(unref(cites), (city) => {
        _push(`<option${ssrRenderAttr("value", city.id)}>${ssrInterpolate(city.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(cityError)) {
        _push(`<span class="errorMessage text-danger fw-bold">${ssrInterpolate(unref(cityError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-12 col-xl-6 col-lg-6 col-md-5 my-2 inp"><label for="">${ssrInterpolate(_ctx.$t("Car you want"))}*</label><input type="text"${ssrRenderAttr("value", unref(mainObj).car_name)}${ssrRenderAttr("placeholder", _ctx.$t("Write the car name..."))}>`);
      if (unref(carNameError)) {
        _push(`<span class="errorMessage text-danger fw-bold">${ssrInterpolate(unref(carNameError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><button class="d-flex align-items-center gap-3" style="${ssrRenderStyle({ "padding": "13px 60px" })}">`);
      if (unref(spinner)) {
        _push(`<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(_ctx.$t("send"))}</button></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/notFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notFound-6fcb6051.mjs.map
