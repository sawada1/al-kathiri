<template>
    <div>
    
         <div  class=" brands">
        <div class="head">
            <h3 class="fw-bolder" :data-brands="$t('AUTHORIZED DISTRIBUTOR')">{{ $t('car brands') }}</h3>
        </div>
         <div class="container">
             <div class="boxes row  d-flex justify-content-center gap-3 align-items-center ">
            <div
            v-for="box in brandArray"
             @click="goToBrandPageById(box.id)"
            class="box col-5 col-xl-1 col-lg-2"
            style="cursor: pointer;"
          >
            <img :src="box.image" alt="" />
            <span>{{ box.name }}</span>
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
const localePath = useLocalePath();
import axios from 'axios';
const {locale } = useI18n();
let lang = ref(locale);
let url = getUrl();
let router = useRouter();
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

   const goToBrandPageById = (id) => {
      const queryParams = {
        id: id,
      }
         const url = lang.value + '/brandcar'

      router.push({ path: url , query: queryParams })
    }

</script>

<style lang="scss">


</style>