import{_ as p}from"./client-only.b401b6e1.js";import{a as h,g as v}from"./axios.78c6ffe3.js";import{u as g,c as f,b as w,a as x}from"./entry.ab33c377.js";import{_ as y,a as N}from"./time.67e32620.js";import{a as n,L as c,M as t,u as s,N as l,x as $,B as L,O as M,z as r}from"./swiper-vue.bc72199a.js";const k={class:"container thelatestcar",style:{"margin-top":"150px"}},B={class:"thebox"},C=["src","alt"],R={class:"title w-100"},b={class:"icons"},H={class:"icon"},V=t("img",{src:y,alt:""},null,-1),O={class:"icon"},T=t("img",{src:N,alt:""},null,-1),q=["innerHTML"],z={key:0,class:"mainLoader"},D=t("span",{class:"loader"},null,-1),E=[D],P={__name:"new",setup(I){let _=v();const{locale:u}=g();let i=n(u),o=n(!1);f();let d=w().query.id,e=n([]);return(async()=>{o.value=!0;const a=await h(`${_}/news/${d}`,{headers:{"Content-Language":`${i.value}`}});a.status==200&&(o.value=!1),e.value=a.data.data,x({title:i.value=="ar"?`${e.value.title}/ الكثيري للسيارات`:`alkathiri motors / ${e.value.title}`})})(),(a,j)=>{const m=p;return r(),c("div",null,[t("div",k,[t("div",B,[t("img",{class:"bigpic",src:s(e).cover_image,alt:s(e).title},null,8,C),t("div",R,[t("h5",null,l(s(e).title),1),t("div",b,[t("div",H,[V,t("span",null,l(a.$t("tag name")),1)]),t("div",O,[T,t("span",null,l(s(e).created_at),1)])])]),$(m,null,{default:L(()=>[t("div",{innerHTML:s(e).description},null,8,q)]),_:1})])]),s(o)?(r(),c("div",z,E)):M("",!0)])}}};export{P as default};