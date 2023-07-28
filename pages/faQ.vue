<template>
  <div>
    <div style="width: 90%; margin: 20px auto; margin-top: 150px;">
      <div class="row theFaq gap-4">
        <div class="col-12 col-xl-3 col-lg-3 col-md-4">
          <h3 :data-faq="$t('FIND YOUR ANSWER')">
            {{ $t('FREQUENTLY ASK QUESTION') }}
          </h3>
        </div>
        <div class="col-12 col-xl-8 col-lg-8 col-md-7 d-flex flex-column gap-4" style="min-height: 65vh;">
          <div class="accordion d-flex flex-column gap-3" id="accordionExample">
            <div v-for="item,index in theFaqs" class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${item.id}`"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>{{ item.question }}</span>
                </button>
              </h2>
              <div
                :id="`collapse${item.id}`"
                class="accordion-collapse collapse" :class="{'show':index==0}"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ClientOnly>
                    <p v-html="item.answer"></p>
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div v-if="pending"  class="mainLoader">
     <span class="loader"></span>
    </div>
  </div>
</template>

<script setup>

import axios from 'axios';
    const {locale } = useI18n();
let lang = ref(locale);
let theAnswer1 = ref(false);
let url = getUrl();
let theFaqs = ref([]);
let pending = ref(true);
const faQFunc = async () => {
  let  faqs  = await axios.get(`${url}/faqs`,{
      headers: {
    'Content-Language':`${lang.value}`
    }

     
  });
  if (faqs.status == 200) {
    pending.value = false;
}
theFaqs.value = faqs.data.data;
}
faQFunc();

useHead({
  title: lang.value == 'ar' ? 'الأسئلة الشائعة/الكثيري للسيارات' : 'alkathiri motors / faQ'
});
  

</script>

<style lang="scss"></style>
