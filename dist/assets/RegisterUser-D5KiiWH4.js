import{d as v,r as g,c as f,$ as _,by as i,be as o,aM as h,aa as t,a2 as l,bC as I,a9 as r,aP as b,aN as y}from"./@vue-yfti66JX.js";import{u as x,m as w,n as S,o as B,p as z,q as C,r as s,l as k,s as A,g as P}from"./@ionic-B3KGByIv.js";import{c as N}from"./ionicons-vuVtR0Xh.js";import{u as R}from"./index-BiLyZEfA.js";import{c as L}from"./user-Cxz4jt0s.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./@stencil-CHpqkKxm.js";import"./vue-router-C1vmwl4t.js";import"./pinia-FlwmMssk.js";import"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./https-Dgi_htUI.js";import"./axios-CwoVb0Lo.js";import"./vue-toast-notification-BuDNWbXa.js";import"./vue-0gI2gMPI.js";const U=u=>(b("data-v-552cc4e9"),u=u(),y(),u),V={class:"h-full flex justify-content-center align-items-center"},q={class:"ion-margin-top ion-padding-horizontal"},H={class:"ion-margin-top ion-padding-horizontal"},M={class:"ion-margin-top ion-padding-horizontal"},j={class:"ion-margin-top ion-padding-horizontal"},E={class:"ion-margin-top ion-padding-horizontal"},O=U(()=>l("p",{class:"text-xs ion-margin-horizontal ion-padding-top"},[r("Al seleccionar Aceptar y crear cuenta, acepto los "),l("a",{class:"anchor-register"},"Términos del servicio"),r(", los "),l("a",{class:"anchor-register"},"Términos de Pago del Servicio"),r(" de RecoverySuits, así como su "),l("a",{class:"anchor-register"},"Política de privacidad"),r(". ")],-1)),$={class:"ion-margin-top ion-padding-horizontal ion-padding-top"},D=v({__name:"RegisterUser",setup(u){const d=R(),e=g({role_id:1,email:"",name:"",first_name:"",id:0}),p=x(),m=async()=>{const c={role_id:1,city_id:506030,phone:8888888888,email:e.value.email,password:e.value.password,name:e.value.name,first_name:e.value.first_name};try{const a=(await L(c)).data;d.setSession(a.token,a.user),p.push("/departments")}catch(a){console.error("Algo salio mal :(, revisa tu información")}};return f(()=>d.isLogged).value&&p.replace("/departments"),(c,a)=>(h(),_(o(P),null,{default:i(()=>[t(o(z),null,{default:i(()=>[t(o(w),null,{default:i(()=>[t(o(S),{slot:"start"},{default:i(()=>[t(o(B),{text:"Back",icon:o(N),defaultHref:"/login"},null,8,["icon"])]),_:1})]),_:1})]),_:1}),t(o(A),null,{default:i(()=>[l("div",V,[t(o(C),{class:"w-full md:w-30rem"},{default:i(()=>[l("form",{onSubmit:I(m,["prevent"]),class:"ion-margin-horizontal p-3"},[l("div",q,[t(o(s),{value:e.value.email,onInput:a[0]||(a[0]=n=>e.value.email=n.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),l("div",H,[t(o(s),{value:e.value.password,onInput:a[1]||(a[1]=n=>e.value.password=n.target.value),type:"password",label:"Password","label-placement":"floating",fill:"outline"},null,8,["value"])]),l("div",M,[t(o(s),{value:e.value.name,onInput:a[2]||(a[2]=n=>e.value.name=n.target.value),label:"Nombre(s)",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),l("div",j,[t(o(s),{value:e.value.first_name,onInput:a[3]||(a[3]=n=>e.value.first_name=n.target.value),label:"Primer Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),l("div",E,[t(o(s),{value:e.value.second_name,onInput:a[4]||(a[4]=n=>e.value.second_name=n.target.value),label:"Segundo Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),O,l("div",$,[t(o(k),{expand:"block",type:"submit"},{default:i(()=>[r("Aceptar y Crear cuenta")]),_:1})])],32)]),_:1})])]),_:1})]),_:1}))}}),se=T(D,[["__scopeId","data-v-552cc4e9"]]);export{se as default};
