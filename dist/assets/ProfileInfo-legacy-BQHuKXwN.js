System.register(["./@ionic-legacy-CAWqWNAi.js","./ionicons-legacy-BYlXq-Bl.js","./index-legacy-DbOQ0npd.js","./user-legacy-dHsN5SLC.js","./https-legacy-CafbaXJx.js","./@vue-legacy-D0SgPP5D.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./@stencil-legacy-CapHDfm8.js","./vue-router-legacy-BXDKlxlV.js","./pinia-legacy-DXNVVc9U.js","./register-service-worker-legacy-OLieyxJW.js","./primeflex-legacy-BopLd2K7.js","./axios-legacy-CUPSUh8R.js","./vue-toast-notification-legacy--LaN0e6j.js","./vue-legacy-CLucp-wY.js"],(function(l,e){"use strict";var a,n,o,t,u,d,i,c,r,s,m,v,f,p,_,y,b,g,k,h,V,C,j,w,U,x,E,I,P,S,H,z,A,F,N,O,Y,D,M,$,G,J,R,q,B,K,L,Q;return{setters:[l=>{a=l.m,n=l.n,o=l.l,t=l.y,u=l.p,d=l.v,i=l.s,c=l.Q,r=l.R,s=l.q,m=l.S,v=l.u,f=l.o,p=l.r,_=l.E,y=l.G,b=l.K,g=l.d,k=l.L,h=l.g},l=>{V=l.a,C=l.j,j=l.k},l=>{w=l.u},l=>{U=l.u,x=l.g,E=l.a},l=>{I=l.h},l=>{P=l.d,S=l.r,H=l.aG,z=l.aM,A=l.a1,F=l.aa,N=l.by,O=l.be,Y=l.a9,D=l.a2,M=l.H,$=l.aU,G=l.$,J=l.b7,R=l.c,q=l.b,B=l.a0,K=l.aP,L=l.aN},l=>{Q=l._},null,null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".example-content[data-v-5454cdbc]{display:flex;align-items:center;justify-content:center;height:100%}.avatar_btn[data-v-5454cdbc]{cursor:pointer}\n",document.head.appendChild(e);const W=P({__name:"ModalProfile",props:{userId:Object,avatar:File},setup(l){var e,v;const f=S({id:0,email:"",name:"",first_name:"",second_name:"",password:"",role_id:0,city_id:0,deleted_at:null}),p=l,_=()=>m.dismiss(null,"cancel");w();const y=S(),b=S(),g=S(),k=S([]),h=S(),V=S([]);f.value=p.userId,y.value=null===(e=f.value.city)||void 0===e?void 0:e.state.country_id,b.value=null===(v=f.value.city)||void 0===v?void 0:v.state_id,h.value=f.value.city_id;const C=async()=>{try{g.value=(await I.get("/api/countries")).data}catch(l){console.error("Hubo un error al traer las ciudades")}},j=async l=>{try{k.value=(await(e=l,I.get(`/api/countries/${e}/states`))).data}catch(a){console.error("Hubo un error al traer los estados")}var e},x=async l=>{try{V.value=(await(e=l,I.get(`/api/states/${e}/cities`))).data}catch(a){console.error("Hubo un error en al traer las ciudades",a)}var e},E=l=>{j(l.detail.value)},P=l=>{x(l.detail.value)},R=l=>{f.value.city_id=l.detail.value},q=async()=>{const l={email:f.value.email,name:f.value.name,first_name:f.value.first_name,second_name:f.value.second_name,phone:f.value.phone,city_id:f.value.city_id,image:p.avatar},e=new FormData;for(const t in l)if(Object.prototype.hasOwnProperty.call(l,t)){const n=t,o=l[n];var a;o instanceof File?e.append(n,o):e.append(n,null!==(a=null==o?void 0:o.toString())&&void 0!==a?a:"")}try{var n;(await U(null===(n=p.userId)||void 0===n?void 0:n.id,e)).data,m.dismiss("confirm")}catch(o){console.error("Algo salio mal al actualizar.")}};return H((()=>{var l,e;C(),j(null===(l=f.value.city)||void 0===l?void 0:l.state.country_id),x(null===(e=f.value.city)||void 0===e?void 0:e.state_id)})),(l,e)=>(z(),A(M,null,[F(O(u),null,{default:N((()=>[F(O(a),null,{default:N((()=>[F(O(n),{slot:"start"},{default:N((()=>[F(O(o),{color:"medium",onClick:_},{default:N((()=>[Y("Cancel")])),_:1})])),_:1}),F(O(t),null,{default:N((()=>[Y("Actualiza tú información")])),_:1}),F(O(n),{slot:"end"},{default:N((()=>[F(O(o),{onClick:q,strong:!0},{default:N((()=>[Y("Confirm")])),_:1})])),_:1})])),_:1})])),_:1}),F(O(s),{class:"ion-padding"},{default:N((()=>[D("form",{onSubmit:q},[F(O(d),null,{default:N((()=>[F(O(i),{"label-placement":"stacked",label:"Cambia tu nombre(s)",modelValue:f.value.name,"onUpdate:modelValue":e[0]||(e[0]=l=>f.value.name=l),placeholder:"Your name"},null,8,["modelValue"])])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{"label-placement":"stacked",label:"Cambia tu primer apellido",modelValue:f.value.first_name,"onUpdate:modelValue":e[1]||(e[1]=l=>f.value.first_name=l),placeholder:"Your second name"},null,8,["modelValue"])])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{"label-placement":"stacked",label:"Cambia tu segundo apellido",modelValue:f.value.second_name,"onUpdate:modelValue":e[2]||(e[2]=l=>f.value.second_name=l),placeholder:"Your last name"},null,8,["modelValue"])])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{"label-placement":"stacked",label:"Cambia tu cuenta de email",modelValue:f.value.email,"onUpdate:modelValue":e[3]||(e[3]=l=>f.value.email=l),placeholder:"Your email"},null,8,["modelValue"])])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{"label-placement":"stacked",label:"Cambia tu telefono",modelValue:f.value.phone,"onUpdate:modelValue":e[4]||(e[4]=l=>f.value.phone=l),placeholder:"(+52) 888-88-88"},null,8,["modelValue"])])),_:1}),F(O(d),{lines:"none"},{default:N((()=>[F(O(c),{modelValue:y.value,"onUpdate:modelValue":e[5]||(e[5]=l=>y.value=l),onIonChange:E,class:"mt-3 mr-2",label:"País","label-placement":"floating",fill:"outline"},{default:N((()=>[(z(!0),A(M,null,$(g.value,(l=>(z(),G(O(r),{value:l.id},{default:N((()=>[Y(J(l.name),1)])),_:2},1032,["value"])))),256))])),_:1},8,["modelValue"]),F(O(c),{modelValue:b.value,"onUpdate:modelValue":e[6]||(e[6]=l=>b.value=l),onIonChange:P,class:"mt-3 mr-2",label:"Estado","label-placement":"floating",fill:"outline"},{default:N((()=>[(z(!0),A(M,null,$(k.value,(l=>(z(),G(O(r),{value:l.id},{default:N((()=>[Y(J(l.name),1)])),_:2},1032,["value"])))),256))])),_:1},8,["modelValue"]),F(O(c),{modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=l=>h.value=l),onIonChange:R,class:"mt-3",label:"Ciudad","label-placement":"floating",fill:"outline"},{default:N((()=>[(z(!0),A(M,null,$(V.value,(l=>(z(),G(O(r),{value:l.id},{default:N((()=>[Y(J(l.name),1)])),_:2},1032,["value"])))),256))])),_:1},8,["modelValue"])])),_:1})],32)])),_:1})],64))}}),T={class:"h-full flex flex-column justify-content-center align-items-center"},X=["src"],Z=(l=>(K("data-v-5454cdbc"),l=l(),L(),l))((()=>D("img",{class:"border-circle",alt:"Silhouette of a person's head",src:"https://ionicframework.com/docs/img/demos/avatar.svg"},null,-1)));l("default",Q(P({__name:"ProfileInfo",setup(l){const e=w(),c=R((()=>e.userInfo)),r=JSON.parse(c.value),U=S(!1),I=w(),P=v(),H=S(!1),$=S(),J=S({deleted_at:null}),K=async()=>{const l=await m.create({component:W,componentProps:{userId:J.value,avatar:Q.value}});l.present();const{data:e,role:a}=await l.onWillDismiss();"confirm"===e&&await al()},L=()=>{document.getElementById("file-upload").click()},Q=S(),ll=l=>{const e=l.target.files[0];Q.value=e,nl(e)},el=()=>{I.logout(),H.value=!0,P.replace("/")},al=async()=>{try{var l;J.value=(await x(r.id)).data,console.log("NAME",J.value),$.value=null===(l=J.value.city)||void 0===l?void 0:l.state.country.name}catch(e){console.error("Hubo un errror al traer la información del usuario.")}},nl=async l=>{const e=new FormData;e.append("image",l);try{await E(J.value.id,e),await al()}catch(a){console.error("Algo salio mal al actualizar.")}};return q((()=>{al()})),(l,e)=>(z(),A(M,null,[F(O(u),null,{default:N((()=>[F(O(a),null,{default:N((()=>[F(O(n),{slot:"start"},{default:N((()=>[F(O(f),{defaultHref:"/departments",icon:O(V)},null,8,["icon"])])),_:1}),F(O(t),null,{default:N((()=>[Y("Perfil personal")])),_:1})])),_:1})])),_:1}),F(O(h),null,{default:N((()=>[F(O(s),null,{default:N((()=>[D("div",T,[F(O(p),{class:"mb-6 w-full md:w-30rem"},{default:N((()=>[F(O(_),{class:"flex justify-content-center mt-5"},{default:N((()=>[J.value.avatar?(z(),G(O(y),{key:0,onClick:L,class:"avatar_btn",as:"ion-button"},{default:N((()=>[D("img",{alt:"Silhouette of a person's head",src:J.value.avatar},null,8,X),D("input",{type:"file",id:"file-upload",style:{display:"none"},onChange:ll},null,32)])),_:1})):J.value.avatar?B("",!0):(z(),G(O(o),{key:1,class:"w-2 h-2",onClick:L,size:"large",fill:"outline",color:"dark"},{default:N((()=>[D("input",{type:"file",id:"file-upload",style:{display:"none"},onChange:ll},null,32),Z])),_:1}))])),_:1}),F(O(b),{class:"mt-5"},{default:N((()=>[F(O(d),null,{default:N((()=>[F(O(i),{label:"Nombre(s):",placeholder:"Jonh",modelValue:J.value.name,"onUpdate:modelValue":e[0]||(e[0]=l=>J.value.name=l),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),F(O(o),{fill:"outline",color:"dark",onClick:e[1]||(e[1]=l=>K())},{default:N((()=>[Y(" Edit "),F(O(g),{slot:"end",icon:O(C),color:"dark"},null,8,["icon"])])),_:1})])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{label:"Primer apellido:",placeholder:"Cena",modelValue:J.value.first_name,"onUpdate:modelValue":e[2]||(e[2]=l=>J.value.first_name=l),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),F(O(o),{fill:"outline",color:"dark",onClick:e[3]||(e[3]=l=>K())},{default:N((()=>[Y(" Edit "),F(O(g),{slot:"end",icon:O(C),color:"dark"},null,8,["icon"])])),_:1})])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{label:"Segundo apellido:",placeholder:"Rodríguez",modelValue:J.value.second_name,"onUpdate:modelValue":e[4]||(e[4]=l=>J.value.second_name=l),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),F(O(o),{fill:"outline",color:"dark",onClick:e[5]||(e[5]=l=>K())},{default:N((()=>[Y(" Edit "),F(O(g),{slot:"end",icon:O(C),color:"dark"},null,8,["icon"])])),_:1})])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{label:"email",placeholder:"email@email.com",modelValue:J.value.email,"onUpdate:modelValue":e[6]||(e[6]=l=>J.value.email=l),"label-placement":"stacked",readonly:!U.value},null,8,["modelValue","readonly"]),U.value?B("",!0):(z(),G(O(o),{key:0,fill:"outline",color:"dark",onClick:e[7]||(e[7]=l=>K())},{default:N((()=>[Y(" Edit "),F(O(g),{slot:"end",icon:O(C),color:"dark"},null,8,["icon"])])),_:1})),U.value?(z(),G(O(o),{key:1,fill:"outline",color:"dark"},{default:N((()=>[Y(" Save "),F(O(g),{slot:"end",icon:O(j),color:"dark"},null,8,["icon"])])),_:1})):B("",!0)])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{label:"Phone",placeholder:"(+52) 888-888-88-88",modelValue:J.value.phone,"onUpdate:modelValue":e[8]||(e[8]=l=>J.value.phone=l),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),F(O(o),{fill:"outline",color:"dark",onClick:e[9]||(e[9]=l=>K())},{default:N((()=>[Y(" Edit "),F(O(g),{slot:"end",icon:O(C),color:"dark"},null,8,["icon"])])),_:1})])),_:1}),F(O(d),null,{default:N((()=>[F(O(i),{label:"País",placeholder:"your country",modelValue:$.value,"onUpdate:modelValue":e[10]||(e[10]=l=>$.value=l),"label-placement":"stacked",readonly:""},null,8,["modelValue"]),F(O(o),{fill:"outline",color:"dark",onClick:e[11]||(e[11]=l=>K())},{default:N((()=>[Y(" Edit "),F(O(g),{slot:"end",icon:O(C),color:"dark"},null,8,["icon"])])),_:1})])),_:1})])),_:1})])),_:1}),F(O(o),{onClick:el,class:"px-1 w-full md:w-30rem",expand:"block",fill:"outline",color:"dark"},{default:N((()=>[Y("Cerrar Sesión")])),_:1}),H.value?(z(),G(O(k),{key:0,"is-open":H.value,message:"Cerrando sessión...",spinner:"circles",duration:2e3},null,8,["is-open"])):B("",!0)])])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-5454cdbc"]]))}}}));
