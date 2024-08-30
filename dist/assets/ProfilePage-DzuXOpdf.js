function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ModalProfile-C0kU1hRK.js","assets/@ionic-D3TE2VMj.js","assets/@stencil-CHpqkKxm.js","assets/vue-router-C1vmwl4t.js","assets/@vue-yfti66JX.js","assets/ionicons-lnr37WKp.js","assets/@ionic-Dr5M-HgF.css","assets/user-AD7B43q6.js","assets/https-C27KL-Mm.js","assets/axios-CwoVb0Lo.js","assets/index-DlxuvxbK.js","assets/pinia-FlwmMssk.js","assets/crypto-js-BD323iWx.js","assets/register-service-worker-TYP_X6yW.js","assets/index-D-OmhUBE.css","assets/primeflex-BRpkHBhv.css","assets/vue-toast-notification-CyaKMIrI.js","assets/vue-AlRGbnWJ.js","assets/countries-rmbBvwW1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as H,m as M,n as J,o as q,A as G,p as W,r as K,D as Q,E as X,l as r,F as Y,x as v,s as k,d as p,C as Z,B as ee,q as le,g as D,G as oe,_ as ae}from"./@ionic-D3TE2VMj.js";import{u as L}from"./index-DlxuvxbK.js";import{b as te,e as _,s as ne}from"./ionicons-lnr37WKp.js";import{g as se,u as re}from"./user-AD7B43q6.js";import{d as N,c as O,r as c,b as ue,aM as i,$ as d,by as a,aa as o,be as e,a9 as u,a2 as g,a0 as b,aP as ie,aN as de,ac as ce}from"./@vue-yfti66JX.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as pe}from"./LoginAuth-DQPzgLWR.js";import"./@stencil-CHpqkKxm.js";import"./vue-router-C1vmwl4t.js";import"./pinia-FlwmMssk.js";import"./crypto-js-BD323iWx.js";import"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./https-C27KL-Mm.js";import"./axios-CwoVb0Lo.js";import"./vue-toast-notification-CyaKMIrI.js";import"./vue-AlRGbnWJ.js";import"./auth-B_vsCuHB.js";const fe=y=>(ie("data-v-3549ccd6"),y=y(),de(),y),ve={class:"flex flex-column justify-content-center align-items-center"},ke=["src"],_e=fe(()=>g("img",{loading:"lazy",class:"border-circle",alt:"Silhouette of a person's head",src:"https://ionicframework.com/docs/img/demos/avatar.svg"},null,-1)),ye=N({__name:"ProfileInfo",setup(y){const C=ce(()=>ae(()=>import("./ModalProfile-C0kU1hRK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),m=L(),S=O(()=>m.userInfo).value,I=c(!1),T=H(),V=c(!1),w=c(),h=c(null),P=c(),n=c({}),x=c(!1),R=s=>{x.value=s},j=["Ok"],B=async()=>{var l,t;const s=m.token;try{n.value=(await se(S.id)).data;const E=(l=n.value.country_code)==null?void 0:l.phone_code;P.value="+(".concat(E,") ").concat(n.value.phone),w.value=(t=n.value.city)==null?void 0:t.state.country.name,m.setSession(s,n.value)}catch(E){console.error("Hubo un errror al traer la información del usuario.")}},f=async()=>{const s=await oe.create({component:C,componentProps:{userId:n.value,avatar:h.value}});s.present();const{data:l}=await s.onWillDismiss();l==="confirm"&&await B()},A=()=>{document.getElementById("file-upload").click()},F=async s=>{const l=new FormData;l.append("image",s);try{await re(n.value.id,l),await B()}catch(t){console.error(t.response.data.message),t.response.status===422&&(x.value=!0)}},$=s=>{const l=s.target.files[0];h.value=l,F(l)},z=()=>{V.value=!0,setTimeout(()=>{m.logout(),T.push("/")},2e3)};return ue(()=>{B()}),(s,l)=>(i(),d(e(D),null,{default:a(()=>[o(e(W),null,{default:a(()=>[o(e(M),null,{default:a(()=>[o(e(J),{slot:"start"},{default:a(()=>[o(e(q),{defaultHref:"/",icon:e(te),text:"Back"},null,8,["icon"])]),_:1}),o(e(G),null,{default:a(()=>[u("Personal profile")]),_:1})]),_:1})]),_:1}),o(e(le),{fullscreen:!0},{default:a(()=>[g("div",ve,[o(e(K),{class:"mb-6 w-full md:w-30rem"},{default:a(()=>[o(e(Q),{class:"flex justify-content-center mt-5"},{default:a(()=>[n.value.avatar?(i(),d(e(X),{key:0,onClick:A,class:"avatar_btn",as:"ion-button"},{default:a(()=>[g("img",{alt:"Silhouette of a person's head",src:n.value.avatar},null,8,ke),g("input",{type:"file",id:"file-upload",style:{display:"none"},onChange:$},null,32)]),_:1})):n.value.avatar?b("",!0):(i(),d(e(r),{key:1,class:"w-2 h-2",onClick:A,size:"large",fill:"outline",color:"dark"},{default:a(()=>[g("input",{type:"file",id:"file-upload",style:{display:"none"},onChange:$},null,32),_e]),_:1}))]),_:1}),o(e(Y),{class:"mt-5"},{default:a(()=>[o(e(v),null,{default:a(()=>[o(e(k),{label:"Name(s):",placeholder:"Jonh",modelValue:n.value.name,"onUpdate:modelValue":l[0]||(l[0]=t=>n.value.name=t),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),o(e(r),{fill:"outline",color:"dark",onClick:l[1]||(l[1]=t=>f())},{default:a(()=>[u(" Edit "),o(e(p),{slot:"end",icon:e(_),color:"dark"},null,8,["icon"])]),_:1})]),_:1}),o(e(v),null,{default:a(()=>[o(e(k),{label:"First surname:",placeholder:"Cena",modelValue:n.value.first_name,"onUpdate:modelValue":l[2]||(l[2]=t=>n.value.first_name=t),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),o(e(r),{fill:"outline",color:"dark",onClick:l[3]||(l[3]=t=>f())},{default:a(()=>[u(" Edit "),o(e(p),{slot:"end",icon:e(_),color:"dark"},null,8,["icon"])]),_:1})]),_:1}),o(e(v),null,{default:a(()=>[o(e(k),{label:"Second surname:",placeholder:"Rodríguez",modelValue:n.value.second_name,"onUpdate:modelValue":l[4]||(l[4]=t=>n.value.second_name=t),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),o(e(r),{fill:"outline",color:"dark",onClick:l[5]||(l[5]=t=>f())},{default:a(()=>[u(" Edit "),o(e(p),{slot:"end",icon:e(_),color:"dark"},null,8,["icon"])]),_:1})]),_:1}),o(e(v),null,{default:a(()=>[o(e(k),{label:"email",placeholder:"email@email.com",modelValue:n.value.email,"onUpdate:modelValue":l[6]||(l[6]=t=>n.value.email=t),"label-placement":"stacked",readonly:!I.value},null,8,["modelValue","readonly"]),I.value?b("",!0):(i(),d(e(r),{key:0,fill:"outline",color:"dark",onClick:l[7]||(l[7]=t=>f())},{default:a(()=>[u(" Edit "),o(e(p),{slot:"end",icon:e(_),color:"dark"},null,8,["icon"])]),_:1})),I.value?(i(),d(e(r),{key:1,fill:"outline",color:"dark"},{default:a(()=>[u(" Save "),o(e(p),{slot:"end",icon:e(ne),color:"dark"},null,8,["icon"])]),_:1})):b("",!0)]),_:1}),o(e(v),null,{default:a(()=>[o(e(k),{label:"Phone",placeholder:"(+52) 888-888-88-88",modelValue:P.value,"onUpdate:modelValue":l[8]||(l[8]=t=>P.value=t),"label-placement":"stacked",readonly:"",type:"text"},null,8,["modelValue"]),o(e(r),{fill:"outline",color:"dark",onClick:l[9]||(l[9]=t=>f())},{default:a(()=>[u(" Edit "),o(e(p),{slot:"end",icon:e(_),color:"dark"},null,8,["icon"])]),_:1})]),_:1}),o(e(v),null,{default:a(()=>[o(e(k),{label:"País",placeholder:"your country",modelValue:w.value,"onUpdate:modelValue":l[10]||(l[10]=t=>w.value=t),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),o(e(r),{fill:"outline",color:"dark",onClick:l[11]||(l[11]=t=>f())},{default:a(()=>[u(" Edit "),o(e(p),{slot:"end",icon:e(_),color:"dark"},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),o(e(r),{onClick:z,class:"px-1 w-full md:w-30rem",expand:"block",fill:"outline",color:"dark"},{default:a(()=>[u("Cerrar Sesión")]),_:1}),V.value?(i(),d(e(Z),{key:0,"is-open":V.value,message:"Cerrando sessión...",spinner:"circles",duration:2e3},null,8,["is-open"])):b("",!0),o(e(ee),{isOpen:x.value,header:"Please try with another image!",message:"The profile picture field must be a file of type: jpeg, png, jpg, gif.",buttons:j,onDidDismiss:l[12]||(l[12]=t=>R(!1))},null,8,["isOpen"])])]),_:1})]),_:1}))}}),ge=me(ye,[["__scopeId","data-v-3549ccd6"]]),Te=N({__name:"ProfilePage",setup(y){const C=L(),m=c();return O(()=>C.isLogged).value||(m.value=!0),(S,I)=>(i(),d(e(D),null,{default:a(()=>[m.value?(i(),d(pe,{key:1})):(i(),d(ge,{key:0}))]),_:1}))}});export{Te as default};