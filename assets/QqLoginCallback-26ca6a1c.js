import{a as t,u as n,b as s,f as c,h as u}from"./index-28ee92df.js";const k={__name:"QqLoginCallback",setup(i){const{proxy:o}=t(),l=n();s();const r={logincallback:"/qqlogin/callback"};return(async()=>{let a=await o.Request({url:r.logincallback,params:l.currentRoute.value.query,errorCallback:()=>{l.push("/")}});if(!a)return;let e=a.data.callbackUrl||"/";e=="/login"&&(e="/"),o.VueCookies.set("userInfo",a.data.userInfo,0),console.log("路径",e),l.push(e)})(),(a,e)=>(c(),u("div",null,"登录中，请勿刷新页面"))}};export{k as default};