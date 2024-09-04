function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ErrorPage-DncOrfIf.js","assets/@ionic-D3TE2VMj.js","assets/@stencil-CHpqkKxm.js","assets/vue-router-C1vmwl4t.js","assets/@vue-yfti66JX.js","assets/ionicons-lnr37WKp.js","assets/@ionic-Dr5M-HgF.css","assets/LoginUser-Bbpb2ocW.js","assets/LoginAuth-CgIpQRmc.js","assets/auth-zhlWb_9a.js","assets/https-CNct6Qw_.js","assets/axios-CwoVb0Lo.js","assets/vue-toast-notification-CyaKMIrI.js","assets/crypto-js-BD323iWx.js","assets/vue-AlRGbnWJ.js","assets/pinia-FlwmMssk.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LoginAuth-CXl9AZ03.css","assets/register-service-worker-TYP_X6yW.js","assets/primeflex-BRpkHBhv.css","assets/RegisterUser-CLzDihP3.js","assets/countries-BizBYIHd.js","assets/user-Dkj4-I_6.js","assets/RegisterUser-DAQQ8rmZ.css","assets/ForgotPassword-B_Wu0kgt.js","assets/ResetPassword-UTaRRoUO.js","assets/HomePage-CVXsIWoo.js","assets/HomePage-DJ_DQD44.css","assets/ProfilePage-Bg8-BY3r.js","assets/ProfilePage-n5Qug-pg.css","assets/DepartmentPage-LUtRkLeI.js","assets/swiper-e3qj2Uko.js","assets/swiper-BsCGvvrO.css","assets/DepartmentPage-Czk8_06-.css","assets/DepartmentItem-CPpxw86j.js","assets/DepartmentItem-C_H-f8Pe.css","assets/ReservacionDepartamento-CNQWnhdD.js","assets/ReservacionDepartamento-B_SY1GJM.css","assets/SuccesfulPayment-BaBN_rnj.js","assets/departmentReservation-JJHuIiGX.js","assets/MyReservations-BpjkI-rB.js","assets/MyReservations-BQ_wkoRB.css","assets/SearchPage-CjENyDcE.js","assets/SearchPage-DRMD8wTd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as y,$ as S,by as i,be as t,aM as v,aa as s,a9 as d,c as P,_ as b}from"./@vue-yfti66JX.js";import{I as E,a as k,b as D,c as m,d as _,e as f,f as R,g as T,h as V,i as w,_ as n,j as N}from"./@ionic-D3TE2VMj.js";import{d as x,c as C}from"./pinia-FlwmMssk.js";import{C as h}from"./crypto-js-BD323iWx.js";import{p as J,h as B,c as M}from"./ionicons-lnr37WKp.js";import{r as F}from"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./@stencil-CHpqkKxm.js";import"./vue-router-C1vmwl4t.js";function G(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=c(o);fetch(o.href,a)}})();const O="PuraGente_Del_SeñorJavascript_666";function g(e){return h.AES.encrypt(JSON.stringify(e),O).toString()}function I(e){try{const c=h.AES.decrypt(e,O).toString(h.enc.Utf8);return JSON.parse(c)}catch(r){console.error("Error to decrypt data","Posible clave corrupta",r)}}const L=x("auth",{state:()=>({isLogged:!1,token:"",checkout_id:"",userInfo:{},reservation:{},departmentInfo:{}}),actions:{logout(){localStorage.clear(),this.isLogged=!1,this.token="",this.checkout_id="",this.userInfo={},this.reservation={},this.departmentInfo={}},setSession(e,r){this.isLogged=!0,this.token=e,this.userInfo=r,localStorage.setItem("isLogged","true"),localStorage.setItem("token",g(e)),localStorage.setItem("user",g(r))},setSessionReservation(e){this.reservation=e,localStorage.setItem("reservation",JSON.stringify(e))},setDepartmentInformation(e){this.departmentInfo=e,localStorage.setItem("departmentInfo",JSON.stringify(e))},setCheckOutId(e){this.checkout_id=e,localStorage.setItem("checkout_id",this.checkout_id)},checkSessionByStorage(){const e=localStorage.getItem("isLogged");if(e!=null&&e==="true"){let r=localStorage.getItem("token");this.token=I(r);let c=localStorage.getItem("user");this.userInfo=I(c);let l=localStorage.getItem("reservation");this.checkout_id=localStorage.getItem("checkout_id");let o=localStorage.getItem("departmentInfo");this.setSession(this.token,this.userInfo),this.setSessionReservation(JSON.parse(l)),this.setDepartmentInformation(JSON.parse(o)),this.setCheckOutId(this.checkout_id)}}}}),j=y({__name:"App",setup(e){return L().checkSessionByStorage(),(c,l)=>(v(),S(t(k),null,{default:i(()=>[s(t(E))]),_:1}))}}),q=y({__name:"ExampleItem",setup(e){return(r,c)=>(v(),S(t(T),null,{default:i(()=>[s(t(R),null,{default:i(()=>[s(t(E)),s(t(D),{slot:"bottom",class:"md:hidden"},{default:i(()=>[s(t(m),{tab:"profile",href:"/profile"},{default:i(()=>[s(t(_),{icon:t(J)},null,8,["icon"]),s(t(f),null,{default:i(()=>[d("Profile")]),_:1})]),_:1}),s(t(m),{tab:"departments",href:"/departments"},{default:i(()=>[s(t(_),{icon:t(B)},null,8,["icon"]),s(t(f),null,{default:i(()=>[d("Departaments")]),_:1})]),_:1}),s(t(m),{tab:"my-reservations",href:"/my-reservations"},{default:i(()=>[s(t(_),{icon:t(M)},null,8,["icon"]),s(t(f),null,{default:i(()=>[d("My Reservations")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),K=()=>{const e=L();if(!P(()=>e.isLogged).value)return{path:"/login"}},U=[{path:"/:catchAll(.*)",name:"error",component:()=>n(()=>import("./ErrorPage-DncOrfIf.js"),__vite__mapDeps([0,1,2,3,4,5,6])),meta:{title:"Error"}},{path:"/login",name:"login",component:()=>n(()=>import("./LoginUser-Bbpb2ocW.js"),__vite__mapDeps([7,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19]))},{path:"/sign-up",name:"register",component:()=>n(()=>import("./RegisterUser-CLzDihP3.js"),__vite__mapDeps([20,4,1,2,3,5,6,21,10,11,12,13,14,15,22,16,18,23,19]))},{path:"/forgot-password",name:"forgot-password",component:()=>n(()=>import("./ForgotPassword-B_Wu0kgt.js"),__vite__mapDeps([24,1,2,3,4,5,6]))},{path:"/reset-password/:token",name:"reset-password",component:()=>n(()=>import("./ResetPassword-UTaRRoUO.js"),__vite__mapDeps([25,4,1,2,3,5,6,9,10,11,12,13,14,15,18,19]))},{path:"/",redirect:"/departments"},{path:"/",component:q,children:[{path:"home",name:"home",component:()=>n(()=>import("./HomePage-CVXsIWoo.js"),__vite__mapDeps([26,1,2,3,4,5,6,16,27]))},{path:"profile",name:"profile",component:()=>n(()=>import("./ProfilePage-Bg8-BY3r.js"),__vite__mapDeps([28,1,2,3,4,5,6,22,10,11,12,13,14,15,16,8,9,17,18,29,19])),meta:{middleware:K}},{path:"departments",name:"departments",component:()=>n(()=>import("./DepartmentPage-LUtRkLeI.js"),__vite__mapDeps([30,1,2,3,4,5,6,31,32,16,15,13,18,33,19]))},{path:"departments/:id",name:"department item",component:()=>n(()=>import("./DepartmentItem-CPpxw86j.js"),__vite__mapDeps([34,4,3,1,2,5,6,10,11,12,13,14,15,31,32,16,22,18,35,19]))},{path:"departments/:id/reservation",name:"reservation",component:()=>n(()=>import("./ReservacionDepartamento-CNQWnhdD.js"),__vite__mapDeps([36,1,2,3,4,5,6,11,22,10,12,13,14,15,16,18,37,19]))},{path:"departments/:id/succes-payment",name:"Succes Payment",component:()=>n(()=>import("./SuccesfulPayment-BaBN_rnj.js"),__vite__mapDeps([38,1,2,3,4,5,6,39,10,11,12,13,14,15,18,19]))},{path:"my-reservations",name:"My reservations",component:()=>n(()=>import("./MyReservations-BpjkI-rB.js"),__vite__mapDeps([40,1,2,3,4,5,6,39,10,11,12,13,14,15,16,18,41,19]))},{path:"search",name:"search",component:()=>n(()=>import("./SearchPage-CjENyDcE.js"),__vite__mapDeps([42,1,2,3,4,5,6,16,43]))}]}],A=V({history:w(),routes:U});F("sw.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const p=b(j),$=C();p.use($);p.use(N);p.use(A);A.isReady().then(()=>{p.mount("#app")});export{G as __vite_legacy_guard,A as r,L as u};
