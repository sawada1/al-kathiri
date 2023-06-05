<template>
    <div>
  

        <div class="news">
  <div class="newSection mt-5">
        <h3 class="fw-bolder" :data-news="$t('BE AWARE OF OUR')">{{ $t('latest news') }}</h3>
      </div>
      <swiper
        :spaceBetween="50"
        
        :loop="true"
        :centeredSlides="true"
           :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 2.7,
            spaceBetween: 100,
          },
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper latestNews"
      >
        <swiper-slide v-for="box in newsArray" class="box">
        <nuxt-link :to="localePath(`/news/${box.id}`)">
        
          <div class="image">
            <img :src="box.cover_image" loading="lazy" alt="" />
          </div>
          <div class="text">
            <h3>{{ box.title }}</h3>
            
              <p>
               {{box.description.substring(3 , 180) }}
              </p>
            
            <div class="detail">
              <div class="tags">
                <div class="tag">
                  <i class="fa-solid fa-tag"></i>
                  <span>{{ box.tags }}</span>
                </div>
                <div class="tag">
                  <i class="fa-regular fa-clock"></i>
                  <span>{{ box.created_at }}</span>
                </div>
              </div>
              <div class="read">
                 <span class="fw-bold">{{ $t('now more') }}</span>              
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div> 
        
        </nuxt-link>
       
        </swiper-slide>
      
      </swiper>
    </div>
         <div class="container mainlatest">
           <div class="row gap-2 justify-content-center">

        <div v-for="product in newsArray" @click="goToNewsPage(product.title , product.id)" style="cursor: pointer;" class="col-12 col-xl-3 col-lg-3 col-md-2 boxx">
        
          <img class="mainpic" :src="product.cover_image" :alt="product.title">
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

   const goToNewsPage = (name,id) => {
        const queryParams = {
          name: name,
        id:id
      }
      const url = lang.value + '/new'
      router.push({ path: `/${url}` , query: queryParams })
    }

useHead({
  title: lang.value == 'ar' ? 'اخبار / الكثيري للسيارات' : 'alkathiri motors / news',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});
  
// console.log(products.value.data);

</script>

<style lang="scss">


</style>