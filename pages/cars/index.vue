<template>
  <div style="min-height:100vh">
    <div class="brandCars" style="margin-top: 100px; ">
      <div class="container p-2">
        <div class="row p-2 justify-content-center">
          <div class="col-12 col-xl-3 col-lg-3 col-md-12 ">
            <div class="d-flex flex-column align-items-center" style="position: sticky; top:100px;">
              <div class="filter d-flex align-items-center justify-content-between w-100">
                <h5>{{ $t('filter') }}</h5>
                <span @click="reset()">{{ $t('reset') }}</span>
              </div>

              <div class="rangeSlider">

                <div class="mainprocess">
                  <span></span>
                </div>
                <div v-if="minValue" class="rangeGroups">
                  <input type="range" class="range-min" style="cursor: pointer;" v-model="minNum" :min="minValue" :max="maxValue"  step="100">
                  <input type="range" class="range-max" v-model="maxNum" style="cursor: pointer;" :min="minValue" :max="maxValue"  step="100">
                </div>
                <div class="inputs w-100 d-flex align-items-center justify-content-between">
                  <span>{{minNum}} {{ $t('Sar') }}</span>
                  <span>{{ maxNum }} {{ $t('Sar') }}</span>
                </div>
              </div>




              <div class="accordion" id="accordionExample">
                <div class="accordion-item mainItem">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed  mainbtnacc" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapsecars" aria-expanded="true" aria-controls="collapseOne">
                      <span class="theHead"> {{ $t('cars') }} </span>
                    </button>
                  </h2>
                  <div id="collapsecars" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="checksCars">
                        <div class="inp" v-for="box, index in filterData.brands">
                          <input :id="`label${index}`" type="checkbox" :checked="mainId == box.id" v-model="checkMain"
                            :value="box.id">
                          <label :for="`label${index}`" class="d-flex align-items-center gap-2">
                            <img :src="box.image" alt="">
                            <span>{{ box.name }}</span>
                          </label>


                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="accordion-item mainItem">
                  <h2 class="accordion-header">
                    <button class="accordion-button  d-flex align-items-center gap-5  mainbtnacc" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                      aria-controls="collapseOne">
                      <span class="theHead"> {{ $t('mark & model') }} </span>
                    </button>
                  </h2>
                  <div v-if="checkMain.length >= 1" id="collapseOne" class="accordion-collapse collapse"
                    :class="{ 'show': index == 0 }" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="accordion" id="accordionbranch1">
                        <div v-for="item, index in checkMain" id="mainbranch"  class="accordion-item mainbranch w-100">
                          <div v-for="boxi in filterData.brands">
                            <div v-if="boxi.id == item" class="accordion-header w-100">
                              <button v-for="model in boxi.parent_models" class="accordion-button  d-flex align-items-center gap-3" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOnebranch1" aria-expanded="true"
                                aria-controls="collapseOne">
                                <div  class="d-flex align-items-center gap-2">
                                   <input  :id="`box-${model.id}`" type="checkbox" v-model="models" :value="model.id">
                                  <label :for="`box-${model.id}`" style="white-space: nowrap;">{{ model.name }}</label>
                                </div>
                               
                              </button>
                            </div>

                            <!-- <div id="collapseOnebranch1" class="accordion-collapse collapse show" data-bs-parent="#accordionbranch1">
      <div class="accordion-body ">
         <div class="checks d-flex flex-column gap-3">
            <div v-for="box in boxi.sub_models" class="inp d-flex align-items-center gap-3 p-2">
            <input type="checkbox" v-model="subModels" :value="box.id">
            <span>{{ box.name }}</span>
            </div>
             
        
         </div>
      </div>
    </div> -->
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                  <div v-else class="fw-bold text-center my-2">{{ $t('you have to choose a brand') }}</div>
                </div>

                <div class="accordion-item mainItem">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed mainbtnacc" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                      <span class="theHead"> {{ $t('car type') }} </span>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body d-flex flex-column gap-2">

                      <div class="inp d-flex align-items-center gap-2">
                        <input id="sedan" type="radio" v-model="checkType" value="sedan">
                        <label for="sedan">{{ $t('sedan') }}</label>
                      </div>
                      <div class="inp d-flex align-items-center gap-2">
                        <input id="multi" type="radio" v-model="checkType" value="multi">
                        <label for="multi">{{ $t('multi') }}</label>
                      </div>
                      <div class="inp d-flex align-items-center gap-2">
                        <input id="commercial" type="radio" v-model="checkType" value="commercial">
                        <label for="commercial">{{ $t('commercial') }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button @click="showCars()" :disabled="isLoading" class="my-3">{{ $t('apply') }}</button>
            </div>
          </div>
          <div class="col-12 col-xl-9 col-lg-9 col-md-12 ">
            <div v-if="checkMain.length >= 1" class="d-flex align-items-center gap-1">
              <!-- <h2  v-if="checkMain.length >= 1" v-for="item, index in checkMain"
                class="fw-bolder py-1 d-flex align-items-center">
                <div class="d-flex ">
                  <p  v-for="box in filterData.brands" class="d-flex align-items-center">
                   <span  v-if="box.id == item"> {{ box.name }}</span>
                  </p>
                  <span v-if="checkMain.length > 1"> , </span>
                </div>
               
              </h2> -->
              <div v-for="item, index in checkMain" class="d-flex align-items-center fw-bolder gap-1">
                     <h2  v-for="box in filterData.brands" class="d-flex align-items-center gap-1 ">
                     <span class="fw-bold" v-if="box.id == item"> {{ box.name }} {{ checkMain.length > 1 ? "," : "" }}</span>
                    </h2>
            
               </div>
            </div>

            <h2 v-else class="fw-bolder">
              {{ $t('all cars') }}
            </h2>
            <div class="row  justify-content-center justify-content-xl-start justify-content-lg-start" v-if="checkCars">
              <div v-for="car in brandCars" 
                class="col-12 col-xl-4 col-lg-4 col-md-5 my-2">

                <div class="new-car-card" @click="goToCarPage(car.id, car.model_id, car.name)">
            <div class="image w-100" :style="{backgroundImage: 'url(' +( car.main_image  ?  car.main_image :'https://placehold.co/600'   ) + ')' }">
             <!-- <img :src="car.main_image" class="w-100" alt=""> -->
            </div>
            <span>{{ car.name }}</span>
          </div>
                <!-- <div class="mainlatestbox d-flex flex-column w-100 justify-content-between" style="cursor: pointer; min-height: 300px; position:relative;">
                
                <div class="image" style="height: 200px;" >
                   <div class="car-img lazyload" :style="{ backgroundImage: 'url(' + (car.main_image || 'https://placehold.co/600') + ')' }"></div>

                </div>

                <div class="text1 d-flex flex-column gap-2 w-100" style="position:absolute; bottom:0">
                  <h3 class="px-1" style="white-space:normal; font-size: 16px;">{{ car.name }}</h3>
                  <div class="d-flex align-items-center w-100 justify-content-between">
                   <div class="price">
                      <span>{{ $t('price') }}</span>
                      <h4 style="font-size: 14px;">{{ car.selling_price }} {{ $t('Sar') }}</h4>
                    </div>
                    <div class="after">
                      <span>{{ $t('after vat') }}</span>
                      <h4 style="font-size: 14px;">{{ car.selling_price_after_vat }} {{ $t('Sar') }}</h4>
                    </div>
                  </div>
                  
                </div>
                <p class="detail">
                  {{ $t('details') }}
                  <i class="fa-solid fa-chevron-right"></i>
                </p>
                <div @click="goToCarPage(car.id, car.model_id, car.name)" class="overlay"></div>

                <i @click="addToFav(car)" class="fa-regular fa-heart fav" :class="{ 'fa-solid': car.is_in_favorite }"></i>
                </div> -->
              </div>



            </div>
            <div v-if="spinner" class="d-flex align-items-center justify-content-center">
              <div class="spinner-border text-center" style="width: 5rem; height: 5rem;" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div class="d-flex align-items-center mb-5 flex-column justify-content-center h-100" v-if="checkData">
              <!-- <h3>{{ $t('There are no cars') }}</h3>
              <nuxt-link :to="localePath('/notFound')">
                <span style="color:#1B395F;">{{ $t('Click to request a car that is not available') }}</span>
              </nuxt-link> -->
              <Notfoundcar/>
            </div>


          </div>

        </div>
      </div>
    </div>

    <div v-if="pending" class="mainLoader">
      <video autoplay loop muted playsinline src="~/assets/images/main-loader.webm" alt="" />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
const route = useRoute();
const router = useRouter();
let mainId = route.query.id ? route.query.id : null;
let mainType = route.query.type ? route.query.type : null;
let mainModel = route.query.model ? route.query.model : null;
let mainName = route.query.name ? route.query.name : null;
let checkType = ref(mainType ? mainType : null);
let pending = ref(true);
let url = getUrl();
const { locale } = useI18n();
let currentLang = ref(locale);
let spinner = ref(true);


let filterData = ref([]);
let minValue = ref(null);
let maxValue = ref(null);
let minNum = ref('');
let maxNum = ref('');
const filterfunc = async () => {
  let filterCar = await axios.get(`${url}/cars-filter-data`, {
    headers: {
      'Content-Language': `${currentLang.value}`
    }
  });
  filterData.value = filterCar.data;
  minValue.value = filterData.value.minPrice;
  maxValue.value = filterData.value.maxPrice;
  minNum.value = filterData.value.minPrice;
  maxNum.value = filterData.value.maxPrice;
  watch([filterData.value.minPrice, filterData.value.maxPrice], ([val1, val2]) => {
    if (val1 > val2) {
      minNum.value = val2;
    }
    if (val2 < val1) {
      maxNum.value = val1;
    }
  });
}
filterfunc();


let brandCars = ref([]);
let models = ref(mainModel ? [mainModel] : []);
let subModels = ref([]);
console.log(filterData.data);
const checkMain = ref(mainId ? [mainId] : []);
let checkData = ref(false);
let checkCars = ref(true);
let isLoading = ref(false);










const goToCarPage = (id, model_id, name) => {
  const queryParams = {
    id: id,
    model_id: model_id,
    name: name,
  }
  let url = currentLang.value + '/car'

  router.push({ path: `/${url}`, query: queryParams })
}

let fav = ref([]);

let addedList = ref('added to wishlist');
let removedList = ref('removed from wishlist')
if (currentLang.value == 'ar') {
  addedList.value = 'تم الاضافة الي قائمة المفضلات'
  removedList.value = 'تم الحذف من قائمة المفضلات'
} else if (currentLang.value == 'en') {
  addedList.value = 'added to wishlist'
  removedList.value = 'removed from wishlist';
}
// const addToFav = (box) => {
//   if (process.client) {
//     let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
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
//         createToast({
//           title: addedList.value,
//         },
//           {
//             timeout: 3000,
//             toastBackgroundColor: '#1B395F',
//             showIcon:true,
//             type: 'success',
//             transition: 'bounce',
//           })
      
//         sessionStorage.setItem('thefav', JSON.stringify(favGet));
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
//             showIcon: true,
//             type: 'danger',
//             transition: 'bounce',
//           })
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


const reset = () => {
  checkMain.value = [];
  // minNum.value = minNum.value;
  // maxNum.value = maxNum.value;
  maxNum.value = maxValue.value;
  minNum.value = minValue.value;
  mainId = null;
  mainType = null;
  mainModel = null;
  mainName = null;
  models.value = [];
  checkMain.value = []
  subModels.value = [];
  checkType.value = '';
}
const showCars = async (arg) => {
  spinner.value = true;
  checkData.value = false;
  checkCars.value = false;
  isLoading.value = true;
  // console.log(minNum.value);
  if(checkMain.value.length < 1){
    models.value = [];
  }
  let result = await axios.get(`${url}/cars`, {
    params: {
      brands: arg ? checkMain.value = [] : checkMain.value,
      min_price: minNum.value,
      max_price: maxNum.value,
      models: arg ? models.value = [] : models.value,
      name: checkMain.value.length > 0 ? arg : arg || mainName,
      type: arg ? '' : checkType.value 
    },
    headers: {
      'Content-Language': `${currentLang.value}`
    }
  });
  // if (process.client) {
  //   let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
  //   //console.log(favGet);
  //   for (let i = 0; i < result.data.data.length; i++) {
  //     result.data.data[i].is_in_favorite = favGet.find((element) => element.id == result.data.data[i].id) != undefined;
  //   }
  // }
 
  if (result.status == 200) {
    brandCars.value = result.data.data;
    isLoading.value = false;
    pending.value = false;
    //  rangeSlider();
    spinner.value = false;
    checkCars.value = true;
    if (result.data.data.length < 1) {
      checkData.value = true
    } else {
      checkData.value = false
    }
  }
  // console.log(result.data.data); 
}

eventBus.callPageMethod = showCars;

onBeforeUnmount(() => {
  // Cleanup when the component is unmounted
  eventBus.callPageMethod = () => { };
});

onMounted(() => {
  
  showCars();
  useHead({
    title: currentLang.value == 'ar' ? `${mainName || 'السيارات'}/الكثيري للسيارات` : `alkathiri motors / ${mainName || 'cars'}`
  });
});

</script>

<style lang="scss"></style>