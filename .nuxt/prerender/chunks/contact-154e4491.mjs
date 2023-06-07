import { b as buildAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { u as useI18n, a as useHead } from './server.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './url-fc757438.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
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

const _imports_0 = "" + buildAssetsURL("map.836b10c5.svg");
const _imports_1 = "" + buildAssetsURL("local.218658fa.svg");
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    let lang = ref(locale);
    let url = getUrl();
    let cites = ref([]);
    let pending = ref(true);
    const contactFunc = async () => {
      let allCites = await axios.get(`${url}/branches`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (allCites.status == 200) {
        pending.value = false;
      }
      cites.value = allCites.data.data;
    };
    contactFunc();
    let objContact = ref({
      message: "",
      email: "",
      title: "",
      name: ""
    });
    let emailError = ref(null);
    let messageError = ref(null);
    let nameError = ref(null);
    let titleError = ref(null);
    let checkForm = ref(null);
    let checkBranch = ref(1);
    useHead({
      title: lang.value == "ar" ? "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627 / \u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / contact us",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container contactus"><div class="row justify-content-center gap-4"><div class="col-12 col-xl-6 col-lg-6"><h3 class="theHead"${ssrRenderAttr("data-contact", _ctx.$t("KEEP IN TOUCH"))}>${ssrInterpolate(_ctx.$t("CONTACT US NOW"))}</h3><div class="accordion d-flex flex-column gap-3" id="accordionExample"><!--[-->`);
      ssrRenderList(unref(cites), (item, index) => {
        _push(`<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse${index}`)} aria-expanded="false" aria-controls="collapseTwo"><img${ssrRenderAttr("src", _imports_0)} alt=""><span>${ssrInterpolate(item.name)}</span></button></h2><div${ssrRenderAttr("id", `collapse${index}`)} class="${ssrRenderClass([{ "show": index == 1 }, "accordion-collapse collapse"])}" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="branches"><!--[-->`);
        ssrRenderList(item.branches, (branch, index2) => {
          _push(`<span class="${ssrRenderClass({ "active": unref(checkBranch) == index2 + 1 })}">${ssrInterpolate(`${_ctx.$t("branch")} ${index2 + 1}`)}</span>`);
        });
        _push(`<!--]--></div><!--[-->`);
        ssrRenderList(item.branches, (branch, index2) => {
          _push(`<div class="thebranch row align-items-center justify-content-between gap-3"><div class="col-12 col-xl-5 col-lg-5 col-md-5"><h4>${ssrInterpolate(branch.name)}</h4><div class="image">`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
          _push(`<button><img${ssrRenderAttr("src", _imports_1)} alt=""><span>${ssrInterpolate(_ctx.$t("get directions"))}</span></button></div></div><div class="col-12 col-xl-5 col-lg-5 col-md-5 d-flex flex-column align-items-center gap-2"><h5>${ssrInterpolate(_ctx.$t("contact data"))}</h5><div class="icons d-flex flex-column gap-2"><div class="icon d-flex align-items-center gap-2"><i class="fa-solid fa-location-dot"></i><span>${ssrInterpolate(branch.address)}</span></div><div class="icon d-flex align-items-center gap-2"><i class="fa-solid fa-phone"></i><span>${ssrInterpolate(branch.phone)}</span></div><div class="icon d-flex align-items-center gap-2"><i class="fa-brands fa-whatsapp"></i><span>${ssrInterpolate(branch.whatsapp)}</span></div><div class="icon d-flex align-items-center gap-2"><i class="fa-solid fa-envelope"></i><span>${ssrInterpolate(branch.email)}</span></div></div><h5 class="work">${ssrInterpolate(_ctx.$t("working hours"))}</h5><div class="text-center"><p>${ssrInterpolate(_ctx.$t("everyday"))}</p><p>${ssrInterpolate(branch.start_time)} - ${ssrInterpolate(branch.end_time)}</p></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-12 col-xl-5 col-lg-5"><form action=""><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("full name"))}</label><input${ssrRenderAttr("value", unref(objContact).name)} type="text" placeholder="write your name..">`);
      if (unref(nameError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(nameError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("email"))}</label><input${ssrRenderAttr("value", unref(objContact).email)} type="email" placeholder="example@mail.com..">`);
      if (unref(emailError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(emailError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("message title"))}</label><input${ssrRenderAttr("value", unref(objContact).title)} type="text" placeholder="write your message title...">`);
      if (unref(titleError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(titleError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("your message"))}</label><textarea style="${ssrRenderStyle({ "resize": "none" })}" name="" id="" cols="30" rows="10" placeholder="write your message">${ssrInterpolate(unref(objContact).message)}</textarea>`);
      if (unref(messageError)) {
        _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(messageError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="thebtn text-center"><button style="${ssrRenderStyle({ "padding": "10px 60px" })}">`);
      if (!unref(checkForm)) {
        _push(`<span>${ssrInterpolate(_ctx.$t("send"))}</span>`);
      } else {
        _push(`<span>success</span>`);
      }
      _push(`</button></div></form></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-154e4491.mjs.map
