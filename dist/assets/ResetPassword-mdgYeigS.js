import{d as h,r as l,c as m,$ as C,by as t,be as e,aM as R,aa as a,a9 as p,a2 as f,bC as T}from"./@vue-yfti66JX.js";import{m as P,n as A,o as M,y as N,p as O,v,s as b,l as D,z as H,q as S,g as U}from"./@ionic-BYXd9M1L.js";import{a as $}from"./ionicons-vuVtR0Xh.js";import{u as j,b as q}from"./vue-router-C1vmwl4t.js";import{r as z}from"./auth-B5JdCcTM.js";import"./@stencil-CHpqkKxm.js";import"./https-DQQShrpY.js";import"./axios-CwoVb0Lo.js";import"./index-CWE9Jaid.js";import"./pinia-FlwmMssk.js";import"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./vue-toast-notification-BuDNWbXa.js";import"./vue-0gI2gMPI.js";const F={class:"flex justify-content-center"},le=h({__name:"ResetPassword",setup(K){const w=j(),I=q(),_=w.params.token;l();const n=l(),r=l(),u=l(!1),g=[{text:"Continuar",role:"confirm",handler:()=>{I.replace("/departments")}}],B=["OK"],c=l(!1),i=l(""),V=o=>{u.value=o},k=m(()=>n.value!==r.value),x=m(()=>n.value&&r.value&&!k.value),y=async()=>{try{if(x.value){const o={token:_,password:n.value,password_confirmation:r.value};console.log(o),o.password.length>=8?(await z(o),u.value=!0,c.value=!0,i.value="Tu contraseña ha sido modificada exitosamente."):(u.value=!0,i.value="Tu contraseña debe tener más de 8 carácteres.")}else u.value=!0,c.value=!1,i.value="Las contraseñas no coinciden, porfavor revisalas."}catch(o){console.error("Algo ha salido mal, revisa tu información")}};return(o,s)=>(R(),C(e(U),null,{default:t(()=>[a(e(O),null,{default:t(()=>[a(e(P),null,{default:t(()=>[a(e(A),{slot:"start"},{default:t(()=>[a(e(M),{defaultHref:"/login",text:"Back",icon:e($)},null,8,["icon"])]),_:1}),a(e(N),null,{default:t(()=>[p("Suits")]),_:1})]),_:1})]),_:1}),a(e(S),null,{default:t(()=>[f("div",F,[f("form",{class:"w-9 mt-3",onSubmit:T(y,["prevent"])},[a(e(v),null,{default:t(()=>[a(e(b),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=d=>n.value=d),type:"password",label:"Ingresa tu nueva contraseña",min:"8","label-placement":"stacked",placeholder:"Ingresa tu nueva contraseña"},null,8,["modelValue"])]),_:1}),a(e(v),null,{default:t(()=>[a(e(b),{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=d=>r.value=d),type:"password",label:"Repite tu nueva contraseña",min:"8","label-placement":"stacked",placeholder:"Repite tu nueva contraseña"},null,8,["modelValue"])]),_:1}),a(e(D),{type:"submit",expand:"full",class:"mt-4 ml-3"},{default:t(()=>[p("Recuperar contraseña")]),_:1})],32)]),a(e(H),{"is-open":u.value,trigger:"present-alert","sub-header":i.value,buttons:c.value?g:B,onDidDismiss:s[2]||(s[2]=d=>V(!1))},null,8,["is-open","sub-header","buttons"])]),_:1})]),_:1}))}});export{le as default};