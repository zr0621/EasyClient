function formatDateTime(e,o,i){return e?new Date(e).format("yyyy-MM-dd HH:mm:ss"):""}function formatDate(e,o,i){return e?new Date(e).format("yyyy-MM-dd"):""}function formatLink(e,o,i){return"<a href='{0}'>{1}</a>".format(e,e)}function formatSize(e,o,i){function t(e,o){if(e>=0){var i=parseInt(e*Math.pow(10,o)+.5)/Math.pow(10,o);return i}numberRound1=-e;var i=parseInt(numberRound1*Math.pow(10,o)+.5)/Math.pow(10,o);return-i}if(!e||e<0)return"0 Bytes";var r=new Array("Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"),i=0,a=parseFloat(e),n=t(a/Math.pow(1024,i=Math.floor(Math.log(a)/Math.log(1024))),2);return n+r[i]}function isPC(){var e=navigator.userAgent.toLowerCase(),o=["android","iphone","symbianos","windows phone","ipad","ipod"],i=!0;for(var t in o)if(e.indexOf(o[t])>0){i=!1;break}return i}function fixHover(){var e="ontouchstart"in document.documentElement||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0;if(e)for(var o=document.styleSheets.length-1;o>=0;o--){var i=document.styleSheets[o];if(i.cssRules)for(var t=i.cssRules.length-1;t>=0;t--){var r=i.cssRules[t];r.selectorText&&(r.selectorText=r.selectorText.replace(":hover",":active"),r.selectorText=r.selectorText.replace(":focus",":active"))}}}Date.prototype.format=function(e){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"h+":this.getHours()%12,"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in o)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?o[i]:("00"+o[i]).substr((""+o[i]).length)));return e},String.prototype.format=function(e){var o=this;if(arguments.length>0)if(1==arguments.length&&"object"==typeof e){for(var i in e)if(void 0!=e[i]){var t=new RegExp("({"+i+"})","g");o=o.replace(t,e[i])}}else for(var r=0;r<arguments.length;r++)if(void 0!=arguments[r]){var t=new RegExp("({)"+r+"(})","g");o=o.replace(t,arguments[r])}return o},$(function(){fixHover(),$.extend($.gritter.options,{class_name:"gritter-error",position:"bottom-right",fade_in_speed:100,fade_out_speed:100,time:1e3}),$(".content-wrapper").on("transitionend",function(){$("table.easyui-datagrid").each(function(e){$(this).datagrid("resize")})}),$(".main-header").on("transitionend",function(){$.AdminLTE.layout.fix(),$(".main-sidebar").css("padding-top",$(".main-header").outerHeight())}),$.AdminLTE.layout.fix(),$(document).on("click",".sidebar-toggle",function(){$(".main-sidebar").css("padding-top",$(".main-header").outerHeight())}),"undefined"!=typeof errorMsg&&errorMsg&&$.gritter.add({text:errorMsg}),$(document).ajaxSuccess(function(){$("body").removeClass("hide")}),$(document).ajaxError(function(e,o,i,t){if(401==o.status)return $.cookie("token","",{expires:-1}),$.cookie("username","",{expires:-1}),top.location.href="/login.html",!1;404==o.status&&(o.responseText="请求服务不存在或已停止");var r=o.responseText;try{r=JSON.parse(r)}catch(e){}"undefined"!=typeof r&&r&&$.gritter.add({text:r})}),$(document).on("shown.bs.modal",".modal",function(){}).on("hidden.bs.modal",".modal",function(e){$(this).find("form").each(function(){$(this)[0].reset()}),$(this).find("input:hidden").val("")}).on("show.bs.modal",".modal",function(e){$(this).find(".form-group").removeClass("has-error").removeClass("has-success"),$(this).find(".with-errors").empty()}),$(document).ajaxStart(function(){$(".modal:visible .btn-primary").prop("disabled",!0).attr("data-ajaxing","true")}).ajaxComplete(function(){$(".btn-primary:disabled[data-ajaxing=true]").prop("disabled",!1).removeAttr("data-ajaxing")});var e=$("ul.sidebar-menu");e.find("li").removeClass("active"),$link=e.find("li a[href='{0}']".format(location.pathname)).first(),1==$link.size()&&$link.parents("ul.sidebar-menu li").addClass("active"),$("form[data-toggle=validator]").attr("data-disable","false").attr("autocomplete","off"),$("form[data-toggle=validator]").validator().on("submit",function(e){var o=$(this);e.isDefaultPrevented()&&o.find(".form-group.has-error:first").find("input:visible").focus()}),$(document).on("keydown","form[data-toggle=validator]",function(e){if(13==e.keyCode)return!1}),$("input[data-toggle=integer]").inputNumber(),$(".modal.fade").attr("data-backdrop","static")});