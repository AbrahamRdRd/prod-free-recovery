if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const a=s=>l(s,n),u={module:{uri:n},exports:t,require:a};e[n]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/axios-CwoVb0Lo.js",revision:null},{url:"assets/axios-legacy-CUPSUh8R.js",revision:null},{url:"assets/DepartmentItem-Cwtbda6l.js",revision:null},{url:"assets/DepartmentItem-eoYe-ztt.css",revision:null},{url:"assets/DepartmentItem-legacy-ByjbVH36.js",revision:null},{url:"assets/DepartmentPage-DdTSwgHB.css",revision:null},{url:"assets/DepartmentPage-Dvijs9Sj.js",revision:null},{url:"assets/DepartmentPage-legacy-DDZVolVZ.js",revision:null},{url:"assets/HomePage-DiwMq3xX.js",revision:null},{url:"assets/HomePage-DJ_DQD44.css",revision:null},{url:"assets/HomePage-legacy-DUkN_Ylh.js",revision:null},{url:"assets/index-D2SoT6gD.js",revision:null},{url:"assets/index-legacy-KGUUhhRa.js",revision:null},{url:"assets/index-qV-b04LY.css",revision:null},{url:"assets/index9-B4HjpMWU.js",revision:null},{url:"assets/index9-legacy-u1PD3j3U.js",revision:null},{url:"assets/input-shims-BwKtfwh-.js",revision:null},{url:"assets/input-shims-legacy-cm2jGqTx.js",revision:null},{url:"assets/ios.transition-Bzgoebpu.js",revision:null},{url:"assets/ios.transition-legacy-DwE97VvR.js",revision:null},{url:"assets/LoginUser-BjNO6yai.js",revision:null},{url:"assets/LoginUser-Caycy7f5.css",revision:null},{url:"assets/LoginUser-legacy-B9WS0F_H.js",revision:null},{url:"assets/md.transition-B5EvoyLc.js",revision:null},{url:"assets/md.transition-legacy-DiZq8R1W.js",revision:null},{url:"assets/polyfills-legacy-rINuS_iS.js",revision:null},{url:"assets/ProfilePage-BcyrKImn.js",revision:null},{url:"assets/ProfilePage-BhVSDcok.css",revision:null},{url:"assets/ProfilePage-legacy-BbQWaKd-.js",revision:null},{url:"assets/RegisterUser-B7Oljqqb.js",revision:null},{url:"assets/RegisterUser-BBH9ttbl.css",revision:null},{url:"assets/RegisterUser-legacy-DPJM-73o.js",revision:null},{url:"assets/ReservacionDepartamento-CSCMNTCr.js",revision:null},{url:"assets/ReservacionDepartamento-legacy-BFz_yX5R.js",revision:null},{url:"assets/ReservationCard.vue_vue_type_script_setup_true_lang-CycYzIta.js",revision:null},{url:"assets/ReservationCard.vue_vue_type_script_setup_true_lang-legacy-B3noLpz8.js",revision:null},{url:"assets/SearchPage-DRMD8wTd.css",revision:null},{url:"assets/SearchPage-legacy-Dt8Ehi3J.js",revision:null},{url:"assets/SearchPage-Ut_k59Mw.js",revision:null},{url:"assets/status-tap-CO-koN0o.js",revision:null},{url:"assets/status-tap-legacy-CebPyrPc.js",revision:null},{url:"assets/swipe-back-CI4MUJYf.js",revision:null},{url:"assets/swipe-back-legacy-Dez2F9Ym.js",revision:null},{url:"index.html",revision:"3bc67c3b9483657d9a8f56ae24ed4ed5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"93cc0129ee6a6514a8a444d178b35fb2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
