import { Swiper, SwiperSlide } from 'file://F:/github/AlKathiri-Frontend/node_modules/swiper/vue/swiper-vue.js';
import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-29ef7f45.mjs';
import { g as getUrl } from './useState-8b8d35cc.mjs';
import { u as useLocalePath } from './composables-2717fe6a.mjs';
import { u as useI18n, d as useRouter, a as useHead } from './server.mjs';
import { ref, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_1 } from './time-72384467.mjs';
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
import './renderer.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';

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
      title: lang.value == "ar" ? "\u0627\u062E\u0628\u0627\u0631 / \u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / news"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_client_only = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="news" style="${ssrRenderStyle({ "margin-top": "150px" })}"><div class="newSection mt-5"><h3 class="fw-bolder"${ssrRenderAttr("data-news", _ctx.$t("BE AWARE OF OUR"))}>${ssrInterpolate(_ctx.$t("latest news"))}</h3></div>`);
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
                          _push4(`<div class="image"${_scopeId3}><img${ssrRenderAttr("src", box.cover_image)} loading="lazy" alt=""${_scopeId3}></div><div class="text"${_scopeId3}><h3${_scopeId3}>${ssrInterpolate(box.title)}</h3><p${_scopeId3}>${ssrInterpolate(box.description.substring(3, 180))}</p><div class="detail"${_scopeId3}><div class="tags"${_scopeId3}><div class="tag"${_scopeId3}><i class="fa-solid fa-tag"${_scopeId3}></i><span${_scopeId3}>${ssrInterpolate(box.tags)}</span></div><div class="tag"${_scopeId3}><i class="fa-regular fa-clock"${_scopeId3}></i><span${_scopeId3}>${ssrInterpolate(box.created_at)}</span></div></div><div class="read d-flex align-items-center gap-1"${_scopeId3}><span class="fw-bold"${_scopeId3}>${ssrInterpolate(_ctx.$t("now more"))}</span><i class="fa-solid fa-chevron-right"${_scopeId3}></i></div></div></div>`);
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
                                createVNode("div", { class: "read d-flex align-items-center gap-1" }, [
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
                              createVNode("div", { class: "read d-flex align-items-center gap-1" }, [
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
                            createVNode("div", { class: "read d-flex align-items-center gap-1" }, [
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
        _push(`<div class="mainIcons"><div class="icons"><div class="icon"><img${ssrRenderAttr("src", _imports_0)} alt=""><span>${ssrInterpolate(product.tags)}</span></div><div class="icon"><img${ssrRenderAttr("src", _imports_1)} alt=""><span>${ssrInterpolate(product.created_at)}</span></div></div><span class="read fw-bold d-flex align-items-center gap-1">${ssrInterpolate(_ctx.$t("read more"))} <i class="fa-solid fa-chevron-right"></i></span></div></div></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=index-c4ce58b7.mjs.map
