import{_ as E}from"./nuxt-link.44fb5eba.js";import{_ as K,a as O}from"./privacyModal.4fdbb5aa.js";import{b as p,o as Q,J as k,L as a,m as o,A as r,u as s,M as e,Q as C,a as h,Z as y,V as H,W,ac as Y,aa as j,ad as x,y as $,N as v,O as z,P as J}from"./swiper-vue.cbc5cb6b.js";import{_ as Z,u as G,a as X,b as S,n as aa}from"./entry.94a7074b.js";import{u as ta}from"./composables.4c8a3063.js";import{a as sa,g as ea}from"./axios.e739bd3a.js";import{u as B}from"./vue.f36acd1f.482fc04a.js";import{e as oa}from"./bus.388691f6.js";import{_ as q}from"./sub.671f762d.js";const na=""+new URL("logo.1826bc22.svg",import.meta.url).href,la=""+new URL("ar.1c92dfbb.svg",import.meta.url).href,ia=""+new URL("en.20b1032a.svg",import.meta.url).href,ra=""+new URL("Icon-awesome-whatsapp.257b06aa.svg",import.meta.url).href,ca=""+new URL("footer2.6db134cc.png",import.meta.url).href,da=""+new URL("logo-footer.df9dc81b.svg",import.meta.url).href;const d=b=>(z("data-v-d4afc3e7"),b=b(),J(),b),ua={class:"navbar navbar-expand-lg active",style:{padding:"20px 30px"}},_a={class:"container"},pa=d(()=>a("img",{src:na,alt:"الكثيري للسيارات",class:"navbar-brand"},null,-1)),va=x('<button style="box-shadow:none;" class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-d4afc3e7><span class="sr-only" data-v-d4afc3e7>Toggle navigation</span><span class="icon-bar" data-v-d4afc3e7></span><span class="icon-bar" data-v-d4afc3e7></span><span class="icon-bar" data-v-d4afc3e7></span></button>',1),fa={class:"collapse navbar-collapse",id:"navbarSupportedContent"},ma={id:"navbar-tabs",class:"navbar-nav me-auto mb-2 mb-lg-0"},ha={class:"nav-item"},ga={class:"nav-item"},ba={class:"nav-item"},ka={class:"nav-item"},ya={class:"nav-item"},$a={class:"nav-item"},wa={class:"nav-item"},La={class:"nav-item",id:"nav-item",style:{}},Ca={class:""},Sa={class:"mainBook d-flex align-items-center text-center gap-5"},Ra={class:"icons d-flex align-items-center gap-3"},Ia={class:"book nav-link",style:{}},Ma={id:"btn-navbar",class:"btn-navbar"},Na=["placeholder"],Ta=["href"],Ba=d(()=>a("img",{src:ra,alt:""},null,-1)),qa=[Ba],Pa={class:"footer",id:"mainFooter",style:{"min-height":"50vh"}},Ua=d(()=>a("div",{class:"img-left"},[a("img",{src:q,alt:""})],-1)),Aa=d(()=>a("div",{class:"img-right"},[a("img",{src:q,alt:""})],-1)),Fa={class:"mainboxes position-relative row gap-5 justify-content-center align-items-center"},Va=d(()=>a("div",{class:"box col-xl-2 col-lg-4 col-md-6 col-sm-12"},[a("img",{src:ca,alt:"الكثيري للسيارات"})],-1)),Da={class:"box col-xl-2 col-lg-4 col-md-6 col-sm-12"},Ea={class:"links"},Ka={class:"box col-xl-2 col-lg-4 col-md-6 col-sm-12"},Oa={class:"links"},Qa={type:"button","data-bs-toggle":"modal","data-bs-target":"#termsModal"},Ha={type:"button","data-bs-toggle":"modal","data-bs-target":"#privacyModal"},Wa={class:"box theicons col-xl-3 col-lg-4 col-md-6 col-sm-12"},Ya={class:"icons"},ja=["href"],xa=d(()=>a("i",{class:"fa-brands fa-facebook-f"},null,-1)),za=[xa],Ja=["href"],Za=d(()=>a("i",{class:"fa-brands fa-whatsapp"},null,-1)),Ga=[Za],Xa=["href"],at=d(()=>a("i",{class:"fa-brands fa-instagram"},null,-1)),tt=[at],st=["href"],et=d(()=>a("i",{class:"fa-brands fa-twitter"},null,-1)),ot=[et],nt={key:0,class:"spinner-border spinner-border-sm",role:"status"},lt=d(()=>a("span",{class:"visually-hidden"},"Loading...",-1)),it=[lt],rt={class:"book mb-4"},ct={class:"fw-bold"},dt={class:"text"},ut=d(()=>a("a",{target:"_blank",href:"https://webstdy.com/ar?utm_source=alkathiri-foorter&utm_medium=referral"},[a("img",{src:da,alt:"webstdy"})],-1)),_t={__name:"default",setup(b){let c=p(!1),_=p("");const{locales:pt,locale:f,setLocale:R}=G(),n=ta();p("en");const I=p(f);let P=ea(),m=p([]),w=p(!1);(async()=>{w.value=!0;let t=await sa(`${P}/general`,{headers:{"Content-Language":`${I.value}`}});t.status==200&&(w.value=!1),m.value=t.data})();const L=X();S();let M=p(!1),g=p(!1);(()=>{L.options.history.location=="/",window.addEventListener("scroll",()=>{window.scrollY>=105?M.value=!0:window.scrollY==0&&(M.value=!1)})})();const U=()=>{window.scrollTo({top:0,behavior:"smooth"})},N=async()=>{f.value=f.value==="en"?"ar":"en",f.value=="ar"?(R("ar"),B({htmlAttrs:{lang:"ar",dir:"rtl"}})):(B({htmlAttrs:{lang:"en",dir:"ltr"}}),R("en"));const t=S().query;await aa(n({path:S().path,query:t},void 0,{preserveQuery:!0}))},A=()=>{document.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",()=>{document.querySelector(".navbar-collapse").classList.remove("show"),document.querySelector(".navbar-toggler").classList.add("collapsed")})})},F=t=>{oa.callPageMethod(t)},T=()=>{if(_.value){const t={name:_.value},i=I.value+"/brandcar";L.push({path:`/${i}`,query:t}),F(_.value),_.value=""}};return Q(()=>{A()}),(t,i)=>{const l=E,V=K,D=O;return $(),k("div",null,[a("nav",ua,[a("div",_a,[o(l,{to:s(n)("/")},{default:r(()=>[pa]),_:1},8,["to"]),va,a("div",fa,[a("ul",ma,[a("li",ha,[o(l,{to:s(n)("/"),class:"nav-link","aria-current":"page"},{default:r(()=>[v(e(t.$t("home")),1)]),_:1},8,["to"])]),a("li",ga,[o(l,{to:s(n)("/brands"),class:"nav-link"},{default:r(()=>[v(e(t.$t("cars")),1)]),_:1},8,["to"])]),a("li",ba,[o(l,{to:s(n)("/offers"),class:"nav-link"},{default:r(()=>[v(e(t.$t("offers")),1)]),_:1},8,["to"])]),a("li",ka,[o(l,{to:s(n)("/contact"),class:"nav-link"},{default:r(()=>[v(e(t.$t("contact us")),1)]),_:1},8,["to"])]),a("li",ya,[o(l,{to:s(n)("/about"),class:"nav-link"},{default:r(()=>[v(e(t.$t("about us")),1)]),_:1},8,["to"])]),a("li",$a,[o(l,{to:s(n)("/careers"),class:"nav-link"},{default:r(()=>[v(e(t.$t("careers")),1)]),_:1},8,["to"])]),a("li",wa,[o(l,{to:s(n)("/services"),class:"nav-link"},{default:r(()=>[v(e(t.$t("accessories")),1)]),_:1},8,["to"])]),a("li",La,[a("span",Ca,e(t.$t("new")),1),o(l,{to:s(n)("/notFound"),class:"nav-link"},{default:r(()=>[v(e(t.$t("unavailable car")),1)]),_:1},8,["to"])])]),a("div",Sa,[a("div",Ra,[s(f)=="en"?($(),k("img",{key:0,onClick:i[0]||(i[0]=u=>N()),src:la,alt:"",class:"nav-link"})):C("",!0),s(f)=="ar"?($(),k("img",{key:1,onClick:i[1]||(i[1]=u=>N()),src:ia,alt:"",class:"nav-link"})):C("",!0),o(l,{to:s(n)("/fav"),class:"nav-link",onClick:i[2]||(i[2]=u=>(h(g)?g.value=!0:g=!0,t.counter=s(L).options.history.location))},{default:r(()=>[a("i",{class:y(["fa-heart",{"fa-regular":!s(g),"fa-solid":s(g)}])},null,2)]),_:1},8,["to"]),a("i",{class:y(["fa-solid fa-magnifying-glass search-icon",{active:s(c)}]),onClick:i[3]||(i[3]=u=>h(c)?c.value=!s(c):c=!s(c))},null,2),a("i",{class:y(["fa-solid fa-xmark close-search",{active:s(c)}]),onClick:i[4]||(i[4]=u=>h(c)?c.value=!s(c):c=!s(c))},null,2)]),a("div",Ia,[o(l,{to:s(n)("/maintenance")},{default:r(()=>[a("button",Ma,e(t.$t("book appointment"))+" "+e(t.$t("For Maintenance")),1)]),_:1},8,["to"])])])])]),a("div",{class:y(["searchBarByName",{active:s(c)}])},[H(a("input",{onKeyup:i[5]||(i[5]=Y(u=>(T(),h(c)?c.value=!1:c=!1),["enter"])),type:"text","onUpdate:modelValue":i[6]||(i[6]=u=>h(_)?_.value=u:_=u),placeholder:t.$t("Find your car...")},null,40,Na),[[W,s(_)]]),a("i",{onClick:i[7]||(i[7]=u=>(T(),h(c)?c.value=!1:c=!1)),class:"fa-solid fa-magnifying-glass"})],2)]),a("a",{class:"fixedIcon",target:"_blank",href:`https://wa.me/${s(m).whatsapp}`},qa,8,Ta),j(t.$slots,"default",{},void 0,!0),o(V),o(D),a("div",Pa,[Ua,Aa,a("div",Fa,[Va,a("div",Da,[a("h4",null,e(t.$t("Important Links")),1),a("div",Ea,[o(l,{to:s(n)("/")},{default:r(()=>[a("span",null,e(t.$t("home")),1)]),_:1},8,["to"]),o(l,{to:s(n)("/brands")},{default:r(()=>[a("span",null,e(t.$t("cars")),1)]),_:1},8,["to"]),o(l,{to:s(n)("/offers")},{default:r(()=>[a("span",null,e(t.$t("offers")),1)]),_:1},8,["to"]),o(l,{to:s(n)("/brands")},{default:r(()=>[a("span",null,e(t.$t("purchase")),1)]),_:1},8,["to"]),o(l,{to:s(n)("/faQ")},{default:r(()=>[a("span",null,e(t.$t("faq")),1)]),_:1},8,["to"])])]),a("div",Ka,[a("div",Oa,[o(l,{to:s(n)("/services")},{default:r(()=>[a("span",null,e(t.$t("accessories")),1)]),_:1},8,["to"]),o(l,{to:s(n)("/accounts")},{default:r(()=>[a("span",null,e(t.$t("accounts")),1)]),_:1},8,["to"]),o(l,{to:s(n)("/contact")},{default:r(()=>[a("span",null,e(t.$t("contact us")),1)]),_:1},8,["to"]),o(l,{to:s(n)("/news")},{default:r(()=>[a("span",null,e(t.$t("news")),1)]),_:1},8,["to"]),o(l,{to:s(n)("/careers")},{default:r(()=>[a("span",null,e(t.$t("careers")),1)]),_:1},8,["to"]),a("span",Qa,e(t.$t("Term And Conditions")),1),a("span",Ha,e(t.$t("Privacy Policy")),1)])]),a("div",Wa,[a("div",Ya,[a("a",{target:"_blank",href:s(m).facebook_url},za,8,ja),a("a",{target:"_blank",href:`https://wa.me/${s(m).whatsapp}`},Ga,8,Ja),a("a",{target:"_blank",href:s(m).instagram_url},tt,8,Xa),a("a",{target:"_blank",href:s(m).twitter_url},ot,8,st)]),s(w)?($(),k("div",nt,it)):C("",!0),a("div",rt,[o(l,{to:s(n)("/maintenance")},{default:r(()=>[a("span",ct,e(t.$t("book appointment"))+" "+e(t.$t("For Maintenance")),1)]),_:1},8,["to"])])])]),a("div",dt,[a("span",null,"© "+e(t.$t("AL KATHIRI MOTORS"))+", "+e(t.$t("All Rights Reserved")),1),a("p",null,[a("span",null,e(t.$t("Developed By")),1),ut])]),a("i",{onClick:i[8]||(i[8]=u=>U()),class:"fa-solid fa-arrow-up",id:"arrow-up"})])])}}},Ct=Z(_t,[["__scopeId","data-v-d4afc3e7"]]);export{Ct as default};