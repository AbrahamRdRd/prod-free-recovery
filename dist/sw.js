if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const u=s=>l(s,n),a={module:{uri:n},exports:t,require:u};e[n]=Promise.all(r.map((s=>a[s]||u(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/_plugin-vue_export-helper-legacy-DgAO6S8O.js",revision:null},{url:"assets/axios-CwoVb0Lo.js",revision:null},{url:"assets/axios-legacy-CUPSUh8R.js",revision:null},{url:"assets/DepartmentItem-CJGtIEkE.js",revision:null},{url:"assets/DepartmentItem-DtvBVWhm.css",revision:null},{url:"assets/DepartmentItem-legacy-CMyytROL.js",revision:null},{url:"assets/DepartmentPage-BD2iPvOD.css",revision:null},{url:"assets/DepartmentPage-BY5_NUUx.js",revision:null},{url:"assets/DepartmentPage-legacy-B8vqgp6F.js",revision:null},{url:"assets/ErrorPage-COBGw80W.js",revision:null},{url:"assets/ErrorPage-legacy-CAlecGKG.js",revision:null},{url:"assets/HomePage-CkWu2ta0.js",revision:null},{url:"assets/HomePage-DJ_DQD44.css",revision:null},{url:"assets/HomePage-legacy-DyV9Au3h.js",revision:null},{url:"assets/https-B8wFfxeR.js",revision:null},{url:"assets/https-legacy-6cQzgdsD.js",revision:null},{url:"assets/index-legacy-DnnHpDBx.js",revision:null},{url:"assets/index-qV-b04LY.css",revision:null},{url:"assets/index-VH1rgcL1.js",revision:null},{url:"assets/index9-D_7HKNsv.js",revision:null},{url:"assets/index9-legacy-CUOJsD5M.js",revision:null},{url:"assets/input-shims-BKXLS6IK.js",revision:null},{url:"assets/input-shims-legacy-B1T0r1Kr.js",revision:null},{url:"assets/ios.transition-legacy-DHNleaF-.js",revision:null},{url:"assets/ios.transition-VKAjAROn.js",revision:null},{url:"assets/LoginAuth-BbnKvI0C.css",revision:null},{url:"assets/LoginAuth-BIS8Ih8K.js",revision:null},{url:"assets/LoginAuth-legacy-CZX_vGwO.js",revision:null},{url:"assets/LoginUser-BVL8AkSS.js",revision:null},{url:"assets/LoginUser-legacy-zJzq8HBD.js",revision:null},{url:"assets/md.transition-Bj2DqzXU.js",revision:null},{url:"assets/md.transition-legacy-DICIvIOD.js",revision:null},{url:"assets/polyfills-legacy-Dv7VmQYG.js",revision:null},{url:"assets/ProfileInfo-C2KrJVoa.js",revision:null},{url:"assets/ProfileInfo-DiZdJS_X.css",revision:null},{url:"assets/ProfileInfo-legacy-BY5hBfJN.js",revision:null},{url:"assets/ProfilePage-Bf1jkPcp.js",revision:null},{url:"assets/ProfilePage-legacy-D2yPLjc7.js",revision:null},{url:"assets/RegisterUser-CPDVY3x-.css",revision:null},{url:"assets/RegisterUser-CUysW-ji.js",revision:null},{url:"assets/RegisterUser-legacy-BhVFxvnO.js",revision:null},{url:"assets/ReservacionDepartamento-legacy-BzC18FHv.js",revision:null},{url:"assets/ReservacionDepartamento-NPsz1EYz.js",revision:null},{url:"assets/ReservationCard.vue_vue_type_script_setup_true_lang-legacy-mQB5WprG.js",revision:null},{url:"assets/ReservationCard.vue_vue_type_script_setup_true_lang-zNqMkES-.js",revision:null},{url:"assets/SearchPage-Bbh5tQBi.js",revision:null},{url:"assets/SearchPage-DRMD8wTd.css",revision:null},{url:"assets/SearchPage-legacy-AcKGMUMh.js",revision:null},{url:"assets/status-tap-DA4h904-.js",revision:null},{url:"assets/status-tap-legacy-Bgzo6xKS.js",revision:null},{url:"assets/swipe-back-legacy-Czxag697.js",revision:null},{url:"assets/swipe-back-Yfq0lmVM.js",revision:null},{url:"index.html",revision:"ac46eed4466a652fd26026c29a2a5dd7"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"93cc0129ee6a6514a8a444d178b35fb2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
