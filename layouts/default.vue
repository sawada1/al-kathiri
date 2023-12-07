<template>
  <div>
    <!-- :class="{'shadow':route.name != `${currentLang == 'ar' ? 'brands___ar___default' : 'brands___en'}` || checkNav}"  -->
    <nav class="navbar navbar-expand-lg active" style="padding: 20px 30px">
      <div class="container">
        <nuxt-link :to="localePath('/')">
          <img src="~/assets/images/logo.svg" alt="الكثيري للسيارات" class="navbar-brand" />
        </nuxt-link>
        <button style="box-shadow: none" class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="navbar-tabs" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link :to="localePath('/')" class="nav-link" aria-current="page">{{ $t("home") }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/brands')" class="nav-link">{{
                $t("cars")
              }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/offers')" class="nav-link">
                {{ $t("offers") }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/contact')" class="nav-link">
                {{ $t("contact us") }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/about')" class="nav-link">
                {{ $t("about us") }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/careers')" class="nav-link">
                {{ $t("careers") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/services')" class="nav-link">
                {{ $t("accessories") }}</nuxt-link>
            </li>
            <li class="nav-item" id="nav-item" style="">
              <span class="">{{ $t("new") }}</span>
              <nuxt-link :to="localePath('/unavailable-car')" class="nav-link">
                {{ $t("unavailable car") }}
              </nuxt-link>
            </li>
            <!-- <li class="nav-item"  >
             <nuxt-link :to="localePath('/faQ')"  class="nav-link" > {{ $t("faq") }} </nuxt-link>
            </li> -->
          </ul>
          <div class="mainBook d-flex align-items-center text-center gap-5">
            <div class="icons d-flex align-items-center gap-3">
              <img v-if="locale == 'en'" @click="changeLang()" src="~/assets/images/ar.svg" alt="" class="nav-link" />
              <img v-if="locale == 'ar'" @click="changeLang()" src="~/assets/images/en.svg" alt="" class="nav-link" />
              <nuxt-link :to="localePath('/fav')" class="nav-link" @click="
                (checkfav = true), (counter = router.options.history.location)
                ">
                <i class="fa-heart" :class="{ 'fa-regular': !checkfav, 'fa-solid': checkfav }"></i>
              </nuxt-link>
              <i class="fa-solid fa-magnifying-glass search-icon" :class="{ active: activeSearch }"
                @click="activeSearch = !activeSearch"></i>
              <i class="fa-solid fa-xmark close-search" :class="{ active: activeSearch }"
                @click="activeSearch = !activeSearch"></i>
            </div>
            <div class="book nav-link" style="">
              <nuxt-link :to="localePath('/maintenance')">
                <button id="btn-navbar" class="btn-navbar">
                {{ $t('book For Maintenance') }}
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="searchBarByName" :class="{ active: activeSearch }">
        <input @keyup.enter="goToBrandPageByName(), (activeSearch = false)" type="text" v-model="searchWord"
          :placeholder="$t('Find your car...')" />
        <i @click="goToBrandPageByName(), (activeSearch = false)" class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>

    <a class="fixedIcon" target="_blank" :href="`https://wa.me/${generalData.whatsapp}`">
      <img src="~/assets/images/Icon-awesome-whatsapp.svg" alt="" />
    </a>
    <slot />

    <TermsModal />
    <privacyModal />
    <div class="footer" id="mainFooter" style="min-height: 50vh">
      <div class="img-left">
        <img src="~/assets/images/sub.png" alt="" />
      </div>
      <div class="img-right">
        <img src="~/assets/images/sub.png" alt="" />
      </div>
      <div class="mainboxes position-relative row gap-5 justify-content-center align-items-center">
        <div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12">
          <img src="~/assets/images/footer2.png" alt="الكثيري للسيارات" />
        </div>
        <div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12">
          <h4>{{ $t("Important Links") }}</h4>
          <div class="links">
            <nuxt-link :to="localePath('/')">
              <span>{{ $t("home") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/brands')">
              <span>{{ $t("cars") }}</span>
            </nuxt-link>

            <nuxt-link :to="localePath('/offers')">
              <span>{{ $t("offers") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/brands')">
              <span>{{ $t("purchase") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/faQ')">
              <span>{{ $t("faq") }}</span>
            </nuxt-link>
          </div>
        </div>
        <div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12">
          <div class="links">
            <nuxt-link :to="localePath('/services')">
              <span>{{ $t("accessories") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/accounts')">
              <span>{{ $t("accounts") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/contact')">
              <span>{{ $t("contact us") }}</span>
            </nuxt-link>

            <nuxt-link :to="localePath('/news')">
              <span>{{ $t("news") }}</span>
            </nuxt-link>
            <nuxt-link :to="localePath('/careers')">
              <span>{{ $t("careers") }}</span>
            </nuxt-link>
            <span type="button" data-bs-toggle="modal" data-bs-target="#termsModal">{{ $t("Term And Conditions") }}</span>
            <span type="button" data-bs-toggle="modal" data-bs-target="#privacyModal">{{ $t("Privacy Policy") }}</span>
          </div>
        </div>
        <div class="box theicons col-xl-3 col-lg-4 col-md-6 col-sm-12">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="27" width="27" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </a>
          </div>
          <div v-if="pending" class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="book mb-4">
            <nuxt-link :to="localePath('/maintenance')" style="white-space: normal;">
              <span class="fw-bold" style="white-space: normal;">{{ $t("book For Maintenance") }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="text">
        <span>&copy; {{ $t("AL KATHIRI MOTORS") }},
          {{ $t("All Rights Reserved") }}</span>
        <p>
          <span>{{ $t("Developed By") }}</span>
          <a target="_blank" href="https://webstdy.com/ar?utm_source=alkathiri-foorter&utm_medium=referral">
            <img src="~/assets/images/logo-footer.svg" alt="webstdy" />
          </a>
        </p>
      </div>
      <i @click="scrollUp()" class="fa-solid fa-arrow-up" id="arrow-up"></i>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
let activeSearch = ref(false);

let searchWord = ref("");

const { locales, locale, setLocale } = useI18n();
const localePath = useLocalePath();

let langPic = ref("en");
const currentLang = ref(locale);
let url = getUrl();
let generalData = ref([]);
let pending = ref(false);

const generalFunc = async () => {
  pending.value = true;
  let general = await axios(`${url}/general`, {
    headers: {
      "Content-Language": `${currentLang.value}`,
    },
  });
  if (general.status == 200) {
    pending.value = false;
  }
  generalData.value = general.data;
};
generalFunc();

const router = useRouter();

const route = useRoute();
let checkNav = ref(false);
let checkfav = ref(false);
const scrollNav = () => {
  if (process.client) {
    if (router.options.history.location == "/") {
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 105) {
        checkNav.value = true;
      } else if (window.scrollY == 0) {
        checkNav.value = false;
      }
    });
  }
};

scrollNav();

const scrollUp = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const changeLang = async () => {
  // if (process.client) {
  //     checkLang.value = !checkLang.value;
  //     sessionStorage.setItem('theLang', checkLang.value);
  //      if (checkLang.value) {
  //     setLocale('ar');
  //     langPic.value = 'ar';
  //     currentLang.value = 'ar';

  // } else if (!checkLang.value) {
  //     setLocale('en');
  //     langPic.value = 'en';
  //     currentLang.value = 'en'

  // }
  // }

  // updateLang();

  locale.value = locale.value === "en" ? "ar" : "en";
  if (locale.value == "ar") {
    setLocale("ar");
    useHead({
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
      }
    });
  } else if (locale.value == "en") {
    useHead({
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      }
    });
    setLocale("en");
  }

  //     if (currentLang.value == 'en') {
  //      langPic.value = currentLang.value;
  //      document.body.classList.remove('rtl');
  //      document.body.classList.toggle('ltr');
  //         useHead({
  //     htmlAttrs:{
  //         lang: 'en',
  //         dir: 'ltr',
  //       }
  //    });
  //     } else if (currentLang.value == 'ar') {
  //         langPic.value = currentLang.value;
  //         document.body.classList.remove('ltr');
  //      document.body.classList.toggle('rtl');
  //   useHead({
  //     htmlAttrs:{
  //         lang: 'ar',
  //         dir: 'rtl',
  //       }
  //     });
  //     }

  const query = useRoute().query;
  await navigateTo(
    localePath({ path: useRoute().path, query: query }, undefined, {
      preserveQuery: true,
    })
  );
};

// const reloadPage = () => {
//     if (process.client) {
//         router.push(localePath('/'));

//         setTimeout(() => {
//             window.location.reload();
//         }, 500);
//     }
// }

const updateLang = () => {
  console.log(`the lang: ${locale.value}`);
  if (locale.value == "ar") {
    setLocale("ar");
    useHead({
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
      }
    });
  } else if (locale.value == "en") {
    useHead({
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      }
    });
    setLocale("en");
  }
  if (process.client) {
    //     if (currentLang.value == 'en') {
    //      langPic.value = currentLang.value;
    //      document.body.classList.remove('rtl');
    //      document.body.classList.toggle('ltr');
    //         useHead({
    //     htmlAttrs:{
    //         lang: 'en',
    //         dir: 'ltr',
    //       }
    //    });
    //     } else if (currentLang.value == 'ar') {
    //         langPic.value = currentLang.value;
    //         document.body.classList.remove('ltr');
    //      document.body.classList.toggle('rtl');
    //   useHead({
    //     htmlAttrs:{
    //         lang: 'ar',
    //         dir: 'rtl',
    //       }
    //     });
    //     }

    //close navbar when click in nav-item in mobile view

    const navItems = document.querySelectorAll(".nav-link");

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        navbarCollapse.classList.remove("show");
        document.querySelector(".navbar-toggler").classList.add("collapsed");
      });
    });
  }
};

const bus = eventBus;
const callPageMethod = (arg) => {
  eventBus.callPageMethod(arg);
};
const goToBrandPageByName = () => {
  if (searchWord.value) {
    const queryParams = {
      name: searchWord.value,
    };
    const url = currentLang.value + "/cars";
    router.push({ path: `/${url}`, query: queryParams });
    callPageMethod(searchWord.value);
    searchWord.value = "";
  }
};



const cleanUpUnwantedScripts = () => {
  const unwantedScripts = document.querySelectorAll('script[data-clean="true"]');
  unwantedScripts.forEach(script => {
    script.parentNode.removeChild(script);
  });

}

onMounted(() => {
  updateLang();
  // router.afterEach((to, from, next) => {
  //   // Clean up unwanted scripts in the body
  //   if (to.name != `${locale.value == 'ar' ? 'index___ar___default' : 'index___en'}`) {
  //     console.log('not home');
  //     const unwantedScripts = document.querySelectorAll('script[data-clean="true"]');
  //     unwantedScripts.forEach(script => {
  //       script.parentNode.removeChild(script);
  //     });
  //   } else {
  //     console.log('home');
  //   }

  //   // Continue with the navigation
  //   next();
  // });
});
</script>

<style lang="scss" scoped>
// .navbar-toggler:focus,

.navbar-toggler .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  margin-top: 5px;
  background-color: #000;
  margin-bottom: 4px;
}

.navbar-toggler.collapsed .icon-bar {
  background-color: #555;
}

.navbar-toggler.collapsed span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}

.navbar-toggler.collapsed span.icon-bar:nth-child(3) {
  opacity: 1;
}

.navbar-toggler.collapsed span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}

.navbar-toggler span.icon-bar {
  -webkit-transition: all 300ms;
  transition: all 300ms;
}

.navbar-toggler span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(301%) rotate(40deg);
  transform: translateY(350%) rotate(40deg);
}

.navbar-toggler span.icon-bar:nth-child(3) {
  opacity: 0;
}

.navbar-toggler span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(-301%) rotate(-45deg);
  transform: translateY(-330%) rotate(-45deg);
}
</style>
