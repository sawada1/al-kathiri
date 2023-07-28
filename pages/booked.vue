<template>
    <div>
        <div class="container bookPart d-flex flex-column gap-3 align-items-center justify-content-center" style="margin-top: 150px;">
         <img src="@/assets/images/point.svg" alt="">
         <h3>{{ $t('YOU BOOKED YOUR APPOINTMENT SUCCESSFULLY') }}</h3>
         <p>visit id:   <span v-if="id">{{ id }}</span></p>
          <div class="d-flex  gap-5 ">
           <div class="col">
          <p>{{ $t('date') }}:   <span v-if="date">{{ date }}</span></p>            
          <p>{{ $t('time') }}:   <span v-if="time">{{ time }}</span></p>            
           </div>
           <span class="theline"></span>
           <div class="col">
          <p>{{ $t('city') }}:   <span v-if="city">{{ city }}</span></p>
          <p>{{ $t('branch') }}:   <span v-if="branch">{{branch}}</span></p> 
           </div>
          </div>
          <div class="btns d-flex align-items-center gap-3">
          <nuxt-link :to="localePath('/')">
                     <button >{{ $t('back to home') }}</button>
          </nuxt-link>
          <nuxt-link :to="localePath('/maintenance')">
            <button class="back">{{ $t('back to another appointment') }}</button>
          </nuxt-link>
          </div>
        </div>
    </div>
</template>

<script setup>

const localePath = useLocalePath();
const route = useRoute();
let id = route.query.id ? route.query.id : null;
let time = route.query.time ? route.query.time : null;
let date = route.query.date ? route.query.date : null;
let city = route.query.city ? route.query.city : null;
let branch = route.query.branch ? route.query.branch : null;


</script>

<style lang="scss">


</style>