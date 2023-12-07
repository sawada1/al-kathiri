<template>
    <div class="container-flui" style="min-height: 100vh;">
        <div class="landing-services">
        <div class="img-container">
        <img src="~/assets/images/mainServices.png" alt="">
        </div>
        <div class="container text">
             <h1 class="fw-bolder" :data-services="$t('accessories')">{{ $t('accessories') }}</h1>
             <p>
             {{ $t('services text') }}
             </p>
        </div>
    
        </div>
        <div class="services">
          <div class="row">
           <div v-for="box,index in services" class="col-12 mainbox" :class="{'active':index % 2 == 0 ? true : false}">
            <div class="row align-items-center ">
             <div class="container col-12 col-xl-6 col-lg-6 ">
              <div class="container text">
               <h3>{{ box.name }}</h3>
               <p v-html="box.description">  </p>
                    <!-- <button style="padding: 15px 40px">{{$t('Get service')}}</button> -->
              </div>
             </div>
             <div class="col-12 col-xl-6 col-lg-6">
              <img class="w-100" :src="box.image" loading="lazy" style="" :alt="box.description">
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
const { locale } = useI18n();
let lang = ref(locale);
let url = getUrl();
let pending = ref(true);
let services = ref([]);
const servicesFanc = async () => {
  pending.value = true;
  let allServices = await axios.get(`${url}/services`, {
    headers: {
      'Content-Language': `${lang.value}`
    }
  });
  if (allServices.status == 200) {
    pending.value = false;
  }

  services.value = allServices.data.data;

  useHead({
    title: lang.value == 'ar' ? `خدماتنا/الكثيري للسيارات` : `alkathiri motors / services`
  });
}
servicesFanc();
</script>

<style lang="scss" scoped>


</style>