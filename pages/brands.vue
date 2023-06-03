<template>
    <div>
    
         <div  class=" brands">
        <div class="head">
            <h3 class="fw-bolder" :data-brands="$t('AUTHORIZED DISTRIBUTOR')">{{ $t('car brands') }}</h3>
        </div>
         <div class="container">
             <div class="boxes row  d-flex justify-content gap-3 align-items-center ">
            <nuxt-link
            v-for="box in brandArray"
            :to="localePath(`/brandcar/${box.id}`)"
            class="box col-5 col-xl-1 col-lg-2"
          >
            <img :src="box.image" alt="" />
            <span>{{ box.name }}</span>
          </nuxt-link>
           
           
        </div>
         </div>
    </div>
             <div v-if="pending"  class="mainLoader">
     <span class="loader"></span>
    </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
import axios from 'axios';
const {locale } = useI18n();
let lang = ref(locale);
let url = getUrl();
let brandArray = ref([]);
let pending = ref(false);  
const brandsFunc = async () => {
  pending.value = true;
   let  brands  = await axios.get(`${url}/brands`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
   });
  if (brands.status == 200) {
    pending.value = false;
}
   brandArray.value = brands.data.data;  
}
brandsFunc();

</script>

<style lang="scss">


</style>