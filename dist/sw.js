if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),a={module:{uri:n},exports:u,require:t};e[n]=Promise.all(r.map((s=>a[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/_plugin-vue_export-helper-legacy-DgAO6S8O.js",revision:null},{url:"assets/@ionic-B3KGByIv.js",revision:null},{url:"assets/@ionic-Dr5M-HgF.css",revision:null},{url:"assets/@ionic-legacy-Bo3htOyS.js",revision:null},{url:"assets/@stencil-CHpqkKxm.js",revision:null},{url:"assets/@stencil-legacy-CapHDfm8.js",revision:null},{url:"assets/@vue-legacy-D0SgPP5D.js",revision:null},{url:"assets/@vue-yfti66JX.js",revision:null},{url:"assets/auth-B0NBdEr1.js",revision:null},{url:"assets/auth-legacy-CIxjA6gL.js",revision:null},{url:"assets/axios-CwoVb0Lo.js",revision:null},{url:"assets/axios-legacy-CUPSUh8R.js",revision:null},{url:"assets/DepartmentItem-CN3hBVMW.css",revision:null},{url:"assets/DepartmentItem-COQfhGXx.js",revision:null},{url:"assets/DepartmentItem-legacy-DCM2Ba9T.js",revision:null},{url:"assets/DepartmentPage-Cfyl8_o1.css",revision:null},{url:"assets/DepartmentPage-D7RAZPPg.js",revision:null},{url:"assets/DepartmentPage-legacy-CUSrtpNw.js",revision:null},{url:"assets/ErrorPage-BnE_8L-_.js",revision:null},{url:"assets/ErrorPage-legacy-UNgxuvDz.js",revision:null},{url:"assets/ForgotPassword-legacy-wx8Riql7.js",revision:null},{url:"assets/ForgotPassword-RduVfh1U.js",revision:null},{url:"assets/HomePage-B636Fc4w.js",revision:null},{url:"assets/HomePage-DJ_DQD44.css",revision:null},{url:"assets/HomePage-legacy-DYkH-cVj.js",revision:null},{url:"assets/https-CKGOMJ9E.js",revision:null},{url:"assets/https-legacy-CAagIHIn.js",revision:null},{url:"assets/index-D-OmhUBE.css",revision:null},{url:"assets/index-legacy-CmP5jgND.js",revision:null},{url:"assets/index-Oc7kkrtf.js",revision:null},{url:"assets/ionicons-legacy-BYlXq-Bl.js",revision:null},{url:"assets/ionicons-vuVtR0Xh.js",revision:null},{url:"assets/LoginAuth-CNnLL4xf.css",revision:null},{url:"assets/LoginAuth-legacy-BcRDVxBm.js",revision:null},{url:"assets/LoginAuth-R2Mg8fKk.js",revision:null},{url:"assets/LoginUser-DYii5jAu.js",revision:null},{url:"assets/LoginUser-legacy-BfxA6y1r.js",revision:null},{url:"assets/pinia-FlwmMssk.js",revision:null},{url:"assets/pinia-legacy-DXNVVc9U.js",revision:null},{url:"assets/polyfills-legacy-DlSeEVVy.js",revision:null},{url:"assets/primeflex-BRpkHBhv.css",revision:null},{url:"assets/primeflex-legacy-BopLd2K7.js",revision:null},{url:"assets/ProfileInfo-BmyZCLNu.js",revision:null},{url:"assets/ProfileInfo-jVPEBmIQ.css",revision:null},{url:"assets/ProfileInfo-legacy-CjXQEdtE.js",revision:null},{url:"assets/ProfilePage-C2dScTNu.js",revision:null},{url:"assets/ProfilePage-legacy-CRgNbnve.js",revision:null},{url:"assets/register-service-worker-legacy-OLieyxJW.js",revision:null},{url:"assets/register-service-worker-TYP_X6yW.js",revision:null},{url:"assets/RegisterUser-By3VZC9t.css",revision:null},{url:"assets/RegisterUser-CPczkWlz.js",revision:null},{url:"assets/RegisterUser-legacy-Dai4Prpk.js",revision:null},{url:"assets/ReservacionDepartamento-CktpqgYZ.js",revision:null},{url:"assets/ReservacionDepartamento-legacy-N2DRQ3O8.js",revision:null},{url:"assets/ReservationCard-CzfUqC2A.js",revision:null},{url:"assets/ReservationCard-DahM8bKi.css",revision:null},{url:"assets/ReservationCard-legacy-tRavLTcf.js",revision:null},{url:"assets/ResetPassword-BKZpVQh3.js",revision:null},{url:"assets/ResetPassword-legacy-BxAT-QpZ.js",revision:null},{url:"assets/SearchPage-1ArUywAj.js",revision:null},{url:"assets/SearchPage-DRMD8wTd.css",revision:null},{url:"assets/SearchPage-legacy-DqSA92Ta.js",revision:null},{url:"assets/SuccesfulPayment-BHkS4v7G.js",revision:null},{url:"assets/SuccesfulPayment-legacy-COEufC0J.js",revision:null},{url:"assets/swiper-BsCGvvrO.css",revision:null},{url:"assets/swiper-e3qj2Uko.js",revision:null},{url:"assets/swiper-legacy-Bbn1tEQl.js",revision:null},{url:"assets/user-Bt1g27hi.js",revision:null},{url:"assets/user-legacy-BKyNV5bs.js",revision:null},{url:"assets/vue-0gI2gMPI.js",revision:null},{url:"assets/vue-legacy-CLucp-wY.js",revision:null},{url:"assets/vue-router-C1vmwl4t.js",revision:null},{url:"assets/vue-router-legacy-BXDKlxlV.js",revision:null},{url:"assets/vue-toast-notification-BuDNWbXa.js",revision:null},{url:"assets/vue-toast-notification-legacy--LaN0e6j.js",revision:null},{url:"index.html",revision:"88e6423f1e1a88481f713c658f9f6599"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"a646f2cf8f8f466a1e129978017009f5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
