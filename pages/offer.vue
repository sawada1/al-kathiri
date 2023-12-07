<template>
    <div style="min-height: 100vh;">
  <div v-if="!pending" class="theOffer" style="margin-top: 150px; min-height: 100vh;" >
    <div class="container ">
    <div class="containe px-3">
     <img :src="theOffer.image"  class="img-fluid w-100" :alt="theOffer.title">
        <h3 class="mt-4 mb-2 fw-bolder thehead">{{ theOffer.title }}</h3>
        <ClientOnly class="mb-3">
           <p v-html="theOffer.description"></p>
        </ClientOnly>
     
    </div>
            <div v-if="offersCar.length > 0" class="includedOffers">
                <h3 class="fw-bolder pt-3 thehead">{{ $t('Vehicles Included In The Offer') }}</h3>
               <div class="row  justify-content-center justify-content-xl-start justify-content-lg-start gap-1   ">
             <div v-for="car in offersCar"  style="cursor: pointer;"  class="col-xl-2 col-lg-2 col-md-4">
              <div class="new-car-card"  @click="goToCarPage(car.id, car.model_id, car.name)">
            <div class="image w-100" :style="{backgroundImage: 'url(' +( car.main_image  ?  car.main_image :'https://placehold.co/600'   ) + ')' }">
            </div>
            <span>{{ car.name }}</span>
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
    let removedList = ref('removed from wishlist')
    if (lang.value == 'ar') {
      addedList.value = 'تم الاضافة الي قائمة المفضلات'
      removedList.value = 'تم الحذف من قائمة المفضلات'
    } else if (lang.value == 'en') {
       addedList.value = 'added to wishlist'
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
            },
            {
            timeout: 3000,
            toastBackgroundColor: '#1B395F',
            showIcon: true,
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
            },
            {
              timeout: 3000,
            toastBackgroundColor: '#1B395F',
            showIcon: true,
            type: 'danger',
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
     for (let i = 0; i < box.data.offer_cars.length; i++) {
      box.data.offer_cars[i].is_in_favorite = favGet.find((element) => element.id == box.data.offer_cars[i].id) != undefined;
    }
      }
  offersCar.value = box.data.offer_cars

  useHead({
  title: lang.value == 'ar' ? `${theOffer.value.title}/الكثيري للسيارات` : `alkathiri motors / ${theOffer.value.title}`
});
}
offerFanc();

  const goToCarPage = (id , model_id, name) => {
      const queryParams = {
        id: id,
        model_id:model_id,
        name: name,
      }
         const url = lang.value + '/car'

      router.push({ path: `/${url}` , query: queryParams })
}


  



</script>

<style lang="scss">


</style>