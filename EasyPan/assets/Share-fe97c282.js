import{_ as j,D as q,a as z,u as F,b as P,r as p,e as f,f as o,h as r,i as s,j as k,w as v,m as b,k as m,F as g,l as u,t as x,s as H,v as U}from"./index-c2f02e87.js";const A=i=>(H("data-v-8dfc0301"),i=i(),U(),i),G={class:"top"},J=A(()=>s("span",{class:"iconfont icon-cancel"},null,-1)),K={class:"file-list"},Q=["onMouseenter","onMouseleave"],W=["title"],X={class:"op"},Y=["onClick"],Z=["onClick"],ee={__name:"Share",setup(i){const{toClipboard:C}=q(),{proxy:l}=z();F(),P();const y={loadDataList:"/share/loadShareList",cancelShare:"/share/cancelShare"},I=p(document.location.origin+"/share/"),N=[{label:"文件名",prop:"fileName",scopedSlots:"fileName"},{label:"分享时间",prop:"shareTime",width:200},{label:"失效时间",prop:"expireTime",scopedSlots:"expireTime",width:200},{label:"浏览次数",prop:"showCount",width:200}],c=p({}),D={extHeight:20,selectType:"checkbox"},S=async()=>{let a={pageNo:c.value.pageNo,pageSize:c.value.pageSize};a.category!=="all"&&delete a.filePid;let t=await l.Request({url:y.loadDataList,params:a});t&&(c.value=t.data)},O=a=>{c.value.list.forEach(t=>{t.showOp=!1}),a.showOp=!0},$=a=>{a.showOp=!1},L=async a=>{await C(`链接:${I.value}${a.shareId} 提取码: ${a.code}`),l.Message.success("复制成功")},n=p([]),M=a=>{n.value=[],a.forEach(t=>{n.value.push(t.shareId)})},d=p([]),R=()=>{n.value.length!=0&&(d.value=n.value,T())},B=a=>{d.value=[a.shareId],T()},T=async()=>{l.Confirm("你确定要取消分享吗？",async()=>{await l.Request({url:y.cancelShare,params:{shareIds:d.value.join(",")}})&&(l.Message.success("取消分享成功"),S())})};return(a,t)=>{const w=f("el-button"),h=f("icon"),V=f("Table");return o(),r("div",null,[s("div",G,[k(w,{type:"primary",disabled:n.value.length==0,onClick:R},{default:v(()=>[J,b("取消分享 ")]),_:1},8,["disabled"])]),s("div",K,[k(V,{columns:N,showPagination:!0,dataSource:c.value,fetch:S,options:D,onRowSelected:M},{fileName:v(({index:E,row:e})=>[s("div",{class:"file-item",onMouseenter:_=>O(e),onMouseleave:_=>$(e)},[(e.fileType==3||e.fileType==1)&&e.status!==0?(o(),m(h,{key:0,cover:e.fileCover},null,8,["cover"])):(o(),r(g,{key:1},[e.folderType==0?(o(),m(h,{key:0,fileType:e.fileType},null,8,["fileType"])):u("",!0),e.folderType==1?(o(),m(h,{key:1,fileType:0})):u("",!0)],64)),e.showRename?u("",!0):(o(),r("span",{key:2,class:"file-name",title:e.fileName},[s("span",null,x(e.fileName),1)],8,W)),s("span",X,[e.showOp&&e.fileId?(o(),r(g,{key:0},[s("span",{class:"iconfont icon-link",onClick:_=>L(e)},"复制链接",8,Y),s("span",{class:"iconfont icon-cancel",onClick:_=>B(e)},"取消分享",8,Z)],64)):u("",!0)])],40,Q)]),expireTime:v(({index:E,row:e})=>[b(x(e.validType==3?"永久":e.expireTime),1)]),_:1},8,["dataSource"])])])}}},se=j(ee,[["__scopeId","data-v-8dfc0301"]]);export{se as default};
