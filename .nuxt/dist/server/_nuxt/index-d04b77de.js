import { _ as __nuxt_component_0 } from "./client-only-29ef7f45.js";
import { u as useI18n, d as useRouter, a as useHead } from "../server.mjs";
import { u as useLocalePath } from "./composables-2717fe6a.js";
import { g as getUrl } from "./url-8b8d35cc.js";
import { ref, unref, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import axios from "axios";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    useLocalePath();
    const url = getUrl();
    useRouter();
    let checkJob = ref(1);
    let lang = ref(locale);
    let pending = ref(false);
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
    useHead({
      title: lang.value == "ar" ? " وظائف/الكثيري للسيارات" : "alkathiri motors / careers"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container career"><h3${ssrRenderAttr("data-find", _ctx.$t("JOIN OUR TEAM"))}>${ssrInterpolate(_ctx.$t("find your career"))}</h3><div class="row gap-2 justify-content-center"><div class="col-12 col-xl-4 col-lg-4 col-md-4 d-flex flex-column gap-3"><div class="inpsearch d-flex align-items-center justify-content-between"><input type="search" placeholder="Job title or key..."><i class="fa-solid fa-magnifying-glass"></i></div><p class="numjobs"><span>${ssrInterpolate(unref(allJobs).length)}</span>${ssrInterpolate(_ctx.$t("open Opportunities"))}</p><div class="jobs d-flex flex-column gap-3"><!--[-->`);
      ssrRenderList(unref(allJobs), (job, index) => {
        _push(`<div class="${ssrRenderClass([{ "active": unref(checkJob) == index + 1 }, "job d-flex align-items-center justify-content-between"])}"><div class="det"><h6>${ssrInterpolate(job.title)}</h6><span>${ssrInterpolate(job.address)} | ${ssrInterpolate(job.created_at)}</span></div><i class="fa-solid fa-chevron-right"></i></div>`);
      });
      _push(`<!--]--></div></div><div class="col-12 col-xl-7 col-lg-7 col-md-7 mt-5"><!--[-->`);
      ssrRenderList(unref(allJobs), (job, index) => {
        _push(`<div class="jobdetail">`);
        if (unref(checkJob) == job.id) {
          _push(`<div><div class="title d-flex align-items-center justify-content-between"><h4>${ssrInterpolate(job.title)}</h4><div class="d-flex align-items-center gap-4"><span>${ssrInterpolate(job.address)} | ${ssrInterpolate(job.created_at)}</span><button>${ssrInterpolate(_ctx.$t("apply now"))}</button></div></div>`);
          _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
          _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-d04b77de.js.map
