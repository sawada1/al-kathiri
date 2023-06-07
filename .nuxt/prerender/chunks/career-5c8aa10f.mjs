import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { u as useI18n, d as useRouter, b as useRoute, a as useHead } from './server.mjs';
import { ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { g as getUrl } from './url-8b8d35cc.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
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
  __name: "career",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const router = useRouter();
    const route = useRoute();
    let url = getUrl();
    let lang = ref(locale);
    let pending = ref(false);
    const id = route.query.id ? route.query.id : null;
    let allJobs = ref([]);
    const jobFunc = async () => {
      pending.value = true;
      const jobs = await axios.get(`${url}/careers`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (jobs.status == 200) {
        pending.value = false;
      }
      allJobs.value = jobs.data.data;
      console.log(allJobs.value);
    };
    jobFunc();
    const cv = ref(null);
    const phone = ref(null);
    const email = ref(null);
    const namee = ref("");
    let emailError = ref(null);
    let phoneError = ref(null);
    let nameError = ref(null);
    let cvError = ref(null);
    let spinner = ref(false);
    const sendjob = async () => {
      let formData = new FormData();
      formData.append("name", namee.value);
      formData.append("email", email.value);
      formData.append("phone", phone.value);
      formData.append("cv", cv.value);
      console.log(formData);
      spinner.value = true;
      await fetch(`${url}/careers/${id}/apply`, {
        method: "POST",
        headers: {
          //   'Accept': 'application/json',
          //  'Content-Type': 'multipart/form-data',
        },
        body: formData
      }).then((response) => response.json()).then((json) => {
        console.log(json);
        spinner.value = false;
        if (json.message) {
          emailError.value = json.errors.email == void 0 ? null : json.errors.email[0];
          nameError.value = json.errors.name == void 0 ? null : json.errors.name[0];
          phoneError.value = json.errors.phone == void 0 ? null : json.errors.phone[0];
          cvError.value = json.errors.cv == void 0 ? null : json.errors.cv[0];
        } else {
          emailError.value = null;
          nameError.value = null;
          phoneError.value = null;
          cvError.value = null;
          router.push(`/${lang.value}/submited`);
        }
      });
    };
    useHead({
      title: lang.value == "ar" ? " \u0648\u0638\u0627\u0626\u0641/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / careers",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container career"><h3${ssrRenderAttr("data-find", _ctx.$t("JOIN OUR TEAM"))}>${ssrInterpolate(_ctx.$t("find your career"))}</h3><div class="row gap-2 justify-content-center"><div class="col-12 col-xl-4 col-lg-4 col-md-4 d-flex flex-column gap-3"><div class="inpsearch d-flex align-items-center justify-content-between"><input type="search" placeholder="Job title or key..."><i class="fa-solid fa-magnifying-glass"></i></div><p class="numjobs"><span>${ssrInterpolate(unref(allJobs).length)}</span> ${ssrInterpolate(_ctx.$t("open opportunities"))}</p><div class="jobs d-flex flex-column gap-3"><!--[-->`);
      ssrRenderList(unref(allJobs), (job) => {
        _push(`<div class="${ssrRenderClass([{ "active": job.id == unref(id) }, "job d-flex align-items-center justify-content-between"])}"><div class="det"><h6>${ssrInterpolate(job.title)}</h6><span>${ssrInterpolate(job.address)} | ${ssrInterpolate(job.created_at)}</span></div><i class="fa-solid fa-chevron-right"></i></div>`);
      });
      _push(`<!--]--></div></div><div class="col-12 col-xl-7 col-lg-7 col-md-7 my-5"><!--[-->`);
      ssrRenderList(unref(allJobs), (job) => {
        _push(`<div>`);
        if (unref(id) == job.id) {
          _push(`<form action=""><h5><i class="fa-solid fa-chevron-left"></i> ${ssrInterpolate(job.title)}</h5><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("full name"))}</label><input${ssrRenderAttr("value", unref(namee))} type="text"${ssrRenderAttr("placeholder", _ctx.$t("write your name.."))}>`);
          if (unref(nameError)) {
            _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(nameError))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("email"))}</label><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="example@mail.com...">`);
          if (unref(emailError)) {
            _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(emailError))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("phone number"))}</label><input${ssrRenderAttr("value", unref(phone))} type="text" placeholder="05xxxxxxxx...">`);
          if (unref(phoneError)) {
            _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(phoneError))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("resume"))}</label><input type="file" name="">`);
          if (unref(cvError)) {
            _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(cvError))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Do you have any comments ?"))}</label><textarea style="${ssrRenderStyle({ "resize": "none" })}"${ssrRenderAttr("placeholder", _ctx.$t("write your message here"))} name="" cols="10" rows="5"></textarea></div><div>`);
          _push(ssrRenderComponent(_component_nuxt_link, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="d-flex align-items-center gap-3"${ssrIncludeBooleanAttr(unref(spinner)) ? " disabled" : ""}${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("send application"))}</span>`);
                if (unref(spinner)) {
                  _push2(`<div class="spinner-border text-light" role="status"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</button>`);
              } else {
                return [
                  createVNode("button", {
                    class: "d-flex align-items-center gap-3",
                    disabled: unref(spinner),
                    onClick: ($event) => sendjob()
                  }, [
                    createVNode("span", null, toDisplayString(_ctx.$t("send application")), 1),
                    unref(spinner) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "spinner-border text-light",
                      role: "status"
                    })) : createCommentVNode("", true)
                  ], 8, ["disabled", "onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></form>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/career.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=career-5c8aa10f.mjs.map
