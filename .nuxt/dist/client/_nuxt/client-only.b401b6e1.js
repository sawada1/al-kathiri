import{f as o,a as u,m as d,L as k}from"./swiper-vue.bc72199a.js";const i=o({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(m,{slots:a,attrs:c}){const l=u(!1);return d(()=>{l.value=!0}),e=>{var t;if(l.value)return(t=a.default)==null?void 0:t.call(a);const n=a.fallback||a.placeholder;if(n)return n();const r=e.fallback||e.placeholder||"",f=e.fallbackTag||e.placeholderTag||"span";return k(f,c,r)}}});export{i as _};
