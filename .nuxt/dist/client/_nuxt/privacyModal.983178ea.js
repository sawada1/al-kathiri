import{g as m}from"./url.f2316853.js";import{u}from"./entry.a1676f38.js";import{a as b}from"./axios.4a70c6fc.js";import{a as s,z as n,L as d,M as e,N as t,u as i,O as p}from"./swiper-vue.eb1e8a16.js";const y={class:"modal fade",id:"termsModal",tabindex:"-1","aria-labelledby":"termsModalLabel","aria-hidden":"true"},$={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},f={class:"modal-content"},L={class:"modal-header"},M={class:"modal-title fs-5",id:"exampleModalLabel"},k={class:"modal-body"},C={key:0,class:"spinner-border",role:"status"},F={class:"modal-footer"},B={type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},D={type:"button",class:"btn btn-primary"},q={__name:"TermsModal",setup(g){let r=m();const{locale:c}=u();let _=s(c),o=s(!0),l=s([]);return(async()=>{let a=await b.get(`${r}/general`,{headers:{"Content-Language":`${_.value}`}});a.status==200&&(o.value=!1),l.value=a.data})(),(a,v)=>(n(),d("div",null,[e("div",y,[e("div",$,[e("div",f,[e("div",L,[e("h1",M,t(a.$t("Term And Conditions")),1)]),e("div",k,[e("p",null,t(i(l).terms_and_conditions),1),i(o)?(n(),d("div",C)):p("",!0)]),e("div",F,[e("button",B,t(a.$t("close")),1),e("button",D,t(a.$t("Send message")),1)])])])])]))}},N={class:"modal fade",id:"privacyModal",tabindex:"-1","aria-labelledby":"privacyModalLabel","aria-hidden":"true"},S={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},w={class:"modal-content"},x={class:"modal-header"},P={class:"modal-title fs-5",id:"exampleModalLabel"},T={class:"modal-body"},V={key:0,class:"spinner-border",role:"status"},z={class:"modal-footer"},A={type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},E={type:"button",class:"btn btn-primary"},G={__name:"privacyModal",setup(g){let r=m();const{locale:c}=u();let _=s(c),o=s(!0),l=s([]);return(async()=>{let a=await b.get(`${r}/general`,{headers:{"Content-Language":`${_.value}`}});a.status==200&&(o.value=!1),l.value=a.data})(),(a,v)=>(n(),d("div",null,[e("div",N,[e("div",S,[e("div",w,[e("div",x,[e("h1",P,t(a.$t("Privacy Policy")),1)]),e("div",T,[e("p",null,t(i(l).privacy_policy),1),i(o)?(n(),d("div",V)):p("",!0)]),e("div",z,[e("button",A,t(a.$t("close")),1),e("button",E,t(a.$t("Send message")),1)])])])])]))}};export{q as _,G as a};
