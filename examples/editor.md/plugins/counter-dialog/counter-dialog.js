!function(){function n(e){var b=jQuery,v="counter-dialog",w={"zh-cn":{dialog:{counterDlg:{title:"文章信息"}}}};e.fn.counterDialog=function(){var n,e=this.cm,t=this.editor,o=this.settings,i=(o.path,this.classPrefix+v);b.extend(!0,this.lang,w[this.lang.name]);var l,a=this.lang.dialog.counterDlg,r=['<div class="editormd-form" id="counter-container" style="padding: 0px 0;height: 63px;overflow: hidden;overflow-y: auto;">',"</div>"].join("\n");0<t.find("."+i).length?(n=t.find("."+i)).show():(n=this.createDialog({name:i,title:a.title,width:260,height:145,mask:!1,drag:!1,closed:!1,content:r,lockScreen:!1,footer:!1,buttons:!1}),(l=function(){var e=b(".fa-th-large").offset(),t=e.left-n.width();t<0&&(t=0),n.css({top:e.top+26+"px",left:t+"px"})})(),b(window).resize(l),b(document).mouseup(function(e){0==b(e.target).parents("."+i).length&&b("."+i).hide()}));var d,c,s=e.getValue(),f=(s.length,(s=(s=(s=(s=s.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" ")).length,s.join("").length),g="",h="",u=b.proxy(o.ongetObjDocument,this)(),p=b.proxy(o.ongetObjCommon,this)();null!=u&&null!=p&&(d=new Date(u.DateCreated),g=p.ToLocalDateString(d,!1)+" "+p.ToLocalTimeString(d),c=new Date(u.DateModified),h=p.ToLocalDateString(c,!1)+" "+p.ToLocalTimeString(c));var m=['<label">文章字数：'+f,"</label><br/>",'<label">创建时间：'+g,"</label><br/>",'<label">修改时间：'+h,"</label><br/>"].join("\n");b("#counter-container").html(m)}}"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=n:"function"==typeof define?define.amd?define(["editormd"],function(e){n(e)}):define(function(e){var t=e("./../../editormd");n(t)}):n(window.editormd)}();