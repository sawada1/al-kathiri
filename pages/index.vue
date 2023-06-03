<template>
  <div>
  
    <div class="container landing">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-lg-7 col-xl-7 col-md-12 col-sm-12">
            <div class="text">
              <span>{{ $t('with al kathiri motors') }}</span>
              <h2>
                {{ $t('FIND YOUR DREAM CAR') }}
              </h2>
              
                <p>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum placeat fugiat sit quo ipsum error maxime voluptates
                   porro commodi quisquam eligendi perferendis 
                 tenetur, repellendus enim ab deserunt, necessitatibus 
                 aliquid quod?
                </p>  
              
              <div>
                <button>{{ $t('explore now') }}</button>
              </div>
            </div>
          </div>
          <div class="col col-lg-5 col-xl-5 col-md-12 col-sm-12">
            <div class="image">
              <img class="img2" loading="lazy" src="~/assets/images/landing2.png" alt="" />
              <div class="img3" loading="lazy" ></div>
              <img class="img1" loading="lazy" src="~/assets/images/landing1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="searchBar">
      <div class="main">
        <select v-model="mainObj.type">
          <option>{{ $t('select the vehicle type') }}</option>
          <option>hatchback</option>
          <option>sedan</option>
          <option>4_by_4</option>
          <option>family</option>
          <option>commercial</option>
        </select>
        <select v-model="mainObj.id">
          <option>{{ $t('choose brand') }}</option>
          <option v-for="brand in brandsWithModles" :value="brand.id">{{ brand.name }}</option>
        </select>
        <select v-model="mainObj.model">
          <option>{{ $t('choose a model') }}</option>
          <option v-if="mainObj.id" v-for="model in brandsWithModles[mainObj.id - 1].parent_models" :value="model.id">{{ model.name }}</option>
        </select>
        <button @click="goToBrandPageSearch()">{{ $t('search') }}</button>
      </div>
    </div>
    <div class="containe groups">
      <swiper
        :spaceBetween="50"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide @click="goToBrandPageByType('sedan')">
          <img  src="@/assets/images/group1.png" loading="lazy" alt="" />
          <span>sedan</span>
        </swiper-slide>
        <swiper-slide @click="goToBrandPageByType('family')">
          <img src="@/assets/images/group2.png" loading="lazy" alt="" />
          <span>family</span>
        </swiper-slide>
        <swiper-slide @click="goToBrandPageByType('sedan')">
          <img src="@/assets/images/group1.png" loading="lazy" alt="" />
          <span>sedan</span>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/group1.png" loading="lazy" alt="" />
          <span>4x4</span>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/group4.png" loading="lazy" alt="" />
          <span>commercial</span>
        </swiper-slide>
     
      </swiper>
    </div>

    <div class="about">
      <div class="container">
        <div class="row gap-5 align-items-center justify-content-around">
          <div class="col-12 col-xl-4 col-lg-4">
            <div class="image">
              <img src="@/assets/images/about.png" loading="lazy" alt="" />
            </div>
          </div>
          <div class="col-12 col-xl-6 col-lg-6">
            <div class="text">
              <span class="span">{{ $t('AL KATHIRI MOTORS') }}</span>
              <h2 class="fw-bolder"  :data-about="$t('about us')">
                {{ $t('how we are') }}
              </h2>
                 <ClientOnly>
                  <p class="" v-html="generalData.about_us">
              </p>
            </ClientOnly>
              <div class="btn">
                <nuxt-link :to="localePath('/about')">
                  <button class="">
                    <span>{{ $t('now more') }}</span> 
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="why-choose">
      <div class="head">
        <h3 class="fw-bolder" :data-why="$t('AL KATHIRI MOTORS')">{{ $t('why choose us') }}</h3>
      </div>
      <div class="main mb-5 position-relative">
        <div class="boxes row d-flex align-items-center justify-content-center gap-5">
            <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12 ">
                <img src="@/assets/images/box1.svg" loading="lazy" alt="">
                <div class="text">
                    <ClientOnly>
                    <p v-html="generalData.why_alkathiri_cars_card_1"></p>
                    </ClientOnly>
                </div>
              <div v-if="generalSpinner" class="text-center">
          <div class="spinner-border" role="status">
          </div>
        </div>
            </div>
            <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
                <img src="@/assets/images/box2.svg" loading="lazy" alt="">
                <div class="text">
                  <ClientOnly>
                    <p v-html="generalData.why_alkathiri_cars_card_2"></p>
                    </ClientOnly>
                </div>
                     <div v-if="generalSpinner" class="text-center">
          <div class="spinner-border" role="status">
          </div>
        </div>  
            </div>
            <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
                <img src="@/assets/images/box3.svg" loading="lazy" alt="">
                <div class="text">
                    <ClientOnly>
                    <p v-html="generalData.why_alkathiri_cars_card_3"></p>
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

    <div class="brands">
      <div class="head">
        <h3 class="fw-bolder" :data-brands="$t('AUTHORIZED DISTRIBUTOR')">{{ $t('car brands') }}</h3>
      </div>
      <div class="container">
        <div class="boxes row d-flex justify-content-center gap-3 align-items-center">
          <div
            v-for="box in brandArray"
             @click="goToBrandPageById(box.id)"
            class="box col-5 col-xl-1 col-lg-2"
          >
            <img :src="box.image" loading="lazy" alt="" />
            <span>{{ box.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container latest">
      <div class="head">
        <h3 class="fw-bolder" :data-latest="$t('JUST PUBLISHED')">{{ $t('latest vehicles') }}</h3>
        <div class="see">
          <span>{{ $t('see all') }} </span>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <swiper
        :spaceBetween="10"
        :loop="true"
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
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="car in latestArray" @click="goToCarPage(car.id , car.name)" class="mainlatestbox latestboxes">
          
            <div class="image">
              <img :src="car.main_image" loading="lazy" alt="" />
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
          <div class="overlay"></div>
           <!-- :class="{'active':checkFav,'fa-solid':checkFav}" -->
          <i @click="addToFav(car)" class="fa-regular fa-heart fav"  :class="{'fa-solid':car.is_in_favorite}"  ></i>
     
        </swiper-slide>
      </swiper>
    </div>

    <div class="news">
      <div class="head">
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

    <div class="subscribe">
      <div class="text">
        <div class="d-flex flex-column align-items-center gap-2">
          <h2>
           {{ $t(`Book Your`) }} <br> {{ $t('Maintenance Appointment') }} <br> {{ $t('now') }}
          </h2>
          <div class="btn">
          <nuxt-link :to="localePath('/maintenance')">
                      <span>{{ $t('book now') }}</span>
          </nuxt-link>
          </div>
        </div>
      </div>
      <div class="car"></div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss';
import axios from 'axios';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  async setup() {
    const {locale } = useI18n();
    let BaseUrl = getUrl();
    let brandArray = ref([]);
    let latestArray = ref([]);
    let newsArray = ref([]);
    let currentLang = ref(locale);
    const router = useRouter();

    let mainObj = ref({
      id: null,
      model: null,
       type:null,
     })
    const goToBrandPageById = (id) => {
      const queryParams = {
        id: id,
      }
         const url = currentLang.value + '/brandcar'

      router.push({ path: url , query: queryParams })
    }
    const goToBrandPageByType = (type) => {
      const queryParams = {
        type: type,
      }
         const url = currentLang.value + '/brandcar'

      router.push({ path: url , query: queryParams })
    }
    const goToCarPage = (id , name) => {
      const queryParams = {
        id: id,
        name: name,
      }
         const url = currentLang.value + '/car'

      router.push({ path: url , query: queryParams })
    }

    const goToBrandPageSearch = () => {
         const url = currentLang.value + '/brandcar'
      router.push({ path: url , query: mainObj.value })
    }



    let lang = ref(locale);
    const localePath = useLocalePath();
    let url = getUrl();

      let mainBrands = ref([]); 
    let generalData = ref([])
    let brandsWithModles = ref([]);
    let generalSpinner = ref(false);
    const generalFunc = async () => {
      generalSpinner.value = true;
       let  generalAbout  = await axios.get(`${url}/general`, {
      headers: {
    'Content-Language':`${lang.value}`
  }
    });

      if (generalAbout.status == 200) {
        generalSpinner.value = false;
    }
    let mainBrands = ref([]); 
      generalData.value = generalAbout.data;
     brandsWithModles.value = generalAbout.data.brands_with_models;
    }
   
    generalFunc();
  const carLatestFunc = async () => {
 let  latest  = await axios.get(`${BaseUrl}/cars/latest`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
  latestArray.value = latest.data.data;  
    }
    carLatestFunc();   


const brandsFunc = async () => {
  let  brands  = await axios.get(`${BaseUrl}/brands`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
    brandArray.value = brands.data.data;  
    }
    brandsFunc();
       

    const newsFunc = async () => {
   let  news  = await axios.get(`${BaseUrl}/news/highlighted`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
    newsArray.value = news.data.data;
    }
    newsFunc();
   
  
    const checkFav = ref([]);
  
    let fav = ref([]);
    let favState = ref([]);
    let sweetGoodJob = '';
    let sweetAdded = '';
    let sweetdeleted = '';
    let sweetfiledel =  '';
    let sweetWarning1 = '';
    let sweetWarning2 = '';
    if (lang == 'en') {
     sweetGoodJob = 'Good job!';
     sweetAdded = 'You added to the favourite list';
     sweetsuccess = 'success';
     sweetdeleted = 'Deleted!';
     sweetfiledel =  'Your file has been deleted';
     sweetWarning1 = 'this is already in your favourite list Are you sure to delete it?';
     sweetWarning2 = 'Yes, delete it!';
    } else if (lang == 'ar') {
     sweetGoodJob = 'أحسنت!';
     sweetAdded = 'أضفت إلى قائمة المفضلة';
     sweetsuccess = 'نجاح';
     sweetdeleted = 'تم الحذف!';
     sweetfiledel =  'تم الحذف';
     sweetWarning1 = 'هذا موجود بالفعل في قائمة المفضلة لديك هل أنت متأكد من حذفه؟';
     sweetWarning2 = 'نعم ، احذفها!';
    }
    const addToFav = (box) => {
      if (process.client) {
   let favGet = JSON.parse(sessionStorage.getItem('thefav'))? JSON.parse(sessionStorage.getItem('thefav')) : [];
      // let favChoose = favGet.find((boxi) => boxi.name == box.name);
        let favChoose = favGet ? favGet.filter((ele) => {
          return ele.id == box.id;
      }) : [];
      console.log(favChoose);
      // console.log(favGet);
        
         
        if (favChoose.length < 1) {
        box.is_in_favorite = !box.is_in_favorite;
      fav.value.push(box)       
        sessionStorage.setItem('thefav', JSON.stringify(fav.value));
          // console.log(box);
          Swal.fire(
              sweetGoodJob,
            sweetAdded,
             'success'
              
              
            )          
        } else  {
                Swal.fire({
                  title:sweetWarning1,
                  icon:'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText:sweetWarning2
                }).then((result) => {
                  // dismiss != 'overlay'
                  console.log(result);
                  if (result.value == true) {
                     let final =   favGet.filter((ele) => {
                    return ele.id != box.id;
                     });
                  fav.value = [];
                   
                 sessionStorage.setItem('thefav', JSON.stringify(final));
                    if (final.length < 1) {
                      // window.location.reload();
                      sessionStorage.removeItem("thefav");
                      // fav.value = [];

                    }
                  console.log(final);
                    Swal.fire(
                      sweetdeleted,
                      sweetfiledel,
                      'success'
                    )
                  }
                })
              }
           
        
      }
  

      
    }

  
  
 
   
    

    return {
      modules: [Autoplay, Pagination, Navigation],
      brandArray,
        latestArray,
      newsArray,
      addToFav,
      checkFav,
      generalData,
      checkFav,
      favState,
      localePath,
      mainObj,
      goToBrandPageById,
      goToBrandPageSearch,
      brandsWithModles,
      mainBrands,
      goToCarPage,
      goToBrandPageByType,
      generalSpinner
    };
  },
};
</script>

<style lang="scss"></style>
