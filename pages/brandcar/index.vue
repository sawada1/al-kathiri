<template>
    <div>
        <div class="brandCars">
   <div class="container p-2">
     <div class="row p-2 gap-4">
        <div class="col-12 col-xl-3 col-lg-3 col-md-12 d-flex flex-column align-items-center">
        <div class="filter d-flex align-items-center justify-content-between w-100">
            <h5>{{ $t('filter') }}</h5>
            <span @click="reset()">{{ $t('reset') }}</span>
        </div>
    
          <div class="rangeSlider">

     <div class="mainprocess">
            <span></span>
        </div>
        <div class="rangeGroups">
          <input type="range" class="range-min" min="222000" max="870000" value="222000" step="100">
        <input type="range" class="range-max" min="222000" max="870000" value="870000" step="100">
        </div>
        <div class="inputs w-100 d-flex align-items-center justify-content-between">
         <span>{{ minNum }} sar</span>
         <span>{{ maxNum }} sar</span>
        </div>
    </div>

   
          

    <div  class="accordion" id="accordionExample">
      <div class="accordion-item mainItem">
    <h2 class="accordion-header">
         <button class="accordion-button collapsed  mainbtnacc" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecars" aria-expanded="true" aria-controls="collapseOne">
     <span class="theHead"> {{ $t('cars') }} </span>
      </button>
    </h2>
    <div id="collapsecars" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <div class="checksCars">
     <div class="inp" v-for="box,index in filterData.brands">
      <input :id="`label${index}`" type="checkbox" :checked="mainId == box.id" v-model="checkMain" :value="box.id" >
      <label :for="`label${index}`" class="d-flex align-items-center gap-2">
      <img :src="box.image" alt="">
      <span>{{ box.name }}</span>
      </label>
      
      
     </div>
    </div>
      </div>
    </div>
    
  </div>
  <div class="accordion-item mainItem">
    <h2 class="accordion-header">
      <button class="accordion-button  d-flex align-items-center gap-5  mainbtnacc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <span class="theHead"> {{ $t('mark & model') }} </span>
      </button>
    </h2>
    <div v-if="checkMain.length >= 1"  id="collapseOne" class="accordion-collapse collapse" :class="{'show':index==0}" data-bs-parent="#accordionExample">
      <div  class="accordion-body">
     <div class="accordion" id="accordionbranch1">
  <div v-for="item,index in checkMain" class="accordion-item mainbranch w-100">
  <div v-for="boxi in filterData.brands[item - 1].parent_models">
   <div class="accordion-header w-100">
      <button class="accordion-button  d-flex align-items-center gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnebranch1" aria-expanded="true" aria-controls="collapseOne">
        <input type="checkbox" v-model="models" :value="boxi.id">
        <span style="white-space: nowrap;">{{ boxi.name }}</span>
      </button>
    </div>
   
    <div id="collapseOnebranch1" class="accordion-collapse collapse show" data-bs-parent="#accordionbranch1">
      <div class="accordion-body ">
         <div class="checks d-flex flex-column gap-3">
            <div v-for="box in boxi.sub_models" class="inp d-flex align-items-center gap-3 p-2">
            <input type="checkbox" v-model="subModels" :value="box.id">
            <span>{{ box.name }}</span>
            </div>
             
        
         </div>
      </div>
    </div>
  </div>
   
  </div>
 
</div>
      </div>
    </div>
    <div v-else class="fw-bold text-center my-2">{{ $t('you have to choose a brand') }}</div>
  </div>
 
  <div class="accordion-item mainItem">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed mainbtnacc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
     <span class="theHead"> {{ $t('car type') }} </span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body d-flex flex-column gap-2">
         <div class="inp d-flex align-items-center gap-2">
          <input id="hatchback" type="radio" v-model="checkType" value="hatchback">
          <label for="hatchback">hatchback</label>
         </div>
         <div class="inp d-flex align-items-center gap-2">
          <input id="sedan" type="radio" v-model="checkType" value="sedan">
          <label for="sedan">sedan</label>
         </div>
         <div class="inp d-flex align-items-center gap-2">
          <input id="4_by_4" type="radio" v-model="checkType" value="4_by_4">
          <label for="4_by_4">4_by_4</label>
         </div>
         <div class="inp d-flex align-items-center gap-2">
          <input id="family" type="radio" v-model="checkType" value="family">
          <label for="family">family</label>
         </div>
         <div class="inp d-flex align-items-center gap-2">
          <input id="commercial" type="radio" v-model="checkType" value="commercial">
          <label for="commercial">commercial</label>
         </div>
      </div>
    </div>
  </div>
</div>

<button @click="showCars()" class="my-3">{{ $t('apply') }}</button>
        </div>
           <div class="col-12 col-xl-8 col-lg-8 col-md-12 ">
           <div v-if="checkMain.length >= 1">
            <h2 v-if="checkMain.length >= 1" v-for="item,index in checkMain" class="fw-bolder py-1">
             <span  v-for="mainTitle in filterData.brands[item - 1].name">{{ mainTitle }}</span>,
            </h2>
           </div>
           
            <h2 v-else class="fw-bolder">
              {{ $t('all cars') }}
            </h2>
                  <div class="row justify-content-between ">
              <div v-for="car in brandCars" style="cursor: pointer;" @click="goToCarPage(car.id , car.name)" class="mainlatestbox col-xl-3 col-lg-3 col-md-5 ">
                <div  class="image">
                    <img :src="car.main_image" alt="">
                </div>
               
                <h3>{{ car.name }}</h3>
                <div class="text1">
                    <div class="price">
                        <span>{{ $t('price') }}</span>
                        <h4>{{ car.selling_price }} SAR</h4>
                    </div>
                    <div class="after">
                        <span>{{ $t('after vat') }}</span>
                        <h4>{{car.selling_price_after_vat}} SAR</h4>
                    </div>
                </div>
                 <p class="detail">
                 {{$t('details')}}
                  <i class="fa-solid fa-chevron-right"></i>
                 </p>
                 <div class="overlay"></div>
               
              <i @click="addToFav(car)" class="fa-regular fa-heart fav"></i>
             </div>
            

      
               </div>  
              <div v-if="spinner" class="d-flex align-items-center justify-content-center">
         <div class="spinner-border text-center" style="width: 5rem; height: 5rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                   </div>
          

            </div>
       
     </div>
  </div>
</div>

    </div>
</template>

<script setup>
import axios from 'axios'
const route = useRoute();
const router = useRouter();
const mainId = route.query.id ? route.query.id : null;
const mainType = route.query.type ? route.query.type : null;
const mainModel = route.query.model ? route.query.model : null;
console.log(mainId);
console.log(mainType);
console.log(mainModel);
let checkType = ref(mainType ? mainType : null);
const localePath = useLocalePath();
let url = getUrl();
const { locale} = useI18n();
 let currentLang = ref(locale);
let spinner = ref(true);

let  filterCar  = await axios.get(`${url}/cars-filter-data`,{
      headers: {
    'Content-Language':`${currentLang.value}`
  }
});
let brandCars = ref([]);
let models = ref(mainModel ? [mainModel] : []);
let subModels = ref([]); 
let filterData = ref(filterCar.data);
console.log(filterData.data);
const checkMain = ref(mainId ? [mainId] : []);

let minNum = ref(filterData.value.minPrice);
let maxNum = ref(filterData.value.maxPrice);
const rangeSlider = () => {
  if (process.client) {
      let rangeInputs = document.querySelectorAll('.rangeGroups input');
let proceess = document.querySelector('.mainprocess span');
let inputs = document.querySelectorAll('.inputs-groups .inp input');



rangeInputs.forEach((e) => {
    e.addEventListener('input', (ele) => {
        let minPrice = parseInt(rangeInputs[0].value),
            maxPrice = parseInt(rangeInputs[1].value);
        console.log(minPrice, maxPrice);
        console.log((minPrice / rangeInputs[0].max) * 100 + "%");
        console.log((maxPrice / rangeInputs[0].max) * 100 + "%");
        if ((maxPrice - minPrice) < 100000) {
            if (ele.target.className === 'range-min') {
                rangeInputs[0].value = maxPrice - 100000;
            } else {
                rangeInputs[1].value = minPrice + 100000;
            }
        } else {
            // proceess.style.left = (minPrice / rangeInputs[0].max) * 100 + "%";
            // proceess.style.right = 100 - (maxPrice / rangeInputs[1]) * 100 + "%";
            minNum.value = minPrice;
            maxNum.value = maxPrice;
        }
    })
});



    }
}

 const goToCarPage = (id , name) => {
      const queryParams = {
        id: id,
        name: name,
      }
         let url = currentLang.value + '/car'

      router.push({ path:`/${url}` , query: queryParams })
    }

   let fav = ref([]); 
    let sweetGoodJob = '';
    let sweetAdded = '';
    let sweetsuccess = '';
    let sweetdeleted = '';
    let sweetfiledel =  '';
    let sweetWarning1 = '';
    let sweetWarning2 = '';
    if (currentLang.value == 'en') {
     sweetGoodJob = 'Good job!';
     sweetAdded = 'You added to the favourite list';
     sweetsuccess = 'success';
     sweetdeleted = 'Deleted!';
     sweetfiledel =  'Your file has been deleted';
     sweetWarning1 = 'this is already in your favourite list Are you sure to delete it?';
     sweetWarning2 = 'Yes, delete it!';
    } else if (currentLang.value == 'ar') {
     sweetGoodJob = 'أحسنت!';
     sweetAdded = 'أضفت إلى قائمة المفضلة';
     sweetsuccess = 'نجاح';
     sweetdeleted = 'تم الحذف!';
     sweetfiledel =  'تم الحذف';
     sweetWarning1 = 'هذا موجود بالفعل في قائمة المفضلة لديك هل أنت متأكد من حذفه؟';
     sweetWarning2 = 'نعم ، احذفها!';
}
    
    const addToFav = (box) => {
      if (process.client) {
   let favGet = JSON.parse(sessionStorage.getItem('thefav'))? JSON.parse(sessionStorage.getItem('thefav')) : [];
      // let favChoose = favGet.find((boxi) => boxi.name == box.name);
        let favChoose = favGet ? favGet.filter((ele) => {
          return ele.id == box.id;
      }) : [];
      console.log(favChoose);
      // console.log(favGet);
        
         
        if (favChoose.length < 1) {
        box.is_in_favorite = !box.is_in_favorite;
      fav.value.push(box)       
        sessionStorage.setItem('thefav', JSON.stringify(fav.value));
          // console.log(box);
          Swal.fire(
              sweetGoodJob,
            sweetAdded,
             'success'
              
              
            )          
        } else  {
                Swal.fire({
                  title:sweetWarning1,
                  icon:'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText:sweetWarning2
                }).then((result) => {
                  // dismiss != 'overlay'
                  console.log(result);
                  if (result.value == true) {
                     let final =   favGet.filter((ele) => {
                    return ele.id != box.id;
                     });
                  fav.value = [];
                   
                 sessionStorage.setItem('thefav', JSON.stringify(final));
                    if (final.length < 1) {
                      // window.location.reload();
                      sessionStorage.removeItem("thefav");
                      // fav.value = [];

                    }
                  console.log(final);
                    Swal.fire(
                      sweetdeleted,
                      sweetfiledel,
                      'success'
                    )
                  }
                })
              }
           
        
      }
  

      
    }



const showCars = async () => {
  spinner.value = true;
  let result = await axios.get(`${url}/cars`, {
    params: {
      brands:checkMain.value,
      min_price:minNum.value,
      max_price: maxNum.value,
      models: models.value,
      sub_models: subModels.value,
      type: checkType.value ? checkType.value : ''
    },
      headers: {
    'Content-Language':`${currentLang.value}`
   }
  });
  brandCars.value = result.data.data;
  if (result.status == 200) {
    spinner.value = false;
  }
  console.log(result.data); 
}

const reset = () => {
  checkMain.value = [];
  minNum.value = minNum.value;
  maxNum.value = maxNum.value;
  models.value = [];
  subModels.value = [];
  checkType.value = '';
}
onMounted(() => {
  rangeSlider();
  showCars();

})
</script>

<style lang="scss">


</style>