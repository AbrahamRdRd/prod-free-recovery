System.register(["./axios-legacy-CUPSUh8R.js","./index-legacy-CTO43FBS.js","./vue-toast-notification-legacy--LaN0e6j.js","./pinia-legacy-DXNVVc9U.js"],(function(e,s){"use strict";var r,t,o,a;return{setters:[e=>{r=e.a},e=>{t=e.u},e=>{o=e.d},e=>{a=e.d}],execute:function(){const s=a("loading",{state:()=>({active:!1,msg:""}),actions:{setLoading(e){this.active=!0,this.msg=e},clearLoading(){this.active=!1,this.msg=""}}}),i=e("h",r.create({baseURL:"api.recovery-suites.com",timeout:5e4,headers:{Accept:"application/json"}}));i.interceptors.request.use((async e=>{const s=t();return s.isLogged&&(e.headers.Authorization=`Bearer ${s.token}`),e})),i.interceptors.response.use((e=>(s().clearLoading(),e)),(e=>{const r=t(),a=o.useToast();return s().clearLoading(),401!==e.response.status&&419!==e.response.status||(r.logout(),a.error("Te invitamos a loguearte")),422===e.response.status&&a.error(e.response.data.message),403===e.response.status&&a.error("El usuario no tiene permisos para acceder al recurso, contacte a un administrador."),404===e.response.status&&a.error("El recurso solicitado no existe"),500===e.response.status&&a.error("Error de conexion al servidor."),Promise.reject(e)}))}}}));
