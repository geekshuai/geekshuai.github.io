// build time:Sun Apr 07 2019 13:09:53 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("view/view_base",function(t,e,a){var n=t("base/tangram").T,i=t("conf/const"),r=t("base/class").Class;e.ViewBase=r.create(function(t){function e(t){n(t).click(function(e){if(n(t).attr("data-bd-bind")==s){var i=a(e.target);i&&(e.preventDefault(),o.fire("clickact",{cmd:n(i).attr(o._actBtnSet.cmdAttr),element:i,event:e,buttonType:o._poptype}))}}).mouseenter(function(e){if(n(t).attr("data-bd-bind")==s){var i=a(e.target);o.fire("mouseenter",{element:i,event:e})}}).mousemove(function(e){if(n(t).attr("data-bd-bind")==s){var i=a(e.target);n(i).hasClass("bds_more")&&o.fire("moreover",{element:i})}}),n(t).attr("data-bd-bind",s)}function a(t){if(r(t))return t;if(o._actBtnSet.maxDomDepth>0){var e=o._actBtnSet.maxDomDepth,a=0,i=n(t).parent().get(0),s=o.entities;while(a<e){if(r(i))return i;i=n(i).parent().get(0);if(n.array(s).contains(i)||i==document.body)break;a++}}return null}function r(t){var e=o._actBtnSet;return t&&t.tagName&&(e.className||e.tagName)?(!e.className||n(t).hasClass(e.className))&&(!e.tagName||e.tagName.toLowerCase().indexOf("|"+t.tagName.toLowerCase()+"|")>-1)&&n(t).attr(e.cmdAttr):!1}var o=this,s=+new Date;o._entities=[],o._buttonType=-1,o._actBtnSet={className:"",tagName:"|a|img|span",maxDomDepth:0,cmdAttr:i.CMD_ATTR},o.render=function(t){},o.init=function(){n(o._entities).each(function(t,a){e(a)}),o._init(),o._entities.length>0&&(_bd_share_main._LogPoolV2==_bd_share_main._LogPoolV2||[],_bd_share_main._LogPoolV2.push(t.type))},o._init=function(){},o.distory=function(){n(o._entities).removeAttr("data-bd-bind"),o._distory()},o._distory=function(){}})});
//rebuild by neat 