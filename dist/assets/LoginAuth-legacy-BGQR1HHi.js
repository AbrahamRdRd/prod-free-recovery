System.register(["./index-legacy-B3rM22nZ.js","./https-legacy-D69rJZ8x.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js"],(function(e,a){"use strict";var t,l,n,o,s,r,i,u,c,d,p,g,m,v,h,f,_,y,w,b,x,j,I,k;return{setters:[e=>{t=e.d,l=e.e,n=e.u,o=e.r,s=e.o,r=e.a,i=e.w,u=e.l,c=e.f,d=e.n,p=e.b,g=e.J,m=e.a3,v=e.K,h=e.a1,f=e.p,_=e.aG,y=e.s,w=e.q,b=e.R,x=e.m,j=e.I},e=>{I=e.h},e=>{k=e._}],execute:function(){var a=document.createElement("style");a.textContent=".anchor-register[data-v-e6c6e8d8]{cursor:pointer}.anchor-register[data-v-e6c6e8d8]:hover{text-decoration:underline}\n",document.head.appendChild(a);const z={class:"h-full flex justify-content-center align-items-center"},A={class:"ion-margin-top ion-padding-horizontal"},C={class:"ion-margin-top ion-padding-horizontal"},R={class:"ion-margin-start ion-padding-top"},S={class:"ion-padding-horizontal"};e("default",k(t({__name:"LoginAuth",emits:["change","deactiveAuth"],setup(e,{emit:a}){const t=a,k=l(),q=n(),E=o({email:"",password:""}),J=async()=>{try{const e=(await(e=>I.post("/api/auth/token",e))(E.value)).data;console.log("user auth",E.value),q.setSession(e.token,e.user),k.navigate("/","forward","replace")}catch(e){console.error("Algo salio mal :(, revisa tu correo y contraseña")}},K=()=>{t("change",!0),k.navigate("/registro")};return(e,a)=>(s(),r(p(j),null,{default:i((()=>[u("div",z,[c(p(x),{class:"w-full md:w-30rem"},{default:i((()=>[u("form",{onSubmit:d(J,["prevent"]),class:"ion-margin-horizontal"},[c(p(g),null,{default:i((()=>[c(p(m),{class:"flex justify-content-center"},{default:i((()=>[c(p(v),null,{default:i((()=>[c(p(h),{src:"https://i.imgur.com/NJrNK4Z.png",alt:"Turismo de salud. Regresa como nueva."})])),_:1})])),_:1})])),_:1}),u("div",A,[c(p(f),{value:E.value.email,onInput:a[0]||(a[0]=e=>E.value.email=e.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),u("div",C,[c(p(f),{value:E.value.password,onInput:a[1]||(a[1]=e=>E.value.password=e.target.value),label:"Password",type:"password","label-placement":"floating",fill:"outline"},null,8,["value"])]),u("p",R,[c(p(_),{to:"/recuperar-contraseña"},{default:i((()=>[y("¿Olvidaste tú contraseña?")])),_:1})]),u("div",S,[c(p(w),{expand:"block",type:"submit"},{default:i((()=>[y("Log In")])),_:1})]),c(p(b)),u("p",{class:"ion-margin-start"},[y("¿Aún no tienes cuenta? "),u("a",{class:"anchor-register",onClick:K},"Registrate aquí")])],32)])),_:1})])])),_:1}))}}),[["__scopeId","data-v-e6c6e8d8"]]))}}}));
