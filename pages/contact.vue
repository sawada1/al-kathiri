<template>
    <div>
        <div class="container contactus">
         <div class="row justify-content-center gap-4">
          <div class="col-12 col-xl-6 col-lg-6">
           <h3 class="theHead" :data-contact="$t('KEEP IN TOUCH')">{{ $t('CONTACT US NOW') }}</h3>
     <div class="accordion d-flex  flex-column gap-3" id="accordionExample">
  <div v-for="item,index in cites" class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="false" aria-controls="collapseTwo">
    <img src="@/assets/images/map.svg" alt="">
        <span>{{item.name }}</span>
     </button>
    </h2>
    <div :id="`collapse${index}`" class="accordion-collapse collapse " :class="{'show':index == 1}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
           <div class="branches">
            <span v-for="branch,index in item.branches" @click="checkBranch = index+1" :class="{'active':checkBranch==index+1}">{{`${$t('branch')} ${index+1}`}}</span>
           </div> 
            <div v-for="branch,index in item.branches"  class="thebranch  row align-items-center justify-content-between gap-3">
             <div class="col-12 col-xl-5 col-lg-5 col-md-5">
              <h4>{{ branch.name }}</h4>
              <div class="image">
               <ClientOnly>
               <div v-html="branch.frame"></div>
               </ClientOnly>
               <button>
                <img src="@/assets/images/local.svg" alt="">
                <span>{{ $t('get directions') }}</span>
               </button>
              </div>
             </div>
             <div class="col-12 col-xl-5 col-lg-5 col-md-5   d-flex flex-column align-items-center gap-2">
                <h5>{{$t('contact data')}}</h5>
                <div class="icons d-flex flex-column gap-2">
                 <div class="icon d-flex align-items-center gap-2">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>{{branch.address}}</span>
                 </div>
                 <div class="icon d-flex align-items-center gap-2">
                 <i class="fa-solid fa-phone"></i>
                  <span>{{ branch.phone }}</span>
                 </div>
                 <div class="icon d-flex align-items-center gap-2">
            <i class="fa-brands fa-whatsapp"></i>
                  <span>{{ branch.whatsapp }}</span>
                 </div>
                 <div class="icon  d-flex align-items-center gap-2">
                 <i class="fa-solid fa-envelope"></i>
                  <span>{{ branch.email }}</span>
                 </div>
                </div>
                 <h5 class="work">{{ $t('working hours') }}</h5>
                 <div class="text-center">
                 <p>{{ $t('everyday') }}</p>
                 <p>{{ branch.start_time }} - {{ branch.end_time }}</p>  
                 </div>
               
             </div>
            </div>  
         </div>
    </div>
  </div>

</div>
          </div>
          <div class="col-12 col-xl-5 col-lg-5">
           <form action="" @click.prevent>
             <div class="inp">
              <label for="">{{ $t('full name') }}</label>
              <input v-model="objContact.name" type="text" placeholder="write your name..">
               <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="nameError">{{ nameError }}</span>
             </div>
             <div class="inp">
              <label for="">{{ $t('email') }}</label>
              <input v-model="objContact.email" type="email" placeholder="example@mail.com..">
              <span class="errorMessage text-danger fw-bold fs-5 my-2" v-if="emailError">{{ emailError }}</span>
             </div>
             <div class="inp">
              <label for="">{{$t('message title')}}</label>
              <input v-model="objContact.title" type="text" placeholder="write your message title...">
               <span class="errorMessage text-danger fw-bold fs-5 my-2" v-if="titleError">{{ titleError }}</span>
             </div>
             <div class="inp">
              <label for="">{{$t('your message')}}</label>
              <textarea v-model="objContact.message" style="resize: none;" name="" id="" cols="30" rows="10" placeholder="write your message"></textarea>
               <span class="errorMessage text-danger fw-bold fs-5 my-2" v-if="messageError">{{ messageError }}</span>
             </div>
             <div class="thebtn text-center">
              <button @click="sendContact" style="padding: 10px 60px;">
               <span v-if="!checkForm">{{ $t('send') }}</span>
               <span v-else>success</span>
               </button>
             </div>
           </form>
          </div>
         </div>
        </div>
            <div v-if="pending"  class="mainLoader">
     <span class="loader"></span>
    </div>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import axios from 'axios';

const {locale } = useI18n();
let lang = ref(locale);
let url = getUrl();
let cites = ref([]); 
let pending = ref(true);
const contactFunc = async () => {
let  allCites  = await axios.get(`${url}/branches`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
  if (allCites.status == 200) {
    pending.value = false;
}
 cites.value = allCites.data.data;  
}
contactFunc();

let objContact = ref({
  message: '',
  email: '',
  title: '',
  name: '',
});
let emailError = ref(null);
let messageError = ref(null);
let nameError = ref(null);
let titleError = ref(null);
let checkForm = ref(null);

const sendContact = async () => {
  const result = await fetch(`${url}/contact-us`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objContact.value),

  }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.message) {
      emailError.value = json.errors.email == undefined ? null : json.errors.email[0]; 
      nameError.value = json.errors.name  == undefined ? null : json.errors.name[0]; 
      titleError.value = json.errors.title  == undefined ? null : json.errors.title[0]; 
      messageError.value = json.errors.message  == undefined ? null : json.errors.message[0]; 
      } else {
        objContact.value = ''
        emailError.value = null; 
      nameError.value = null; 
        titleError.value = null; 
        messageError.value = null;
        Swal.fire(
          'success',
          'Your form has been saved',
          'success'
          )
      
      }
    

      
    });


 

}

let checkBranch = ref(1);

useHead({
  title: lang.value == 'ar' ? 'اتصل بنا / الكثيري للسيارات' : 'alkathiri motors / contact us'
});

 
</script>

<style lang="scss">


</style>











