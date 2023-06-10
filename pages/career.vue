<template>
    <div>
       <div class="container career">
          <h3 :data-find="$t('JOIN OUR TEAM')">{{ $t('find your career') }}</h3>
          <div class="row gap-2 justify-content-center">
           <div class="col-12 col-xl-4 col-lg-4 col-md-4    d-flex flex-column gap-3">
             <div class="inpsearch d-flex align-items-center justify-content-between">
              <input type="search" placeholder="Job title or key...">
              <i class="fa-solid fa-magnifying-glass"></i>
             </div>
              <p class="numjobs"><span>{{ allJobs.length }}</span> {{ $t('open opportunities') }} </p>
              <div class="jobs d-flex flex-column gap-3">
                  <div v-for="job in allJobs" @click="mainid = job.id" class="job d-flex align-items-center justify-content-between" :class="{'active': job.id == id}">
                  <div class="det">
                   <h6>{{ job.title }}</h6>
                 
                   <span>{{ job.address }} |  {{ job.created_at }}</span>
                  </div>
                    <i class="fa-solid fa-chevron-right"></i>
                 </div>
                 
              </div>
           </div>
           <div class="col-12 col-xl-7 col-lg-7 col-md-7 my-5">
           <div v-for="job in allJobs">
                <form v-if="id == job.id" action="" @submit.prevent>
                <h5><i class="fa-solid fa-chevron-left"></i> {{ job.title }}</h5>
                <div class="inp">
                 <label for="">{{ $t('full name') }}</label>
                 <input  v-model="namee" type="text" :placeholder="$t('write your name..')">
               <span class="errorMessage text-danger fw-bold fs-5 my-2" v-if="nameError">{{ nameError }}</span>
                </div>
                <div class="inp">
                 <label for="">{{ $t('email') }}</label>
                 <input  v-model="email" type="email" placeholder="example@mail.com...">
               <span class="errorMessage text-danger fw-bold fs-5 my-2" v-if="emailError">{{ emailError }}</span>
                </div>
                <div class="inp">
                 <label for="">{{ $t('phone number') }}</label>
                 <input  v-model="phone" type="text" placeholder="05xxxxxxxx...">
               <span class="errorMessage text-danger fw-bold fs-5 my-2" v-if="phoneError">{{ phoneError }}</span>
                </div>
                <div class="inp">
                 <label for="">{{ $t('resume') }}</label>
                 <input @change="onFileChange" type="file" name="">
            <span class="errorMessage text-danger fw-bold fs-5 my-2" v-if="cvError">{{ cvError }}</span>
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
           <div v-if="pending"  class="mainLoader">
     <span class="loader"></span>
    </div>
     
    </div>
</template>

<script setup>
import axios from 'axios';
const {locale } = useI18n();
const router = useRouter();
const route = useRoute();
let url = getUrl();
let lang = ref(locale);
let pending = ref(false);
const id = route.query.id ? route.query.id : null;

let allJobs = ref([]);
const jobFunc = async () => {
  pending.value = true;
const  jobs  = await axios.get(`${url}/careers`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
  if (jobs.status == 200) {
    pending.value = false;
}
 allJobs.value = jobs.data.data;
console.log(allJobs.value);  
}
jobFunc();

const cv = ref(null);  
const phone = ref(null);  
const email = ref(null);  
const namee = ref('');  


let emailError = ref(null);
let phoneError = ref(null);
let nameError = ref(null);
let cvError = ref(null);
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
   console.log(formData);
   spinner.value = true;
  const result = await fetch(`${url}/careers/${id}/apply`, {
    method: 'POST',
    headers: {

      //   'Accept': 'application/json',
      //  'Content-Type': 'multipart/form-data',
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
      } else {

        emailError.value = null;
        nameError.value = null;
        phoneError.value = null;
        cvError.value = null;
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