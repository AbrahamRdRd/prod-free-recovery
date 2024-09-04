import{u as ue,L as ie,K as re,J as de,x as f,F as z,e as U,Q as X,z as j,R as K,l as Y,k as c,w as g,D as b,d as ce,r as pe,B as q,C as me,m as ve,n as fe,o as _e,A as ge,p as he,q as ye,g as Ie}from"./@ionic-D3TE2VMj.js";import{g as De,b as ke}from"./ionicons-lnr37WKp.js";import{a as W}from"./axios-CwoVb0Lo.js";import{u as we}from"./vue-router-C1vmwl4t.js";import{u as Ce}from"./index-vw-V6Zuo.js";import{v as be}from"./user-Dkj4-I_6.js";import{d as G,r as p,c as M,b as xe,w as $e,aM as m,a1 as Oe,aa as t,by as a,be as e,a9 as d,b7 as _,$ as v,a0 as k,a2 as w,H as Se,aP as Te,aN as Be}from"./@vue-yfti66JX.js";import{_ as Me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./@stencil-CHpqkKxm.js";import"./pinia-FlwmMssk.js";import"./crypto-js-BD323iWx.js";import"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./https-CNct6Qw_.js";import"./vue-toast-notification-CyaKMIrI.js";import"./vue-AlRGbnWJ.js";const V=h=>(Te("data-v-6fa573fa"),h=h(),Be(),h),Ve=V(()=>w("h2",null,"Price detail",-1)),Ae=V(()=>w("u",null,"Tarifia de servicio",-1)),Ee=V(()=>w("b",null,"Total(MXN)",-1)),Ne=G({__name:"ReservationViewMobile",setup(h){const x=we(),y=Ce(),A=ue(),I=p(0),l=p(),E=p(!1),C=p(!1),$=p(!1),D=p(),i=p(),N=["OK"],O=p(!1),P=M(()=>y.isLogged),R=M(()=>y.departmentInfo),S=M(()=>y.reservation),L=p({date:{weekday:"short",month:"long",day:"2-digit"},time:{hour:"2-digit",minute:"2-digit"}}),J=n=>{O.value=n},Q=n=>{$.value=n},F=n=>{const s=new Date,o=s.getFullYear(),r=("0"+(s.getMonth()+1)).slice(-2),B=("0"+s.getDate()).slice(-2),le="".concat(o,"-").concat(r,"-").concat(B);return n>=le},u=p({date_in:new Date().toISOString().split("T")[0],date_out:new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0]}),T=(n,s)=>{const o=new Date(n),r=new Date(s),B=Math.abs(r.getTime()-o.getTime());if(r>o)C.value=!0,$.value=!0;else return C.value=!1,Math.ceil(B/(1e3*60*60*24))},Z=async()=>{E.value=!0;try{if(l.value){const n=await ne(I.value*1.1);await ae(n,l.value)}}catch(n){console.error("Error in the creation of the price and checkout",n)}},ee=async()=>{try{return(await be()).data}catch(n){console.error("Error in the verification of the email",n),n.response.status==401&&A.push("/login")}},te=async()=>{const n=await ee();P.value&&(n==null?void 0:n.status)=="si"?Z():P.value&&(n==null?void 0:n.status)=="no"?O.value=!0:A.push("/login")},ae=async(n,s)=>{var o;try{const r=await W.post("https://api.stripe.com/v1/checkout/sessions",{success_url:"https://recovery-suites.com/departments/".concat(x.params.id,"/succes-payment?department=").concat((o=i.value)==null?void 0:o.name,"&date_in=").concat(u.value.date_in,"&date_out=").concat(u.value.date_out,"&total=").concat(D.value),cancel_url:"https://recovery-suites.com/departments/".concat(x.params.id),line_items:[{price:n,quantity:s}],mode:"payment",payment_method_types:["card"]},{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer sk_test_IKYCHOAmUhC7IPTdaoVtO58D"}});y.setCheckOutId(r.data.id),r.data.url&&(window.location.href=r.data.url)}catch(r){console.error("Error en el checkout",r)}},ne=async n=>{try{return(await W.post("https://api.stripe.com/v1/prices",{currency:"mxn",unit_amount:n*100,"product_data[name]":"Gold Plan"},{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer sk_test_IKYCHOAmUhC7IPTdaoVtO58D"}})).data.id}catch(s){console.error("No pudimos agregar el precio",s)}},H=()=>{i.value=R.value,S.value!=null?(u.value.date_out=S.value.date_out,u.value.date_in=S.value.date_in):(u.value.date_in=new Date().toISOString().split("T")[0],u.value.date_out=new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0]),I.value=i.value.price,l.value=T(u.value.date_out,u.value.date_in),l.value&&(D.value=I.value*l.value*1.1)},oe=n=>{var s;u.value.date_out=(s=n.detail.value)!=null?s:"",l.value=T(u.value.date_out,u.value.date_in),l.value&&(D.value=I.value*l.value*1.1)},se=n=>{var s;u.value.date_in=(s=n.detail.value)!=null?s:"",l.value=T(u.value.date_out,u.value.date_in),l.value&&(D.value=I.value*l.value*1.1)};return xe(()=>{H()}),$e(()=>[R.value],()=>{H()}),(n,s)=>(m(),Oe(Se,null,[t(e(pe),{class:"ion-padding-vertical w-full card-content"},{default:a(()=>[t(e(ie),null,{default:a(()=>[t(e(re),{class:"ml-3"},{default:a(()=>{var o;return[d(_((o=i.value)==null?void 0:o.name),1)]}),_:1}),t(e(de),{class:"ml-3"},{default:a(()=>{var o;return[d("$"+_((o=i.value)==null?void 0:o.price)+" MXN per night",1)]}),_:1}),t(e(f)),t(e(z),{class:"p-0"},{default:a(()=>[t(e(f),null,{default:a(()=>[t(e(U),null,{default:a(()=>[d("Check in")]),_:1}),t(e(X),{datetime:"datetimeIn"}),t(e(j),{"keep-contents-mounted":!0},{default:a(()=>[t(e(K),{id:"datetimeIn","is-date-enabled":F,presentation:"date",modelValue:u.value.date_in,"onUpdate:modelValue":s[0]||(s[0]=o=>u.value.date_in=o),value:u.value.date_in,"format-options":L.value,onIonChange:se},null,8,["modelValue","value","format-options"])]),_:1})]),_:1})]),_:1}),t(e(z),{class:"p-0"},{default:a(()=>[t(e(f),{lines:"inset"},{default:a(()=>[t(e(U),null,{default:a(()=>[d("Check out")]),_:1}),t(e(X),{datetime:"datetimeOut"}),t(e(j),{"keep-contents-mounted":!0},{default:a(()=>[t(e(K),{id:"datetimeOut","is-date-enabled":F,presentation:"date",modelValue:u.value.date_out,"onUpdate:modelValue":s[1]||(s[1]=o=>u.value.date_out=o),value:u.value.date_out,"format-options":L.value,onIonChange:oe},null,8,["modelValue","value","format-options"])]),_:1})]),_:1})]),_:1})]),_:1}),C.value?k("",!0):(m(),v(e(Y),{key:0,onClick:s[2]||(s[2]=o=>te()),class:"mx-5",expand:"block"},{default:a(()=>[d(" Book now! ")]),_:1})),C.value?(m(),v(e(Y),{key:1,disabled:"",expand:"block",class:"ion-margin"},{default:a(()=>[d(" Check the dates ")]),_:1})):k("",!0),t(e(f),{lines:"inset"},{default:a(()=>[t(e(c),{class:"ion-padding-start"},{default:a(()=>[Ve]),_:1})]),_:1}),t(e(f),{lines:"inset"},{default:a(()=>[t(e(g),{size:"6"},{default:a(()=>[t(e(c),{class:"ion-padding-start ion-no-margin text-base"},{default:a(()=>{var o;return[w("u",null,"$"+_((o=i.value)==null?void 0:o.price)+" MXN x "+_(l.value)+" night",1)]}),_:1})]),_:1}),t(e(g),{size:"6"},{default:a(()=>[t(e(b),{class:"ion-justify-content-end ion-margin-end"},{default:a(()=>{var o;return[(o=i.value)!=null&&o.price&&l.value?(m(),v(e(c),{key:0,class:"ion-no-margin text-base"},{default:a(()=>{var r;return[d("$"+_(((r=i.value)==null?void 0:r.price)*l.value)+" MXN",1)]}),_:1})):i.value&&l.value==null?(m(),v(e(c),{key:1},{default:a(()=>[d("???")]),_:1})):k("",!0)]}),_:1})]),_:1})]),_:1}),t(e(f),{lines:"inset"},{default:a(()=>[t(e(g),null,{default:a(()=>[t(e(c),{class:"ion-padding-start ion-no-margin text-lg"},{default:a(()=>[Ae,t(e(ce),{icon:e(De)},null,8,["icon"])]),_:1})]),_:1}),t(e(g),null,{default:a(()=>[t(e(b),{class:"ion-justify-content-end ion-margin-end"},{default:a(()=>[i.value&&l.value?(m(),v(e(c),{key:0,class:"ion-no-margin text-base"},{default:a(()=>[d("$"+_(i.value.price*l.value*.1)+" MXN",1)]),_:1})):i.value&&l.value==null?(m(),v(e(c),{key:1},{default:a(()=>[d("???")]),_:1})):k("",!0)]),_:1})]),_:1})]),_:1}),t(e(f),{lines:"inset"},{default:a(()=>[t(e(g),null,{default:a(()=>[t(e(c),{class:"ion-padding-start"},{default:a(()=>[Ee]),_:1})]),_:1}),t(e(g),null,{default:a(()=>[t(e(b),{class:"ion-justify-content-end ion-margin-end"},{default:a(()=>[i.value&&l.value?(m(),v(e(c),{key:0,class:"ion-padding-start text-base"},{default:a(()=>{var o;return[w("b",null,"$"+_((o=D.value)==null?void 0:o.toFixed(2)),1)]}),_:1})):i.value&&l.value==null?(m(),v(e(c),{key:1},{default:a(()=>[d("???")]),_:1})):k("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),t(e(q),{"is-open":O.value,header:"Please verify your email",message:"You need to verify your email to make a reservation",buttons:N,onDidDismiss:s[3]||(s[3]=o=>J(!1))},null,8,["is-open"]),t(e(q),{"is-open":$.value,header:"Please check the days!",message:"The check in date must be before the check out date.",buttons:N,onDidDismiss:s[4]||(s[4]=o=>Q(!1))},null,8,["is-open"]),t(e(me),{"is-open":E.value,trigger:"open-loading",message:"Loading...",duration:"3000",spinner:"circles"},null,8,["is-open"])],64))}}),Pe=Me(Ne,[["__scopeId","data-v-6fa573fa"]]),et=G({__name:"ReservacionDepartamento",setup(h){return(x,y)=>(m(),v(e(Ie),null,{default:a(()=>[t(e(he),null,{default:a(()=>[t(e(ve),null,{default:a(()=>[t(e(fe),{slot:"start"},{default:a(()=>[t(e(_e),{defaultHref:"/departments",text:"Back",icon:e(ke)},null,8,["icon"])]),_:1}),t(e(ge),null,{default:a(()=>[d("Reservation")]),_:1})]),_:1})]),_:1}),t(e(ye),null,{default:a(()=>[t(e(g),null,{default:a(()=>[t(e(b),{class:"flex justify-content-center align-items-start"},{default:a(()=>[t(Pe)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{et as default};
