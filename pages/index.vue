<template>
  <div>
    <slider/>
    <!-- <div class="container landing" :class="{ 'active': !mainSlider }">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-lg-7 col-xl-7 col-md-12 col-sm-12">
            <div class="text">
              <span class="headFont gsap-landing-span">{{ $t("with al kathiri motors") }}</span>
              <h2 class="headFont gsap-landing-h">
                {{ $t("FIND YOUR DREAM CAR") }}
              </h2>

              <p class="gsap-landing-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat
                fugiat sit quo ipsum error maxime voluptates porro commodi quisquam
                eligendi perferendis tenetur, repellendus enim ab deserunt, necessitatibus
                aliquid quod?
              </p>

              <div>
                <button class="gsap-landing-btn">{{ $t("explore now") }}</button>
              </div>
            </div>
          </div>
          <div class="col col-lg-5 col-xl-5 col-md-12 col-sm-12">
            <div class="image first">
              <img class="img2" loading="lazy" src="~/assets/images/landing2.png" alt="landing" />
              <div class="img3" loading="lazy"></div>
              <img class="img1" loading="lazy" src="~/assets/images/landing1.svg" alt="landing" />
            </div>
          </div>
        </div>
      </div>

    </div> -->



    <div class="searchBar d-flex align-items-center justify-content-center justify-content-xl-center " style="">
      <div class="main">
        <!-- <select v-model="mainObj.type" >
          <option :value="null" disabled>{{ $t('select the vehicle type') }}</option>
          <option>hatchback</option>
          <option>sedan</option>
          <option>4_by_4</option>
          <option>family</option>
          <option>commercial</option>
        </select> -->
        <div class="selectdiv">
         <label for="">
        <select v-model="mainObj.type">
          <option :value="null" disabled>{{ $t("select the vehicle type") }}</option>
          <option :value="'sedan'">{{ $t("sedan") }}</option>
          <option :value="'commercial'">{{ $t("commercial") }}</option>
          <option :value="'multi'" >{{ $t("multi") }}</option>
        </select>
         
         </label>
        </div>
        <div class="selectdiv">
         <label for="">
        <select v-model="mainObj.id">
          <option :value="null" disabled>{{ $t("choose brand") }}</option>
          <option v-for="brand in brandsWithModles" :value="brand.id">
            {{ brand.name }}
          </option>
        </select>
         
         </label>
        </div>
        <div class="selectdiv">
         <label for="">
        <select v-model="mainObj.model">
          <option :value="null" disabled>{{ $t("choose a model") }}</option>
          <option v-if="mainObj.id" v-for="model in brands_models[0].parent_models" :value="model.id">{{ model.name }}
          </option>
        </select>
         
         </label>
        </div>
        <button type="button" :disabled="mainObj.id == null" @click="goToBrandPageSearch()">
          {{ $t("search") }}
        </button>
      </div>
    </div>
    <!-- <div class="containe groups">
     
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
        <swiper-slide @click="goToBrandPageByType('hatchback')" style="cursor: pointer;">
          <img  src="~/assets/images/hatch.png" loading="lazy" alt="sedan" />
          <span class="mt-3">hatchback</span>
        </swiper-slide>
        <swiper-slide @click="goToBrandPageByType('family')" style="cursor: pointer;">
          <img src="~/assets/images/family.png" loading="lazy" alt="family" />
          <span class="mt-3">family</span>
        </swiper-slide>
        <swiper-slide @click="goToBrandPageByType('4_by_4')" style="cursor: pointer;">
          <img src="~/assets/images/4x4.png" loading="lazy" alt="sedan" />
          <span class="mt-3">4x4</span>
        </swiper-slide>
        <swiper-slide @click="goToBrandPageByType('sedan')" style="cursor: pointer;">
          <img src="~/assets/images/sedan.png" loading="lazy" alt="4x4" />
          <span class="mt-3">sedan</span>
        </swiper-slide>
        <swiper-slide style="cursor: pointer;" @click="goToBrandPageByType('suv')">
          <img src="~/assets/images/suv.png" loading="lazy" alt="commercial" />
          <span class="mt-3">suv</span>
        </swiper-slide>
     
      </swiper>
    </div> -->

    <div class="container main-group my-5">
      <div class="row gap-3 justify-content-center">
        <div class="col-12 col-xl-3 col-lg-4 box d-flex align-items-center  justify-content-center gap-2"
          @click="goToBrandPageByType('sedan')" style="cursor: pointer; width:350px;">
          <img src="~/assets/images/sedan.png" loading="lazy" alt="sedan" />
          <span class="mt-3">{{ $t("sedan") }}</span>
        </div>
        <div class="col-12 col-xl-3 col-lg-4 box d-flex align-items-center justify-content-center gap-2"
          @click="goToBrandPageByType('multi')" style="cursor: pointer; width:350px;">
          <img src="~/assets/images/suv.png" loading="lazy" alt="sedan" />
          <span class="mt-3">{{ $t("multi") }}</span>
        </div>
        <div class="col-12 col-xl-3 col-lg-4 box d-flex align-items-center justify-content-center gap-2"
          @click="goToBrandPageByType('commercial')" style="cursor: pointer; width:350px;">
          <img src="~/assets/images/commercial.png" loading="lazy" alt="sedan" />
          <span class="mt-3">{{ $t("commercial") }}</span>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="container">
        <div class="row gap-5 align-items-center justify-content-center">
          <div class="col-12 col-xl-4 col-lg-4">
            <div class="image first">
              <img src="~/assets/images/about.png" class="img-fluid" loading="lazy" alt="about-section" />
            </div>
          </div>
          <div class="col-12 col-xl-6 col-lg-6">
            <div class="text">
              <span class="span headFont">{{ $t("AL KATHIRI MOTORS") }}</span>
              <h2 class="fw-bolder headFont" :data-about="$t('about us')">
                {{ $t("how we are") }}
              </h2>
              <ClientOnly style="background-color: transparent">
                <p class="mt-4" v-html="generalData.why_alkathiri_cars"></p>
              </ClientOnly>
              <div class="btn d-flex justify-content-center justify-content-xl-end justify-content-lg-end">
                <nuxt-link :to="localePath('/about')">
                  <button class="" style="box-shadow:none;">
                    <span>{{ $t("read more") }}</span>
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
        <h3 class="fw-bolder my-5 headFont" :data-why="$t('AL KATHIRI MOTORS')">
          {{ $t("why choose us") }}
        </h3>
      </div>
      <div class="main mb-5 position-relative">
        <div class="boxes row d-flex justify-content-center gap-5">
          <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
            <img src="~/assets/images/box1.svg" loading="lazy" alt="why-choose" />
            <div class="text">
              <ClientOnly>
                <p v-html="generalData.why_alkathiri_cars_card_1"></p>
              </ClientOnly>
            </div>
            <div v-if="generalSpinner" class="text-center">
              <!-- <div class="spinner-border" role="status"></div> -->
                <video autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt=""
                  style="width: 70px; height:70px;" />
            </div>
          </div>
          <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
            <img src="~/assets/images/box2.svg" loading="lazy" alt="why-choose" />
            <div class="text">
              <ClientOnly>
                <p v-html="generalData.why_alkathiri_cars_card_2"></p>
              </ClientOnly>
            </div>
            <div v-if="generalSpinner" class="text-center">
              <!-- <div class="spinner-border" role="status"></div> -->
                <video autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt=""
                  style="width: 70px; height:70px;" />
            </div>
          </div>
          <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
            <img src="~/assets/images/box3.svg" loading="lazy" alt="why-choose" />
            <div class="text">
              <ClientOnly>
                <p v-html="generalData.why_alkathiri_cars_card_3"></p>
              </ClientOnly>
            </div>
            <div v-if="generalSpinner" class="text-center">
              <!-- <div class="spinner-border" role="status"></div> -->
              <video autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt=""
                style="width: 70px; height:70px;" />

            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="brands">
    <div class="container">
      <div class="head">
        <h3 class="fw-bolder headFont" :data-brands="$t('AUTHORIZED DISTRIBUTOR')">
          {{ $t("car brands") }}
        </h3>
      </div>
      <div class="container">
        <div class="boxes row d-flex justify-content-center gap-3 align-items-center">
          <div v-for="box in brandArray" @click="goToBrandPageByIdAndName(box.id, box.name)"
            class="box col-5 col-xl-1 col-lg-2" style="cursor: pointer">
            <img class="lazyload" :data-src="box.image" src="https://placehold.co/400" loading="lazy" :alt="box.name" />
            <span>{{ box.name }}</span>
          </div>
        </div>
      </div>
        <div v-if="spinner_brands" class="text-center">
          <video autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt=""
            style="width: 100px; height:100px;" />
        </div>
    </div>
     
     </div>
    <div class="container latest">
      <div class="head">
        <h3 class="fw-bolder headFont" :data-latest="$t('JUST PUBLISHED')">
          {{ $t("latest vehicles") }}
        </h3>
        <div class="see d-flex align-items-center gap-1">
          <nuxt-link :to="localePath('/brandcar')">
            <span style="color: #1b395f">{{ $t("see all") }} </span>
          </nuxt-link>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <swiper :spaceBetween="10"  :autoplay="{
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
    slidesPerView: 4,
    spaceBetween: 60,
  },
}" :pagination="{
  clickable: true,
}" :navigation="true" :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" class="mySwiper">
        <swiper-slide v-for="car in latestArray" @click="goToCarPage(car.id, car.model_id, car.name)" style="cursor: pointer; min-height: 330px; position:relative;" class="" >
          <div class="new-car-card" >
            <div class="image w-100" :style="{backgroundImage: 'url(' +( car.main_image  ?  car.main_image :'https://placehold.co/600'   ) + ')' }">
             <!-- <img :src="car.main_image" class="w-100" alt=""> -->
            </div>
            <span>{{ car.name }}</span>
          </div>
        </swiper-slide>
      </swiper>
      <div v-if="spinner_latest" class="text-center">
        <video autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt=""
          style="width: 100px; height:100px;" />
      </div>
    </div>

    <div v-if="newsArray.length > 0" class="news">
      <div class="head">
        <h3 class="fw-bolder headFont" :data-news="$t('BE AWARE OF OUR')">
          {{ $t("latest news") }}
        </h3>
      </div>
      <!-- :looped-slides="true"
      :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" -->
      <swiper :spaceBetween="50" :dir="getSwiperDirection()" :centeredSlides="true"  :autoplay="{
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
}" :navigation="true" :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" class="mySwiper latestNews">
        <swiper-slide v-for="box in newsArray" class="box" @click="goToNewsPage(box.title, box.id)"
          style="cursor: pointer">
          <div class="image">
            <img class="lazyload" :data-src="box.cover_image" src="https://placehold.co/600" loading="lazy"
              :alt="box.title" />
          </div>
          <div class="text">
            <h3>{{ box.title }}</h3>

            <client-only>
              <p v-html="box.description.substring(0, 180)">
              </p>
            </client-only>


            <div class="detail" style="white-space: normal;">
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
              <div class="read d-flex align-items-center gap-1">
                <span class="fw-bold">{{ $t("read more") }}</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="containe subscribe">
      <div class="text">
        <div class="d-flex flex-column align-items-center gap-2">
          <h2 class="headFont">
            {{ $t(`Book Your`) }} <br />
            {{ $t("Maintenance Appointment") }} <br />
            {{ $t("now") }}
          </h2>
          <div style="z-index: 1;" class="btn">
            <nuxt-link :to="localePath('/maintenance')">
              <span>{{ $t("book now") }}</span>
            </nuxt-link>
          </div>
        </div>
        <img class="sub1" src="~/assets/images/sub.png" alt="">
      </div>
      <div class="car"></div>

    </div>
    <!-- <div class="container subscribee">
      <div class="text d-flex flex-column pt-4 px-4">
        <div class="">
          <h2 class="headFont">
            {{ $t(`Book Your`) }} <br />
            {{ $t("Maintenance Appointment") }} <br />
            {{ $t("now") }}
          </h2>
          <div class="btn">
            <nuxt-link :to="localePath('/maintenance')">
              <span>{{ $t("book now") }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="car"></div>

    </div> -->



  </div>
</template>

<script>

import axios from "axios";

import "mosha-vue-toastify/dist/style.css";

export default {

  transition: "page",
  async setup() {
    const localePath = useLocalePath();
    const { locale } = useI18n();
    let BaseUrl = getUrl();
    let brandArray = ref([]);
    let latestArray = ref([]);
    let newsArray = ref([]);
    let spinner_latest = ref(false);
    let spinner_brands = ref(false);
    let currentLang = ref(locale);
    const router = useRouter();

    let mainObj = ref({
      id: null,
      model: null,
      type: null,
    });
    const goToBrandPageByIdAndName = (id, name) => {
      const queryParams = {
        id: id,
        name: name,
      };
      const url = currentLang.value + "/cars";

      router.push({ path: url, query: queryParams });
    };
    const goToBrandPageByType = (type) => {
      const queryParams = {
        type: type,
      };
      const url = currentLang.value + "/cars";

      router.push({ path: url, query: queryParams });
    };
    const goToCarPage = (carid,modelcarid , carname) => {
      const queryParams = {
        id: carid,
        model_id:modelcarid,
        name:carname
      };
      const url = currentLang.value + "/car";

      router.push({ path: url, query: queryParams });
      // return localePath({ path: path, query: query });
    };

    const goToBrandPageSearch = () => {
      const url = currentLang.value + "/cars";
      router.push({ path: url, query: mainObj.value });
    };

    let mainSlider = ref('');


    

    const goToNewsPage = (name, id) => {
      const queryParams = {
        name: name,
        id: id,
      };
      const url = currentLang.value + "/new";
      router.push({ path: `/${url}`, query: queryParams });
    };

    let lang = ref(locale);

    let url = getUrl();
    let pending = ref(false);
    let mainBrands = ref([]);
    let generalData = ref([]);
    let brandsWithModles = ref([]);
    let generalSpinner = ref(false);


    const fetchBrands = async() =>{
            spinner_brands.value = true;
      let brands = await axios.get(`${BaseUrl}/brands`, {
        headers: {
          "Content-Language": `${lang.value}`,
        },
      });
      if (brands.status == 200) {
        spinner_brands.value = false;
      }
      brandArray.value = brands.data.data;
    }

    const fetchGeneral = async()=>{
            generalSpinner.value = true;
      let generalAbout = await axios.get(`${url}/general`, {
        headers: {
          "Content-Language": `${lang.value}`,
        },
      });
       
      if(generalAbout.status == 200){
        generalSpinner.value = false;
      }
      
      generalData.value = generalAbout.data;
      brandsWithModles.value = generalAbout.data.brands_with_models;
      useHead({
        title: lang.value == "ar" ? "الكثيري للسيارات" : "alkathiri motors",
        meta: [
          { name: "description", content: generalData.value.meta_tag_description },
          { name: "keywords", content: generalData.value.meta_tag_keywords },
        ],
      });
    }

    const fetchCars = async()=>{
            spinner_latest.value = true;
      let latest = await axios.get(`${BaseUrl}/cars/latest`, {
        headers: {
          "Content-Language": `${lang.value}`,
        },
      });

      if(latest.status == 200){
        spinner_latest.value = false;
      }
      // if (process.client) {
      //   let favGet = JSON.parse(sessionStorage.getItem("thefav"))
      //     ? JSON.parse(sessionStorage.getItem("thefav"))
      //     : [];
      //   console.log(favGet);


      //   for (let i = 0; i < latest.data.data.length; i++) {
      //     latest.data.data[i].is_in_favorite = favGet.find((element) => element.id == latest.data.data[i].id) != undefined;
      //   }
      // }
   
      latestArray.value = latest.data.data;
    }
    const fetchNews = async()=>{
      let news = await axios.get(`${BaseUrl}/news/highlighted`, {
        headers: {
          "Content-Language": `${lang.value}`,
        },
      });
      newsArray.value = news.data.data;
    }

    const brands_models = computed(() => {
      return brandsWithModles.value.filter((ele) => {
        return ele.id == mainObj.value.id;
      })
    });
    const checkFav = ref([]);

    let fav = ref([]);
    let favState = ref([]);
    let checkToast = ref(false);

    let addedList = ref("added to wishlist");
    let removedList = ref("removed from wishlist");
    if (lang.value == "ar") {
      addedList.value = "تم الاضافة الي قائمة المفضلات";
      removedList.value = "تم الحذف من قائمة المفضلات";
    }

    // const addToFav = (box) => {
    //   if (process.client) {
    //     let favGet = JSON.parse(sessionStorage.getItem("thefav"))
    //       ? JSON.parse(sessionStorage.getItem("thefav"))
    //       : [];
    //     // let favChoose = favGet.find((boxi) => boxi.name == box.name);
    //     let favChoose = favGet.filter((ele) => {
    //       return ele.id == box.id;
    //     });
    //     console.log(favChoose);
    //     // console.log(favGet);

    //     box.is_in_favorite = !box.is_in_favorite;
    //     if (favChoose.length <= 1) {
    //       //fav.value.push(box)
    //       favGet.push(box);
    //       if (box.is_in_favorite == true) {
    //         sessionStorage.setItem("thefav", JSON.stringify(favGet));

    //         createToast(
    //           {
    //             title: addedList.value,
    //           },
    //           {
    //             timeout: 3000,
    //             toastBackgroundColor: "#1B395F",
    //             showIcon: true,
    //             type: "success",
    //             transition: "bounce",
    //           }
    //         );
    //       } else {
    //         let final = favGet.filter((ele) => {
    //           return ele.id != box.id;
    //         });
    //         createToast(
    //           {
    //             title: removedList.value,
    //           },
    //           {
    //             timeout: 3000,
    //             toastBackgroundColor: "#1B395F",
    //             showIcon: true,
    //             type: "danger",
    //             transition: "bounce",
    //           }
    //         );
    //         fav.value = [];

    //         sessionStorage.setItem("thefav", JSON.stringify(final));
    //         if (final.length < 1) {
    //           // window.location.reload();
    //           sessionStorage.removeItem("thefav");
    //           // fav.value = [];
    //         }
    //       }
    //     }
    //   }
    // };



    const getSwiperDirection = () => {
      if (lang.value === 'ar') {
        return 'rtl'; // Set the direction to RTL
      } else {
        return 'ltr'; // Set the direction to LTR
      }
    }


    onMounted(() => {      
      fetchGeneral();
      fetchBrands();
      fetchCars();
      fetchNews();
    })
    return {
      // modules: [Autoplay, Pagination, Navigation],
      brandArray,
      latestArray,
      newsArray,
      // addToFav,
      checkFav,
      generalData,
      checkFav,
      favState,
      localePath,
      mainObj,
      mainSlider,
      spinner_latest,
      checkToast,
      brands_models,
      goToBrandPageByIdAndName,
      goToBrandPageSearch,
      brandsWithModles,
      mainBrands,
      spinner_brands,
      goToCarPage,
      addedList,
      getSwiperDirection,
      goToBrandPageByType,
      generalSpinner,
      goToNewsPage,
      pending
    };
  },
};
</script>

<style lang="scss">
.landing {
  z-index: -1 !important;
  height: fit-content !important;
  display: none;

  &.active {
    display: block;
  }
}
</style>
