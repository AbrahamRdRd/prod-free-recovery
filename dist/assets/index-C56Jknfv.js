function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ErrorPage-Cc1ySvp4.js","assets/@ionic-BYXd9M1L.js","assets/@stencil-CHpqkKxm.js","assets/vue-router-C1vmwl4t.js","assets/@vue-yfti66JX.js","assets/ionicons-vuVtR0Xh.js","assets/@ionic-Dr5M-HgF.css","assets/LoginUser-BMm3k64g.js","assets/LoginAuth-BjHfTYik.js","assets/auth-CAi8WO0B.js","assets/https-DyLAiSWF.js","assets/axios-CwoVb0Lo.js","assets/vue-toast-notification-BuDNWbXa.js","assets/vue-0gI2gMPI.js","assets/pinia-FlwmMssk.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/register-service-worker-TYP_X6yW.js","assets/LoginAuth-CNnLL4xf.css","assets/primeflex-BRpkHBhv.css","assets/RegisterUser-Cx2wxxQn.js","assets/user-CAicfTo6.js","assets/RegisterUser-BW_qT23v.css","assets/ForgotPassword-SoIWY-4y.js","assets/ResetPassword-esd4zeDU.js","assets/HomePage-DYGJu6sG.js","assets/HomePage-DJ_DQD44.css","assets/ProfilePage-4r780UtC.js","assets/DepartmentPage-C3vp_0kc.js","assets/DepartmentPage-D4mtz_lq.css","assets/DepartmentItem-BCV6G_45.js","assets/swiper-e3qj2Uko.js","assets/swiper-BsCGvvrO.css","assets/ReservationCard-yqfamqfR.js","assets/ReservationCard-Dx_ouHH3.css","assets/DepartmentItem-DI_o-4Js.css","assets/ReservacionDepartamento-lgw6NRuQ.js","assets/SuccesfulPayment-VVpAWRdR.js","assets/SearchPage-CyJxji-J.js","assets/SearchPage-DRMD8wTd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as h,$ as g,by as i,be as t,aM as I,aa as r,a9 as d,c as E,_ as L}from"./@vue-yfti66JX.js";import{I as v,a as O,b as y,c as m,d as _,e as f,f as b,g as A,h as P,i as k,_ as s,j as R}from"./@ionic-BYXd9M1L.js";import{d as T,c as V}from"./pinia-FlwmMssk.js";import{p as w,b as D,s as N}from"./ionicons-vuVtR0Xh.js";import{r as x}from"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./@stencil-CHpqkKxm.js";import"./vue-router-C1vmwl4t.js";function M(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function p(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const S=T("auth",{state:()=>({isLogged:!1,token:"",checkout_id:"",userInfo:{},reservation:{},departmentInfo:{}}),actions:{logout(){localStorage.clear(),this.isLogged=!1,this.token="",this.checkout_id="",this.userInfo={},this.reservation={},this.departmentInfo={}},setSession(e,a){this.isLogged=!0,this.token=e,this.userInfo=JSON.stringify(a),localStorage.setItem("isLogged","true"),localStorage.setItem("token",this.token),localStorage.setItem("user",this.userInfo)},setSessionReservation(e){this.reservation=e,localStorage.setItem("reservation",JSON.stringify(e))},setDepartmentInformation(e){this.departmentInfo=e,localStorage.setItem("departmentInfo",JSON.stringify(e))},setCheckOutId(e){this.checkout_id=e,localStorage.setItem("checkout_id",e)},checkSessionByStorage(){const e=localStorage.getItem("isLogged");if(e!=null&&e==="true"){this.token=localStorage.getItem("token"),this.userInfo=localStorage.getItem("user");const a=localStorage.getItem("reservation"),c=localStorage.getItem("checkout_id");this.setSession(this.token,JSON.parse(this.userInfo)),this.setSessionReservation(JSON.parse(a)),this.setCheckOutId(c)}}}}),B=h({__name:"App",setup(e){return S().checkSessionByStorage(),(c,p)=>(I(),g(t(O),null,{default:i(()=>[r(t(v))]),_:1}))}}),C=h({__name:"ExampleItem",setup(e){return(a,c)=>(I(),g(t(A),null,{default:i(()=>[r(t(b),null,{default:i(()=>[r(t(v)),r(t(y),{slot:"bottom",class:"md:hidden"},{default:i(()=>[r(t(m),{tab:"perfil",href:"/perfil"},{default:i(()=>[r(t(_),{icon:t(w)},null,8,["icon"]),r(t(f),null,{default:i(()=>[d("Perfil")]),_:1})]),_:1}),r(t(m),{tab:"departments",href:"/departments"},{default:i(()=>[r(t(_),{icon:t(D)},null,8,["icon"]),r(t(f),null,{default:i(()=>[d("Departaments")]),_:1})]),_:1}),r(t(m),{tab:"search",href:"/search"},{default:i(()=>[r(t(_),{icon:t(N)},null,8,["icon"]),r(t(f),null,{default:i(()=>[d("Search")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),J=()=>{const e=S();if(!E(()=>e.isLogged).value)return{path:"/login"}},F=[{path:"/:catchAll(.*)",name:"error",component:()=>s(()=>import("./ErrorPage-Cc1ySvp4.js"),__vite__mapDeps([0,1,2,3,4,5,6])),meta:{title:"Error"}},{path:"/login",name:"login",component:()=>s(()=>import("./LoginUser-BMm3k64g.js"),__vite__mapDeps([7,8,4,1,2,3,5,6,9,10,11,12,13,14,15,16,17,18]))},{path:"/registro",name:"register",component:()=>s(()=>import("./RegisterUser-Cx2wxxQn.js"),__vite__mapDeps([19,4,1,2,3,5,6,20,10,11,12,13,14,15,16,21,18]))},{path:"/forgot-password",name:"forgot-password",component:()=>s(()=>import("./ForgotPassword-SoIWY-4y.js"),__vite__mapDeps([22,1,2,3,4,5,6]))},{path:"/reset-password/:token",name:"reset-password",component:()=>s(()=>import("./ResetPassword-esd4zeDU.js"),__vite__mapDeps([23,4,1,2,3,5,6,9,10,11,12,13,14,16,18]))},{path:"/",redirect:"/departments"},{path:"/",component:C,children:[{path:"home",name:"home",component:()=>s(()=>import("./HomePage-DYGJu6sG.js"),__vite__mapDeps([24,1,2,3,4,5,6,15,25]))},{path:"perfil",name:"profile",component:()=>s(()=>import("./ProfilePage-4r780UtC.js"),__vite__mapDeps([26,1,2,3,4,5,6,14,16,18])),meta:{middleware:J}},{path:"departments",name:"departments",component:()=>s(()=>import("./DepartmentPage-C3vp_0kc.js"),__vite__mapDeps([27,1,2,3,4,5,6,15,14,16,28,18]))},{path:"departments/:id",name:"department item",component:()=>s(()=>import("./DepartmentItem-BCV6G_45.js"),__vite__mapDeps([29,4,1,2,3,5,6,30,31,15,32,11,33,10,12,13,14,16,34,18]))},{path:"departments/:id/reservation",name:"reservation",component:()=>s(()=>import("./ReservacionDepartamento-lgw6NRuQ.js"),__vite__mapDeps([35,1,2,3,4,5,6,32,11,15,33,14,16,18]))},{path:"departments/:id/succes-payment",name:"Succes Payment",component:()=>s(()=>import("./SuccesfulPayment-VVpAWRdR.js"),__vite__mapDeps([36,1,2,3,4,5,6,10,11,12,13,14,16,18]))},{path:"search",name:"search",component:()=>s(()=>import("./SearchPage-CyJxji-J.js"),__vite__mapDeps([37,1,2,3,4,5,6,15,38]))}]}],$=P({history:k(),routes:F});var j={};x("".concat(j.BASE_URL,"service-worker.js"),{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const l=L(B),q=V();l.use(q);l.use(R);l.use($);l.mount("#app");export{M as __vite_legacy_guard,S as u};
