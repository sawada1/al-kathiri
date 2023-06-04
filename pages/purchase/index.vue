<template>
    <div>
       <div v-if="typeActive==1" class="container purchasee">
           <div class="row">
             <div class="col-12 col-xl-7 col-lg-7 ">
                <h3 class="head" :data-purchase="$t('FIND WHAT YOU NEED')">{{ $t('PURCHASE ORDER') }}</h3>
                <div class="individual">
                 
                  <form  action="" @submit.prevent>
                   <div class="header">
              
                    <p class="first" @click="typeActive = 1" :class="{'active': typeActive == 1}">{{ $t('individuals') }}</p>                   
                   
                     <span></span>
                    <p @click="typeActive = 2" :class="{'active': typeActive == 2}">{{ $t('corporate') }}</p>                   
                
                  </div>
                     <div class="method">
                        <h4>{{ $t('payment method') }}</h4>
                         <div class="choose">
                             <span @click="methodActive = 1" :class="{'active':methodActive == 1}">{{ $t('finance') }}</span>
                             <span @click="methodActive = 2" :class="{'active':methodActive == 2}">{{ $t('cash') }}</span>
                         </div>
                     </div>
                     <div class="finance" :class="{'active':methodActive == 1}">
                    
                     <div class="inp">
                        <label for="">{{ $t('full name') }} *</label>
                        <input type="text" v-model="objPurchase.name" :placeholder="$t('write your name..')">
                  <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="nameError">{{ nameError }}</span>
                     </div>
                     <div class="inp">
                        <label for="">{{ $t('mobile number') }} *</label>
                        <input type="text" v-model="objPurchase.phone" placeholder="05xxxxxxxx..">
                     <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="phoneError">{{ phoneError }}</span>
                     </div>
                     <div class="inp">
                        <label for="">{{$t('Total salary in ATM')}}*</label>
                        <input type="number" v-model="objPurchase.salary" :placeholder="$t('Salary and allowances...')">
                       <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="salaryError">{{ salaryError }}</span>  
                     </div>
                     <div class="inp">
                        <label for="">{{$t('Total commitments')}}*</label>
                        <input type="number" v-model="objPurchase.commitments" :placeholder="$t('Commitment amount...')">
                     <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="commitmentsError">{{ commitmentsError }}</span>
                     </div>
                     <div class="inpWithRadio d-flex   gap-4">
                        <label for="">{{ $t('Is there a mortgage loan ?') }} *</label>
                        <div class="d-flex flex-column gap-2">
                          <div class="d-flex align-items-center gap-3">
                           <div class="d-flex align-items-center gap-2">
                            <input type="radio" id="yes" value="1" v-model="objPurchase.having_loan"  >
                            <label for="yes">{{ $t('yes') }}</label>
                            
                         </div>
                         <div class="d-flex align-items-center gap-2">
                            <input type="radio" id="no" value="0" v-model="objPurchase.having_loan"   checked>
                            <label for="no">{{ $t('no') }}</label>
                         </div>
                          </div>
                         <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="having_loanError">{{ having_loanError }}</span>

                        </div>
                        

                     </div>
                     <div class="inp">
                        <label for="">{{ $t('The last installment') }} *</label>
                        <select v-model="objPurchase.last_installment">
                            <option :value="null" disabled>{{ $t('%35') }}</option>
                            <option value="35" selected>35</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="45">45</option>
                            <option value="50">50</option>
                        </select>
                     <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="last_installmentError">{{ last_installmentError }}</span>
                     </div>
                     <div class="inp">
                        <label for="">{{ $t('The first installment') }}</label>
                      <select v-model="objPurchase.first_installment">
                            <option :value="null" disabled>{{ $t('%15') }}</option>
                            <option value="0">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">40</option>
                            <option value="10">10</option>
                        </select> 
                        <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="first_installmentError">{{ first_installmentError }}</span>
                     </div>
                     <div class="inp">
                        <label for="">{{$t('city')}}*</label>
                          <select v-model="objPurchase.city_id">
                          <option :value="null" disabled>{{ $t('city') }}</option>
                            <option v-for="bank in purchaseForm.cities" :value="bank.id"  >{{ bank.name }}</option>
                        </select>
                                    <div v-if="pending" class="spinner-border spinner-border-sm" role="status">
                                    </div>
                        <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="cityError">{{ cityError }}</span>
                     </div>
                     <div class="inp">
                        <label for="">{{$t('employer')}}*</label>
                         <input type="text" v-model="objPurchase.work" :placeholder="$t('employer')">
                      <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="workError">{{ workError }}</span>
                     </div>
                      <div class="inp">
                        <label for="">{{$t('Bank account')}}*</label>
                        <select  v-model="objPurchase.bank_id">
                        <option :value="null" disabled>{{ $t('Select bank...') }}</option>
                            <option v-for="bank in purchaseForm.banks" :value="bank.id"  >{{ bank.name }}</option>
                        </select>
                         <div v-if="pending" class="spinner-border spinner-border-sm" role="status">
                                    </div>
                      <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="bankError">{{ bankError }}</span>
                     </div>
                     <div class="inpWithRadio d-flex  gap-4">
                        <label for="">{{$t('Driving License Status')}}*</label>
                        <div class="d-flex flex-column gap-2">
                        <div class="d-flex align-items-center gap-2">
                            <div class="d-flex align-items-center gap-2">
                            <input type="radio" value="available" v-model="objPurchase.driving_license" >
                            <label for="">{{ $t('valid') }}</label>
                         </div>
                         <div class="d-flex align-items-center gap-2">
                            <input type="radio" v-model="objPurchase.driving_license" value="expired"  checked>
                            <label for="">{{ $t('invalid') }}</label>
                         </div>
                         <div class="d-flex align-items-center gap-2">
                            <input type="radio" v-model="objPurchase.driving_license" value="doesnt_exist">
                            <label for="">{{ $t('unavailable') }}</label>
                         </div>
                        </div>
                   
                  <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="drivingError">{{ drivingError }}</span>
                        </div>
              
                     </div>
                     </div>
                     <div class="corporate" :class="{'active':methodActive == 2}" >
                  
                     <div class="inp">
                        <label for="">{{ $t('full name') }} *</label>
                        <input type="text" v-model="objCash.name" :placeholder="$t('write your name..')">
                      <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="nameCashError">{{ nameCashError}}</span>
                     </div>
                     <div class="inp">
                        <label for="">{{ $t('mobile number') }} *</label>
                        <input type="text" v-model="objCash.phone" placeholder="05xxxxxxxx..">
                  <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="phoneCashError">{{ phoneCashError }}</span>

                     </div>
                     </div>
                     
                  </form>
                   <button class="d-flex align-items-center justify-content-center gap-3" type="" @click="sendIndividual()">
                     <span>{{ $t('send') }}</span> 
               <div v-if="spinnerBtn"  class="spinner-border text-light" role="status">
               </div>
                   </button>
                </div>
             </div>
             <div class="col-12 col-xl-5 col-lg-5 thefixed">
                 <div v-if="!pending" class="mainlatestbox ">
                        <div class="image">
                    <img :src="mainCar.cover_image" alt="">
                </div>
                <h3>{{ mainCar.name }}</h3>
                <div class="text1">
                    <div class="price">
                        <span>{{ $t('price') }}</span>
                        <h4>{{ mainCar.selling_price }} SAR</h4>
                    </div>
                    <div class="after">
                        <span>{{ $t('after vat') }}</span>
                        <h4>{{ mainCar.selling_price_after_vat }} SAR</h4>
                    </div>

                </div>
                      <span class="detail">
                {{ $t('details') }}
                    <i class="fa-solid fa-chevron-right"></i> 
                </span>
                <div class="overlay">
                  
                </div>
              <i class="fa-regular fa-heart fav"></i>
                </div>
             

             <div v-if="pending" class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
  
            </div>
            
             </div>
           </div>
       </div>
          <div v-if="typeActive==2" class="purchasee container">
           <div class="row">
             <div class="col-12 col-xl-7 col-lg-7 ">
                <h3 class="head">{{ $t('PURCHASE ORDER') }}</h3>
                <div class="individual">
                 
                  <form  action="" @submit.prevent>
                   <div class="header">    
                    <p class="first" @click="typeActive = 1" :class="{'active': typeActive == 1}">{{ $t('individuals') }}</p>                   
                     <span></span>
                    <p @click="typeActive = 2" :class="{'active': typeActive == 2}">{{ $t('corporate') }}</p>                   
                  
                  </div>
                     <div class="method">
                        <h4>{{ $t('payment method') }}</h4>
                         <div class="choose">
                             <span @click="methodActiveCorparate = 1" :class="{'active':methodActiveCorparate == 1}">{{ $t('finance') }}</span>
                             <span @click="methodActiveCorparate = 2" :class="{'active':methodActiveCorparate == 2}">{{ $t('cash') }}</span>
                         </div>
                     </div>
                     <div class="finance" :class="{'active':methodActiveCorparate == 1}">
                        <div class="inp special" v-for="item,index in form" :key="item">
                        <label for="">{{ $t('The selected vehicle *') }}</label>
                        <input class="bigOne" type="text" :placeholder="$t('Vehicle name')" v-model="item.car_name">
                        <input type="number" placeholder="the number" v-model="item.count">
                        <div class="d-flex align-items-center gap-2">
                        <i @click="addRow()" class="fa-solid fa-plus"></i>
                       <i v-if="form.length > 1" @click="removeRow()" class="fa-solid fa-minus"></i>
                        </div>

                     </div>
                     <div class="inp">
                        <label for="">{{ $t('Company Name') }} *</label>
                        <input type="text" v-model="objCorporateFinance.organization_name" :placeholder="$t('Company Name')">
                     <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_nameError">{{ organization_nameError }}</span>
                     </div>
                     <div class="inp">
                        <label for="">{{ $t('Official email') }} *</label>
                        <input type="text"  v-model="objCorporateFinance.organization_email" placeholder="example@mail.com">
                        <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_emailError">{{ organization_emailError }}</span>
                     </div>
                     <div class="inp">
                        <label for="">{{ $t('The Chief Executive Officer (CEO)') }} *</label>
                        <input type="text"  v-model="objCorporateFinance.organization_ceo" :placeholder=" $t('The Chief Executive Officer (CEO)')">
                       <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_ceoError">{{ organization_ceoError }}</span>    
                     </div>
                     <div class="inp">
                        <label for="">{{ $t('mobile number') }} *</label>
                        <input type="text"  v-model="objCorporateFinance.phone" placeholder="05xxxxxxxx...">
                        <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="phoneCorporateError">{{ phoneCorporateError }}</span>    
     
                     </div>
                     <div class="inp">
                        <label for=""> {{ $t("The company's headquarter") }} * </label>
                        <input type="text"  v-model="objCorporateFinance.organization_location" :placeholder="$t('city')">
                       <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_locationError">{{ organization_locationError }}</span>    

                     </div>
                        <div class="inp">
                        <label for="">{{ $t('Company activity (According to the record)') }} *</label>
                         <input type="text" v-model="objCorporateFinance.organization_activity" :placeholder="$t('Company activity (According to the record)')">
                   <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_activityError">{{ organization_activityError }}</span>    

                     </div>
                     <div class="inp">
                        <label for="">{{$t('Company age ')}}*</label>
                         <input type="number" :placeholder="$t('Company age...')" v-model="objCorporateFinance.organization_age" name="" >
                        <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_ageError">{{ organization_ageError }}</span>    

                     </div>

                      <div class="inp">
                        <label for="">{{$t('Bank account')}}*</label>
                         <select  v-model="objCorporateFinance.bank_id">
                         <option :value="null" disabled>{{$t('Bank account')}}</option>
                            <option v-for="bank in purchaseForm.banks" :value="bank.id"  >{{ bank.name }}</option>
                        </select>
                         <div v-if="pending" class="spinner-border spinner-border-sm" role="status">
                                    </div>
                   <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="bankCorporateError">{{ bankCorporateError }}</span>    
  
                     </div>
                   
                     </div>
                     <div class="corporate" :class="{'active':methodActiveCorparate == 2}" >
                        <div class="inp special" v-for="item,index in form" :key="item">
                        <label for="">{{ $t('The selected vehicle *') }}</label>
                        <input class="bigOne" type="text" :placeholder="$t('Vehicle name')" v-model="item.car_name">
                        <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="car_nameErorr">{{ car_nameErorr }}</span>
                        <input type="number" placeholder="the number" v-model="item.count">
                       <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="car_countErorr">{{ car_countErorr }}</span>   
                        <div class="d-flex align-items-center gap-2">
                        <i @click="addRow()" class="fa-solid fa-plus"></i>
                       <i v-if="form.length > 1" @click="removeRow()" class="fa-solid fa-minus"></i>
                        </div>

                     </div>
                     <div class="inp">
                        <label for="">{{ $t('Company Name') }} *</label>
                        <input type="text" v-model="objCorporateCash.organization_name" :placeholder="$t('Company Name')">
                  <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_nameError">{{ organization_nameError }}</span>

                     </div>
                     <div class="inp">
                        <label for="">{{ $t('Official email') }} *</label>
                        <input type="email" v-model="objCorporateCash.organization_email" placeholder="example@mail.com">
                     <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_emailError">{{ organization_emailError }}</span>

                     </div>
                     <div class="inp">
                        <label for="">{{ $t('The Chief Executive Officer (CEO)') }} *</label>
                        <input type="text" v-model="objCorporateCash.organization_ceo" :placeholder="$t('The Chief Executive Officer (CEO)')">
                     <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="organization_ceoError">{{ organization_ceoError }}</span>    
    
                     </div>
                     <div class="inp">
                        <label for="">{{ $t('mobile number') }} *</label>
                        <input type="text" v-model="objCorporateCash.phone" placeholder="05xxxxxxxx...">
                   <span class="errorMessage text-danger fw-bold fs-5 my-2"  v-if="phoneCorporateError">{{ phoneCorporateError }}</span>    
                     </div>
                     </div>
                  </form>
                    <button class="d-flex align-items-center justify-content-center gap-3" type="" @click="sendCorporate()">
                     <span>{{ $t('send') }}</span> 
               <div v-if="spinnerBtn2"  class="spinner-border text-light" role="status">
               </div>
                   </button>
                 
                  
                </div>
             </div>
             <div class="col-12 col-xl-5 col-lg-5  thefixed">
               <p>Lorem, ipsum dolor sit amet consectetur 
               adipisicing elit. Earum quibusdam aspernatur
                accusantium obcaecati maiores laborum libero
                 quam exercitationem sapiente consectetur,
                molestias ratione in cumque amet nulla 
                similique facilis ipsam praesentium.</p>
                 <div class="icons">
                  <div class="icon d-flex align-items-center gap-3">
                   <i class="fa-solid fa-phone"></i>
                    <h4>{{ $t('mobile number') }}: <span>05000000</span></h4>
                  </div>
                  <div class="icon d-flex align-items-center gap-3">
                   <i class="fa-solid fa-envelope"></i>
                      <h4>{{ $t('email') }}: <span> example@mail.com</span></h4>
                  </div>
                  <div class="icon d-flex align-items-center gap-3">
                <i class="fa-brands fa-whatsapp"></i>
                <h4>{{ $t('Whatsapp') }}: <a  target="_blank" :href="`https://wa.me/${generalData.whatsapp}`" class="click">{{ $t('click here') }}</a></h4>
                  </div>
                 </div>
                 <p class="text">
                  {{ $t('Or please fill the form below: You will receive a reply within a maximum of 24 hours.') }}
                 </p>
             </div>
           </div>
       </div> 
  
    </div>
</template>

<script setup>
import axios from 'axios';
const {locale } = useI18n();
let lang = ref(locale);
const localePath = useLocalePath();
let spinnerBtn = ref(false);
let spinnerBtn2 = ref(false);
let methodActive = ref(1);
let methodActiveCorparate = ref(1);
let typeActive = ref(1);
const route = useRoute()
let url = getUrl();
let id = route.query.id ? route.query.id : 1;
let maincolorId = route.query.colorId ? route.query.colorId : 1;
let pending = ref(false);  

let purchaseForm = ref([]);
let mainCar = ref([]);
let generalData = ref([]);
const carAndPurchaseFunc = async () => {
  pending.value = true; 
const  car  = await axios.get(`${url}/cars/${id}`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
const  general  = await axios.get(`${url}/general`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});
const  purchase  = await axios(`${url}/purchase-form-info`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});

   if (car.status == 200 && purchase.status == 200) {
      pending.value = false;
}
generalData.value = general.data;
purchaseForm.value = purchase.data;
 mainCar.value = car.data.data;
}

carAndPurchaseFunc();







    const form = ref([
      { car_name : '', count: 0}
    ])

    const addRow = () => {
       form.value.push({ car_name: '', count: 0 });
       console.log(form.value);
    }

    const removeRow = (index) =>{
      if(form.value.length > 1){
         form.value.splice(index, 1);
       }
       console.log(form.value);
    }


let objPurchase = ref({
payment_type:'finance',
 car_id: id,
color_id: maincolorId,
name: null,
phone: null,
salary: null,
commitments: null,
having_loan: null,
last_installment: null,
first_installment: null,
city_id: null,
work: null,
   bank_id: null,
driving_license: null,
});

let objCash = ref({
payment_type:'cash',
car_id: id,
color_id: maincolorId,
name: null,
phone: null,
})


let nameError = ref(null);
let phoneError = ref(null);
let cityError = ref(null);
let salaryError = ref(null);
let commitmentsError = ref(null);
let last_installmentError = ref(null);
let first_installmentError = ref(null);
let workError = ref(null);
let bankError = ref(null);
let drivingError = ref(null);
let having_loanError = ref(null);
let nameCashError = ref(null);
let phoneCashError = ref(null);


const sendIndividual = async () => {
   spinnerBtn.value = true;
   let result = fetch(`${url}/individuals-orders`, {
      method: 'post',
       headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(methodActive.value == 1 ? objPurchase.value : objCash.value ),
   }).then((response) => response.json())
    .then((json) => {
       console.log(json);
          spinnerBtn.value = false;
    
      if (json.message) {
         phoneError.value = json.errors.phone == undefined ? null : json.errors.phone[0]; 
         phoneCashError.value = json.errors.phone == undefined ? null : json.errors.phone[0]; 
         nameError.value = json.errors.name  == undefined ? null : json.errors.name[0]; 
         nameCashError.value = json.errors.name  == undefined ? null : json.errors.name[0]; 
         salaryError.value = json.errors.salary  == undefined ? null : json.errors.salary[0]; 
         commitmentsError.value = json.errors.commitments  == undefined ? null : json.errors.commitments[0]; 
         having_loanError.value = json.errors.having_loan  == undefined ? null : json.errors.having_loan[0]; 
         last_installmentError.value = json.errors.last_installment  == undefined ? null : json.errors.last_installment[0]; 
         first_installmentError.value = json.errors.first_installment  == undefined ? null : json.errors.first_installment[0]; 
         workError.value = json.errors.work  == undefined ? null : json.errors.work[0]; 
         cityError.value = json.errors.city_id  == undefined ? null : json.errors.city_id[0]; 
         bankError.value = json.errors.bank_id  == undefined ? null : json.errors.bank_id[0]; 
         drivingError.value = json.errors.driving_license  == undefined ? null : json.errors.driving_license[0]; 
      } else {
         objPurchase.value = '';
         nameError.value = null;
         salaryError.value = null;
         commitmentsError.value = null;
         phoneError.value = null;
         having_loanError.value = null;
         last_installmentError.value = null;
         first_installmentError.value = null;
         cityError.value = null;
         workError.value = null;
         bankError.value = null;
         drivingError.value = null;
         objCash.value = '';
        Swal.fire(
          'success',
          `${json}`,
          'success'
          )
      
      }
    
     

      
    });
}


let objCorporateFinance = ref({
 payment_type:'finance',
cars:form.value,
bank_id: null,
organization_activity: null,
organization_name: null,
organization_age: null,
organization_ceo: null,
organization_email: null,
organization_location: null,
organization_location: null,
phone:null
});

let objCorporateCash = ref({
payment_type: 'cash',
cars:form.value,
organization_ceo: null,
organization_email: null,
organization_name: null,
phone:null

});

let organization_activityError = ref(null);
let organization_ageError = ref(null);
let organization_ceoError = ref(null);
let organization_emailError = ref(null);
let organization_locationError = ref(null);
let organization_nameError = ref(null);
let bankCorporateError = ref(null);
let phoneCorporateError = ref(null);
let car_nameErorr = ref(null);
let car_countErorr = ref(null);


const sendCorporate = async () => {
   spinnerBtn2.value = true;
     let result = fetch(`${url}/corporates-orders`, {
      method: 'post',
       headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(methodActiveCorparate.value == 1 ? objCorporateFinance.value : objCorporateCash.value ),
   }).then((response) => response.json())
    .then((json) => {
       console.log(json);
       spinnerBtn2.value = false;
      if (json.message) {
         organization_activityError.value = json.errors.organization_activity == undefined ? null : json.errors.organization_activity[0];  
         organization_ageError.value = json.errors.organization_age == undefined ? null : json.errors.organization_age[0];  
         organization_ceoError.value = json.errors.organization_ceo == undefined ? null : json.errors.organization_ceo[0];  
         organization_emailError.value = json.errors.organization_email == undefined ? null : json.errors.organization_email[0];  
         organization_locationError.value = json.errors.organization_location == undefined ? null : json.errors.organization_location[0];  
         organization_nameError.value = json.errors.organization_name == undefined ? null : json.errors.organization_name[0];  
         bankCorporateError.value = json.errors.bank_id == undefined ? null : json.errors.bank_id[0];  
         phoneCorporateError.value = json.errors.phone == undefined ? null : json.errors.phone[0];  
         //car_nameErorr.value = json.errors.cars.0.car_name == undefined ? null : json.errors.cars[0].car_name;

      } else {
         objCorporateFinance.value = '';
         organization_activityError.value = null;
         organization_ageError.value = null;
         organization_ceoError.value = null;
         organization_emailError.value = null;
         organization_nameError.value = null;
         bankCorporateError.value = null;
         phoneCorporateError.value = null;
         organization_locationError.value = null;
         objCorporateCash.value = ''
         form.value = '';
        Swal.fire(
          'success',
           `${json}`,
          'success'
          )
      
      }
    
     

      
    });
}
</script>

<style lang="scss">

</style>