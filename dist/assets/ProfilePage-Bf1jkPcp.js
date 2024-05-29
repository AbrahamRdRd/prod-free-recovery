function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ProfileInfo-C2KrJVoa.js","assets/index-VH1rgcL1.js","assets/index-qV-b04LY.css","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/ProfileInfo-DiZdJS_X.css","assets/LoginAuth-BIS8Ih8K.js","assets/https-B8wFfxeR.js","assets/axios-CwoVb0Lo.js","assets/LoginAuth-BbnKvI0C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as i,y as c,r as f,o as e,a as o,w as l,u as t,s as p,z as s,_ as n}from"./index-VH1rgcL1.js";const A=i({__name:"ProfilePage",setup(d){const r=s(()=>n(()=>import("./ProfileInfo-C2KrJVoa.js"),__vite__mapDeps([0,1,2,3,4]))),_=s(()=>n(()=>import("./LoginAuth-BIS8Ih8K.js"),__vite__mapDeps([5,1,2,6,7,3,8]))),u=c(),a=f();return u.isLogged&&(a.value=!0),(m,P)=>(e(),o(t(p),null,{default:l(()=>[a.value?(e(),o(t(r),{key:0})):(e(),o(t(_),{key:1}))]),_:1}))}});export{A as default};
