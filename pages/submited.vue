<template>
    <div>
        <div style="margin-top: 150px; min-height:75vh;" class="container bookPart d-flex flex-column gap-3 align-items-center justify-content-center">
         <img src="~/assets/images/point.svg" alt="">
         <h3>{{ $t('YOUR APPLICATION SUBMITTED SUCCESSFULLY') }}</h3>
         <p>{{ $t('We will contact you as soon as possible') }}</p>
          <div class="btns d-flex align-items-center gap-3">
          <nuxt-link :to="localePath('/')">
           <button>{{ $t('back to home') }}</button>
          </nuxt-link>
           <nuxt-link :to="localePath('/careers')">
            <button class="back">{{ $t('Explore more opportunities') }}</button>
           </nuxt-link>
          </div>
        </div>
    </div>
</template>

<script setup>

const localePath = useLocalePath();

</script>

<style lang="scss">


</style>