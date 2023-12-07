<template>
   <div>
      <div v-if="typeActive == 1" class="container purchasee" style="margin-top: 150px;">
         <h3 class="head" :data-purchase="$t('FIND WHAT YOU NEED')">{{ $t('PURCHASE ORDER') }}</h3>
         <div class="row justify-content-center my-3">
            <div class="col-12 col-xl-5 col-lg-5 mb-4 thefixed">
               <div v-if="!pending" class="fixed-slide">
                  <div  class="mainlatestbox w-100" style="">
                     <div class="image" style="height:220px;">
                        <!-- <img :src="mainCar.main_image" alt=""> -->
                        <div class="car-img lazyload" :style="{ backgroundImage: 'url(' + (mainCar.main_image ? mainCar.main_image : 'https://placehold.co/600') + ')' }"></div>

                     </div>
                     <h3 style="white-space:normal;">{{ mainCar.name }}</h3>
                     <div class="text1">
                        <div class="price">
                           <span>{{ $t('price') }}</span>
                           <h4>{{ mainCar.selling_price }} {{ $t('Sar') }}</h4>
                        </div>
                        <div class="after">
                           <span>{{ $t('after vat') }}</span>
                           <h4>{{ mainCar.selling_price_after_vat }} {{ $t('Sar') }}</h4>
                        </div>

                     </div>
                     <span class="detail">
                        {{ $t('details') }}
                        <i class="fa-solid fa-chevron-right"></i>
                     </span>
                     <div class="overlay">

                     </div>
                     <i style="cursor:pointer;" @click="addToFav()" class="fa-regular fa-heart fav"
                        :class="{ 'fa-solid': mainCar.is_in_favorite }"></i>
                  </div>
                  <div class="d-flex alifgn-items-center justify-content-center">
                  <span class="text-danger fw-bold text-center mt-1">{{ $t('warning') }} </span>
                  </div>
               </div>



               <div v-if="pending"  role="status">
                        <video
           autoplay
           loop
           muted
           playsinline
           src="~/assets/images/main-loader.webm"
           alt=""
           style="width: 100px; height: 100px"
         />
               </div>

            </div>
            <div class="col-12 col-xl-7 col-lg-7 ">
               <div class="individual">

                  <form action="" @submit.prevent>
                     <div class="header">

                        <p class="first" @click="typeActive = 1" :class="{ 'active': typeActive == 1 }">{{
                           $t('individuals')
                        }}</p>

                        <span></span>
                        <p @click="typeActive = 2" :class="{ 'active': typeActive == 2 }">{{ $t('corporate') }}</p>

                     </div>
                     <div class="method">
                        <h4>{{ $t('payment method') }}</h4>
                        <div class="choose">
                           <span @click="methodActive = 1" class="text-center" :class="{ 'active': methodActive == 1 }">{{ $t('finance')
                           }}</span>
                           <span @click="methodActive = 2" class="text-center" :class="{ 'active': methodActive == 2 }">{{ $t('cash') }}</span>
                        </div>
                     </div>
                     <div class="finance" :class="{ 'active': methodActive == 1 }">
                             
                        <div class="inp">
                           <label for="">{{ $t('full name') }} *</label>
                           <input type="text" v-model="objPurchase.name" :placeholder="$t('write your name..')">
                           <span class="errorMessage text-danger fw-bold " v-if="nameError">{{ nameError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('mobile number') }} *</label>
                           <input type="tel" v-model="objPurchase.phone"   :placeholder="$t('mobile number')">
                           <span class="errorMessage text-danger fw-bold " v-if="phoneError">{{ phoneError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('age') }} *</label>
                           <input type="number" min="1" v-model="objPurchase.age" :placeholder="$t('age')">
                           <span class="errorMessage text-danger fw-bold " v-if="ageError">{{ ageError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('city') }}*</label>
                           <select v-model="objPurchase.city_id">
                              <option :value="null" disabled>{{ $t('city') }}</option>
                              <option v-for="bank in purchaseForm.cities" :value="bank.id">{{ bank.name }}</option>
                           </select>
                           <div v-if="pending2" class="spinner-border spinner-border-sm" role="status">
                           </div>
                           <span class="errorMessage text-danger fw-bold" v-if="cityError">{{ cityError }}</span>
                        </div>
                         
           
                     
                        <div class="inp">
                           <label for="">{{ $t('employer') }}*</label>
                           <input type="text"  v-model="objPurchase.work">
                           <span class="errorMessage text-danger fw-bold " v-if="workError">{{ workError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('Total salary in ATM') }}*</label>
                           <input type="number" v-model="objPurchase.salary" :placeholder="$t('Salary and allowances...')">
                           <span class="errorMessage text-danger fw-bold " v-if="salaryError">{{ salaryError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('Bank account') }}*</label>
                           <select v-model="objPurchase.bank_id">
                              <option :value="null" disabled>{{ $t('Select bank...') }}</option>
                              <option v-for="bank in purchaseForm.banks" :value="bank.id">{{ bank.name }}</option>
                           </select>
                           <div v-if="pending2" class="spinner-border spinner-border-sm" role="status">
                           </div>
                           <span class="errorMessage text-danger fw-bold " v-if="bankError">{{ bankError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('Total commitments') }}*</label>
                           <input type="number" min="1" v-model="objPurchase.commitments"
                              :placeholder="$t('Commitment amount...')">
                           <span class="errorMessage text-danger fw-bold " v-if="commitmentsError">{{ commitmentsError
                           }}</span>
                        </div>
                        <div class="inpWithRadio d-flex flex-column  gap-2">
                           <label for="">{{ $t('Is there a mortgage loan ?') }} *</label>
                           <div class="d-flex flex-column gap-2">
                              <div class="d-flex align-items-center gap-3">
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="yes" :value="1" v-model="objPurchase.having_loan">
                                    <label for="yes">{{ $t('yes') }}</label>

                                 </div>
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="no" :value="0" v-model="objPurchase.having_loan">
                                    <label for="no">{{ $t('no') }}</label>
                                 </div>
                              </div>

                           </div>
                              <span class="errorMessage text-danger fw-bold " v-if="having_loanError">{{ having_loanError
                              }}</span>


                        </div>
                        <div class="inpWithRadio d-flex flex-column  gap-2">
                           <label for=""> {{ $t('loan') }} *</label>
                           <div class="d-flex flex-column gap-2">
                              <div class="d-flex align-items-center gap-3">
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="yes2" :value="1" v-model="objPurchase.having_personal_loan">
                                    <label for="yes2">{{ $t('yes') }}</label>

                                 </div>
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="no2" :value="0" v-model="objPurchase.having_personal_loan">
                                    <label for="no2">{{ $t('no') }}</label>
                                 </div>
                              </div>

                           </div>
                              <span class="errorMessage text-danger fw-bold " v-if="having_loan_personal_error">{{
                                 having_loan_personal_error
                              }}</span>


                        </div>
                        
                        <div class="inp">
                           <label for=""> {{ $t('finance2') }} *</label>
                           <input type="number" min="1" v-model="objPurchase.finance_duration" :placeholder="$t('finance2')">
                           <span class="errorMessage text-danger fw-bold " v-if="finance_duration_error">{{
                              finance_duration_error }}</span>
                        </div>
                    
                    
                        <!-- <div class="inp">
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
                           <span class="errorMessage text-danger fw-bold " v-if="last_installmentError">{{
                              last_installmentError }}</span>
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
                           <span class="errorMessage text-danger fw-bold " v-if="first_installmentError">{{
                              first_installmentError }}</span>
                        </div> -->


                        <div class="inpWithRadio d-flex flex-column  gap-2">
                           <label for="">{{ $t('funding') }}</label>
                           <div class="d-flex flex-column  gap-2">
                              <div class="d-flex align-items-cente flex-colum gap-3">
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="bankk1" value="same_bank" v-model="objPurchase.funding_organization_type">
                                    <label for="bankk1">{{ $t('on bank') }}</label>

                                 </div>
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="bankk2" value="company" v-model="objPurchase.funding_organization_type" >
                                    <label for="bankk2">{{ $t('financing2') }}</label>
                                 </div>
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="bankk3" value="bank" v-model="objPurchase.funding_organization_type" >
                                    <label for="bankk3">{{ $t('financing3') }}</label>
                                 </div>

                              </div>
                          
                           </div>
                              <span class="errorMessage text-danger fw-bold " v-if="funding_organization_typeError">{{funding_organization_typeError}}</span>


                        </div>

                        <div v-if="objPurchase.funding_organization_type == 'company' " class="inp">
                           <label for=""> {{ $t('finance3') }} *</label>
                           <!-- <input type="text" v-model="objPurchase.financing_community" :placeholder="$t('finance1')"> -->
                           <div class="selectdiv">
                              <select v-model="objPurchase.funding_organization_id">
                              <option :value="null" disabled>{{ $t('finance3') }}</option>
                              <option v-for="bank in purchaseForm.funding_organizations" :value="bank.id">{{ bank.name }}</option>
                           </select>
                           </div>
                           <!-- <span class="errorMessage text-danger fw-bold " v-if="funding_organization_idError">{{$t('financing')}}</span> -->
                           <span class="errorMessage text-danger fw-bold " v-if="funding_organization_idError">{{funding_organization_idError}}</span>
                        </div>
                        <div v-if="objPurchase.funding_organization_type == 'bank' " class="inp">
                           <label for=""> {{ $t('financing3') }} *</label>
                           <!-- <input type="text" v-model="objPurchase.financing_community" :placeholder="$t('finance1')"> -->
                           <div class="selectdiv">
                              <select v-model="objPurchase.funding_bank_id">
                              <option :value="null" disabled>{{ $t('financing3') }}</option>
                              <option v-for="bank in purchaseForm.banks" :value="bank.id">{{ bank.name }}</option>
                           </select>
                           </div>
                           <!-- <span class="errorMessage text-danger fw-bold " v-if="funding_organization_idError">{{$t('financing')}}</span> -->
                           <span class="errorMessage text-danger fw-bold " v-if="funding_bank_idError">{{funding_bank_idError}}</span>
                        </div>

                        <!-- <div class="inpWithRadio d-flex  gap-4">
                           <label for="">{{ $t('Driving License Status') }}*</label>
                           <div class="d-flex flex-column gap-2">
                              <div class="d-flex align-items-center gap-2">
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" value="available" v-model="objPurchase.driving_license">
                                    <label for="">{{ $t('valid') }}</label>
                                 </div>
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" v-model="objPurchase.driving_license" value="expired" checked>
                                    <label for="">{{ $t('invalid') }}</label>
                                 </div>
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" v-model="objPurchase.driving_license" value="doesnt_exist">
                                    <label for="">{{ $t('unavailable') }}</label>
                                 </div>
                              </div>

                              <span class="errorMessage text-danger fw-bold " v-if="drivingError">{{ drivingError }}</span>
                           </div>

                        </div> -->
                           

                  
                        <div class="inpWithRadio d-flex flex-column  gap-3">
                           <label for=""> {{$t('sector')}} *</label>
                           <div class="d-flex flex-column gap-2">
                              <div class="d-flex align-items-center gap-3">
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="sector1" value="private" v-model="objPurchase.sector">
                                    <label for="sector1">{{ $t('private') }}</label>

                                 </div>
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="sector2" value="governmental" v-model="objPurchase.sector" >
                                    <label for="sector2">{{ $t('governmental') }}</label>
                                 </div>

                              </div>
                                 <span class="errorMessage text-danger fw-bold " v-if="sectorError">{{ sectorError }}</span>
                          

                           </div>


                        </div>

                        
                        <div v-if="objPurchase.sector"  class="govern-section d-flex flex-column gap-2">
                           <div class="inp">
                           <label for="">{{ $t('id_driving') }}</label>
                           <input type="file" @change="onFileChange1">
                           <span class="errorMessage text-danger fw-bold " v-if="id_and_driving_licenseError">{{ id_and_driving_licenseError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ objPurchase.sector == 'governmental' ? `${$t('salary')}` : `${$t('salary_def')}` }}</label>
                           <input type="file" @change="onFileChange2">
                           <span class="errorMessage text-danger fw-bold " v-if="salary_identificationError">{{ salary_identificationError }}</span>
                        </div>

                        <div v-if="objPurchase.sector == 'private'" class="inp">
                           <label for=""> {{ $t('print') }}  </label>
                           <input type="file" @change="onFileChange3">
                           <span class="errorMessage text-danger fw-bold " v-if="insurance_printError">{{ insurance_printError }}</span>
                        </div>
                        <div v-if="objPurchase.sector == 'private'" class="inp">
                           <label for=""> {{ $t('months') }} </label>
                           <input type="file" @change="onFileChange4">
                           
                           <span class="errorMessage text-danger fw-bold " v-if="account_statementError">{{ account_statementError }}</span>
                        </div>
                        </div>

                        <div class="inp">
                           <label for="">{{$t('services')}}</label>
                           <!-- <p>{{ $t('options services') }}</p> -->
                           <!-- <select id="mySelect-services" v-model="objPurchase.services" multiple>
                              <option class="my-3" v-for="box in options" :key="box.id" :value="box.id">{{ box.name }}</option>
                           </select> -->

                           <div v-for="box,index in options" class="mt-1" >
                            <div class="d-flex align-items-center gap-2 my-1">
                             <input :id="`option-${index}`" type="checkbox" v-model="objPurchase.services" :value="box.id">
                             <label :for="`option-${index}`">{{ box.name }}</label>
                            </div>
                           </div>
                           <span class="errorMessage text-danger fw-bold " v-if="servicesError">{{ servicesError }}</span>
                        </div>
                     </div>
                     <div class="corporate" :class="{ 'active': methodActive == 2 }">

                        <div class="inp">
                           <label for="">{{ $t('full name') }} *</label>
                           <input type="text" v-model="objCash.name" :placeholder="$t('write your name..')">
                           <span class="errorMessage text-danger fw-bold " v-if="nameCashError">{{ nameCashError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('mobile number') }} *</label>
                           <input type="tel" v-model="objCash.phone" :placeholder="$t('mobile number')" >
                           <span class="errorMessage text-danger fw-bold " v-if="phoneCashError">{{ phoneCashError
                           }}</span>

                        </div>
                        <div class="inp">
                           <label for="">{{ $t('city') }}*</label>
                           <select v-model="objCash.city_id">
                              <option :value="null" disabled>{{ $t('city') }}</option>
                              <option v-for="bank in purchaseForm.cities" :value="bank.id">{{ bank.name }}</option>
                           </select>
                           <div v-if="pending2" class="spinner-border spinner-border-sm" role="status">
                           </div>
                           <span class="errorMessage text-danger fw-bold" v-if="cityCashError">{{ cityCashError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{$t('services')}}</label>
                           <!-- <p>{{ $t('options services') }}</p> -->
                           <!-- <select id="mySelect-services" v-model="objPurchase.services" multiple>
                              <option class="my-3" v-for="box in options" :key="box.id" :value="box.id">{{ box.name }}</option>
                           </select> -->

                           <div v-for="box,index in options" class="mt-1" >
                            <div class="d-flex align-items-center gap-2 my-1">
                             <input :id="`option-cash-${index}`" type="checkbox" v-model="objCash.services" :value="box.id">
                             <label :for="`option-cash-${index}`">{{ box.name }}</label>
                            </div>
                           </div>
                           <span class="errorMessage text-danger fw-bold " v-if="servicesError">{{ servicesError }}</span>
                        </div>
                        <!-- <div class="inp">
                           <label for="">{{ $t('Bank account') }}*</label>
                           <select v-model="objCash.bank_id">
                              <option :value="null" disabled>{{ $t('Select bank...') }}</option>
                              <option v-for="bank in purchaseForm.banks" :value="bank.id">{{ bank.name }}</option>
                           </select>
                           <div v-if="pending" class="spinner-border spinner-border-sm" role="status">
                           </div>
                           <span class="errorMessage text-danger fw-bold " v-if="bankError">{{ bankError }}</span>
                        </div> -->

                        <nuxt-link  :to="localePath('/accounts')">
                           <span class="fw-bold" style="box-shadow:none; color:#1b395f; text-decoration: underline;">{{ $t('click accounts') }}</span>
                          </nuxt-link>
                     </div>

                  </form>
                  <button v-if="methodActive == 1" :disabled="isLoading" class="d-flex align-items-center justify-content-center gap-3" type="" @click="sendIndividual()">
                     <span>{{ $t('send') }}</span>
                     <div v-if="spinnerBtn" class="spinner-border text-light" role="status">
                     </div>
                  </button>
                  <button v-if="methodActive == 2" :disabled="isLoading" class="d-flex align-items-center justify-content-center gap-3" type="" @click="sendCash()">
                     <span>{{ $t('send') }}</span>
                     <div v-if="spinnerBtn" class="spinner-border text-light" role="status">
                     </div>
                  </button>
               </div>
            </div>

         </div>
      </div>
      <div v-if="typeActive == 2" class="purchasee container" style="margin-top: 150px;">
         <h3 class="head" :data-purchase="$t('FIND WHAT YOU NEED')">{{ $t('PURCHASE ORDER') }}</h3>
         <div class="row">
            <div class="col-12 col-xl-5 col-lg-5 mb-4 thefixed">
               <div class="fixed-slide">
                <p class="text">
                        {{ $t('Or please fill the form below: You will receive a reply within a maximum of 24 hours.') }}
                     </p>
                  <p>{{$t('text purchase')}}</p>
                  <div class="icons">
                     <div class="icon d-flex align-items-center gap-3">
                        <i class="fa-solid fa-phone"></i>
                        <h4>{{ $t('mobile number') }}: <span>{{ generalData.phone }}</span></h4>
                     </div>
                     <div class="icon d-flex align-items-center gap-3">
                        <i class="fa-solid fa-envelope"></i>
                        <h4>{{ $t('email') }}: <span>{{ generalData.email }}</span></h4>
                     </div>
                     <div class="icon d-flex align-items-center gap-3">
                        <i class="fa-brands fa-whatsapp"></i>
                        <h4>{{ $t('Whatsapp') }}: <a target="_blank" :href="`https://wa.me/${generalData.whatsapp}`"
                              class="click">{{ $t('click here') }}</a></h4>
                     </div>
                  </div>
                 
               </div>

            </div>
            <div class="col-12 col-xl-7 col-lg-7 ">

               <div class="individual">

                  <form action="" @submit.prevent>
                     <div class="header">
                        <p class="first" @click="typeActive = 1" :class="{ 'active': typeActive == 1 }">{{
                           $t('individuals')
                        }}</p>
                        <span></span>
                        <p @click="typeActive = 2" :class="{ 'active': typeActive == 2 }">{{ $t('corporate') }}</p>

                     </div>
                     <div class="method">
                        <h4>{{ $t('payment method') }}</h4>
                        <div class="choose">
                           <span @click="methodActiveCorparate = 1" :class="{ 'active': methodActiveCorparate == 1 }">{{
                              $t('finance') }}</span>
                           <span @click="methodActiveCorparate = 2" :class="{ 'active': methodActiveCorparate == 2 }">{{
                              $t('cash') }}</span>
                        </div>
                     </div>
                     <div class="finance active">
                     <div class="d-flex flex-column">
                        
                        <label class="fw-bold" for="" style="color:#1b395f;">{{ $t('The selected vehicle *') }}</label>
                        <div class="inp d-flex gap-2 specia" v-for="item, index in form" :key="item">
                           <!-- <input class="bigOne" type="text" :placeholder="$t('Vehicle name')" v-model="item.car_name"> -->
                            <div class="d-flex  flex-column flex-lg-row flex-md-row justify-content-center align-items-center  justify-content-xl-start justify-content-lg-start justify-content-md-start   gap-4">
                            
                           <div class="selectdiv ">
                              <select v-model="item.car_id">
                              <option :value="null" disabled>{{ $t('Vehicle name') }}</option>
                              <option v-for="car in purchaseForm.cars" :value="car.id">{{ car.name }}</option>
                           </select>
                           </div>
                           <span class="errorMessage text-danger fw-bold " v-if="car_nameErorr">{{ car_nameErorr }}</span>
                           <input type="number" min="0" :placeholder="$t('the number')" v-model="item.count">
                           <div class="d-flex align-items-center gap-2 mb-2">
                              <i v-if="index == 0" @click="addRow()" class="fa-solid fa-plus"></i>
                              <i v-if="index >= 1" @click="removeRow(index)" class="fa-solid fa-minus"></i>
                           </div>
                            </div>

                           <div v-if="carName">
                           <span v-if="!item.car_id" class="errorMessage text-danger fw-bold " >{{ $t('carName') }}</span>
                           </div>
                        </div>
                        
                     </div>
                     
                        <!-- {{ form }} -->
                        <div class="inp">
                           <label for="">{{ $t('Company Name') }} *</label>
                           <input type="text" v-model="organization_name" :placeholder="$t('Company Name')">
                           <span class="errorMessage text-danger fw-bold " v-if="organization_nameError">{{
                              organization_nameError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('employee') }} *</label>
                           <input type="text" v-model="organization_ceo"
                              :placeholder="$t('The Chief Executive Officer (CEO)')">
                           <span class="errorMessage text-danger fw-bold " v-if="organization_ceoError">{{
                              organization_ceoError }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ $t('mobile number') }} *</label>
                           <input type="tel" v-model="phone_corporate" :placeholder="$t('mobile number')">
                           <span class="errorMessage text-danger fw-bold " v-if="phoneCorporateError">{{
                              phoneCorporateError }}</span>

                        </div>
                        <div class="inp">
                           <label for="">{{ $t('Official email') }} *</label>
                           <input type="email" v-model="organization_email" placeholder="example@mail.com">
                           <span class="errorMessage text-danger fw-bold " v-if="organization_emailError">{{
                              organization_emailError }}</span>
                        </div>

                        <!-- <div v-if="methodActiveCorparate == 1" class="inpWithRadio d-flex   gap-3">
                           <label for=""> {{$t('sector')}} *</label>
                           <div class="d-flex flex-column gap-2">
                              <div class="d-flex align-items-center gap-3">
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="sectorf1" value="private" v-model="sectorF">
                                    <label for="sectorf1">{{ $t('private') }}</label>

                                 </div>
                                 <div class="d-flex align-items-center gap-2">
                                    <input type="radio" id="sectorf2" value="governmental" v-model="sectorF" >
                                    <label for="sectorf2">{{ $t('governmental') }}</label>
                                 </div>

                                 <span class="errorMessage text-danger fw-bold " v-if="sectorErrorF">{{ sectorErrorF }}</span>
                              </div>
                          

                           </div>


                        </div>
                        <div v-if="sectorF && methodActiveCorparate == 1"  class="govern-section d-flex flex-column gap-2">
                           <div class="inp">
                           <label for="">{{ $t('id_driving') }}</label>
                           <input type="file" @change="onFileChangeF1">
                           <span class="errorMessage text-danger fw-bold " v-if="id_and_driving_licenseErrorF">{{ id_and_driving_licenseErrorF }}</span>
                        </div>
                        <div class="inp">
                           <label for="">{{ sectorF == 'governmental' ? `${$t('salary')}` : `${$t('salary_def')}` }}</label>
                           <input type="file" @change="onFileChangeF2">
                           <span class="errorMessage text-danger fw-bold " v-if="salary_identificationErrorF">{{ salary_identificationErrorF }}</span>
                        </div>

                        <div v-if="sectorF == 'private'" class="inp">
                           <label for=""> {{ $t('print') }}  </label>
                           <input type="file" @change="onFileChangeF3">
                           <span class="errorMessage text-danger fw-bold " v-if="insurance_printErrorF">{{ insurance_printErrorF }}</span>
                        </div>
                        <div v-if="sectorF == 'private'" class="inp">
                           <label for=""> {{ $t('months') }} </label>
                           <input type="file" @change="onFileChangeF4">
                           
                           <span class="errorMessage text-danger fw-bold " v-if="account_statementErrorF">{{ account_statementErrorF }}</span>
                        </div>
                        </div> -->

                        <div class="inp">
                           <label for="">{{ $t('city') }}*</label>
                           <select v-model="city_id_corporate">
                              <option :value="null" disabled>{{ $t('city') }}</option>
                              <option v-for="bank in purchaseForm.cities" :value="bank.id">{{ bank.name }}</option>
                           </select>
                           <div v-if="pending2" class="spinner-border spinner-border-sm" role="status">
                           </div>
                           <span class="errorMessage text-danger fw-bold" v-if="city_corporate_error">{{
                              city_corporate_error }}</span>
                        </div>



                        <div class="inp">
                           <label for=""> {{ $t("The company's headquarter") }} * </label>
                           <input type="text" v-model="organization_location" :placeholder="$t('city')">
                           <span class="errorMessage text-danger fw-bold" v-if="organization_locationError">{{
                              organization_locationError }}</span>

                        </div>
                        <div class="inp">
                           <label for="">{{ $t('Company activity (According to the record)') }} *</label>
                           <input type="text" v-model="organization_activity"
                              :placeholder="$t('Company activity (According to the record)')">
                           <span class="errorMessage text-danger fw-bold " v-if="organization_activityError">{{
                              organization_activityError }}</span>

                        </div>
                        <div class="inp">
                           <label for="">{{ $t('Company age') }}*</label>
                           <input type="number" min="0" :placeholder="$t('Company age...')" v-model="organization_age" name="">
                           <span class="errorMessage text-danger fw-bold " v-if="organization_ageError">{{
                              organization_ageError }}</span>

                        </div>
                          
                          
                       

                           <div class="inp">
                           <label for="">{{$t('services')}}</label>
                           <!-- <p>{{ $t('options services') }}</p> -->
                           <!-- <select id="mySelect-services" v-model="objPurchase.services" multiple>
                              <option class="my-3" v-for="box in options" :key="box.id" :value="box.id">{{ box.name }}</option>
                           </select> -->

                           <div v-for="box,index in options" class="mt-1" >
                            <div class="d-flex align-items-center gap-2 my-1">
                             <input :id="`option-cor-${index}`" type="checkbox" v-model="selectedOptions" :value="box.id">
                             <label :for="`option-cor-${index}`">{{ box.name }}</label>
                            </div>
                           </div>
                           <span class="errorMessage text-danger fw-bold " v-if="services_corporate_error">{{ services_corporate_error }}</span>
                        </div>
                         <!-- 
                        <div class="inp">
                           <label for="">{{ $t('imgCorp') }}</label>
                           <input @change="onFileChange" type="file" name="">
                           <span class="errorMessage text-danger fw-bold " v-if="bank_number_imageError">{{
                              bank_number_imageError }}</span>
                        </div> -->
                          
                        <nuxt-link v-if="methodActiveCorparate == 2" :to="localePath('/accounts')">
                           <span class="fw-bold" style="box-shadow:none; color:#1b395f; text-decoration: underline;">{{ $t('click accounts') }}</span>
                          </nuxt-link>
                       

                     </div>
                     <!-- <div class="corporate" :class="{ 'active': methodActiveCorparate == 2 }">
                        <div class="inp special" v-for="item, index in form" :key="item">
                           <label for="">{{ $t('The selected vehicle *') }}</label>
                           <input class="bigOne" type="text" :placeholder="$t('Vehicle name')" v-model="item.car_name">
                           <span class="errorMessage text-danger fw-bold " v-if="car_nameErorr">{{ car_nameErorr }}</span>
                           <input type="number" placeholder="the number" v-model="item.count">
                           <span class="errorMessage text-danger fw-bold " v-if="car_countErorr">{{ car_countErorr
                           }}</span>
                           <div class="d-flex align-items-center gap-2">
                              <i @click="addRow()" class="fa-solid fa-plus"></i>
                              <i v-if="form.length > 1" @click="removeRow()" class="fa-solid fa-minus"></i>
                           </div>

                        </div>
                        <div class="inp">
                           <label for="">{{ $t('Company Name') }} *</label>
                           <input type="text" v-model="objCorporateCash.organization_name"
                              :placeholder="$t('Company Name')">
                           <span class="errorMessage text-danger fw-bold " v-if="organization_nameError">{{
                              organization_nameError }}</span>

                        </div>
                        <div class="inp">
                           <label for="">{{ $t('Official email') }} *</label>
                           <input type="email" v-model="objCorporateCash.organization_email"
                              placeholder="example@mail.com">
                           <span class="errorMessage text-danger fw-bold " v-if="organization_emailError">{{
                              organization_emailError }}</span>

                        </div>
                        <div class="inp">
                           <label for="">{{ $t('The Chief Executive Officer (CEO)') }} *</label>
                           <input type="text" v-model="objCorporateCash.organization_ceo"
                              :placeholder="$t('The Chief Executive Officer (CEO)')">
                           <span class="errorMessage text-danger fw-bold " v-if="organization_ceoError">{{
                              organization_ceoError }}</span>

                        </div>
                        <div class="inp">
                           <label for="">{{ $t('mobile number') }} *</label>
                           <input type="text" v-model="objCorporateCash.phone" placeholder="05xxxxxxxx...">
                           <span class="errorMessage text-danger fw-bold " v-if="phoneCorporateError">{{
                              phoneCorporateError }}</span>
                        </div>
                     </div> -->
                  </form>
                  <button :disabled="isLoading2" class="d-flex align-items-center justify-content-center gap-3" type="" @click="sendCorporate()">
                     <span>{{ $t('send') }}</span>
                     <div v-if="spinnerBtn2" class="spinner-border text-light" role="status">
                     </div>
                  </button>


               </div>
            </div>

         </div>
      </div>
   
   </div>
</template>

<script setup>

import axios from 'axios';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
// import VSelect from "vue-select-picker-bootstrap";

const { locale } = useI18n();
let lang = ref(locale);
const localePath = useLocalePath();
let spinnerBtn = ref(false);
let spinnerBtn2 = ref(false);
let methodActive = ref(1);
let methodActiveCorparate = ref(1);
let typeActive = ref(1);
const route = useRoute();
let isLoading = ref(false);
let isLoading2 = ref(false);
let url = getUrl();
let id = route.query.id ? route.query.id : 1;
let maincolorId = route.query.colorId ? route.query.colorId : 1;
let pending = ref(false);
let checkFinance = ref(null);

let purchaseForm = ref([]);
let mainCar = ref([]);
let generalData = ref([]);

let pending2 = ref(false);




   


const options = ref([]);
const carsgeneral = async () => {
   const general = await axios.get(`${url}/general`, {
      headers: {
         'Content-Language': `${lang.value}`
      }
   });
   
   generalData.value = general.data;
}
const carAndPurchaseFunc = async () => {
   pending2.value = true;
   const purchase = await axios(`${url}/purchase-form-info`, {
      headers: {
         'Content-Language': `${lang.value}`
      }
   });

   if (purchase.status == 200) {
      pending2.value = false;
   }
 
   purchaseForm.value = purchase.data;
   options.value = purchase.data.services;
 
}
const carDetail = async () => {
      pending.value = true;
   const car = await axios.get(`${url}/cars`, {
      headers: {
         'Content-Language': `${lang.value}`
      }
   });
      if (car.status == 200) {
      pending.value = false;
   }
     let theCar = car.data.data.filter((boxx) => {
      return boxx.id == id;
   });
   if (process.client) {
      let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
      console.log(favGet);
      for (let i = 0; i < theCar.length; i++) {
         theCar[i].is_in_favorite = favGet.find((element) => element.id == theCar[i].id) != undefined;
      }
   }
   mainCar.value = theCar[0];
   console.log(theCar[0]);  
}

onMounted(() => {
   carAndPurchaseFunc();
   carsgeneral();
   carDetail();
});

let addedList = ref('added to wishlist');
let removedList = ref('removed from wishlist')
if (lang.value == 'ar') {
   addedList.value = 'تم الاضافة الي قائمة المفضلات'
   removedList.value = 'تم الحذف من قائمة المفضلات'
} else if (lang.value == 'en') {
   addedList.value = 'added to wishlist'
   removedList.value = 'removed from wishlist';
}

const addToFav = async () => {
   let box = mainCar.value;
   if (process.client) {
      let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
      let favChoose = favGet.find((boxi) => boxi.name == box.name);

      // console.log(favGet);

      mainCar.value.is_in_favorite = !mainCar.value.is_in_favorite;
      if (!favChoose) {
         //fav.value.push(box)
         favGet.push(box);
         if (mainCar.value.is_in_favorite == true) {
            createToast({
               title: addedList.value,
            },
               {
                  timeout: 3000,
                  toastBackgroundColor: '#1B395F',
                  showIcon: true,
                  type: 'success',
                  transition: 'bounce',
               })

            sessionStorage.setItem('thefav', JSON.stringify(favGet));
         }

      } else {
         let final = favGet.filter((ele) => {
            return ele.id != box.id;
         });

         createToast({
            title: removedList.value,
         },
            {
               timeout: 3000,
               toastBackgroundColor: '#1B395F',
               showIcon: true,
               type: 'danger',
               transition: 'bounce',
            })

         sessionStorage.setItem('thefav', JSON.stringify(final));
         if (final.length < 1) {
            // window.location.reload();
            sessionStorage.removeItem("thefav");
            // fav.value = [];

         }
      }



   }



}


let completed = ref('Payment completed successfully');
let success = ref('success');
if (lang.value == 'ar') {
   completed.value = 'تم تأكيد طلبك بنجاح';
   success.value = 'نجاح';
} else if (lang.value == 'en') {
   completed.value = 'Your order has been confirmed successfully';
   success.value = 'success';
}



let form = ref([
   { car_id: 0, count: 0 }
])

const addRow = () => {
   form.value.push({ car_id: 0, count: 0 });
   console.log(form.value);
}

const removeRow = (index) => {
   if (form.value.length > 1) {
      form.value.splice(index, 1);
   }
   console.log(form.value);
}




let objPurchase = ref({
   payment_type: 'finance',
   car_id: id,
   color_id: maincolorId,
   name: '',
   phone: '',
   age: '',
   having_personal_loan: '',
   finance_duration: '',
   financing_community: '',
   salary: '',
   commitments: '',
   having_loan: '',
   city_id: '',
   work: '',
   services: [],
   bank_id: '',
   sector:'',
   account_statement:'',
   id_and_driving_license:'',
   salary_identification:'',
   insurance_print:'',
   funding_organization_id:'',
   funding_bank_id:'',
   funding_organization_type:'',


});

// let funding_organization_id = ref('');


let objCash = ref({
   payment_type: 'cash',
   car_id: id,
   color_id: maincolorId,
   name: '',
   phone: '',
   city_id: '',
   bank_id: '',
   services: [],
   sector:'',
   account_statement:'',
   id_and_driving_license:'',
   salary_identification:'',
   insurance_print:''

})




let nameError = ref(null);
let phoneError = ref(null);
let cityError = ref(null);
let salaryError = ref(null);
let commitmentsError = ref(null);
let workError = ref(null);
let bankError = ref(null);
let ageError = ref(null);
let finance_duration_error = ref(null);
let financing_community_error = ref(null);
let having_loanError = ref(null);
let having_loan_personal_error = ref(null);
let nameCashError = ref(null);
let phoneCashError = ref(null);
let servicesCashError = ref(null);
let servicesError = ref(null);
let cityCashError = ref(null);

let account_statementError = ref(null);
let id_and_driving_licenseError = ref(null);
let salary_identificationError = ref(null);
let insurance_printError = ref(null);
let sectorError = ref(null);
let funding_organization_idError = ref(null);
let funding_bank_idError = ref(null);
let funding_organization_typeError = ref(null);




const onFileChange1 = (e) => {
   var files = e.target.files || e.dataTransfer.files;
   if (!files.length)
      return;
      objPurchase.value.id_and_driving_license = (files[0]);
}
const onFileChange2 = (e) => {
   var files = e.target.files || e.dataTransfer.files;
   if (!files.length)
      return;
      objPurchase.value.salary_identification = (files[0]);
}
const onFileChange3 = (e) => {
   var files = e.target.files || e.dataTransfer.files;
   if (!files.length)
      return;
      objPurchase.value.insurance_print = (files[0]);
}
const onFileChange4 = (e) => {
   var files = e.target.files || e.dataTransfer.files;
   if (!files.length)
      return;
      objPurchase.value.account_statement = (files[0]);
}

const sendIndividual = async () => {
   spinnerBtn.value = true;
   isLoading.value = true;
   let formData = new FormData();
   formData.append("payment_type",'finance');
      formData.append("car_id", objPurchase.value.car_id);
      formData.append("color_id", objPurchase.value.color_id);
      formData.append("phone", objPurchase.value.phone);
      formData.append("name", objPurchase.value.name);
      formData.append("age", objPurchase.value.age);
      formData.append("having_personal_loan", objPurchase.value.having_personal_loan);
      formData.append("finance_duration", objPurchase.value.finance_duration);
      formData.append("financing_community", objPurchase.value.financing_community);
      formData.append("salary", objPurchase.value.salary);
      formData.append("commitments", objPurchase.value.commitments);
      formData.append("having_loan", objPurchase.value.having_loan);
      formData.append("city_id", objPurchase.value.city_id);
      formData.append("work", objPurchase.value.work);
      formData.append("bank_id", objPurchase.value.bank_id);
      formData.append("sector", objPurchase.value.sector);
      formData.append("id_and_driving_license", objPurchase.value.id_and_driving_license);
      formData.append("salary_identification", objPurchase.value.salary_identification);
      formData.append("insurance_print", objPurchase.value.insurance_print);
      formData.append("account_statement", objPurchase.value.account_statement);
      formData.append("funding_organization_type", objPurchase.value.funding_organization_type);
      if(objPurchase.value.funding_organization_type == 'company'){
         formData.append("funding_organization_id", objPurchase.value.funding_organization_id);
      }
      if(objPurchase.value.funding_organization_type == 'bank'){
         formData.append("funding_bank_id", objPurchase.value.funding_bank_id);
      }
      for (var i = 0; i < objPurchase.value.services.length; i++) { 
      formData.append("services[]", objPurchase.value.services[i]);
   }

   let result = fetch(`${url}/individuals-orders`, {
      method: 'post',
      headers: {
         // 'Accept': 'application/json',
         // 'Content-Type': 'application/json',
         'Content-Language': `${lang.value}`
      },
      body: formData,
   }).then((response) => response.json())
      .then((json) => {
         console.log(json);
         spinnerBtn.value = false;
         isLoading.value = false;
         if (json.message) {
            phoneError.value = json.errors.phone == undefined ? null : json.errors.phone[0];
            nameError.value = json.errors.name == undefined ? null : json.errors.name[0];
            salaryError.value = json.errors.salary == undefined ? null : json.errors.salary[0];
            commitmentsError.value = json.errors.commitments == undefined ? null : json.errors.commitments[0];
            having_loanError.value = json.errors.having_loan == undefined ? null : json.errors.having_loan[0];
            cityError.value = json.errors.city_id == undefined ? null : json.errors.city_id[0];
            having_loan_personal_error.value = json.errors.having_personal_loan == undefined ? null : json.errors.having_personal_loan[0];
            workError.value = json.errors.work == undefined ? null : json.errors.work[0];
            financing_community_error.value = json.errors.financing_community == undefined ? null : json.errors.financing_community[0];
            finance_duration_error.value = json.errors.finance_duration == undefined ? null : json.errors.finance_duration[0];
            ageError.value = json.errors.age == undefined ? null : json.errors.age[0];
            bankError.value = json.errors.bank_id == undefined ? null : json.errors.bank_id[0];
            servicesCashError.value = json.errors.services == undefined ? null : json.errors.services[0];
            servicesError.value = json.errors.services == undefined ? null : json.errors.services[0];
            account_statementError.value = json.errors.account_statement == undefined ? null : json.errors.account_statement[0];
            id_and_driving_licenseError.value = json.errors.id_and_driving_license == undefined ? null : json.errors.id_and_driving_license[0];
            salary_identificationError.value = json.errors.salary_identification == undefined ? null : json.errors.salary_identification[0];
            insurance_printError.value = json.errors.insurance_print == undefined ? null : json.errors.insurance_print[0];
            sectorError.value = json.errors.sector == undefined ? null : json.errors.sector[0];
            funding_organization_idError.value = json.errors.funding_organization_id == undefined ? null : json.errors.funding_organization_id[0];
            funding_bank_idError.value = json.errors.funding_bank_id == undefined ? null : json.errors.funding_bank_id[0];
            funding_organization_typeError.value = json.errors.funding_organization_type == undefined ? null : json.errors.funding_organization_type[0];
         } else {
           
            nameError.value = null;
            salaryError.value = null;
            commitmentsError.value = null;
            phoneError.value = null;
            servicesCashError.value = null;
            servicesError.value = null;
            having_loanError.value = null;
            cityError.value = null;
            workError.value = null;
            bankError.value = null;
            ageError.value = null;
            sectorError.value = null
            account_statementError.value = null
            id_and_driving_licenseError.value = null
            salary_identificationError.value = null
            insurance_printError.value = null
            financing_community_error.value = null;
            having_loan_personal_error.value = null;
            finance_duration_error.value = null;
            funding_organization_idError.value = null;
            funding_bank_idError.value = null;
            funding_organization_typeError.value = null;
            createToast({
               title: completed.value,
            },
               {
                  timeout: 4000,
                  toastBackgroundColor: '#1B395F',
                  showIcon: 'true',
                  type: 'success',
                  transition: 'bounce',
               })

         }




      });
}

const sendCash = async () =>{
   spinnerBtn.value = true;
   isLoading.value = true;
   let formData = new FormData();
   formData.append("payment_type",'cash');
      formData.append("car_id", objCash.value.car_id);
      formData.append("color_id", objCash.value.color_id);
      formData.append("phone", objCash.value.phone);
      formData.append("name", objCash.value.name);
      formData.append("city_id", objCash.value.city_id);
      for (var i = 0; i < objCash.value.services.length; i++) { 
      formData.append("services[]", objCash.value.services[i]);
   }

   let result = fetch(`${url}/individuals-orders`, {
      method: 'post',
      headers: {
         // 'Accept': 'application/json',
         // 'Content-Type': 'application/json',
         'Content-Language': `${lang.value}`
      },
      body: formData,
   }).then((response) => response.json())
      .then((json) => {
         console.log(json);
         spinnerBtn.value = false;
         isLoading.value = false;
         if (json.message) {
               phoneCashError.value = json.errors.phone == undefined ? null : json.errors.phone[0];
               nameCashError.value = json.errors.name == undefined ? null : json.errors.name[0];
               cityCashError.value = json.errors.city_id == undefined ? null : json.errors.city_id[0];
         } else {
          
            phoneCashError.value = null;
            nameCashError.value = null;
            cityCashError.value = null;
      
            createToast({
               title: completed.value,
            },
               {
                  timeout: 4000,
                  toastBackgroundColor: '#1B395F',
                  showIcon: 'true',
                  type: 'success',
                  transition: 'bounce',
               })

         }




      });
}


// let objCorporateFinance = ref({
//    payment_type: methodActiveCorparate.value == 1 ? 'finance' : 'cash',
//    cars: form.value,
//    bank_id: null,
//    organization_activity: null,
//    organization_name: null,
//    organization_age: null,
//    organization_ceo: null,
//    organization_email: null,
//    organization_location: null,
//    organization_location: null,
//    phone: null
// });








// let objCorporateCash = ref({
//    payment_type: 'cash',
//    cars: form.value,
//    organization_ceo: null,
//    organization_email: null,
//    organization_name: null,
//    phone: null

// });

let organization_name = ref('');
let organization_ceo = ref('');
let phone_corporate = ref('');
let organization_email = ref('');
let city_id_corporate = ref('');
let organization_location = ref('');
let organization_activity = ref('');
let organization_age = ref('');
let bank_number_image = ref('');
let selectedOptions = ref([]);

let account_statementF = ref('');
let id_and_driving_licenseF = ref('');
let salary_identificationF = ref('');
let insurance_printF = ref('');
let sectorF = ref('');

let organization_activityError = ref(null);
let organization_ageError = ref(null);
let organization_ceoError = ref(null);
let organization_emailError = ref(null);
let organization_locationError = ref(null);
let organization_nameError = ref(null);
let bankCorporateError = ref(null);
let phoneCorporateError = ref(null);
let bank_number_imageError = ref(null);
let city_corporate_error = ref(null);
let services_corporate_error = ref(null);

let account_statementErrorF = ref(null);
let id_and_driving_licenseErrorF = ref(null);
let salary_identificationErrorF = ref(null);
let insurance_printErrorF = ref(null);
let sectorErrorF = ref(null);
let car_nameErorr = ref(null);
let carName = ref(false);

// const onFileChangeF1 = (e) => {
//    var files = e.target.files || e.dataTransfer.files;
//    if (!files.length)
//       return;
//       id_and_driving_licenseF.value = (files[0]);
// }
// const onFileChangeF2 = (e) => {
//    var files = e.target.files || e.dataTransfer.files;
//    if (!files.length)
//       return;
//       salary_identificationF.value = (files[0]);
// }
// const onFileChangeF3 = (e) => {
//    var files = e.target.files || e.dataTransfer.files;
//    if (!files.length)
//       return;
//       insurance_printF.value = (files[0]);
// }
// const onFileChangeF4 = (e) => {
//    var files = e.target.files || e.dataTransfer.files;
//    if (!files.length)
//       return;
//       account_statementF.value = (files[0]);
// }


// const onFileChange = (e) => {
//    var files = e.target.files || e.dataTransfer.files;
//    if (!files.length)
//       return;
//       bank_number_image.value = (files[0]);
// }

const sendCorporate = async () => {
   spinnerBtn2.value = true;
   isLoading2.value = true;
   let formData = new FormData();
   formData.append("payment_type", methodActiveCorparate.value == 1 ? 'finance' : 'cash');
   formData.append("organization_name", organization_name.value);
   formData.append("phone", phone_corporate.value);
   formData.append("organization_ceo", organization_ceo.value);
   formData.append("organization_email", organization_email.value);
   formData.append("city_id", city_id_corporate.value);
   formData.append("organization_location", organization_location.value);
   formData.append("organization_activity", organization_activity.value);
   formData.append("organization_age", organization_age.value);
   formData.append("bank_number_image", bank_number_image.value);
   // formData.append("cars", JSON.stringify(form.value));
   if(process.client){
      form.value.forEach((obj, index) => {
        Object.entries(obj).forEach(([key, value]) => {
          formData.append(`cars[${index}][${key}]`, value );
        });
      });
   }
   if( methodActiveCorparate.value == 1){
      // formData.append("sector", sectorF.value);
      // formData.append("id_and_driving_license",id_and_driving_licenseF.value);
      // formData.append("salary_identification", salary_identificationF.value);
      // formData.append("insurance_print", insurance_printF.value);
      // formData.append("account_statement", account_statementF.value);
   }
   for (var i = 0; i < selectedOptions.value.length; i++) { 
      formData.append("services[]", selectedOptions.value[i]);
   }
   
   let result = fetch(`${url}/corporates-orders`, {
      method: 'post',
      headers: {
         // 'Accept': 'application/json',
         // 'Content-Type': 'application/json',
         'Content-Language': `${lang.value}`
      },
      body: formData,
   }).then((response) => response.json())
      .then((json) => {
         console.log(json);
         isLoading2.value = false;
         spinnerBtn2.value = false;
         if (json.message) {
            organization_activityError.value = json.errors.organization_activity == undefined ? null : json.errors.organization_activity[0];
            organization_ageError.value = json.errors.organization_age == undefined ? null : json.errors.organization_age[0];
            organization_ceoError.value = json.errors.organization_ceo == undefined ? null : json.errors.organization_ceo[0];
            organization_emailError.value = json.errors.organization_email == undefined ? null : json.errors.organization_email[0];
            organization_locationError.value = json.errors.organization_location == undefined ? null : json.errors.organization_location[0];
            organization_nameError.value = json.errors.organization_name == undefined ? null : json.errors.organization_name[0];
            phoneCorporateError.value = json.errors.phone == undefined ? null : json.errors.phone[0];
            city_corporate_error.value = json.errors.city_id == undefined ? null : json.errors.city_id[0];
            services_corporate_error.value = json.errors.services == undefined ? null : json.errors.services[0];
            bank_number_imageError.value = json.errors.bank_number_image == undefined ? null : json.errors.bank_number_image[0];
            sectorErrorF.value = json.errors.sector == undefined ? null : json.errors.sector[0];
            insurance_printErrorF.value = json.errors.insurance_print == undefined ? null : json.errors.insurance_print[0];
            salary_identificationErrorF.value = json.errors.salary_identification == undefined ? null : json.errors.salary_identification[0];
            id_and_driving_licenseErrorF.value = json.errors.id_and_driving_license == undefined ? null : json.errors.id_and_driving_license[0];
            account_statementErrorF.value = json.errors.account_statement == undefined ? null : json.errors.account_statement[0];
            // car_nameErorr.value = json.errors.cars_0_car_id[0] == undefined ? null : json.errors.cars_0_car_id[0];
            carName.value = true;
         } else {
            // if (methodActiveCorparate.value == 1) {
            //    objCorporateFinance.value = '';
            // } else if (methodActiveCorparate.value == 2) {
            //    objCorporateCash.value = ''
            // }

            organization_activityError.value = null;
            organization_ageError.value = null;
            organization_ceoError.value = null;
            organization_emailError.value = null;
            organization_nameError.value = null;
            bankCorporateError.value = null;
            phoneCorporateError.value = null;
            phoneCorporateError.value = null;
            bank_number_imageError.value = null;
            city_corporate_error.value = null;
            services_corporate_error.value = null;
            account_statementErrorF.value = null;
            id_and_driving_licenseErrorF.value = null;
            salary_identificationErrorF.value= null;
            insurance_printErrorF.value  = null;
            sectorErrorF.value  = null;

            createToast({
               title: completed.value,
            },
               {
                  timeout: 4000,
                  toastBackgroundColor: '#1B395F',
                  showIcon: 'true',
                  type: 'success',
                  transition: 'bounce',
               });



         }




      });
}

</script>

<style lang="scss"></style>