import{m as q,n as P,l as v,d as M,A as E,p as F,w as R,D as Y,k as l,r as H,x as m,e as d,q as U,g as j}from"./@ionic-D3TE2VMj.js";import{b as G}from"./ionicons-lnr37WKp.js";import{u as J}from"./index-vw-V6Zuo.js";import{u as X,b as L}from"./vue-router-C1vmwl4t.js";import{c as W}from"./departmentReservation-JJHuIiGX.js";import{a as N}from"./axios-CwoVb0Lo.js";import{d as K,c as h,r as k,aG as Q,$ as w,by as t,be as e,aM as D,aa as a,a9 as o,b7 as f,a0 as ee,a2 as A}from"./@vue-yfti66JX.js";import"./@stencil-CHpqkKxm.js";import"./pinia-FlwmMssk.js";import"./crypto-js-BD323iWx.js";import"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./https-CNct6Qw_.js";import"./vue-toast-notification-CyaKMIrI.js";import"./vue-AlRGbnWJ.js";const te=async(g,r,_,c)=>{try{return await N.post("https://graph.facebook.com/v20.0/".concat(g,"/messages"),{messaging_product:"whatsapp",to:r,type:"template",template:{name:_,language:{code:"en"},components:c}},{headers:{Authorization:"Bearer EAAOpEMJaH6ABO6txyRi221NLiwVFbWVUK914IpBFhUnY3RdrSrWCZCONsnyD0tNsOsu1SN3ncZCA7Ni3OuiP833zGxOVJGPZA0r1lZBep6DbhU9k7I5zdCEtHviXlrIZBcXVp8J8WLTYCa5q5P2CZAZCoofjzz9pxY41MOtVUrY5Fl3zEBu9cZASMmTgoFDZCqgHvmAZDZD","Content-Type":"application/json"}})}catch(p){console.error("Error:",p)}},ae=A("img",{loading:"lazy",class:"mt-5",width:"100",height:"100",src:"https://i.imgur.com/oSAQEvV.png",alt:"instagram-check-mark"},null,-1),oe={class:"mt-3 mb-2 mx-4"},Ie=K({__name:"SuccesfulPayment",setup(g){var b,C;const r=X(),_=L(),c=J(),p=h(()=>c.departmentInfo),u=h(()=>c.userInfo).value,x=k(),I=k(),i=r.query,B=r.query.total,S=Number(B).toFixed(2),$=r.params.id;x.value=p.value;const T=()=>{const n=new Date(i.date_in);return(new Date(i.date_out).getTime()-n.getTime())/(1e3*3600*24)},V=async(n,s)=>{const y={payment_data:s,date_in:n.date_in,date_out:n.date_out};try{await W(Number($),y)}catch(O){console.error("No pudimos crear tu reservación")}},Z=[{type:"body",parameters:[{type:"text",text:i.date_in},{type:"text",text:i.date_out},{type:"text",text:T()},{type:"text",text:(b=Number(i.total))==null?void 0:b.toFixed(2)},{type:"text",text:"Ana Ramirez"},{type:"text",text:"".concat(u.name," ").concat(u.first_name)},{type:"text",text:u.email},{type:"text",text:"+(".concat((C=u.country_code)==null?void 0:C.phone_code,") ").concat(u.phone)}]}],z=async n=>{try{const s=await N.get("https://api.stripe.com/v1/checkout/sessions/".concat(n),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer sk_test_IKYCHOAmUhC7IPTdaoVtO58D"}});(s.status===200||s.status===201)&&!localStorage.getItem("messageSent_".concat(n))&&(await te(360628943808363,528131376584,"notification_of_apartment_rental",Z),localStorage.setItem("messageSent_".concat(n),"true")),I.value=s.data,V(r.query,JSON.stringify(I.value))}catch(s){console.error("There was an error retrieving the information.",s)}};return Q(()=>{const n=h(()=>c.checkout_id);z(n.value)}),(n,s)=>(D(),w(e(j),null,{default:t(()=>[a(e(F),null,{default:t(()=>[a(e(q),null,{default:t(()=>[a(e(P),{slot:"start"},{default:t(()=>[a(e(v),{"router-link":"/departments"},{default:t(()=>[a(e(M),{icon:e(G),size:"arge"},null,8,["icon"])]),_:1})]),_:1}),a(e(E),null,{default:t(()=>[o("Payment confirmation")]),_:1})]),_:1})]),_:1}),a(e(U),{class:"flex justify-content-center"},{default:t(()=>[a(e(R),{class:"flex flex-column justify-content-center align-items-center pt-5 min-w-100"},{default:t(()=>[a(e(Y),{class:"flex flex-column align-items-center"},{default:t(()=>[ae,a(e(l),{class:"text-4xl line-height-4 font-semibold"},{default:t(()=>[o("Payment successful")]),_:1}),a(e(l),null,{default:t(()=>[o("You're closer to fulfilling your dreams.")]),_:1})]),_:1}),a(e(H),{class:"flex flex-column max-h-auto w-11 mt-5"},{default:t(()=>[a(e(m),{lines:"none",class:"mt-3 mx-4"},{default:t(()=>[a(e(d),{class:"font-bold"},{default:t(()=>[o("Site")]),_:1}),a(e(l),null,{default:t(()=>[o(f(e(r).query.department),1)]),_:1})]),_:1}),a(e(m),{lines:"none",class:"mt-2 mx-4"},{default:t(()=>[a(e(d),{class:"font-bold"},{default:t(()=>[o("Check in:")]),_:1}),a(e(l),null,{default:t(()=>[o(f(e(r).query.date_in),1)]),_:1})]),_:1}),a(e(m),{lines:"none",class:"mt-2 mx-4"},{default:t(()=>[a(e(d),{class:"font-bold"},{default:t(()=>[o("Check out:")]),_:1}),a(e(l),null,{default:t(()=>[o(f(e(r).query.date_out),1)]),_:1})]),_:1}),a(e(m),{class:"mt-2 mx-4"},{default:t(()=>[a(e(d),{class:"font-bold"},{default:t(()=>[o("Price per night:")]),_:1}),x.value.price?(D(),w(e(l),{key:0},{default:t(()=>[o("$"+f(x.value.price)+" MXN",1)]),_:1})):ee("",!0)]),_:1}),A("div",oe,[a(e(m),{lines:"none"},{default:t(()=>[a(e(d),{class:"font-bold"},{default:t(()=>[o("Total amount (includes charges):")]),_:1}),a(e(l),null,{default:t(()=>[o("$"+f(e(S))+" MXN",1)]),_:1})]),_:1})])]),_:1}),a(e(v),{class:"mt-6",onClick:s[0]||(s[0]=y=>e(_).push("/my-reservations"))},{default:t(()=>[o("Go to my reservations")]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Ie as default};
