<template>
    <div>
        <div class="about-us" style="margin-top: 150px;">
          <div class="row ">
           <div class="col-12  col-xl-7 col-lg-7 col-md-7 px-5">
           <div class=" d-flex flex-column align-items-cente gap-3">
            <h3 class="" style="white-space:normal;" :data-about-us="$t('NOW MORE ABOUT US')">{{ $t('WELCOME TO AL KATIRI MOTORS') }}</h3>
            <ClientOnly>
                  <p class="" v-html="aboutData.about_us">
              </p>
            </ClientOnly>
          
           </div>
             
           </div>
           <div class="col-12 col-xl-5 col-lg-5 col-md-5">
            <img class="first" src="~/assets/images/about-img.png" alt="about us image">
           </div>
          </div>
        </div>

        <div class="about-play">
        <div class="image">
         <!-- <img src="@/assets/images/play.png" alt=""> -->
             <iframe 
     :src="`https://www.youtube.com/embed/${aboutData.about_us_video_url}`"
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>
         <div class="overlay">
          <i class="fa-regular fa-circle-play"></i>
         </div> 
        </div>
        
        <img class="backpic" src="@/assets/images/landing1.svg" alt="">        
        
        </div>

    <div class="why-choose">
      <div class="head">
        <h3 class="fw-bolder my-5" :data-why="$t('AL KATHIRI MOTORS')">{{ $t('why choose us') }}</h3>
      </div>
      <div class="main mb-5 position-relative">
        <div class="boxes row d-flex  justify-content-center gap-5">
            <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12 ">
                <img src="~/assets/images/box1.svg" loading="lazy" alt="why-choose">
                <div class="text">
                    <ClientOnly>
                    <p v-html="aboutData.why_alkathiri_cars_card_1"></p>
                    </ClientOnly>
                </div>
              <div v-if="generalSpinner" class="text-center">
          <div class="spinner-border" role="status">
          </div>
        </div>
            </div>
            <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
                <img src="~/assets/images/box2.svg" loading="lazy" alt="why-choose">
                <div class="text">
                  <ClientOnly>
                    <p v-html="aboutData.why_alkathiri_cars_card_2"></p>
                    </ClientOnly>
                </div>
                     <div v-if="generalSpinner" class="text-center">
          <div class="spinner-border" role="status">
          </div>
        </div>  
            </div>
            <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
                <img src="~/assets/images/box3.svg" loading="lazy" alt="why-choose">
                <div class="text">
                    <ClientOnly>
                    <p v-html="aboutData.why_alkathiri_cars_card_3"></p>
                    </ClientOnly>
                </div>
                      <div v-if="generalSpinner" class="text-center">
          <div class="spinner-border" role="status">
          </div>
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
let url = getUrl();
const {locale } = useI18n();
let lang = ref(locale);
let aboutData = ref([]); 
let pending = ref(true);
const general = async () => {
let  generalAbout  = await axios.get(`${url}/general`, {
      headers: {
    'Content-Language':`${lang.value}`
  }
});
  if (generalAbout.status == 200) {
    pending.value = false;
}
 aboutData.value = generalAbout.data;  
}
general();

useHead({
  title: lang.value == 'ar' ? 'من نحن/الكثيري للسيارات' : 'alkathiri motors / about us'
});

</script>

<style lang="scss">


</style>