<template>
    <div>
  
    
         <div class="brands-container" style="">
   
             <swiper
        :slidesPerView="3"
        :spaceBetween="10"
       :loop="true"
        :breakpoints="{
          '500': {
            slidesPerView:3,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="" v-for="box,index in brandArray">
    <div class="box" :class="{'active':changeActive==box.id}" @click="changeActive=box.id , changeActiveFunc(box.id),carLatestFunc()">
    <img :src="box.image" alt="">
      <span>{{ box.name }}</span>
    </div>      
    </swiper-slide>
    
  
  </swiper>


     
    </div>
      <div v-if="pending"  class="mainLoader">
     <span class="loader"></span>
    </div>

      <div class="container cars-related-with-brands" style="min-height: 100vh;">
   <div class="row justify-content-center">
     <div v-if="spinner" class="d-flex align-items-center justify-content-center">
         <div class="spinner-border text-center" style="width: 5rem; height: 5rem;" role="status">
</div>
                  
 </div>
   <div v-if="latestArray" class="col-3 mainlatestbox" v-for="car in  latestArray" style="cursor: pointer; ">
       <div class="image"  >
              <img @click="goToCarPage(car.id , car.name)" :src="car.main_image" loading="lazy" :alt="car.name" />
            </div>
          <h3>{{ car.name }}</h3>
          <div class="text1">
            <div class="price">
              <span>{{ $t('price') }}</span>
              <h4>{{car.selling_price}}</h4>
            </div>
            <div class="after">
              <span>{{ $t('after vat') }}</span>
              <h4>{{ car.selling_price_after_vat == null ? 0 : car.selling_price_after_vat }}</h4>
            </div>
          </div>
          <span class="detail">
                {{ $t('details') }}
                    <i class="fa-solid fa-chevron-right"></i> 
          </span>
          <div class="overlay" @click="goToCarPage(car.id , car.name)"></div>
          <i @click="addToFav(car)" class="fa-regular fa-heart fav"  :class="{'fa-solid':car.is_in_favorite}"  ></i>
     
   
   </div>
 
      
   
   </div>

      <div class="d-flex align-items-center justify-content-center  mt-5">
       <button @click="goToBrandPageById()" class="d-flex align-items-center gap-2 px-5">
       Explore more
      <i class="fa-solid fa-chevron-right"></i>
       </button>
      </div>
   </div>
    </div>
</template>

<script>
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import { Autoplay, Pagination, Navigation } from "swiper";
 import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import axios from 'axios';
export default {
      components: {
    Swiper,
    SwiperSlide,
  },
  async setup() {
const localePath = useLocalePath();
const {locale } = useI18n();
let lang = ref(locale);
let url = getUrl();
let router = useRouter();
let brandArray = ref([]);
let latestArray = ref([]);
let changeActive = ref(1);
let spinner = ref(false); 
let checkMain = ref([changeActive.value]);

const changeActiveFunc = (id) => {
  checkMain.value[0] = id;
}
let pending = ref(true);  
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

 

    const carLatestFunc = async () => {
      spinner.value = true;
      latestArray.value = [];
         let latest = await axios.get(`${url}/cars`, {
        params: {
          brands: checkMain.value,
        },
        headers: {
          'Content-Language': `${lang.value}`
        }
         });

         
  if (latest.status == 200) {
    spinner.value = false;
     if (process.client) {
   let favGet = JSON.parse(sessionStorage.getItem('thefav'))? JSON.parse(sessionStorage.getItem('thefav')) : [];
      console.log(favGet);
       if (favGet.length >= 1) {
        //  latest.data.data = favGet;
         for (let i = 0; i < latest.data.data.length; i++){
           if (latest.data.data[i].id == favGet[i].id) {
              latest.data.data[i].is_in_favorite = favGet[i].is_in_favorite;
             }
             
          
         }
        }
      }
  
      latestArray.value = latest.data.data;
    
      }
      
    };

    
    const goToBrandPageById = () => {
   const queryParams = {
        id: changeActive.value,
      }
         const url = lang.value + '/brandcar'
      router.push({ path: `/${url}` , query: queryParams})
    }

     const goToCarPage = (id , name) => {
      const queryParams = {
        id: id,
        name: name,
      }
         const url = lang.value + '/car'

      router.push({ path: `/${url}` , query: queryParams })
    }

       let addedList = ref('added to wishlist');
    let success = ref('success');
    let removedList = ref('removed from wishlist')
    if (lang.value == 'ar') {
      addedList.value = 'تم الاضافة الي قائمة المفضلات'
      success.value = 'نجاح';
      removedList.value = 'تم الحذف من قائمة المفضلات'
    } 
    let fav = ref([]);
    let favState = ref([]);
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
          sessionStorage.setItem('thefav', JSON.stringify(favGet));
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
                  fav.value = [];
                   
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


useHead({
  title: lang.value == 'ar' ? 'السيارات/الكثيري للسيارات' : 'alkathiri motors / cars'
});

onMounted(() => {
carLatestFunc();
});

  return {
    modules: [Autoplay, Pagination, Navigation],
    goToBrandPageById,
    pending,
    brandArray,
    latestArray,
    checkMain,
    changeActive,
    carLatestFunc,
    changeActiveFunc,
    spinner,
    goToCarPage,
    addToFav
     
    }
  
  }
  }




</script>

<style lang="scss">


</style>