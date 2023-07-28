import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { ref, withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { b as useRoute, d as useRouter, u as useI18n, a as useHead } from './server.mjs';
import { u as useLocalePath } from './composables-2717fe6a.mjs';
import { g as getUrl } from './useState-8b8d35cc.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass, ssrLooseEqual, ssrRenderComponent } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import axios from 'file://F:/github/AlKathiri-Frontend/node_modules/axios/index.js';
import 'file://F:/github/AlKathiri-Frontend/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const mainId = route.query.id ? route.query.id : null;
    const mainType = route.query.type ? route.query.type : null;
    const mainModel = route.query.model ? route.query.model : null;
    const mainName = route.query.name ? route.query.name : null;
    let checkType = ref(mainType ? mainType : null);
    const localePath = useLocalePath();
    let url = getUrl();
    const { locale } = useI18n();
    let currentLang = ref(locale);
    let spinner = ref(true);
    let filterCar = ([__temp, __restore] = withAsyncContext(() => axios.get(`${url}/cars-filter-data`, {
      headers: {
        "Content-Language": `${currentLang.value}`
      }
    })), __temp = await __temp, __restore(), __temp);
    let brandCars = ref([]);
    let models = ref(mainModel ? [mainModel] : []);
    let subModels = ref([]);
    let filterData = ref(filterCar.data);
    console.log(filterData.data);
    const checkMain = ref(mainId ? [mainId] : []);
    let checkData = ref(false);
    let minNum = ref(filterData.value.minPrice);
    let maxNum = ref(filterData.value.maxPrice);
    ref([]);
    let addedList = ref("added to wishlist");
    let success = ref("success");
    let removedList = ref("removed from wishlist");
    if (currentLang.value == "ar") {
      addedList.value = "\u062A\u0645 \u0627\u0644\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u064A \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0627\u062A";
      success.value = "\u0646\u062C\u0627\u062D";
      removedList.value = "\u062A\u0645 \u0627\u0644\u062D\u0630\u0641 \u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0627\u062A";
    } else if (currentLang.value == "en") {
      addedList.value = "added to wishlist";
      success.value = "success";
      removedList.value = "removed from wishlist";
    }
    useHead({
      title: currentLang.value == "ar" ? `${mainName || "\u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A"}/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A` : `alkathiri motors / ${mainName || "cars"}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="brandCars" style="${ssrRenderStyle({ "margin-top": "100px" })}"><div class="container p-2"><div class="row p-2 gap-4"><div class="col-12 col-xl-3 col-lg-3 col-md-12 d-flex flex-column align-items-center"><div class="filter d-flex align-items-center justify-content-between w-100"><h5>${ssrInterpolate(_ctx.$t("filter"))}</h5><span>${ssrInterpolate(_ctx.$t("reset"))}</span></div><div class="rangeSlider"><div class="mainprocess"><span></span></div><div class="rangeGroups"><input type="range" class="range-min" min="222000" max="870000" value="222000" step="100"><input type="range" class="range-max" min="222000" max="870000" value="870000" step="100"></div><div class="inputs w-100 d-flex align-items-center justify-content-between"><span>${ssrInterpolate(unref(minNum))} sar</span><span>${ssrInterpolate(unref(maxNum))} sar</span></div></div><div class="accordion" id="accordionExample"><div class="accordion-item mainItem"><h2 class="accordion-header"><button class="accordion-button collapsed mainbtnacc" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecars" aria-expanded="true" aria-controls="collapseOne"><span class="theHead">${ssrInterpolate(_ctx.$t("cars"))}</span></button></h2><div id="collapsecars" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="checksCars"><!--[-->`);
      ssrRenderList(unref(filterData).brands, (box, index) => {
        _push(`<div class="inp"><input${ssrRenderAttr("id", `label${index}`)} type="checkbox"${ssrIncludeBooleanAttr(unref(mainId) == box.id) ? " checked" : ""}${ssrIncludeBooleanAttr(Array.isArray(unref(checkMain)) ? ssrLooseContain(unref(checkMain), box.id) : unref(checkMain)) ? " checked" : ""}${ssrRenderAttr("value", box.id)}><label${ssrRenderAttr("for", `label${index}`)} class="d-flex align-items-center gap-2"><img${ssrRenderAttr("src", box.image)} alt=""><span>${ssrInterpolate(box.name)}</span></label></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="accordion-item mainItem"><h2 class="accordion-header"><button class="accordion-button d-flex align-items-center gap-5 mainbtnacc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span class="theHead">${ssrInterpolate(_ctx.$t("mark & model"))}</span></button></h2>`);
      if (unref(checkMain).length >= 1) {
        _push(`<div id="collapseOne" class="${ssrRenderClass([{ "show": _ctx.index == 0 }, "accordion-collapse collapse"])}" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="accordion" id="accordionbranch1"><!--[-->`);
        ssrRenderList(unref(checkMain), (item, index) => {
          _push(`<div class="accordion-item mainbranch w-100"><!--[-->`);
          ssrRenderList(unref(filterData).brands[item - 1].parent_models, (boxi) => {
            _push(`<div><div class="accordion-header w-100"><button class="accordion-button d-flex align-items-center gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnebranch1" aria-expanded="true" aria-controls="collapseOne"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(models)) ? ssrLooseContain(unref(models), boxi.id) : unref(models)) ? " checked" : ""}${ssrRenderAttr("value", boxi.id)}><span style="${ssrRenderStyle({ "white-space": "nowrap" })}">${ssrInterpolate(boxi.name)}</span></button></div><div id="collapseOnebranch1" class="accordion-collapse collapse show" data-bs-parent="#accordionbranch1"><div class="accordion-body"><div class="checks d-flex flex-column gap-3"><!--[-->`);
            ssrRenderList(boxi.sub_models, (box) => {
              _push(`<div class="inp d-flex align-items-center gap-3 p-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(subModels)) ? ssrLooseContain(unref(subModels), box.id) : unref(subModels)) ? " checked" : ""}${ssrRenderAttr("value", box.id)}><span>${ssrInterpolate(box.name)}</span></div>`);
            });
            _push(`<!--]--></div></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<div class="fw-bold text-center my-2">${ssrInterpolate(_ctx.$t("you have to choose a brand"))}</div>`);
      }
      _push(`</div><div class="accordion-item mainItem"><h2 class="accordion-header"><button class="accordion-button collapsed mainbtnacc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne"><span class="theHead">${ssrInterpolate(_ctx.$t("car type"))}</span></button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body d-flex flex-column gap-2"><div class="inp d-flex align-items-center gap-2"><input id="hatchback" type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(checkType), "hatchback")) ? " checked" : ""} value="hatchback"><label for="hatchback">hatchback</label></div><div class="inp d-flex align-items-center gap-2"><input id="sedan" type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(checkType), "sedan")) ? " checked" : ""} value="sedan"><label for="sedan">sedan</label></div><div class="inp d-flex align-items-center gap-2"><input id="4_by_4" type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(checkType), "4_by_4")) ? " checked" : ""} value="4_by_4"><label for="4_by_4">4_by_4</label></div><div class="inp d-flex align-items-center gap-2"><input id="family" type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(checkType), "family")) ? " checked" : ""} value="family"><label for="family">family</label></div><div class="inp d-flex align-items-center gap-2"><input id="commercial" type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(checkType), "commercial")) ? " checked" : ""} value="commercial"><label for="commercial">commercial</label></div></div></div></div></div><button class="my-3">${ssrInterpolate(_ctx.$t("apply"))}</button></div><div class="col-12 col-xl-8 col-lg-8 col-md-12">`);
      if (unref(checkMain).length >= 1) {
        _push(`<div>`);
        if (unref(checkMain).length >= 1) {
          _push(`<!--[-->`);
          ssrRenderList(unref(checkMain), (item, index) => {
            _push(`<h2 class="fw-bolder py-1"><!--[-->`);
            ssrRenderList(unref(filterData).brands[item - 1].name, (mainTitle) => {
              _push(`<span>${ssrInterpolate(mainTitle)}</span>`);
            });
            _push(`<!--]--></h2>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<h2 class="fw-bolder">${ssrInterpolate(_ctx.$t("all cars"))}</h2>`);
      }
      _push(`<div class="row justify-content-center"><!--[-->`);
      ssrRenderList(unref(brandCars), (car) => {
        _push(`<div style="${ssrRenderStyle({ "cursor": "pointer" })}" class="mainlatestbox col-xl-3 col-lg-3 col-md-5"><div class="image"><img${ssrRenderAttr("src", car.main_image)} alt=""></div><h3 style="${ssrRenderStyle({ "font-size": "16px" })}">${ssrInterpolate(car.name)}</h3><div class="text1"><div class="price"><span>${ssrInterpolate(_ctx.$t("price"))}</span><h4 style="${ssrRenderStyle({ "font-size": "14px" })}">${ssrInterpolate(car.selling_price)} SAR</h4></div><div class="after"><span>${ssrInterpolate(_ctx.$t("after vat"))}</span><h4 style="${ssrRenderStyle({ "font-size": "14px" })}">${ssrInterpolate(car.selling_price_after_vat)} SAR</h4></div></div><p class="detail">${ssrInterpolate(_ctx.$t("details"))} <i class="fa-solid fa-chevron-right"></i></p><div class="overlay"></div><i class="${ssrRenderClass([{ "fa-solid": car.is_in_favorite }, "fa-regular fa-heart fav"])}"></i></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(spinner)) {
        _push(`<div class="d-flex align-items-center justify-content-center"><div class="spinner-border text-center" style="${ssrRenderStyle({ "width": "5rem", "height": "5rem" })}" role="status"><span class="visually-hidden">Loading...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(checkData)) {
        _push(`<div class="d-flex align-items-center mb-5 flex-column justify-content-center h-100"><h3>${ssrInterpolate(_ctx.$t("there is no data"))}</h3>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(localePath)("/notFound")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span style="${ssrRenderStyle({ "color": "#1B395F" })}"${_scopeId}>${ssrInterpolate(_ctx.$t("Click to request a car that is not available"))}</span>`);
            } else {
              return [
                createVNode("span", { style: { "color": "#1B395F" } }, toDisplayString(_ctx.$t("Click to request a car that is not available")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
      if (_ctx.pending) {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/brandcar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-b76cb7dd.mjs.map