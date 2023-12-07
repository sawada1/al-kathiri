<template>
  <div>
    <div v-if="favState" class="container favCars " style="margin-top: 150px; min-height: 100vh;">
      <h3 class="head" :data-fav="$t('REACH YOUR CAR')">{{ $t('YOUR FAVORITE') }}</h3>

      <div class="row  justify-content-center justify-content-xl-start justify-content-lg-start  ">
        <div v-for="car in favState" 
          class="col-12 col-xl-3 col-lg-3 col-md-4 col-sm-6  my-4">
          <div class="new-car-card"  @click="goToCarPage(car.id, car.model_id, car.name)">
            <div class="image w-100" :style="{backgroundImage: 'url(' +( car.main_image  ?  car.main_image :'https://placehold.co/600'   ) + ')' }">
            </div>
            <span>{{ car.name }}</span>
          </div>



        </div>

      </div>


    </div>
    <div v-else class="d-flex my-4 align-items-center justify-content-center" style="min-height: 100vh;">
      <p class="text-primar fw-bold fs-2 my-5 px-3 text-center" style="color:#1b395f;">{{ $t('No products on your favorites list!') }}</p>
    </div>
  </div>
</template>

<script setup>
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
let favState = ref(process.client ? JSON.parse(sessionStorage.getItem('thefav')) : null);
const { locale } = useI18n();
const router = useRouter();
let currentLang = ref(locale);
let checkFav = ref(false);
const goToCarPage = (id, model_id, name) => {
  const queryParams = {
    id: id,
    model_id: model_id,

    name: name,
  }
  const url = currentLang.value + '/car'

  router.push({ path: `/${url}`, query: queryParams })
}

let removedList = ref('removed from wishlist')
if (currentLang.value == 'ar') {
  removedList.value = 'تم الحذف من قائمة المفضلات'
}
const removeFav = (box) => {
  if (process.client) {
    let final = favState.value.filter((ele) => {
      return ele.id != box.id;
    });
    createToast({
      title: removedList.value,
    },
      {
        timeout: 3000,
        toastBackgroundColor: '#1B395F',
        showIcon:true,
        type: 'danger',
        transition: 'bounce',
      });
    // fav.value = [];

    sessionStorage.setItem('thefav', JSON.stringify(final));
    favState.value = final;
    console.log(favState.value);
    if (final.length < 1) {
      // window.location.reload();
      favState.value = null;
      sessionStorage.removeItem("thefav");
      // fav.value = [];

    }
  }
}



useHead({
  title: currentLang.value == 'ar' ? 'المفضلة / الكثيري للسيارات' : 'alkathiri motors / favourite'
});
</script>

<style lang="scss"></style>