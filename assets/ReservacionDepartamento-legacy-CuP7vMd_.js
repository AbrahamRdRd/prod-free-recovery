System.register(["./@ionic-legacy-CbonVIpO.js","./ionicons-legacy-HQMOYMzb.js","./axios-legacy-CUPSUh8R.js","./vue-router-legacy-BXDKlxlV.js","./index-legacy-D_PHqbxy.js","./user-legacy-DgBaj9Rg.js","./@vue-legacy-D0SgPP5D.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js","./@stencil-legacy-CapHDfm8.js","./pinia-legacy-DXNVVc9U.js","./crypto-js-legacy-DI2495am.js","./register-service-worker-legacy-OLieyxJW.js","./primeflex-legacy-BopLd2K7.js","./https-legacy-DDLDNORo.js","./vue-toast-notification-legacy-CcnPxyzq.js","./vue-legacy-CAYYIPah.js"],(function(e,a){"use strict";var t,l,n,u,i,o,s,d,r,c,v,_,p,m,f,g,y,h,w,k,D,b,x,j,C,I,$,T,O,M,S,V,N,P,z,A,B,X,E,H,K,R,U,Y,F,L,q,G,J,Q;return{setters:[e=>{t=e.u,l=e.L,n=e.K,u=e.J,i=e.x,o=e.F,s=e.e,d=e.Q,r=e.z,c=e.R,v=e.l,_=e.k,p=e.w,m=e.D,f=e.d,g=e.r,y=e.B,h=e.C,w=e.m,k=e.n,D=e.o,b=e.A,x=e.p,j=e.q,C=e.g},e=>{I=e.g,$=e.b},e=>{T=e.a},e=>{O=e.u},e=>{M=e.u},e=>{S=e.v},e=>{V=e.d,N=e.r,P=e.c,z=e.b,A=e.w,B=e.aM,X=e.a1,E=e.aa,H=e.by,K=e.be,R=e.a9,U=e.b7,Y=e.$,F=e.a0,L=e.a2,q=e.H,G=e.aP,J=e.aN},e=>{Q=e._},null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent="",document.head.appendChild(a);const W=e=>(G("data-v-47c46672"),e=e(),J(),e),Z=W((()=>L("h2",null,"Price detail",-1))),ee=W((()=>L("u",null,"Tarifia de servicio",-1))),ae=W((()=>L("b",null,"Total(MXN)",-1))),te=Q(V({__name:"ReservationViewMobile",setup(e){const a=O(),w=M(),k=t(),D=N(0),b=N(),x=N(!1),j=N(!1),C=N(!1),$=N(),V=N(),G=["OK"],J=N(!1),Q=P((()=>w.isLogged)),W=P((()=>w.departmentInfo)),te=P((()=>w.reservation)),le=N({date:{weekday:"short",month:"long",day:"2-digit"},time:{hour:"2-digit",minute:"2-digit"}}),ne=e=>{const a=new Date;return e>=`${a.getFullYear()}-${("0"+(a.getMonth()+1)).slice(-2)}-${("0"+a.getDate()).slice(-2)}`},ue=N({date_in:(new Date).toISOString().split("T")[0],date_out:new Date((new Date).setDate((new Date).getDate()+1)).toISOString().split("T")[0]}),ie=(e,a)=>{const t=new Date(e),l=new Date(a),n=Math.abs(l.getTime()-t.getTime());if(!(l>t))return j.value=!1,Math.ceil(n/864e5);j.value=!0,C.value=!0},oe=async()=>{const e=await(async()=>{try{return(await S()).data}catch(e){console.error("Error in the verification of the email",e),401==e.response.status&&k.push("/login")}})();Q.value&&"si"==(null==e?void 0:e.status)?(async()=>{x.value=!0;try{if(b.value){const e=await de(1.1*D.value);await se(e,b.value)}}catch(e){console.error("Error in the creation of the price and checkout",e)}})():Q.value&&"no"==(null==e?void 0:e.status)?J.value=!0:k.push("/login")},se=async(e,t)=>{try{var l;const n=await T.post("https://api.stripe.com/v1/checkout/sessions",{success_url:`https://recovery-suites.com/departments/${a.params.id}/succes-payment?department=${null===(l=V.value)||void 0===l?void 0:l.name}&date_in=${ue.value.date_in}&date_out=${ue.value.date_out}&total=${$.value}`,cancel_url:`https://recovery-suites.com/departments/${a.params.id}`,line_items:[{price:e,quantity:t}],mode:"payment",payment_method_types:["card"]},{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer sk_test_IKYCHOAmUhC7IPTdaoVtO58D"}});w.setCheckOutId(n.data.id),n.data.url&&(window.location.href=n.data.url)}catch(n){console.error("Error en el checkout",n)}},de=async e=>{try{return(await T.post("https://api.stripe.com/v1/prices",{currency:"mxn",unit_amount:100*e,"product_data[name]":"Gold Plan"},{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer sk_test_IKYCHOAmUhC7IPTdaoVtO58D"}})).data.id}catch(a){console.error("No pudimos agregar el precio",a)}},re=()=>{V.value=W.value,null!=te.value?(ue.value.date_out=te.value.date_out,ue.value.date_in=te.value.date_in):(ue.value.date_in=(new Date).toISOString().split("T")[0],ue.value.date_out=new Date((new Date).setDate((new Date).getDate()+1)).toISOString().split("T")[0]),D.value=V.value.price,b.value=ie(ue.value.date_out,ue.value.date_in),b.value&&($.value=D.value*b.value*1.1)},ce=e=>{var a;ue.value.date_out=null!==(a=e.detail.value)&&void 0!==a?a:"",b.value=ie(ue.value.date_out,ue.value.date_in),b.value&&($.value=D.value*b.value*1.1)},ve=e=>{var a;ue.value.date_in=null!==(a=e.detail.value)&&void 0!==a?a:"",b.value=ie(ue.value.date_out,ue.value.date_in),b.value&&($.value=D.value*b.value*1.1)};return z((()=>{re()})),A((()=>[W.value]),(()=>{re()})),(e,a)=>(B(),X(q,null,[E(K(g),{class:"ion-padding-vertical w-full card-content"},{default:H((()=>[E(K(l),null,{default:H((()=>[E(K(n),{class:"ml-3"},{default:H((()=>{var e;return[R(U(null===(e=V.value)||void 0===e?void 0:e.name),1)]})),_:1}),E(K(u),{class:"ml-3"},{default:H((()=>{var e;return[R("$"+U(null===(e=V.value)||void 0===e?void 0:e.price)+" MXN per night",1)]})),_:1}),E(K(i)),E(K(o),{class:"p-0"},{default:H((()=>[E(K(i),null,{default:H((()=>[E(K(s),null,{default:H((()=>[R("Check in")])),_:1}),E(K(d),{datetime:"datetimeIn"}),E(K(r),{"keep-contents-mounted":!0},{default:H((()=>[E(K(c),{id:"datetimeIn","is-date-enabled":ne,presentation:"date",modelValue:ue.value.date_in,"onUpdate:modelValue":a[0]||(a[0]=e=>ue.value.date_in=e),value:ue.value.date_in,"format-options":le.value,onIonChange:ve},null,8,["modelValue","value","format-options"])])),_:1})])),_:1})])),_:1}),E(K(o),{class:"p-0"},{default:H((()=>[E(K(i),{lines:"inset"},{default:H((()=>[E(K(s),null,{default:H((()=>[R("Check out")])),_:1}),E(K(d),{datetime:"datetimeOut"}),E(K(r),{"keep-contents-mounted":!0},{default:H((()=>[E(K(c),{id:"datetimeOut","is-date-enabled":ne,presentation:"date",modelValue:ue.value.date_out,"onUpdate:modelValue":a[1]||(a[1]=e=>ue.value.date_out=e),value:ue.value.date_out,"format-options":le.value,onIonChange:ce},null,8,["modelValue","value","format-options"])])),_:1})])),_:1})])),_:1})])),_:1}),j.value?F("",!0):(B(),Y(K(v),{key:0,onClick:a[2]||(a[2]=e=>oe()),class:"mx-5",expand:"block"},{default:H((()=>[R(" Book now! ")])),_:1})),j.value?(B(),Y(K(v),{key:1,disabled:"",expand:"block",class:"ion-margin"},{default:H((()=>[R(" Check the dates ")])),_:1})):F("",!0),E(K(i),{lines:"inset"},{default:H((()=>[E(K(_),{class:"ion-padding-start"},{default:H((()=>[Z])),_:1})])),_:1}),E(K(i),{lines:"inset"},{default:H((()=>[E(K(p),{size:"6"},{default:H((()=>[E(K(_),{class:"ion-padding-start ion-no-margin text-base"},{default:H((()=>{var e;return[L("u",null,"$"+U(null===(e=V.value)||void 0===e?void 0:e.price)+" MXN x "+U(b.value)+" night",1)]})),_:1})])),_:1}),E(K(p),{size:"6"},{default:H((()=>[E(K(m),{class:"ion-justify-content-end ion-margin-end"},{default:H((()=>{var e;return[null!==(e=V.value)&&void 0!==e&&e.price&&b.value?(B(),Y(K(_),{key:0,class:"ion-no-margin text-base"},{default:H((()=>{var e;return[R("$"+U((null===(e=V.value)||void 0===e?void 0:e.price)*b.value)+" MXN",1)]})),_:1})):V.value&&null==b.value?(B(),Y(K(_),{key:1},{default:H((()=>[R("???")])),_:1})):F("",!0)]})),_:1})])),_:1})])),_:1}),E(K(i),{lines:"inset"},{default:H((()=>[E(K(p),null,{default:H((()=>[E(K(_),{class:"ion-padding-start ion-no-margin text-lg"},{default:H((()=>[ee,E(K(f),{icon:K(I)},null,8,["icon"])])),_:1})])),_:1}),E(K(p),null,{default:H((()=>[E(K(m),{class:"ion-justify-content-end ion-margin-end"},{default:H((()=>[V.value&&b.value?(B(),Y(K(_),{key:0,class:"ion-no-margin text-base"},{default:H((()=>[R("$"+U(V.value.price*b.value*.1)+" MXN",1)])),_:1})):V.value&&null==b.value?(B(),Y(K(_),{key:1},{default:H((()=>[R("???")])),_:1})):F("",!0)])),_:1})])),_:1})])),_:1}),E(K(i),{lines:"inset"},{default:H((()=>[E(K(p),null,{default:H((()=>[E(K(_),{class:"ion-padding-start"},{default:H((()=>[ae])),_:1})])),_:1}),E(K(p),null,{default:H((()=>[E(K(m),{class:"ion-justify-content-end ion-margin-end"},{default:H((()=>[V.value&&b.value?(B(),Y(K(_),{key:0,class:"ion-padding-start text-base"},{default:H((()=>{var e;return[L("b",null,"$"+U(null===(e=$.value)||void 0===e?void 0:e.toFixed(2)),1)]})),_:1})):V.value&&null==b.value?(B(),Y(K(_),{key:1},{default:H((()=>[R("???")])),_:1})):F("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),E(K(y),{"is-open":J.value,header:"Please verify your email",message:"You need to verify your email to make a reservation",buttons:G,onDidDismiss:a[3]||(a[3]=e=>{return a=!1,void(J.value=a);var a})},null,8,["is-open"]),E(K(y),{"is-open":C.value,header:"Please check the days!",message:"The check in date must be before the check out date.",buttons:G,onDidDismiss:a[4]||(a[4]=e=>{return a=!1,void(C.value=a);var a})},null,8,["is-open"]),E(K(h),{"is-open":x.value,trigger:"open-loading",message:"Loading...",duration:"3000",spinner:"circles"},null,8,["is-open"])],64))}}),[["__scopeId","data-v-47c46672"]]);e("default",V({__name:"ReservacionDepartamento",setup:e=>(e,a)=>(B(),Y(K(C),null,{default:H((()=>[E(K(x),null,{default:H((()=>[E(K(w),null,{default:H((()=>[E(K(k),{slot:"start"},{default:H((()=>[E(K(D),{defaultHref:"/departments",text:"Back",icon:K($)},null,8,["icon"])])),_:1}),E(K(b),null,{default:H((()=>[R("Reservation")])),_:1})])),_:1})])),_:1}),E(K(j),null,{default:H((()=>[E(K(p),null,{default:H((()=>[E(K(m),{class:"flex justify-content-center align-items-start"},{default:H((()=>[E(te)])),_:1})])),_:1})])),_:1})])),_:1}))}))}}}));
