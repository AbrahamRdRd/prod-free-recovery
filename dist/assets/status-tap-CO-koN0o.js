import{am as r,an as i,ao as c,ap as d,aq as l}from"./index-D2SoT6gD.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const p=()=>{const e=window;e.addEventListener("statusTap",()=>{r(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=i(n);t&&new Promise(a=>c(t,a)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{p as startStatusTap};
