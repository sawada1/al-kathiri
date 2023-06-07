import{_ as P}from"./nuxt-link.0b971aa6.js";import{a as m,L as n,M as s,N as a,x as p,B as l,F as g,R as w,u as i,O as L,$ as S,z as o,A as V,P as b,a1 as x}from"./swiper-vue.eb1e8a16.js";import{_ as C}from"./client-only.8ea6fb3c.js";import{g as A}from"./url.5267f343.js";import{u as M}from"./composables.98d9aa6b.js";import{u as O,c as R,a as T}from"./entry.c41b5b0c.js";import{_ as z,a as E}from"./time.e769ed88.js";import{a as F}from"./axios.4a70c6fc.js";const H={class:"news"},I={class:"newSection mt-5"},q=["data-news"],U={class:"image"},j=["src"],D={class:"text"},W={class:"detail"},G={class:"tags"},J={class:"tag"},K=s("i",{class:"fa-solid fa-tag"},null,-1),Q={class:"tag"},X=s("i",{class:"fa-regular fa-clock"},null,-1),Y={class:"read"},Z={class:"fw-bold"},ss=s("i",{class:"fa-solid fa-chevron-right"},null,-1),es={class:"container mainlatest"},ts={class:"row gap-2 justify-content-center"},as=["onClick"],os=["src","alt"],ns={class:"textt"},ls=["innerHTML"],is={class:"mainIcons"},cs={class:"icons"},rs={class:"icon"},_s=s("img",{src:z,alt:""},null,-1),ds={class:"icon"},us=s("img",{src:E,alt:""},null,-1),ms={class:"read fw-bold"},ps=s("i",{class:"fa-solid fa-chevron-right"},null,-1),hs={key:0,class:"mainLoader"},gs=s("span",{class:"loader"},null,-1),ws=[gs],bs={__name:"index",setup(fs){let f=A();const v=M(),{locale:y}=O();let c=m(y),r=m(!1),k=R(),_=m([]);(async()=>{r.value=!0;const t=await F(`${f}/news`,{headers:{"Content-Language":`${c.value}`}});t.status==200&&(r.value=!1),_.value=t.data.data})();const $=(t,h)=>{const d={name:t,id:h},u=c.value+"/new";k.push({path:`/${u}`,query:d})};return T({title:c.value=="ar"?"اخبار / الكثيري للسيارات":"alkathiri motors / news",meta:[{name:"description",content:"My amazing site."}]}),(t,h)=>{const d=P,u=x,B=S,N=C;return o(),n("div",null,[s("div",H,[s("div",I,[s("h3",{class:"fw-bolder","data-news":t.$t("BE AWARE OF OUR")},a(t.$t("latest news")),9,q)]),p(B,{spaceBetween:50,loop:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:50},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:2.7,spaceBetween:100}},pagination:{clickable:!0},navigation:!0,modules:t.modules,class:"mySwiper latestNews"},{default:l(()=>[(o(!0),n(g,null,w(i(_),e=>(o(),V(u,{class:"box"},{default:l(()=>[p(d,{to:i(v)(`/news/${e.id}`)},{default:l(()=>[s("div",U,[s("img",{src:e.cover_image,loading:"lazy",alt:""},null,8,j)]),s("div",D,[s("h3",null,a(e.title),1),s("p",null,a(e.description.substring(3,180)),1),s("div",W,[s("div",G,[s("div",J,[K,s("span",null,a(e.tags),1)]),s("div",Q,[X,s("span",null,a(e.created_at),1)])]),s("div",Y,[s("span",Z,a(t.$t("now more")),1),ss])])])]),_:2},1032,["to"])]),_:2},1024))),256))]),_:1},8,["breakpoints","modules"])]),s("div",es,[s("div",ts,[(o(!0),n(g,null,w(i(_),e=>(o(),n("div",{onClick:ys=>$(e.title,e.id),style:{cursor:"pointer"},class:"col-12 col-xl-3 col-lg-3 col-md-2 boxx"},[s("img",{class:"mainpic",src:e.cover_image,alt:e.title},null,8,os),s("div",ns,[s("h4",null,a(e.title),1),p(N,null,{default:l(()=>[s("p",{innerHTML:e.description.substring(0,180)},null,8,ls)]),_:2},1024),s("div",is,[s("div",cs,[s("div",rs,[_s,s("span",null,a(e.tags),1)]),s("div",ds,[us,s("span",null,a(e.created_at),1)])]),s("span",ms,[b(a(t.$t("read more"))+" ",1),ps])])])],8,as))),256))])]),i(r)?(o(),n("div",hs,ws)):L("",!0)])}}};export{bs as default};
