import{u as v,c as y,a as k}from"./entry.1b4b7411.js";import{u as F}from"./composables.2a0999ff.js";import{a as L,g as $}from"./axios.78c6ffe3.js";import{a as n,L as a,u as c,M as t,N as d,F as C,R as w,O as _,z as o}from"./swiper-vue.cc5027a5.js";const P={key:0,class:"offersCars my-5"},A={class:"container"},B={class:"head"},E=["data-offers"],N={class:"row offers px-2 justify-content-around gap-2"},O=["onClick"],R=["src","alt"],S={class:"fw-bolder"},T={key:1,class:"mainLoader"},j=t("span",{class:"loader"},null,-1),q=[j],H={__name:"index",setup(x){const{locale:m}=v();let l=n(m);const h=y();let r=n(!0),i=n([]);F();let p=$();(async()=>{r.value=!0;let e=await L.get(`${p}/offers`,{headers:{"Content-Language":`${l.value}`}});i.value=e.data.data,e.status==200&&(r.value=!1),console.log(e)})();const g=(e,u)=>{const s={name:e,id:u},f=l.value+"/offer";h.push({path:`/${f}`,query:s})};return k({title:l.value=="ar"?"العروض/الكثيري للسيارات":"alkathiri motors / offers"}),(e,u)=>(o(),a("div",null,[c(r)?_("",!0):(o(),a("div",P,[t("div",A,[t("div",B,[t("h3",{"data-offers":e.$t("GET our")},d(e.$t("SPATIAL OFFERS")),9,E)]),t("div",N,[(o(!0),a(C,null,w(c(i),s=>(o(),a("div",{onClick:f=>g(s.title,s.id),style:{cursor:"pointer"},class:"offer col-xl-3 col-lg-3 col-sm-5 col-md-4 d-flex gap-3 flex-column justify-content-between"},[t("img",{src:s.image,alt:s.title},null,8,R),t("h5",S,d(s.title),1)],8,O))),256))])])])),c(r)?(o(),a("div",T,q)):_("",!0)]))}};export{H as default};