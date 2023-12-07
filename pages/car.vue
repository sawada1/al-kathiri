<template>
  <div style="min-height: 100vh;">
    <div  class="carName" style="margin-top: 80px;">
    <div v-for="car in mainCar.cars">
      <div v-if="carDetails == car.id">
        <h3 class="fw-bolder text-center pt-5 px-3 ">{{ car.name }}</h3>
        <div class=" d-flex align-items-center justify-content-end gap-3 mx-4 my-3">
          <img style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#shareViaModal"
            src="@/assets/images/share.svg" alt="">
          <i style="cursor:pointer; color:#B0B8BC; font-size: 19px;" @click="addToFav(car)" class="fa-regular fa-heart fav"
            :class="{ 'fa-solid': favCar.is_in_favorite }"></i>
        </div>
        <div class="row gap-3  justify-content-between align-items-center">
          <div class="col-3 prices">
            <div class="price d-flex align-items-center gap-5 w-100">
              <div class="thePrice d-flex flex-column gap-1 text-center py-2 px-4">
                <span>{{ $t('price') }}</span>
                <span class="fw-bold" style="font-size:17px;">{{ car.selling_price }} {{ $t('Sar') }}</span>
              </div>
              <div class="after text-center gap-1 d-flex flex-column">
                <span>{{ $t('after vat') }}</span>
                <span class="fw-bold" style="font-size:17px;">{{ car.selling_price_after_vat }} {{ $t('Sar') }}</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-3 col-lg-3 maindivColor">
            <div class="colors d-flex align-items-center  justify-content-between">
              <p class="available">{{ $t('Colors Available') }}</p>
              <div class="theColors">
                <span v-for="color, index in  car.colors" :style="{ 'background-color': color.hex_code }"
                  @click="colorCar = color.id" :class="{ 'active': colorCar == color.id }"></span>
              </div>
              <div v-for="color, index in  car.colors">
                <div v-if="colorCar == color.id" class="mainColor" :style="{ 'background-color': color.hex_code }">
                  <p class="" style="white-space: normal; text-align: center;" :class="{ 'white': color.name == 'ابيض' || color.name == 'white' }">{{ color.name }}</p>
                </div>

              </div>
            </div>
          </div>
          <div class="col-12 col-xl-3 col-lg-3 px-4  d-flex justify-content-end mainBtn">
            <button @click="goToPurchasePage(car.id, colorCar)" class="purchaseBtn">{{ $t('purchase') }}</button>

          </div>
        </div>
      </div>
    </div>



    </div>


    <div class="modal fade" id="shareViaModal" tabindex="-1" role="dialog" aria-labelledby="shareViaModalLabel"
      aria-hidden="true">
      <div class="modal-dialog " role="document">
        <div class="modal-content col-12">
          <div class="modal-header">
            <h5 class="modal-title">Share via</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="icon-container1 d-flex">
              <a target="_blank" class="smd" :href="`https://twitter.com/intent/tweet?url=${route}`">
                <i class=" img-thumbnail fab fa-twitter fa-2x" style="color:#4c6ef5;background-color: aliceblue"></i>
                <p>{{ $t('Twitter') }}</p>
              </a>
              <a class="smd" target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?${route}&quote=${name}`">
                <i class="img-thumbnail fab fa-facebook fa-2x" style="color: #3b5998;background-color: #eceff5;"></i>
                <p>{{ $t('facebook') }}</p>
              </a>
              <a class="smd" target="_blank" :href="`https://wa.me/?text=${route}/`">
                <i class="img-thumbnail fab fa-whatsapp fa-2x" style="color:  #25D366;background-color: #cef5dc;"></i>
                <p>Whatsapp</p>
              </a>

            </div>
          </div>
          <div class="modal-footer  w-100">
            <div class="inp w-100">
              <input disabled :value="route" class="col-11 ur" type="url" :placeholder="route ? route : 'loading..'"
                id="myInput" aria-describedby="inputGroup-sizing-default" style="">
              <button class="" @click="copyToClipboard()"><i class="far fa-clone"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- <swiper v-if="allImages.length >= 1" :dir="getSwiperDirection()" :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
         
    }" :loop="true" :looped-slides="true" :breakpoints="{
  '640': {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 1.5,
    spaceBetween: 50,
  },
}" :navigation="true" :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" class="mySwiper thecarSwiper">

      <swiper-slide @click="showMultiple">
        <img :src="mainImg" class="img-fluid mainpic" :alt="mainCar.name">
      </swiper-slide>
      <swiper-slide @click="showMultiple">
        <div class="row gap-2 justify-content-around   images">
          <div v-for="item in mainCar.images" class="col-5 col-xl-3 col-lg-3 mx-2">
            <img class="img-fluid" :src="item" :alt="mainCar.name">
          </div>


        </div>
      </swiper-slide>

    </swiper> -->
    <div class="cars-images">
    
    
    <swiper :spaceBetween="50" :dir="getSwiperDirection()" :centeredSlides="true" :looped-slides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :breakpoints="{
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
}" :pagination="{
  clickable: true,
}" :navigation="true" :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" class="mySwiper">
        <swiper-slide v-for="item in mainCar.images" class="box" @click="showMultiple"
          style="cursor: pointer" >
          <div class="image">
            <img class="lazyload img-fluid"  :alt="mainCar.name" :data-src="item" src="https://placehold.co/600" loading="lazy" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>

    <div class="container mainCarDetails my-4">
      <div class="row justify-content-center gap">
        <div class="col-12 col-xl-7 col-lg-7 col-md-8">
          <div class="settings my-5">
            <div v-for="car in mainCar.cars" class="container settings-container">
              <div v-if="carDetails == car.id" class="row  text-cente  align-items-center justify-content-center justify-content-xl-start justify-content-lg-start p-2" style="white-space: nowrap;">
                <div class="col-5 col-xl-3 col-lg-3 col-md-3   my-2 " >
                <div class="setting-box">
                  <img src="@/assets/images/icon1.svg" alt="">
                  <span>{{ $t('Model Year') }}</span>
                  <p class="fw-bold">{{ car.year }}</p>
                
                </div>
                </div>
                <div class="col-5 col-xl-3 col-lg-3 col-md-3  my-2 " >
                <div class=" setting-box">
                  <img src="@/assets/images/icon5.svg" alt="">
                  <span>{{ $t('Engine') }}</span>
                  <p class="fw-bold">{{car.engine_type  }} </p>
                
                </div>
                </div>
                <div class="col-5 col-xl-3 col-lg-3 col-md-3  my-2 ">
                <div class=" setting-box">
                  <img src="@/assets/images/noun-speed-3341122.svg" alt="">
                  <span>{{ $t('Kilometers') }}</span>
                  <p class="fw-bold">{{ car.maximum_force }}</p>
                
                </div>
                </div>
                <div class="col-5 col-xl-3 col-lg-3 col-md-3   my-2 ">
                <div class="setting-box">
                  <img src="@/assets/images/noun-transmission-1325127.svg" alt="">
                  <span>{{ $t('Transmission') }}</span>
                  <p class="fw-bold">{{ car.motion_vector }}</p>
                </div>
                </div>
                <div class="col-5 col-xl-3 col-lg-3 col-md-3  my-2  ">
                <div class="setting-box">
                
                  <img src="@/assets/images/icon6.svg" alt="">
                  <span>{{ $t('Number Of Doors') }}</span>
                  <p class="fw-bold">{{ car.seats_number }}</p>
                </div>
                </div>
                <div class="col-5 col-xl-3 col-lg-3 col-md-3  my-2  ">
                <div class="setting-box">
                  <img src="@/assets/images/icon6.svg" alt="">
                  <span>{{ $t('Seats') }}</span>
                  <p class="fw-bold">{{ car.upholstered_seats }}</p>
                
                </div>
                </div>
                <div class="col-5 col-xl-3 col-lg-3 col-md-3  my-2  ">
                <div class="setting-box">
                  <img src="@/assets/images/icon7.svg" alt="">
                  <span>{{ $t('Transmission') }}</span>
                  <p class="fw-bold">{{ car.traction_type }}</p>
                
                </div>
                </div>
                <div class="col-5 col-xl-3 col-lg-3 col-md-3  my-2  ">
                <div class="setting-box">
                  <img src="@/assets/images/icon8.svg" alt="">
                  <span>{{ $t('Fuel Type') }}</span>
                  <p class="fw-bold">{{ car.fuel_consumption }}</p>
                
                </div>
                </div>
              </div>
            </div>
          </div>

          <div class="Alldescription containe ">
            <!-- <h4 class="fw-bolder" style="color:#1B395F">{{ $t('Car Description') }}</h4>
            <client-only>
              <div class="mb-3" v-html="mainCar.description"></div>
            </client-only> -->
            <div class="container">
              <swiper :slidesPerView="3" :dir="getSwiperDirection()" :spaceBetween="10" :breakpoints="{
                '300': {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                '768': {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                '1024': {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

              }" :loop="true" :navigation="true" :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" class="mySwiper swiper-car-category"
                style="position: sticky; top:80px; z-index:555; background-color:#fff">
                <swiper-slide v-for="i, index in mainCar.cars" @click="carDetails = i.id"
                  :class="{ 'active': carDetails == i.id }">
                  <span>{{ i.name }}</span>
                </swiper-slide>




              </swiper>
              <div v-for="i, index in mainCar.cars" class="category-content">
                <div v-if="carDetails == i.id">
                  <h3>{{ i.name }}</h3>
                  <p>{{ i.description }}</p>

                </div>

              </div>

            </div>
          </div>
        </div>


        <div class="col-12 col-xl-5 col-lg-5   mainCarNameContainer">
          <div v-for="car in mainCar.cars" class="sticky-carDetails d-flex flex-column gap-2">
            <div v-if="carDetails == car.id" class="carNameSlide  ">
              <div class=" d-flex align-items-center justify-content-end gap-3 mx-4 mb-2  " style="position: relative; top:30px;">
                <img style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#shareViaModal"
                  src="@/assets/images/share.svg" alt="">
                <i style="cursor:pointer; color:#B0B8BC; font-size: 19px;" @click="addToFav()" class="fa-regular fa-heart fav"
                  :class="{ 'fa-solid': favCar.is_in_favorite }"></i>
              </div>
              <h3 class="fw-bolder px-4 ">{{ car.name }}</h3>
              <select name="" id="" v-model="carDetails">
                <option v-for="car in  mainCar.cars" :value="car.id">{{ car.name }}</option>
              </select>
              <div class="colors d-flex align-items-cente flex-column   justify-content-between mx-4">
                <p class="available">{{ $t('Colors Available') }}</p>
                <div class="d-flex justify-content-between">
                  <div class="theColors">
                    <span v-for="color, index in  car.colors" :style="{ 'background-color': color.hex_code }"
                      @click="colorCar = color.id" :class="{ 'active': colorCar == color.id }"></span>
                  </div>
                  <div v-for="color, index in  car.colors">
                    <div v-if="colorCar == color.id" class="mainColor" :style="{ 'background-color': color.hex_code }">
                      <p class=""  style="white-space: normal; text-align: center;" :class="{ 'white': color.name == 'ابيض' || color.name == 'white' }">{{ color.name }}</p>
                    </div>

                  </div>
                </div>

              </div>
                  <span class="text-danger fw-bold text-center px-2 mt-1">{{ $t('warning') }} </span>
              <div class="price d-flex align-items-center gap-5 w-100" style="white-space: normal;">
                <div class="thePrice text-center d-flex flex-column gap-1 py-2 px-4 w-50" >
                  <span>{{ $t('price') }}</span>
                  <span class="fw-bold" style="font-size: 17px;">{{ car.selling_price }} {{ $t('Sar') }}</span>
                </div>
                <div class="after text-center d-flex flex-column gap-1">
                  <span>{{ $t('after vat') }}</span>
                  <span class="fw-bold" style="font-size: 17px;">{{ car.selling_price_after_vat }} {{ $t('Sar') }}</span>
                </div>
              </div>

            </div>
            <button v-if="carDetails == car.id" @click="goToPurchasePage(car.id, colorCar)" class="w-100 ">{{
              $t('purchase') }}</button>
          </div>


        </div>

      </div>

    </div>



    <div v-if="pending" class="mainLoader">
      <video autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt="" />
    </div>
  </div>
</template>

<script>
// import { Autoplay, Pagination, Navigation } from 'swiper';
import { ref } from 'vue';
import axios from 'axios';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  components: {
    VueEasyLightbox
  },
  async setup() {
    const visibleRef = ref(false)
    const indexRef = ref(0) // default 0
    const imgsRef = ref([])
    let checkToast = ref(false);
    const onShow = () => {
      visibleRef.value = true
    }





    let brandArray = ref([]);
    let colorCar = ref(2);
    let theColorId = ref(1);

    let checkNameCarScroll = ref(false);
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const router = useRouter();
    const MainRoute = useRoute();
    let id = MainRoute.query.id;
    let name = MainRoute.query.name;
    let model_id = MainRoute.query.model_id;
    let route = ref(MainRoute.fullPath);
    let currentLang = ref(locale);
    let carDetails = ref(id);
    let url = getUrl();
    let pending = ref(false);
    let mainCar = ref([]);
    let favIcon = ref(false);
    let firstCar = ref([]);
    let mainImg = ref(null);
    let allImages = ref([]);


    if (process.client) {
      route.value = window.location.href;
      console.log(route.value);
    }

    let favCar = ref([]);

    const carLatestFunc = async () => {
      pending.value = true;
      let car = await axios.get(`${url}/models/${model_id}`, {
        headers: {
          'Content-Language': `${currentLang.value}`
        }
      });

      mainCar.value = car.data;
      allImages.value = car.data.images;
      // console.log(car.data.cars[0]);
      // firstCar.value = car.data.cars[0];
      mainImg.value = car.data.images[0];
      // console.log(mainCar.value);
      if (car.status == 200) {
        pending.value = false

      }



    }
     
    const carInFav = async()=>{
      const theCar = await axios.get(`${url}/cars`, {
        headers: {
          'Content-Language': `${currentLang.value}`
        }
      });
      let theCarFav = theCar.data.data.filter((boxx) => {
        return boxx.id == id;
      });

      if (process.client) {
        let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
        console.log(favGet);
        for (let i = 0; i < theCarFav.length; i++) {
          theCarFav[i].is_in_favorite = favGet.find((element) => element.id == theCarFav[i].id) != undefined;
        }
      }
      favCar.value = theCarFav[0];
      // console.log(favCar.value);
      // console.log(favCar.value.is_in_favorite);
    }

    onMounted(() => {
      carLatestFunc();
      carInFav();
    })





    const showMultiple = () => {
      for (let i = 0; i < mainCar.value.images.length; i++) {

        imgsRef.value.push(mainCar.value.images[i]);

      }
      indexRef.value = 0 // index of imgList
      onShow()
    }
    const onHide = () => (visibleRef.value = false);

    function copyToClipboard() {
      /* Copy the text */
      if (process.client) {
        let input = document.getElementById('myInput').value;
        console.log(input);
        const clipBoard = navigator.clipboard;
        clipBoard.writeText(input).then(() => {
          console.log("Copied text to keyboard");
        });

      }

    }
    let addedList = ref('added to wishlist');
    let removedList = ref('removed from wishlist')
    if (currentLang.value == 'ar') {
      addedList.value = 'تم الاضافة الي قائمة المفضلات'
      removedList.value = 'تم الحذف من قائمة المفضلات'
    } else if (currentLang.value == 'en') {
      addedList.value = 'added to wishlist'
      removedList.value = 'removed from wishlist';
    }

    const addToFav = async (car) => {
      let box = favCar.value;
      if (process.client) {
        let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
        let favChoose = favGet.find((boxi) => boxi.name == box.name);

        // console.log(favGet);

        favCar.value.is_in_favorite = !favCar.value.is_in_favorite;
        if (!favChoose) {
          //fav.value.push(box)
          favGet.push(box);
          if (favCar.value.is_in_favorite == true) {
            createToast({
              title: addedList.value,
            },
              {
                timeout: 3000,
                toastBackgroundColor: '#1B395F',
                showIcon: 'true',
                type: 'success',
                transition: 'bounce',
              })
          
            sessionStorage.setItem('thefav', JSON.stringify(favGet));
          }

        } else {
          let final = favGet.filter((ele) => {
            return ele.id != box.id;
          });

          createToast({
            title: removedList.value,
          },
            {
              timeout: 3000,
              toastBackgroundColor: '#1B395F',
              showIcon: 'true',
              type: 'danger',
              transition: 'bounce',
            })

          sessionStorage.setItem('thefav', JSON.stringify(final));
          if (final.length < 1) {
            // window.location.reload();
            sessionStorage.removeItem("thefav");
            // fav.value = [];

          }
        }



      }



    }

    const goToPurchasePage = (id, color) => {
      const queryParams = {
        id: id,
        colorId: color
      }
      const url = currentLang.value + '/purchase'
      //router.replace(route.query.redirect || '/')
      router.push({ path: `/${url}`, query: queryParams })
    }

    const getSwiperDirection = () => {
      if (currentLang.value === 'ar') {
        return 'rtl'; // Set the direction to RTL
      } else {
        return 'ltr'; // Set the direction to LTR
      }
    }
    return {
      // modules: [Autoplay, Pagination, Navigation],
      mainCar,
      getSwiperDirection,
      localePath,

      pending,
      route,
      pending,
      name,
      favIcon,
      colorCar,
      visibleRef,
      indexRef,
      imgsRef,
      showMultiple,
      onHide,
      firstCar,
      mainImg,
      carDetails,
      goToPurchasePage,
      route,
      copyToClipboard,
      addToFav,
      allImages,
      favCar,
      checkToast,
      addedList

    }
  }
}

</script>

