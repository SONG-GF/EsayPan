import{D as ge,a as oe,r as n,e as r,f as u,h as p,j as t,w as o,q as se,m as v,t as I,F as B,k as O,l as w,n as X,_ as we,u as ke,b as be,E as Fe,i,p as ae,y as Ce,A as Ne,s as Ie,v as xe}from"./index-28ee92df.js";const Te={all:{accept:"*"},video:{accept:".mp4,.avi,.rmvb,.mkv,.mov"},music:{accept:".mp3,.wav,.wma,.mp2,.flac,.midi,.ra,.ape,.aac,.cda"},image:{accept:".jpeg,.jpg,.png,.gif,.bmp,.dds,.psd,.pdt,.webp,.xmp,.svg,.tiff"},doc:{accept:".pdf,.doc,.docx,.xls,.xlsx,.txt"},others:{accept:"*"}},Re={__name:"ShareFile",setup(D,{expose:K}){const{toClipboard:A}=ge(),{proxy:d}=oe(),$=n(document.location.origin+"/share/"),Y={shareFile:"/share/shareFile"},b=n(0),c=n({}),T=n(),H={validType:[{required:!0,message:"请选择有效期"}],codeType:[{required:!0,message:"请选择提取码类型"}],code:[{required:!0,message:"请输入提取码"},{validator:d.Verify.shareCode,message:"提取码只能是数字字母"},{min:5,message:"提取码最少5位"}]},R=n(!0),s=n({show:!1,title:"分享",buttons:[{type:"primary",text:"确定",click:_=>{E()}}]}),F=n({}),E=async()=>{if(Object.keys(F.value).length>0){s.value.show=!1;return}T.value.validate(async _=>{if(!_)return;let f={};Object.assign(f,c.value);let y=await d.Request({url:Y.shareFile,params:f});y&&(b.value=1,F.value=y.data,s.value.buttons[0].text="关闭",R.value=!1)})};K({show:_=>{R.value=!0,s.value.show=!0,b.value=0,F.value={},X(()=>{T.value.resetFields(),c.value=Object.assign({},_)})}});const C=async()=>{await A(`链接:${$.value}${F.value.shareId} 提取码: ${F.value.code}`),d.Message.success("复制成功")};return(_,f)=>{const y=r("el-form-item"),h=r("el-radio"),S=r("el-radio-group"),P=r("el-input"),G=r("el-button"),U=r("el-form"),J=r("Dialog");return u(),p("div",null,[t(J,{show:s.value.show,title:s.value.title,buttons:s.value.buttons,width:"600px",showCancel:R.value,onClose:f[4]||(f[4]=m=>s.value.show=!1)},{default:o(()=>[t(U,{model:c.value,rules:H,ref_key:"formDataRef",ref:T,"label-width":"100px",onSubmit:f[3]||(f[3]=se(()=>{},["prevent"]))},{default:o(()=>[t(y,{label:"文件"},{default:o(()=>[v(I(c.value.fileName),1)]),_:1}),b.value==0?(u(),p(B,{key:0},[t(y,{label:"有效期",prop:"validType"},{default:o(()=>[t(S,{modelValue:c.value.validType,"onUpdate:modelValue":f[0]||(f[0]=m=>c.value.validType=m)},{default:o(()=>[t(h,{label:0},{default:o(()=>[v("1天")]),_:1}),t(h,{label:1},{default:o(()=>[v("7天")]),_:1}),t(h,{label:2},{default:o(()=>[v("30天")]),_:1}),t(h,{label:3},{default:o(()=>[v("永久有效")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(y,{label:"提取码",prop:"codeType"},{default:o(()=>[t(S,{modelValue:c.value.codeType,"onUpdate:modelValue":f[1]||(f[1]=m=>c.value.codeType=m)},{default:o(()=>[t(h,{label:0},{default:o(()=>[v("自定义")]),_:1}),t(h,{label:1},{default:o(()=>[v("系统生成")]),_:1})]),_:1},8,["modelValue"])]),_:1}),c.value.codeType==0?(u(),O(y,{key:0,prop:"code"},{default:o(()=>[t(P,{clearable:"",placeholder:"请输入5位提取码",modelValue:c.value.code,"onUpdate:modelValue":f[2]||(f[2]=m=>c.value.code=m),modelModifiers:{trim:!0},maxLength:"5",style:{width:"130px"}},null,8,["modelValue"])]),_:1})):w("",!0)],64)):(u(),p(B,{key:1},[t(y,{label:"分享连接"},{default:o(()=>[v(I($.value)+I(F.value.shareId),1)]),_:1}),t(y,{label:"提取码"},{default:o(()=>[v(I(F.value.code),1)]),_:1}),t(y,null,{default:o(()=>[t(G,{type:"primary",onClick:C},{default:o(()=>[v("复制链接及提取码")]),_:1})]),_:1})],64))]),_:1},8,["model"])]),_:1},8,["show","title","buttons","showCancel"])])}}};const x=D=>(Ie("data-v-1a1d1f66"),D=D(),xe(),D),Se={class:"top"},Ve={class:"top-op"},De={class:"btn"},$e=x(()=>i("span",{class:"iconfont icon-upload"},null,-1)),Ee=x(()=>i("span",{class:"iconfont icon-folder-add"},null,-1)),Me=x(()=>i("span",{class:"iconfont icon-del"},null,-1)),qe=x(()=>i("span",{class:"iconfont icon-move"},null,-1)),ze={class:"search-panel"},Oe={key:0,class:"file-list"},Pe=["onMouseenter","onMouseleave"],Ue=["title"],Le=["onClick"],je={key:0,class:"transfer-status"},Be={key:1,class:"transfer-status transfer-fail"},Ke={key:3,class:"edit-panel"},Ae=["onClick"],He=["onClick"],Ge={class:"op"},Je=["onClick"],Qe=["onClick"],We=["onClick"],Xe=["onClick"],Ye=["onClick"],Ze={key:0},el={key:1,class:"no-data"},ll={class:"no-data-inner"},tl=x(()=>i("div",{class:"tips"},"当前目录为空，上传你的第一个文件吧",-1)),al={class:"op-list"},ol={class:"op-item"},sl=x(()=>i("div",null,"上传文件",-1)),il=x(()=>i("div",null,"新建目录",-1)),nl={__name:"Main",emits:["addFile"],setup(D,{expose:K,emit:A}){const{proxy:d}=oe();ke(),be();const $=async e=>{A("addFile",{file:e.file,filePid:b.value.fileId})};K({reload:()=>{M.value=!1,_()}});const b=n({fileId:0}),c={loadDataList:"/file/loadDataList",rename:"/file/rename",newFoloder:"/file/newFoloder",getFolderInfo:"/file/getFolderInfo",delFile:"/file/delFile",changeFileFolder:"/file/changeFileFolder",createDownloadUrl:"/file/createDownloadUrl",download:"/api/file/download"},T=Fe(()=>{const e=Te[C.value];return e?e.accept:"*"}),H=[{label:"文件名",prop:"fileName",scopedSlots:"fileName"},{label:"修改时间",prop:"lastUpdateTime",width:200},{label:"大小",prop:"fileSize",scopedSlots:"fileSize",width:200}],R=()=>{M.value=!0,_()},s=n({}),F={extHeight:50,selectType:"checkbox"},E=n(),M=n(!0),C=n(),_=async()=>{let e={pageNo:s.value.pageNo,pageSize:s.value.pageSize,fileNameFuzzy:E.value,category:C.value,filePid:b.value.fileId};e.category!=="all"&&delete e.filePid;let l=await d.Request({url:c.loadDataList,showLoading:M,params:e});l&&(s.value=l.data,h.value=!1)},f=e=>{s.value.list.forEach(l=>{l.showOp=!1}),e.showOp=!0},y=e=>{e.showOp=!1},h=n(!1),S=n(),P=()=>{h.value||(s.value.list.forEach(e=>{e.showEdit=!1}),h.value=!0,s.value.list.unshift({showEdit:!0,fileType:0,fileId:"",filePid:b.value.fileId}),X(()=>{S.value.focus()}))},G=e=>{const l=s.value.list[e];l.fileId?l.showEdit=!1:s.value.list.splice(e,1),h.value=!1},U=async e=>{const{fileId:l,filePid:k,fileNameReal:V}=s.value.list[e];if(V==""||V.indexOf("/")!=-1){d.Message.warning("文件名不能为空且不能含有斜杠");return}let z=c.rename;l==""&&(z=c.newFoloder);let j=await d.Request({url:z,params:{fileId:l,filePid:k,fileName:V}});j&&(s.value.list[e]=j.data,h.value=!1)},J=e=>{s.value.list[0].fileId==""&&(s.value.list.splice(0,1),e=e-1),s.value.list.forEach(k=>{k.showEdit=!1});let l=s.value.list[e];l.showEdit=!0,l.folderType==0?(l.fileNameReal=l.fileName.substring(0,l.fileName.indexOf(".")),l.fileSuffix=l.fileName.substring(l.fileName.indexOf("."))):(l.fileNameReal=l.fileName,l.fileSuffix=""),h.value=!0,X(()=>{S.value.focus()})},m=n([]),Z=n([]),ie=e=>{Z.value=e,m.value=[],e.forEach(l=>{m.value.push(l.fileId)})},ne=e=>{d.Confirm(`你确定要删除【${e.fileName}】吗？删除的文件可在10天内通过回收站还原`,async()=>{await d.Request({url:c.delFile,params:{fileIds:e.fileId}})&&_()})},ce=()=>{m.value.length!=0&&d.Confirm("你确定要删除这些文件吗？删除的文件可在10天内通过回收站还原",async()=>{await d.Request({url:c.delFile,params:{fileIds:m.value.join(",")}})&&_()})},L=n(),q=n({}),ue=e=>{q.value=e,L.value.showFolderDialog(e.fileId)},de=()=>{q.value={};const e=[b.value.fileId];Z.value.forEach(l=>{l.folderType==1&&e.push(l.fileId)}),L.value.showFolderDialog(e.join(","))},re=async e=>{if(q.value.filePid===e||b.value.fileId==e){d.Message.warning("文件正在当前目录，无需移动");return}let l=[];q.value.fileId?l.push(q.value.fileId):l=l.concat(m.value),await d.Request({url:c.changeFileFolder,params:{fileIds:l.join(","),filePid:e}})&&(L.value.close(),_())},ee=n(),le=n(),fe=e=>{if(e.folderType==1){le.value.openFolder(e);return}if(e.status!=2){d.Message.warning("文件正在转码中，无法预览");return}ee.value.showPreview(e,0)},pe=e=>{const{curFolder:l,categoryId:k}=e;b.value=l,M.value=!0,C.value=k,_()},ve=async e=>{let l=await d.Request({url:c.createDownloadUrl+"/"+e.fileId});l&&(window.location.href=c.download+"/"+l.data)},te=n(),_e=e=>{te.value.show(e)};return(e,l)=>{const k=r("el-button"),V=r("el-upload"),z=r("el-input"),j=r("Navigation"),Q=r("icon"),me=r("Table"),W=r("Icon"),he=r("Preview"),ye=r("FolderSelect");return u(),p("div",null,[i("div",Se,[i("div",Ve,[i("div",De,[t(V,{"show-file-list":!1,"with-credentials":!0,multiple:!0,"http-request":$,accept:T.value},{default:o(()=>[t(k,{type:"primary"},{default:o(()=>[$e,v(" 上传 ")]),_:1})]),_:1},8,["accept"])]),C.value=="all"?(u(),O(k,{key:0,type:"success",onClick:P},{default:o(()=>[Ee,v(" 新建文件夹 ")]),_:1})):w("",!0),t(k,{onClick:ce,type:"danger",disabled:m.value.length==0},{default:o(()=>[Me,v(" 批量删除 ")]),_:1},8,["disabled"]),t(k,{onClick:de,type:"warning",disabled:m.value.length==0},{default:o(()=>[qe,v(" 批量移动 ")]),_:1},8,["disabled"]),i("div",ze,[t(z,{clearable:"",placeholder:"输入文件名搜索",modelValue:E.value,"onUpdate:modelValue":l[0]||(l[0]=N=>E.value=N),onKeyup:ae(R,["enter"])},{suffix:o(()=>[i("i",{class:"iconfont icon-search",onClick:R})]),_:1},8,["modelValue","onKeyup"])]),i("div",{class:"iconfont icon-refresh",onClick:_})]),t(j,{ref_key:"navigationRef",ref:le,onNavChange:pe},null,512)]),s.value.list&&s.value.list.length>0?(u(),p("div",Oe,[t(me,{ref:"dataTableRef",columns:H,showPagination:!0,dataSource:s.value,fetch:_,initFetch:!1,options:F,onRowSelected:ie},{fileName:o(({index:N,row:a})=>[i("div",{class:"file-item",onMouseenter:g=>f(a),onMouseleave:g=>y(a)},[(a.fileType==3||a.fileType==1)&&a.status==2?(u(),O(Q,{key:0,cover:a.fileCover,width:32},null,8,["cover"])):(u(),p(B,{key:1},[a.folderType==0?(u(),O(Q,{key:0,fileType:a.fileType},null,8,["fileType"])):w("",!0),a.folderType==1?(u(),O(Q,{key:1,fileType:0})):w("",!0)],64)),a.showEdit?w("",!0):(u(),p("span",{key:2,class:"file-name",title:a.fileName},[i("span",{onClick:g=>fe(a)},I(a.fileName),9,Le),a.status==0?(u(),p("span",je,"转码中")):w("",!0),a.status==1?(u(),p("span",Be,"转码失败")):w("",!0)],8,Ue)),a.showEdit?(u(),p("div",Ke,[t(z,{modelValue:a.fileNameReal,"onUpdate:modelValue":g=>a.fileNameReal=g,modelModifiers:{trim:!0},ref_key:"editNameRef",ref:S,maxLength:190,onKeyup:ae(g=>U(N),["enter"])},{suffix:o(()=>[v(I(a.fileSuffix),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onKeyup"]),i("span",{class:Ce(["iconfont icon-right1",a.fileNameReal?"":"not-allow"]),onClick:g=>U(N)},null,10,Ae),i("span",{class:"iconfont icon-error",onClick:g=>G(N)},null,8,He)])):w("",!0),i("span",Ge,[a.showOp&&a.fileId&&a.status==2?(u(),p(B,{key:0},[i("span",{class:"iconfont icon-share1",onClick:g=>_e(a)},"分享",8,Je),a.folderType==0?(u(),p("span",{key:0,class:"iconfont icon-download",onClick:g=>ve(a)},"下载",8,Qe)):w("",!0),i("span",{class:"iconfont icon-del",onClick:g=>ne(a)},"删除",8,We),i("span",{class:"iconfont icon-edit",onClick:se(g=>J(N),["stop"])},"重命名",8,Xe),i("span",{class:"iconfont icon-move",onClick:g=>ue(a)},"移动",8,Ye)],64)):w("",!0)])],40,Pe)]),fileSize:o(({index:N,row:a})=>[a.fileSize?(u(),p("span",Ze,I(Ne(d).Utils.size2Str(a.fileSize)),1)):w("",!0)]),_:1},8,["dataSource"])])):(u(),p("div",el,[i("div",ll,[t(W,{iconName:"no_data",width:120,fit:"fill"}),tl,i("div",al,[t(V,{"show-file-list":!1,"with-credentials":!0,multiple:!0,"http-request":$,accept:T.value},{default:o(()=>[i("div",ol,[t(W,{iconName:"file",width:60}),sl])]),_:1},8,["accept"]),C.value=="all"?(u(),p("div",{key:0,class:"op-item",onClick:P},[t(W,{iconName:"folder",width:60}),il])):w("",!0)])])])),t(he,{ref_key:"previewRef",ref:ee},null,512),t(ye,{ref_key:"folderSelectRef",ref:L,onFolderSelect:re},null,512),t(Re,{ref_key:"shareRef",ref:te},null,512)])}}},ul=we(nl,[["__scopeId","data-v-1a1d1f66"]]);export{ul as default};