import{_ as H,a as G,r as d,e as f,f as a,h as n,i as s,j as _,w as m,p as z,m as R,k as C,F as L,l as i,t as S,y as J,A as Q,s as W,v as X}from"./index-c2f02e87.js";const Y=y=>(W("data-v-86a7c3ad"),y=y(),X(),y),Z={class:"top"},ee={class:"top-op"},te={class:"search-panel"},le=Y(()=>s("span",{class:"iconfont icon-del"},null,-1)),se={class:"file-list"},ae=["onMouseenter","onMouseleave"],oe=["title"],ne=["onClick"],ie={key:0,class:"transfer-status"},ce={key:1,class:"transfer-status transfer-fail"},de={key:3,class:"edit-panel"},ue=["onClick"],re=["onClick"],pe={class:"op"},fe=["onClick"],_e=["onClick"],ve={key:0},he={__name:"FileList",setup(y){const{proxy:c}=G(),v={loadDataList:"/admin/loadFileList",delFile:"/admin/delFile",createDownloadUrl:"/admin/createDownloadUrl",download:"/api/admin/download"},V=[{label:"文件名",prop:"fileName",scopedSlots:"fileName"},{label:"发布人",prop:"nickName",width:250},{label:"修改时间",prop:"lastUpdateTime",width:200},{label:"大小",prop:"fileSize",scopedSlots:"fileSize",width:200}],F=()=>{g.value=!0,r()},h=d({}),x={extHeight:50,selectType:"checkbox"},u=d([]),U=t=>{u.value=[],t.forEach(l=>{u.value.push(l.userId+"_"+l.fileId)}),console.log(u)},k=d(),g=d(!0),r=async()=>{let t={pageNo:h.value.pageNo,pageSize:h.value.pageSize,fileNameFuzzy:k.value,filePid:T.value.fileId},l=await c.Request({url:v.loadDataList,showLoading:g,params:t});l&&(h.value=l.data)},$=t=>{h.value.list.forEach(l=>{l.showOp=!1}),t.showOp=!0},D=t=>{t.showOp=!1},I=d(),w=d(),E=t=>{if(t.folderType==1){w.value.openFolder(t);return}if(t.status!=2){c.Message.warning("文件正在转码中，无法预览");return}I.value.showPreview(t,1)},T=d({fileId:0}),O=t=>{const{curFolder:l}=t;T.value=l,g.value=!0,r()},M=t=>{c.Confirm(`你确定要删除【${t.fileName}】吗？删除的文件可在10天内通过回收站还原`,async()=>{await c.Request({url:v.delFile,params:{fileIdAndUserIds:t.userId+"_"+t.fileId}})&&r()})},B=()=>{u.value.length!=0&&c.Confirm("你确定要删除这些文件吗？删除的文件可在10天内通过回收站还原",async()=>{await c.Request({url:v.delFile,params:{fileIdAndUserIds:u.value.join(",")}})&&r()})},K=async t=>{let l=await c.Request({url:v.createDownloadUrl+"/"+t.userId+"/"+t.fileId});l&&(window.location.href=v.download+"/"+l.data)};return(t,l)=>{const b=f("el-input"),P=f("el-button"),q=f("Navigation"),N=f("icon"),A=f("Table"),j=f("Preview");return a(),n("div",null,[s("div",Z,[s("div",ee,[s("div",te,[_(b,{clearable:"",placeholder:"输入文件名搜索",modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=p=>k.value=p),onKeyup:z(F,["enter"])},{suffix:m(()=>[s("i",{class:"iconfont icon-search",onClick:F})]),_:1},8,["modelValue","onKeyup"])]),s("div",{class:"iconfont icon-refresh",onClick:r}),_(P,{style:{"margin-left":"10px"},type:"danger",disabled:u.value.length==0,onClick:B},{default:m(()=>[le,R(" 批量删除 ")]),_:1},8,["disabled"])]),_(q,{ref_key:"navigationRef",ref:w,onNavChange:O,adminShow:!0},null,512)]),s("div",se,[_(A,{columns:V,showPagination:!0,dataSource:h.value,fetch:r,initFetch:!1,options:x,onRowSelected:U},{fileName:m(({index:p,row:e})=>[s("div",{class:"file-item",onMouseenter:o=>$(e),onMouseleave:o=>D(e)},[(e.fileType==3||e.fileType==1)&&e.status==2?(a(),C(N,{key:0,cover:e.fileCover,width:32},null,8,["cover"])):(a(),n(L,{key:1},[e.folderType==0?(a(),C(N,{key:0,fileType:e.fileType},null,8,["fileType"])):i("",!0),e.folderType==1?(a(),C(N,{key:1,fileType:0})):i("",!0)],64)),e.showEdit?i("",!0):(a(),n("span",{key:2,class:"file-name",title:e.fileName},[s("span",{onClick:o=>E(e)},S(e.fileName),9,ne),e.status==0?(a(),n("span",ie,"转码中")):i("",!0),e.status==1?(a(),n("span",ce,"转码失败")):i("",!0)],8,oe)),e.showEdit?(a(),n("div",de,[_(b,{modelValue:e.fileNameReal,"onUpdate:modelValue":o=>e.fileNameReal=o,modelModifiers:{trim:!0},maxLength:190,onKeyup:z(o=>t.saveNameEdit(p),["enter"])},{suffix:m(()=>[R(S(e.fileSuffix),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onKeyup"]),s("span",{class:J(["iconfont icon-right1",e.fileNameReal?"":"not-allow"]),onClick:o=>t.saveNameEdit(p)},null,10,ue),s("span",{class:"iconfont icon-error",onClick:o=>t.cancelNameEdit(p)},null,8,re)])):i("",!0),s("span",pe,[e.showOp&&e.fileId?(a(),n(L,{key:0},[e.folderType==0?(a(),n("span",{key:0,class:"iconfont icon-download",onClick:o=>K(e)},"下载",8,fe)):i("",!0),s("span",{class:"iconfont icon-del",onClick:o=>M(e)},"删除",8,_e)],64)):i("",!0)])],40,ae)]),fileSize:m(({index:p,row:e})=>[e.fileSize?(a(),n("span",ve,S(Q(c).Utils.size2Str(e.fileSize)),1)):i("",!0)]),_:1},8,["dataSource"])]),_(j,{ref_key:"previewRef",ref:I},null,512)])}}},ye=H(he,[["__scopeId","data-v-86a7c3ad"]]);export{ye as default};
