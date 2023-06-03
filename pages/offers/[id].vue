<template>
    <div>
  <div v-if="!pending" class="theOffer mt-5">
    <div class="container ">
    <div class="containe px-3">
     <img :src="theOffer.image"  class="w-100" alt="">
        <h3 class="my-3 fw-bolder thehead">{{ theOffer.title }}</h3>
        <ClientOnly>
           <p v-html="theOffer.description"></p>
        </ClientOnly>
     
    </div>
            <div class="includedOffers  ">
                <h3 class="fw-bolder pt-3 thehead">Vehicles Included In The Offer</h3>
               <div class="row  justify-content-center gap-1   ">
             <div v-for="offer in offersCar" class="mainlatestbox col-xl-2 col-lg-2 col-md-4">
               <div class="image">
                    <img :src="offer.main_image" alt="">
                </div>
                <h3>{{ offer.name }}</h3>
                <div class="text1">
                    <div class="price">
                        <span>{{ $t('price') }}</span>
                        <h4>{{ offer.selling_price }} SAR</h4>
                    </div>
                    <div class="after">
                        <span>{{ $t('after vat') }}</span>
                        <h4>{{ offer.selling_price_after_vat }} SAR</h4>
                    </div>
                </div>
                 <span class="detail">{{ $t('details') }}</span>
                 <div class="overlay"></div>
               
              <i class="fa-regular fa-heart fav"></i>
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
import axios from 'axios';
    const {locale } = useI18n();
let lang = ref(locale);
if (process.client) {
  if (lang == null) {
    lang = 'en';
  }
}
let { id } = useRoute().params;
let url = getUrl();
let pending = ref(false);
let theOffer = ref([]);
let offersCar = ref([]);
const offerFanc = async () => {
  pending.value = true;
  let box = await axios.get(`${url}/offers/${id}`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
  });
  if (box.status == 200) {
    pending.value = false;
  }
  
  theOffer.value = box.data.offer;
  offersCar.value = box.data.offer_cars
}
offerFanc();

// console.log(box);


</script>

<style lang="scss">


</style>