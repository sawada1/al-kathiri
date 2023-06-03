<template>
    <div>

         <div class="carName my-5">
   <h3 class="fw-bolder text-center py-3">{{ mainCar.name }}</h3>
    <div class="row gap-3  justify-content-between align-items-center">
        <div class="col-3">
            <div class="price d-flex align-items-center gap-5 w-100">
                <div class="thePrice text-center py-2 px-4">
                  <p>{{ $t('price') }}</p>
                  <span>{{ mainCar.selling_price }} sar</span>
                </div>
                <div class="after text-center ">
                    <p>{{ $t('after vat') }}</p>
                    <span class="fw-bold">{{ mainCar.selling_price_after_vat }} sar</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-3 col-lg-3">
            <div class="colors d-flex align-items-center  justify-content-between">
                <p class="available">{{ $t('Colors Available') }}</p>
                 <div class="theColors">
                    <span v-for="color,index in apiColors" :style="{'background-color':color.hex_code}"  @click="colorCar = index+1 , chooseColorId(color.id)" :class="{'active':colorCar==index+1}"></span>
                 </div>
                 <div v-for="color,index in apiColors">
                     <div v-if="colorCar==index+1" class="mainColor" :style="{'background-color':color.hex_code}">
                        <p class="" :class="{'white':color.name=='ابيض'||color.name=='white'}">{{ color.name }}</p>
                     </div>
                    
                 </div>
            </div>
        </div>
        <div class="col-12 col-xl-3 col-lg-3 px-4  d-flex justify-content-end">
           <button @click="goToPurchasePage(mainCar.id,colorCar)" class="purchaseBtn">{{ $t('purchase') }}</button>

        </div>
    </div>
    <div class="icons d-flex align-items-center gap-3">
        <img data-bs-toggle="modal" data-bs-target="#shareViaModal" src="@/assets/images/share.svg" alt="">
        <img @click="addToFav()" src="@/assets/images/heart.svg" alt="">
    </div>
 </div>




    <div class="modal fade" id="shareViaModal" tabindex="-1" role="dialog" aria-labelledby="shareViaModalLabel" aria-hidden="true">
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
                        <a target="_blank" class="smd" :href="`https://twitter.com/intent/tweet?url=${route}`" >
                            <i class=" img-thumbnail fab fa-twitter fa-2x"
                                style="color:#4c6ef5;background-color: aliceblue"></i>
                            <p>{{ $t('Twitter') }}</p>
                        </a>
                        <a class="smd" target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?${route}&quote=${name}`">
                            <i class="img-thumbnail fab fa-facebook fa-2x"
                                style="color: #3b5998;background-color: #eceff5;"></i>
                            <p>{{ $t('facebook') }}</p>
                        </a>
                        <a class="smd" target="_blank" :href="`https://wa.me/?text=${route}/`">
                            <i class="img-thumbnail fab fa-whatsapp fa-2x"
                                style="color:  #25D366;background-color: #cef5dc;"></i>
                            <p>Whatsapp</p>
                        </a>

                    </div>
                </div>
                <div class="modal-footer  w-100">
                    <div class="inp w-100">
                        <input disabled :value="route" class="col-11 ur" type="url" :placeholder="route"
                            id="myInput" aria-describedby="inputGroup-sizing-default" style="">
                        <button class="" @click="copyToClipboard()"><i class="far fa-clone"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

       <swiper
     
   :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
    :loop="true"
       :breakpoints="{
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
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper thecarSwiper"
  >
  
    <swiper-slide >
        <img :src="mainCar.cover_image" class="img-fluid mainpic" alt="">
    </swiper-slide>
    <swiper-slide >
     <div v-for="color,index in  imagesWithColors"  class="row gap-2 justify-content-around   images">
     <div v-for="item in color.images" class="col-5 col-xl-3 col-lg-3 mx-2">
        <div v-if="colorCar==index+1">
          <img  class="img-fluid" :src="item" alt="">
        </div>
     </div>
            
        
        </div>
    </swiper-slide>

  </swiper>

   <div class="settings my-5">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-12 col-xl-7 col-lg-7 col-md-6 theSetting">
                <div class="row gap-2 text-center p-3">
                    <div class="col-5 col-xl-2 col-lg-2 col-md-3  d-flex flex-column align-items-center  p-2" style="white-space: nowrap;">
                        <img src="@/assets/images/icon1.svg" alt="">
                        <span>{{ $t('Model Year') }}</span>
                         <p class="fw-bold">{{ mainCar.year }}</p>
                    </div>
                    <div class="col-5 col-xl-2 col-lg-2 col-md-3  d-flex flex-column align-items-center  p-2" style="white-space: nowrap;">
                        <img src="@/assets/images/icon5.svg" alt="">
                        <span>{{ $t('Engine') }}</span>
                         <p class="fw-bold">{{ mainCar.fuel_consumption }} liter</p>
                    </div>
                    <div class="col-5 col-xl-2 col-lg-2 col-md-3  d-flex flex-column align-items-center  p-2" >
                        <img src="@/assets/images/noun-speed-3341122.svg" alt="">
                        <span>{{ $t('Kilometers') }}</span>
                         <p class="fw-bold">{{ mainCar.maximum_force }}</p>
                    </div>
                    <div class="col-5 col-xl-2 col-lg-2 col-md-3  d-flex flex-column align-items-center  p-2" >
                        <img src="@/assets/images/noun-transmission-1325127.svg" alt="">
                        <span>{{ $t('Transmission') }}</span>
                         <p class="fw-bold">{{ mainCar.motion_vector }}</p>
                    </div>
                    <div class="col-5 col-xl-2 col-lg-2 col-md-3  d-flex flex-column align-items-center  p-2" >
                        <img src="@/assets/images/icon3.svg" alt="">
                        <span>{{ $t('Number Of Doors') }}</span>
                         <p class="fw-bold">{{ mainCar.seats_number }}</p>
                    </div>
                    <div class="col-5 col-xl-2 col-lg-2 col-md-3  d-flex flex-column align-items-center  p-2" >
                        <img src="@/assets/images/icon6.svg" alt="">
                        <span>{{ $t('Seats') }}</span>
                         <p class="fw-bold">{{ mainCar.upholstered_seats }}</p>
                    </div>
                    <div class="col-5 col-xl-2 col-lg-2 col-md-3  d-flex flex-column align-items-center  p-2" >
                        <img src="@/assets/images/icon7.svg" alt="">
                        <span>{{ $t('Transmission') }}</span>
                         <p class="fw-bold">{{ mainCar.traction_type }}</p>
                    </div>
                    <div class="col-5 col-xl-2 col-lg-2 col-md-3  d-flex flex-column align-items-center  p-2" >
                        <img src="@/assets/images/icon8.svg" alt="">
                        <span>{{ $t('Fuel Type ') }}</span>
                         <p class="fw-bold">{{ mainCar.engine_type }}</p>
                    </div>
                </div>
            </div>
            <div id="nameOfcar" class="col-12 nameOfcar  col-xl-5 col-lg-5 col-md-6 d-flex flex-column gap-3" :class="{'active':checkNameCarScroll}">
                <div class="carName">
                    <div class="block">
                                <h3 class="fw-bolder">{{ mainCar.name }}</h3>
               <div class="colors d-flex align-items-center  justify-content-between">
                <p class="available">colors available</p>
                 <div class="theColors">
                    <span v-for="color,index in apiColors" :style="{'background-color':color.hex_code}"  @click="colorCar = index+1" :class="{'active':colorCar==index+1}"></span>
                 </div>
                   <div v-for="color,index in apiColors">
                     <div v-if="colorCar==index+1" class="mainColor" :style="{'background-color':color.hex_code}">
                        <p class="" :class="{'white':color.name=='ابيض'||color.name=='white'}">{{ color.name }}</p>
                     </div>
                    
                 </div>
            </div>
                    </div>
                      <div class="price d-flex align-items-center gap-5 w-100">
                <div class="thePrice text-center py-2 px-4">
                  <p>price</p>
                  <span>{{ mainCar.selling_price }} sar</span>
                </div>
                <div class="after text-center ">
                    <p>after vat</p>
                    <span class="fw-bold">{{ mainCar.selling_price_after_vat }} sar</span>
                </div>
            </div>
                </div>
                 
               <button @click="goToPurchasePage(mainCar.id,colorCar)" class="purchaseBtn">{{ $t('purchase') }}</button>
              
            </div>
        </div>
    </div>
   </div>

   <div class="Alldescription container">
     <div class="containe">
        <div class="header">
            <a class="fw-bold" @click="carDetails = 1" :class="{'active':carDetails==1}">{{ $t('Car Description') }}</a>
            <a class="fw-bold" href="#specification" @click="carDetails = 2" :class="{'active':carDetails==2}">{{ $t('Specifications') }}</a>
            <a class="fw-bold" href="#features" @click="carDetails = 3" :class="{'active':carDetails==3}">{{ $t('Features') }}</a>
        </div>
        <div class="content-header" :class="{'active':carDetails == 1}">
            <h4 class="fw-bolder">{{ $t('Car Description') }}</h4>
            <p>{{ mainCar.description }}</p>
        </div>
       
     <div id="specification" class="tabs-container specification">
        <h3 class="fw-bolder">{{ $t('Specifications') }}</h3>

<div class="theTabs">
<div class="tabs">
        <div v-for="tab,index in specifications_and_features[0]"  class="tab " @click="checkTabsWithSpecifications = index + 1 " :class="{'active':checkTabsWithSpecifications == index+1}">
           <img src="~/assets/images/sp3.svg" class="img-fluid" alt="">
          <span>{{ tab.name }}</span>   
        </div>
      
       
      </div>

      <div class="content-container">
        <div v-for="content,index in valuesOfSpecifications" class="content "  :class="{'active':checkTabsWithSpecifications == index+1}">
           <div class="item" v-for="item,index in valuesOfSpecifications[index]">
            <p>{{ item.name }}</p>
            <span>{{ item.value }}</span>
            </div>
        </div>

      </div>
</div> 
      
    </div>
     <div id="features" class="tabs-container features">
        <h3 class="fw-bolder">{{ $t('Features') }}</h3>

<div class="theTabs">
<div class="tabs">
        <div v-for="tab,index in specifications_and_features[1]"  class="tab " @click="checkTabsWithfeatures = index + 1 " :class="{'active':checkTabsWithfeatures == index+1}">
           <img src="@/assets/images/sp3.svg" class="img-fluid" alt="">
          <span>{{ tab.name }}</span>   
        </div>
      
       
      </div>

      <div class="content-container">
        <div v-for="content,index in  specifications_and_features[1]" class="content "  :class="{'active':checkTabsWithfeatures == index+1}">
           <div class="item features" v-for="item,index in  valuesWithFeatures[index]">
            <span>{{ item }}</span>
            </div>
        </div>

      </div>
</div> 
      
    </div>
    

     </div>
   </div>
   
 
     <div v-if="similar_vehicles.length >= 1" class="similarr">
        <div class="container">
               <h3 class="px-5 fw-bolder thehead">{{$t('similar cars')}}</h3>
           <div class="row justify-content-center gap-3 ">
                 <div v-for="car in similar_vehicles" class=" col-xl-2 col-lg-2 col-md-3   mainlatestbox">
                 <div class="image">
                    <img :src="car.main_image" alt="">
                </div>
                <h3>{{ car.name }}</h3>
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
        

           <div v-if="pending"  class="mainLoader">
     <span class="loader"></span>
    </div>
    </div>
</template>

<script >
// Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { ref } from 'vue';
import axios from 'axios';
export default {

  async setup() {
  let theColorId = ref(1);
    let checkNameCarScroll = ref(false);
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const router = useRouter();
    const MainRoute = useRoute();
    console.log(MainRoute);
    let id = MainRoute.query.id;
    let name = MainRoute.query.name;
    let route = ref(null);
    let currentLang = ref(locale);

let lang = process.client ? sessionStorage.getItem('lang') : 'en';
    if (process.client) {
      route.value = `${window.location.origin}${MainRoute.fullPath}`;
  if (lang == null) {
    lang = 'en';
  }
    }
console.log(route.value);
const scrollNameCar = () => {
    if (process.client) {
      let nameOfcar = document.querySelector(".nameOfcar");
        window.addEventListener("scroll", () => {
            if (window.scrollY >= nameOfcar.offsetTop) {
                checkNameCarScroll.value = true; 
            } else {
             checkNameCarScroll.value = false;
            }
        })
    }
}
        
   
        let checkTabsWithSpecifications = ref(1);
        let checkTabsWithfeatures = ref(1);
        let carDetails = ref(1);
        let colorCar = ref(2);
        let url = getUrl();
    let pending = ref(false);
    let mainCar = ref([]);
    let similar_vehicles = ref([]);
        let specifications_and_features = ref([]);
      let apiColors = ref([]); 
    let imagesWithColors = ref([]);
          let valuesOfSpecifications = ref([]);
    let valuesWithFeatures = ref([]);
           const  car  = await axios.get(`${url}/cars/${id}`,{
      headers: {
    'Content-Language':`${currentLang.value}`
  }
           }); 
            mainCar.value = car.data.data;
    similar_vehicles.value = car.data.data.similar_vehicles;
    console.log(mainCar.value);
       specifications_and_features.value = mainCar.value.specifications_and_features;
       apiColors.value = mainCar.value.colors; 
      imagesWithColors.value = mainCar.value.colors;
    const carFunc = async () => {
      pending.value = true;
      if (car.status == 200) {
     pending.value = false
   }
    for (let i = 0; i < specifications_and_features.value[0].length; i++) {
    valuesOfSpecifications.value.push(specifications_and_features.value[0][i].values)
    }
    for (let i = 0; i < specifications_and_features.value[1].length; i++) {
      valuesWithFeatures.value.push(specifications_and_features.value[1][i].features)
    }   
    }
    carFunc();
      
   
      
    

    
    
        
    const chooseColorId = (id) => {
      theColorId.value = id;
       if (process.client) {
               sessionStorage.setItem('colorId', JSON.stringify(theColorId.value))
            }
    }
       

          let fav = ref([]);
    let favState = ref([]);

   let sweetGoodJob = '';
    let sweetAdded = '';
    let sweetsuccess = '';
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
    const addToFav = () => {
      let box = {
        id: mainCar.value.id,
        name: mainCar.value.name,
        main_image: mainCar.value.cover_image,
        selling_price:mainCar.value.selling_price,
        selling_price_after_vat: mainCar.value.selling_price_after_vat,
        is_in_favorite: false,
      }
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

     const goToPurchasePage = (id,color) => {
      const queryParams = {
        id: id,
        colorId:color
      }
         const url = currentLang.value + '/purchase'
         //router.replace(route.query.redirect || '/')
      router.push({ path:`/${url}` , query: queryParams })
    }

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
        
    
 return {
     modules: [Autoplay, Pagination, Navigation],
     checkNameCarScroll,
     checkTabsWithSpecifications,
     checkTabsWithfeatures,
     carDetails,
     colorCar,
     mainCar,
     specifications_and_features,
     valuesOfSpecifications,
     valuesWithFeatures,
   apiColors,
   imagesWithColors,
   theColorId,
   addToFav,
   chooseColorId,
   localePath,
   goToPurchasePage,
   pending,
   similar_vehicles,
   route,
   name,
  copyToClipboard
      };
        
    }
  }

</script>

<style lang="scss">



</style>