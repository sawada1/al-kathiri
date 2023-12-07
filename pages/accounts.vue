<template>
    <div style="min-height: 100vh;">
   
    
 <div v-if="!pending" class="offersCars" style="margin-top: 150px; min-height: 100vh;">
  
   <div class="container" style="">
      <div class="head">
        <!-- <h3 :data-offers="$t('GET our')">{{ $t('SPATIAL OFFERS') }}</h3> -->
        <h3 :data-offers="$t('GET our')">{{ $t('accounts') }}</h3>
    </div>
    <div class="row  offers  px-xl-0 px-lg-0 justify-content-xl-start justify-content-lg-start justify-content-center " >

<div v-for="box ,i in banksArr"  class="col-12 col-xl-3 col-lg-3 d-flex   align-items-center flex-row justify-content-betwee">
    
        
        <!-- <img :alt="box.title" class="lazyload" :data-src="box.image"  src="https://placehold.co/600" loading="lazy"> -->
        <div class="offer w-100" style="cursor: pointer; padding:20px 10px;  ">
         <div class="d-flex flex-column align-items-center gap-2 mb-3">
        <h5 style="font-size: 15px;" class="fw-bolder">{{ box.name }}</h5>
        <!-- <div class="bank-image" :style="{ backgroundImage: 'url(' + (box.image || 'https://placehold.co/600') + ')' }"></div> -->
          <img :src="box.image" class="img-flui" style="width: 100%; height:100px; object-fit:contain;  border:2px solid #eee; border-radius: 10px;" >
        </div>

       <div class="d-flex flex-column w-100  p-2" style="background-color: #f0eaea83; border-radius: 10px;">
       <div class="d-flex align-items-center gap-1 text-cente">
        <span style="font-size: 13px;"> {{ $t('accountN') }}</span>
        <span style="font-size: 13px;"> {{ box.owner_name }}</span>
       </div>
       <div class="d-flex flex-column ">
        <span style="font-size: 13px;">{{ $t('account number') }}: </span>
         <div class="w-100 d-flex align-items-center justify-content-between">
        <span style="font-size: 13px;">{{ box.account_no }} </span>
         <span style="font-size: 13px; color:#1b395f; text-decoration: underline;" @click="copyToClipboard();" class="copy-word">
        <i class="fa-regular fa-copy"></i>
        {{ $t('copy') }}
        </span>
         </div>
       </div>
       <div class=""> 
       <span style="font-size: 13px;">{{ $t('iBan') }}:</span>
       <div class="d-flex align-items-center justify-content-between  w-100">
     <span style="font-size: 12px;" class="copy-account">{{ box.iban }}</span>
      <span style="font-size: 13px; color:#1b395f; text-decoration: underline; white-space: nowrap;" @click="copyToClipboard();" class="copy-word">
      <i class="fa-regular fa-copy"></i>
      {{ $t('copy') }}
      </span>
       </div>  
       </div>
       </div>
        </div>
</div>



    </div>
   </div>
   <!-- <div class="d-flex align-items-center justify-content-center" style="min-height: 80vh;" v-else>
     <h1 style="color:#1b395f">{{ $t('mainOffers') }}</h1>
   </div> -->
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
let banksArr = ref([]);


let copyy = 'copy';
if(lang.value == 'en'){
  copyy = 'copy';
} else if(lang.value == 'ar'){
  copyy ='انسخ';
}
const localePath = useLocalePath();
let url = getUrl();

const banksFunc = async () => {
  pending.value = true;
    let  banks  = await axios.get(`${url}/banks`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
  });
  banksArr.value = banks.data.data;
  if (banks.status == 200) {
    pending.value = false;
 }
  console.log(banksArr.value);

}
banksFunc();
 

function copyToClipboard() {
      /* Copy the text */
      if (process.client) {
        let copy = document.querySelectorAll('.copy-word');
        copy.forEach((e)=>{
            e.addEventListener("click",function(ele){
              let word = this.previousElementSibling.innerHTML;
              const clipBoard = navigator.clipboard;
              clipBoard.writeText(word).then(() => {
                if(lang.value == 'en'){
                  e.innerHTML = 'done'; 
                } else{
                  e.innerHTML = 'تم النسخ'; 
                }
                 setTimeout(() => {
                 e.innerHTML = ` 
                 <i class="fa-regular fa-copy"></i>
                 ${copyy}
                 `; 
                 }, 1000);
              });
            })
        })

      }
    }

useHead({
  title: lang.value == 'ar' ? 'الحسابات / الكثيري للسيارات' : 'alkathiri motors / accounts'
});
  

</script>

<style lang="scss">

.bank-image{
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 80px;
  width: 100%;
  border:2px solid #eee;
  border-radius: 10px;
}


</style>