import{_ as x}from"./client-only.8ea6fb3c.js";import{u as C,b as k,c as w,a as L}from"./entry.c41b5b0c.js";import{g as O}from"./url.5267f343.js";import{a as R}from"./axios.4a70c6fc.js";import{a as r,L as o,u as n,M as e,N as l,x as b,B as N,F as T,R as V,O as m,z as i,P as B}from"./swiper-vue.eb1e8a16.js";const F={key:0,class:"theOffer mt-5"},M={class:"container"},q={class:"containe px-3"},H=["src","alt"],I={class:"my-3 fw-bolder thehead"},P=["innerHTML"],S={class:"includedOffers"},A={class:"fw-bolder pt-3 thehead"},j={class:"row justify-content-center gap-1"},z=["onClick"],D={class:"image"},E=["src","alt"],U={class:"text1"},G={class:"price"},J={class:"after"},K={class:"detail"},Q=e("i",{class:"fa-solid fa-chevron-right"},null,-1),W=e("div",{class:"overlay"},null,-1),X=e("i",{class:"fa-regular fa-heart fav"},null,-1),Y={key:1,class:"mainLoader"},Z=e("span",{class:"loader"},null,-1),ee=[Z],re={__name:"offer",setup(te){const{locale:f}=C();let d=r(f);const p=k(),v=w();let g=p.query.id,y=O(),c=r(!1),a=r([]),u=r([]);(async()=>{c.value=!0;let t=await R.get(`${y}/offers/${g}`,{headers:{"Content-Language":`${d.value}`}});t.status==200&&(c.value=!1),a.value=t.data.offer,u.value=t.data.offer_cars,L({title:d.value=="ar"?`${a.value.title}/الكثيري للسيارات`:`alkathiri motors / ${a.value.title}`,meta:[{name:"description",content:a.value.description}]})})();const $=(t,h)=>{const _={id:t,name:h},s=d.value+"/car";v.push({path:`/${s}`,query:_})};return(t,h)=>{const _=x;return i(),o("div",null,[n(c)?m("",!0):(i(),o("div",F,[e("div",M,[e("div",q,[e("img",{src:n(a).image,class:"w-100",alt:n(a).title},null,8,H),e("h3",I,l(n(a).title),1),b(_,null,{default:N(()=>[e("p",{innerHTML:n(a).description},null,8,P)]),_:1})]),e("div",S,[e("h3",A,l(t.$t("Vehicles Included In The Offer")),1),e("div",j,[(i(!0),o(T,null,V(n(u),s=>(i(),o("div",{style:{cursor:"pointer"},onClick:ae=>$(s.id,s.name),class:"mainlatestbox col-xl-2 col-lg-2 col-md-4"},[e("div",D,[e("img",{src:s.main_image,alt:s.name},null,8,E)]),e("h3",null,l(s.name),1),e("div",U,[e("div",G,[e("span",null,l(t.$t("price")),1),e("h4",null,l(s.selling_price)+" SAR",1)]),e("div",J,[e("span",null,l(t.$t("after vat")),1),e("h4",null,l(s.selling_price_after_vat)+" SAR",1)])]),e("span",K,[B(l(t.$t("details"))+" ",1),Q]),W,X],8,z))),256))])])])])),n(c)?(i(),o("div",Y,ee)):m("",!0)])}}};export{re as default};