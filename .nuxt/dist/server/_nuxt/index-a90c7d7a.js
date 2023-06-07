import { u as useI18n, b as useRoute } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import { u as useLocalePath } from "./composables-63b0a683.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { g as getUrl } from "./url-fc757438.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
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
    let lang = ref(locale);
    useLocalePath();
    let spinnerBtn = ref(false);
    let spinnerBtn2 = ref(false);
    let methodActive = ref(1);
    let methodActiveCorparate = ref(1);
    let typeActive = ref(1);
    const route = useRoute();
    let url = getUrl();
    let id = route.query.id ? route.query.id : 1;
    let maincolorId = route.query.colorId ? route.query.colorId : 1;
    let pending = ref(false);
    let purchaseForm = ref([]);
    let mainCar = ref([]);
    let generalData = ref([]);
    const carAndPurchaseFunc = async () => {
      pending.value = true;
      const car = await axios.get(`${url}/cars/${id}`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      const general = await axios.get(`${url}/general`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      const purchase = await axios(`${url}/purchase-form-info`, {
        headers: {
          "Content-Language": `${lang.value}`
        }
      });
      if (car.status == 200 && purchase.status == 200) {
        pending.value = false;
      }
      generalData.value = general.data;
      purchaseForm.value = purchase.data;
      mainCar.value = car.data.data;
    };
    carAndPurchaseFunc();
    const form = ref([
      { car_name: "", count: 0 }
    ]);
    let objPurchase = ref({
      payment_type: "finance",
      car_id: id,
      color_id: maincolorId,
      name: null,
      phone: null,
      salary: null,
      commitments: null,
      having_loan: null,
      last_installment: null,
      first_installment: null,
      city_id: null,
      work: null,
      bank_id: null,
      driving_license: null
    });
    let objCash = ref({
      payment_type: "cash",
      car_id: id,
      color_id: maincolorId,
      name: null,
      phone: null
    });
    let nameError = ref(null);
    let phoneError = ref(null);
    let cityError = ref(null);
    let salaryError = ref(null);
    let commitmentsError = ref(null);
    let last_installmentError = ref(null);
    let first_installmentError = ref(null);
    let workError = ref(null);
    let bankError = ref(null);
    let drivingError = ref(null);
    let having_loanError = ref(null);
    let nameCashError = ref(null);
    let phoneCashError = ref(null);
    let objCorporateFinance = ref({
      payment_type: "finance",
      cars: form.value,
      bank_id: null,
      organization_activity: null,
      organization_name: null,
      organization_age: null,
      organization_ceo: null,
      organization_email: null,
      organization_location: null,
      organization_location: null,
      phone: null
    });
    let objCorporateCash = ref({
      payment_type: "cash",
      cars: form.value,
      organization_ceo: null,
      organization_email: null,
      organization_name: null,
      phone: null
    });
    let organization_activityError = ref(null);
    let organization_ageError = ref(null);
    let organization_ceoError = ref(null);
    let organization_emailError = ref(null);
    let organization_locationError = ref(null);
    let organization_nameError = ref(null);
    let bankCorporateError = ref(null);
    let phoneCorporateError = ref(null);
    let car_nameErorr = ref(null);
    let car_countErorr = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(typeActive) == 1) {
        _push(`<div class="container purchasee"><div class="row justify-content-cente"><div class="col-12 col-xl-7 col-lg-7"><h3 class="head"${ssrRenderAttr("data-purchase", _ctx.$t("FIND WHAT YOU NEED"))}>${ssrInterpolate(_ctx.$t("PURCHASE ORDER"))}</h3><div class="individual"><form action=""><div class="header"><p class="${ssrRenderClass([{ "active": unref(typeActive) == 1 }, "first"])}">${ssrInterpolate(_ctx.$t("individuals"))}</p><span></span><p class="${ssrRenderClass({ "active": unref(typeActive) == 2 })}">${ssrInterpolate(_ctx.$t("corporate"))}</p></div><div class="method"><h4>${ssrInterpolate(_ctx.$t("payment method"))}</h4><div class="choose"><span class="${ssrRenderClass({ "active": unref(methodActive) == 1 })}">${ssrInterpolate(_ctx.$t("finance"))}</span><span class="${ssrRenderClass({ "active": unref(methodActive) == 2 })}">${ssrInterpolate(_ctx.$t("cash"))}</span></div></div><div class="${ssrRenderClass([{ "active": unref(methodActive) == 1 }, "finance"])}"><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("full name"))} *</label><input type="text"${ssrRenderAttr("value", unref(objPurchase).name)}${ssrRenderAttr("placeholder", _ctx.$t("write your name.."))}>`);
        if (unref(nameError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(nameError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("mobile number"))} *</label><input type="text"${ssrRenderAttr("value", unref(objPurchase).phone)} placeholder="05xxxxxxxx..">`);
        if (unref(phoneError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(phoneError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Total salary in ATM"))}*</label><input type="number"${ssrRenderAttr("value", unref(objPurchase).salary)}${ssrRenderAttr("placeholder", _ctx.$t("Salary and allowances..."))}>`);
        if (unref(salaryError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(salaryError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Total commitments"))}*</label><input type="number"${ssrRenderAttr("value", unref(objPurchase).commitments)}${ssrRenderAttr("placeholder", _ctx.$t("Commitment amount..."))}>`);
        if (unref(commitmentsError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(commitmentsError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inpWithRadio d-flex gap-4"><label for="">${ssrInterpolate(_ctx.$t("Is there a mortgage loan ?"))} *</label><div class="d-flex flex-column gap-2"><div class="d-flex align-items-center gap-3"><div class="d-flex align-items-center gap-2"><input type="radio" id="yes" value="1"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(objPurchase).having_loan, "1")) ? " checked" : ""}><label for="yes">${ssrInterpolate(_ctx.$t("yes"))}</label></div><div class="d-flex align-items-center gap-2"><input type="radio" id="no" value="0"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(objPurchase).having_loan, "0")) ? " checked" : ""} checked><label for="no">${ssrInterpolate(_ctx.$t("no"))}</label></div></div>`);
        if (unref(having_loanError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(having_loanError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("The last installment"))} *</label><select><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("%35"))}</option><option value="35" selected>35</option><option value="25">25</option><option value="30">30</option><option value="40">40</option><option value="45">45</option><option value="50">50</option></select>`);
        if (unref(last_installmentError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(last_installmentError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("The first installment"))}</label><select><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("%15"))}</option><option value="0">10</option><option value="15">15</option><option value="20">20</option><option value="25">40</option><option value="10">10</option></select>`);
        if (unref(first_installmentError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(first_installmentError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("city"))}*</label><select><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("city"))}</option><!--[-->`);
        ssrRenderList(unref(purchaseForm).cities, (bank) => {
          _push(`<option${ssrRenderAttr("value", bank.id)}>${ssrInterpolate(bank.name)}</option>`);
        });
        _push(`<!--]--></select>`);
        if (unref(pending)) {
          _push(`<div class="spinner-border spinner-border-sm" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(cityError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(cityError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("employer"))}*</label><input type="text"${ssrRenderAttr("value", unref(objPurchase).work)}${ssrRenderAttr("placeholder", _ctx.$t("employer"))}>`);
        if (unref(workError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(workError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Bank account"))}*</label><select><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("Select bank..."))}</option><!--[-->`);
        ssrRenderList(unref(purchaseForm).banks, (bank) => {
          _push(`<option${ssrRenderAttr("value", bank.id)}>${ssrInterpolate(bank.name)}</option>`);
        });
        _push(`<!--]--></select>`);
        if (unref(pending)) {
          _push(`<div class="spinner-border spinner-border-sm" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(bankError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(bankError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inpWithRadio d-flex gap-4"><label for="">${ssrInterpolate(_ctx.$t("Driving License Status"))}*</label><div class="d-flex flex-column gap-2"><div class="d-flex align-items-center gap-2"><div class="d-flex align-items-center gap-2"><input type="radio" value="available"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(objPurchase).driving_license, "available")) ? " checked" : ""}><label for="">${ssrInterpolate(_ctx.$t("valid"))}</label></div><div class="d-flex align-items-center gap-2"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(objPurchase).driving_license, "expired")) ? " checked" : ""} value="expired" checked><label for="">${ssrInterpolate(_ctx.$t("invalid"))}</label></div><div class="d-flex align-items-center gap-2"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(objPurchase).driving_license, "doesnt_exist")) ? " checked" : ""} value="doesnt_exist"><label for="">${ssrInterpolate(_ctx.$t("unavailable"))}</label></div></div>`);
        if (unref(drivingError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(drivingError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="${ssrRenderClass([{ "active": unref(methodActive) == 2 }, "corporate"])}"><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("full name"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCash).name)}${ssrRenderAttr("placeholder", _ctx.$t("write your name.."))}>`);
        if (unref(nameCashError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(nameCashError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("mobile number"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCash).phone)} placeholder="05xxxxxxxx..">`);
        if (unref(phoneCashError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(phoneCashError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></form><button class="d-flex align-items-center justify-content-center gap-3" type=""><span>${ssrInterpolate(_ctx.$t("send"))}</span>`);
        if (unref(spinnerBtn)) {
          _push(`<div class="spinner-border text-light" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div></div><div class="col-12 col-xl-5 col-lg-5 thefixed">`);
        if (!unref(pending)) {
          _push(`<div class="mainlatestbox"><div class="image"><img${ssrRenderAttr("src", unref(mainCar).cover_image)} alt=""></div><h3>${ssrInterpolate(unref(mainCar).name)}</h3><div class="text1"><div class="price"><span>${ssrInterpolate(_ctx.$t("price"))}</span><h4>${ssrInterpolate(unref(mainCar).selling_price)} SAR</h4></div><div class="after"><span>${ssrInterpolate(_ctx.$t("after vat"))}</span><h4>${ssrInterpolate(unref(mainCar).selling_price_after_vat)} SAR</h4></div></div><span class="detail">${ssrInterpolate(_ctx.$t("details"))} <i class="fa-solid fa-chevron-right"></i></span><div class="overlay"></div><i class="fa-regular fa-heart fav"></i></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(pending)) {
          _push(`<div class="spinner-border" style="${ssrRenderStyle({ "width": "5rem", "height": "5rem" })}" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(typeActive) == 2) {
        _push(`<div class="purchasee container"><div class="row"><div class="col-12 col-xl-7 col-lg-7"><h3 class="head">${ssrInterpolate(_ctx.$t("PURCHASE ORDER"))}</h3><div class="individual"><form action=""><div class="header"><p class="${ssrRenderClass([{ "active": unref(typeActive) == 1 }, "first"])}">${ssrInterpolate(_ctx.$t("individuals"))}</p><span></span><p class="${ssrRenderClass({ "active": unref(typeActive) == 2 })}">${ssrInterpolate(_ctx.$t("corporate"))}</p></div><div class="method"><h4>${ssrInterpolate(_ctx.$t("payment method"))}</h4><div class="choose"><span class="${ssrRenderClass({ "active": unref(methodActiveCorparate) == 1 })}">${ssrInterpolate(_ctx.$t("finance"))}</span><span class="${ssrRenderClass({ "active": unref(methodActiveCorparate) == 2 })}">${ssrInterpolate(_ctx.$t("cash"))}</span></div></div><div class="${ssrRenderClass([{ "active": unref(methodActiveCorparate) == 1 }, "finance"])}"><!--[-->`);
        ssrRenderList(unref(form), (item, index) => {
          _push(`<div class="inp special"><label for="">${ssrInterpolate(_ctx.$t("The selected vehicle *"))}</label><input class="bigOne" type="text"${ssrRenderAttr("placeholder", _ctx.$t("Vehicle name"))}${ssrRenderAttr("value", item.car_name)}><input type="number" placeholder="the number"${ssrRenderAttr("value", item.count)}><div class="d-flex align-items-center gap-2"><i class="fa-solid fa-plus"></i>`);
          if (unref(form).length > 1) {
            _push(`<i class="fa-solid fa-minus"></i>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Company Name"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCorporateFinance).organization_name)}${ssrRenderAttr("placeholder", _ctx.$t("Company Name"))}>`);
        if (unref(organization_nameError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_nameError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Official email"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCorporateFinance).organization_email)} placeholder="example@mail.com">`);
        if (unref(organization_emailError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_emailError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("The Chief Executive Officer (CEO)"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCorporateFinance).organization_ceo)}${ssrRenderAttr("placeholder", _ctx.$t("The Chief Executive Officer (CEO)"))}>`);
        if (unref(organization_ceoError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_ceoError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("mobile number"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCorporateFinance).phone)} placeholder="05xxxxxxxx...">`);
        if (unref(phoneCorporateError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(phoneCorporateError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("The company's headquarter"))} * </label><input type="text"${ssrRenderAttr("value", unref(objCorporateFinance).organization_location)}${ssrRenderAttr("placeholder", _ctx.$t("city"))}>`);
        if (unref(organization_locationError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_locationError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Company activity (According to the record)"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCorporateFinance).organization_activity)}${ssrRenderAttr("placeholder", _ctx.$t("Company activity (According to the record)"))}>`);
        if (unref(organization_activityError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_activityError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Company age "))}*</label><input type="number"${ssrRenderAttr("placeholder", _ctx.$t("Company age..."))}${ssrRenderAttr("value", unref(objCorporateFinance).organization_age)} name="">`);
        if (unref(organization_ageError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_ageError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Bank account"))}*</label><select><option${ssrRenderAttr("value", null)} disabled>${ssrInterpolate(_ctx.$t("Bank account"))}</option><!--[-->`);
        ssrRenderList(unref(purchaseForm).banks, (bank) => {
          _push(`<option${ssrRenderAttr("value", bank.id)}>${ssrInterpolate(bank.name)}</option>`);
        });
        _push(`<!--]--></select>`);
        if (unref(pending)) {
          _push(`<div class="spinner-border spinner-border-sm" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(bankCorporateError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(bankCorporateError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="${ssrRenderClass([{ "active": unref(methodActiveCorparate) == 2 }, "corporate"])}"><!--[-->`);
        ssrRenderList(unref(form), (item, index) => {
          _push(`<div class="inp special"><label for="">${ssrInterpolate(_ctx.$t("The selected vehicle *"))}</label><input class="bigOne" type="text"${ssrRenderAttr("placeholder", _ctx.$t("Vehicle name"))}${ssrRenderAttr("value", item.car_name)}>`);
          if (unref(car_nameErorr)) {
            _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(car_nameErorr))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<input type="number" placeholder="the number"${ssrRenderAttr("value", item.count)}>`);
          if (unref(car_countErorr)) {
            _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(car_countErorr))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="d-flex align-items-center gap-2"><i class="fa-solid fa-plus"></i>`);
          if (unref(form).length > 1) {
            _push(`<i class="fa-solid fa-minus"></i>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Company Name"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCorporateCash).organization_name)}${ssrRenderAttr("placeholder", _ctx.$t("Company Name"))}>`);
        if (unref(organization_nameError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_nameError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("Official email"))} *</label><input type="email"${ssrRenderAttr("value", unref(objCorporateCash).organization_email)} placeholder="example@mail.com">`);
        if (unref(organization_emailError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_emailError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("The Chief Executive Officer (CEO)"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCorporateCash).organization_ceo)}${ssrRenderAttr("placeholder", _ctx.$t("The Chief Executive Officer (CEO)"))}>`);
        if (unref(organization_ceoError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(organization_ceoError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="inp"><label for="">${ssrInterpolate(_ctx.$t("mobile number"))} *</label><input type="text"${ssrRenderAttr("value", unref(objCorporateCash).phone)} placeholder="05xxxxxxxx...">`);
        if (unref(phoneCorporateError)) {
          _push(`<span class="errorMessage text-danger fw-bold fs-5 my-2">${ssrInterpolate(unref(phoneCorporateError))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></form><button class="d-flex align-items-center justify-content-center gap-3" type=""><span>${ssrInterpolate(_ctx.$t("send"))}</span>`);
        if (unref(spinnerBtn2)) {
          _push(`<div class="spinner-border text-light" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div></div><div class="col-12 col-xl-5 col-lg-5 thefixed"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam aspernatur accusantium obcaecati maiores laborum libero quam exercitationem sapiente consectetur, molestias ratione in cumque amet nulla similique facilis ipsam praesentium.</p><div class="icons"><div class="icon d-flex align-items-center gap-3"><i class="fa-solid fa-phone"></i><h4>${ssrInterpolate(_ctx.$t("mobile number"))}: <span>${ssrInterpolate(unref(generalData).phone)}</span></h4></div><div class="icon d-flex align-items-center gap-3"><i class="fa-solid fa-envelope"></i><h4>${ssrInterpolate(_ctx.$t("email"))}: <span>${ssrInterpolate(unref(generalData).email)}</span></h4></div><div class="icon d-flex align-items-center gap-3"><i class="fa-brands fa-whatsapp"></i><h4>${ssrInterpolate(_ctx.$t("Whatsapp"))}: <a target="_blank"${ssrRenderAttr("href", `https://wa.me/${unref(generalData).whatsapp}`)} class="click">${ssrInterpolate(_ctx.$t("click here"))}</a></h4></div></div><p class="text">${ssrInterpolate(_ctx.$t("Or please fill the form below: You will receive a reply within a maximum of 24 hours."))}</p></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/purchase/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-a90c7d7a.js.map
