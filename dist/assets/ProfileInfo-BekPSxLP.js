import{d as B,r as b,u as P,aC as Y,o as _,c as A,f as l,w as a,b as e,g as N,h as U,q as i,s as r,y as $,k as h,R as m,p as c,t as R,H as z,aD as x,e as q,l as w,m as F,J as M,a as y,K as O,S as C,Q as T,M as p,aE as v,aF as j,I as H,v as L,x as K}from"./index-MuRIsHgE.js";import{g as Q,u as W}from"./user-CrKaZ_1j.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./https-bBgRv3Y8.js";const X=B({__name:"ModalProfile",setup(k){const u=b(),t=b({email:"",name:"",first_name:"",second_name:"",image:"",deleted_at:null}),I=()=>x.dismiss(null,"cancel"),E=P(),g=JSON.parse(E.userInfo);console.log("userInformation",g);const f=async()=>{try{t.value=(await Q(g.id)).data}catch(V){console.error("Algo salio mal, intenta de nuevo.")}},S=async()=>{console.log("Request",t.value);const V={email:t.value.email,name:t.value.name,first_name:t.value.first_name,second_name:t.value.second_name};try{const s=(await W(g.id,V)).data;console.log("Confrim",s),x.dismiss(u.value,"confirm")}catch(s){console.error("Algo salio mal al actualizar.")}};return Y(()=>{f()}),(V,s)=>(_(),A(z,null,[l(e(h),null,{default:a(()=>[l(e(N),null,{default:a(()=>[l(e(U),{slot:"start"},{default:a(()=>[l(e(i),{color:"medium",onClick:I},{default:a(()=>[r("Cancel")]),_:1})]),_:1}),l(e($),null,{default:a(()=>[r("Actualiza tú información")]),_:1}),l(e(U),{slot:"end"},{default:a(()=>[l(e(i),{onClick:S,strong:!0},{default:a(()=>[r("Confirm")]),_:1})]),_:1})]),_:1})]),_:1}),l(e(R),{class:"ion-padding"},{default:a(()=>[l(e(m),null,{default:a(()=>[l(e(c),{"label-placement":"stacked",label:"Enter your name(s)",modelValue:t.value.name,"onUpdate:modelValue":s[0]||(s[0]=d=>t.value.name=d),placeholder:"Your name"},null,8,["modelValue"])]),_:1}),l(e(m),null,{default:a(()=>[l(e(c),{"label-placement":"stacked",label:"Enter your second name",modelValue:t.value.first_name,"onUpdate:modelValue":s[1]||(s[1]=d=>t.value.first_name=d),placeholder:"Your second name"},null,8,["modelValue"])]),_:1}),l(e(m),null,{default:a(()=>[l(e(c),{"label-placement":"stacked",label:"Enter your last name",modelValue:t.value.second_name,"onUpdate:modelValue":s[2]||(s[2]=d=>t.value.second_name=d),placeholder:"Your last name"},null,8,["modelValue"])]),_:1}),l(e(m),null,{default:a(()=>[l(e(c),{"label-placement":"stacked",label:"Enter your email",modelValue:t.value.email,"onUpdate:modelValue":s[3]||(s[3]=d=>t.value.email=d),placeholder:"Your email"},null,8,["modelValue"])]),_:1})]),_:1})],64))}}),D=k=>(L("data-v-7f39def9"),k=k(),K(),k),Z={class:"h-full flex flex-column justify-content-center align-items-center"},ee=D(()=>w("img",{alt:"Silhouette of a person's head",src:"https://ionicframework.com/docs/img/demos/avatar.svg"},null,-1)),le=D(()=>w("img",{class:"border-circle",alt:"Silhouette of a person's head",src:"https://ionicframework.com/docs/img/demos/avatar.svg"},null,-1)),ae=B({__name:"ProfileInfo",setup(k){const u=b({deleted_at:null,image:""}),t=b(!1),I=P(),E=q(),g=I.userInfo;u.value=JSON.parse(g);const f=async d=>{console.log("VAL",d);const o=await x.create({component:X});console.log(o),o.present();const{data:n,role:J}=await o.onWillDismiss();J==="confirm"&&console.log("Confirm",n)},S=()=>{document.getElementById("file-upload").click()},V=d=>{const o=d.target.files[0];console.log(o)},s=()=>{I.logout(),E.navigate("/","forward","replace")};return(d,o)=>(_(),A(z,null,[l(e(h),null,{default:a(()=>[l(e(N),null,{default:a(()=>[l(e($),null,{default:a(()=>[r("Perfil personal")]),_:1})]),_:1})]),_:1}),l(e(H),null,{default:a(()=>[l(e(R),null,{default:a(()=>[w("div",Z,[l(e(F),{class:"mb-6 w-full md:w-30rem"},{default:a(()=>[l(e(M),{class:"flex justify-content-center mt-5"},{default:a(()=>[u.value.avatar?(_(),y(e(O),{key:0},{default:a(()=>[ee]),_:1})):C("",!0),u.value.avatar?C("",!0):(_(),y(e(i),{key:1,class:"w-2 h-2",onClick:S,size:"large",fill:"outline",color:"dark"},{default:a(()=>[w("input",{type:"file",id:"file-upload",style:{display:"none"},onChange:V},null,32),le]),_:1}))]),_:1}),l(e(T),{class:"mt-5"},{default:a(()=>[l(e(m),null,{default:a(()=>[l(e(c),{label:"Nombre(s):",placeholder:"Jonh",modelValue:u.value.name,"onUpdate:modelValue":o[0]||(o[0]=n=>u.value.name=n),readonly:""},null,8,["modelValue"]),l(e(i),{fill:"outline",color:"dark",onClick:o[1]||(o[1]=n=>f("name"))},{default:a(()=>[r(" Edit "),l(e(p),{slot:"end",icon:e(v),color:"dark"},null,8,["icon"])]),_:1})]),_:1}),l(e(m),null,{default:a(()=>[l(e(c),{label:"Primer apellido:",placeholder:"Cena",modelValue:u.value.first_name,"onUpdate:modelValue":o[2]||(o[2]=n=>u.value.first_name=n),readonly:""},null,8,["modelValue"]),l(e(i),{fill:"outline",color:"dark",onClick:o[3]||(o[3]=n=>f("first_name"))},{default:a(()=>[r(" Edit "),l(e(p),{slot:"end",icon:e(v),color:"dark"},null,8,["icon"])]),_:1})]),_:1}),l(e(m),null,{default:a(()=>[l(e(c),{label:"Segundo apellido:",placeholder:"Rodríguez",modelValue:u.value.second_name,"onUpdate:modelValue":o[4]||(o[4]=n=>u.value.second_name=n),readonly:""},null,8,["modelValue"]),l(e(i),{fill:"outline",color:"dark",onClick:o[5]||(o[5]=n=>f("second_name"))},{default:a(()=>[r(" Edit "),l(e(p),{slot:"end",icon:e(v),color:"dark"},null,8,["icon"])]),_:1})]),_:1}),l(e(m),null,{default:a(()=>[l(e(c),{label:"email",placeholder:"email@email.com",modelValue:u.value.email,"onUpdate:modelValue":o[6]||(o[6]=n=>u.value.email=n),readonly:!t.value},null,8,["modelValue","readonly"]),t.value?C("",!0):(_(),y(e(i),{key:0,fill:"outline",color:"dark",onClick:o[7]||(o[7]=n=>f("email"))},{default:a(()=>[r(" Edit "),l(e(p),{slot:"end",icon:e(v),color:"dark"},null,8,["icon"])]),_:1})),t.value?(_(),y(e(i),{key:1,fill:"outline",color:"dark"},{default:a(()=>[r(" Save "),l(e(p),{slot:"end",icon:e(j),color:"dark"},null,8,["icon"])]),_:1})):C("",!0)]),_:1}),l(e(m),null,{default:a(()=>[l(e(c),{label:"Adrress",placeholder:"Adress",modelValue:u.value.address,"onUpdate:modelValue":o[8]||(o[8]=n=>u.value.address=n),readonly:""},null,8,["modelValue"]),l(e(i),{fill:"outline",color:"dark",onClick:o[9]||(o[9]=n=>f("address"))},{default:a(()=>[r(" Edit "),l(e(p),{slot:"end",icon:e(v),color:"dark"},null,8,["icon"])]),_:1})]),_:1}),l(e(m),null,{default:a(()=>[l(e(c),{label:"Phone",placeholder:"Phone",modelValue:u.value.phone,"onUpdate:modelValue":o[10]||(o[10]=n=>u.value.phone=n),readonly:""},null,8,["modelValue"]),l(e(i),{fill:"outline",color:"dark",onClick:o[11]||(o[11]=n=>f("phone"))},{default:a(()=>[r(" Edit "),l(e(p),{slot:"end",icon:e(v),color:"dark"},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),l(e(i),{onClick:s,class:"px-1 w-full md:w-30rem",expand:"block",fill:"outline",color:"dark"},{default:a(()=>[r("Cerrar Sesión")]),_:1})])]),_:1})]),_:1})],64))}}),se=G(ae,[["__scopeId","data-v-7f39def9"]]);export{se as default};
