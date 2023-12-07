<template>
  <div>


    <div class="brands-container pt-4" style="">

      <swiper :slidesPerView="3" :dir="getSwiperDirection()" 
      :spaceBetween="10" 
      :loop="true" 
      :breakpoints="{
        '500': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 8,
          spaceBetween: 20,
        }
      }" 
      :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" 
      class="mySwiper container">
        <swiper-slide class="" v-for="box, index in brandArray">
          <div class="box" :class="{ 'active': changeActive == box.id , 'disabled': isLoading}"
            @click="changeActive = box.id, carTypeActive = 1 , carType = 'sedan', spinner = true, changeModelActive = null, carLatestFunc()">
            <img :src="box.image" alt="" class=" w-50 ">
            <span>{{ box.name }}</span>
          </div>
        </swiper-slide>



      </swiper>
   

      <!-- <swiper v-if="brands_models_cars[0]" :slidesPerView="3" :dir="getSwiperDirection()" :spaceBetween="10" :loop="true" :breakpoints="{
        '500': {
          slidesPerView: 3,
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
      }" :modules="modules" class="mySwiper container">
        <swiper-slide class="" v-for="box, index in brands_models_cars[0].models">
          <div class="box" :class="{ 'active': changeModelActive == box.id , 'disabled': isLoading }"  @click="changeModelActive = box.id , spinner = true ,  carLatestFunc()">
            <span>{{ box.name }}</span>
            
          </div>
        </swiper-slide>



      </swiper> -->


              <swiper :slidesPerView="3" :dir="getSwiperDirection()" 
          :spaceBetween="10" 
          :loop="true" 
          :breakpoints="{
            '500': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 8,
              spaceBetween: 20,
            }
          }" 
          :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" 
          class="mySwiper container">
            <swiper-slide class="">
              <div class="box" :class="{ 'active': carTypeActive == 1 }"
                @click="carType = 'sedan', carTypeActive = 1, carLatestFunc()">
                <span> {{ $t("sedan") }} </span>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box" :class="{ 'active': carTypeActive == 2 }"
                @click="carType = 'commercial', carTypeActive = 2, carLatestFunc()">
                <span> {{ $t("commercial") }} </span>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box" :class="{ 'active': carTypeActive == 3 }"
                @click="carType = 'multi', carTypeActive = 3, carLatestFunc()">
                <span> {{ $t("multi") }} </span>
              </div>
            </swiper-slide>



          </swiper>




    </div>
    <div v-if="pending" class="mainLoader">
      <video autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt="" />
    </div>

    <div class="container cars-related-with-brands" style="min-height:60vh">
      <div class="row  justify-content-center justify-content-xl-start justify-content-lg-start">
        <div v-if="spinner" class="d-flex align-items-center justify-content-center" style="min-height: 100vh;">
          <div  role="status">
           <video
          autoplay
          loop
          muted
          playsinline
          src="~/assets/images/main-loader.webm"
          alt=""
          style="width: 150px; height: 150px"
        />
          </div>

        </div>
        <div v-if="latestArray" class="col-12 col-xl-3 col-lg-3 col-md-4 col-sm-6  my-4" v-for="car in  latestArray"
        @click="goToCarPage(car.id, car.model_id, car.name)">
           
          <div class="new-car-card" >
            <div class="image w-100" :style="{backgroundImage: 'url(' +( car.main_image  ?  car.main_image :'https://placehold.co/600'   ) + ')' }">
             <!-- <img :src="car.main_image" class="w-100" alt=""> -->
            </div>
            <span>{{ car.name }}</span>
          </div>


        </div>
        <div v-if="checkSpan" class="d-flex align-items-center  justify-content-center" style="height: 100vh;">
          <span class="fw-bold fs-2" style="color:#1B395F">{{ $t('There are no cars') }}</span>
        </div>



      </div>

      <div v-if="latestArray.length >= 1" class="d-flex align-items-center  justify-content-center  mt-5" style="">
        <button @click="goToBrandPageById()" class="d-flex align-items-center gap-2 px-5">
          {{ $t('explore more') }}
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
    

  </div>
</template>

<script>
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
// import { Autoplay, Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import axios from 'axios';
export default {
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  async setup() {
    const localePath = useLocalePath();
    const { locale } = useI18n();
    let lang = ref(locale);
    let url = getUrl();
    let router = useRouter();
    let brandArray = ref([]);
    let latestArray = ref([]);
    let changeActive = ref(null);
    let changeModelActive = ref(null);
    let spinner = ref(false);
    let checkSpan = ref(false);
    let checkMain = ref([changeActive.value]);
    
    let isLoading = ref(false);
     let carType = ref('sedan');
     let carTypeActive = ref(1);
    
    const changeActiveFunc = (id) => {
      checkMain.value[0] = id;
      spinner.value = true;
    }
    let pending = ref(true);
    const brandsFunc = async () => {
      pending.value = true;
      let brands = await axios.get(`${url}/brands`, {
        headers: {
          'Content-Language': `${lang.value}`
        }
      });


      if (brands.status == 200) {
        pending.value = false;
      }
      brandArray.value = brands.data.data;
      changeActive.value = brands.data.data[0].id;
      
      // console.log(changeActive.value);

           
     carLatestFunc();

    }

  let model_brands = ref([]);
    const brand_model = async()=>{
    let models = await axios.get(`${url}/make-appointment-form-data`, {
      headers: {
      'Content-Language': `${lang.value}`
    }
    });
    models.data.brands.filter((ele) => {
     return ele.id != 3;
    });
    model_brands.value = models.data.brands;
     console.log(models.data.brands);
    }


    const brands_models_cars = computed(() => {
  return  model_brands.value.filter((ele) => {
    return ele.id == changeActive.value;
  })
});
    brandsFunc();


   
    const carLatestFunc = async () => {
      checkSpan.value = false;
      spinner.value = true;
      isLoading.value = true
      latestArray.value = [];
      let latest = await axios.get(`${url}/cars`, {
        params: {
          brands: [changeActive.value],
          //models: [changeModelActive.value],
          type: carType.value
        },
        headers: {
          'Content-Language': `${lang.value}`
        }
      });


      if (latest.status == 200) {
        spinner.value = false;
        isLoading.value = false;
        // if (process.client) {
        //   let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
        //   console.log(favGet);
        //   for (let i = 0; i < latest.data.data.length; i++) {
        //     latest.data.data[i].is_in_favorite = favGet.find((element) => element.id == latest.data.data[i].id) != undefined;
        //   }
        // }

        latestArray.value = latest.data.data;
        if (latest.data.data.length < 1) {
          checkSpan.value = true;
        } else {
          checkSpan.value = false;

        }
      }

    };


    const goToBrandPageById = () => {
      let queryParams = {
        id: changeActive.value,
        type: carType.value ? carType.value : null,
        //model: changeModelActive.value ? changeModelActive.value : null
      }
      // if(changeModelActive.value){
      //   queryParams = {
      //     id: changeActive.value,
      //     model:changeModelActive.value
      //   }
      // }
      const url = lang.value + '/cars'
      router.push({ path: `/${url}`, query: queryParams });
    }
    const goToCarPage = (id, model_id, name) => {
      const queryParams = {
        id: id,
        model_id: model_id,
        name: name,
      }
      const url = lang.value + '/car'

      router.push({ path: `/${url}`, query: queryParams })
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
    // const addToFav = (box) => {
    //   if (process.client) {
    //     let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
    //     // let favChoose = favGet.find((boxi) => boxi.name == box.name);
    //     let favChoose = favGet.filter((ele) => {
    //       return ele.id == box.id;
    //     });
    //     // console.log(favChoose);
    //     // console.log(favGet);

    //     box.is_in_favorite = !box.is_in_favorite;
    //     if (favChoose.length <= 1) {
    //       //fav.value.push(box)
    //       favGet.push(box);
    //       if (box.is_in_favorite == true) {
    //         sessionStorage.setItem('thefav', JSON.stringify(favGet));
    //         createToast({
    //           title: addedList.value,
    //         },
    //           {
    //             timeout: 3000,
    //             toastBackgroundColor: '#1B395F',
    //             showIcon:true,
    //             type: 'success',
    //             // position: 'bottom-right',
    //             transition: 'bounce',
    //           })
    //       } else {
    //         let final = favGet.filter((ele) => {
    //           return ele.id != box.id;
    //         });
    //         createToast({
    //           title: removedList.value,
    //         },
    //           {
    //             timeout: 3000,
    //             toastBackgroundColor: '#1B395F',
    //             showIcon:true,
    //             type: 'danger',
    //             transition: 'bounce',
    //           });
    //         fav.value = [];

    //         sessionStorage.setItem('thefav', JSON.stringify(final));
    //         if (final.length < 1) {
    //           // window.location.reload();
    //           sessionStorage.removeItem("thefav");
    //           // fav.value = [];

    //         }
    //       }

    //     }



    //   }



    // }


    useHead({
      title: lang.value == 'ar' ? 'السيارات / الكثيري للسيارات' : 'alkathiri motors / cars'
    });
       const getSwiperDirection = () => {
      if (lang.value === 'ar') {
        return 'rtl'; // Set the direction to RTL
      } else {
        return 'ltr'; // Set the direction to LTR
      }
    }
    onMounted(() => {
      // carLatestFunc();
      brand_model();
    });
     
    return {
      // modules: [Autoplay, Pagination, Navigation],
      goToBrandPageById,
      pending,
      brandArray,
      latestArray,
      checkMain,
      getSwiperDirection,
      changeActive,
      carLatestFunc,
      changeActiveFunc,
      spinner,
      goToCarPage,
      // addToFav,
      checkSpan,
      brands_models_cars,
      changeModelActive,
      isLoading,
      carType,
     carTypeActive

      

    }

  }
}

</script>
