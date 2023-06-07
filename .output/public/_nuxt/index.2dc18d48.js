import{a as u,Q as se,m as te,L as n,M as e,N as i,u as o,F as g,R as f,U as ae,V as m,W as S,j as h,O as D,z as c,X as A,P as H}from"./swiper-vue.eb1e8a16.js";import{b as le,c as oe,u as ne,a as ie}from"./entry.c41b5b0c.js";import{u as ce}from"./composables.98d9aa6b.js";import{g as de}from"./url.5267f343.js";import{a as F}from"./axios.4a70c6fc.js";const re={class:"brandCars"},ue={class:"container p-2"},pe={class:"row p-2 gap-4"},_e={class:"col-12 col-xl-3 col-lg-3 col-md-12 d-flex flex-column align-items-center"},me={class:"filter d-flex align-items-center justify-content-between w-100"},he={class:"rangeSlider"},ve=e("div",{class:"mainprocess"},[e("span")],-1),ge=e("div",{class:"rangeGroups"},[e("input",{type:"range",class:"range-min",min:"222000",max:"870000",value:"222000",step:"100"}),e("input",{type:"range",class:"range-max",min:"222000",max:"870000",value:"870000",step:"100"})],-1),fe={class:"inputs w-100 d-flex align-items-center justify-content-between"},ye={class:"accordion",id:"accordionExample"},be={class:"accordion-item mainItem"},xe={class:"accordion-header"},we={class:"accordion-button collapsed mainbtnacc",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsecars","aria-expanded":"true","aria-controls":"collapseOne"},ke={class:"theHead"},Ce={id:"collapsecars",class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},Se={class:"accordion-body"},$e={class:"checksCars"},qe={class:"inp"},Ie=["id","checked","value"],Oe=["for"],Ne=["src"],Ve={class:"accordion-item mainItem"},Ue={class:"accordion-header"},Le={class:"accordion-button d-flex align-items-center gap-5 mainbtnacc",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},Pe={class:"theHead"},Te={class:"accordion-body"},Ae={class:"accordion",id:"accordionbranch1"},Be={class:"accordion-item mainbranch w-100"},Ee={class:"accordion-header w-100"},Me={class:"accordion-button d-flex align-items-center gap-3",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOnebranch1","aria-expanded":"true","aria-controls":"collapseOne"},Re=["value"],je={style:{"white-space":"nowrap"}},ze={id:"collapseOnebranch1",class:"accordion-collapse collapse show","data-bs-parent":"#accordionbranch1"},Ge={class:"accordion-body"},Je={class:"checks d-flex flex-column gap-3"},De={class:"inp d-flex align-items-center gap-3 p-2"},He=["value"],Fe={key:1,class:"fw-bold text-center my-2"},We={class:"accordion-item mainItem"},Ye={class:"accordion-header"},Qe={class:"accordion-button collapsed mainbtnacc",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"true","aria-controls":"collapseOne"},Xe={class:"theHead"},Ke={id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},Ze={class:"accordion-body d-flex flex-column gap-2"},es={class:"inp d-flex align-items-center gap-2"},ss=e("label",{for:"hatchback"},"hatchback",-1),ts={class:"inp d-flex align-items-center gap-2"},as=e("label",{for:"sedan"},"sedan",-1),ls={class:"inp d-flex align-items-center gap-2"},os=e("label",{for:"4_by_4"},"4_by_4",-1),ns={class:"inp d-flex align-items-center gap-2"},is=e("label",{for:"family"},"family",-1),cs={class:"inp d-flex align-items-center gap-2"},ds=e("label",{for:"commercial"},"commercial",-1),rs={class:"col-12 col-xl-8 col-lg-8 col-md-12"},us={key:0},ps={class:"fw-bolder py-1"},_s={key:1,class:"fw-bolder"},ms={class:"row justify-content-center"},hs=["onClick"],vs={class:"image"},gs=["src"],fs={style:{"font-size":"16px"}},ys={class:"text1"},bs={class:"price"},xs={style:{"font-size":"14px"}},ws={class:"after"},ks={style:{"font-size":"14px"}},Cs={class:"detail"},Ss=e("i",{class:"fa-solid fa-chevron-right"},null,-1),$s=e("div",{class:"overlay"},null,-1),qs=["onClick"],Is={key:2,class:"d-flex align-items-center justify-content-center"},Os=e("div",{class:"spinner-border text-center",style:{width:"5rem",height:"5rem"},role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),Ns=[Os],Bs={__name:"index",async setup(Vs){let $,B;const _=le(),W=oe(),q=_.query.id?_.query.id:null,E=_.query.type?_.query.type:null,M=_.query.model?_.query.model:null,R=_.query.name?_.query.name:null;let l=u(E||null);ce();let j=de();const{locale:Y}=ne();let y=u(Y),I=u(!0),Q=([$,B]=se(()=>F.get(`${j}/cars-filter-data`,{headers:{"Content-Language":`${y.value}`}})),$=await $,B(),$),z=u([]),b=u(M?[M]:[]),x=u([]),w=u(Q.data);console.log(w.data);const p=u(q?[q]:[]);let k=u(w.value.minPrice),C=u(w.value.maxPrice);const X=()=>{{let t=document.querySelectorAll(".rangeGroups input");document.querySelector(".mainprocess span"),document.querySelectorAll(".inputs-groups .inp input"),t.forEach(a=>{a.addEventListener("input",s=>{let d=parseInt(t[0].value),r=parseInt(t[1].value);console.log(d,r),console.log(d/t[0].max*100+"%"),console.log(r/t[0].max*100+"%"),r-d<1e5?s.target.className==="range-min"?t[0].value=r-1e5:t[1].value=d+1e5:(k.value=d,C.value=r)})})}},K=(t,a)=>{const s={id:t,name:a};let d=y.value+"/car";W.push({path:`/${d}`,query:s})};let O=u([]),N="",V="",U="",L="",P="",T="";y.value=="en"?(N="Good job!",V="You added to the favourite list",U="Deleted!",L="Your file has been deleted",P="this is already in your favourite list Are you sure to delete it?",T="Yes, delete it!"):y.value=="ar"&&(N="أحسنت!",V="أضفت إلى قائمة المفضلة",U="تم الحذف!",L="تم الحذف",P="هذا موجود بالفعل في قائمة المفضلة لديك هل أنت متأكد من حذفه؟",T="نعم ، احذفها!");const Z=t=>{{let a=JSON.parse(sessionStorage.getItem("thefav"))?JSON.parse(sessionStorage.getItem("thefav")):[],s=a?a.filter(d=>d.id==t.id):[];console.log(s),s.length<1?(t.is_in_favorite=!t.is_in_favorite,O.value.push(t),sessionStorage.setItem("thefav",JSON.stringify(O.value)),Swal.fire(N,V,"success")):Swal.fire({title:P,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:T}).then(d=>{if(console.log(d),d.value==!0){let r=a.filter(v=>v.id!=t.id);O.value=[],sessionStorage.setItem("thefav",JSON.stringify(r)),r.length<1&&sessionStorage.removeItem("thefav"),console.log(r),Swal.fire(U,L,"success")}})}},G=async()=>{I.value=!0;let t=await F.get(`${j}/cars`,{params:{brands:p.value,min_price:k.value,max_price:C.value,models:b.value,sub_models:x.value,type:l.value?l.value:""},headers:{"Content-Language":`${y.value}`}});z.value=t.data.data,t.status==200&&(I.value=!1),console.log(t.data)},ee=()=>{p.value=[],k.value=k.value,C.value=C.value,b.value=[],x.value=[],l.value=""};return te(()=>{X(),G()}),ie({title:y.value=="ar"?`${R||"السيارات"}/الكثيري للسيارات`:`alkathiri motors / ${R||"cars"}`,meta:[{name:"description",content:""}]}),(t,a)=>(c(),n("div",null,[e("div",re,[e("div",ue,[e("div",pe,[e("div",_e,[e("div",me,[e("h5",null,i(t.$t("filter")),1),e("span",{onClick:a[0]||(a[0]=s=>ee())},i(t.$t("reset")),1)]),e("div",he,[ve,ge,e("div",fe,[e("span",null,i(o(k))+" sar",1),e("span",null,i(o(C))+" sar",1)])]),e("div",ye,[e("div",be,[e("h2",xe,[e("button",we,[e("span",ke,i(t.$t("cars")),1)])]),e("div",Ce,[e("div",Se,[e("div",$e,[(c(!0),n(g,null,f(o(w).brands,(s,d)=>(c(),n("div",qe,[m(e("input",{id:`label${d}`,type:"checkbox",checked:o(q)==s.id,"onUpdate:modelValue":a[1]||(a[1]=r=>h(p)?p.value=r:null),value:s.id},null,8,Ie),[[A,o(p)]]),e("label",{for:`label${d}`,class:"d-flex align-items-center gap-2"},[e("img",{src:s.image,alt:""},null,8,Ne),e("span",null,i(s.name),1)],8,Oe)]))),256))])])])]),e("div",Ve,[e("h2",Ue,[e("button",Le,[e("span",Pe,i(t.$t("mark & model")),1)])]),o(p).length>=1?(c(),n("div",{key:0,id:"collapseOne",class:ae(["accordion-collapse collapse",{show:t.index==0}]),"data-bs-parent":"#accordionExample"},[e("div",Te,[e("div",Ae,[(c(!0),n(g,null,f(o(p),(s,d)=>(c(),n("div",Be,[(c(!0),n(g,null,f(o(w).brands[s-1].parent_models,r=>(c(),n("div",null,[e("div",Ee,[e("button",Me,[m(e("input",{type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=v=>h(b)?b.value=v:b=v),value:r.id},null,8,Re),[[A,o(b)]]),e("span",je,i(r.name),1)])]),e("div",ze,[e("div",Ge,[e("div",Je,[(c(!0),n(g,null,f(r.sub_models,v=>(c(),n("div",De,[m(e("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=J=>h(x)?x.value=J:x=J),value:v.id},null,8,He),[[A,o(x)]]),e("span",null,i(v.name),1)]))),256))])])])]))),256))]))),256))])])],2)):(c(),n("div",Fe,i(t.$t("you have to choose a brand")),1))]),e("div",We,[e("h2",Ye,[e("button",Qe,[e("span",Xe,i(t.$t("car type")),1)])]),e("div",Ke,[e("div",Ze,[e("div",es,[m(e("input",{id:"hatchback",type:"radio","onUpdate:modelValue":a[4]||(a[4]=s=>h(l)?l.value=s:l=s),value:"hatchback"},null,512),[[S,o(l)]]),ss]),e("div",ts,[m(e("input",{id:"sedan",type:"radio","onUpdate:modelValue":a[5]||(a[5]=s=>h(l)?l.value=s:l=s),value:"sedan"},null,512),[[S,o(l)]]),as]),e("div",ls,[m(e("input",{id:"4_by_4",type:"radio","onUpdate:modelValue":a[6]||(a[6]=s=>h(l)?l.value=s:l=s),value:"4_by_4"},null,512),[[S,o(l)]]),os]),e("div",ns,[m(e("input",{id:"family",type:"radio","onUpdate:modelValue":a[7]||(a[7]=s=>h(l)?l.value=s:l=s),value:"family"},null,512),[[S,o(l)]]),is]),e("div",cs,[m(e("input",{id:"commercial",type:"radio","onUpdate:modelValue":a[8]||(a[8]=s=>h(l)?l.value=s:l=s),value:"commercial"},null,512),[[S,o(l)]]),ds])])])])]),e("button",{onClick:a[9]||(a[9]=s=>G()),class:"my-3"},i(t.$t("apply")),1)]),e("div",rs,[o(p).length>=1?(c(),n("div",us,[o(p).length>=1?(c(!0),n(g,{key:0},f(o(p),(s,d)=>(c(),n("h2",ps,[(c(!0),n(g,null,f(o(w).brands[s-1].name,r=>(c(),n("span",null,i(r),1))),256)),H(", ")]))),256)):D("",!0)])):(c(),n("h2",_s,i(t.$t("all cars")),1)),e("div",ms,[(c(!0),n(g,null,f(o(z),s=>(c(),n("div",{style:{cursor:"pointer"},onClick:d=>K(s.id,s.name),class:"mainlatestbox col-xl-3 col-lg-3 col-md-5"},[e("div",vs,[e("img",{src:s.main_image,alt:""},null,8,gs)]),e("h3",fs,i(s.name),1),e("div",ys,[e("div",bs,[e("span",null,i(t.$t("price")),1),e("h4",xs,i(s.selling_price)+" SAR",1)]),e("div",ws,[e("span",null,i(t.$t("after vat")),1),e("h4",ks,i(s.selling_price_after_vat)+" SAR",1)])]),e("p",Cs,[H(i(t.$t("details"))+" ",1),Ss]),$s,e("i",{onClick:d=>Z(s),class:"fa-regular fa-heart fav"},null,8,qs)],8,hs))),256))]),o(I)?(c(),n("div",Is,Ns)):D("",!0)])])])])]))}};export{Bs as default};
