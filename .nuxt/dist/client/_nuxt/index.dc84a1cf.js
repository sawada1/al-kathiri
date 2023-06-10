import{$ as H,a1 as D,a as d,Y as Q,Z as X,_ as ee,L as m,M as e,N as a,V,a4 as $,F as B,R as T,O as P,x as _,B as r,P as C,a5 as se,z as u,A as F,U as te}from"./swiper-vue.cc5027a5.js";import{_ as ae}from"./client-only.2cbf9e72.js";import{_ as oe}from"./nuxt-link.e094e3b4.js";import{d as ne,u as le,c as ie,a as de}from"./entry.1b4b7411.js";import{a as L,g as q}from"./axios.78c6ffe3.js";import{u as re}from"./composables.2a0999ff.js";import{t as j}from"./style.3a1f041f.js";import{a as ce,b as _e,c as ue,_ as he}from"./box3.7bf20b11.js";const me=""+new URL("landing2.1afd98b9.png",import.meta.url).href,z=""+new URL("group1.e89f0768.png",import.meta.url).href,ge=""+new URL("group2.18aae9d5.png",import.meta.url).href,ve=""+new URL("group4.1a6ecf44.png",import.meta.url).href,pe=""+new URL("about.c55be374.png",import.meta.url).href,fe={components:{Swiper:H,SwiperSlide:D},async setup(){const{locale:o}=le();let l=q(),O=d([]),t=d([]),I=d([]),p=d(o);const h=ie();let f=d({id:null,model:null,type:null});const y=(n,i)=>{const c={id:n,name:i},g=p.value+"/brandcar";h.push({path:g,query:c})},b=n=>{const i={type:n},c=p.value+"/brandcar";h.push({path:c,query:i})},s=(n,i)=>{const c={id:n,name:i},g=p.value+"/car";h.push({path:`/${g}`,query:c})},w=()=>{const n=p.value+"/brandcar";h.push({path:n,query:f.value})},J=(n,i)=>{const c={name:n,id:i},g=p.value+"/new";h.push({path:`/${g}`,query:c})};let v=d(o);const E=re();let x=q(),W=d([]),k=d([]),M=d([]),A=d(!1);(async()=>{A.value=!0;let n=await L.get(`${x}/general`,{headers:{"Content-Language":`${v.value}`}});n.status==200&&(A.value=!1),d([]),k.value=n.data,M.value=n.data.brands_with_models,de({title:v.value=="ar"?"الكثيري للسيارات":"alkathiri motors",meta:[{name:"description",content:k.value.meta_tag_description},{name:"keywords",content:k.value.meta_tag_keywords}]}),console.log(k.value)})(),(async()=>{let n=await L.get(`${l}/brands`,{headers:{"Content-Language":`${v.value}`}});O.value=n.data.data})(),(async()=>{let n=await L.get(`${l}/news/highlighted`,{headers:{"Content-Language":`${v.value}`}});I.value=n.data.data})();const U=d([]);let Y=d([]),G=d([]),R=d("added to wishlist"),S=d("success"),N=d("removed from wishlist");v.value=="ar"?(R.value="تم الاضافة الي قائمة المفضلات",S.value="نجاح",N.value="تم الحذف من قائمة المفضلات"):v.value=="en"&&(R.value="added to wishlist",S.value="success",N.value="removed from wishlist");const K=n=>{{let i=JSON.parse(sessionStorage.getItem("thefav"))?JSON.parse(sessionStorage.getItem("thefav")):[],c=i.filter(g=>g.id==n.id);if(console.log(c),n.is_in_favorite=!n.is_in_favorite,c.length<=1)if(i.push(n),n.is_in_favorite==!0)sessionStorage.setItem("thefav",JSON.stringify(i)),j({title:R.value,description:S.value},{timeout:5e3,toastBackgroundColor:"green",showIcon:"true",type:"success",transition:"bounce"});else{let g=i.filter(Z=>Z.id!=n.id);j({title:N.value,description:S.value},{timeout:5e3,toastBackgroundColor:"green",showIcon:"true",type:"success",transition:"bounce"}),Y.value=[],sessionStorage.setItem("thefav",JSON.stringify(g)),g.length<1&&sessionStorage.removeItem("thefav")}}};return(async()=>{let n=await L.get(`${l}/cars/latest`,{headers:{"Content-Language":`${v.value}`}});{let i=JSON.parse(sessionStorage.getItem("thefav"))?JSON.parse(sessionStorage.getItem("thefav")):[];if(console.log(i),i.length>=1)for(let c=0;c<i.length;c++)n.data.data[i[c].id-1].is_in_favorite=i[c].is_in_favorite}t.value=n.data.data})(),{modules:[Q,X,ee],brandArray:O,latestArray:t,newsArray:I,addToFav:K,checkFav:U,generalData:k,checkFav:U,favState:G,localePath:E,mainObj:f,goToBrandPageByIdAndName:y,goToBrandPageSearch:w,brandsWithModles:M,mainBrands:W,goToCarPage:s,goToBrandPageByType:b,generalSpinner:A,goToNewsPage:J}}},ye={class:"container landing"},we={class:"container"},be={class:"row d-flex align-items-center justify-content-center"},ke={class:"col-lg-7 col-xl-7 col-md-12 col-sm-12"},Be={class:"text"},Te=e("p",null," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat fugiat sit quo ipsum error maxime voluptates porro commodi quisquam eligendi perferendis tenetur, repellendus enim ab deserunt, necessitatibus aliquid quod? ",-1),Se=se('<div class="col col-lg-5 col-xl-5 col-md-12 col-sm-12"><div class="image"><img class="img2" loading="lazy" src="'+me+'" alt="landing"><div class="img3" loading="lazy"></div><img class="img1" loading="lazy" src="'+he+'" alt="landing"></div></div>',1),Pe={class:"searchBar"},Ce={class:"main"},Le={value:null,disabled:""},Oe=e("option",null,"hatchback",-1),Ie=e("option",null,"sedan",-1),Ae=e("option",null,"4_by_4",-1),Re=e("option",null,"family",-1),Ne=e("option",null,"commercial",-1),Ve={value:null,disabled:""},$e=["value"],ze={value:null,disabled:""},Me=["value"],Ue={class:"containe groups"},Fe=e("img",{src:z,loading:"lazy",alt:"sedan"},null,-1),qe=e("span",null,"sedan",-1),je=e("img",{src:ge,loading:"lazy",alt:"family"},null,-1),He=e("span",null,"family",-1),De=e("img",{src:z,loading:"lazy",alt:"sedan"},null,-1),Je=e("span",null,"sedan",-1),Ee=e("img",{src:z,loading:"lazy",alt:"4x4"},null,-1),xe=e("span",null,"4x4",-1),We=e("img",{src:ve,loading:"lazy",alt:"commercial"},null,-1),Ye=e("span",null,"commercial",-1),Ge={class:"about"},Ke={class:"container"},Ze={class:"row gap-5 align-items-center justify-content-around"},Qe=e("div",{class:"col-12 col-xl-4 col-lg-4"},[e("div",{class:"image"},[e("img",{src:pe,loading:"lazy",alt:"about-section"})])],-1),Xe={class:"col-12 col-xl-6 col-lg-6"},es={class:"text"},ss={class:"span"},ts=["data-about"],as=["innerHTML"],os={class:"btn"},ns={class:""},ls=e("i",{class:"fa-solid fa-chevron-right"},null,-1),is={class:"why-choose"},ds={class:"head"},rs=["data-why"],cs={class:"main mb-5 position-relative"},_s={class:"boxes row d-flex justify-content-center gap-5"},us={class:"box col-xl-3 col-lg-3 col-md-5 col-sm-12"},hs=e("img",{src:ce,loading:"lazy",alt:"why-choose"},null,-1),ms={class:"text"},gs=["innerHTML"],vs={key:0,class:"text-center"},ps=e("div",{class:"spinner-border",role:"status"},null,-1),fs=[ps],ys={class:"box col-xl-3 col-lg-3 col-md-5 col-sm-12"},ws=e("img",{src:_e,loading:"lazy",alt:"why-choose"},null,-1),bs={class:"text"},ks=["innerHTML"],Bs={key:0,class:"text-center"},Ts=e("div",{class:"spinner-border",role:"status"},null,-1),Ss=[Ts],Ps={class:"box col-xl-3 col-lg-3 col-md-5 col-sm-12"},Cs=e("img",{src:ue,loading:"lazy",alt:"why-choose"},null,-1),Ls={class:"text"},Os=["innerHTML"],Is={key:0,class:"text-center"},As=e("div",{class:"spinner-border",role:"status"},null,-1),Rs=[As],Ns={class:"brands"},Vs={class:"head"},$s=["data-brands"],zs={class:"container"},Ms={class:"boxes row d-flex justify-content-center gap-3 align-items-center"},Us=["onClick"],Fs=["src","alt"],qs={class:"container latest"},js={class:"head"},Hs=["data-latest"],Ds={class:"see"},Js={style:{color:"#1B395F"}},Es=e("i",{class:"fa-solid fa-chevron-right"},null,-1),xs={class:"image"},Ws=["onClick","src","alt"],Ys={class:"text1"},Gs={class:"price"},Ks={class:"after"},Zs={class:"detail"},Qs=e("i",{class:"fa-solid fa-chevron-right"},null,-1),Xs=["onClick"],et=["onClick"],st={class:"news"},tt={class:"head"},at=["data-news"],ot={class:"image"},nt=["src","alt"],lt={class:"text"},it={class:"detail"},dt={class:"tags"},rt={class:"tag"},ct=e("i",{class:"fa-solid fa-tag"},null,-1),_t={class:"tag"},ut=e("i",{class:"fa-regular fa-clock"},null,-1),ht={class:"read"},mt={class:"fw-bold"},gt=e("i",{class:"fa-solid fa-chevron-right"},null,-1),vt={class:"subscribe"},pt={class:"text"},ft={class:"d-flex flex-column align-items-center gap-2"},yt=e("br",null,null,-1),wt=e("br",null,null,-1),bt={class:"btn"},kt=e("div",{class:"car"},null,-1);function Bt(o,l,O,t,I,p){const h=D,f=H,y=ae,b=oe;return u(),m("div",null,[e("div",ye,[e("div",we,[e("div",be,[e("div",ke,[e("div",Be,[e("span",null,a(o.$t("with al kathiri motors")),1),e("h2",null,a(o.$t("FIND YOUR DREAM CAR")),1),Te,e("div",null,[e("button",null,a(o.$t("explore now")),1)])])]),Se])])]),e("div",Pe,[e("div",Ce,[V(e("select",{"onUpdate:modelValue":l[0]||(l[0]=s=>t.mainObj.type=s)},[e("option",Le,a(o.$t("select the vehicle type")),1),Oe,Ie,Ae,Re,Ne],512),[[$,t.mainObj.type]]),V(e("select",{"onUpdate:modelValue":l[1]||(l[1]=s=>t.mainObj.id=s)},[e("option",Ve,a(o.$t("choose brand")),1),(u(!0),m(B,null,T(t.brandsWithModles,s=>(u(),m("option",{value:s.id},a(s.name),9,$e))),256))],512),[[$,t.mainObj.id]]),V(e("select",{"onUpdate:modelValue":l[2]||(l[2]=s=>t.mainObj.model=s)},[e("option",ze,a(o.$t("choose a model")),1),t.mainObj.id?(u(!0),m(B,{key:0},T(t.brandsWithModles[t.mainObj.id-1].parent_models,s=>(u(),m("option",{value:s.id},a(s.name),9,Me))),256)):P("",!0)],512),[[$,t.mainObj.model]]),e("button",{onClick:l[3]||(l[3]=s=>t.goToBrandPageSearch())},a(o.$t("search")),1)])]),e("div",Ue,[_(f,{spaceBetween:50,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:60},768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:50}},navigation:!0,modules:t.modules,class:"mySwiper"},{default:r(()=>[_(h,{onClick:l[4]||(l[4]=s=>t.goToBrandPageByType("sedan")),style:{cursor:"pointer"}},{default:r(()=>[Fe,qe]),_:1}),_(h,{onClick:l[5]||(l[5]=s=>t.goToBrandPageByType("family")),style:{cursor:"pointer"}},{default:r(()=>[je,He]),_:1}),_(h,{onClick:l[6]||(l[6]=s=>t.goToBrandPageByType("sedan")),style:{cursor:"pointer"}},{default:r(()=>[De,Je]),_:1}),_(h,{style:{cursor:"pointer"}},{default:r(()=>[Ee,xe]),_:1}),_(h,{style:{cursor:"pointer"}},{default:r(()=>[We,Ye]),_:1})]),_:1},8,["modules"])]),e("div",Ge,[e("div",Ke,[e("div",Ze,[Qe,e("div",Xe,[e("div",es,[e("span",ss,a(o.$t("AL KATHIRI MOTORS")),1),e("h2",{class:"fw-bolder","data-about":o.$t("about us")},a(o.$t("how we are")),9,ts),_(y,null,{default:r(()=>[e("p",{class:"",innerHTML:t.generalData.about_us},null,8,as)]),_:1}),e("div",os,[_(b,{to:t.localePath("/about")},{default:r(()=>[e("button",ns,[e("span",null,a(o.$t("now more")),1),ls])]),_:1},8,["to"])])])])])])]),e("div",is,[e("div",ds,[e("h3",{class:"fw-bolder","data-why":o.$t("AL KATHIRI MOTORS")},a(o.$t("why choose us")),9,rs)]),e("div",cs,[e("div",_s,[e("div",us,[hs,e("div",ms,[_(y,null,{default:r(()=>[e("p",{innerHTML:t.generalData.why_alkathiri_cars_card_1},null,8,gs)]),_:1})]),t.generalSpinner?(u(),m("div",vs,fs)):P("",!0)]),e("div",ys,[ws,e("div",bs,[_(y,null,{default:r(()=>[e("p",{innerHTML:t.generalData.why_alkathiri_cars_card_2},null,8,ks)]),_:1})]),t.generalSpinner?(u(),m("div",Bs,Ss)):P("",!0)]),e("div",Ps,[Cs,e("div",Ls,[_(y,null,{default:r(()=>[e("p",{innerHTML:t.generalData.why_alkathiri_cars_card_3},null,8,Os)]),_:1})]),t.generalSpinner?(u(),m("div",Is,Rs)):P("",!0)])])])]),e("div",Ns,[e("div",Vs,[e("h3",{class:"fw-bolder","data-brands":o.$t("AUTHORIZED DISTRIBUTOR")},a(o.$t("car brands")),9,$s)]),e("div",zs,[e("div",Ms,[(u(!0),m(B,null,T(t.brandArray,s=>(u(),m("div",{onClick:w=>t.goToBrandPageByIdAndName(s.id,s.name),class:"box col-5 col-xl-1 col-lg-2",style:{cursor:"pointer"}},[e("img",{src:s.image,loading:"lazy",alt:s.name},null,8,Fs),e("span",null,a(s.name),1)],8,Us))),256))])])]),e("div",qs,[e("div",js,[e("h3",{class:"fw-bolder","data-latest":o.$t("JUST PUBLISHED")},a(o.$t("latest vehicles")),9,Hs),e("div",Ds,[_(b,{to:t.localePath("/brandcar")},{default:r(()=>[e("span",Js,a(o.$t("see all")),1)]),_:1},8,["to"]),Es])]),_(f,{spaceBetween:10,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:50},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:60}},pagination:{clickable:!0},navigation:!0,modules:t.modules,class:"mySwiper"},{default:r(()=>[(u(!0),m(B,null,T(t.latestArray,s=>(u(),F(h,{style:{cursor:"pointer"},class:"mainlatestbox latestboxes"},{default:r(()=>[e("div",xs,[e("img",{onClick:w=>t.goToCarPage(s.id,s.name),src:s.main_image,loading:"lazy",alt:s.name},null,8,Ws)]),e("h3",null,a(s.name),1),e("div",Ys,[e("div",Gs,[e("span",null,a(o.$t("price")),1),e("h4",null,a(s.selling_price),1)]),e("div",Ks,[e("span",null,a(o.$t("after vat")),1),e("h4",null,a(s.selling_price_after_vat==null?0:s.selling_price_after_vat),1)])]),e("span",Zs,[C(a(o.$t("details"))+" ",1),Qs]),e("div",{class:"overlay",onClick:w=>t.goToCarPage(s.id,s.name)},null,8,Xs),e("i",{onClick:w=>t.addToFav(s),class:te(["fa-regular fa-heart fav",{"fa-solid":s.is_in_favorite}])},null,10,et)]),_:2},1024))),256))]),_:1},8,["modules"])]),e("div",st,[e("div",tt,[e("h3",{class:"fw-bolder","data-news":o.$t("BE AWARE OF OUR")},a(o.$t("latest news")),9,at)]),_(f,{spaceBetween:50,loop:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:50},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:2.7,spaceBetween:100}},pagination:{clickable:!0},navigation:!0,modules:t.modules,class:"mySwiper latestNews"},{default:r(()=>[(u(!0),m(B,null,T(t.newsArray,s=>(u(),F(h,{class:"box",onClick:w=>t.goToNewsPage(s.title,s.id),style:{cursor:"pointer"}},{default:r(()=>[e("div",ot,[e("img",{src:s.cover_image,loading:"lazy",alt:s.title},null,8,nt)]),e("div",lt,[e("h3",null,a(s.title),1),e("p",null,a(s.description.substring(3,180)),1),e("div",it,[e("div",dt,[e("div",rt,[ct,e("span",null,a(s.tags),1)]),e("div",_t,[ut,e("span",null,a(s.created_at),1)])]),e("div",ht,[e("span",mt,a(o.$t("now more")),1),gt])])])]),_:2},1032,["onClick"]))),256))]),_:1},8,["breakpoints","modules"])]),e("div",vt,[e("div",pt,[e("div",ft,[e("h2",null,[C(a(o.$t("Book Your"))+" ",1),yt,C(" "+a(o.$t("Maintenance Appointment"))+" ",1),wt,C(" "+a(o.$t("now")),1)]),e("div",bt,[_(b,{to:t.localePath("/maintenance")},{default:r(()=>[e("span",null,a(o.$t("book now")),1)]),_:1},8,["to"])])])]),kt])])}const zt=ne(fe,[["render",Bt]]);export{zt as default};
