<template>
    <div>
         <div class="container mainlatest">
           <h3 :data-latestnews="$t('BE AWARE OF OUR')">{{ $t('latest news') }}</h3>
           <div class="row gap-2 justify-content-center">

        <div v-for="product in newsArray" class="col-12 col-xl-3 col-lg-3 col-md-2 boxx">
          <nuxt-link :to="localePath(`/news/${product.id}`)">
          <img class="mainpic" :src="product.cover_image" alt="">
              <div class="textt">
                <h4>{{ product.title }}</h4>
                <client-only>
                  <p v-html="product.description.substring(0 , 180)">
                  
                  </p>
                </client-only>
             
                <div class="mainIcons">
                 <div class="icons">
                  <div class="icon">
                   <img src="~/assets/images/tag.svg" alt="">
                   <span>{{ product.tags}}</span>
                  </div>
                  <div class="icon">
                   <img src="~/assets/images/time.svg" alt="">
                   <span>{{ product.created_at }}</span>
                  </div>
                 </div>
                
                  <span class="read fw-bold">
                  {{ $t('read more') }}
                    <i class="fa-solid fa-chevron-right"></i>
                  </span>
                
                 
                </div>
              </div>
              
          
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
let url = getUrl();
const localePath = useLocalePath();
import axios from 'axios';
const {locale } = useI18n();
let lang = ref(locale);
let pending = ref(false);
let router = useRouter();
let newsArray = ref([]); 
const productNews = async () => {
  pending.value = true;
const  products  = await axios(`${url}/news`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});

  if (products.status == 200){
    pending.value = false;
}
 newsArray.value = products.data.data;  
}
productNews();

// console.log(products.value.data);

</script>

<style lang="scss">


</style>