!function(){function i(e){e.fn.imageDialog=function(){var n=this,l=this.cm,e=this.lang,a=this.editor,r=this.settings,o=l.getCursor(),i=l.getSelection(),d=e.dialog.image,t=this.classPrefix,s=t+"image-dialog";l.focus();function c(e){f.find("."+t+"dialog-mask")[e?"show":"hide"]()}function u(e){if(e){c(!0);var a=e.name,i=e.size,t=(e.type,new RegExp("(\\.("+r.imageFormats.join("|")+"))$","i"));if(""===a)return alert(d.uploadFileEmpty),c(!1),!1;if(!t.test(a))return alert(d.formatNotAllowed+r.imageFormats.join(", ")),c(!1),!1;var l=new FormData;if(!(0<i&&i<=16777216))return alert(d.imageOverSize),c(!1),!1;l.append("file",e);var o=r.uploadURL+(0<=r.uploadURL.indexOf("?")?"&":"?")+"&id="+n.id;r.crossDomainUpload&&(o+="&callback="+r.uploadCallbackURL+"&dialog_id=editormd-image-dialog-"+m),$.ajax({type:"POST",url:o,data:l,cache:!1,contentType:!1,processData:!1,success:function(e){c(!1),1===e.success?f.find("[data-url]").val(e.url):alert(e.message)},complete:function(){c(!1)},error:function(e,a){c(!1)}})}}if(a.find("."+s).length<1){var f,m=(new Date).getTime(),g=(r.imageUpload?'<form class="'+t+'form">':'<div class="'+t+'form">')+"<label>"+d.url+'</label><input type="text" data-url />'+(r.imageUpload?'<div class="'+t+'file-input"><input type="file" name="'+t+'image-file" accept="image/*" /><input type="submit" value="'+d.uploadButton+'" /></div>':"")+"<br/><label>"+d.alt+'</label><input type="text" value="'+i+'" data-alt /><br/><label>'+d.link+'</label><input type="text" value="" data-link /><br/>'+(r.imageUpload?"</form>":"</div>");if((f=this.createDialog({title:d.title,width:r.imageUpload?465:380,height:254,name:s,content:g,mask:r.dialogShowMask,drag:r.dialogDraggable,lockScreen:r.dialogLockScreen,maskStyle:{opacity:r.dialogMaskOpacity,backgroundColor:r.dialogMaskBgColor},buttons:{enter:[e.buttons.enter,function(){var e=this.find("[data-url]").val(),a=this.find("[data-alt]").val(),i=this.find("[data-link]").val();if(""===e)return alert(d.imageURLEmpty),!1;var t=""!==a?' "'+a+'"':"";return""===i?l.replaceSelection("!["+a+"]("+e+t+")"):l.replaceSelection("[!["+a+"]("+e+t+")]("+i+t+")"),""===a&&l.setCursor(o.line,o.ch+2),this.hide().lockScreen(!1).hideMask(),this.remove(),!1}],cancel:[e.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),this.remove(),!1}]}})).attr("id",t+"image-dialog-"+m),!r.imageUpload)return;var p=f.find('[name="'+t+'image-file"]');p.bind("change",function(){return u(p[0].files[0])})}(f=a.find("."+s)).find('[type="text"]').val(""),f.find('[type="file"]').val(""),this.dialogShowMask(f),this.dialogLockScreen(),f.show(),0<n.uploadImg.length&&u(n.uploadImg.shift())}}"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=i:"function"==typeof define?define.amd?define(["editormd"],function(e){i(e)}):define(function(e){var a=e("./../../editormd");i(a)}):i(window.editormd)}();