import { Swiper, SwiperSlide } from "swiper/vue";
import { u as useLocalePath } from "./composables-2717fe6a.js";
import { _ as _export_sfc, u as useI18n, d as useRouter, a as useHead } from "../server.mjs";
import { ref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { g as getUrl } from "./useState-8b8d35cc.js";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import "mosha-vue-toastify";
/* empty css                */import { Autoplay, Pagination, Navigation } from "swiper";
/* empty css                     */import axios from "axios";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "js-cookie";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "is-https";
import "defu";
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
      addedList.value = "تم الاضافة الي قائمة المفضلات";
      success.value = "نجاح";
      removedList.value = "تم الحذف من قائمة المفضلات";
    }
    ref([]);
    ref([]);
    const addToFav = (box) => {
    };
    useHead({
      title: lang.value == "ar" ? "السيارات/الكثيري للسيارات" : "alkathiri motors / cars"
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
export {
  brands as default
};
//# sourceMappingURL=brands-7efa48a0.js.map
