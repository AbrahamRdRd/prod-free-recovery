import{a as i}from"./axios-CwoVb0Lo.js";import{u as a}from"./index-m1nEGGOe.js";import{d as n}from"./vue-toast-notification-BuDNWbXa.js";import{d as c}from"./pinia-FlwmMssk.js";const o=c("loading",{state:()=>({active:!1,msg:""}),actions:{setLoading(e){this.active=!0,this.msg=e},clearLoading(){this.active=!1,this.msg=""}}}),r=i.create({baseURL:"api.recovery-suites.com",timeout:5e4,headers:{Accept:"application/json"}});r.interceptors.request.use(async e=>{const s=a();return s.isLogged&&(e.headers.Authorization="Bearer ".concat(s.token)),e});r.interceptors.response.use(e=>(o().clearLoading(),e),e=>{const s=a(),t=n.useToast();return o().clearLoading(),(e.response.status===401||e.response.status===419)&&(s.logout(),t.error("Te invitamos a loguearte")),e.response.status===422&&t.error(e.response.data.message),e.response.status===403&&t.error("El usuario no tiene permisos para acceder al recurso, contacte a un administrador."),e.response.status===404&&t.error("El recurso solicitado no existe"),e.response.status===500&&t.error("Error de conexion al servidor."),Promise.reject(e)});export{r as h};
