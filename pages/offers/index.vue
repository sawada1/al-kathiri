<template>
    <div>
   
    
 <div v-if="!pending"  class="offersCars my-5">
  
   <div class="container">
      <div class="head">
        <h3 :data-offers="$t('GET our')">{{ $t('SPATIAL OFFERS') }}</h3>
    </div>
    <div class="row offers px-2 justify-content-around gap-2">

<div v-for="box in offersArr" class="offer col-xl-3 col-lg-3 col-sm-5 col-md-4 d-flex gap-3 flex-column justify-content-between">
    <nuxt-link :to="localePath(`/offers/${box.id}`)">
        <img :src="box.image" alt="">
    </nuxt-link>
     <h5 class="fw-bolder"> {{ box.title }}</h5>
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
let lang = ref(locale);

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
 

  
  

</script>

<style lang="scss">




</style>