import{d as _,e as v,u as I,r as w,o as b,a as k,w as o,l as t,f as e,n as x,b as a,J as y,a3 as A,K as R,a1 as C,p as d,aG as L,s as i,q as N,R as z,m as B,I as S}from"./index-MuRIsHgE.js";import{h as V}from"./https-bBgRv3Y8.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T=u=>V.post("/api/auth/token",u),j={class:"h-full flex justify-content-center align-items-center"},J={class:"ion-margin-top ion-padding-horizontal"},K={class:"ion-margin-top ion-padding-horizontal"},P={class:"ion-margin-start ion-padding-top"},E={class:"ion-padding-horizontal"},G=_({__name:"LoginAuth",emits:["change","deactiveAuth"],setup(u,{emit:p}){const m=p,c=v(),g=I(),s=w({email:"",password:""}),f=async()=>{try{const n=(await T(s.value)).data;console.log("user auth",s.value),g.setSession(n.token,n.user),c.navigate("/","forward","replace")}catch(n){console.error("Algo salio mal :(, revisa tu correo y contraseña")}},h=()=>{m("change",!0),c.navigate("/registro")};return(n,l)=>(b(),k(a(S),null,{default:o(()=>[t("div",j,[e(a(B),{class:"w-full md:w-30rem"},{default:o(()=>[t("form",{onSubmit:x(f,["prevent"]),class:"ion-margin-horizontal"},[e(a(y),null,{default:o(()=>[e(a(A),{class:"flex justify-content-center"},{default:o(()=>[e(a(R),null,{default:o(()=>[e(a(C),{src:"https://i.imgur.com/NJrNK4Z.png",alt:"Turismo de salud. Regresa como nueva."})]),_:1})]),_:1})]),_:1}),t("div",J,[e(a(d),{value:s.value.email,onInput:l[0]||(l[0]=r=>s.value.email=r.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),t("div",K,[e(a(d),{value:s.value.password,onInput:l[1]||(l[1]=r=>s.value.password=r.target.value),label:"Password",type:"password","label-placement":"floating",fill:"outline"},null,8,["value"])]),t("p",P,[e(a(L),{to:"/recuperar-contraseña"},{default:o(()=>[i("¿Olvidaste tú contraseña?")]),_:1})]),t("div",E,[e(a(N),{expand:"block",type:"submit"},{default:o(()=>[i("Log In")]),_:1})]),e(a(z)),t("p",{class:"ion-margin-start"},[i("¿Aún no tienes cuenta? "),t("a",{class:"anchor-register",onClick:h},"Registrate aquí")])],32)]),_:1})])]),_:1}))}}),D=q(G,[["__scopeId","data-v-e6c6e8d8"]]);export{D as default};
