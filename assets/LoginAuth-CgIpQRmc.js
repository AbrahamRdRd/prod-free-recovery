import{d as B,r as c,aM as f,a1 as L,aa as t,by as o,be as e,a2 as l,a9 as w,bC as D,$ as N,a0 as E,H as P,aP as A,aN as O}from"./@vue-yfti66JX.js";import{u as R,D as p,r as j,w as V,E as $,H as q,s as g,l as F,x as T,q as H,C as K,B as v}from"./@ionic-D3TE2VMj.js";import{u as M}from"./index-vw-V6Zuo.js";import{a as z,f as J}from"./auth-zhlWb_9a.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const G=u=>(A("data-v-fcb40178"),u=u(),O(),u),Q={class:"forgot-presente-alert ml-3 mt-3"},U={class:"px-3"},W=G(()=>l("p",{class:"ml-3"},[w(" Don't have an account yet? "),l("a",{href:"/sign-up",as:"ion-button","router-direction":"forward",id:"open-loading",class:"ml-2"},"Sign up here!")],-1)),X=B({__name:"LoginAuth",setup(u){const I=R(),y=M(),r=c({email:"",password:""}),i=c(!1),d=c(!1),m=c(!1),h=["OK"],_=[{text:"Close"},{text:"Send",handler:a=>{C(a[0])}}],x=[{placeholder:"Enter our email",type:"email"}],b=async()=>{m.value=!0;try{const a=await z(r.value);y.setSession(a.data.token,a.data.user),I.navigate("/departments")}catch(a){a.response.status==406&&(d.value=!0)}},C=async a=>{i.value=!1;try{await J({email:a})}catch(s){console.error("Check your email")}},S=a=>{i.value=a},k=a=>{d.value=a};return(a,s)=>(f(),L(P,null,[t(e(H),{class:"flex justify-content-center align-items-center h-full"},{default:o(()=>[t(e(p),{class:"w-full flex justify-content-center align-items-center h-full md:h-auto"},{default:o(()=>[t(e(j),{class:"flex flex-column justify-content-center align-items-center w-full md:w-30rem"},{default:o(()=>[l("form",{onSubmit:D(b,["prevent"]),class:"m-0 w-full"},[t(e(p),null,{default:o(()=>[t(e(V),{class:"flex justify-content-center"},{default:o(()=>[t(e($),null,{default:o(()=>[t(e(q),{src:"https://i.imgur.com/NJrNK4Z.png",alt:"Turismo de salud. Regresa como nueva.",loading:"lazy"})]),_:1})]),_:1})]),_:1}),t(e(p),{class:"mt-3 px-3"},{default:o(()=>[t(e(g),{value:r.value.email,onInput:s[0]||(s[0]=n=>r.value.email=n.target.value),label:"Email","label-placement":"floating",fill:"outline",type:"email",placeholder:"email@domain.com"},null,8,["value"])]),_:1}),t(e(p),{class:"mt-3 px-3"},{default:o(()=>[t(e(g),{value:r.value.password,onInput:s[1]||(s[1]=n=>r.value.password=n.target.value),label:"Password",type:"password","label-placement":"floating",fill:"outline"},null,8,["value"])]),_:1}),l("p",Q,[l("a",{id:"present-alert","router-direction":"forward",onClick:s[2]||(s[2]=n=>i.value=!0)},"Did you forget your password?")]),l("div",U,[t(e(F),{expand:"block",type:"submit"},{default:o(()=>[w("Sign In")]),_:1})]),t(e(T)),W],32)]),_:1})]),_:1})]),_:1}),m.value?(f(),N(e(K),{key:0,"is-open":m.value,message:"Loading...",spinner:"circles",duration:"1000"},null,8,["is-open"])):E("",!0),t(e(v),{"is-open":i.value,trigger:"present-alert",header:"Enter your email",buttons:_,inputs:x,onDidDismiss:s[3]||(s[3]=n=>S(!1))},null,8,["is-open"]),t(e(v),{"is-open":d.value,header:"Email or password is incorrect.",message:"Something went wrong. Please try again.",buttons:h,onDidDismiss:s[4]||(s[4]=n=>k(!1))},null,8,["is-open"])],64))}}),oe=Z(X,[["__scopeId","data-v-fcb40178"]]);export{oe as L};
