System.register(["./@vue-legacy-D0SgPP5D.js","./@ionic-legacy-Bo3htOyS.js","./ionicons-legacy-BYlXq-Bl.js","./index-legacy-BE5t0KlC.js","./user-legacy-Dqfz8PXZ.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./@stencil-legacy-CapHDfm8.js","./vue-router-legacy-BXDKlxlV.js","./pinia-legacy-DXNVVc9U.js","./register-service-worker-legacy-OLieyxJW.js","./primeflex-legacy-C84Ek2VW.js","./https-legacy-FmM330qQ.js","./axios-legacy-CUPSUh8R.js","./vue-toast-notification-legacy--LaN0e6j.js","./vue-legacy-CLucp-wY.js"],(function(e,a){"use strict";var l,n,t,i,o,s,r,u,c,d,p,g,m,v,f,y,_,h,b,j,x,w,z,A,I,S,P;return{setters:[e=>{l=e.d,n=e.r,t=e.c,i=e.$,o=e.by,s=e.be,r=e.aM,u=e.aa,c=e.a2,d=e.bC,p=e.a9,g=e.aP,m=e.aN},e=>{v=e.u,f=e.m,y=e.n,_=e.o,h=e.p,b=e.q,j=e.r,x=e.l,w=e.s,z=e.g},e=>{A=e.c},e=>{I=e.u},e=>{S=e.c},e=>{P=e._},null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".anchor-register[data-v-552cc4e9]{cursor:pointer}.anchor-register[data-v-552cc4e9]:hover{text-decoration:underline}\n",document.head.appendChild(a);const k={class:"h-full flex justify-content-center align-items-center"},C={class:"ion-margin-top ion-padding-horizontal"},E={class:"ion-margin-top ion-padding-horizontal"},N={class:"ion-margin-top ion-padding-horizontal"},R={class:"ion-margin-top ion-padding-horizontal"},T={class:"ion-margin-top ion-padding-horizontal"},q=(e=>(g("data-v-552cc4e9"),e=e(),m(),e))((()=>c("p",{class:"text-xs ion-margin-horizontal ion-padding-top"},[p("Al seleccionar Aceptar y crear cuenta, acepto los "),c("a",{class:"anchor-register"},"Términos del servicio"),p(", los "),c("a",{class:"anchor-register"},"Términos de Pago del Servicio"),p(" de RecoverySuits, así como su "),c("a",{class:"anchor-register"},"Política de privacidad"),p(". ")],-1))),B={class:"ion-margin-top ion-padding-horizontal ion-padding-top"};e("default",P(l({__name:"RegisterUser",setup(e){const a=I(),l=n({role_id:1,email:"",name:"",first_name:"",id:0}),g=v(),m=async()=>{const e={role_id:1,city_id:506030,phone:8888888888,email:l.value.email,password:l.value.password,name:l.value.name,first_name:l.value.first_name};try{const l=(await S(e)).data;a.setSession(l.token,l.user),g.push("/departments")}catch(n){console.error("Algo salio mal :(, revisa tu información")}};return t((()=>a.isLogged)).value&&g.replace("/departments"),(e,a)=>(r(),i(s(z),null,{default:o((()=>[u(s(h),null,{default:o((()=>[u(s(f),null,{default:o((()=>[u(s(y),{slot:"start"},{default:o((()=>[u(s(_),{text:"Back",icon:s(A),defaultHref:"/login"},null,8,["icon"])])),_:1})])),_:1})])),_:1}),u(s(w),null,{default:o((()=>[c("div",k,[u(s(b),{class:"w-full md:w-30rem"},{default:o((()=>[c("form",{onSubmit:d(m,["prevent"]),class:"ion-margin-horizontal p-3"},[c("div",C,[u(s(j),{value:l.value.email,onInput:a[0]||(a[0]=e=>l.value.email=e.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),c("div",E,[u(s(j),{value:l.value.password,onInput:a[1]||(a[1]=e=>l.value.password=e.target.value),type:"password",label:"Password","label-placement":"floating",fill:"outline"},null,8,["value"])]),c("div",N,[u(s(j),{value:l.value.name,onInput:a[2]||(a[2]=e=>l.value.name=e.target.value),label:"Nombre(s)",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),c("div",R,[u(s(j),{value:l.value.first_name,onInput:a[3]||(a[3]=e=>l.value.first_name=e.target.value),label:"Primer Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),c("div",T,[u(s(j),{value:l.value.second_name,onInput:a[4]||(a[4]=e=>l.value.second_name=e.target.value),label:"Segundo Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),q,c("div",B,[u(s(x),{expand:"block",type:"submit"},{default:o((()=>[p("Aceptar y Crear cuenta")])),_:1})])],32)])),_:1})])])),_:1})])),_:1}))}}),[["__scopeId","data-v-552cc4e9"]]))}}}));
