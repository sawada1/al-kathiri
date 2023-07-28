import { Swiper, SwiperSlide } from 'file://F:/github/AlKathiri-Frontend/node_modules/swiper/vue/swiper-vue.js';
import { u as useLocalePath } from './composables-2717fe6a.mjs';
import { _ as _export_sfc, u as useI18n, d as useRouter, a as useHead } from './server.mjs';
import { ref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './useState-8b8d35cc.mjs';
import { Autoplay, Pagination, Navigation } from 'file://F:/github/AlKathiri-Frontend/node_modules/swiper/swiper.esm.js';
import axios from 'file://F:/github/AlKathiri-Frontend/node_modules/axios/index.js';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
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
  components: {
    Swiper,
    SwiperSlide
  },
  async setup() {
    useLocalePath();
    const { locale } = useI18n();
    let lang = ref(locale);
    let url = getUrl();
    let router = useRouter();
    let brandArray = ref([]);
    let latestArray = ref([]);
    let changeActive = ref(1);
    let spinner = ref(false);
    let checkMain = ref([changeActive.value]);
    const changeActiveFunc = (id) => {
      checkMain.value[0] = id;
    };
    let pending = ref(true);
    const brandsFunc = async () => {
      pending.value = true;
      let brands2 = await axios.get(`${url}/brands`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (brands2.status == 200) {
        pending.value = false;
      }
      brandArray.value = brands2.data.data;
    };
    brandsFunc();
    const carLatestFunc = async () => {
      spinner.value = true;
      latestArray.value = [];
      let latest = await axios.get(`${url}/cars`, {
        params: {
          brands: checkMain.value
        },
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (latest.status == 200) {
        spinner.value = false;
        latestArray.value = latest.data.data;
      }
    };
    const goToBrandPageById = () => {
      const queryParams = {
        id: changeActive.value
      };
      const url2 = lang.value + "/brandcar";
      router.push({ path: `/${url2}`, query: queryParams });
    };
    const goToCarPage = (id, name) => {
      const queryParams = {
        id,
        name
      };
      const url2 = lang.value + "/car";
      router.push({ path: `/${url2}`, query: queryParams });
    };
    let addedList = ref("added to wishlist");
    let success = ref("success");
    let removedList = ref("removed from wishlist");
    if (lang.value == "ar") {
      addedList.value = "\u062A\u0645 \u0627\u0644\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u064A \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0627\u062A";
      success.value = "\u0646\u062C\u0627\u062D";
      removedList.value = "\u062A\u0645 \u0627\u0644\u062D\u0630\u0641 \u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0627\u062A";
    }
    ref([]);
    ref([]);
    const addToFav = (box) => {
    };
    useHead({
      title: lang.value == "ar" ? "\u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / cars"
    });
    return {
      modules: [Autoplay, Pagination, Navigation],
      goToBrandPageById,
      pending,
      brandArray,
      latestArray,
      checkMain,
      changeActive,
      carLatestFunc,
      changeActiveFunc,
      spinner,
      goToCarPage,
      addToFav
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = Swiper;
  const _component_swiper_slide = SwiperSlide;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="brands-container" style="${ssrRenderStyle({})}">`);
  _push(ssrRenderComponent(_component_swiper, {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      "500": {
        slidesPerView: 3,
        spaceBetween: 10
      },
      "768": {
        slidesPerView: 5,
        spaceBetween: 20
      },
      "1024": {
        slidesPerView: 8,
        spaceBetween: 20
      }
    },
    modules: $setup.modules,
    class: "mySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.brandArray, (box, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { class: "" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="${ssrRenderClass([{ "active": $setup.changeActive == box.id }, "box"])}"${_scopeId2}><img${ssrRenderAttr("src", box.image)} alt=""${_scopeId2}><span${_scopeId2}>${ssrInterpolate(box.name)}</span></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: ["box", { "active": $setup.changeActive == box.id }],
                    onClick: ($event) => ($setup.changeActive = box.id, $setup.changeActiveFunc(box.id), $setup.carLatestFunc())
                  }, [
                    createVNode("img", {
                      src: box.image,
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode("span", null, toDisplayString(box.name), 1)
                  ], 10, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.brandArray, (box, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { class: "" }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: ["box", { "active": $setup.changeActive == box.id }],
                  onClick: ($event) => ($setup.changeActive = box.id, $setup.changeActiveFunc(box.id), $setup.carLatestFunc())
                }, [
                  createVNode("img", {
                    src: box.image,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("span", null, toDisplayString(box.name), 1)
                ], 10, ["onClick"])
              ]),
              _: 2
            }, 1024);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if ($setup.pending) {
    _push(`<div class="mainLoader"><span class="loader"></span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container cars-related-with-brands" style="${ssrRenderStyle({ "min-height": "100vh" })}"><div class="row justify-content-center">`);
  if ($setup.spinner) {
    _push(`<div class="d-flex align-items-center justify-content-center"><div class="spinner-border text-center" style="${ssrRenderStyle({ "width": "5rem", "height": "5rem" })}" role="status"></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.latestArray) {
    _push(`<!--[-->`);
    ssrRenderList($setup.latestArray, (car) => {
      _push(`<div class="col-3 mainlatestbox" style="${ssrRenderStyle({ "cursor": "pointer" })}"><div class="image"><img${ssrRenderAttr("src", car.main_image)} loading="lazy"${ssrRenderAttr("alt", car.name)}></div><h3>${ssrInterpolate(car.name)}</h3><div class="text1"><div class="price"><span>${ssrInterpolate(_ctx.$t("price"))}</span><h4>${ssrInterpolate(car.selling_price)}</h4></div><div class="after"><span>${ssrInterpolate(_ctx.$t("after vat"))}</span><h4>${ssrInterpolate(car.selling_price_after_vat == null ? 0 : car.selling_price_after_vat)}</h4></div></div><span class="detail">${ssrInterpolate(_ctx.$t("details"))} <i class="fa-solid fa-chevron-right"></i></span><div class="overlay"></div><i class="${ssrRenderClass([{ "fa-solid": car.is_in_favorite }, "fa-regular fa-heart fav"])}"></i></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="d-flex align-items-center justify-content-center mt-5"><button class="d-flex align-items-center gap-2 px-5"> Explore more <i class="fa-solid fa-chevron-right"></i></button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/brands.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brands = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { brands as default };
//# sourceMappingURL=brands-7efa48a0.mjs.map
