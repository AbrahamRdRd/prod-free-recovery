function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ProfileInfo-DISIV9Gw.js","assets/index-b4t3Mdji.js","assets/index-qV-b04LY.css","assets/user-BvSx9lCV.js","assets/https-SOK1QiRA.js","assets/axios-CwoVb0Lo.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/ProfileInfo-8zSdbvnD.css","assets/LoginAuth-hstgTEA_.js","assets/LoginAuth-BexAyF68.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as c,u as l,r as d,a as f,o as e,b as o,w as p,e as t,l as g,A as n,_ as r}from"./index-b4t3Mdji.js";const h=c({__name:"ProfilePage",setup(m){const _=n(()=>r(()=>import("./ProfileInfo-DISIV9Gw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),u=n(()=>r(()=>import("./LoginAuth-hstgTEA_.js"),__vite__mapDeps([8,1,2,4,5,6,9]))),i=l(),s=d(),a=f(()=>i.isLogged);return console.log("isLogged",a.value),a.value||(s.value=!0),(v,A)=>(e(),o(t(g),null,{default:p(()=>[s.value?(e(),o(t(u),{key:1})):(e(),o(t(_),{key:0}))]),_:1}))}});export{h as default};
