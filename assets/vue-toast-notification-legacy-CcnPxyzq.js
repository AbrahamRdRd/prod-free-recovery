System.register(["./crypto-js-legacy-DI2495am.js","./vue-legacy-CAYYIPah.js"],(function(t,e){"use strict";var s;return{setters:[t=>{t.c},t=>{s=t.r}],execute:function(){var e={exports:{}};!function(t,e){var o;o=t=>(()=>{var e={772:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const s=t.__vccOpts||t;for(const[o,i]of e)s[o]=i;return s}},976:e=>{e.exports=t}},s={};function o(t){var i=s[t];if(void 0!==i)return i.exports;var n=s[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{ToastComponent:()=>d,ToastPlugin:()=>h,ToastPositions:()=>a,default:()=>v,useToast:()=>m});var t=o(976);const e=(0,t.createElementVNode)("div",{class:"v-toast__icon"},null,-1),s=["innerHTML"];function n(t){var e;void 0!==t.remove?t.remove():null===(e=t.parentNode)||void 0===e||e.removeChild(t)}class r{constructor(t,e){this.startedAt=Date.now(),this.callback=t,this.delay=e,this.timer=setTimeout(t,e)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const a=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});var l;const c={all:l=l||new Map,on:function(t,e){var s=l.get(t);s?s.push(e):l.set(t,[e])},off:function(t,e){var s=l.get(t);s&&(e?s.splice(s.indexOf(e)>>>0,1):l.set(t,[]))},emit:function(t,e){var s=l.get(t);s&&s.slice().map((function(t){t(e)})),(s=l.get("*"))&&s.slice().map((function(s){s(t,e)}))}},u=(0,t.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:a.BOTTOM_RIGHT,validator:t=>Object.values(a).includes(t)},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data:()=>({isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}),beforeMount(){this.setupContainer()},mounted(){this.showNotice(),c.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const t=document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom)},shouldQueue(){return!!this.queue&&(this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout((()=>{this.onDismiss.apply(null,arguments);const e=this.$refs.root;(0,t.render)(null,e),n(e)}),150)},showNotice(){if(this.shouldQueue())return void(this.queueTimer=setTimeout(this.showNotice,250));const t=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),n(t),this.isActive=!0,this.duration&&(this.timer=new r(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(t){this.pauseOnHover&&this.timer&&(t?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case a.TOP:case a.TOP_RIGHT:case a.TOP_LEFT:return this.parentTop;case a.BOTTOM:case a.BOTTOM_RIGHT:case a.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case a.TOP:case a.TOP_RIGHT:case a.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case a.BOTTOM:case a.BOTTOM_RIGHT:case a.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){c.off("toast-clear",this.dismiss)}}),p=(0,o(772).default)(u,[["render",function(o,i,n,r,a,l){return(0,t.openBlock)(),(0,t.createBlock)(t.Transition,{"enter-active-class":o.transition.enter,"leave-active-class":o.transition.leave},{default:(0,t.withCtx)((()=>[(0,t.withDirectives)((0,t.createElementVNode)("div",{ref:"root",role:"alert",class:(0,t.normalizeClass)(["v-toast__item",[`v-toast__item--${o.type}`,`v-toast__item--${o.position}`]]),onMouseover:i[0]||(i[0]=t=>o.toggleTimer(!0)),onMouseleave:i[1]||(i[1]=t=>o.toggleTimer(!1)),onClick:i[2]||(i[2]=function(){return o.whenClicked&&o.whenClicked(...arguments)})},[e,(0,t.createElementVNode)("p",{class:"v-toast__text",innerHTML:o.message},null,8,s)],34),[[t.vShow,o.isActive]])])),_:1},8,["enter-active-class","leave-active-class"])}]]),d=p,m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{open(s){let o=null;"string"==typeof s&&(o=s);const i={message:o},n=Object.assign({},i,e,s),r=function(e,s,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n=(0,t.h)(e,s,i),r=document.createElement("div");return r.classList.add("v-toast--pending"),o.appendChild(r),(0,t.render)(n,r),n.component}(d,n,document.body);return{dismiss:r.ctx.dismiss}},clear(){c.emit("toast-clear")},success(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"success"},e))},error(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"error"},e))},info(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"info"},e))},warning(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"warning"},e))},default(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"default"},e))}}},h={install:function(t){let e=m(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});t.config.globalProperties.$toast=e,t.provide("$toast",e)}},v=h})(),i})(),t.exports=o(s)}(e),t("d",e.exports)}}}));