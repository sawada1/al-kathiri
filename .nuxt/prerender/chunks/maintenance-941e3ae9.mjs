import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './privacyModal-640f8386.mjs';
import { u as useI18n, d as useRouter, a as useHead } from './server.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './url-fc757438.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
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
  __name: "maintenance",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    ref(null);
    let activeTime = ref(1);
    let spinner = ref(true);
    let currentLang = ref(locale);
    useRouter();
    const url = getUrl();
    let appointmentData = ([__temp, __restore] = withAsyncContext(() => axios.get(`${url}/make-appointment-form-data`)), __temp = await __temp, __restore(), __temp);
    console.log(appointmentData.data);
    let mainBrands = ref(appointmentData.data.brands);
    let maincities = ref(appointmentData.data.cities);
    let daysOf = ref(appointmentData.data.days_of);
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let finalDaysOf = ref([]);
    const functionDaysOf = () => {
      for (let i = 0; i < daysOf.value.length; i++) {
        finalDaysOf.value.push(daysOfWeek.indexOf(daysOf.value[i]));
      }
    };
    functionDaysOf();
    console.log(finalDaysOf.value);
    let times = ref([]);
    let mainObj = ref({
      name: null,
      phone: null,
      branch_id: null,
      brand_id: null,
      city_id: null,
      model_id: null,
      model_year: 2023,
      date: null,
      description: null,
      email: null,
      time: null,
      terms_and_privacy: null
    });
    let phoneError = ref(null);
    let nameError = ref(null);
    let branchError = ref(null);
    let brandError = ref(null);
    let cityError = ref(null);
    let modelError = ref(null);
    ref(null);
    let descError = ref(null);
    let emailError = ref(null);
    let timeError = ref(null);
    let terms_and_privacyError = ref(null);
    let modelYearError = ref(null);
    let spinnerBtn = ref(false);
    useHead({
      title: currentLang.value == "ar" ? "\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F \u0635\u064A\u0627\u0646\u062A\u0643 / \u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / BOOK YOUR MAINTENANCE APPOINTMENT",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TermsModal = __nuxt_component_1;
      const _component_privacyModal = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container textBooked"><h3${ssrRenderAttr("data-app", _ctx.$t("HAPPY TO HELP YOU"))}>${ssrInterpolate(_ctx.$t("BOOK YOUR MAINTENANCE APPOINTMENT"))}</h3><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laboriosam asperiores, iusto modi sapiente ut beatae qui! Quos aspernatur accusantium vel, perferendis enim ipsam praesentium corporis ab quam eius. Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laboriosam asperiores, iusto modi sapiente ut beatae qui! Quos aspernatur accusantium vel, perferendis enim ipsam praesentium corporis ab quam eius. Quaerat. </p></div><div class="container maintenance"><div class="row gap-4 justify-content-around"><div class="col-12 col-xl-7 col-lg-7 col-md-6"><form action=""><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("full name"))}</label><input type="text"${ssrRenderAttr("value", unref(mainObj).name)}${ssrRenderAttr("placeholder", _ctx.$t("write your name.."))}>`);
      if (unref(nameError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(nameError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("email"))}</label><input type="email"${ssrRenderAttr("value", unref(mainObj).email)} placeholder="example@mail.com..">`);
      if (unref(emailError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(emailError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("phone number"))}</label><input type="text"${ssrRenderAttr("value", unref(mainObj).phone)} placeholder="05xxxxxxxx.....">`);
      if (unref(phoneError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(phoneError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("What is your car\u2019s model year?"))}</label><input type="number"${ssrRenderAttr("value", unref(mainObj).model_year)} min="1900" max="2100" step="1">`);
      if (unref(modelYearError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(modelYearError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("What is your car\u2019s Brand?"))}</label><select name="" id=""><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("Select Brand..."))}</option><!--[-->`);
      ssrRenderList(unref(mainBrands), (brand) => {
        _push(`<option${ssrRenderAttr("value", brand.id)}>${ssrInterpolate(brand.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(brandError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(brandError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Which car model are you booking for?"))}</label><select name="" id=""><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("Select Model..."))}</option>`);
      if (unref(mainObj).brand_id) {
        _push(`<!--[-->`);
        ssrRenderList(unref(mainBrands)[unref(mainObj).brand_id - 1].models, (model, index) => {
          _push(`<option${ssrRenderAttr("value", model.id)}>${ssrInterpolate(model.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</select>`);
      if (unref(modelError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(modelError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Choose a city and branch for your service"))}</label><div class="d-flex gap-3"><div class="d-flex flex-column w-50"><select name="" id="" class="w-100"><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("Select city..."))}</option><!--[-->`);
      ssrRenderList(unref(maincities), (city) => {
        _push(`<option${ssrRenderAttr("value", city.id)}>${ssrInterpolate(city.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(cityError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(cityError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="d-flex flex-column w-50"><select name="" id="" class="w-100"><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("Select branch..."))}</option>`);
      if (unref(mainObj).city_id) {
        _push(`<!--[-->`);
        ssrRenderList(unref(maincities)[unref(mainObj).city_id - 1].branches, (branch) => {
          _push(`<option${ssrRenderAttr("value", branch.id)}>${ssrInterpolate(branch.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</select>`);
      if (unref(branchError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(branchError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Please add any extra information about your appointment request"))}</label><textarea style="${ssrRenderStyle({ "resize": "none" })}" rows="" cols=""${ssrRenderAttr("placeholder", _ctx.$t("write your message here"))}>${ssrInterpolate(unref(mainObj).description)}</textarea>`);
      if (unref(descError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(descError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div><div class="col-12 col-xl-4 col-lg-4 col-md-4 d-flex align-items-center gap-5 flex-column"><div id="inline_cal"></div><div class="time"><h3>${ssrInterpolate(_ctx.$t("time"))}</h3><div class="d-flex align-items-center justify-content-center">`);
      if (unref(spinner)) {
        _push(`<div class="spinner-border" role="status"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="timesec"><!--[-->`);
      ssrRenderList(unref(times), (item, index) => {
        _push(`<span class="${ssrRenderClass({ "disabled": item.available == false, "choose": unref(activeTime) == index + 1 })}">${ssrInterpolate(item.time)}</span>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(timeError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(timeError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="check d-flex align-items-center gap-3"><input id="checkTerms" type="checkbox" value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(mainObj).terms_and_privacy) ? ssrLooseContain(unref(mainObj).terms_and_privacy, "1") : unref(mainObj).terms_and_privacy) ? " checked" : ""}><label for="checkTerms">${ssrInterpolate(_ctx.$t("I have read and unconditionally agree to the"))} <span type="button" data-bs-toggle="modal" data-bs-target="#termsModal">${ssrInterpolate(_ctx.$t("Term And Conditions"))}</span> ${ssrInterpolate(_ctx.$t("and"))} <span type="button" data-bs-toggle="modal" data-bs-target="#privacyModal">${ssrInterpolate(_ctx.$t("Privacy Policy"))}</span></label></div>`);
      if (unref(terms_and_privacyError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(terms_and_privacyError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button${ssrIncludeBooleanAttr(unref(spinnerBtn)) ? " disabled" : ""} class="w-100 d-flex align-items-center justify-content-center gap-4"><span>${ssrInterpolate(_ctx.$t("submit"))}</span>`);
      if (unref(spinnerBtn)) {
        _push(`<div class="spinner-border text-light" role="status"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div></div>`);
      _push(ssrRenderComponent(_component_TermsModal, null, null, _parent));
      _push(ssrRenderComponent(_component_privacyModal, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/maintenance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=maintenance-941e3ae9.mjs.map
