import { b as buildAssetsURL } from './renderer.mjs';
import { Swiper, SwiperSlide } from 'file://F:/github/AlKathiri-Frontend/node_modules/swiper/vue/swiper-vue.js';
import { u as useLocalePath } from './composables-2717fe6a.mjs';
import { _ as _export_sfc, u as useI18n, d as useRouter, b as useRoute, a as useHead } from './server.mjs';
import { ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './useState-8b8d35cc.mjs';
import { Autoplay, Pagination, Navigation } from 'file://F:/github/AlKathiri-Frontend/node_modules/swiper/swiper.esm.js';
import axios from 'file://F:/github/AlKathiri-Frontend/node_modules/axios/index.js';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
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

const _imports_0 = "" + buildAssetsURL("share.811fee5d.svg");
const _imports_1 = "" + buildAssetsURL("icon1.154ded30.svg");
const _imports_2 = "" + buildAssetsURL("icon5.0bf3140c.svg");
const _imports_3 = "" + buildAssetsURL("noun-speed-3341122.92f20c0a.svg");
const _imports_4 = "" + buildAssetsURL("noun-transmission-1325127.4e95cda3.svg");
const _imports_5 = "" + buildAssetsURL("icon3.ad85d6c4.svg");
const _imports_6 = "" + buildAssetsURL("icon6.215697dd.svg");
const _imports_7 = "" + buildAssetsURL("icon7.0af21f39.svg");
const _imports_8 = "" + buildAssetsURL("icon8.76fe68bf.svg");
const _sfc_main = {
  async setup() {
    let theColorId = ref(1);
    let checkNameCarScroll = ref(false);
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const router = useRouter();
    const MainRoute = useRoute();
    let id = MainRoute.query.id;
    let name = MainRoute.query.name;
    let route = ref("");
    let currentLang = ref(locale);
    console.log(route.value);
    let checkTabsWithSpecifications = ref(1);
    let checkTabsWithfeatures = ref(1);
    let carDetails = ref(1);
    let colorCar = ref(2);
    let url = getUrl();
    let pending = ref(false);
    let mainCar = ref([]);
    let similar_vehicles = ref([]);
    let specifications_and_features = ref([]);
    let apiColors = ref([]);
    let imagesWithColors = ref([]);
    let valuesOfSpecifications = ref([]);
    let valuesWithFeatures = ref([]);
    let favIcon = ref(false);
    const carLatestFunc = async () => {
      pending.value = true;
      let car = await axios.get(`${url}/cars/${id}`, {
        headers: {
          "Content-Language": `${currentLang.value}`
        }
      });
      mainCar.value = car.data.data;
      similar_vehicles.value = car.data.data.similar_vehicles;
      console.log(mainCar.value);
      specifications_and_features.value = mainCar.value.specifications_and_features;
      apiColors.value = mainCar.value.colors;
      imagesWithColors.value = mainCar.value.colors;
      if (car.status == 200) {
        pending.value = false;
      }
      for (let i = 0; i < specifications_and_features.value[0].length; i++) {
        valuesOfSpecifications.value.push(specifications_and_features.value[0][i].values);
      }
      for (let i = 0; i < specifications_and_features.value[1].length; i++) {
        valuesWithFeatures.value.push(specifications_and_features.value[1][i].features);
      }
    };
    carLatestFunc();
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
    const addToFav = () => {
      ({
        id: mainCar.value.id,
        name: mainCar.value.name,
        main_image: mainCar.value.cover_image,
        selling_price: mainCar.value.selling_price,
        selling_price_after_vat: mainCar.value.selling_price_after_vat,
        is_in_favorite: true
      });
    };
    ref([]);
    ref([]);
    const goToPurchasePage = (id2, color) => {
      const queryParams = {
        id: id2,
        colorId: color
      };
      const url2 = currentLang.value + "/purchase";
      router.push({ path: `/${url2}`, query: queryParams });
    };
    function copyToClipboard() {
    }
    useHead({
      title: currentLang.value == "ar" ? `${name}/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A` : `alkathiri motors / ${name}`,
      meta: [
        { name: "description", content: mainCar.value.meta_tag_description },
        { name: "keywords", content: mainCar.value.meta_tag_keywords }
      ]
    });
    return {
      modules: [Autoplay, Pagination, Navigation],
      checkNameCarScroll,
      checkTabsWithSpecifications,
      checkTabsWithfeatures,
      carDetails,
      colorCar,
      mainCar,
      specifications_and_features,
      valuesOfSpecifications,
      valuesWithFeatures,
      apiColors,
      imagesWithColors,
      theColorId,
      addToFav,
      localePath,
      goToPurchasePage,
      pending,
      similar_vehicles,
      route,
      pending,
      name,
      copyToClipboard,
      favIcon
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = Swiper;
  const _component_swiper_slide = SwiperSlide;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="carName" style="${ssrRenderStyle({ "margin-top": "100px" })}"><h3 class="fw-bolder text-center py-3">${ssrInterpolate($setup.mainCar.name)}</h3><div class="row gap-3 justify-content-between align-items-center"><div class="col-3"><div class="price d-flex align-items-center gap-5 w-100"><div class="thePrice text-center py-2 px-4"><p>${ssrInterpolate(_ctx.$t("price"))}</p><span>${ssrInterpolate($setup.mainCar.selling_price)} sar</span></div><div class="after text-center"><p>${ssrInterpolate(_ctx.$t("after vat"))}</p><span class="fw-bold">${ssrInterpolate($setup.mainCar.selling_price_after_vat)} sar</span></div></div></div><div class="col-12 col-xl-3 col-lg-3"><div class="colors d-flex align-items-center justify-content-between"><p class="available">${ssrInterpolate(_ctx.$t("Colors Available"))}</p><div class="theColors"><!--[-->`);
  ssrRenderList($setup.apiColors, (color, index2) => {
    _push(`<span style="${ssrRenderStyle({ "background-color": color.hex_code })}" class="${ssrRenderClass({ "active": $setup.colorCar == index2 + 1 })}"></span>`);
  });
  _push(`<!--]--></div><!--[-->`);
  ssrRenderList($setup.apiColors, (color, index2) => {
    _push(`<div>`);
    if ($setup.colorCar == index2 + 1) {
      _push(`<div class="mainColor" style="${ssrRenderStyle({ "background-color": color.hex_code })}"><p class="" class="${ssrRenderClass([{ "white": color.name == "\u0627\u0628\u064A\u0636" || color.name == "white" }, ""])}">${ssrInterpolate(color.name)}</p></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="col-12 col-xl-3 col-lg-3 px-4 d-flex justify-content-end"><button class="purchaseBtn">${ssrInterpolate(_ctx.$t("purchase"))}</button></div></div><div class="icons d-flex align-items-center gap-3"><img style="${ssrRenderStyle({ "cursor": "pointer" })}" data-bs-toggle="modal" data-bs-target="#shareViaModal"${ssrRenderAttr("src", _imports_0)} alt=""><i style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass([{ "fa-solid": $setup.favIcon }, "fa-regular fa-heart fav"])}"></i></div></div><div class="modal fade" id="shareViaModal" tabindex="-1" role="dialog" aria-labelledby="shareViaModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content col-12"><div class="modal-header"><h5 class="modal-title">Share via</h5><button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">\xD7</span></button></div><div class="modal-body"><div class="icon-container1 d-flex"><a target="_blank" class="smd"${ssrRenderAttr("href", `https://twitter.com/intent/tweet?url=${$setup.route}`)}><i class="img-thumbnail fab fa-twitter fa-2x" style="${ssrRenderStyle({ "color": "#4c6ef5", "background-color": "aliceblue" })}"></i><p>${ssrInterpolate(_ctx.$t("Twitter"))}</p></a><a class="smd" target="_blank"${ssrRenderAttr("href", `https://www.facebook.com/sharer/sharer.php?${$setup.route}&quote=${$setup.name}`)}><i class="img-thumbnail fab fa-facebook fa-2x" style="${ssrRenderStyle({ "color": "#3b5998", "background-color": "#eceff5" })}"></i><p>${ssrInterpolate(_ctx.$t("facebook"))}</p></a><a class="smd" target="_blank"${ssrRenderAttr("href", `https://wa.me/?text=${$setup.route}/`)}><i class="img-thumbnail fab fa-whatsapp fa-2x" style="${ssrRenderStyle({ "color": "#25D366", "background-color": "#cef5dc" })}"></i><p>Whatsapp</p></a></div></div><div class="modal-footer w-100"><div class="inp w-100"><input disabled${ssrRenderAttr("value", $setup.route)} class="col-11 ur" type="url"${ssrRenderAttr("placeholder", $setup.route ? $setup.route : "loading..")} id="myInput" aria-describedby="inputGroup-sizing-default" style="${ssrRenderStyle({})}"><button class=""><i class="far fa-clone"></i></button></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    "looped-slides": true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
      "640": {
        slidesPerView: 1,
        spaceBetween: 20
      },
      "768": {
        slidesPerView: 2,
        spaceBetween: 40
      },
      "1024": {
        slidesPerView: 1.5,
        spaceBetween: 50
      }
    },
    navigation: true,
    modules: $setup.modules,
    class: "mySwiper thecarSwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", $setup.mainCar.cover_image)} class="img-fluid mainpic"${ssrRenderAttr("alt", $setup.mainCar.name)}${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: $setup.mainCar.cover_image,
                  class: "img-fluid mainpic",
                  alt: $setup.mainCar.name
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($setup.imagesWithColors, (color, index2) => {
                _push3(`<div class="row gap-2 justify-content-around images"${_scopeId2}><!--[-->`);
                ssrRenderList(color.images, (item) => {
                  _push3(`<div class="col-5 col-xl-3 col-lg-3 mx-2"${_scopeId2}>`);
                  if ($setup.colorCar == index2 + 1) {
                    _push3(`<div${_scopeId2}><img class="img-fluid"${ssrRenderAttr("src", item)}${ssrRenderAttr("alt", $setup.mainCar.name)}${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                });
                _push3(`<!--]--></div>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($setup.imagesWithColors, (color, index2) => {
                  return openBlock(), createBlock("div", { class: "row gap-2 justify-content-around images" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(color.images, (item) => {
                      return openBlock(), createBlock("div", { class: "col-5 col-xl-3 col-lg-3 mx-2" }, [
                        $setup.colorCar == index2 + 1 ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("img", {
                            class: "img-fluid",
                            src: item,
                            alt: $setup.mainCar.name
                          }, null, 8, ["src", "alt"])
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 256))
                  ]);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", {
                src: $setup.mainCar.cover_image,
                class: "img-fluid mainpic",
                alt: $setup.mainCar.name
              }, null, 8, ["src", "alt"])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.imagesWithColors, (color, index2) => {
                return openBlock(), createBlock("div", { class: "row gap-2 justify-content-around images" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(color.images, (item) => {
                    return openBlock(), createBlock("div", { class: "col-5 col-xl-3 col-lg-3 mx-2" }, [
                      $setup.colorCar == index2 + 1 ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("img", {
                          class: "img-fluid",
                          src: item,
                          alt: $setup.mainCar.name
                        }, null, 8, ["src", "alt"])
                      ])) : createCommentVNode("", true)
                    ]);
                  }), 256))
                ]);
              }), 256))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="container mainCarDetails my-4"><div class="row justify-content-center gap"><div class="col-12 col-xl-7 col-lg-7 col-md-8"><div class="settings my-5"><div class="container settings-container"><div class="row gap-2 text-cente align-items-center justify-content-cente p-3"><div class="col-5 col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center setting-box p-2" style="${ssrRenderStyle({ "white-space": "nowrap" })}"><img${ssrRenderAttr("src", _imports_1)} alt=""><span>${ssrInterpolate(_ctx.$t("Model Year"))}</span><p class="fw-bold">${ssrInterpolate($setup.mainCar.year)}</p></div><div class="col-5 col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center setting-box p-2" style="${ssrRenderStyle({ "white-space": "nowrap" })}"><img${ssrRenderAttr("src", _imports_2)} alt=""><span>${ssrInterpolate(_ctx.$t("Engine"))}</span><p class="fw-bold">${ssrInterpolate($setup.mainCar.fuel_consumption)} liter</p></div><div class="col-5 col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center setting-box p-2"><img${ssrRenderAttr("src", _imports_3)} alt=""><span>${ssrInterpolate(_ctx.$t("Kilometers"))}</span><p class="fw-bold">${ssrInterpolate($setup.mainCar.maximum_force)}</p></div><div class="col-5 col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center setting-box p-2"><img${ssrRenderAttr("src", _imports_4)} alt=""><span>${ssrInterpolate(_ctx.$t("Transmission"))}</span><p class="fw-bold">${ssrInterpolate($setup.mainCar.motion_vector)}</p></div><div class="col-5 col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center setting-box p-2"><img${ssrRenderAttr("src", _imports_5)} alt=""><span>${ssrInterpolate(_ctx.$t("Number Of Doors"))}</span><p class="fw-bold">${ssrInterpolate($setup.mainCar.seats_number)}</p></div><div class="col-5 col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center setting-box p-2"><img${ssrRenderAttr("src", _imports_6)} alt=""><span>${ssrInterpolate(_ctx.$t("Seats"))}</span><p class="fw-bold">${ssrInterpolate($setup.mainCar.upholstered_seats)}</p></div><div class="col-5 col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center setting-box p-2"><img${ssrRenderAttr("src", _imports_7)} alt=""><span>${ssrInterpolate(_ctx.$t("Transmission"))}</span><p class="fw-bold">${ssrInterpolate($setup.mainCar.traction_type)}</p></div><div class="col-5 col-xl-2 col-lg-2 col-md-3 d-flex flex-column align-items-center setting-box p-2"><img${ssrRenderAttr("src", _imports_8)} alt=""><span>${ssrInterpolate(_ctx.$t("Fuel Type"))}</span><p class="fw-bold">${ssrInterpolate($setup.mainCar.engine_type)}</p></div></div></div></div><div class="Alldescription containe"><div class="container"><div class="header"><a class="${ssrRenderClass([{ "active": $setup.carDetails == 1 }, "fw-bold"])}">${ssrInterpolate(_ctx.$t("Car Description"))}</a><a href="#specification" class="${ssrRenderClass([{ "active": $setup.carDetails == 2 }, "fw-bold"])}">${ssrInterpolate(_ctx.$t("Specifications"))}</a><a href="#features" class="${ssrRenderClass([{ "active": $setup.carDetails == 3 }, "fw-bold"])}">${ssrInterpolate(_ctx.$t("Features"))}</a></div><div class="${ssrRenderClass([{ "active": $setup.carDetails == 1 }, "content-header"])}"><h4 class="fw-bolder">${ssrInterpolate(_ctx.$t("Car Description"))}</h4><p>${ssrInterpolate($setup.mainCar.description)}</p></div><div id="specification" class="tabs-container specification"><h3 class="fw-bolder">${ssrInterpolate(_ctx.$t("Specifications"))}</h3><div class="theTabs"><div class="tabs"><!--[-->`);
  ssrRenderList($setup.specifications_and_features[0], (tab, index2) => {
    _push(`<div class="${ssrRenderClass([{ "active": $setup.checkTabsWithSpecifications == index2 + 1 }, "tab"])}"><img${ssrRenderAttr("src", tab.image)} class="img-fluid"${ssrRenderAttr("alt", tab.name)}><span>${ssrInterpolate(tab.name)}</span></div>`);
  });
  _push(`<!--]--></div><div class="content-container"><!--[-->`);
  ssrRenderList($setup.valuesOfSpecifications, (content, index2) => {
    _push(`<div class="${ssrRenderClass([{ "active": $setup.checkTabsWithSpecifications == index2 + 1 }, "content"])}"><!--[-->`);
    ssrRenderList($setup.valuesOfSpecifications[index2], (item, index3) => {
      _push(`<div class="item"><p>${ssrInterpolate(item.name)}</p><span>${ssrInterpolate(item.value)}</span></div>`);
    });
    _push(`<!--]--></div>`);
  });
  _push(`<!--]--></div></div></div><div id="features" class="tabs-container features"><h3 class="fw-bolder">${ssrInterpolate(_ctx.$t("Features"))}</h3><div class="theTabs"><div class="tabs"><!--[-->`);
  ssrRenderList($setup.specifications_and_features[1], (tab, index2) => {
    _push(`<div class="${ssrRenderClass([{ "active": $setup.checkTabsWithfeatures == index2 + 1 }, "tab"])}"><img${ssrRenderAttr("src", tab.image)} class="img-fluid"${ssrRenderAttr("alt", tab.name)}><span>${ssrInterpolate(tab.name)}</span></div>`);
  });
  _push(`<!--]--></div><div class="content-container"><!--[-->`);
  ssrRenderList($setup.specifications_and_features[1], (content, index2) => {
    _push(`<div class="${ssrRenderClass([{ "active": $setup.checkTabsWithfeatures == index2 + 1 }, "content"])}"><!--[-->`);
    ssrRenderList($setup.valuesWithFeatures[index2], (item, index3) => {
      _push(`<div class="item features"><span>${ssrInterpolate(item)}</span></div>`);
    });
    _push(`<!--]--></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div><div class="col-12 col-xl-5 col-lg-5 mainCarNameContainer"><div class="sticky-carDetails d-flex flex-column gap-3"><div class="carNameSlide"><h3 class="fw-bolder">${ssrInterpolate($setup.mainCar.name)}</h3><div class="colors d-flex align-items-center justify-content-between"><p class="available">colors available</p><div class="theColors"><!--[-->`);
  ssrRenderList($setup.apiColors, (color, index2) => {
    _push(`<span style="${ssrRenderStyle({ "background-color": color.hex_code })}" class="${ssrRenderClass({ "active": $setup.colorCar == index2 + 1 })}"></span>`);
  });
  _push(`<!--]--></div><!--[-->`);
  ssrRenderList($setup.apiColors, (color, index2) => {
    _push(`<div>`);
    if ($setup.colorCar == index2 + 1) {
      _push(`<div class="mainColor" style="${ssrRenderStyle({ "background-color": color.hex_code })}"><p class="" class="${ssrRenderClass([{ "white": color.name == "\u0627\u0628\u064A\u0636" || color.name == "white" }, ""])}">${ssrInterpolate(color.name)}</p></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="price d-flex align-items-center gap-5 w-100"><div class="thePrice text-center py-2 px-4 w-50"><p>price</p><span>${ssrInterpolate($setup.mainCar.selling_price)} sar</span></div><div class="after text-center"><p>after vat</p><span class="fw-bold">${ssrInterpolate($setup.mainCar.selling_price_after_vat)} sar</span></div></div><div class="icons d-flex align-items-center gap-3"><img style="${ssrRenderStyle({ "cursor": "pointer" })}" data-bs-toggle="modal" data-bs-target="#shareViaModal"${ssrRenderAttr("src", _imports_0)} alt=""><i style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass([{ "fa-solid": $setup.favIcon }, "fa-regular fa-heart fav"])}"></i></div></div><button class="w-100">${ssrInterpolate(_ctx.$t("purchase"))}</button></div></div></div></div>`);
  if ($setup.similar_vehicles.length >= 1) {
    _push(`<div class="similarr"><div class="container"><h3 class="px-5 fw-bolder thehead">${ssrInterpolate(_ctx.$t("similar cars"))}</h3><div class="row justify-content-center gap-3"><!--[-->`);
    ssrRenderList($setup.similar_vehicles, (car) => {
      _push(`<div class="col-xl-2 col-lg-2 col-md-3 mainlatestbox"><div class="image"><img${ssrRenderAttr("src", car.main_image)} alt=""></div><h3>${ssrInterpolate(car.name)}</h3><div class="text1"><div class="price"><span>${ssrInterpolate(_ctx.$t("price"))}</span><h4>${ssrInterpolate(_ctx.offer.selling_price)} SAR</h4></div><div class="after"><span>${ssrInterpolate(_ctx.$t("after vat"))}</span><h4>${ssrInterpolate(_ctx.offer.selling_price_after_vat)} SAR</h4></div></div><span class="detail">${ssrInterpolate(_ctx.$t("details"))}</span><div class="overlay"></div><i class="fa-regular fa-heart fav"></i></div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.pending) {
    _push(`<div class="mainLoader"><span class="loader"></span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/car/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-ff686385.mjs.map
