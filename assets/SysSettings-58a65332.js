import{_ as v,a as y,u as b,b as V,r as d,e as u,f as x,h as E,j as s,w as a,q as C,m as _}from"./index-28ee92df.js";const U={class:"sys-setting-panel"},q={__name:"SysSettings",setup(w){const{proxy:n}=y();b(),V();const m={getSysSettings:"/admin/getSysSettings",saveSettings:"/admin/saveSysSettings"},t=d({}),p=d(),c={registerEmailTitle:[{required:!0,message:"请输入注册邮件验证码邮件标题"}],registerEmailContent:[{required:!0,message:"请输入注册邮件验证码邮件内容"}],userInitUseSpace:[{required:!0,message:"请输入初始化空间大小"},{validator:n.Verify.number,message:"空间大小只能是数字"}]};(async()=>{let l=await n.Request({url:m.getSysSettings});l&&(t.value=l.data)})();const g=async()=>{p.value.validate(async l=>{if(!l)return;let e=Object.assign({},t.value);await n.Request({url:m.saveSettings,params:e})&&n.Message.success("保存成功")})};return(l,e)=>{const o=u("el-input"),i=u("el-form-item"),f=u("el-button"),S=u("el-form");return x(),E("div",U,[s(S,{model:t.value,rules:c,ref_key:"formDataRef",ref:p,"label-width":"150px",onSubmit:e[3]||(e[3]=C(()=>{},["prevent"]))},{default:a(()=>[s(i,{label:"注册邮件标题",prop:"registerEmailTitle"},{default:a(()=>[s(o,{clearable:"",placeholder:"请输入注册邮件验证码邮件标题",modelValue:t.value.registerEmailTitle,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value.registerEmailTitle=r)},null,8,["modelValue"])]),_:1}),s(i,{label:"注册邮件标题",prop:"registerEmailContent"},{default:a(()=>[s(o,{clearable:"",placeholder:"请输入注册邮件验证码邮件内容%s占位符为验证码内容",modelValue:t.value.registerEmailContent,"onUpdate:modelValue":e[1]||(e[1]=r=>t.value.registerEmailContent=r)},null,8,["modelValue"])]),_:1}),s(i,{label:"初始空间大小",prop:"userInitUseSpace"},{default:a(()=>[s(o,{clearable:"",placeholder:"初始空间大小",modelValue:t.value.userInitUseSpace,"onUpdate:modelValue":e[2]||(e[2]=r=>t.value.userInitUseSpace=r)},{suffix:a(()=>[_("MB")]),_:1},8,["modelValue"])]),_:1}),s(i,{label:"",prop:""},{default:a(()=>[s(f,{type:"primary",onClick:g},{default:a(()=>[_("保存")]),_:1})]),_:1})]),_:1},8,["model"])])}}},T=v(q,[["__scopeId","data-v-47267eef"]]);export{T as default};