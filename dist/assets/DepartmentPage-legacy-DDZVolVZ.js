System.register(["./index-legacy-KGUUhhRa.js","./LoginUser-legacy-B9WS0F_H.js","./RegisterUser-legacy-DPJM-73o.js","./axios-legacy-CUPSUh8R.js"],(function(e,t){"use strict";var i,n,o,a,l,s,u,m,r,p,d,c,g,f,h,L,_,y,v,b,x,w,j,k,D,z,C,E,S,I,B,M,N,R,G,H,J,K,T,U;return{setters:[e=>{i=e.d,n=e.o,o=e.c,a=e.w,l=e.j,s=e.a,u=e.u,m=e.k,r=e.l,p=e.e,d=e.t,c=e.m,g=e.n,f=e.q,h=e.r,L=e.s,_=e.v,y=e.x,v=e.F,b=e._,x=e.y,w=e.z,j=e.A,k=e.B,D=e.C,z=e.D,C=e.f,E=e.E,S=e.g,I=e.I,B=e.b,M=e.G,N=e.H,R=e.J,G=e.K,H=e.h,J=e.p,K=e.i},e=>{T=e.default},e=>{U=e.default},null],execute:function(){var t=document.createElement("style");t.textContent="ion-col[data-v-aae19835]{min-width:280px}@media (min-width: 768px) and (max-width: 991.98px){ion-col[data-v-aae19835]{min-width:200px}}@media (min-width: 992px){ion-col[data-v-aae19835]{min-width:190px}}.example-content[data-v-e1992471]{display:flex;align-items:center;justify-content:center;height:100%}ion-chip[data-v-e1992471]{--background: #fffff}\n",document.head.appendChild(t);const q=["src"],A=i({__name:"SuitsCardsItem",props:{title:{type:String},subtitle:{type:String},content:{type:String},image:{type:String}},setup(e){const t=e;return(e,i)=>(n(),o(u(f),null,{default:a((()=>[l("img",{alt:"Silhouette of mountains",src:t.image,width:"100%"},null,8,q),s(u(m),null,{default:a((()=>[s(u(r),null,{default:a((()=>[p(d(t.title),1)])),_:1}),s(u(c),null,{default:a((()=>[p(d(t.subtitle),1)])),_:1})])),_:1}),s(u(g),null,{default:a((()=>[p(d(t.content),1)])),_:1})])),_:1}))}}),F=b(i({__name:"SuitsCards",setup(e){const t=h([{id:1,title:"Departamento 1",subtitle:"En Mty",content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",image:"https://picsum.photos/400/200"},{id:2,title:"Departamento 2",subtitle:"En CDMX",content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",image:"https://picsum.photos/400/200"},{id:3,title:"Departamento 3",subtitle:"En Tj",content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",image:"https://picsum.photos/400/200"},{id:4,title:"Departamento 4",subtitle:"En Hermosillo",content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",image:"https://picsum.photos/400/200"},{id:5,title:"Departamento 5",subtitle:"En Guadalajara",content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",image:"https://picsum.photos/400/200"},{id:6,title:"Departamento 6",subtitle:"En Miami",content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",image:"https://picsum.photos/400/200"},{id:7,title:"Departamento 7",subtitle:"En NYC",content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",image:"https://picsum.photos/400/200"}]);return(e,i)=>{const l=L("router-link"),u=L("ion-col"),m=L("ion-row"),r=L("ion-grid");return n(),o(r,null,{default:a((()=>[s(m,null,{default:a((()=>[(n(!0),_(v,null,y(t.value,(e=>(n(),o(u,{key:e.id,size:"12","size-sm":"6","size-md":"4","size-lg":"3"},{default:a((()=>[s(l,{to:"/departments/"+e.id,class:"no-underline"},{default:a((()=>[s(A,{title:e.title,subtitle:e.subtitle,content:e.content,image:e.image},null,8,["title","subtitle","content","image"])])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-aae19835"]]),P=(e=>(J("data-v-e1992471"),e=e(),K(),e))((()=>l("img",{src:"https://i.imgur.com/NJrNK4Z.png",alt:"Turismo de salud. Regresa como nueva."},null,-1)));e("default",b(i({__name:"DepartmentPage",setup(e){const t=h(),i=h(!1),l=e=>{"login"==e?i.value=!0:"register"==e&&(i.value=!1)};return(e,m)=>(n(),o(u(H),null,{default:a((()=>[s(u(C),null,{default:a((()=>[s(u(x),{class:"ion-justify-content-between ion-padding-horizontal ion-align-items-center"},{default:a((()=>[s(u(w),{class:"ion-margin-vertical",style:{height:"auto"}},{default:a((()=>[P])),_:1}),s(u(j),{id:"open-modal",class:"ion-padding flex justify-content-between",style:{height:"auto",width:"7rem",border:"1px solid #dddcd9"}},{default:a((()=>[s(u(k),{icon:u(D),size:"large"},null,8,["icon"]),s(u(k),{icon:u(z),size:"large"},null,8,["icon"])])),_:1})])),_:1})])),_:1}),s(u(S),null,{default:a((()=>[s(u(E),{ref_key:"modal",ref:t,trigger:"open-modal"},{default:a((()=>[s(u(S),null,{default:a((()=>[i.value?G("",!0):(n(),o(u(I),{key:0,class:"ion-padding-end ion-margin-start ion-margin-top"},{default:a((()=>[s(u(B),null,{default:a((()=>[p("¡Bienvenido a RecoverySuits!")])),_:1}),s(u(M),{slot:"end"},{default:a((()=>[s(u(N),{color:"primary",onClick:m[0]||(m[0]=e=>t.value.$el.dismiss())},{default:a((()=>[s(u(k),{icon:u(R),size:"large"},null,8,["icon"])])),_:1})])),_:1})])),_:1})),i.value?G("",!0):(n(),o(T,{key:1,onChange:m[1]||(m[1]=e=>l("login"))})),i.value?(n(),o(U,{key:2,onBackbutton:m[2]||(m[2]=e=>l("register"))})):G("",!0)])),_:1})])),_:1},512),s(F)])),_:1})])),_:1}))}}),[["__scopeId","data-v-e1992471"]]))}}}));
