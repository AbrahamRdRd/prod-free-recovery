System.register(["./index-legacy-C05rGFRK.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js"],(function(e,t){"use strict";var a,i,n,l,r,u,o,s,d,c,m,p,g,f,v,h,_,b,y,x,w,k,j,E,G,C,S,T,P,J,N,z,M,R,D,I,L,O,B,F,H,K;return{setters:[e=>{a=e.d,i=e.o,n=e.b,l=e.w,r=e.m,u=e.g,o=e.e,s=e.B,d=e.t,c=e.C,m=e.D,p=e.E,g=e.F,f=e.n,v=e.r,h=e.G,_=e.c,b=e.H,y=e.J,x=e.K,w=e.L,k=e.M,j=e.u,E=e.a,G=e.N,C=e.f,S=e.O,T=e.P,P=e.Q,J=e.R,N=e.S,z=e.T,M=e.U,R=e.V,D=e.v,I=e.W,L=e.X,O=e.k,B=e.l,F=e.x,H=e.y},e=>{K=e._}],execute:function(){var t=document.createElement("style");t.textContent="ion-col[data-v-76e0e68b]{min-width:280px}@media (min-width: 768px) and (max-width: 991.98px){ion-col[data-v-76e0e68b]{min-width:200px}}@media (min-width: 992px){ion-col[data-v-76e0e68b]{min-width:190px}}.example-content[data-v-959ef96e]{display:flex;align-items:center;justify-content:center;height:100%}ion-chip[data-v-959ef96e]{--background: #fffff}.avatar-info[data-v-959ef96e]{height:35px;width:35px}\n",document.head.appendChild(t);const U={class:"overflow-hidden"},X=["src"],Y=a({__name:"SuitsCardsItem",props:{title:{type:String},subtitle:{type:String},content:{type:String},image:{type:String}},setup(e){const t=e;return(e,a)=>(i(),n(o(f),null,{default:l((()=>[r("div",U,[r("img",{alt:"Silhouette of mountains",class:"bg-contain bg-center bg-no-repeat bg-primary border-round h-20rem sm:h-15rem w-full",src:t.image},null,8,X)]),u(o(p),null,{default:l((()=>[u(o(s),null,{default:l((()=>[d(c(t.title),1)])),_:1}),u(o(m),null,{default:l((()=>[d(c(t.subtitle),1)])),_:1})])),_:1}),u(o(g),null,{default:l((()=>[d(c(t.content),1)])),_:1})])),_:1}))}}),A=K(a({__name:"SuitsCards",setup(e){const t=v([{id:1,title:"Edificio Chepevera",subtitle:"Calle Gral. Rosendo Ocañas no. 770. Monterrey, N.L.",content:"El mejor lugar para tu recupreación",image:"https://i.imgur.com/loNP8UB.png",redirect:"/departments/1"},{id:2,title:"Próximamente",subtitle:"En CDMX",content:"El mejor lugar para tu recupreación",image:"https://i.imgur.com/iTGwhGJ.png",redirect:"/departments"},{id:3,title:"Próximamente",subtitle:"En Tijuana, B.C.",content:"El mejor lugar para tu recupreación",image:"https://i.imgur.com/iTGwhGJ.png",redirect:"/departments"},{id:4,title:"Próximamente",subtitle:"En Hermosillo, Sonora",content:"El mejor lugar para tu recupreación",image:"https://i.imgur.com/iTGwhGJ.png",redirect:"/departments"},{id:5,title:"Próximamente",subtitle:"En Guadalajara, aAlisco",content:"El mejor lugar para tu recupreación",image:"https://i.imgur.com/iTGwhGJ.png",redirect:"/departments"},{id:6,title:"Próximamente",subtitle:"En Miami, Florida",content:"El mejor lugar para tu recupreación",image:"https://i.imgur.com/iTGwhGJ.png",redirect:"/departments"},{id:7,title:"Próximamente",subtitle:"En Nueva York, NY",content:"El mejor lugar para tu recupreación",image:"https://i.imgur.com/iTGwhGJ.png",redirect:"/departments"}]);return(e,a)=>{const r=h("router-link");return i(),n(o(k),null,{default:l((()=>[u(o(w),{class:"flex sm:justify-content-center xl:justify-content-start"},{default:l((()=>[(i(!0),_(x,null,b(t.value,(e=>(i(),n(o(y),{key:e.id,"size-sm":"10","size-md":"6","size-lg":"4","size-xl":"3"},{default:l((()=>[u(r,{to:e.redirect,class:"no-underline"},{default:l((()=>[u(Y,{title:e.title,subtitle:e.subtitle,content:e.content,image:e.image},null,8,["title","subtitle","content","image"])])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-76e0e68b"]]),Q=e=>(F("data-v-959ef96e"),e=e(),H(),e),V=Q((()=>r("img",{src:"https://i.imgur.com/NJrNK4Z.png",alt:"Turismo de salud. Regresa como nueva."},null,-1))),W=Q((()=>r("div",{class:"block md:hidden"},null,-1))),Z={class:"hidden md:block"},$=["src"];e("default",K(a({__name:"DepartmentPage",setup(e){const t=j(),a=v(),s=C(),c=E((()=>t.isLogged)),m=E((()=>t.userInfo)),p=v(),g=c.value,f=S(),h=v();a.value=!g;const _=()=>{t.logout(),s.navigate("/departments","forward","replace")},b=async e=>new Promise((t=>{setTimeout((()=>t(`Datos cargados para la ruta: ${e}`)),1e3)}));return G(c,(e=>{a.value=e,e?(a.value=!1,s.replace("/departments")):(a.value=!0,s.replace("/departments"))})),G((()=>f.path),(e=>{(async e=>{try{h.value=await b(e)}catch(t){console.error("Error al cargar datos para la ruta:",t)}})(e)}),{immediate:!0}),G((()=>m.value),(e=>{if(0==Object.keys(m.value).length)p.value="";else{const e=JSON.parse(m.value);p.value=e.avatar}}),{immediate:!0}),(e,t)=>(i(),n(o(B),null,{default:l((()=>[u(o(O),null,{default:l((()=>[u(o(w),{class:"ion-justify-content-between ion-padding-horizontal ion-align-items-center"},{default:l((()=>[u(o(T),{class:"ion-margin-vertical",style:{height:"auto"}},{default:l((()=>[V])),_:1}),W,r("div",Z,[u(o(P),{id:"popover-button",class:"ion-padding flex justify-content-between",style:{height:"auto",width:"7rem",border:"1px solid #dddcd9"}},{default:l((()=>[""==p.value?(i(),n(o(J),{key:0,icon:o(N),size:"large"},null,8,["icon"])):""!==p.value?(i(),n(o(T),{key:1,class:"avatar-info"},{default:l((()=>[r("img",{src:p.value,alt:"Turismo de salud. Regresa como nueva."},null,8,$)])),_:1})):z("",!0),u(o(J),{icon:o(M),size:"large"},null,8,["icon"])])),_:1})]),u(o(R),{trigger:"popover-button","dismiss-on-select":!0},{default:l((()=>[u(o(D),null,{default:l((()=>[u(o(I),null,{default:l((()=>[a.value?(i(),n(o(L),{key:0,id:"open-modal",button:!0,detail:!1,onClick:t[0]||(t[0]=()=>o(s).navigate("/login"))},{default:l((()=>[d("Login")])),_:1})):z("",!0),a.value?(i(),n(o(L),{key:1,button:!0,detail:!1,onClick:t[1]||(t[1]=()=>o(s).navigate("/registro"))},{default:l((()=>[d("Register")])),_:1})):z("",!0),a.value?z("",!0):(i(),n(o(L),{key:2,button:!0,detail:!1,onClick:t[2]||(t[2]=()=>o(s).navigate("/perfil"))},{default:l((()=>[d("Mi perfil")])),_:1})),a.value?z("",!0):(i(),n(o(L),{key:3,button:!0,detail:!1,onClick:_},{default:l((()=>[d("Cerrar sesión")])),_:1}))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),u(o(D),null,{default:l((()=>[u(A)])),_:1})])),_:1}))}}),[["__scopeId","data-v-959ef96e"]]))}}}));