<template>
    <div>
        <div class="container favCars ">
           <h3 class="head" :data-fav="$t('REACH YOUR CAR')">{{ $t('YOUR FAVORITE') }}</h3>
            
            <div  class="row  justify-content-center gap-2 p-2 ">
             <div v-for="car in favState" class="mainlatestbox col-xl-2 col-lg-2 col-md-4">
              <nuxt-link :to="`/car/${car.id}`">
            <div class="image">
              <img :src="car.main_image" loading="lazy" alt="" />
            </div>
          </nuxt-link>

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
          <i  class="fa-regular fa-heart fav" :class="{'fa-solid':car.is_in_favorite}"></i>
           
             </div>
           
               </div>

               <div class="d-flex my-4 align-items-center justify-content-center" v-if="favState == null" >
             <p class="text-danger fw-bold fs-2 my-5">{{ $t('This Cart Is Empty') }}</p>
            </div> 
        </div>
    </div>
</template>

<script setup>
 const favState = process.client ? JSON.parse(sessionStorage.getItem('thefav')) : null;
console.log(favState);
const removefav = (id) => {
  favState.slice(0, id);
  if (process.client) {
    sessionStorage.setItem('thefav', favState);
  }
}
</script>

<style lang="scss">


</style>