import{d as v,u as g,r as f,a as _,o as h,b as I,w as s,e as o,f as b,g as t,I as x,h as y,i as w,j as S,k as B,m as l,n as k,p as z,q as i,s as A,t as r,v as C,l as P,x as R,y as L}from"./index-b4t3Mdji.js";import{c as N}from"./user-BvSx9lCV.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./https-SOK1QiRA.js";import"./axios-CwoVb0Lo.js";const U=u=>(R("data-v-bf73471a"),u=u(),L(),u),V={class:"h-full flex justify-content-center align-items-center"},j={class:"ion-margin-top ion-padding-horizontal"},q={class:"ion-margin-top ion-padding-horizontal"},H={class:"ion-margin-top ion-padding-horizontal"},E={class:"ion-margin-top ion-padding-horizontal"},M={class:"ion-margin-top ion-padding-horizontal"},O=U(()=>l("p",{class:"text-xs ion-margin-horizontal ion-padding-top"},[r("Al seleccionar Aceptar y crear cuenta, acepto los "),l("a",{class:"anchor-register"},"Términos del servicio"),r(", los "),l("a",{class:"anchor-register"},"Términos de Pago del Servicio"),r(" de RecoverySuits, así como su "),l("a",{class:"anchor-register"},"Política de privacidad"),r(". ")],-1)),D={class:"ion-margin-top ion-padding-horizontal ion-padding-top"},F=v({__name:"RegisterUser",setup(u){const d=g(),e=f({role_id:1,email:"",name:"",first_name:"",id:0}),p=b(),m=async()=>{const c={role_id:1,email:e.value.email,password:e.value.password,name:e.value.name,first_name:e.value.first_name};try{const a=(await N(c)).data;d.setSession(a.token,a.user),p.push("/departments")}catch(a){console.error("Algo salio mal :(, revisa tu información")}};return _(()=>d.isLogged).value&&p.replace("/departments"),(c,a)=>(h(),I(o(P),null,{default:s(()=>[t(o(B),null,{default:s(()=>[t(o(x),null,{default:s(()=>[t(o(y),{slot:"start"},{default:s(()=>[t(o(w),{text:"Back",icon:o(S),defaultHref:"/login"},null,8,["icon"])]),_:1})]),_:1})]),_:1}),t(o(C),null,{default:s(()=>[l("div",V,[t(o(k),{class:"w-full md:w-30rem"},{default:s(()=>[l("form",{onSubmit:z(m,["prevent"]),class:"ion-margin-horizontal p-3"},[l("div",j,[t(o(i),{value:e.value.email,onInput:a[0]||(a[0]=n=>e.value.email=n.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),l("div",q,[t(o(i),{value:e.value.password,onInput:a[1]||(a[1]=n=>e.value.password=n.target.value),type:"password",label:"Password","label-placement":"floating",fill:"outline"},null,8,["value"])]),l("div",H,[t(o(i),{value:e.value.name,onInput:a[2]||(a[2]=n=>e.value.name=n.target.value),label:"Nombre(s)",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),l("div",E,[t(o(i),{value:e.value.first_name,onInput:a[3]||(a[3]=n=>e.value.first_name=n.target.value),label:"Primer Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),l("div",M,[t(o(i),{value:e.value.second_name,onInput:a[4]||(a[4]=n=>e.value.second_name=n.target.value),label:"Segundo Apellido",type:"text","label-placement":"floating",fill:"outline"},null,8,["value"])]),O,l("div",D,[t(o(A),{expand:"block",type:"submit"},{default:s(()=>[r("Aceptar y Crear cuenta")]),_:1})])],32)]),_:1})])]),_:1})]),_:1}))}}),Y=T(F,[["__scopeId","data-v-bf73471a"]]);export{Y as default};
