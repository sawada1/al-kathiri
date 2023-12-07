<template>
    <div style="min-height: 100vh;">
       <div class="container career" style="margin-top: 150px;">
          <div class="row gap-2 justify-content-center" style="min-height: 100vh;">
         <div class="col-12 col-xl-4 col-lg-4 col-md-4     mt-5">
           <div class="d-flex flex-column gap-3 mb-3" style="position: sticky; top:120px;">
                <h3 :data-find="$t('JOIN OUR TEAM')"  class="">{{ $t('find your career') }}</h3>
              <p class="numjobs my-1"><span>{{allJobs.length }}</span>{{ $t('open Opportunities') }}</p>
              <div class="jobs d-flex flex-column gap-3">
                  <div style="cursor: pointer;" v-for="job,index in allJobs" class="job d-flex align-items-center justify-content-between" @click="checkJob = job.id" :class="{'active':checkJob==job.id}">
                  <div  class="det">
                   <h6>{{ job.title }}</h6>
                   <span>{{ job.address }} | {{ job.created_at }}</span>
                  </div>
                   <i class="fa-solid fa-chevron-right"></i>
                 </div>
               
              </div>
           </div>
            
           </div>
           <div class="col-12 col-xl-7 col-lg-7 col-md-7 my-5">
           <div v-for="job in allJobs">
              <div v-if="checkJob == job.id">
                <form  action="" @submit.prevent>
                <nuxt-link :to="localePath('/careers')">
                <h5><i class="fa-solid fa-chevron-left"></i> {{ job.title }}</h5>      
                </nuxt-link>
                <div class="inp">
                 <label for="">{{ $t('full name') }}</label>
                 <input  v-model="namee" type="text" :placeholder="$t('write your name..')">
               <span class="errorMessage text-danger fw-bold " v-if="nameError">{{ nameError }}</span>
                </div>
                <div class="inp">
                 <label for="">{{ $t('email') }}</label>
                 <input  v-model="email" type="email" placeholder="example@mail.com...">
               <span class="errorMessage text-danger fw-bold " v-if="emailError">{{ emailError }}</span>
                </div>
                <div class="inp">
                 <label for="">{{ $t('phone number') }}</label>
                 <input  v-model="phone" type="text" placeholder="05xxxxxxxx...">
               <span class="errorMessage text-danger fw-bold " v-if="phoneError">{{ phoneError }}</span>
                </div>
                <div class="inp">
                 <label for="">{{ $t('choose city') }}</label>
                     <select name="" id="" v-model="city">
                  <option :value="null" disabled>{{ $t('Select city...') }}</option>
                  <option v-for="city in allCities" :value="city.id">{{ city.name }}</option>
                </select>
               <span class="errorMessage text-danger fw-bold " v-if="cityError">{{ cityError }}</span>
                </div>
                <div class="inp">
                 <label for="">{{ $t('resume') }}</label>
                 <input @change="onFileChange" type="file" name="">
            <span class="errorMessage text-danger fw-bold " v-if="cvError">{{ cvError }}</span>
                </div>
                <div class="inp">
                 <label for="">{{ $t('Do you have any comments ?') }}</label>
                 <textarea style="resize: none;" :placeholder="$t('write your message here')" name="" cols="10" rows="5"></textarea>
                </div>
                <div>
                 <nuxt-link >
                 <button   class="d-flex align-items-center gap-3" :disabled="spinner"  @click="sendjob()">
                 <span>{{ $t('send application') }}</span> 
                 <div v-if="spinner" class="spinner-border text-light" role="status">
                    </div>
                 </button>                
                 </nuxt-link>
              
                </div>
             </form>        
              </div>
           
           </div>
          
           </div>
           
          </div>
       </div>
   <div v-if="pending" class="mainLoader">
          <video  autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt="" />
        </div>
     
    </div>
</template>

<script setup>

import axios from 'axios';
const {locale } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const route = useRoute();
let url = getUrl();
let lang = ref(locale);
let pending = ref(false);
let allCities = ref([]);
let searchJob = ref(null);
const id = route.query.id ? route.query.id : null;
let checkJob = ref(id);
let allJobs = ref([]);
const jobFunc = async () => {
  pending.value = true;
const  jobs  = await axios.get(`${url}/careers`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
const cities  = await axios.get(`${url}/cities`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
  if (jobs.status == 200 && cities.status == 200) {
    pending.value = false;
    allJobs.value = jobs.data.data;
    allCities.value = cities.data.data;
}
 
console.log(allJobs.value);  
}
jobFunc();


const filterJobs = computed(() => {
  return allJobs.value.filter((ele) => {
    return ele.title == searchJob.value;
  })
})

const cv = ref(null);  
const phone = ref(null);  
const email = ref(null);  
const namee = ref('');  
let city = ref(null);
let text = ref('');

let emailError = ref(null);
let phoneError = ref(null);
let nameError = ref(null);
let cvError = ref(null);
let cityError = ref(null);

let spinner = ref(false);
 const onFileChange = (e) =>{
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      cv.value = (files[0]);
    }
const sendjob = async () => {
    let formData = new FormData();
    formData.append("name", namee.value); 
    formData.append("email", email.value); 
    formData.append("phone",phone.value); 
  formData.append("cv", cv.value);
  console.log(city.value);
   formData.append("city_id", city.value);
   console.log(`id:${checkJob.value}`);
   spinner.value = true;
  const result = await fetch(`${url}/careers/${checkJob.value}/apply`, {
    method: 'POST',
    headers: {

      //   'Accept': 'application/json',
      //  'Content-Type': 'multipart/form-data',
       'Content-Language': `${lang.value}`
    },
    body: formData,

  }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      spinner.value = false;
      if (json.message) {
        emailError.value = json.errors.email == undefined ? null : json.errors.email[0];
        nameError.value = json.errors.name == undefined ? null : json.errors.name[0];
        phoneError.value = json.errors.phone == undefined ? null : json.errors.phone[0];
        cvError.value = json.errors.cv == undefined ? null : json.errors.cv[0];
        cityError.value = json.errors.city_id == undefined ? null : json.errors.city_id[0];
      } else {

        emailError.value = null;
        nameError.value = null;
        phoneError.value = null;
        cvError.value = null;
        cityError.value = null;
        router.push(`/${lang.value}/submited`);
      }



    });
}

useHead({
  title: lang.value == 'ar' ? ' وظائف/الكثيري للسيارات' : 'alkathiri motors / careers'
});

</script>

<style lang="scss">



</style>