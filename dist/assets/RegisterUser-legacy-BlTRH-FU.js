System.register(["./index-legacy-B3rM22nZ.js","./user-legacy-7ILpQxxn.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./https-legacy-D69rJZ8x.js"],(function(e,a){"use strict";var l,t,n,o,i,r,s,u,d,c,p,m,v,g,f,h,_,b,y,x,w,z,j,I,A,S;return{setters:[e=>{l=e.d,t=e.u,n=e.r,o=e.o,i=e.a,r=e.w,s=e.b,u=e.e,d=e.f,c=e.g,p=e.h,m=e.i,v=e.j,g=e.k,f=e.l,h=e.m,_=e.n,b=e.p,y=e.q,x=e.s,w=e.t,z=e.I,j=e.v,I=e.x},e=>{A=e.c},e=>{S=e._},null],execute:function(){var a=document.createElement("style");a.textContent=".anchor-register[data-v-e03bd40c]{cursor:pointer}.anchor-register[data-v-e03bd40c]:hover{text-decoration:underline}\n",document.head.appendChild(a);const k={class:"h-full flex justify-content-center align-items-center"},P={class:"ion-margin-top ion-padding-horizontal"},C={class:"ion-margin-top ion-padding-horizontal"},E={class:"ion-margin-top ion-padding-horizontal"},R={class:"ion-margin-top ion-padding-horizontal"},T={class:"ion-margin-top ion-padding-horizontal"},q=(e=>(j("data-v-e03bd40c"),e=e(),I(),e))((()=>f("p",{class:"text-xs ion-margin-horizontal ion-padding-top"},[x("Al seleccionar Aceptar y crear cuenta, acepto los "),f("a",{class:"anchor-register"},"Términos del servicio"),x(", los "),f("a",{class:"anchor-register"},"Términos de Pago del Servicio"),x(" de RecoverySuits, así como su "),f("a",{class:"anchor-register"},"Política de privacidad"),x(". ")],-1))),B={class:"ion-margin-top ion-padding-horizontal ion-padding-top"};e("default",S(l({__name:"RegisterUser",setup(e){const a=t(),l=n({role_id:1,email:"",name:"",first_name:"",id:0}),j=u(),I=async()=>{console.log(l.value);const e={role_id:1,email:l.value.email,password:l.value.password,name:l.value.name,first_name:l.value.first_name};try{const a=await A(e);console.log("RES",a),j.navigate("/departments")}catch(a){console.error("Algo salio mal :(, revisa tu información")}};return a.isLogged&&j.navigate("/departments","forward","replace"),(e,a)=>(o(),i(s(z),null,{default:r((()=>[d(s(g),null,{default:r((()=>[d(s(c),null,{default:r((()=>[d(s(p),{slot:"start"},{default:r((()=>[d(s(m),{text:"Back",icon:s(v),defaultHref:"/departments"},null,8,["icon"])])),_:1})])),_:1})])),_:1}),d(s(w),null,{default:r((()=>[f("div",k,[d(s(h),{class:"w-full md:w-30rem"},{default:r((()=>[f("form",{onSubmit:_(I,["prevent"]),class:"ion-margin-horizontal p-3"},[f("div",P,[d(s(b),{value:l.value.email,onInput:a[0]||(a[0]=e=>l.value.email=e.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),f("div",C,[d(s(b),{value:l.value.password,onInput:a[1]||(a[1]=e=>l.value.password=e.target.value),type:"password",label:"Password","label-placement":"floating",fill:"outline"},null,8,["value"])]),f("div",E,[d(s(b),{value:l.value.name,onInput:a[2]||(a[2]=e=>l.value.name=e.target.value),label:"Nombre(s)",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),f("div",R,[d(s(b),{value:l.value.first_name,onInput:a[3]||(a[3]=e=>l.value.first_name=e.target.value),label:"Primer Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),f("div",T,[d(s(b),{value:l.value.second_name,onInput:a[4]||(a[4]=e=>l.value.second_name=e.target.value),label:"Segundo Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),q,f("div",B,[d(s(y),{expand:"block",type:"submit"},{default:r((()=>[x("Aceptar y Crear cuenta")])),_:1})])],32)])),_:1})])])),_:1})])),_:1}))}}),[["__scopeId","data-v-e03bd40c"]]))}}}));
