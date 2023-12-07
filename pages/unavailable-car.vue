<template>
  <div>
    <div class="container notFoundPage" style="margin-top:140px; margin-bottom:50px; min-height: 100vh;">
      <div class="row image">
        <div class="col-12 col-xl-5 col-lg-5 col-md-4 text">
          <h3 class="fw-bolder">{{ $t("Didn't Find Your Car?") }}</h3>
          <h3 class="fw-bolder">{{ $t('We Can Provide It For You.') }}</h3>
          <p>
            {{ $t('fill the info') }}
          </p>
        </div>
        <img class="col-12 col-xl-5 col-lg-5 col-md-5 " src="~/assets/images/notfound.svg" alt="">
      </div>
      <form action="" class="mt-5" @submit.prevent>
        <div class="row">
          <div class="col-12 col-xl-6 col-lg-6 col-md-5 my-2 inp">
            <label for="">{{ $t('full name') }} *</label>
            <input type="text" v-model="mainObj.name" :placeholder="$t('write your name..')">
            <span class="errorMessage text-danger fw-bold " v-if="nameError">{{ nameError }}</span>

          </div>
          <div class="col-12 col-xl-6 col-lg-6 col-md-5 my-2 inp">
            <label for="">{{ $t('mobile number') }} *</label>
            <input type="tel" v-model="mainObj.phone" placeholder="0xxxxxxxx">
            <span class="errorMessage text-danger fw-bold " v-if="phoneError">{{ phoneError }}</span>

          </div>

        </div>
        <div class="row">
          <div class="col-12 col-xl-6 col-lg-6 col-md-5 my-2 inp">
            <label for="">{{ $t('city') }} *</label>
            <div class="selectdiv">
            
            <select name="" id="" class="w-100" v-model="mainObj.city_id">
              <option :value="null" disabled>{{ $t('Choose your city') }}</option>
              <option v-for="city in  cites" :value="city.id">{{ city.name }}</option>
            </select>
            <span class="errorMessage text-danger fw-bold " v-if="cityError">{{ cityError }}</span>
            </div>

          </div>
          <div class="col-12 col-xl-6 col-lg-6 col-md-5 my-2 inp">
            <label for="">{{ $t('Car you want') }}*</label>
            <input type="text" v-model="mainObj.car_name" :placeholder="$t('Write the car name...')">
            <span class="errorMessage text-danger fw-bold " v-if="carNameError">{{ carNameError }}</span>

          </div>

        </div>
        <div>
          <button @click="sendCar()" class="d-flex align-items-center gap-3" style="padding: 13px 60px;">
            <div v-if="spinner" class="spinner-border spinner-border-sm text-light" role="status">
            </div>
            {{ $t('send') }}

          </button>
        </div>

      </form>
    </div>

  </div>
</template>

<script setup>
import axios from 'axios';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
let cites = ref([]);
let url = getUrl();
const { locale } = useI18n();
let lang = ref(locale);
let checkToast = ref(false);
let spinner = ref(false);
let mainObj = ref({
  name: null,
  phone: null,
  car_name: null,
  city_id: null
});
const getCites = async () => {
  let result = await axios.get(`${url}/make-appointment-form-data`);
  cites.value = result.data.cities
}
getCites();

let nameError = ref(null);
let phoneError = ref(null);
let carNameError = ref(null);
let cityError = ref(null);

let completed = ref('Request completed successfully');
let success = ref('success');
if (lang.value == 'ar') {
  completed.value = 'تم الطلب بنجاح';
  success.value = 'نجاح';
} else if (lang.value == 'en') {
  completed.value = 'Request completed successfully'
  success.value = 'success';
}
const sendCar = () => {
  spinner.value = true;
  let result = fetch(`${url}/unavailable-car`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Content-Language': `${lang.value}`
    },
    body: JSON.stringify(mainObj.value),
  }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      spinner.value = false;
      if (json.message) {
        phoneError.value = json.errors.phone == undefined ? null : json.errors.phone[0];
        nameError.value = json.errors.name == undefined ? null : json.errors.name[0]; 
        carNameError.value = json.errors.car_name == undefined ? null : json.errors.car_name[0];
        cityError.value = json.errors.city_id == undefined ? null : json.errors.city_id[0];

      } else {
         createToast({
           title: completed.value,
          //  description: success.value,
         },
           {
             timeout: 5000,
             toastBackgroundColor: '#1b395f',
             showIcon:true,
             type: 'success',
             transition: 'bounce',
           });
     
        nameError.value = null;
        phoneError.value = null;
        cityError.value = null;
        carNameError.value = null;
        // mainObj.value = '';



      }




    });
}
</script>

<style lang="scss"></style>