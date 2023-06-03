<template>
    <div>
         <div class="container textBooked">
          <h3 :data-app="$t('HAPPY TO HELP YOU')">{{ $t('BOOK YOUR MAINTENANCE APPOINTMENT') }}</h3>
          <p>
          Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Quos laboriosam asperiores,
            iusto modi sapiente ut beatae qui! Quos aspernatur accusantium vel, 
          perferendis enim ipsam praesentium corporis ab quam eius. Quaerat.
          Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Quos laboriosam asperiores,
            iusto modi sapiente ut beatae qui! Quos aspernatur accusantium vel, 
          perferendis enim ipsam praesentium corporis ab quam eius. Quaerat.
          </p>
         </div>
         <div class="container maintenance">
          <div class="row gap-4 justify-content-around">
           <div class="col-12 col-xl-7 col-lg-7 col-md-6">
            <form action="" @submit.prevent>
              <div class="inp">
               <label for=""> {{ $t('full name') }}</label>
               <input type="text" v-model="mainObj.name" placeholder="write your name..">
          <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="nameError">{{ nameError }}</span>

              </div>
              <div class="inp">
               <label for="">{{ $t('email') }}</label>
               <input type="email" v-model="mainObj.email" placeholder="example@mail.com..">
           <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="emailError">{{ emailError }}</span>

              </div>
              <div class="inp">
               <label for="">{{ $t('phone number') }}</label>
               <input type="text" v-model="mainObj.phone" placeholder="05xxxxxxxx.....">
           <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="phoneError">{{ phoneError }}</span>
         
              </div>
           
              <div class="inp">
               <label for="">{{ $t('What is your car’s model year?') }}</label>
               <input type="number" v-model="mainObj.model_year" min="1900" max="2100" step="1" >
           <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="modelYearError">{{ modelYearError }}</span>
       
              </div>
              <div class="inp">
               <label for="">{{ $t('What is your car’s Brand?') }}</label>
               <select  name="" id="" v-model="mainObj.brand_id">
                 <option v-for="brand in mainBrands" :value="brand.id">{{ brand.name }}</option>
               </select>
             <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="brandError">{{ brandError }}</span>
 
              </div>
              <div class="inp">
               <label for="">{{ $t('Which car model are you booking for?') }}</label>
               <select name="" id="" v-model="mainObj.model_id">
                 <option v-if="mainObj.brand_id" v-for="model,index in mainBrands[mainObj.brand_id - 1].models" :value="model.id">{{ model.name }}</option>
               </select>
          <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="modelError">{{ modelError }}</span>
 
              </div>
              <div class="inp">
               <label for="">{{ $t('Choose a city and branch for your service') }}</label>
               <div class="d-flex gap-3">
               <div class="d-flex flex-column w-50">
                <select  name="" id="" class="w-100" v-model="mainObj.city_id">
                 <option v-for="city in maincities" :value="city.id">{{ city.name }}</option>
               </select>
            <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="cityError">{{ cityError }}</span>   
               </div>
               <div class="d-flex flex-column w-50">
                 <select name="" id="" class="w-100" v-model="mainObj.branch_id">
                 <option v-if="mainObj.city_id" v-for="branch in  maincities[mainObj.city_id - 1].branches" :value="branch.id">{{ branch.name }}</option>
               </select>
              <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="branchError">{{ branchError }}</span>
   
               </div>
                
             
               </div>
             
              </div>
              <div class="inp">
               <label for="">{{ $t('Please add any extra information about your appointment request') }}</label>
              <textarea style="resize:none;" v-model="mainObj.description" rows="" cols="" placeholder="write your message here"></textarea>
              <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="descError">{{descError }}</span>

              </div>
             
            </form>
           </div> 
           <div class="col-12 col-xl-4 col-lg-4 col-md-4 d-flex align-items-center gap-5 flex-column">
            <div id="inline_cal">
             </div>
            
             <div class="time">
               <h3>{{ $t('time') }}</h3>
               <div class="d-flex align-items-center justify-content-center">
                 <div v-if="spinner" class="spinner-border" role="status">
              </div>
               </div>
              
                <div class="timesec">
                    <span v-for="item,index in times" @click="activeTime = index + 1,  item.available? mainObj.time = item.value : null" :class="{'disabled': item.available==false,'choose':activeTime == index+1}">{{ item.time }}</span>
                </div>
                
             </div>
                         <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="timeError">{{ timeError }}</span>
             <div class="check d-flex align-items-center gap-3">
            <input id="checkTerms" type="checkbox" value="1" v-model="mainObj.terms_and_privacy">
             <label for="checkTerms"> {{ $t('I have read and unconditionally agree to the') }} <span type="button" data-bs-toggle="modal" data-bs-target="#termsModal">{{ $t('Term And Conditions') }}</span>  {{ $t('and') }} <span type="button" data-bs-toggle="modal" data-bs-target="#privacyModal">{{ $t('Privacy Policy') }}</span> </label>                
             </div>
            <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if=" terms_and_privacyError">{{ terms_and_privacyError }}</span>
             <button :disabled="spinnerBtn" @click="sendAppointment()" class="w-100 d-flex align-items-center justify-content-center gap-4">
            <span>{{ $t('submit') }}</span> 
               <div v-if="spinnerBtn"  class="spinner-border text-light" role="status">
               </div>
             </button>

           </div> 
          </div>
         </div>
      
          <TermsModal/>
         <privacyModal/>
    </div>
</template>

<script setup>
import axios from 'axios';
    const {locale} = useI18n();
let mainDate = ref(null);
let activeTime = ref(1);
let spinner = ref(true);
    let currentLang = ref(locale);
     const router = useRouter()
const url = getUrl();
let  appointmentData = await axios.get(`${url}/make-appointment-form-data`);

console.log(appointmentData.data);
let mainBrands = ref(appointmentData.data.brands);
let maincities = ref(appointmentData.data.cities);
let daysOf = ref(appointmentData.data.days_of);
const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let finalDaysOf = ref([]);
const functionDaysOf = () => {
  for (let i = 0; i < daysOf.value.length; i++){
    finalDaysOf.value.push(daysOfWeek.indexOf(daysOf.value[i]));
  }
}
functionDaysOf();
console.log(finalDaysOf.value);
let times = ref([]);
const calender = () => {
  if (process.client) {
    rome(inline_cal,{
      time: false,
         dateValidator: function (d) {
    return !finalDaysOf.value.includes(moment(d).day());
  }, 
        
    });
    let lastSelectedDate = null;

    let days = document.querySelectorAll('.rd-day-body');
    days.forEach((ele) => {
      ele.addEventListener('click', () => {
          setTimeout(async () => {
            mainDate.value = rome(inline_cal).getDateString();
            if (lastSelectedDate != mainDate.value)
            {
              lastSelectedDate = mainDate.value;
              let { data: allDates } = await useFetch(`${url}/time-slots?date=${mainDate.value}`);
              times.value = allDates.value;
              console.log(times.value);
              mainObj.value.date = mainDate.value;
              spinner.value = false;
            }
          }, 100);
        })
    })

     document.querySelector('.rd-day-body.rd-day-selected').click();
    
  }

}
let mainObj = ref({
  name: null,
  phone: null,
  branch_id: null,
  brand_id: null,
  city_id: null,
  model_id: null,
  model_year:2023,
  date: null,
  description: null,
  email: null,
  time: null,
  terms_and_privacy:null,
  
});

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
let spinnerBtn = ref(false);
const sendAppointment = async () => {
  // start loading disable btn
    spinnerBtn.value = true;
   let result = fetch(`${url}/make-appointment`, {
      method: 'post',
       headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify( mainObj.value),
   }).then((response) => response.json())
     .then((json) => {
      // remove loading enable btn
        spinnerBtn.value = false;
       console.log(json);
     
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

      } else {
        //mainObj.value = '';
           let city = maincities.value[mainObj.value.city_id - 1].name;
         let branch = maincities.value[mainObj.value.city_id - 1].branches[mainObj.value.city_id - 1].name;
            const queryParams = {
        id: mainObj.value.brand_id,
        date: mainObj.value.date,
        time: mainObj.value.time,
        branch: branch,
        city: city,
      }
      const url = currentLang.value + '/booked'
      router.push({ path:`/${url}` , query: queryParams })
         spinnerBtn.value = false;
        console.log(mainObj.value);
        Swal.fire(
          'success',
          `${json}`,
          'success'
        );
         spinnerBtn.value = false;
        console.log(mainObj.value);
      
      }
    
     

      
    });
}


onMounted(async () => {
  calender();
 
 

})




</script>

<style lang="scss">



</style>