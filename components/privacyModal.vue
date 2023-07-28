<template>
    <div>
                <div class="modal fade " id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ $t('Privacy Policy') }}</h1>
      </div>
      <div class="modal-body">
      <p>
        {{ generalData.privacy_policy }}
      </p>
      <div v-if="pending" class="spinner-border" role="status">
       </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('close') }}</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script setup>
import axios from 'axios';
let url = getUrl();
const { locale} = useI18n();
 let currentLang = ref(locale);
let pending = ref(true);
let generalData = ref([]);
const generalFunc = async () => {
  let  general  = await axios.get(`${url}/general`,{
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

</script>

<style lang="scss">


</style>