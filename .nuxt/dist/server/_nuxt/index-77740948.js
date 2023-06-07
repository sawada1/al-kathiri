import { Swiper, SwiperSlide } from "swiper/vue";
import { _ as __nuxt_component_0 } from "./nuxt-link-28d4e889.js";
import { _ as __nuxt_component_0$1 } from "./client-only-29ef7f45.js";
import { g as getUrl } from "./url-fc757438.js";
import { u as useLocalePath } from "./composables-63b0a683.js";
import { u as useI18n, d as useRouter, a as useHead } from "../server.mjs";
import { ref, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./time-72384467.js";
import axios from "axios";
import "ufo";
import "js-cookie";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "is-https";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let url = getUrl();
    const localePath = useLocalePath();
    const { locale } = useI18n();
    let lang = ref(locale);
    let pending = ref(false);
    useRouter();
    let newsArray = ref([]);
    const productNews = async () => {
      pending.value = true;
      const products = await axios(`${url}/news`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (products.status == 200) {
        pending.value = false;
      }
      newsArray.value = products.data.data;
    };
    productNews();
    useHead({
      title: lang.value == "ar" ? "اخبار / الكثيري للسيارات" : "alkathiri motors / news",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="news"><div class="newSection mt-5"><h3 class="fw-bolder"${ssrRenderAttr("data-news", _ctx.$t("BE AWARE OF OUR"))}>${ssrInterpolate(_ctx.$t("latest news"))}</h3></div>`);
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
        modules: _ctx.modules,
        class: "mySwiper latestNews"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(newsArray), (box) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { class: "box" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: unref(localePath)(`/news/${box.id}`)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="image"${_scopeId3}><img${ssrRenderAttr("src", box.cover_image)} loading="lazy" alt=""${_scopeId3}></div><div class="text"${_scopeId3}><h3${_scopeId3}>${ssrInterpolate(box.title)}</h3><p${_scopeId3}>${ssrInterpolate(box.description.substring(3, 180))}</p><div class="detail"${_scopeId3}><div class="tags"${_scopeId3}><div class="tag"${_scopeId3}><i class="fa-solid fa-tag"${_scopeId3}></i><span${_scopeId3}>${ssrInterpolate(box.tags)}</span></div><div class="tag"${_scopeId3}><i class="fa-regular fa-clock"${_scopeId3}></i><span${_scopeId3}>${ssrInterpolate(box.created_at)}</span></div></div><div class="read"${_scopeId3}><span class="fw-bold"${_scopeId3}>${ssrInterpolate(_ctx.$t("now more"))}</span><i class="fa-solid fa-chevron-right"${_scopeId3}></i></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "image" }, [
                              createVNode("img", {
                                src: box.cover_image,
                                loading: "lazy",
                                alt: ""
                              }, null, 8, ["src"])
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_nuxt_link, {
                        to: unref(localePath)(`/news/${box.id}`)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "image" }, [
                            createVNode("img", {
                              src: box.cover_image,
                              loading: "lazy",
                              alt: ""
                            }, null, 8, ["src"])
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
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(newsArray), (box) => {
                return openBlock(), createBlock(_component_swiper_slide, { class: "box" }, {
                  default: withCtx(() => [
                    createVNode(_component_nuxt_link, {
                      to: unref(localePath)(`/news/${box.id}`)
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "image" }, [
                          createVNode("img", {
                            src: box.cover_image,
                            loading: "lazy",
                            alt: ""
                          }, null, 8, ["src"])
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
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="container mainlatest"><div class="row gap-2 justify-content-center"><!--[-->`);
      ssrRenderList(unref(newsArray), (product) => {
        _push(`<div style="${ssrRenderStyle({ "cursor": "pointer" })}" class="col-12 col-xl-3 col-lg-3 col-md-2 boxx"><img class="mainpic"${ssrRenderAttr("src", product.cover_image)}${ssrRenderAttr("alt", product.title)}><div class="textt"><h4>${ssrInterpolate(product.title)}</h4>`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`<div class="mainIcons"><div class="icons"><div class="icon"><img${ssrRenderAttr("src", _imports_0)} alt=""><span>${ssrInterpolate(product.tags)}</span></div><div class="icon"><img${ssrRenderAttr("src", _imports_1)} alt=""><span>${ssrInterpolate(product.created_at)}</span></div></div><span class="read fw-bold">${ssrInterpolate(_ctx.$t("read more"))} <i class="fa-solid fa-chevron-right"></i></span></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-77740948.js.map
