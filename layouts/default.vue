<template>
    <div>
       <nav class="navbar  navbar-expand-lg " style="padding:20px 30px;" :class="{'active':route.name != `${currentLang == 'ar' ? 'index___ar___default' : 'index___en'}` || checkNav}" >
  <div class="container">
  <nuxt-link :to="localePath('/')">
      <img src="~/assets/images/logo.svg" alt="الكثيري للسيارات" class="navbar-brand">
  </nuxt-link>
    <button style="box-shadow: none;"  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"  >
                <nuxt-link  :to="localePath('/')" class="nav-link"  aria-current="page">{{ $t("home") }}</nuxt-link>
            </li>
            <li class="nav-item"  >
                <nuxt-link :to="localePath('/brands')" class="nav-link" >{{ $t("cars") }}</nuxt-link>
            </li>
            <li class="nav-item"   >
            <nuxt-link :to="localePath('/offers')"  class="nav-link" > {{ $t("offers") }}</nuxt-link>
            </li>
            <li class="nav-item"  >
             <nuxt-link :to="localePath('/faQ')"  class="nav-link" > {{ $t("faq") }} </nuxt-link>
            </li>
            <li class="nav-item"  >
            <nuxt-link :to="localePath('/about')"  class="nav-link" > {{ $t("about us")  }}</nuxt-link>
            </li>
            <li class="nav-item"  >
            <nuxt-link :to="localePath('/contact')"  class="nav-link" > {{ $t("contact us") }}</nuxt-link>
            </li>
            <li class="nav-item" >
            <nuxt-link :to="localePath('/careers')" class="nav-link" >
              {{ $t("careers") }} 
              </nuxt-link>
            </li>
         </ul>
    <div class="mainBook d-flex align-items-center text-center gap-5">
         <div class="icons d-flex align-items-center gap-3">
            <img v-if="langPic == 'en'" @click="changeLang()" src="~/assets/images/ar.svg" alt="">
            <img v-if="langPic == 'ar'" @click="changeLang()" src="~/assets/images/en.svg" alt="">
            <nuxt-link :to="localePath('/fav')" @click="checkfav = true, counter =  router.options.history.location">
            <i class="fa-heart" :class="{'fa-regular':!checkfav,'fa-solid':checkfav}"></i>
            </nuxt-link>
             <i class="fa-solid fa-magnifying-glass" @click="activeSearch = !activeSearch"></i>
           
         </div>
          <div class="book">
           <nuxt-link :to="localePath('/maintenance')">
            <button class="">{{$t('book appointment')}}</button>
           </nuxt-link>
           <span class="fw-bold">{{$t('For Maintenance')}}</span>
          </div>
       </div>
    </div>
  </div>
   <div class="searchBarByName" :class="{'active':activeSearch}">
    <input @keyup.enter="goToBrandPageByName(),activeSearch = false" type="text" v-model="searchWord" :placeholder="$t('Find your car...')">
    <i @click="goToBrandPageByName(),activeSearch = false" class="fa-solid fa-magnifying-glass"></i>
   </div>
</nav>
  
 
  <a class="fixedIcon" target="_blank" :href="`https://wa.me/${generalData.whatsapp}`">
            <img src="~/assets/images/whatsapp-logo.png" alt="">
        </a>
  <slot/>


<TermsModal/>
<privacyModal/>
  <div class="footer" id="mainFooter">
       <div class="img-left">
        <img src="~/assets/images/sub.png" alt="">
       </div>
       <div class="img-right">
        <img src="~/assets/images/sub.png" alt="">
   </div>
    <div class="mainboxes position-relative row gap-5 justify-content-center align-items-center">
  <div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12">
        <img src="~/assets/images/footer2.png" alt="الكثيري للسيارات">
    </div>
    <div class="box col-xl-2  col-lg-4  col-md-6 col-sm-12">
        <h4>{{ $t('Important Links') }}</h4>
        <div class="links">
        <nuxt-link :to="localePath('/')">
            <span>{{$t('home')}}</span>
        </nuxt-link>
        <nuxt-link :to="localePath('/brands')">
            <span>{{$t('cars')}}</span>
        </nuxt-link>
           
        <nuxt-link :to="localePath('/offers')">
            <span>{{$t('offers')}}</span>
        </nuxt-link>
          <nuxt-link :to="localePath('/brands')">
         <span>{{$t('purchase')}}</span>
        </nuxt-link>
        <nuxt-link :to="localePath('/faQ')">
            <span>{{$t('faq')}}</span>
        </nuxt-link>
        </div>
    </div>
    <div class="box col-xl-2  col-lg-4  col-md-6 col-sm-12">
        <div class="links">
           <nuxt-link :to="localePath('/contact')">
             <span>{{$t('contact us')}}</span>
           </nuxt-link>
          
             <nuxt-link :to="localePath('/news')">
                <span>{{$t('news')}}</span>
             </nuxt-link>
              <nuxt-link :to="localePath('/careers')">
        <span>{{$t('careers')}}</span>
              </nuxt-link>
            <span type="button" data-bs-toggle="modal" data-bs-target="#termsModal">{{$t('Term And Conditions')}}</span>
            <span type="button" data-bs-toggle="modal" data-bs-target="#privacyModal">{{$t('Privacy Policy')}}</span>
        </div>
    </div>
    <div class="box theicons col-xl-3  col-lg-4  col-md-6 col-sm-12">
        <div class="icons">
        <a target="_blank" :href="generalData.facebook_url">
        <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a target="_blank" :href="`https://wa.me/${generalData.whatsapp}`">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a target="_blank" :href="generalData.instagram_url">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a target="_blank" :href="generalData.twitter_url">
            <i class="fa-brands fa-twitter"></i>
        </a>
        </div>
                <div v-if="pending" class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="book">
        <nuxt-link :to="localePath('/maintenance')">
            <span class="fw-bold">{{$t('book appointment')}}</span>
        </nuxt-link>
            <p class="mt-2 fw-bold">{{$t('For Maintenance')}}</p>
        </div>
    </div>
    </div>
    <div class="text">
        <span>&copy; {{$t('AL KATHIRI MOTORS')}}, {{$t('All Rights Reserved')}}</span>
        <p>
            <span>{{$t('Developed By')}}</span>
            <a target="_blank" href="https://www.webstdy.com">
             <img src="~/assets/images/logo-footer.svg" alt="webstdy">
            </a>
           
        </p>
    </div>
   <i @click="scrollUp()" class="fa-solid fa-arrow-up" id="arrow-up"></i>
   
</div>
    </div>
</template>

<script setup>
import axios from 'axios';
let activeSearch = ref(false);
let searchWord = ref('');
const { locales, locale, setLocale } = useI18n();
const localePath = useLocalePath();
let checkLang = ref(process.client ? JSON.parse(sessionStorage.getItem("theLang")) : true);
if (process.client) {
    if (JSON.parse(sessionStorage.getItem("theLang")) != false) {
        checkLang.value = true;
          sessionStorage.setItem('theLang', checkLang.value);
    }
}
console.log(`chekk ${checkLang.value}`);
let langPic = ref('en');
const currentLang = ref(locale);
console.log(currentLang.value);
let url = getUrl();
let generalData = ref([]);
let pending = ref(false);
const generalFunc = async () => {
    pending.value = true;
let  general  = await axios(`${url}/general`, {
    headers: {
    'Content-Language':`${currentLang.value}`
    }
});
    if (general.status == 200) {
        pending.value = false;
}
 generalData.value = general.data;    
}
generalFunc();

const router = useRouter();
const route = useRoute();
 let checkNav = ref(false);
let navActive = ref(1);
let checkfav = ref(false);
console.log(route.name);
const scrollNav = () => {
    if (process.client) {
        if (router.options.history.location == '/') {
        }
        window.addEventListener("scroll", () => {
              if (window.scrollY >= 105) {
             checkNav.value = true;
           }
           else if (window.scrollY == 0) {
               checkNav.value = false
           } 
          
           
           
                       });
  
    
        
    }
   
}
    
scrollNav();
     

const scrollUp = () => {
    if (process.client) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

    
  





const changeLang = async () => {
    if (process.client) {
        checkLang.value = !checkLang.value;
        sessionStorage.setItem('theLang', checkLang.value);
        let getLang = JSON.parse(sessionStorage.getItem('theLang'));
         if (checkLang.value) {
        setLocale('ar');
        langPic.value = 'ar';
        currentLang.value = 'ar';
  
    } else if (!checkLang.value) {
        setLocale('en');
        langPic.value = 'en';
        currentLang.value = 'en'
          
    }      
    }
  
    updateLang();
   
    await navigateTo(localePath(useRoute().path));    
}

const updateLang = () => {
    if (process.client) {
      
        if (currentLang.value == 'en') {
         langPic.value = currentLang.value;
         document.body.classList.remove('rtl');
         document.body.classList.toggle('ltr');
            useHead({
        htmlAttrs:{
            lang: 'en',
            dir: 'ltr',
          }
       }); 
        } else if (currentLang.value == 'ar') {
            langPic.value = currentLang.value;
            document.body.classList.remove('ltr');
         document.body.classList.toggle('rtl');
      useHead({
        htmlAttrs:{
            lang: 'ar',
            dir: 'rtl',
          }
        });
        }
      
    }
}
   const goToBrandPageByName = () => {
      const queryParams = {
        name:searchWord.value
      }
       const url = currentLang.value + '/brandcar'
       if (searchWord.value) {
           router.push({ path: `/${url}`, query: queryParams });
           searchWord.value = '';
         }
    
    }
onMounted(() => {
    updateLang();

})



</script>

<style lang="scss">



</style>