import{d as y,r as x,v as w,a as t,w as p,j as o,u as l,M as I,F as z,s as c,o as k,O as A,e as i,P as s,p as C,i as S,_ as B}from"./index-B3Rldily.js";import{a as M}from"./axios-CwoVb0Lo.js";const P=r=>(C("data-v-ff94337a"),r=r(),S(),r),N={class:"ion-margin-top ion-padding-horizontal"},O={class:"ion-margin-top ion-padding-horizontal"},R={class:"ion-margin-top ion-padding-horizontal"},j={class:"ion-margin-top ion-padding-horizontal"},F={class:"ion-margin-top ion-padding-horizontal"},T=P(()=>o("p",{class:"text-xs ion-margin-horizontal ion-padding-top"},[i("Al seleccionar Aceptar y crear cuenta, acepto los "),o("a",{class:"anchor-register"},"Términos del servicio"),i(", los "),o("a",{class:"anchor-register"},"Términos de Pago del Servicio"),i(" de RecoverySuits, así como su "),o("a",{class:"anchor-register"},"Política de privacidad"),i(". ")],-1)),U={class:"ion-margin-top ion-padding-horizontal ion-padding-top"},V=y({__name:"RegisterUser",emits:["backbutton"],setup(r,{emit:d}){const e=x({email:"",password:"",name:"",first_name:"",second_name:"",file:""}),m=d,g=async()=>{console.log("reques",e.value);try{const u=await M.post("http://localhost:8000/api/users",e.value,{headers:{Authorization:"Bearer 2|7MegBoODkuGljYnIOQMXlgHYZvnizRFKUSmCMh4J997cbd58"}});console.log("res",u.data)}catch(u){console.error("Algo salio mal :(, revisa tu información")}},v=()=>{console.log("BACK"),m("backbutton",!0)};return(u,a)=>{const _=c("ion-icon"),f=c("ion-label"),h=c("ion-item"),b=c("ion-button");return k(),w(z,null,[t(h,{lines:"full"},{default:p(()=>[o("a",{onClick:v,class:"anchor-register flex justify-content-center align-items-center"},[t(_,{icon:l(A),style:{height:"1.5rem",width:"1.5rem"}},null,8,["icon"])]),t(f,{class:"ion-margin-start"},{default:p(()=>[i("¡Comienza tú registro!")]),_:1})]),_:1}),o("form",{onSubmit:I(g,["prevent"]),class:"ion-margin-horizontal ion-padding-top overflow-scroll surface-overlay p-3"},[o("div",N,[t(l(s),{value:e.value.email,onInput:a[0]||(a[0]=n=>e.value.email=n.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),o("div",O,[t(l(s),{value:e.value.password,onInput:a[1]||(a[1]=n=>e.value.password=n.target.value),type:"password",label:"Password","label-placement":"floating",fill:"outline"},null,8,["value"])]),o("div",R,[t(l(s),{value:e.value.name,onInput:a[2]||(a[2]=n=>e.value.name=n.target.value),label:"Nombre(s)",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),o("div",j,[t(l(s),{value:e.value.first_name,onInput:a[3]||(a[3]=n=>e.value.first_name=n.target.value),label:"Primer Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),o("div",F,[t(l(s),{value:e.value.second_name,onInput:a[4]||(a[4]=n=>e.value.second_name=n.target.value),label:"Segundo Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),T,o("div",U,[t(b,{expand:"block",type:"submit"},{default:p(()=>[i("Aceptar y Crear cuenta")]),_:1})])],32)],64)}}}),K=B(V,[["__scopeId","data-v-ff94337a"]]);export{K as default};
