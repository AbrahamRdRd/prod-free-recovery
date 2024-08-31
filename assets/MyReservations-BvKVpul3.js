import{x as U,e as D,k as c,S as C,d as b,r as F,q as N,u as H,m as O,n as P,l as R,A as B,p as q,U as E,V as Y,w as z,g as G}from"./@ionic-D3TE2VMj.js";import{u as J,b as j,h as K}from"./ionicons-lnr37WKp.js";import{u as Q}from"./index-EdzShYqw.js";import{u as W}from"./vue-router-C1vmwl4t.js";import{g as X}from"./departmentReservation-CdI2sVNv.js";import{d as $,aM as i,$ as m,by as a,a1 as h,H as Z,aU as ee,a2 as s,aa as t,be as e,a9 as r,b7 as _,a0 as T,r as I,c as M,b as te,w as ae}from"./@vue-yfti66JX.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./@stencil-CHpqkKxm.js";import"./pinia-FlwmMssk.js";import"./crypto-js-BD323iWx.js";import"./register-service-worker-TYP_X6yW.js";/* empty css                  */import"./https-D5aSzmN3.js";import"./axios-CwoVb0Lo.js";import"./vue-toast-notification-CyaKMIrI.js";import"./vue-AlRGbnWJ.js";const oe={key:0,class:"my-4"},ne=["href"],le=s("div",{class:"unread-indicator-wrapper",slot:"start"},[s("div",{class:"unread-indicator"})],-1),re=s("br",null,null,-1),ue=s("br",null,null,-1),ie=s("br",null,null,-1),de=s("br",null,null,-1),ce={class:"flex flex-column mt-4"},_e={class:"flex justify-content-between"},fe=s("b",null,"Check-in:",-1),me={class:"flex justify-content-between mt-2"},pe=s("b",null,"Check-out:",-1),ve={class:"metadata-end-wrapper",slot:"end"},he=$({__name:"MyReservations",props:{department_info:Object},setup(y){const d=y;return(x,p)=>(i(),m(e(N),null,{default:a(()=>[d.department_info&&d.department_info.length>0?(i(),h("div",oe,[(i(!0),h(Z,null,ee(d.department_info,o=>(i(),h("div",{key:o.id},[s("a",{class:"anchor_maps mt-4",href:o.map_url,target:"_blank"},[t(e(F),null,{default:a(()=>[t(e(U),{class:"my-4",detail:!1},{default:a(()=>[le,t(e(D),null,{default:a(()=>[t(e(c),null,{default:a(()=>[r("Reservation:")]),_:1}),re,t(e(C),{class:"mb-4 pb-4"},{default:a(()=>{var n;return[s("p",null,_((n=o.pivot)==null?void 0:n.payment_data.id),1)]}),_:2},1024),ue,t(e(c),null,{default:a(()=>[r(_(o.name),1)]),_:2},1024),ie,t(e(C),{color:"medium",class:"ion-text-wrap"},{default:a(()=>[r(_(o.address.address),1)]),_:2},1024),de,s("div",ce,[s("div",_e,[t(e(c),null,{default:a(()=>[fe]),_:1}),t(e(c),null,{default:a(()=>{var n,u;return[r(_((u=(n=o.pivot)==null?void 0:n.date_in)==null?void 0:u.split(" ")[0]),1)]}),_:2},1024)]),s("div",me,[t(e(c),null,{default:a(()=>[pe]),_:1}),t(e(c),null,{default:a(()=>{var n,u;return[r(_((u=(n=o.pivot)==null?void 0:n.date_out)==null?void 0:u.split(" ")[0]),1)]}),_:2},1024)])])]),_:2},1024),s("div",ve,[t(e(b),{color:"medium",icon:e(J)},null,8,["icon"])])]),_:2},1024)]),_:2},1024)],8,ne)]))),128))])):T("",!0)]),_:1}))}}),Ie={class:"flex-column justify-content-center"},be={class:"flex justify-content-center"},ye=$({__name:"MyReservations",setup(y){const d=Q(),x=W(),p=H(),o=I(!1),n=I(),u=M(()=>d.isLogged),V=M(()=>d.userInfo),L=I(V.value),A=async f=>{try{const l=(await X(f)).data;n.value=l.data}catch(l){l.response.status==401&&(o.value=!1,console.error("No pudimos traer la información",l))}},S=f=>{setTimeout(()=>{location.reload(),f.target.complete()},2e3)},g=()=>{u.value?(o.value=!0,A(L.value.id)):o.value=!1};return te(()=>{g()}),ae(()=>x.fullPath,()=>{g()}),(f,l)=>(i(),m(e(G),null,{default:a(()=>[t(e(q),null,{default:a(()=>[t(e(O),null,{default:a(()=>[t(e(P),{slot:"start"},{default:a(()=>[t(e(R),{onClick:l[0]||(l[0]=v=>e(p).push("/departments")),icon:e(j)},{default:a(()=>[t(e(b),{slot:"start",icon:e(j)},null,8,["icon"]),r(" Back ")]),_:1},8,["icon"])]),_:1}),t(e(B),null,{default:a(()=>[r("My reservations")]),_:1})]),_:1})]),_:1}),t(e(N),null,{default:a(()=>{var v,k;return[t(e(E),{slot:"fixed",onIonRefresh:l[1]||(l[1]=w=>S(w))},{default:a(()=>[t(e(Y))]),_:1}),o.value&&((v=n.value)==null?void 0:v.length)!=0?(i(),m(he,{key:0,department_info:n.value,"is-activate":o.value},null,8,["department_info","is-activate"])):!o.value||((k=n.value)==null?void 0:k.length)==0?(i(),m(e(z),{key:1,class:"flex mt-4 justify-content-center align-items-center h-30rem"},{default:a(()=>[s("div",Ie,[t(e(B),{class:"text-center mb-2"},{default:a(()=>[r("You don't have reservations.")]),_:1}),s("div",be,[t(e(R),{onClick:l[2]||(l[2]=w=>e(p).push("/departments")),class:"custom-back-button"},{default:a(()=>[t(e(b),{icon:e(K),class:"mr-2"},null,8,["icon"]),r(" Choose your departments ")]),_:1})])])]),_:1})):T("",!0)]}),_:1})]),_:1}))}}),Ue=se(ye,[["__scopeId","data-v-1881a13c"]]);export{Ue as default};
