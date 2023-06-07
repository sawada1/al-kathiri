import { _ as __nuxt_component_0 } from './nuxt-link-28d4e889.mjs';
import { g as getUrl } from './url-8b8d35cc.mjs';
import { withAsyncContext, ref, unref, withCtx, createVNode, isRef, useSSRContext, computed, reactive, toRef, getCurrentInstance, onServerPrefetch } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/index.mjs';
import { b as useRoute, e as useNuxtApp, f as useRequestFetch, c as createError } from './server.mjs';
import { hash } from 'file://F:/github/AlKathiri-Frontend/node_modules/ohash/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'file://F:/github/AlKathiri-Frontend/node_modules/vue/server-renderer/index.mjs';
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
import 'file://F:/github/AlKathiri-Frontend/node_modules/unstorage/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/radix3/dist/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/@intlify/bundle-utils/index.mjs';
import 'file://F:/github/AlKathiri-Frontend/node_modules/pathe/dist/index.mjs';

const getDefault = () => null;
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_f = (_e = getCachedData()) != null ? _e : (_a = options.default) == null ? void 0 : _a.call(options)) != null ? _f : null),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a3;
      var _a22;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref((_a3 = (_a22 = options.default) == null ? void 0 : _a22.call(options)) != null ? _a3 : null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let url = getUrl();
    let { id } = useRoute().params;
    const { data: car } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${url}/cars/${id}`, "$Qo7LlY8UbH")), __temp = await __temp, __restore(), __temp);
    const mainCar = ref(car.value.data);
    let methodActive = ref(1);
    let typeActive = ref(2);
    const form = ref([
      { name: "", price: 0 }
    ]);
    ref({
      payment_type: "",
      cars: form.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="purchasee container"><div class="row"><div class="col-12 col-xl-7 col-lg-7"><h3 class="head">PURCHASE ORDER</h3><div class="individual"><form action=""><div class="header">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/purchase/individuals/${unref(mainCar).id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="${ssrRenderClass([{ "active": unref(typeActive) == 1 }, "first"])}"${_scopeId}>individuals</p>`);
          } else {
            return [
              createVNode("p", {
                class: ["first", { "active": unref(typeActive) == 1 }],
                onClick: ($event) => isRef(typeActive) ? typeActive.value = 1 : typeActive = 1
              }, "individuals", 10, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/corporate/${unref(mainCar).id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="${ssrRenderClass({ "active": unref(typeActive) == 2 })}"${_scopeId}>corporate</p>`);
          } else {
            return [
              createVNode("p", {
                onClick: ($event) => isRef(typeActive) ? typeActive.value = 2 : typeActive = 2,
                class: { "active": unref(typeActive) == 2 }
              }, "corporate", 10, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="method"><h4>payment method</h4><div class="choose"><span class="${ssrRenderClass({ "active": unref(methodActive) == 1 })}">finance</span><span class="${ssrRenderClass({ "active": unref(methodActive) == 2 })}">cash</span></div></div><div class="${ssrRenderClass([{ "active": unref(methodActive) == 1 }, "finance"])}"><!--[-->`);
      ssrRenderList(unref(form), (item, index) => {
        _push(`<div class="inp special"><label for="">The selected vehicle *</label><input class="bigOne" type="text" placeholder="Vehicle name"${ssrRenderAttr("value", item.name)}><input type="number" placeholder="the number"${ssrRenderAttr("value", item.price)}><div class="d-flex align-items-center gap-2"><i class="fa-solid fa-plus"></i>`);
        if (unref(form).length > 1) {
          _push(`<i class="fa-solid fa-minus"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--><div class="inp"><label for="">Company Name *</label><input type="text" placeholder="Company Name.."></div><div class="inp"><label for="">Official email *</label><input type="text" placeholder="example@mail.com"></div><div class="inp"><label for="">The Chief Executive Officer (CEO) *</label><input type="text" placeholder="The Chief Executive Officer (CEO) ..."></div><div class="inp"><label for="">Mobile number *</label><input type="text" placeholder="05xxxxxxxx..."></div><div class="inp"><label for="">The company&#39;s headquarter* </label><input type="text" placeholder="city..."></div><div class="inp"><label for="">Company activity (According to the record) *</label><select><option value="">Company activity (According to the record)</option></select></div><div class="inp"><label for="">Company age *</label><input type="number" name="" value="0"></div><div class="inp"><label for="">Bank account*</label><select><option value="">select bank..</option></select></div></div><div class="${ssrRenderClass([{ "active": unref(methodActive) == 2 }, "corporate"])}"><div class="inp special"><label for="">The selected vehicle *</label><input class="bigOne" type="text" placeholder="Vehicle name"><input type="text" placeholder="the number"><i class="fa-solid fa-plus"></i></div><div class="inp"><label for="">Company Name *</label><input type="text" placeholder="Company Name.."></div><div class="inp"><label for="">Official email *</label><input type="text" placeholder="example@mail.com"></div><div class="inp"><label for="">The Chief Executive Officer (CEO) *</label><input type="text" placeholder="The Chief Executive Officer (CEO) ..."></div><div class="inp"><label for="">Mobile number *</label><input type="text" placeholder="05xxxxxxxx..."></div></div><button type="">send</button></form></div></div><div class="col-12 col-xl-5 col-lg-5 thefixed"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam aspernatur accusantium obcaecati maiores laborum libero quam exercitationem sapiente consectetur, molestias ratione in cumque amet nulla similique facilis ipsam praesentium.</p><div class="icons"><div class="icon d-flex align-items-center gap-3"><i class="fa-solid fa-phone"></i><h4>mobile number: <span>05000000</span></h4></div><div class="icon d-flex align-items-center gap-3"><i class="fa-solid fa-envelope"></i><h4>email: <span> example@mail.com</span></h4></div><div class="icon d-flex align-items-center gap-3"><i class="fa-brands fa-whatsapp"></i><h4>Whatsapp: <span class="click">click here</span></h4></div></div><p class="text"> Or please fill the form below: You will receive a reply within a maximum of 24 hours. </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/corporate/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-eaa7e23e.mjs.map
