import { _ as __nuxt_component_0 } from "./client-only-29ef7f45.js";
import { u as useI18n, a as useHead } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import { g as getUrl } from "./useState-8b8d35cc.js";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import "mosha-vue-toastify";
/* empty css                */import axios from "axios";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "devalue";
import "klona";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "defu";
const _imports_0 = "" + __buildAssetsURL("map.836b10c5.svg");
const _imports_1 = "" + __buildAssetsURL("local.218658fa.svg");
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    let lang = ref(locale);
    let url = getUrl();
    let cites = ref([]);
    let pending = ref(true);
    let spinner = ref(false);
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
    let completed = ref("Connected successfully");
    let success = ref("success");
    if (lang.value == "ar") {
      completed.value = "تم الاتصال بنجاح";
      success.value = "نجاح";
    } else if (lang.value == "en") {
      completed.value = "Connected successfully";
      success.value = "success";
    }
    let checkBranch = ref(1);
    useHead({
      title: lang.value == "ar" ? "اتصل بنا / الكثيري للسيارات" : "alkathiri motors / contact us"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container contactus" style="${ssrRenderStyle({ "margin-top": "150px" })}"><div class="row justify-content-center gap-4"><div class="col-12 col-xl-6 col-lg-6"><h3 class="theHead"${ssrRenderAttr("data-contact", _ctx.$t("KEEP IN TOUCH"))}>${ssrInterpolate(_ctx.$t("CONTACT US NOW"))}</h3><div class="accordion d-flex flex-column gap-3" id="accordionExample"><!--[-->`);
      ssrRenderList(unref(cites), (item, index) => {
        _push(`<div class="accordion-item"><h2 class="accordion-header"><button class="${ssrRenderClass([{ "collapsed": index == 0 }, "accordion-button"])}" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse${index}`)} aria-expanded="false" aria-controls="collapseTwo"><img${ssrRenderAttr("src", _imports_0)} alt=""><span>${ssrInterpolate(item.name)}</span></button></h2><div${ssrRenderAttr("id", `collapse${index}`)} class="${ssrRenderClass([{ "show": index }, "accordion-collapse collapse"])}" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="branches"><!--[-->`);
        ssrRenderList(item.branches, (branch, index2) => {
          _push(`<span style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass({ "active": unref(checkBranch) == index2 + 1 })}">${ssrInterpolate(`${_ctx.$t("branch")} ${index2 + 1}`)}</span>`);
        });
        _push(`<!--]--></div><!--[-->`);
        ssrRenderList(item.branches, (branch, index2) => {
          _push(`<div class="">`);
          if (unref(checkBranch) == index2 + 1) {
            _push(`<div class="thebranch row align-items-center justify-content-between gap-3"><div class="col-12 col-xl-5 col-lg-5 col-md-5"><h4>${ssrInterpolate(branch.name)}</h4><div class="image">`);
            _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
            _push(`<button><img${ssrRenderAttr("src", _imports_1)} alt=""><span>${ssrInterpolate(_ctx.$t("get directions"))}</span></button></div></div><div class="col-12 col-xl-5 col-lg-5 col-md-5 d-flex flex-column align-items-center gap-2"><h5>${ssrInterpolate(_ctx.$t("contact data"))}</h5><div class="icons d-flex flex-column gap-2"><div class="icon d-flex align-items-center gap-2"><i class="fa-solid fa-location-dot"></i><span>${ssrInterpolate(branch.address)}</span></div><div class="icon d-flex align-items-center gap-2"><i class="fa-solid fa-phone"></i><span>${ssrInterpolate(branch.phone)}</span></div><div class="icon d-flex align-items-center gap-2"><i class="fa-brands fa-whatsapp"></i><span>${ssrInterpolate(branch.whatsapp)}</span></div><div class="icon d-flex align-items-center gap-2"><i class="fa-solid fa-envelope"></i><span>${ssrInterpolate(branch.email)}</span></div></div><h5 class="work">${ssrInterpolate(_ctx.$t("working hours"))}</h5><div class="text-center"><p>${ssrInterpolate(_ctx.$t("everyday"))}</p><p>${ssrInterpolate(branch.start_time)} - ${ssrInterpolate(branch.end_time)}</p></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-12 col-xl-5 col-lg-5 mt-4"><form action=""><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("full name"))}</label><input${ssrRenderAttr("value", unref(objContact).name)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("write your name.."))}>`);
      if (unref(nameError)) {
        _push(`<span class="errorMessage text-danger fw-bold">${ssrInterpolate(unref(nameError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("email"))}</label><input${ssrRenderAttr("value", unref(objContact).email)} type="email" placeholder="example@mail.com..">`);
      if (unref(emailError)) {
        _push(`<span class="errorMessage text-danger fw-bold">${ssrInterpolate(unref(emailError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("message title"))}</label><input${ssrRenderAttr("value", unref(objContact).title)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("write your message title..."))}>`);
      if (unref(titleError)) {
        _push(`<span class="errorMessage text-danger fw-bold">${ssrInterpolate(unref(titleError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("your message"))}</label><textarea style="${ssrRenderStyle({ "resize": "none" })}" name="" id="" cols="30" rows="10"${ssrRenderAttr("placeholder", _ctx.$t("write your message here"))}>${ssrInterpolate(unref(objContact).message)}</textarea>`);
      if (unref(messageError)) {
        _push(`<span class="errorMessage text-danger fw-bold">${ssrInterpolate(unref(messageError))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="thebtn text-center"><button style="${ssrRenderStyle({ "padding": "10px 60px" })}">`);
      if (!unref(checkForm)) {
        _push(`<div class="d-flex align-items-center gap-3">${ssrInterpolate(_ctx.$t("send"))} `);
        if (unref(spinner)) {
          _push(`<div class="spinner-border text-light" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-9f6f2a63.js.map
