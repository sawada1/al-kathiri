<template>
    <div>
  <div v-if="!pending" class="theOffer" style="margin-top: 150px;">
    <div class="container ">
    <div class="containe px-3">
     <img :src="theOffer.image"  class="w-100" :alt="theOffer.title">
        <h3 class="my-3 fw-bolder thehead">{{ theOffer.title }}</h3>
        <ClientOnly>
           <p v-html="theOffer.description"></p>
        </ClientOnly>
     
    </div>
            <div class="includedOffers  ">
                <h3 class="fw-bolder pt-3 thehead">{{ $t('Vehicles Included In The Offer') }}</h3>
               <div class="row  justify-content-center gap-1   ">
             <div v-for="offer in offersCar" @click="goToCarPage(offer.id , offer.name)" style="cursor: pointer;"  class="mainlatestbox col-xl-2 col-lg-2 col-md-4">
               <div class="image">
                    <img :src="offer.main_image" :alt="offer.name">
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
                 <span class="detail">
                     {{ $t('details') }}
                    <i class="fa-solid fa-chevron-right"></i> 
                 </span>
                 <div @click="goToCarPage(offer.id , offer.name)" class="overlay"></div>
               
          <i @click="addToFav(offer)" class="fa-regular fa-heart fav"  :class="{'fa-solid':offer.is_in_favorite}"  ></i>
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

import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import axios from 'axios';
    const {locale } = useI18n();
let lang = ref(locale);
const MainRoute = useRoute();
const router = useRouter();
let id = MainRoute.query.id;
let url = getUrl();
let pending = ref(false);
let theOffer = ref([]);
let offersCar = ref([]);

   let addedList = ref('added to wishlist');
    let success = ref('success');
    let removedList = ref('removed from wishlist')
    if (lang.value == 'ar') {
      addedList.value = 'تم الاضافة الي قائمة المفضلات'
      success.value = 'نجاح';
      removedList.value = 'تم الحذف من قائمة المفضلات'
    } else if (lang.value == 'en') {
       addedList.value = 'added to wishlist'
      success.value = 'success';
      removedList.value = 'removed from wishlist';
    }

    const addToFav = (box) => {
      if (process.client) {
   let favGet = JSON.parse(sessionStorage.getItem('thefav'))? JSON.parse(sessionStorage.getItem('thefav')) : [];
      // let favChoose = favGet.find((boxi) => boxi.name == box.name);
        let favChoose =  favGet.filter((ele) => {
          return ele.id == box.id;
      });
      console.log(favChoose);
      // console.log(favGet);
        
          box.is_in_favorite = !box.is_in_favorite;
      if (favChoose.length <= 1) {
        //fav.value.push(box)
        favGet.push(box);
        if (box.is_in_favorite == true) {
                       createToast({
            title: addedList.value,
            description: success.value,
            },
            {
            timeout: 5000,
            toastBackgroundColor: 'green',
            showIcon: 'true',
            type: 'success',
            transition: 'bounce',
            })
         sessionStorage.setItem('thefav', JSON.stringify(favGet));
        } else {
           let final =   favGet.filter((ele) => {
                    return ele.id != box.id;
           });

            createToast({
            title: removedList.value,
            description: success.value,
            },
            {
              timeout: 5000,
            toastBackgroundColor: 'green',
            showIcon: 'true',
            type: 'success',
            transition: 'bounce',
            })   
                  //fav.value = [];
                   
                 sessionStorage.setItem('thefav', JSON.stringify(final));
                    if (final.length < 1) {
                      // window.location.reload();
                      sessionStorage.removeItem("thefav");
                      // fav.value = [];

                    }
      }       
               
        } 
       
           
        
      }
  

      
    }
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

     if (process.client) {
   let favGet = JSON.parse(sessionStorage.getItem('thefav'))? JSON.parse(sessionStorage.getItem('thefav')) : [];
      console.log(favGet);
          if (favGet.length <= 1) {
        //  latest.data.data = favGet;
            box.data.offer_cars.map((ele) => {
             return ele.id == favGet.map((e) => {
               return e.id;
             }) ? ele.is_in_favorite = true : false;
           }); 
        
       } else {
           for (let i = 0; i < box.data.offer_cars.length; i++){
            if (box.offer_cars.data[i].id == favGet[i].id) {
              box.data.offer_cars[i].is_in_favorite = favGet[i].is_in_favorite;
           }
         }
       }
      }
  offersCar.value = box.data.offer_cars

  useHead({
  title: lang.value == 'ar' ? `${theOffer.value.title}/الكثيري للسيارات` : `alkathiri motors / ${theOffer.value.title}`
});
}
offerFanc();

  const goToCarPage = (id , name) => {
      const queryParams = {
        id: id,
        name: name,
      }
         const url = lang.value + '/car'

      router.push({ path: `/${url}` , query: queryParams })
}


  



</script>

<style lang="scss">


</style>