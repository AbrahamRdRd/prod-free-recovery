System.register(["./@vue-legacy-D0SgPP5D.js","./@ionic-legacy-CbonVIpO.js","./index-legacy-BYV1wGCn.js","./auth-legacy-CmpaP3cv.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js"],(function(e,a){"use strict";var t,l,n,s,r,o,u,i,c,d,p,m,f,v,g,y,h,b,w,x,_,j,C,D,S,E,k,I,L,N,P;return{setters:[e=>{t=e.d,l=e.r,n=e.aM,s=e.a1,r=e.aa,o=e.by,u=e.be,i=e.a2,c=e.a9,d=e.bC,p=e.$,m=e.a0,f=e.H,v=e.aP,g=e.aN},e=>{y=e.u,h=e.D,b=e.r,w=e.w,x=e.E,_=e.H,j=e.s,C=e.l,D=e.x,S=e.q,E=e.C,k=e.B},e=>{I=e.u},e=>{L=e.a,N=e.f},e=>{P=e._}],execute:function(){var a=document.createElement("style");a.textContent=".anchor-register[data-v-fcb40178]{cursor:pointer}.anchor-register[data-v-fcb40178]:hover{text-decoration:underline}.forgot-presente-alert[data-v-fcb40178]{cursor:pointer}\n",document.head.appendChild(a);const H={class:"forgot-presente-alert ml-3 mt-3"},K={class:"px-3"},q=(e=>(v("data-v-fcb40178"),e=e(),g(),e))((()=>i("p",{class:"ml-3"},[c(" Don't have an account yet? "),i("a",{href:"/sign-up",as:"ion-button","router-direction":"forward",id:"open-loading",class:"ml-2"},"Sign up here!")],-1)));e("L",P(t({__name:"LoginAuth",setup(e){const a=y(),t=I(),v=l({email:"",password:""}),g=l(!1),P=l(!1),z=l(!1),A=["OK"],B=[{text:"Close"},{text:"Send",handler:e=>{O(e[0])}}],J=[{placeholder:"Enter our email",type:"email"}],M=async()=>{z.value=!0;try{const e=await L(v.value);t.setSession(e.data.token,e.data.user),a.navigate("/departments")}catch(e){406==e.response.status&&(P.value=!0)}},O=async e=>{g.value=!1;try{await N({email:e})}catch(a){console.error("Check your email")}};return(e,a)=>(n(),s(f,null,[r(u(S),{class:"flex justify-content-center align-items-center h-full"},{default:o((()=>[r(u(h),{class:"w-full flex justify-content-center align-items-center h-full md:h-auto"},{default:o((()=>[r(u(b),{class:"flex flex-column justify-content-center align-items-center w-full md:w-30rem"},{default:o((()=>[i("form",{onSubmit:d(M,["prevent"]),class:"m-0 w-full"},[r(u(h),null,{default:o((()=>[r(u(w),{class:"flex justify-content-center"},{default:o((()=>[r(u(x),null,{default:o((()=>[r(u(_),{src:"https://i.imgur.com/NJrNK4Z.png",alt:"Turismo de salud. Regresa como nueva.",loading:"lazy"})])),_:1})])),_:1})])),_:1}),r(u(h),{class:"mt-3 px-3"},{default:o((()=>[r(u(j),{value:v.value.email,onInput:a[0]||(a[0]=e=>v.value.email=e.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])])),_:1}),r(u(h),{class:"mt-3 px-3"},{default:o((()=>[r(u(j),{value:v.value.password,onInput:a[1]||(a[1]=e=>v.value.password=e.target.value),label:"Password",type:"password","label-placement":"floating",fill:"outline"},null,8,["value"])])),_:1}),i("p",H,[i("a",{id:"present-alert","router-direction":"forward",onClick:a[2]||(a[2]=e=>g.value=!0)},"Did you forget your password?")]),i("div",K,[r(u(C),{expand:"block",type:"submit"},{default:o((()=>[c("Sign In")])),_:1})]),r(u(D)),q],32)])),_:1})])),_:1})])),_:1}),z.value?(n(),p(u(E),{key:0,"is-open":z.value,message:"Loading...",spinner:"circles",duration:"1000"},null,8,["is-open"])):m("",!0),r(u(k),{"is-open":g.value,trigger:"present-alert",header:"Enter your email",buttons:B,inputs:J,onDidDismiss:a[3]||(a[3]=e=>{return a=!1,void(g.value=a);var a})},null,8,["is-open"]),r(u(k),{"is-open":P.value,header:"Email or password is incorrect.",message:"Something went wrong. Please try again.",buttons:A,onDidDismiss:a[4]||(a[4]=e=>{return a=!1,void(P.value=a);var a})},null,8,["is-open"])],64))}}),[["__scopeId","data-v-fcb40178"]]))}}}));
