System.register(["./@vue-legacy-D0SgPP5D.js","./@ionic-legacy-Bo3htOyS.js","./index-legacy-BE5t0KlC.js","./auth-legacy-CUblH8lg.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./@stencil-legacy-CapHDfm8.js","./vue-router-legacy-BXDKlxlV.js","./ionicons-legacy-BYlXq-Bl.js","./pinia-legacy-DXNVVc9U.js","./register-service-worker-legacy-OLieyxJW.js","./primeflex-legacy-C84Ek2VW.js","./https-legacy-FmM330qQ.js","./axios-legacy-CUPSUh8R.js","./vue-toast-notification-legacy--LaN0e6j.js","./vue-legacy-CLucp-wY.js"],(function(e,a){"use strict";var t,l,n,s,r,o,i,u,c,d,g,p,v,m,y,f,h,b,j,w,_,x,I,C,k,z,A,D,E;return{setters:[e=>{t=e.d,l=e.r,n=e.aM,s=e.$,r=e.by,o=e.a2,i=e.aa,u=e.bC,c=e.be,d=e.a9,g=e.a0,p=e.aP,v=e.aN},e=>{m=e.u,y=e.B,f=e.C,h=e.E,b=e.K,j=e.r,w=e.l,_=e.v,x=e.q,I=e.J,C=e.w,k=e.g},e=>{z=e.u},e=>{A=e.a,D=e.f},e=>{E=e._},null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".anchor-register[data-v-1a0c3ba2]{cursor:pointer}.anchor-register[data-v-1a0c3ba2]:hover{text-decoration:underline}.forgot-presente-alert[data-v-1a0c3ba2]{cursor:pointer}\n",document.head.appendChild(a);const K=e=>(p("data-v-1a0c3ba2"),e=e(),v(),e),L={class:"h-full flex justify-content-center align-items-center"},N={class:"ion-margin-top ion-padding-horizontal"},R={class:"ion-margin-top ion-padding-horizontal"},S=K((()=>o("p",{class:"forgot-presente-alert ion-margin-start ion-padding-top"},[o("a",{id:"present-alert","router-direction":"forward"},"¿Olvidaste tú contraseña?")],-1))),q={class:"ion-padding-horizontal"},J=K((()=>o("p",{class:"ion-margin-start"},[d("¿Aún no tienes cuenta? "),o("a",{href:"/registro",as:"ion-button","router-direction":"forward",id:"open-loading",class:"anchor-register"},"Registrate aquí")],-1)));e("default",E(t({__name:"LoginAuth",emits:["change","deactiveAuth"],setup(e,{emit:a}){const t=m(),p=z(),v=l({email:"",password:""}),E=l(!1);l(!1);const K=l(!1),O=["OK"],P=[{text:"Cerrar"},{text:"Enviar",handler:e=>{T(e[0])}}],B=[{placeholder:"Ingresa tú correo",type:"email"}],M=async()=>{K.value=!0;try{const e=(await A(v.value)).data;p.setSession(e.token,e.user),t.push("/departments")}catch(e){406==e.response.status&&(E.value=!0)}},T=async e=>{try{await D({email:e})}catch(a){console.error("Revisa tú correo")}},Z=e=>{E.value=e};return(e,a)=>(n(),s(c(k),null,{default:r((()=>[o("div",L,[i(c(x),{class:"w-full md:w-30rem"},{default:r((()=>[o("form",{onSubmit:u(M,["prevent"]),class:"ion-margin-horizontal"},[i(c(y),null,{default:r((()=>[i(c(f),{class:"flex justify-content-center"},{default:r((()=>[i(c(h),null,{default:r((()=>[i(c(b),{src:"https://i.imgur.com/NJrNK4Z.png",alt:"Turismo de salud. Regresa como nueva."})])),_:1})])),_:1})])),_:1}),o("div",N,[i(c(j),{value:v.value.email,onInput:a[0]||(a[0]=e=>v.value.email=e.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),o("div",R,[i(c(j),{value:v.value.password,onInput:a[1]||(a[1]=e=>v.value.password=e.target.value),label:"Password",type:"password","label-placement":"floating",fill:"outline"},null,8,["value"])]),S,o("div",q,[i(c(w),{expand:"block",type:"submit"},{default:r((()=>[d("Log In")])),_:1})]),i(c(_)),J],32)])),_:1})]),K.value?(n(),s(c(I),{key:0,"is-open":K.value,message:"Loading...",spinner:"circles",duration:"2000"},null,8,["is-open"])):g("",!0),i(c(C),{"is-open":E.value,trigger:"present-alert",header:"Ingresa tú correo",buttons:P,inputs:B,onDidDismiss:a[2]||(a[2]=e=>Z(!1))},null,8,["is-open"]),i(c(C),{"is-open":E.value,header:"Correo o contraseñas son incorrectos.",message:"Algo salio mal. Intenta de nuevo",buttons:O,onDidDismiss:a[3]||(a[3]=e=>Z(!1))},null,8,["is-open"])])),_:1}))}}),[["__scopeId","data-v-1a0c3ba2"]]))}}}));
