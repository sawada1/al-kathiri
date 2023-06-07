import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { u as useI18n, d as useRouter, a as useHead } from './server.mjs';
import { u as useLocalePath } from './composables-63b0a683.mjs';
import { g as getUrl } from './url-fc757438.mjs';
import { ref, unref, useSSRContext } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
import axios from 'file://F:/github/AlKathiri-Frontend/node_modules/axios/index.js';
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
      title: lang.value == "ar" ? " \u0648\u0638\u0627\u0626\u0641/\u0627\u0644\u0643\u062B\u064A\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "alkathiri motors / careers",
      meta: [
        { name: "description", content: "My amazing site." }
      ]
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

export { _sfc_main as default };
//# sourceMappingURL=index-048999b7.mjs.map
