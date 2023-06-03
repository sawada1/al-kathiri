<template>
    <div>
         <div class="container thelatestcar">
           <div class="thebox">
            <img class="bigpic " :src="theproduct.cover_image" alt="">
            <div class="title  w-100">
             <h5>{{ theproduct.title }}</h5>
             <div class="icons">
              <div class="icon">
               <img src="@/assets/images/tag.svg" alt="">
               <span>{{ $t('tag name') }}</span>
              </div>
              <div class="icon">
               <img src="@/assets/images/time.svg" alt="">
               <span>{{ theproduct.created_at }}</span>
              </div>
             </div>
            </div>
               

               <ClientOnly>
                 <div v-html="theproduct.description"></div>
               </ClientOnly>        
              
           </div>
           
        </div>
                 <div v-if="pending"  class="mainLoader">
     <span class="loader"></span>
    </div>
    </div>
</template>

<script setup>


const { id } = useRoute().params;
let url = getUrl();
import axios from 'axios';
const {locale } = useI18n();
let lang = ref(locale);
let pending = ref(false);
let theproduct = ref([]); 
const productNews = async () => {
  pending.value = true;
const  product  = await axios(`${url}/news/${id}`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});

  if (product.status == 200){
    pending.value = false;
}
 theproduct.value = product.data.data;  
}
productNews();

</script>

<style lang="scss">


</style>