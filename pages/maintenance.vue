<template>
  <div>
    <div class="container textBooked" style="margin-top: 150px;">
      <h3 :data-app="$t('HAPPY TO HELP YOU')">{{ $t('BOOK YOUR MAINTENANCE APPOINTMENT') }}</h3>
      <p>
        {{ $t('bookText') }}
      </p>
    </div>
    <div class="container maintenance">
      <div class="row gap-4 justify-content-around">
        <div class="col-12 col-xl-7 col-lg-7 col-md-6">
          <form action="" @submit.prevent>
            <div class="inp">
              <label for=""> {{ $t('full name') }}</label>
              <input type="text" v-model="mainObj.name" :placeholder="$t('write your name..')">
              <span class="errorMessage text-danger fw-bold " v-if="nameError">{{ nameError }}</span>

            </div>
            <div class="inp">
              <label for="">{{ $t('email') }}</label>
              <input type="email" v-model="mainObj.email" placeholder="example@mail.com..">
              <span class="errorMessage text-danger fw-bold " v-if="emailError">{{ emailError }}</span>

            </div>
            <div class="inp">
              <label for="">{{ $t('phone number') }}</label>
              <input type="tel" v-model="mainObj.phone" :placeholder="$t('phone number')">
              <span class="errorMessage text-danger fw-bold "  v-if="phoneError">{{ phoneError }}</span>

            </div>

            <div class="inp">
              <label for="">{{ $t('What is your car’s model year?') }}</label>
              <input type="number" v-model="mainObj.model_year" min="1900" max="2100" step="1">
              <span class="errorMessage text-danger fw-bold " v-if="modelYearError">{{ modelYearError }}</span>

            </div>
            <div class="inp">
              <label for="">{{ $t('What is your car’s Brand?') }}</label>
              <select name="" id="" v-model="mainObj.brand_id">
                <option :value="null" disabled>{{ $t('Select Brand...') }}</option>
                <option v-for="brand in mainBrands" :value="brand.id">{{ brand.name }}</option>
              </select>
              <span class="errorMessage text-danger fw-bold" v-if="brandError">{{ brandError }}</span>

            </div>
            <div class="inp">
              <label for="">{{ $t('Which car model are you booking for?') }}</label>
              <select @change="showCars()" name="" id="" v-model="mainObj.model_id">
                <option :value="null"  disabled>{{ $t('Select Model...') }}</option>
                  <option  v-if="mainObj.brand_id"   v-for="modell, index in brands_models[0].models" :value="modell.id" >{{ modell.name }}</option>
               
              </select>
              <span class="errorMessage text-danger fw-bold" v-if="modelError">{{ modelError }}</span>

            </div>

            <div class="inp">
              <label for="">{{ $t('selected car') }}</label>
              <select name="" id="" v-model="mainObj.car_id">
                <option :value="null" disabled>{{ $t('Select Model...') }}</option>
                  <option v-if="mainObj.model_id" v-for="modell, index in cars_models" :value="modell.id" >{{ modell.name }}</option>
               
              </select>
              <span class="errorMessage text-danger fw-bold" v-if="caridError">{{ caridError }}</span>

            </div>
            <div class="inp">
              <label for="">{{ $t('Choose a city and branch for your service') }}</label>
              <div class="d-flex gap-3">
                <div class="d-flex flex-column w-50">
                  <select name="" id="" class="w-100" v-model="mainObj.city_id">
                    <option :value="null" disabled>{{ $t('Select city...') }}</option>
                    <option v-for="city in maincities" :value="city.id">{{ city.name }}</option>
                  </select>
                  <span class="errorMessage text-danger fw-bold " v-if="cityError">{{ cityError }}</span>
                </div>
                <div class="d-flex flex-column w-50">
                  <select name="" id="" class="w-100" v-model="mainObj.branch_id">
                    <option :value="null" disabled>{{ $t('Select branch...') }}</option>
                     <option v-if="mainObj.city_id" v-for="branchh in  cities_branch[0].branches" :value="branchh.id">{{ branchh.name }}</option>                    
                  </select>
                  <span class="errorMessage text-danger fw-bold " v-if="branchError">{{ branchError }}</span>

                </div>


              </div>

            </div>
            <div class="inp">
              <label for="">{{ $t('Please add any extra information about your appointment request') }}</label>
              <textarea style="resize:none;" v-model="mainObj.description" rows="" cols=""
                :placeholder="$t('write your message here')"></textarea>
              <span class="errorMessage text-danger fw-bold " v-if="descError">{{ descError }}</span>

            </div>

          </form>
        </div>
        <div class="col-12 col-xl-4 col-lg-4 col-md-4 d-flex align-items-center gap-5 flex-column">
          <div id="inline_cal">
          </div>

          <div class="time">
            <h3>{{ $t('time') }}</h3>
            <div class="d-flex align-items-center justify-content-center">
              <div v-if="spinner" class="spinner-border" style="border-color: #1B395F; border-left-color: transparent;" role="status">
              </div>
              <span v-if="timeSpan" class="fw-bold mt-2">{{ $t('no time') }}</span>
            </div>

            <div v-if="checkTimes" class="timesec">
              <span v-for="item, index in times"
                @click="activeTime = index + 1, item.available ? mainObj.time = item.value : null"
                :class="{ 'disabled': item.available == false, 'choose': activeTime == index + 1 }">{{ item.time }}</span>
            </div>

          </div>
          <span class="errorMessage text-danger fw-bold " v-if="timeError">{{ timeError }}</span>
          <div class="check d-flex align-items-center gap-3">
            <input id="checkTerms" type="checkbox" value="1" v-model="mainObj.terms_and_privacy">
            <label for="checkTerms"> {{ $t('I have read and unconditionally agree to the') }} <span type="button"
                data-bs-toggle="modal" data-bs-target="#termsModal">{{ $t('Term And Conditions') }}</span> {{ $t('and') }}
              <span type="button" data-bs-toggle="modal" data-bs-target="#privacyModal">{{ $t('Privacy Policy') }}</span>
            </label>
          </div>
          <span class="errorMessage text-danger fw-bold " v-if="terms_and_privacyError">{{ terms_and_privacyError
          }}</span>
          <button :disabled="spinnerBtn" @click="sendAppointment()"
            class="w-100 d-flex align-items-center justify-content-center gap-4">
            <span>{{ $t('submit') }}</span>
            <div v-if="spinnerBtn" class="spinner-border text-light" role="status">
            </div>
          </button>

        </div>
      </div>
    </div>
   <div v-if="pending" class="mainLoader">
          <video  autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt="" />
        </div>
    <TermsModal />
    <privacyModal />
  </div>
</template>

<script setup>

useHead({
  script: [
      {
      src: "/moment.min.js",
      async: true,
    },
    {
      src: "/rome.standalone.min.js",
      async: true,
    },

    {
      src: "/rome.js",
      async: true,
    },
  ]
})

import axios from 'axios';
const { locale } = useI18n();
let mainDate = ref(null);
let activeTime = ref(1);
let spinner = ref(true);
let pending = ref(true);
let currentLang = ref(locale);
const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let finalDaysOf = ref([]);
const router = useRouter()
const url = getUrl();
let mainBrands = ref([]);
let maincities = ref([]);
let daysOf = ref([]);
let times = ref([]);
let timeSpan = ref(false);
let checkTimes = ref(false);
let cars_models = ref([]);

let mainObj = ref({
  name: null,
  phone: null,
  branch_id: null,
  brand_id: null,
  city_id: null,
  car_id: null,
  model_id: null,
  model_year: 2023,
  date: null,
  description: null,
  email: null,
  time: null,
  terms_and_privacy: null,

});
const appointmentFunc = async () => {
  pending.value = true;
  let appointmentData = await axios.get(`${url}/make-appointment-form-data`, {
    headers: {
      'Content-Language': `${currentLang.value}`
    }
  });

  if (appointmentData.status == 200) {
    pending.value = false;
  }
  console.log(appointmentData.data);
  mainBrands.value = appointmentData.data.brands;
  maincities.value = appointmentData.data.cities;
  daysOf.value = appointmentData.data.days_of;

  const functionDaysOf = () => {
    for (let i = 0; i < daysOf.value.length; i++) {
      finalDaysOf.value.push(daysOfWeek.indexOf(daysOf.value[i]));
    }
  }
  functionDaysOf();


  function disableDaysOfWeek(date) {
    return !finalDaysOf.value.includes(date.getDay());
  }
  if (process.client) {
    setTimeout(() => {
      
      rome(inline_cal, {
        time: false,
        min: appointmentData.data.start_date,
        max: appointmentData.data.end_date,
        dateValidator: disableDaysOfWeek
  
      });
      document.querySelector('.rd-day-body.rd-day-selected').click();
    }, 500);
    let lastSelectedDate = null;

    let days = document.querySelectorAll('.rd-day-body');
    let next = document.querySelector('.rd-next');
    let prev = document.querySelector('.rd-back');




    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('rd-day-body')) {
           
                setTimeout(async () => {
              mainDate.value = rome(inline_cal).getDateString();
                  if (lastSelectedDate != mainDate.value) {
                    spinner.value = true;
                    checkTimes.value = false;
                  timeSpan.value = false;
                // console.log(mainDate.value);
                lastSelectedDate = mainDate.value;
                let allDates = await axios.get(`${url}/time-slots?date=${mainDate.value}`, {
                  headers: {
                    'Content-Language': `${currentLang.value}`
                  }
                });
                
                if (allDates.status == 200) {
                  spinner.value = false;
                  checkTimes.value = true;
                  times.value = allDates.data;
                  
              // console.log(times.value);
              mainObj.value.date = mainDate.value;
                  timeSpan.value = false;
                  if (times.value.length < 1) {
                   timeSpan.value = true;  
                  } else {
                    if(times.value[0].available){
                      mainObj.value.time = times.value[0].value;
                      
                    }
                    timeSpan.value = false;
                  }
                }
               
              }
            }, 100);
       
      }
    });
  
    

  }


}
appointmentFunc();



const showCars = async () => {
  let result = await axios.get(`${url}/cars`, {
    params: {
      brands: [mainObj.value.brand_id],
      models: [mainObj.value.model_id],
    },
    headers: {
      'Content-Language': `${currentLang.value}`
    }
  });
 
  cars_models.value = result.data.data;
  // console.log(result.data.data); 
}



const brands_models = computed(() => {
  return mainBrands.value.filter((ele) => {
    return ele.id == mainObj.value.brand_id;
  })
});
const brands_models_cars = computed(() => {
  return mainBrands.value.filter((ele) => {
    return ele.id == mainObj.value.brand_id;
  })
});
const cities_branch = computed(() => {
  return maincities.value.filter((ele) => {
    return ele.id == mainObj.value.city_id;
  })
});

// let branchNameAndId = ref([]);
// let cityName = ref(null);


let phoneError = ref(null);
let nameError = ref(null);
let branchError = ref(null);
let brandError = ref(null);
let cityError = ref(null);
let modelError = ref(null);
let dateError = ref(null);
let descError = ref(null);
let emailError = ref(null);
let timeError = ref(null);
let terms_and_privacyError = ref(null);
let modelYearError = ref(null);
let caridError = ref(null);
let spinnerBtn = ref(false);

const sendAppointment = async () => {
  // start loading disable btn
  spinnerBtn.value = true;
  let result = fetch(`${url}/make-appointment`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
       'Content-Language': `${currentLang.value}`
    },
    body: JSON.stringify(mainObj.value),
  }).then((response) => response.json())
    .then((json) => {
      // remove loading enable btn
      spinnerBtn.value = false;
      // console.log(json);

      if (json.message) {

        phoneError.value = json.errors.phone == undefined ? null : json.errors.phone[0];
        nameError.value = json.errors.name == undefined ? null : json.errors.name[0];
        emailError.value = json.errors.email == undefined ? null : json.errors.email[0];
        branchError.value = json.errors.branch_id == undefined ? null : json.errors.branch_id[0];
        brandError.value = json.errors.brand_id == undefined ? null : json.errors.brand_id[0];
        cityError.value = json.errors.city_id == undefined ? null : json.errors.city_id[0];
        modelError.value = json.errors.model_id == undefined ? null : json.errors.model_id[0];
        dateError.value = json.errors.date == undefined ? null : json.errors.date[0];
        descError.value = json.errors.description == undefined ? null : json.errors.description[0];
        timeError.value = json.errors.time == undefined ? null : json.errors.time[0];
        terms_and_privacyError.value = json.errors.terms_and_privacy == undefined ? null : json.errors.terms_and_privacy[0];
        modelYearError.value = json.errors.model_year == undefined ? null : json.errors.model_year[0];
        caridError.value = json.errors.car_id == undefined ? null : json.errors.car_id[0];
        // console.log(json);

      } else {
        // console.log(json);
        const queryParams = {
          id: json.id,
          date: json.date,
          time: json.time,
          branch: json.branch,
          city: json.city,
        }

        const url = currentLang.value + '/booked'
        router.push({ path: `/${url}`, query: queryParams })

        spinnerBtn.value = false;
        //console.log(mainObj.value);

      }




    });
}


useHead({
  title: currentLang.value == 'ar' ? 'احجز موعد صيانتك / الكثيري للسيارات' : 'alkathiri motors / BOOK YOUR MAINTENANCE APPOINTMENT'
});

onMounted(async () => {

})




</script>

<style lang="scss"></style>