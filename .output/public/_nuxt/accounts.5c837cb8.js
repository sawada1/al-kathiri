import{u as x,a as w}from"./entry.94a7074b.js";import{u as b}from"./vue.f36acd1f.482fc04a.js";import{u as k}from"./composables.4c8a3063.js";import{a as $,g as L}from"./axios.e739bd3a.js";import{_ as z}from"./main-loader.b5e29ea6.js";import{b as u,J as i,u as p,L as e,M as s,F as T,R as j,Q as h,y as l,N as m}from"./swiper-vue.cbc5cb6b.js";const B={style:{"min-height":"100vh"}},C={key:0,class:"offersCars",style:{"margin-top":"150px","min-height":"100vh"}},E={class:"container",style:{}},H={class:"head"},M=["data-offers"],N={class:"row offers px-xl-0 px-lg-0 justify-content-xl-start justify-content-lg-start justify-content-center"},F={class:"col-12 col-xl-3 col-lg-3 d-flex align-items-center flex-row justify-content-betwee"},S={class:"offer w-100",style:{cursor:"pointer",padding:"20px 10px"}},V={class:"d-flex flex-column align-items-center gap-2 mb-3"},A={style:{"font-size":"15px"},class:"fw-bolder"},R=["src"],q={class:"d-flex flex-column w-100 p-2",style:{"background-color":"#f0eaea83","border-radius":"10px"}},D={class:"d-flex align-items-center gap-1 text-cente"},G={style:{"font-size":"13px"}},I={style:{"font-size":"13px"}},J={class:"d-flex flex-column"},P={style:{"font-size":"13px"}},Q={class:"w-100 d-flex align-items-center justify-content-between"},U={style:{"font-size":"13px"}},K=e("i",{class:"fa-regular fa-copy"},null,-1),O={class:""},W={style:{"font-size":"13px"}},X={class:"d-flex align-items-center justify-content-between w-100"},Y={style:{"font-size":"12px"},class:"copy-account"},Z=e("i",{class:"fa-regular fa-copy"},null,-1),ee={key:1,class:"mainLoader"},te=e("video",{autoplay:"",loop:"",muted:"",playsinline:"",src:z,alt:""},null,-1),se=[te],ue={__name:"accounts",setup(oe){const{locale:g}=x();let a=u(g);w();let c=u(!0),r=u([]),d="copy";a.value=="en"?d="copy":a.value=="ar"&&(d="انسخ"),k();let v=L();(async()=>{c.value=!0;let t=await $.get(`${v}/banks`,{headers:{"Content-Language":`${a.value}`}});r.value=t.data.data,t.status==200&&(c.value=!1),console.log(r.value)})();function f(){document.querySelectorAll(".copy-word").forEach(o=>{o.addEventListener("click",function(n){let _=this.previousElementSibling.innerHTML;navigator.clipboard.writeText(_).then(()=>{a.value=="en"?o.innerHTML="done":o.innerHTML="تم النسخ",setTimeout(()=>{o.innerHTML=` 
                 <i class="fa-regular fa-copy"></i>
                 ${d}
                 `},1e3)})})})}return b({title:a.value=="ar"?"الحسابات / الكثيري للسيارات":"alkathiri motors / accounts"}),(t,o)=>(l(),i("div",B,[p(c)?h("",!0):(l(),i("div",C,[e("div",E,[e("div",H,[e("h3",{"data-offers":t.$t("GET our")},s(t.$t("accounts")),9,M)]),e("div",N,[(l(!0),i(T,null,j(p(r),(n,_)=>(l(),i("div",F,[e("div",S,[e("div",V,[e("h5",A,s(n.name),1),e("img",{src:n.image,class:"img-flui",style:{width:"100%",height:"100px","object-fit":"contain",border:"2px solid #eee","border-radius":"10px"}},null,8,R)]),e("div",q,[e("div",D,[e("span",G,s(t.$t("accountN")),1),e("span",I,s(n.owner_name),1)]),e("div",J,[e("span",P,s(t.$t("account number"))+": ",1),e("div",Q,[e("span",U,s(n.account_no),1),e("span",{style:{"font-size":"13px",color:"#1b395f","text-decoration":"underline"},onClick:o[0]||(o[0]=y=>{f()}),class:"copy-word"},[K,m(" "+s(t.$t("copy")),1)])])]),e("div",O,[e("span",W,s(t.$t("iBan"))+":",1),e("div",X,[e("span",Y,s(n.iban),1),e("span",{style:{"font-size":"13px",color:"#1b395f","text-decoration":"underline","white-space":"nowrap"},onClick:o[1]||(o[1]=y=>{f()}),class:"copy-word"},[Z,m(" "+s(t.$t("copy")),1)])])])])])]))),256))])])])),p(c)?(l(),i("div",ee,se)):h("",!0)]))}};export{ue as default};
