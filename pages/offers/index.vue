<template>
    <div style="min-height: 100vh;">
   
    
 <div v-if="!pending"  class="offersCars" style="margin-top: 150px; min-height: 100vh;">
  
   <div v-if="offersArr.length >= 1" class="container" style="">
      <div class="head">
        <h3 :data-offers="$t('GET our')">{{ $t('SPATIAL OFFERS') }}</h3>
    </div>
    <div class="row  offers px justify-content-center justify-content-xl-start justify-content-lg-start" >

<div v-for="box in offersArr" @click="goToOfferPage(box.title,box.id)" style="cursor: pointer;" class=" col-12 col-xl-3 col-lg-3 col-sm-5 col-md-4 ">
      <div class="offer d-flex gap-3 flex-column justify-content-between" style="min-height: 210px;">      
        <img :alt="box.title" class="lazyload  w-100 " :data-src="box.image"  src="https://placehold.co/600" loading="lazy">
  
     <h5 class="fw-bolder"> {{ box.title }}</h5>
      </div>
</div>



    </div>
   </div>
   <div class="d-flex align-items-center justify-content-center" style="min-height: 80vh;" v-else>
     <h1 style="color:#1b395f">{{ $t('mainOffers') }}</h1>
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
let lang = ref(locale);
const router = useRouter();
let pending = ref(true);
let offersArr = ref([]);



const localePath = useLocalePath();
let url = getUrl();

const offersFunc = async () => {
  pending.value = true;
    let  offers  = await axios.get(`${url}/offers`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
  });
  offersArr.value = offers.data.data;
  if (offers.status == 200) {
    pending.value = false;
 }
  console.log(offers);

}
offersFunc();
 

      const goToOfferPage = (title,id) => {
        const queryParams = {
        name: title,
        id:id
      }
      const url = lang.value + '/offer'
      router.push({ path: `/${url}` , query: queryParams })
}

useHead({
  title: lang.value == 'ar' ? 'العروض/الكثيري للسيارات' : 'alkathiri motors / offers'
});
  

</script>

<style lang="scss">




</style>