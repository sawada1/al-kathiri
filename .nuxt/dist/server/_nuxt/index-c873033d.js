import { Swiper, SwiperSlide } from "swiper/vue";
import { _ as __nuxt_component_0 } from "./client-only-29ef7f45.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-28d4e889.js";
import { _ as _export_sfc, u as useI18n, d as useRouter, a as useHead } from "../server.mjs";
import { g as getUrl } from "./url-8b8d35cc.js";
import { ref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { u as useLocalePath } from "./composables-63b0a683.js";
/* empty css                     */import { Autoplay, Pagination, Navigation } from "swiper";
import "sweetalert2/dist/sweetalert2.js";
/* empty css                      */import axios from "axios";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_6, b as _imports_7, c as _imports_8 } from "./box3-54fbe1e7.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
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
const _imports_0 = "" + __buildAssetsURL("landing2.1afd98b9.png");
const _imports_2 = "" + __buildAssetsURL("group1.e89f0768.png");
const _imports_3 = "" + __buildAssetsURL("group2.18aae9d5.png");
const _imports_4 = "" + __buildAssetsURL("group4.1a6ecf44.png");
const _imports_5 = "" + __buildAssetsURL("about.c55be374.png");
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  async setup() {
    const { locale } = useI18n();
    let BaseUrl = getUrl();
    let brandArray = ref([]);
    let latestArray = ref([]);
    let newsArray = ref([]);
    let currentLang = ref(locale);
    const router = useRouter();
    let mainObj = ref({
      id: null,
      model: null,
      type: null
    });
    const goToBrandPageByIdAndName = (id, name) => {
      const queryParams = {
        id,
        name
      };
      const url2 = currentLang.value + "/brandcar";
      router.push({ path: url2, query: queryParams });
    };
    const goToBrandPageByType = (type) => {
      const queryParams = {
        type
      };
      const url2 = currentLang.value + "/brandcar";
      router.push({ path: url2, query: queryParams });
    };
    const goToCarPage = (id, name) => {
      const queryParams = {
        id,
        name
      };
      const url2 = currentLang.value + "/car";
      router.push({ path: `/${url2}`, query: queryParams });
    };
    const goToBrandPageSearch = () => {
      const url2 = currentLang.value + "/brandcar";
      router.push({ path: url2, query: mainObj.value });
    };
    const goToNewsPage = (name, id) => {
      const queryParams = {
        name,
        id
      };
      const url2 = currentLang.value + "/new";
      router.push({ path: `/${url2}`, query: queryParams });
    };
    let lang = ref(locale);
    const localePath = useLocalePath();
    let url = getUrl();
    let mainBrands = ref([]);
    let generalData = ref([]);
    let brandsWithModles = ref([]);
    let generalSpinner = ref(false);
    const generalFunc = async () => {
      generalSpinner.value = true;
      let generalAbout = await axios.get(`${url}/general`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (generalAbout.status == 200) {
        generalSpinner.value = false;
      }
      ref([]);
      generalData.value = generalAbout.data;
      brandsWithModles.value = generalAbout.data.brands_with_models;
      useHead({
        title: lang.value == "ar" ? "الكثيري للسيارات" : "alkathiri motors",
        meta: [
          { name: "description", content: generalData.value.meta_tag_description },
          { name: "keywords", content: generalData.value.meta_tag_keywords }
        ]
      });
      console.log(generalData.value);
    };
    generalFunc();
    const carLatestFunc = async () => {
      let latest = await axios.get(`${BaseUrl}/cars/latest`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      latestArray.value = latest.data.data;
    };
    carLatestFunc();
    const brandsFunc = async () => {
      let brands = await axios.get(`${BaseUrl}/brands`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      brandArray.value = brands.data.data;
    };
    brandsFunc();
    const newsFunc = async () => {
      let news = await axios.get(`${BaseUrl}/news/highlighted`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      newsArray.value = news.data.data;
    };
    newsFunc();
    const checkFav = ref([]);
    ref([]);
    let favState = ref([]);
    if (lang.value == "en")
      ;
    else if (lang.value == "ar")
      ;
    const addToFav = (box) => {
    };
    return {
      modules: [Autoplay, Pagination, Navigation],
      brandArray,
      latestArray,
      newsArray,
      addToFav,
      checkFav,
      generalData,
      checkFav,
      favState,
      localePath,
      mainObj,
      goToBrandPageByIdAndName,
      goToBrandPageSearch,
      brandsWithModles,
      mainBrands,
      goToCarPage,
      goToBrandPageByType,
      generalSpinner,
      goToNewsPage
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = Swiper;
  const _component_swiper_slide = SwiperSlide;
  const _component_ClientOnly = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container landing"><div class="container"><div class="row d-flex align-items-center justify-content-center"><div class="col-lg-7 col-xl-7 col-md-12 col-sm-12"><div class="text"><span>${ssrInterpolate(_ctx.$t("with al kathiri motors"))}</span><h2>${ssrInterpolate(_ctx.$t("FIND YOUR DREAM CAR"))}</h2><p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat fugiat sit quo ipsum error maxime voluptates porro commodi quisquam eligendi perferendis tenetur, repellendus enim ab deserunt, necessitatibus aliquid quod? </p><div><button>${ssrInterpolate(_ctx.$t("explore now"))}</button></div></div></div><div class="col col-lg-5 col-xl-5 col-md-12 col-sm-12"><div class="image"><img class="img2" loading="lazy"${ssrRenderAttr("src", _imports_0)} alt="landing"><div class="img3" loading="lazy"></div><img class="img1" loading="lazy"${ssrRenderAttr("src", _imports_1)} alt="landing"></div></div></div></div></div><div class="searchBar"><div class="main"><select><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("select the vehicle type"))}</option><option>hatchback</option><option>sedan</option><option>4_by_4</option><option>family</option><option>commercial</option></select><select><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("choose brand"))}</option><!--[-->`);
  ssrRenderList($setup.brandsWithModles, (brand) => {
    _push(`<option${ssrRenderAttr("value", brand.id)}>${ssrInterpolate(brand.name)}</option>`);
  });
  _push(`<!--]--></select><select><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("choose a model"))}</option>`);
  if ($setup.mainObj.id) {
    _push(`<!--[-->`);
    ssrRenderList($setup.brandsWithModles[$setup.mainObj.id - 1].parent_models, (model) => {
      _push(`<option${ssrRenderAttr("value", model.id)}>${ssrInterpolate(model.name)}</option>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</select><button>${ssrInterpolate(_ctx.$t("search"))}</button></div></div><div class="containe groups">`);
  _push(ssrRenderComponent(_component_swiper, {
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      "640": {
        slidesPerView: 1,
        spaceBetween: 60
      },
      "768": {
        slidesPerView: 3,
        spaceBetween: 40
      },
      "1024": {
        slidesPerView: 4,
        spaceBetween: 50
      }
    },
    navigation: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, {
          onClick: ($event) => $setup.goToBrandPageByType("sedan"),
          style: { "cursor": "pointer" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_2)} loading="lazy" alt="sedan"${_scopeId2}><span${_scopeId2}>sedan</span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  loading: "lazy",
                  alt: "sedan"
                }),
                createVNode("span", null, "sedan")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, {
          onClick: ($event) => $setup.goToBrandPageByType("family"),
          style: { "cursor": "pointer" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_3)} loading="lazy" alt="family"${_scopeId2}><span${_scopeId2}>family</span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_3,
                  loading: "lazy",
                  alt: "family"
                }),
                createVNode("span", null, "family")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, {
          onClick: ($event) => $setup.goToBrandPageByType("sedan"),
          style: { "cursor": "pointer" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_2)} loading="lazy" alt="sedan"${_scopeId2}><span${_scopeId2}>sedan</span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  loading: "lazy",
                  alt: "sedan"
                }),
                createVNode("span", null, "sedan")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { style: { "cursor": "pointer" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_2)} loading="lazy" alt="4x4"${_scopeId2}><span${_scopeId2}>4x4</span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  loading: "lazy",
                  alt: "4x4"
                }),
                createVNode("span", null, "4x4")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { style: { "cursor": "pointer" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_4)} loading="lazy" alt="commercial"${_scopeId2}><span${_scopeId2}>commercial</span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_4,
                  loading: "lazy",
                  alt: "commercial"
                }),
                createVNode("span", null, "commercial")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, {
            onClick: ($event) => $setup.goToBrandPageByType("sedan"),
            style: { "cursor": "pointer" }
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_2,
                loading: "lazy",
                alt: "sedan"
              }),
              createVNode("span", null, "sedan")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_swiper_slide, {
            onClick: ($event) => $setup.goToBrandPageByType("family"),
            style: { "cursor": "pointer" }
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_3,
                loading: "lazy",
                alt: "family"
              }),
              createVNode("span", null, "family")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_swiper_slide, {
            onClick: ($event) => $setup.goToBrandPageByType("sedan"),
            style: { "cursor": "pointer" }
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_2,
                loading: "lazy",
                alt: "sedan"
              }),
              createVNode("span", null, "sedan")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_swiper_slide, { style: { "cursor": "pointer" } }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_2,
                loading: "lazy",
                alt: "4x4"
              }),
              createVNode("span", null, "4x4")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { style: { "cursor": "pointer" } }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_4,
                loading: "lazy",
                alt: "commercial"
              }),
              createVNode("span", null, "commercial")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="about"><div class="container"><div class="row gap-5 align-items-center justify-content-around"><div class="col-12 col-xl-4 col-lg-4"><div class="image"><img${ssrRenderAttr("src", _imports_5)} loading="lazy" alt="about-section"></div></div><div class="col-12 col-xl-6 col-lg-6"><div class="text"><span class="span">${ssrInterpolate(_ctx.$t("AL KATHIRI MOTORS"))}</span><h2 class="fw-bolder"${ssrRenderAttr("data-about", _ctx.$t("about us"))}>${ssrInterpolate(_ctx.$t("how we are"))}</h2>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`<div class="btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: $setup.localePath("/about")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class=""${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("now more"))}</span><i class="fa-solid fa-chevron-right"${_scopeId}></i></button>`);
      } else {
        return [
          createVNode("button", { class: "" }, [
            createVNode("span", null, toDisplayString(_ctx.$t("now more")), 1),
            createVNode("i", { class: "fa-solid fa-chevron-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div><div class="why-choose"><div class="head"><h3 class="fw-bolder"${ssrRenderAttr("data-why", _ctx.$t("AL KATHIRI MOTORS"))}>${ssrInterpolate(_ctx.$t("why choose us"))}</h3></div><div class="main mb-5 position-relative"><div class="boxes row d-flex align-items-center justify-content-center gap-5"><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_6)} loading="lazy" alt="why-choose"><div class="text">`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div>`);
  if ($setup.generalSpinner) {
    _push(`<div class="text-center"><div class="spinner-border" role="status"></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_7)} loading="lazy" alt="why-choose"><div class="text">`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div>`);
  if ($setup.generalSpinner) {
    _push(`<div class="text-center"><div class="spinner-border" role="status"></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12"><img${ssrRenderAttr("src", _imports_8)} loading="lazy" alt="why-choose"><div class="text">`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div>`);
  if ($setup.generalSpinner) {
    _push(`<div class="text-center"><div class="spinner-border" role="status"></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div><div class="brands"><div class="head"><h3 class="fw-bolder"${ssrRenderAttr("data-brands", _ctx.$t("AUTHORIZED DISTRIBUTOR"))}>${ssrInterpolate(_ctx.$t("car brands"))}</h3></div><div class="container"><div class="boxes row d-flex justify-content-center gap-3 align-items-center"><!--[-->`);
  ssrRenderList($setup.brandArray, (box) => {
    _push(`<div class="box col-5 col-xl-1 col-lg-2" style="${ssrRenderStyle({ "cursor": "pointer" })}"><img${ssrRenderAttr("src", box.image)} loading="lazy"${ssrRenderAttr("alt", box.name)}><span>${ssrInterpolate(box.name)}</span></div>`);
  });
  _push(`<!--]--></div></div></div><div class="container latest"><div class="head"><h3 class="fw-bolder"${ssrRenderAttr("data-latest", _ctx.$t("JUST PUBLISHED"))}>${ssrInterpolate(_ctx.$t("latest vehicles"))}</h3><div class="see">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: $setup.localePath("/brandcar")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span style="${ssrRenderStyle({ "color": "#1B395F" })}"${_scopeId}>${ssrInterpolate(_ctx.$t("see all"))}</span>`);
      } else {
        return [
          createVNode("span", { style: { "color": "#1B395F" } }, toDisplayString(_ctx.$t("see all")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i class="fa-solid fa-chevron-right"></i></div></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      "640": {
        slidesPerView: 1,
        spaceBetween: 50
      },
      "768": {
        slidesPerView: 2,
        spaceBetween: 40
      },
      "1024": {
        slidesPerView: 3,
        spaceBetween: 60
      }
    },
    pagination: {
      clickable: true
    },
    navigation: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.latestArray, (car) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            onClick: ($event) => $setup.goToCarPage(car.id, car.name),
            style: { "cursor": "pointer" },
            class: "mainlatestbox latestboxes"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="image"${_scopeId2}><img${ssrRenderAttr("src", car.main_image)} loading="lazy"${ssrRenderAttr("alt", car.name)}${_scopeId2}></div><h3${_scopeId2}>${ssrInterpolate(car.name)}</h3><div class="text1"${_scopeId2}><div class="price"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("price"))}</span><h4${_scopeId2}>${ssrInterpolate(car.selling_price)}</h4></div><div class="after"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("after vat"))}</span><h4${_scopeId2}>${ssrInterpolate(car.selling_price_after_vat == null ? 0 : car.selling_price_after_vat)}</h4></div></div><span class="detail"${_scopeId2}>${ssrInterpolate(_ctx.$t("details"))} <i class="fa-solid fa-chevron-right"${_scopeId2}></i></span><div class="overlay"${_scopeId2}></div><i class="${ssrRenderClass([{ "fa-solid": car.is_in_favorite }, "fa-regular fa-heart fav"])}"${_scopeId2}></i>`);
              } else {
                return [
                  createVNode("div", { class: "image" }, [
                    createVNode("img", {
                      src: car.main_image,
                      loading: "lazy",
                      alt: car.name
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("h3", null, toDisplayString(car.name), 1),
                  createVNode("div", { class: "text1" }, [
                    createVNode("div", { class: "price" }, [
                      createVNode("span", null, toDisplayString(_ctx.$t("price")), 1),
                      createVNode("h4", null, toDisplayString(car.selling_price), 1)
                    ]),
                    createVNode("div", { class: "after" }, [
                      createVNode("span", null, toDisplayString(_ctx.$t("after vat")), 1),
                      createVNode("h4", null, toDisplayString(car.selling_price_after_vat == null ? 0 : car.selling_price_after_vat), 1)
                    ])
                  ]),
                  createVNode("span", { class: "detail" }, [
                    createTextVNode(toDisplayString(_ctx.$t("details")) + " ", 1),
                    createVNode("i", { class: "fa-solid fa-chevron-right" })
                  ]),
                  createVNode("div", { class: "overlay" }),
                  createVNode("i", {
                    onClick: ($event) => $setup.addToFav(car),
                    class: ["fa-regular fa-heart fav", { "fa-solid": car.is_in_favorite }]
                  }, null, 10, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.latestArray, (car) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              onClick: ($event) => $setup.goToCarPage(car.id, car.name),
              style: { "cursor": "pointer" },
              class: "mainlatestbox latestboxes"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "image" }, [
                  createVNode("img", {
                    src: car.main_image,
                    loading: "lazy",
                    alt: car.name
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("h3", null, toDisplayString(car.name), 1),
                createVNode("div", { class: "text1" }, [
                  createVNode("div", { class: "price" }, [
                    createVNode("span", null, toDisplayString(_ctx.$t("price")), 1),
                    createVNode("h4", null, toDisplayString(car.selling_price), 1)
                  ]),
                  createVNode("div", { class: "after" }, [
                    createVNode("span", null, toDisplayString(_ctx.$t("after vat")), 1),
                    createVNode("h4", null, toDisplayString(car.selling_price_after_vat == null ? 0 : car.selling_price_after_vat), 1)
                  ])
                ]),
                createVNode("span", { class: "detail" }, [
                  createTextVNode(toDisplayString(_ctx.$t("details")) + " ", 1),
                  createVNode("i", { class: "fa-solid fa-chevron-right" })
                ]),
                createVNode("div", { class: "overlay" }),
                createVNode("i", {
                  onClick: ($event) => $setup.addToFav(car),
                  class: ["fa-regular fa-heart fav", { "fa-solid": car.is_in_favorite }]
                }, null, 10, ["onClick"])
              ]),
              _: 2
            }, 1032, ["onClick"]);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="news"><div class="head"><h3 class="fw-bolder"${ssrRenderAttr("data-news", _ctx.$t("BE AWARE OF OUR"))}>${ssrInterpolate(_ctx.$t("latest news"))}</h3></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      "640": {
        slidesPerView: 1,
        spaceBetween: 50
      },
      "768": {
        slidesPerView: 2,
        spaceBetween: 40
      },
      "1024": {
        slidesPerView: 2.7,
        spaceBetween: 100
      }
    },
    pagination: {
      clickable: true
    },
    navigation: true,
    modules: $setup.modules,
    class: "mySwiper latestNews"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.newsArray, (box) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            class: "box",
            onClick: ($event) => $setup.goToNewsPage(box.title, box.id),
            style: { "cursor": "pointer" }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="image"${_scopeId2}><img${ssrRenderAttr("src", box.cover_image)} loading="lazy"${ssrRenderAttr("alt", box.title)}${_scopeId2}></div><div class="text"${_scopeId2}><h3${_scopeId2}>${ssrInterpolate(box.title)}</h3><p${_scopeId2}>${ssrInterpolate(box.description.substring(3, 180))}</p><div class="detail"${_scopeId2}><div class="tags"${_scopeId2}><div class="tag"${_scopeId2}><i class="fa-solid fa-tag"${_scopeId2}></i><span${_scopeId2}>${ssrInterpolate(box.tags)}</span></div><div class="tag"${_scopeId2}><i class="fa-regular fa-clock"${_scopeId2}></i><span${_scopeId2}>${ssrInterpolate(box.created_at)}</span></div></div><div class="read"${_scopeId2}><span class="fw-bold"${_scopeId2}>${ssrInterpolate(_ctx.$t("now more"))}</span><i class="fa-solid fa-chevron-right"${_scopeId2}></i></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "image" }, [
                    createVNode("img", {
                      src: box.cover_image,
                      loading: "lazy",
                      alt: box.title
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "text" }, [
                    createVNode("h3", null, toDisplayString(box.title), 1),
                    createVNode("p", null, toDisplayString(box.description.substring(3, 180)), 1),
                    createVNode("div", { class: "detail" }, [
                      createVNode("div", { class: "tags" }, [
                        createVNode("div", { class: "tag" }, [
                          createVNode("i", { class: "fa-solid fa-tag" }),
                          createVNode("span", null, toDisplayString(box.tags), 1)
                        ]),
                        createVNode("div", { class: "tag" }, [
                          createVNode("i", { class: "fa-regular fa-clock" }),
                          createVNode("span", null, toDisplayString(box.created_at), 1)
                        ])
                      ]),
                      createVNode("div", { class: "read" }, [
                        createVNode("span", { class: "fw-bold" }, toDisplayString(_ctx.$t("now more")), 1),
                        createVNode("i", { class: "fa-solid fa-chevron-right" })
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.newsArray, (box) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              class: "box",
              onClick: ($event) => $setup.goToNewsPage(box.title, box.id),
              style: { "cursor": "pointer" }
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "image" }, [
                  createVNode("img", {
                    src: box.cover_image,
                    loading: "lazy",
                    alt: box.title
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "text" }, [
                  createVNode("h3", null, toDisplayString(box.title), 1),
                  createVNode("p", null, toDisplayString(box.description.substring(3, 180)), 1),
                  createVNode("div", { class: "detail" }, [
                    createVNode("div", { class: "tags" }, [
                      createVNode("div", { class: "tag" }, [
                        createVNode("i", { class: "fa-solid fa-tag" }),
                        createVNode("span", null, toDisplayString(box.tags), 1)
                      ]),
                      createVNode("div", { class: "tag" }, [
                        createVNode("i", { class: "fa-regular fa-clock" }),
                        createVNode("span", null, toDisplayString(box.created_at), 1)
                      ])
                    ]),
                    createVNode("div", { class: "read" }, [
                      createVNode("span", { class: "fw-bold" }, toDisplayString(_ctx.$t("now more")), 1),
                      createVNode("i", { class: "fa-solid fa-chevron-right" })
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1032, ["onClick"]);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="subscribe"><div class="text"><div class="d-flex flex-column align-items-center gap-2"><h2>${ssrInterpolate(_ctx.$t(`Book Your`))} <br> ${ssrInterpolate(_ctx.$t("Maintenance Appointment"))} <br> ${ssrInterpolate(_ctx.$t("now"))}</h2><div class="btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: $setup.localePath("/maintenance")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("book now"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString(_ctx.$t("book now")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="car"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-c873033d.js.map
