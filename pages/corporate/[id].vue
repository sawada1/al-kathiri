<template>
    <div>
          <div class="purchasee container">
           <div class="row">
             <div class="col-12 col-xl-7 col-lg-7 ">
                <h3 class="head">PURCHASE ORDER</h3>
                <div class="individual">
                 
                  <form  action="" @submit.prevent>
                   <div class="header">
                    <nuxt-link :to="`/purchase/individuals/${mainCar.id}`">
                    <p class="first" @click="typeActive = 1" :class="{'active': typeActive == 1}">individuals</p>                   
                   </nuxt-link>
                   <nuxt-link :to="`/corporate/${mainCar.id}`">
                    <p @click="typeActive = 2" :class="{'active': typeActive == 2}">corporate</p>                   
                   </nuxt-link>
                  </div>
                     <div class="method">
                        <h4>payment method</h4>
                         <div class="choose">
                             <span @click="methodActive = 1" :class="{'active':methodActive == 1}">finance</span>
                             <span @click="methodActive = 2" :class="{'active':methodActive == 2}">cash</span>
                         </div>
                     </div>
                     <div class="finance" :class="{'active':methodActive == 1}">
                        <div class="inp special" v-for="item,index in form" :key="item">
                        <label for="">The selected vehicle *</label>
                        <input class="bigOne" type="text" placeholder="Vehicle name" v-model="item.name">
                        <input type="number" placeholder="the number" v-model="item.price">
                        <div class="d-flex align-items-center gap-2">
                        <i @click="addRow()" class="fa-solid fa-plus"></i>
                       <i v-if="form.length > 1" @click="removeRow()" class="fa-solid fa-minus"></i>
                        </div>
                     </div>
                     <div class="inp">
                        <label for="">Company Name *</label>
                        <input type="text" placeholder="Company Name..">
                     </div>
                     <div class="inp">
                        <label for="">Official email *</label>
                        <input type="text" placeholder="example@mail.com">
                     </div>
                     <div class="inp">
                        <label for="">The Chief Executive Officer (CEO) *</label>
                        <input type="text" placeholder="The Chief Executive Officer (CEO) ...">
                     </div>
                     <div class="inp">
                        <label for="">Mobile number *</label>
                        <input type="text" placeholder="05xxxxxxxx...">
                     </div>
                     <div class="inp">
                        <label for="">The company's headquarter* </label>
                        <input type="text" placeholder="city...">
                     </div>
                        <div class="inp">
                        <label for="">Company activity (According to the record) *</label>
                        <select>
                            <option value="">Company activity (According to the record)</option>
                        </select>
                     </div>
                     <div class="inp">
                        <label for="">Company age *</label>
                         <input type="number" name="" value="0">
                     </div>

                      <div class="inp">
                        <label for="">Bank account*</label>
                        <select>
                            <option value="">select bank..</option>
                        </select>
                     </div>
                   
                     </div>
                     <div class="corporate" :class="{'active':methodActive == 2}" >
                       <div class="inp special">
                        <label for="">The selected vehicle *</label>
                        <input class="bigOne" type="text" placeholder="Vehicle name" >
                        <input type="text" placeholder="the number">
                       <i class="fa-solid fa-plus"></i>
                     </div>
                     <div class="inp">
                        <label for="">Company Name *</label>
                        <input type="text" placeholder="Company Name..">
                     </div>
                     <div class="inp">
                        <label for="">Official email *</label>
                        <input type="text" placeholder="example@mail.com">
                     </div>
                     <div class="inp">
                        <label for="">The Chief Executive Officer (CEO) *</label>
                        <input type="text" placeholder="The Chief Executive Officer (CEO) ...">
                     </div>
                     <div class="inp">
                        <label for="">Mobile number *</label>
                        <input type="text" placeholder="05xxxxxxxx...">
                     </div>
                     </div>
                      <button type="" @click="sendCorporate()">send</button>
                  </form>
                  
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
                    <h4>mobile number: <span>05000000</span></h4>
                  </div>
                  <div class="icon d-flex align-items-center gap-3">
                   <i class="fa-solid fa-envelope"></i>
                      <h4>email: <span> example@mail.com</span></h4>
                  </div>
                  <div class="icon d-flex align-items-center gap-3">
                <i class="fa-brands fa-whatsapp"></i>
                <h4>Whatsapp: <span class="click">click here</span></h4>
                  </div>
                 </div>
                 <p class="text">
                  Or please fill the form below: You will receive 
                  a reply within a maximum of 24 hours.
                 </p>
             </div>
           </div>
       </div>
  
    </div>
</template>

<script setup>
let url = getUrl();
let { id } = useRoute().params;
const { data: car } = await useFetch(`${url}/cars/${id}`);
const mainCar = ref(car.value.data);
let methodActive = ref(1);
let typeActive = ref(2);
    const form = ref([
      { name : '', price: 0}
    ])

    const addRow = () => {
       form.value.push({ name: '', price: 0 });
       console.log(form.value);
    }

    const removeRow = (index) =>{
      if(form.value.length > 1){
         form.value.splice(index, 1);
       }
       console.log(form.value);
    }

    const saveItem = () =>{
      axios.post('items',form).then(res=>{
        console.log(res);
      })
}

let objContact = ref({
   payment_type: '',
   cars:form.value
   
})
const sendCorporate = async () => {
     const result = await fetch(`${url}/corporates-orders`, {
    method: 'POST',
    headers: {
     
    },
    body:JSON.stringify(objContact.value),

  }).then((response) => response.json())
    .then((json) => {
      console.log(json);
     
    

      
    });

}  
</script>

<style lang="scss">


</style>