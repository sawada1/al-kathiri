<template>
    <div>
        <div class="container career" style="margin-top: 150px;">
          <h3 :data-find="$t('JOIN OUR TEAM')">{{ $t('find your career') }}</h3>
          <div class="row gap-2 justify-content-center">
           <div class="col-12 col-xl-4 col-lg-4 col-md-4    d-flex flex-column gap-3">
             <div class="inpsearch d-flex align-items-center justify-content-between">
              <input type="search" v-model="searchJob" placeholder="Job title or key...">
              <i class="fa-solid fa-magnifying-glass"></i>
             </div>
              <p class="numjobs"><span>{{allJobs.length }}</span>{{ $t('open Opportunities') }}</p>
              <div class="jobs d-flex flex-column gap-3">
                  <div style="cursor: pointer;" v-for="job,index in allJobs" class="job d-flex align-items-center justify-content-between" @click="checkJob = index+1" :class="{'active':checkJob==index+1}">
                  <div  class="det">
                   <h6>{{ job.title }}</h6>
                   <span>{{ job.address }} | {{ job.created_at }}</span>
                  </div>
                   <i class="fa-solid fa-chevron-right"></i>
                 </div>
               
              </div>
           </div>
           <div  class="col-12 col-xl-7 col-lg-7 col-md-7 mt-5 ">
              <div  v-for="job,index in allJobs" class="jobdetail">
              <div v-if="checkJob == job.id" >
                 <div class="title d-flex align-items-center justify-content-between">
                <h4>{{ job.title }}</h4>
                <div class="d-flex align-items-center gap-4">
                 <span>{{ job.address }} | {{ job.created_at }}  </span>
                   <button @click=" goToCareerPage(job.title , job.id)">{{ $t('apply now') }}</button>
                 
                </div>
               </div>
                <client-only>
                  <p class="desc" v-html="job.long_description"></p>
                </client-only>
              </div>
             
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
const localePath = useLocalePath();
const url = getUrl();
const router = useRouter();
let checkJob = ref(1);
let lang = ref(locale);
let pending = ref(false);
let allJobs = ref([]);
let searchJob = ref(null);
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

const filterJobs = computed(() => {
  return allJobs.value.filter((ele) => {
    return ele.title == searchJob.value;
  })
})

 const goToCareerPage = (title , id) => {
      const queryParams = {
        title: title,
        id:id
      }
         const url = lang.value + '/career'

      router.push({ path: `/${url}` , query: queryParams })
}

    
useHead({
  title: lang.value == 'ar' ? ' وظائف/الكثيري للسيارات' : 'alkathiri motors / careers'
});
</script>

<style lang="scss">


</style>