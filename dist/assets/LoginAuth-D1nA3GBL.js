import{d as L,r as p,aM as m,$ as g,by as n,a2 as s,aa as o,bC as B,be as e,a9 as h,a0 as N,aP as R,aN as S}from"./@vue-yfti66JX.js";import{u as k,B as q,C as z,E as D,K as O,r as f,l as P,v as V,q as E,J as K,w as v,g as T}from"./@ionic-B3KGByIv.js";import{u as $}from"./index-BiLyZEfA.js";import{a as j,f as J}from"./auth-BLtBn9Nc.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./@stencil-CHpqkKxm.js";import"./vue-router-C1vmwl4t.js";import"./ionicons-vuVtR0Xh.js";import"./pinia-FlwmMssk.js";import"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./https-Dgi_htUI.js";import"./axios-CwoVb0Lo.js";import"./vue-toast-notification-BuDNWbXa.js";import"./vue-0gI2gMPI.js";const I=l=>(R("data-v-1a0c3ba2"),l=l(),S(),l),Z={class:"h-full flex justify-content-center align-items-center"},F={class:"ion-margin-top ion-padding-horizontal"},G={class:"ion-margin-top ion-padding-horizontal"},H=I(()=>s("p",{class:"forgot-presente-alert ion-margin-start ion-padding-top"},[s("a",{id:"present-alert","router-direction":"forward"},"¿Olvidaste tú contraseña?")],-1)),Q={class:"ion-padding-horizontal"},U=I(()=>s("p",{class:"ion-margin-start"},[h("¿Aún no tienes cuenta? "),s("a",{href:"/registro",as:"ion-button","router-direction":"forward",id:"open-loading",class:"anchor-register"},"Registrate aquí")],-1)),W=L({__name:"LoginAuth",emits:["change","deactiveAuth"],setup(l,{emit:X}){const _=k(),w=$(),r=p({email:"",password:""}),u=p(!1);p(!1);const d=p(!1),b=["OK"],y=[{text:"Cerrar"},{text:"Enviar",handler:t=>{A(t[0])}}],x=[{placeholder:"Ingresa tú correo",type:"email"}],C=async()=>{d.value=!0;try{const t=(await j(r.value)).data;w.setSession(t.token,t.user),_.push("/departments")}catch(t){t.response.status==406&&(u.value=!0)}},A=async t=>{try{await J({email:t})}catch(a){console.error("Revisa tú correo")}},c=t=>{u.value=t};return(t,a)=>(m(),g(e(T),null,{default:n(()=>[s("div",Z,[o(e(E),{class:"w-full md:w-30rem"},{default:n(()=>[s("form",{onSubmit:B(C,["prevent"]),class:"ion-margin-horizontal"},[o(e(q),null,{default:n(()=>[o(e(z),{class:"flex justify-content-center"},{default:n(()=>[o(e(D),null,{default:n(()=>[o(e(O),{src:"https://i.imgur.com/NJrNK4Z.png",alt:"Turismo de salud. Regresa como nueva."})]),_:1})]),_:1})]),_:1}),s("div",F,[o(e(f),{value:r.value.email,onInput:a[0]||(a[0]=i=>r.value.email=i.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),s("div",G,[o(e(f),{value:r.value.password,onInput:a[1]||(a[1]=i=>r.value.password=i.target.value),label:"Password",type:"password","label-placement":"floating",fill:"outline"},null,8,["value"])]),H,s("div",Q,[o(e(P),{expand:"block",type:"submit"},{default:n(()=>[h("Log In")]),_:1})]),o(e(V)),U],32)]),_:1})]),d.value?(m(),g(e(K),{key:0,"is-open":d.value,message:"Loading...",spinner:"circles",duration:"2000"},null,8,["is-open"])):N("",!0),o(e(v),{"is-open":u.value,trigger:"present-alert",header:"Ingresa tú correo",buttons:y,inputs:x,onDidDismiss:a[2]||(a[2]=i=>c(!1))},null,8,["is-open"]),o(e(v),{"is-open":u.value,header:"Correo o contraseñas son incorrectos.",message:"Algo salio mal. Intenta de nuevo",buttons:b,onDidDismiss:a[3]||(a[3]=i=>c(!1))},null,8,["is-open"])]),_:1}))}}),ge=M(W,[["__scopeId","data-v-1a0c3ba2"]]);export{ge as default};
