function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ProfileInfo-DDUIscXk.js","assets/index-CUp2qGmE.js","assets/index-qV-b04LY.css","assets/user-Cm6eI9op.js","assets/https-BqIIIB56.js","assets/axios-CwoVb0Lo.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/ProfileInfo-Cg3p0Ivj.css","assets/LoginAuth-CoMzMdnd.js","assets/LoginAuth-yuHu9dlm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as c,u as l,r as d,a as f,o as e,b as o,w as p,e as t,l as g,A as n,_ as r}from"./index-CUp2qGmE.js";const h=c({__name:"ProfilePage",setup(m){const _=n(()=>r(()=>import("./ProfileInfo-DDUIscXk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),u=n(()=>r(()=>import("./LoginAuth-CoMzMdnd.js"),__vite__mapDeps([8,1,2,4,5,6,9]))),i=l(),s=d(),a=f(()=>i.isLogged);return console.log("isLogged",a.value),a.value||(s.value=!0),(v,A)=>(e(),o(t(g),null,{default:p(()=>[s.value?(e(),o(t(u),{key:1})):(e(),o(t(_),{key:0}))]),_:1}))}});export{h as default};
