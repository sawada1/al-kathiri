import{$ as W,a1 as Y,a as r,Y as se,Z as te,_ as ae,L as u,M as e,N as a,V as U,a5 as j,F as k,R as T,O as P,x as d,B as i,P as S,a4 as oe,z as c,A as E,U as le}from"./swiper-vue.eb1e8a16.js";import{_ as ne}from"./client-only.8ea6fb3c.js";import{_ as ie}from"./nuxt-link.0b971aa6.js";import{d as de,u as re,c as ce,a as _e}from"./entry.c41b5b0c.js";import{g as J}from"./url.5267f343.js";import{u as ue}from"./composables.98d9aa6b.js";import{S as q}from"./sweetalert2.c5da2564.js";import{a as C}from"./axios.4a70c6fc.js";import{a as he,b as me,c as ge,_ as ve}from"./box3.e07d31da.js";const pe=""+new URL("landing2.1afd98b9.png",import.meta.url).href,D=""+new URL("group1.e89f0768.png",import.meta.url).href,fe=""+new URL("group2.18aae9d5.png",import.meta.url).href,ye=""+new URL("group4.1a6ecf44.png",import.meta.url).href,we=""+new URL("about.c55be374.png",import.meta.url).href,be={components:{Swiper:W,SwiperSlide:Y},async setup(){const{locale:o}=re();let n=J(),L=r([]),t=r([]),O=r([]),p=r(o);const _=ce();let f=r({id:null,model:null,type:null});const y=(l,h)=>{const m={id:l,name:h},g=p.value+"/brandcar";_.push({path:g,query:m})},w=l=>{const h={type:l},m=p.value+"/brandcar";_.push({path:m,query:h})},s=(l,h)=>{const m={id:l,name:h},g=p.value+"/car";_.push({path:`/${g}`,query:m})},b=()=>{const l=p.value+"/brandcar";_.push({path:l,query:f.value})},G=(l,h)=>{const m={name:l,id:h},g=p.value+"/new";_.push({path:`/${g}`,query:m})};let v=r(o);const K=ue();let Z=J(),Q=r([]),B=r([]),H=r([]),A=r(!1);(async()=>{A.value=!0;let l=await C.get(`${Z}/general`,{headers:{"Content-Language":`${v.value}`}});l.status==200&&(A.value=!1),r([]),B.value=l.data,H.value=l.data.brands_with_models,_e({title:v.value=="ar"?"الكثيري للسيارات":"alkathiri motors",meta:[{name:"description",content:B.value.meta_tag_description},{name:"keywords",content:B.value.meta_tag_keywords}]}),console.log(B.value)})(),(async()=>{let l=await C.get(`${n}/cars/latest`,{headers:{"Content-Language":`${v.value}`}});t.value=l.data.data})(),(async()=>{let l=await C.get(`${n}/brands`,{headers:{"Content-Language":`${v.value}`}});L.value=l.data.data})(),(async()=>{let l=await C.get(`${n}/news/highlighted`,{headers:{"Content-Language":`${v.value}`}});O.value=l.data.data})();const x=r([]);let I=r([]),X=r([]),R="",V="",$="",z="",F="",M="";return v.value=="en"?(R="Good job!",V="You added to the favourite list",$="Deleted!",z="Your file has been deleted",F="this is already in your favourite list Are you sure to delete it?",M="Yes, delete it!"):v.value=="ar"&&(R="أحسنت!",V="أضفت إلى قائمة المفضلة",$="تم الحذف!",z="تم الحذف",F="هذا موجود بالفعل في قائمة المفضلة لديك هل أنت متأكد من حذفه؟",M="نعم ، احذفها!"),{modules:[se,te,ae],brandArray:L,latestArray:t,newsArray:O,addToFav:l=>{{let h=JSON.parse(sessionStorage.getItem("thefav"))?JSON.parse(sessionStorage.getItem("thefav")):[],m=h?h.filter(g=>g.id==l.id):[];console.log(m),m.length<1?(l.is_in_favorite=!l.is_in_favorite,I.value.push(l),sessionStorage.setItem("thefav",JSON.stringify(I.value)),q.fire(R,V,"success")):q.fire({title:F,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:M}).then(g=>{if(console.log(g),g.value==!0){let N=h.filter(ee=>ee.id!=l.id);I.value=[],sessionStorage.setItem("thefav",JSON.stringify(N)),N.length<1&&sessionStorage.removeItem("thefav"),console.log(N),q.fire($,z,"success")}})}},checkFav:x,generalData:B,checkFav:x,favState:X,localePath:K,mainObj:f,goToBrandPageByIdAndName:y,goToBrandPageSearch:b,brandsWithModles:H,mainBrands:Q,goToCarPage:s,goToBrandPageByType:w,generalSpinner:A,goToNewsPage:G}}},Be={class:"container landing"},ke={class:"container"},Te={class:"row d-flex align-items-center justify-content-center"},Pe={class:"col-lg-7 col-xl-7 col-md-12 col-sm-12"},Se={class:"text"},Ce=e("p",null," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat fugiat sit quo ipsum error maxime voluptates porro commodi quisquam eligendi perferendis tenetur, repellendus enim ab deserunt, necessitatibus aliquid quod? ",-1),Le=oe('<div class="col col-lg-5 col-xl-5 col-md-12 col-sm-12"><div class="image"><img class="img2" loading="lazy" src="'+pe+'" alt="landing"><div class="img3" loading="lazy"></div><img class="img1" loading="lazy" src="'+ve+'" alt="landing"></div></div>',1),Oe={class:"searchBar"},Ae={class:"main"},Ie={value:null,disabled:""},Re=e("option",null,"hatchback",-1),Ve=e("option",null,"sedan",-1),$e=e("option",null,"4_by_4",-1),ze=e("option",null,"family",-1),Fe=e("option",null,"commercial",-1),Me={value:null,disabled:""},Ne=["value"],Ue={value:null,disabled:""},je=["value"],qe={class:"containe groups"},De=e("img",{src:D,loading:"lazy",alt:"sedan"},null,-1),He=e("span",null,"sedan",-1),xe=e("img",{src:fe,loading:"lazy",alt:"family"},null,-1),Ee=e("span",null,"family",-1),Je=e("img",{src:D,loading:"lazy",alt:"sedan"},null,-1),We=e("span",null,"sedan",-1),Ye=e("img",{src:D,loading:"lazy",alt:"4x4"},null,-1),Ge=e("span",null,"4x4",-1),Ke=e("img",{src:ye,loading:"lazy",alt:"commercial"},null,-1),Ze=e("span",null,"commercial",-1),Qe={class:"about"},Xe={class:"container"},es={class:"row gap-5 align-items-center justify-content-around"},ss=e("div",{class:"col-12 col-xl-4 col-lg-4"},[e("div",{class:"image"},[e("img",{src:we,loading:"lazy",alt:"about-section"})])],-1),ts={class:"col-12 col-xl-6 col-lg-6"},as={class:"text"},os={class:"span"},ls=["data-about"],ns=["innerHTML"],is={class:"btn"},ds={class:""},rs=e("i",{class:"fa-solid fa-chevron-right"},null,-1),cs={class:"why-choose"},_s={class:"head"},us=["data-why"],hs={class:"main mb-5 position-relative"},ms={class:"boxes row d-flex align-items-center justify-content-center gap-5"},gs={class:"box col-xl-3 col-lg-3 col-md-5 col-sm-12"},vs=e("img",{src:he,loading:"lazy",alt:"why-choose"},null,-1),ps={class:"text"},fs=["innerHTML"],ys={key:0,class:"text-center"},ws=e("div",{class:"spinner-border",role:"status"},null,-1),bs=[ws],Bs={class:"box col-xl-3 col-lg-3 col-md-5 col-sm-12"},ks=e("img",{src:me,loading:"lazy",alt:"why-choose"},null,-1),Ts={class:"text"},Ps=["innerHTML"],Ss={key:0,class:"text-center"},Cs=e("div",{class:"spinner-border",role:"status"},null,-1),Ls=[Cs],Os={class:"box col-xl-3 col-lg-3 col-md-5 col-sm-12"},As=e("img",{src:ge,loading:"lazy",alt:"why-choose"},null,-1),Is={class:"text"},Rs=["innerHTML"],Vs={key:0,class:"text-center"},$s=e("div",{class:"spinner-border",role:"status"},null,-1),zs=[$s],Fs={class:"brands"},Ms={class:"head"},Ns=["data-brands"],Us={class:"container"},js={class:"boxes row d-flex justify-content-center gap-3 align-items-center"},qs=["onClick"],Ds=["src","alt"],Hs={class:"container latest"},xs={class:"head"},Es=["data-latest"],Js={class:"see"},Ws={style:{color:"#1B395F"}},Ys=e("i",{class:"fa-solid fa-chevron-right"},null,-1),Gs={class:"image"},Ks=["src","alt"],Zs={class:"text1"},Qs={class:"price"},Xs={class:"after"},et={class:"detail"},st=e("i",{class:"fa-solid fa-chevron-right"},null,-1),tt=e("div",{class:"overlay"},null,-1),at=["onClick"],ot={class:"news"},lt={class:"head"},nt=["data-news"],it={class:"image"},dt=["src","alt"],rt={class:"text"},ct={class:"detail"},_t={class:"tags"},ut={class:"tag"},ht=e("i",{class:"fa-solid fa-tag"},null,-1),mt={class:"tag"},gt=e("i",{class:"fa-regular fa-clock"},null,-1),vt={class:"read"},pt={class:"fw-bold"},ft=e("i",{class:"fa-solid fa-chevron-right"},null,-1),yt={class:"subscribe"},wt={class:"text"},bt={class:"d-flex flex-column align-items-center gap-2"},Bt=e("br",null,null,-1),kt=e("br",null,null,-1),Tt={class:"btn"},Pt=e("div",{class:"car"},null,-1);function St(o,n,L,t,O,p){const _=Y,f=W,y=ne,w=ie;return c(),u("div",null,[e("div",Be,[e("div",ke,[e("div",Te,[e("div",Pe,[e("div",Se,[e("span",null,a(o.$t("with al kathiri motors")),1),e("h2",null,a(o.$t("FIND YOUR DREAM CAR")),1),Ce,e("div",null,[e("button",null,a(o.$t("explore now")),1)])])]),Le])])]),e("div",Oe,[e("div",Ae,[U(e("select",{"onUpdate:modelValue":n[0]||(n[0]=s=>t.mainObj.type=s)},[e("option",Ie,a(o.$t("select the vehicle type")),1),Re,Ve,$e,ze,Fe],512),[[j,t.mainObj.type]]),U(e("select",{"onUpdate:modelValue":n[1]||(n[1]=s=>t.mainObj.id=s)},[e("option",Me,a(o.$t("choose brand")),1),(c(!0),u(k,null,T(t.brandsWithModles,s=>(c(),u("option",{value:s.id},a(s.name),9,Ne))),256))],512),[[j,t.mainObj.id]]),U(e("select",{"onUpdate:modelValue":n[2]||(n[2]=s=>t.mainObj.model=s)},[e("option",Ue,a(o.$t("choose a model")),1),t.mainObj.id?(c(!0),u(k,{key:0},T(t.brandsWithModles[t.mainObj.id-1].parent_models,s=>(c(),u("option",{value:s.id},a(s.name),9,je))),256)):P("",!0)],512),[[j,t.mainObj.model]]),e("button",{onClick:n[3]||(n[3]=s=>t.goToBrandPageSearch())},a(o.$t("search")),1)])]),e("div",qe,[d(f,{spaceBetween:50,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:60},768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:50}},navigation:!0,modules:t.modules,class:"mySwiper"},{default:i(()=>[d(_,{onClick:n[4]||(n[4]=s=>t.goToBrandPageByType("sedan")),style:{cursor:"pointer"}},{default:i(()=>[De,He]),_:1}),d(_,{onClick:n[5]||(n[5]=s=>t.goToBrandPageByType("family")),style:{cursor:"pointer"}},{default:i(()=>[xe,Ee]),_:1}),d(_,{onClick:n[6]||(n[6]=s=>t.goToBrandPageByType("sedan")),style:{cursor:"pointer"}},{default:i(()=>[Je,We]),_:1}),d(_,{style:{cursor:"pointer"}},{default:i(()=>[Ye,Ge]),_:1}),d(_,{style:{cursor:"pointer"}},{default:i(()=>[Ke,Ze]),_:1})]),_:1},8,["modules"])]),e("div",Qe,[e("div",Xe,[e("div",es,[ss,e("div",ts,[e("div",as,[e("span",os,a(o.$t("AL KATHIRI MOTORS")),1),e("h2",{class:"fw-bolder","data-about":o.$t("about us")},a(o.$t("how we are")),9,ls),d(y,null,{default:i(()=>[e("p",{class:"",innerHTML:t.generalData.about_us},null,8,ns)]),_:1}),e("div",is,[d(w,{to:t.localePath("/about")},{default:i(()=>[e("button",ds,[e("span",null,a(o.$t("now more")),1),rs])]),_:1},8,["to"])])])])])])]),e("div",cs,[e("div",_s,[e("h3",{class:"fw-bolder","data-why":o.$t("AL KATHIRI MOTORS")},a(o.$t("why choose us")),9,us)]),e("div",hs,[e("div",ms,[e("div",gs,[vs,e("div",ps,[d(y,null,{default:i(()=>[e("p",{innerHTML:t.generalData.why_alkathiri_cars_card_1},null,8,fs)]),_:1})]),t.generalSpinner?(c(),u("div",ys,bs)):P("",!0)]),e("div",Bs,[ks,e("div",Ts,[d(y,null,{default:i(()=>[e("p",{innerHTML:t.generalData.why_alkathiri_cars_card_2},null,8,Ps)]),_:1})]),t.generalSpinner?(c(),u("div",Ss,Ls)):P("",!0)]),e("div",Os,[As,e("div",Is,[d(y,null,{default:i(()=>[e("p",{innerHTML:t.generalData.why_alkathiri_cars_card_3},null,8,Rs)]),_:1})]),t.generalSpinner?(c(),u("div",Vs,zs)):P("",!0)])])])]),e("div",Fs,[e("div",Ms,[e("h3",{class:"fw-bolder","data-brands":o.$t("AUTHORIZED DISTRIBUTOR")},a(o.$t("car brands")),9,Ns)]),e("div",Us,[e("div",js,[(c(!0),u(k,null,T(t.brandArray,s=>(c(),u("div",{onClick:b=>t.goToBrandPageByIdAndName(s.id,s.name),class:"box col-5 col-xl-1 col-lg-2",style:{cursor:"pointer"}},[e("img",{src:s.image,loading:"lazy",alt:s.name},null,8,Ds),e("span",null,a(s.name),1)],8,qs))),256))])])]),e("div",Hs,[e("div",xs,[e("h3",{class:"fw-bolder","data-latest":o.$t("JUST PUBLISHED")},a(o.$t("latest vehicles")),9,Es),e("div",Js,[d(w,{to:t.localePath("/brandcar")},{default:i(()=>[e("span",Ws,a(o.$t("see all")),1)]),_:1},8,["to"]),Ys])]),d(f,{spaceBetween:10,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:50},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:60}},pagination:{clickable:!0},navigation:!0,modules:t.modules,class:"mySwiper"},{default:i(()=>[(c(!0),u(k,null,T(t.latestArray,s=>(c(),E(_,{onClick:b=>t.goToCarPage(s.id,s.name),style:{cursor:"pointer"},class:"mainlatestbox latestboxes"},{default:i(()=>[e("div",Gs,[e("img",{src:s.main_image,loading:"lazy",alt:s.name},null,8,Ks)]),e("h3",null,a(s.name),1),e("div",Zs,[e("div",Qs,[e("span",null,a(o.$t("price")),1),e("h4",null,a(s.selling_price),1)]),e("div",Xs,[e("span",null,a(o.$t("after vat")),1),e("h4",null,a(s.selling_price_after_vat==null?0:s.selling_price_after_vat),1)])]),e("span",et,[S(a(o.$t("details"))+" ",1),st]),tt,e("i",{onClick:b=>t.addToFav(s),class:le(["fa-regular fa-heart fav",{"fa-solid":s.is_in_favorite}])},null,10,at)]),_:2},1032,["onClick"]))),256))]),_:1},8,["modules"])]),e("div",ot,[e("div",lt,[e("h3",{class:"fw-bolder","data-news":o.$t("BE AWARE OF OUR")},a(o.$t("latest news")),9,nt)]),d(f,{spaceBetween:50,loop:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:50},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:2.7,spaceBetween:100}},pagination:{clickable:!0},navigation:!0,modules:t.modules,class:"mySwiper latestNews"},{default:i(()=>[(c(!0),u(k,null,T(t.newsArray,s=>(c(),E(_,{class:"box",onClick:b=>t.goToNewsPage(s.title,s.id),style:{cursor:"pointer"}},{default:i(()=>[e("div",it,[e("img",{src:s.cover_image,loading:"lazy",alt:s.title},null,8,dt)]),e("div",rt,[e("h3",null,a(s.title),1),e("p",null,a(s.description.substring(3,180)),1),e("div",ct,[e("div",_t,[e("div",ut,[ht,e("span",null,a(s.tags),1)]),e("div",mt,[gt,e("span",null,a(s.created_at),1)])]),e("div",vt,[e("span",pt,a(o.$t("now more")),1),ft])])])]),_:2},1032,["onClick"]))),256))]),_:1},8,["breakpoints","modules"])]),e("div",yt,[e("div",wt,[e("div",bt,[e("h2",null,[S(a(o.$t("Book Your"))+" ",1),Bt,S(" "+a(o.$t("Maintenance Appointment"))+" ",1),kt,S(" "+a(o.$t("now")),1)]),e("div",Tt,[d(w,{to:t.localePath("/maintenance")},{default:i(()=>[e("span",null,a(o.$t("book now")),1)]),_:1},8,["to"])])])]),Pt])])}const qt=de(be,[["render",St]]);export{qt as default};
