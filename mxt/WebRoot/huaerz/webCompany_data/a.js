/*! jQuery v1.6.3 http://jquery.com/ | http://jquery.org/license */
(function(a,b){function cu(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cr(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cq(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cp(){cn=b}function co(){setTimeout(cp,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bA.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bW(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bP,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bW(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bW(a,c,d,e,"*",g));return l}function bV(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bL),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function by(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bt:bu;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bv(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bl(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bd,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bk(a){f.nodeName(a,"input")?bj(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bj)}function bj(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bi(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bh(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bg(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bf(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function V(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(Q.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function M(a,b){return(a&&a!=="*"?a+".":"")+b.replace(y,"`").replace(z,"&")}function L(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(w,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function J(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function D(){return!0}function C(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.3",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type=checkbox>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i=f.expando,j=typeof c=="string",k=a.nodeType,l=k?f.cache:a,m=k?a[f.expando]:a[f.expando]&&f.expando;if((!m||e&&m&&l[m]&&!l[m][i])&&j&&d===b)return;m||(k?a[f.expando]=m=++f.uuid:m=f.expando),l[m]||(l[m]={},k||(l[m].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?l[m][i]=f.extend(l[m][i],c):l[m]=f.extend(l[m],c);g=l[m],e&&(g[i]||(g[i]={}),g=g[i]),d!==b&&(g[f.camelCase(c)]=d);if(c==="events"&&!g[c])return g[i]&&g[i].events;j?(h=g[c],h==null&&(h=g[f.camelCase(c)])):h=g;return h}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e=f.expando,g=a.nodeType,h=g?f.cache:a,i=g?a[f.expando]:f.expando;if(!h[i])return;if(b){d=c?h[i][e]:h[i];if(d){d[b]||(b=f.camelCase(b)),delete d[b];if(!l(d))return}}if(c){delete h[i][e];if(!l(h[i]))return}var j=h[i][e];f.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null,j?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=j):g&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u,v;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=v:u&&(i=u)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.attr(a,b,""),a.removeAttribute(b),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(u&&f.nodeName(a,"button"))return u.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(u&&f.nodeName(a,"button"))return u.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==null?g:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabIndex=f.propHooks.tabIndex,v={get:function(a,c){var d;return f.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(u=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var w=/\.(.*)$/,x=/^(?:textarea|input|select)$/i,y=/\./g,z=/ /g,A=/[^\w\s.|`]/g,B=function(a){return a.replace(A,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=C);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null
,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,M(a.origType,a.selector),f.extend({},a,{handler:L,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,M(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?D:C):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=D;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=D;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=D,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};var E=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},F=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?F:E,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?F:E)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="submit"||c==="image")&&f(b).closest("form").length&&J("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&J("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var G,H=function(a){var b=f.nodeName(a,"input")?a.type:"",c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},I=function(c){var d=c.target,e,g;if(!!x.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=H(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:I,beforedeactivate:I,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&I.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&I.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",H(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in G)f.event.add(this,c+".specialChange",G[c]);return x.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return x.test(this.nodeName)}},G=f.event.special.change.filters,G.focus=G.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var K={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||C,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=w.exec(h),k="",j&&(k=j[0],h=h.replace(w,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,K[h]?(a.push(K[h]+k),h=h+k):h=(K[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+M(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+M(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var N=/Until$/,O=/^(?:parents|prevUntil|prevAll)/,P=/,/,Q=/^.[^:#\[\.,]*$/,R=Array.prototype.slice,S=f.expr.match.POS,T={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(V(this,a,!1),"not",a)},filter:function(a){return this.pushStack(V(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=S.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=S.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(U(c[0])||U(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=R.call(arguments);N.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!T[a]?f.unique(e):e,(this.length>1||P.test(d))&&O.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|object|embed|option|style)/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,bc=/\/(java|ecma)script/i,bd=/^\s*<!(?:\[CDATA\[|\-\-)/,be={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,f.support.htmlSerialize||(be._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!be[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bb.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bf(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bl)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!ba.test(a[0])&&(f.support.checkClone||!bb.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);
return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bh(a,d),e=bi(a),g=bi(d);for(h=0;e[h];++h)g[h]&&bh(e[h],g[h])}if(b){bg(a,d);if(c){e=bi(a),g=bi(d);for(h=0;e[h];++h)bg(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=be[l]||be._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bk(k[i]);else bk(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bc.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bm=/alpha\([^)]*\)/i,bn=/opacity=([^)]*)/,bo=/([A-Z]|^ms)/g,bp=/^-?\d+(?:px)?$/i,bq=/^-?\d/,br=/^([\-+])=([\-+.\de]+)/,bs={position:"absolute",visibility:"hidden",display:"block"},bt=["Left","Right"],bu=["Top","Bottom"],bv,bw,bx;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bv(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=br.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bv)return bv(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return by(a,b,d);f.swap(a,bs,function(){e=by(a,b,d)});return e}},set:function(a,b){if(!bp.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bn.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bm,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bm.test(g)?g.replace(bm,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bv(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bw=function(a,c){var d,e,g;c=c.replace(bo,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bx=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bp.test(d)&&bq.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bv=bw||bx,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bz=/%20/g,bA=/\[\]$/,bB=/\r?\n/g,bC=/#.*$/,bD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bE=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bF=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bG=/^(?:GET|HEAD)$/,bH=/^\/\//,bI=/\?/,bJ=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bK=/^(?:select|textarea)/i,bL=/\s+/,bM=/([?&])_=[^&]*/,bN=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bO=f.fn.load,bP={},bQ={},bR,bS,bT=["*/"]+["*"];try{bR=e.href}catch(bU){bR=c.createElement("a"),bR.href="",bR=bR.href}bS=bN.exec(bR.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bO)return bO.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bJ,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bK.test(this.nodeName)||bE.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bB,"\r\n")}}):{name:b.name,value:c.replace(bB,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?bX(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),bX(a,b);return a},ajaxSettings:{url:bR,isLocal:bF.test(bS[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bT},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bV(bP),ajaxTransport:bV(bQ),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?bZ(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=b$(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bD.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bC,"").replace(bH,bS[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bL),d.crossDomain==null&&(r=bN.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bS[1]&&r[2]==bS[2]&&(r[3]||(r[1]==="http:"?80:443))==(bS[3]||(bS[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bW(bP,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bG.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bI.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bM,"$1_="+x);d.url=y+(y===d.url?(bI.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bT+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bW(bQ,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)bY(g,a[g],c,e);return d.join("&").replace(bz,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var b_=f.now(),ca=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+b_++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ca.test(b.url)||e&&ca.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ca,l),b.url===j&&(e&&(k=k.replace(ca,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cb=a.ActiveXObject?function(){for(var a in cd)cd[a](0,1)}:!1,cc=0,cd;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ce()||cf()}:ce,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cb&&delete cd[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cc,cb&&(cd||(cd={},f(a).unload(cb)),cd[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cg={},ch,ci,cj=/^(?:toggle|show|hide)$/,ck=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cl,cm=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cn;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cq("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cr(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cq("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cq("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cr(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cj.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=ck.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cq("show",1),slideUp:cq("hide",1),slideToggle:cq("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return d.step(a)}var d=this,e=f.fx;this.startTime=cn||co(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&f.timers.push(g)&&!cl&&(cl=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cn||co(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cl),cl=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cs=/^t(?:able|d|h)$/i,ct=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cu(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cs.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=ct.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!ct.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cu(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cu(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(f.css(a,d,"padding")):null},f.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(f.css(b,d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNaN(j)?i:j}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
;var isNS=false;var isIE=true;if(navigator.appName=="Microsoft Internet Explorer")isIE=true;if(navigator.appName=="Netscape"){isIE=false;isNS=true;}
var chrome_event_bind=false;function getStringField(str,deli,pos)
{arr=str.split(deli);if(arr.length>=pos)
{return arr[pos-1];}
else
{return"";}}
function getStringFieldEnd(str,deli,pos)
{arr=str.split(deli);if(arr.length<pos)return"";var sss="";var cl=0;for(var i=0;i<str.length;i++)
{if(str.substr(i,1)==deli)
{cl++;if(cl==pos-1)
{sss=str.substr(i+1);break;}}}
return sss;}
function getStringFieldEnd2(str,deli,pos)
{arr=str.split(deli);if(arr.length<pos)return"";var sss="";for(var i=pos-1;i<arr.length;i++)
{if(sss=="")
{sss=arr[i];}
else
{sss+=deli+arr[i];}}
return sss;}
function getCurTime()
{var now=new Date();var year=now.getFullYear();var month=now.getMonth()+1;var day=now.getDate();var hour=now.getHours();var minute=now.getMinutes();var second=now.getSeconds();if(minute<10)
{minute="0"+minute;}
if(second<10)
{second="0"+second;}
var time=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;return time;}
function getCurTime2()
{var now=new Date();var year=now.getFullYear();var month=now.getMonth()+1;var day=now.getDate();if(month<10)
{month="0"+month;}
if(day<10)
{day="0"+day;}
var time=year+"-"+month+"-"+day;return time;}
function getPreDay(day)
{var now=new Date();now.setDate(now.getDate()-day);var year=now.getFullYear();var month=now.getMonth()+1;var day=now.getDate();if(month<10)
{month="0"+month;}
if(day<10)
{day="0"+day;}
var time=year+"-"+month+"-"+day;return time;}
function getPreMonth(num)
{var now=new Date();var year=now.getFullYear();var month=now.getMonth()-(num-1);if(month<=0){year=year-1;month=month+12;}
var day=now.getDate();if(month<10)
{month="0"+month;}
if(day<10)
{day="0"+day;}
var time=year+"-"+month+"-"+day;return time;}
function getTime()
{var dd=new Date();return Math.floor(dd.getTime()/1000);}
function getMicroTime()
{var dd=new Date();return dd.getTime();}
function getTime2()
{var date=new Date();var hour="000"+date.getHours();var min="000"+date.getMinutes();var sec="000"+date.getSeconds();hour=hour.substr(hour.length-2);min=min.substr(min.length-2);sec=sec.substr(sec.length-2);return hour+":"+min+":"+sec;}
if(!Array.prototype.pop)
{Array.prototype.pop=function()
{var lastElement=this[this.length-1];this.length=Math.max(this.length-1,0);return lastElement;}}
if(!Array.prototype.push)
{Array.prototype.push=function()
{for(var i=0;i<arguments.length;i++)
{this[this.length]=arguments[i];}
return this.length;}}
if(!Array.prototype.shift)
{Array.prototype.shift=function()
{var firstElement=this[0];this.reverse();this.pop();this.reverse();return firstElement;}}
if(!Array.prototype.splice){Array.prototype.splice=function(){var start=arguments[0];var deleteCount=start+arguments[1];var deleteItem=this.slice(start,deleteCount);var beforeItem=this.slice(0,start);var afterItem=this.slice(deleteCount);this.length=beforeItem.length;var i;for(i=2;i<arguments.length;this[this.length]=arguments[i++]);for(i=0;i<afterItem.length;this[this.length]=afterItem[i++]);return deleteItem;}}
if(!Array.prototype.unshift)
{Array.prototype.unshift=function()
{var arr=new Array();for(var i=0;i<arguments.length;arr[i]=arguments[i++]);arr=arr.concat(this);this.length=0;for(i=0;i<arr.length;this[i]=arr[i++]);}}
Array.prototype.del=function(n){if(n<0)
{return this;}
else
{return this.slice(0,n).concat(this.slice(n+1,this.length));}}
Array.prototype.search=function(value)
{re=new RegExp(value,[""]);return(this.toString().replace(re,"┢").replace(/[^,┢]/g,"")).indexOf("┢");}
if(!Array.prototype.indexOf)
{Array.prototype.indexOf=function(obj){for(var i=0,L=this.length;i<L;i++){if(this[i]==obj){return i;}}
return-1;}}
String.prototype.trim=function()
{return this==null?"":(this+"").replace(new RegExp('(^[\\s\\t\\xa0\\u3000\\uFEFF]+)|([\\u3000\\xa0\\s\\t\\uFEFF]+\x24)','g'),'');}
function _length(str)
{var len=0;for(var i=0;i<str.length;i++)
{if(str.charAt(i)>'~')
{len+=2;}
else
{len++;}}
return len;}
function _substring(str,len)
{var ln=0;var subs="";var flag2=0;for(var i=0;i<str.length;i++)
{if(flag2==1)
{subs+="..";break;}
var flag=0;var s=str.substr(i,1);if(s.charAt(0)>'~')
{ln+=2;flag=1;}
else ln++;subs+=s;if(ln==len)
{flag2=1;continue;}
if(ln>len)
{if(flag==1)subs=subs.substr(0,subs.length-1);subs+="..";break;}}
return subs;}
function _URLLength(str)
{var len=0;for(var i=0;i<str.length;i++)
{if(str.charAt(i)>'~')
{len+=6;}
else if(str.charAt(i)==" ")
{len+=3;}
else
{len++;}}
return len;}
function _URLSubstring(str,len)
{var ln=0;var subs="";for(var i=0;i<str.length;i++)
{var s=str.substr(i,1);if(s>'~')
{ln+=6;}
else if(s==" ")
{ln+=3;}
else
{ln++;}
if(ln<=len)
{subs+=s;if(ln==len)break;}
else
{break;}}
return subs;}
function HtmlMode(msg)
{if((navigator.appName=="Microsoft Internet Explorer")&&(navigator.appVersion.match(/MSIE \d\.\d/)=="MSIE 5.0"))
{;}
else
{msg=msg.replace(new RegExp('<scr'+'ipt[^>]*?>.*?</scr'+'ipt>','g'),"");msg=msg.replace(new RegExp('\<\!\-\-.*?\-\-\>','g'),"");}
msg=msg.replace('\<\!\-\-',"");msg+="</a>";msg=msg.replace(/(\r\n)/g,"<br>&nbsp;&nbsp;");return msg;}
function UrlEncode(text)
{return encodeURIComponent(text);}
function UrlDecode(text)
{try
{return unescape(text);}
catch(e)
{return text;}}
function UrlDecode2(text)
{try
{return decodeURIComponent(text);}
catch(e)
{return text;}}
function UrlDecode3(text)
{try
{return decodeURIComponent(text);}
catch(e)
{try
{return unescape(text);}
catch(e)
{return text;}}}
function UrlDecode4(text)
{try
{return decodeURIComponent(text.replace(/%(?![\da-f]{2})/gi,'%25'));}
catch(e)
{return text;}}
function HtmlEncode(text)
{var msg=text.replace(/&/g,'&amp;').replace(/\"/g,'&quot;').replace(/\'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;');msg=msg.replace(/\r\n/g,"<br/>");msg=msg.replace(/\r|\n/g,"<br/>");return msg;}
function HtmlDecode(text)
{return text.replace(/&amp;/g,'&').replace(/&amp;/g,'&').replace(/&quot;/g,'\"').replace(/&#039;/g,'\'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&mdash;/g,'—');}
function UBBEncode(str)
{var replaceURL=false;var replaceIMG=false;str=str.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/ig,'[s:$1]');str=str.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/ig,'[img]'+'$1'+'[/img]');var apattern=new RegExp(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/i);if(apattern.test(str)==true){str=str.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/ig,'[url='+'$1'+']'+'$2'+'[/url]');return UBBEncode(str);}
if(str.indexOf("[URL")!=-1||str.indexOf("[url")!=-1)
{var pattern=/\[URL\=([^\]]*)\]([^\[]*)\[\/URL\]/gim;str=str.replace(pattern,"{#URL={$1{$2}}}");replaceURL=true;}
if(str.indexOf("[IMG]")!=-1||str.indexOf("[img]")!=-1)
{var imgpattern=/\[IMG\](http:\/\/)?([^[]*)\[\/IMG\]/gim;str=str.replace(imgpattern,"{#IMG={http://$2}}");replaceIMG=true;}
var re=/\[voice\].+\[\/voice\]/;if(!re.test(str)){str="!"+str;var pattern=/([^{\/])((ftp:\/\/|https:\/\/|http:\/\/|www\d{0,4}\.)[\w\-]*\.[\w!~;*'()&=\+\$%\-\/\#\?:\.,\|\^]*)/gim;str=str.replace(pattern,"$1[URL=$2]$2[/URL]");str=str.replace('!','');}
if(replaceIMG==true)
{var backimgpattern=/{#IMG={([^}]*)}}/gim;str=str.replace(backimgpattern,"[IMG]$1[/IMG]");}
if(replaceURL==true)
{var backpattern=/{#URL={([^{]*){([^}]*)}}}/gim;str=str.replace(backpattern,"[URL=$1]$2[/URL]");}
str=str.replace(/\[URL=www/gi,"[URL=http://www");return str;}
function UBBCode(strContent)
{if((navigator.appName=="Microsoft Internet Explorer")&&(navigator.appVersion.match(/MSIE \d\.\d/)=="MSIE 5.0"))
{if(strContent.indexOf("[IMG]")>=0)
{var con=strContent.substr(5,strContent.indexOf("[/IMG]")-5);strContent="<IMG SRC=\""+con+"\">";}
if(strContent.indexOf("[URL=")>=0)
{var tlink=strContent.substr(5,strContent.indexOf("]")-5);var text=strContent.substr(strContent.indexOf("]")+1,strContent.length-6-strContent.indexOf("]")-1);strContent="<A HREF=\""+tlink+"\" TARGET=_blank>"+text+"</A>";}}
else
{var r2=new RegExp("(\\[URL=(.+?)\])(.+?)(\\[\\/URL\\])","gim");var r3=new RegExp("(\\[IMG\])(\\S+?)(\\[\\/IMG\\])","gim");var r4=new RegExp("(\\[QQ\])(\\d+?)(\\[\\/QQ\\])","gim");var r5=new RegExp("&amp","gim");strContent=strContent.replace(r2,'<A HREF="$2" TARGET="_blank" style="text-decoration:underline; color:#8A2BE2;">$3</A>');strContent=strContent.replace(r3,'<IMG border="0" SRC="$2">');strContent=strContent.replace(r4,'<img border="0" title="点击跟我QQ[$2]聊" src="http://www.53kf.com/img/qq.gif" onclick="addQQ(\'$2\')" style="cursor:pointer"/>[$2]');}
strContent=strContent.replace(/{(.[^#.-\/]*)#(.[^#.-\/]*)#}/gi,"<img src=\"http://"+host+"/img/face/$1/$1_$2.gif\" border=\"0\">");return strContent;}
function UBBEncode2(str){str=str.replace(/<br[^>]*>/ig,'\n');str=str.replace(/<p[^>\/]*\/>/ig,'\n');str=str.replace(/\son[\w]{3,16}\s?=\s*([\'\"]).+?\1/ig,'');str=str.replace(/<hr[^>]*>/ig,'[hr]');str=str.replace(/<(sub|sup|u|strike|b|i|pre)>/ig,'[$1]');str=str.replace(/<\/(sub|sup|u|strike|b|i|pre)>/ig,'[/$1]');str=str.replace(/<(\/)?strong>/ig,'[$1b]');str=str.replace(/<(\/)?em>/ig,'[$1i]');str=str.replace(/<(\/)?blockquote([^>]*)>/ig,'[$1blockquote]');str=str.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/ig,'[s:$1]');str=str.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/ig,'[img]'+'$1'+'[/img]');str=str.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/ig,'[url=$1]'+'$2'+'[/url]');str=str.replace(/<[^>]*?>/ig,'');str=str.replace(/&amp;/ig,'&');str=str.replace(/&lt;/ig,'<');str=str.replace(/&gt;/ig,'>');return str;}
function UBBDecode2(str){str=str.replace(/</ig,'&lt;');str=str.replace(/>/ig,'&gt;');str=str.replace(/\n/ig,'<br />');str=str.replace(/\[code\](.+?)\[\/code\]/ig,function($1,$2){return phpcode($2);});str=str.replace(/\[hr\]/ig,'<hr />');str=str.replace(/\[\/(size|color|font|backcolor)\]/ig,'</font>');str=str.replace(/\[(sub|sup|u|i|strike|b|blockquote|li)\]/ig,'<$1>');str=str.replace(/\[\/(sub|sup|u|i|strike|b|blockquote|li)\]/ig,'</$1>');str=str.replace(/\[\/align\]/ig,'</p>');str=str.replace(/\[(\/)?h([1-6])\]/ig,'<$1h$2>');str=str.replace(/\[align=(left|center|right|justify)\]/ig,'<p align="$1">');str=str.replace(/\[size=(\d+?)\]/ig,'<font size="$1">');str=str.replace(/\[color=([^\[\<]+?)\]/ig,'<font color="$1">');str=str.replace(/\[backcolor=([^\[\<]+?)\]/ig,'<font style="background-color:$1">');str=str.replace(/\[font=([^\[\<]+?)\]/ig,'<font face="$1">');str=str.replace(/\[list=(a|A|1)\](.+?)\[\/list\]/ig,'<ol type="$1">$2</ol>');str=str.replace(/\[(\/)?list\]/ig,'<$1ul>');str=str.replace(/\[s:(\d+)\]/ig,function($1,$2){return smilepath($2);});str=str.replace(/\[img\]([^\[]*)\[\/img\]/ig,'<img src="$1" border="0" />');str=str.replace(/\[url=([^\]]+)\]([^\[]+)\[\/url\]/ig,'<a href="$1">'+'$2'+'</a>');str=str.replace(/\[url\]([^\[]+)\[\/url\]/ig,'<a href="$1">'+'$1'+'</a>');return str;}
function msgFilter(msg)
{while(/onerror|onclick|onload|onmouse|onkey|unescape|decodeuri|eval|expression|\\/igm.test(msg)){msg=msg.replace(/onerror|onclick|onload|onmouse|onkey|unescape|decodeuri|eval|expression|\\/igm,'');}
return msg;}
function textCounter(obj,maxlength)
{if(obj.value.length>maxlength)
{obj.value=obj.value.substr(0,maxlength);}}
function getpara(strname)
{var hrefstr,pos,parastr,para,tempstr;hrefstr=window.location.href;pos=hrefstr.indexOf("#");pos=(pos==-1?hrefstr.length:pos);hrefstr=hrefstr.substring(0,pos);pos=hrefstr.indexOf("?");parastr=hrefstr.substring(pos+1);para=parastr.split("&");tempstr="";for(i=0;i<para.length;i++)
{tempstr=para[i];pos=tempstr.indexOf("=");if(tempstr.substring(0,pos)==strname)
{return tempstr.substring(pos+1);}}
return"";}
function addQQ(qq)
{window.open('lib/common/qq.php?qq='+qq,'_blank',"top=400,width=5,height=5");}
var oPopup;var PopupLen;var PopupWidth=244;var PopupHeight=146;var PopupTimer=0;var HideTimer=0;var PopupPosLeft=screen.width;var PopupPosTop=screen.height;function InitMsgBox(Msg)
{if(PopupTimer!=0||HideTimer!=0)return;PopupLen=0;oPopup=window.createPopup();var oPopupBody=oPopup.document.body;var titleContent="<div style=\"width:242px; height:142px;border:1px #AABBDB solid; background:#DEE4F1;font-family:arial;font-size:12px; text-align:left;\"><div style=\"width:238px;height:138px;margin:2px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_bg.gif) repear-x;border:1px #AABBDB solid;\"><div style=\"height:21px;\"><div style=\"float:left;width:210px;height:21px;margin:0;padding:0;background:url("+msgbox_logo+") 4px 2px no-repeat;\"><div style=\"text-indent:25px;margin-top:2px;color:#004BA8;\">"+name_jc+words_company_bg[202]+"</div></div><div style=\"float:right;margin:0;padding:0;width:26px;height:21px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_split.gif) left top no-repeat; \"><img src=\"/style/chat/"+company_bg_tpl+"/img/msgbox_close.gif\" onclick=\"parent.HideMsgBox()\" style=\"margin:3px 0 0 7px; cursor:pointer\" title=\""+words_company_bg[64]+"\"></div></div><div style=\"height:117px;background:url("+msgbox_bg_logo+") 140px 30px no-repeat;\"><div style=\"height:20px;margin-top:28px;color:#004BA8; text-indent:20px;\">"+Msg+"</div><div style=\"margin-top:30px;text-indent:20px;cursor:pointer;color:#f60;\" onclick='parent.PopWindow()'>"+words_company_bg[203]+"</div></div></div></div>";oPopupBody.innerHTML=titleContent;ShowMsgBox();}
function ShowMsgBox()
{PopupTimer=window.setInterval("MsgBox()",30);}
function MsgBox()
{PopupLen+=15;if(PopupLen>PopupHeight)
{clearInterval(PopupTimer);PopupTimer=0;PopupLen=PopupHeight;HideTimer=setTimeout("HideTimer=0;oPopup.hide();",8000);}
oPopup.show(screen.width-PopupWidth-2,screen.height-PopupLen,PopupWidth,PopupLen);}
function PopWindow()
{if(system=="vista")
{window.location.href="[CMD]popwnd";}
else
{window.focus();}
HideMsgBox();}
function HideMsgBox()
{clearTimeout(HideTimer);HideTimer=0;oPopup.hide();}
var tinet_oPopup;var tinet_PopupLen;var tinet_PopupWidth=244;var tinet_PopupHeight=146;var tinet_PopupTimer=0;var tinet_HideTimer=0;function tinet_InitMsgBox(msg){if(tinet_PopupTimer!=0||tinet_HideTimer!=0)return;tinet_PopupLen=0;tinet_oPopup=window.createPopup();var oPopupBody=tinet_oPopup.document.body;var titleContent="<div style=\"width:242px; height:142px;border:1px #AABBDB solid; background:#DEE4F1;font-family:arial;font-size:12px; text-align:left;\"><div style=\"width:238px;height:138px;margin:2px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_bg.gif) repear-x;border:1px #AABBDB solid;\"><div style=\"height:21px;\"><div style=\"float:left;width:210px;height:21px;margin:0;padding:0;background:url("+msgbox_logo+") 4px 2px no-repeat;\"><div style=\"text-indent:25px;margin-top:2px;color:#004BA8;\">"+name_jc+"来电提醒</div></div><div style=\"float:right;margin:0;padding:0;width:26px;height:21px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_split.gif) left top no-repeat; \"><img src=\"/style/chat/"+company_bg_tpl+"/img/msgbox_close.gif\" onclick=\"parent.tinet_HideMsgBox()\" style=\"margin:3px 0 0 7px; cursor:pointer\" title=\""+words_company_bg[64]+"\"></div></div><div style=\"height:117px;background:url("+msgbox_bg_logo+") 140px 30px no-repeat;\">"+msg+"</div></div></div>";oPopupBody.innerHTML=titleContent;tinet_ShowMsgBox();}
function tinet_ShowMsgBox(){tinet_PopupTimer=window.setInterval("tinet_MsgBox()",30);}
function tinet_MsgBox(){tinet_PopupLen+=15;if(tinet_PopupLen>tinet_PopupHeight){clearInterval(tinet_PopupTimer);tinet_PopupTimer=0;tinet_PopupLen=tinet_PopupHeight;tinet_HideTimer=setTimeout("tinet_HideTimer=0;tinet_oPopup.hide();",tinet_screen);}
tinet_oPopup.show(screen.width-tinet_PopupWidth-2,screen.height-tinet_PopupLen,tinet_PopupWidth,tinet_PopupLen);}
function tinet_HideMsgBox(){clearTimeout(tinet_HideTimer);tinet_HideTimer=0;tinet_oPopup.hide();}
function tinet_PopWindow(type,cust_id,phone){if(type==1){window.open("http://"+crm_host+"/crm_index.php?arg="+arg+"&sessid="+sid+"&tohs="+session_host,"_blank");}else if(type==2){window.open("http://"+crm_host+"/index.php?module=customer&action=info&arg="+arg+"&sessid="+sid+"&tohs="+session_host+"&cust_id="+cust_id+"&phone="+phone,"_blank");}else if(type==3){window.open("http://"+crm_host+"/index.php?module=customer&action=add&left_type=info&arg="+arg+"&sessid="+sid+"&tohs="+session_host,"_blank");}}
var birth_oPopup;var birth_PopupLen;var birth_PopupWidth=244;var birth_PopupHeight=146;var birth_PopupTimer=0;var birth_HideTimer=0;function birth_InitMsgBox(msg){if(birth_PopupTimer!=0||birth_HideTimer!=0)return;birth_PopupLen=0;birth_oPopup=window.createPopup();var oPopupBody=birth_oPopup.document.body;var titleContent="<div style=\"width:242px; height:142px;border:1px #AABBDB solid; background:#DEE4F1;font-family:arial;font-size:12px; text-align:left;\"><div style=\"width:238px;height:138px;margin:2px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_bg.gif) repear-x;border:1px #AABBDB solid;\"><div style=\"height:21px;\"><div style=\"float:left;width:210px;height:21px;margin:0;padding:0;background:url("+msgbox_logo+") 4px 2px no-repeat;\"><div style=\"text-indent:25px;margin-top:2px;color:#004BA8;\">"+name_jc+"生日提醒</div></div><div style=\"float:right;margin:0;padding:0;width:26px;height:21px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_split.gif) left top no-repeat; \"><img src=\"/style/chat/"+company_bg_tpl+"/img/msgbox_close.gif\" onclick=\"parent.birth_HideMsgBox()\" style=\"margin:3px 0 0 7px; cursor:pointer\" title=\""+words_company_bg[64]+"\"></div></div><div style=\"height:117px;background:url("+msgbox_bg_logo+") 140px 30px no-repeat;\">"+msg.join("")+"</div></div></div>";oPopupBody.innerHTML=titleContent;birth_ShowMsgBox();}
function birth_ShowMsgBox(){birth_PopupTimer=window.setInterval("birth_MsgBox()",30);}
function birth_MsgBox(){birth_PopupLen+=15;if(birth_PopupLen>birth_PopupHeight){clearInterval(birth_PopupTimer);birth_PopupTimer=0;birth_PopupLen=birth_PopupHeight;birth_HideTimer=setTimeout("birth_HideTimer=0;birth_oPopup.hide();",8000);}
birth_oPopup.show(screen.width-birth_PopupWidth-2,screen.height-birth_PopupLen,birth_PopupWidth,birth_PopupLen);}
function birth_HideMsgBox(){clearTimeout(birth_HideTimer);birth_HideTimer=0;birth_oPopup.hide();}
function birth_PopWindow(){window.open("http://"+sell_host+"/birthday_list.php?arg="+arg+"&sessid="+sid+"&host="+session_host+"&left_type=record","_blank");}
var kf_birth_oPopup;var kf_birth_PopupLen;var kf_birth_PopupWidth=244;var kf_birth_PopupHeight=146;var kf_birth_PopupTimer=0;var kf_birth_HideTimer=0;function kf_birth_InitMsgBox(msg){if(kf_birth_PopupTimer!=0||kf_birth_HideTimer!=0)return;kf_birth_PopupLen=0;kf_birth_oPopup=window.createPopup();var oPopupBody=kf_birth_oPopup.document.body;var titleContent="<div style=\"width:242px; height:142px;border:1px #AABBDB solid; background:#DEE4F1;font-family:arial;font-size:12px; text-align:left;\"><div style=\"width:238px;height:138px;margin:2px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_bg.gif) repear-x;border:1px #AABBDB solid;\"><div style=\"height:21px;\"><div style=\"float:left;width:210px;height:21px;margin:0;padding:0;background:url("+msgbox_logo+") 4px 2px no-repeat;\"><div style=\"text-indent:25px;margin-top:2px;color:#004BA8;\">"+name_jc+"生日提醒</div></div><div style=\"float:right;margin:0;padding:0;width:26px;height:21px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_split.gif) left top no-repeat; \"><img src=\"/style/chat/"+company_bg_tpl+"/img/msgbox_close.gif\" onclick=\"parent.kf_birth_HideMsgBox()\" style=\"margin:3px 0 0 7px; cursor:pointer\" title=\""+words_company_bg[64]+"\"></div></div><div style=\"height:117px;background:url("+msgbox_bg_logo+") 140px 30px no-repeat;\">"+msg+"</div></div></div>";oPopupBody.innerHTML=titleContent;kf_birth_ShowMsgBox();}
function kf_birth_ShowMsgBox(){kf_birth_PopupTimer=window.setInterval("kf_birth_MsgBox()",30);}
function kf_birth_MsgBox(){kf_birth_PopupLen+=15;if(kf_birth_PopupLen>kf_birth_PopupHeight){clearInterval(kf_birth_PopupTimer);kf_birth_PopupTimer=0;kf_birth_PopupLen=kf_birth_PopupHeight;kf_birth_HideTimer=setTimeout("kf_birth_HideTimer=0;kf_birth_oPopup.hide();",15000);}
kf_birth_oPopup.show(screen.width-kf_birth_PopupWidth-2,screen.height-kf_birth_PopupLen,kf_birth_PopupWidth,kf_birth_PopupLen);}
function kf_birth_HideMsgBox(){clearTimeout(kf_birth_HideTimer);kf_birth_HideTimer=0;kf_birth_oPopup.hide();}
var callsoft_oPopup;var callsoft_PopupLen;var callsoft_PopupWidth=244;var callsoft_PopupHeight=146;var callsoft_PopupTimer=0;var callsoft_HideTimer=0;function callsoft_InitMsgBox(customer,kf53call_caller,provice,city,operator){if(callsoft_PopupTimer!=0||callsoft_HideTimer!=0)return;callsoft_PopupLen=0;callsoft_oPopup=window.createPopup();var oPopupBody=callsoft_oPopup.document.body;var titleContent="<div style=\"width:242px; height:142px;border:1px #AABBDB solid; background:#DEE4F1;font-family:arial;font-size:12px; text-align:left;\"><div style=\"width:238px;height:138px;margin:2px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_bg.gif) repear-x;border:1px #AABBDB solid;\"><div style=\"height:21px;\"><div style=\"float:left;width:210px;height:21px;margin:0;padding:0;background:url("+msgbox_logo+") 4px 2px no-repeat;\"><div style=\"text-indent:25px;margin-top:2px;color:#004BA8;\">"+"随意拨来电提醒</div></div><div style=\"float:right;margin:0;padding:0;width:26px;height:21px;background:url(/style/chat/"+company_bg_tpl+"/img/msgbox_split.gif) left top no-repeat; \"><img src=\"/style/chat/"+company_bg_tpl+"/img/msgbox_close.gif\" onclick=\"parent.callsoft_HideMsgBox()\" style=\"margin:3px 0 0 7px; cursor:pointer\" title=\""+words_company_bg[64]+"\"></div></div><div style=\"height:117px;background:url("+msgbox_bg_logo+") 140px 30px no-repeat;\"><div><div style=\"font-size:17px;font-weight:bold;margin-top:5px;margin-bottom:7px;margin-left:4px\">"+customer+'</div><div style=\"font-size:15px;font-weight:bold;margin-bottom:5px;margin-left:4px\">'+kf53call_caller+'</div><div style=\"margin-left:4px;margin-bottom:3px;\">'+provice+'&nbsp;'+city+'&nbsp;'+operator+'</div><div style=\"text-align:center;\"><input type="button" style="background:url(/img/call-refuse.png) no-repeat; width:60px; height:30px; border:none; color:#fff; cursor:pointer;" onclick="parent.callsoft_refuse();" value="挂机"/><input type="button" style="background:url(/img/call-answer.png) no-repeat; margin-left:8px; width:60px; height:30px; border:none; color:#fff; cursor:pointer;" onclick="parent.callsoft_answer();" value="接听"/>'+"</div></div></div>";oPopupBody.innerHTML=titleContent;callsoft_ShowMsgBox();}
function callsoft_ShowMsgBox(){callsoft_PopupTimer=window.setInterval("callsoft_MsgBox()",30);}
function callsoft_MsgBox(){callsoft_PopupLen+=15;if(callsoft_PopupLen>callsoft_PopupHeight){clearInterval(callsoft_PopupTimer);callsoft_PopupTimer=0;callsoft_PopupLen=callsoft_PopupHeight;callsoft_HideTimer=setTimeout("callsoft_HideTimer=0;callsoft_oPopup.hide();",60000);}
callsoft_oPopup.show(screen.width-callsoft_PopupWidth-2,screen.height-callsoft_PopupLen,callsoft_PopupWidth,callsoft_PopupLen);}
function callsoft_HideMsgBox(){clearTimeout(callsoft_HideTimer);callsoft_HideTimer=0;callsoft_oPopup.hide();}
function callsoft_open(){window.open('go.php?arg='+arg+'&sys=suiyibo&url='+encodeURIComponent('index.php?module=soft&controller=soft&action=index&aaft=on'),'callsoft','height=380,width=250,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no');}
function callsoft_answer(){var xmlHttp;var async=true;var method='POST';var url="lib/KF_CALL/callsoft.php";var params="option=answer&id6d="+id6d+"&companyId="+company_id+"&caller="+kf53call_caller+"&callee="+kf53call_callee;if(window.XMLHttpRequest)
{xmlHttp=new XMLHttpRequest();}
else
{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlHttp.onreadystatechange=function()
{if(xmlHttp.readyState==4&&xmlHttp.status==200)
{var res=xmlHttp.responseText;var json=eval("("+res+")");if('success'===json.status){callsoft_open();callsoft_HideMsgBox();}}}
xmlHttp.open(method,url,async);xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlHttp.send(params);}
function callsoft_refuse(){var xmlHttp;var async=true;var method='POST';var url="lib/KF_CALL/callsoft.php";var params="option=refuse&id6d="+id6d+"&companyId="+company_id+"&caller="+kf53call_caller+"&callee="+kf53call_callee;if(window.XMLHttpRequest)
{xmlHttp=new XMLHttpRequest();}
else
{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlHttp.onreadystatechange=function()
{if(xmlHttp.readyState==4&&xmlHttp.status==200)
{var res=xmlHttp.responseText;var json=eval("("+res+")");if('success'===json.status){callsoft_HideMsgBox();}}}
xmlHttp.open(method,url,async);xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlHttp.send(params);}
function insert_flash(url,width,height)
{document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+width+'" height="'+height+'">\n');document.write('<param name="movie" value="'+url+'" />\n');document.write('<param name="quality" value="high" />\n');document.write('<param name="wmode" value="opaque">\n');document.write('<embed src="'+url+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"></embed>\n');document.write('</object>\n');}
function insert_snapshot(host)
{var daxie=get_systemdigits();if(navigator.userAgent.indexOf("MSIE")>-1&&daxie==32){var screen="";screen+='<OBJECT ID="snapShot" CLASSID="CLSID:926E4BA1-1977-44F8-96C4-4A67F79ABAE6" WIDTH="0" HEIGHT="0" >';screen+='</OBJECT>';document.getElementById('plugin_snapshot').innerHTML=screen;var host=host;var port="80";try{snapShot.showForm(host,port);var result=snapShot.returnSendResult();var res=(new Function('',"return "+result))();getSnapshotParam(res.picPath,res.picName,res.stateCode);}
catch(e)
{var res=confirm('是否立即下载截图插件?');if(res==true)
window.open('/download/53SnapShot.exe','');}}
else
{var m_isSendSnapshot=1;if(m_success==false)
{m_isSendSnapshot=0;}
var ss='';ss+='<OBJECT classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" WIDTH="0" HEIGHT="0" codebase="http://'+host+':80/download/jre-6u2-windows-i586-p-iftw.exe" MAYSCRIPT>';ss+='<param name="CODE" value="Snapshot.class">';ss+='<param name="CODEBASE" value="lib/snapshot">';ss+='<param name="ARCHIVE" value="js.jar,snapshot.jar?20090804">';ss+='<PARAM NAME="funcMame" VALUE="getSnapshotParam" >';ss+='<PARAM NAME="title" VALUE="53KF 截图" >';ss+='<PARAM NAME="host" VALUE="'+host+'" >';ss+='<PARAM NAME="isSend" VALUE="'+m_isSendSnapshot+'" >';ss+='<PARAM NAME="timeout" VALUE="10000" >';ss+='<PARAM NAME="type" VALUE="application/x-java-applet;version=1.3">';ss+='<EMBED type="application/x-java-applet;version=1.3" ';ss+=' CODE="Snapshot.class" ';ss+=' CODEBASE="lib/snapshot" ';ss+=' ARCHIVE="js.jar,snapshot.jar?20090804" ';ss+=' funcMame="getSnapshotParam" ';ss+=' title="53KF 截图" ';ss+=' host="'+host+'" ';ss+=' isSend="'+m_isSendSnapshot+'" ';ss+=' timeout="10000" ';ss+=' WIDTH="0" ';ss+=' HEIGHT="0" ';ss+=' pluginspage="http://java.sun.com/products/plugin/1.3/plugin-install.html" MAYSCRIPT></EMBED>';ss+='</OBJECT>';document.getElementById('plugin_snapshot').innerHTML=ss;}}
function insert_snapshot2()
{var m_isSendSnapshot=1;if(m_pID==1&&m_tabID==1)
{if(m_curGid==0)
{m_isSendSnapshot=0;}
else
{var visitor=getVisitorByGid(m_curGid);if(visitor.tid==0)
{m_isSendSnapshot=0;}}}
else if(m_tabID==2)
{if(m_iCurTalk=="-1")
{m_isSendSnapshot=0;}
else
{var talk=iGetTalkById(m_iCurTalk);if(talk.close==1)
{m_isSendSnapshot=0;}}}
if(system=="vista"&&sys_ver>=107)
{try
{var sendTip=words_company_bg[249];var saveTip=words_company_bg[250];var closeTip=words_company_bg[251];window.location.href="[CMD]snapshot,"+sendTip+","+saveTip+","+closeTip+","+host+","+m_isSendSnapshot+","+id6d;}catch(e){}}
else
{insert_snapshot_kf(host,id6d);}}
function snapshot_fun(){window.snapShot_obj=document.getElementById('snapShot_obj');snapShot_obj.host=snapshot_host;snapShot_obj.id6d=snapshot_rand_num;snapShot_obj.start();}
function ocx_callback(a,b,c){if(a==200){var img_url=snapshot_host+'/upload/snapshot/'+b+'/'+c;var urlcode='[IMG]'+img_url+'[/IMG]';to_insert_img_obj.sendimgmsg(urlcode);}}
function insert_snapshot3(host,rand_num){if(window.ActiveXObject||("ActiveXObject"in window)){if(document.getElementById('plugin_snapshot').innerHTML){snapshot_fun();}else{var plusCheck=false;try{new ActiveXObject('KFIESNAPSHOT.KfIESnapshotCtrl.1');plusCheck=true;}catch(e){var new_window_left=(window.screen.width-800)/2;window.open('/download/snapshot_show.php','newwindow','height='+window.screen.availHeight+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');return;}
snapshot_host=host;snapshot_rand_num=rand_num;if(plusCheck){var ss='';ss+='<object id="snapShot_obj" name="snapShot_obj" classid="clsid:4CC32CB3-E6D8-4042-8A69-5C7783B977D0" codebase="http://'+host+'/download/KFIESnapShot_v1.1.exe#version=1,0,0,2"></object>';document.getElementById('plugin_snapshot').innerHTML=ss;setTimeout(snapshot_fun,500);}}
return;}
if(navigator.userAgent.indexOf('Chrome')!=-1){var chrome_version=navigator.userAgent.substr(navigator.userAgent.indexOf('Chrome')+7,2);if(chrome_version>=45){var CrxEventFlag='myKfCapturteCustomEvent';var objFlag=document.getElementById(CrxEventFlag);if(objFlag===null){window.open('/download/snapshot_show.php?browser=chrome','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');return;}
if(!chrome_event_bind){snapshot_host=host;document.addEventListener('CaptureEventCallBack',function(evt){var _aoResult=evt.detail;ocx_callback(_aoResult.state,_aoResult.fpath,_aoResult.fname);});chrome_event_bind=true;}
var evt=document.createEvent("CustomEvent");evt.initCustomEvent('myKfCapturteCustomEvent',true,false,'{"host":"'+host+'","id6d":"'+rand_num+'"}');document.dispatchEvent(evt);}else{if(document.getElementById('plugin_snapshot').innerHTML){try{snapshot_fun();ocx_callback(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){alert(e);}}else{var ss='';ss+='<embed id="snapShot_obj" type="application/snapshot-plugin" width=0 height=0></embed>';document.getElementById('plugin_snapshot').style.display='block';document.getElementById('plugin_snapshot').innerHTML=ss;snapshot_host=host;snapshot_rand_num=rand_num;try{snapshot_fun();ocx_callback(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){var new_window_left=(window.screen.width-800)/2;var new_window_height=window.screen.availHeight-80;window.open('/download/snapshot_show.php?browser=chrome','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');}}}
return;}
if(navigator.userAgent.indexOf('Firefox')!=-1){if(document.getElementById('plugin_snapshot').innerHTML){try{snapshot_fun();ocx_callback(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){alert(e);}}else{var ss='';ss+='<embed id="snapShot_obj" type="application/FireFoxSnapshot-plugin" width=0 height=0></embed>';document.getElementById('plugin_snapshot').style.display='block';document.getElementById('plugin_snapshot').innerHTML=ss;snapshot_host=host;snapshot_rand_num=parseInt(rand_num);try{snapshot_fun();ocx_callback(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){var new_window_left=(window.screen.width-800)/2;var new_window_height=window.screen.availHeight-80;window.open('/download/snapshot_show.php?browser=firefox','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');}}}else{alert('很抱歉，截图功能目前仅支持IE、谷歌、火狐内核浏览器！');return;}}
function snapshot_fun_kf(){window.snapShot_obj=document.getElementById('snapShot_obj');snapShot_obj.host=snapshot_host;snapShot_obj.id6d=snapshot_rand_num;snapShot_obj.start();}
function ocx_callback_kf(a,b,c){if(a==200){getSnapshotParam(b,c,a);}}
function insert_snapshot_kf(host,rand_num){if(window.ActiveXObject||("ActiveXObject"in window)){if(document.getElementById('plugin_snapshot').innerHTML){snapshot_fun_kf();}else{var plusCheck=false;try{new ActiveXObject('KFIESNAPSHOT.KfIESnapshotCtrl.1');plusCheck=true;}catch(e){var new_window_left=(window.screen.width-800)/2;window.open('/download/snapshot_show.php','newwindow','height='+window.screen.availHeight+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');return;}
snapshot_host=host;snapshot_rand_num=rand_num;if(plusCheck){var ss='';ss+='<object id="snapShot_obj" name="snapShot_obj" classid="clsid:4CC32CB3-E6D8-4042-8A69-5C7783B977D0" codebase="http://'+host+'/download/KFIESnapShot_v1.1.exe#version=1,0,0,2"></object>';document.getElementById('plugin_snapshot').innerHTML=ss;setTimeout(snapshot_fun_kf,500);}}}else if(navigator.userAgent.indexOf('Chrome')!=-1){if(document.getElementById('plugin_snapshot').innerHTML){try{snapshot_fun_kf();ocx_callback_kf(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){alert(e);}}else{var ss='';ss+='<embed id="snapShot_obj" type="application/snapshot-plugin" width=0 height=0></embed>';document.getElementById('plugin_snapshot').style.display='block';document.getElementById('plugin_snapshot').innerHTML=ss;snapshot_host=host;snapshot_rand_num=rand_num;try{snapshot_fun_kf();ocx_callback_kf(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){var new_window_left=(window.screen.width-800)/2;var new_window_height=window.screen.availHeight-80;window.open('/download/snapshot_show.php?browser=chrome','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');}}}else if(navigator.userAgent.indexOf('Firefox')!=-1){if(document.getElementById('plugin_snapshot').innerHTML){try{snapshot_fun_kf();ocx_callback_kf(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){alert(e);}}else{var ss='';ss+='<embed id="snapShot_obj" type="application/FireFoxSnapshot-plugin" width=0 height=0></embed>';document.getElementById('plugin_snapshot').style.display='block';document.getElementById('plugin_snapshot').innerHTML=ss;snapshot_host=host;snapshot_rand_num=parseInt(rand_num);try{snapshot_fun_kf();ocx_callback_kf(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){var new_window_left=(window.screen.width-800)/2;var new_window_height=window.screen.availHeight-80;window.open('/download/snapshot_show.php?browser=firefox','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');}}}else{alert('很抱歉，截图功能目前仅支持IE、谷歌、火狐内核浏览器！');}}
function rpc(url)
{var rpcImage=new Image();try
{rpcImage.onload=function(){};rpcImage.onerror=function(){};}catch(e){}
try
{rpcImage.src=url+"&"+(new Date()).getTime();}catch(e){}}
function setCookie2(name,value)
{var today=new Date();var expires=new Date();expires.setTime(today.getTime()+1000*60*60*24*365);document.cookie=name+"="+escape(value)+"; expires="+expires.toGMTString();}
function setCookie3(name,value,time,path,domain)
{var today=new Date();var expires=new Date();expires.setTime(today.getTime()+time);document.cookie=name+"="+escape(value)+"; expires="+expires.toGMTString()+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"");}
function getCookie2(name)
{var search=name+"=";if(document.cookie.length>0)
{offset=document.cookie.indexOf(search);if(offset!=-1)
{offset+=search.length
end=document.cookie.indexOf(";",offset)
if(end==-1)
{end=document.cookie.length;}
return unescape(document.cookie.substring(offset,end));}}
return"";}
var browser=detectBrowser();function detectBrowser()
{var ret="ie6";var user_agent=navigator.userAgent;if(user_agent.indexOf("compatible")>-1)
{if(user_agent.indexOf("MSIE 6.0")>-1)
{ret="ie6";}
else if(user_agent.indexOf("MSIE 7.0")>-1)
{ret="ie7";}
else if(user_agent.indexOf("MSIE 8.0")>-1)
{ret="ie8";}}
else if(user_agent.indexOf("Gecko")>-1)
{ret="firefox";}
else if(user_agent.indexOf("Opera")>-1)
{ret="firefox";}
return ret;}
function get_search(url)
{var realSearch=new Array('神马','手机神马','手机百度','手机搜狗','手机搜狗','手机新浪网','手机雅虎','手机有道','手机搜搜','手机360搜索','手机360搜索',"Google","Google","Google网盟","百度网盟","百度知道","Baidu","Baidu","3721","3721","Yisou","Sogou","Sina","Sina","Yahoo","Tom","Tom","Youdao","SOSO","Bing",'360','360','360','360');var search=new Array('sm.cn','m.sm.cn','m.baidu.com','m.sogou.com','wap.sogou.com','3g.sina.com.cn','m.yahoo.com','m.youdao.com','m.soso.com','m.so.com','m.haosou.com',"google.com","google.cn","googleads.g.doubleclick.net","cpro.baidu.com","zhidao.baidu.com","baidu.com","baidu.com","3721.com","3721.com","yisou.com","sogou.com","iask.com","sina.com","yahoo.com","search.tom.com","search.tom.com","youdao.com","soso.com","cn.bing.com",'360.cn','so.com','sou.com','haosou.com');var len=search.length;for(var i=0;i<len;i++)
{if(url.indexOf(search[i])!=-1)
{return realSearch[i];}}
return"";}
function get_domain(url)
{var pos=url.indexOf("http://");if(pos==0)
{var pos1=url.indexOf("/",7);if(pos1==-1)
{return url.substr(7);}
else
{var len=pos1-pos-7;return url.substr(7,len);}}
else
{var posHttps=url.indexOf("https://");if(0==posHttps){var pos1=url.indexOf("/",8);if(pos1==-1)
{return url.substr(8);}
else
{var len=pos1-8;return url.substr(8,len);}}else{pos=url.indexOf("www.");if(pos==0)
{var pos1=url.indexOf("/");if(pos1==-1)
{return url.substr(0);}
else
{return url.substr(0,pos1);}}}}
pos=url.indexOf("/");if(pos==-1)
{return url;}
else
{return url.substr(0,pos);}}
function preLoadImages()
{var len=arguments.length;var imgs=new Array();for(var i=0;i<len;i++)
{imgs[i]=new Image();imgs[i].src=arguments[i];}}
function failMsg(msg)
{var msg=UrlDecode2(msg);msg=msg.replace(/<br>/g," ");return msg;}
function createDays(month_id,day_id)
{var month=document.getElementById(month_id).value;switch(month)
{case'1':case'3':case'5':case'7':case'8':case'10':case'12':createDaysHtml(day_id,31);break;case'2':createDaysHtml(day_id,29);break;case'4':case'6':case'9':case'11':createDaysHtml(day_id,30);break;default:break;}}
function createDaysHtml(day_id,days)
{var obj=document.getElementById(day_id);if(browser=="firefox")
{var optionArr=new Array();for(var i=1;i<=days;i++)
{var html="<option>"+i+"</option>";optionArr.push(html);}
obj.innerHTML=optionArr.join("");return;}
obj.innerHTML="";for(var i=1;i<=days;i++)
{var optionNode=document.createElement("option");optionNode.innerText=i;optionNode.value=i;obj.appendChild(optionNode);}}
function createFreeze(id,top,left,height,width)
{var voteFreezeDiv=document.createElement("div");voteFreezeDiv.id=id;voteFreezeDiv.style.top=top+"px";voteFreezeDiv.style.left=left+"px";voteFreezeDiv.style.height=height+"px";voteFreezeDiv.style.width=width+"px";voteFreezeDiv.style.border="none";voteFreezeDiv.style.position="absolute";voteFreezeDiv.style.backgroundColor="#000";voteFreezeDiv.style.margin=0;voteFreezeDiv.style.padding=0;voteFreezeDiv.style.zIndex=9998;voteFreezeDiv.style.opacity="0.2";voteFreezeDiv.style.filter="alpha(opacity=20)";voteFreezeDiv.style.duration=1000;voteFreezeDiv.innerHTML="<div style='position:absolute;z-index:-1;left:-1px;top:0;width:100%;height:100%;'><iframe style='background:#000;width:100%;height:100%;filter:alpha(opacity=0);-moz-opacity:0;' frameborder='0'></iframe></div>";document.body.insertBefore(voteFreezeDiv,document.body.firstChild);}
function createFreeze2(id,top,left,height,width)
{var voteFreezeDiv=document.createElement("div");voteFreezeDiv.id=id;voteFreezeDiv.style.top=top+"px";voteFreezeDiv.style.left=left+"px";voteFreezeDiv.style.height=height+"px";voteFreezeDiv.style.width=width+"px";voteFreezeDiv.style.border="none";voteFreezeDiv.style.position="absolute";voteFreezeDiv.style.backgroundColor="#000";voteFreezeDiv.style.margin=0;voteFreezeDiv.style.padding=0;voteFreezeDiv.style.zIndex=9998;voteFreezeDiv.style.opacity="0.6";voteFreezeDiv.style.filter="alpha(opacity=60)";voteFreezeDiv.style.duration=1000;voteFreezeDiv.innerHTML="<div style='position:absolute;z-index:-1;left:-1px;top:0;width:100%;height:100%;'><iframe style='background:#F0F9FB;width:100%;height:100%;filter:alpha(opacity=0);-moz-opacity:0;' frameborder='0'></iframe></div>";document.body.insertBefore(voteFreezeDiv,document.body.firstChild);}
function createInsertDiv(type,height,width,words)
{var insert_div=document.createElement("div");insert_div.id=type+"_insert_div";if(type=="pivt"){insert_div.style.top=Math.round((height-278)/2)+"px";insert_div.style.left=Math.round((width-350)/2)+"px";insert_div.style.height="278px";insert_div.style.width="350px";insert_div.style.position="absolute";insert_div.style.fontSize="12px";insert_div.style.zIndex=9997;}else if(type=="guide"){insert_div.style.top=Math.round((height-335)/2)+"px";insert_div.style.left=Math.round((width-620)/2)+"px";insert_div.style.height="335px";insert_div.style.width="620px";insert_div.style.position="absolute";insert_div.style.fontSize="12px";insert_div.style.zIndex=9999;}else if(type=="notice"){insert_div.style.top=Math.round((height-231)/2)+"px";insert_div.style.left=Math.round((width-535)/2)+"px";insert_div.style.height="231px";insert_div.style.width="535px";insert_div.style.position="absolute";insert_div.style.fontSize="12px";insert_div.style.zIndex=9999;}else if(type=="link_dz8"){insert_div.style.top=Math.round((height-280)/2)+"px";insert_div.style.left=Math.round((width-290)/2)+"px";insert_div.style.height="180px";insert_div.style.width="290px";insert_div.style.border="1px solid #3399CC";insert_div.style.position="absolute";insert_div.style.fontSize="14px";insert_div.style.background="url(../img/pf_bg.gif) repeat-x";insert_div.style.zIndex=9999;}else if(type=="link_dz9"){insert_div.style.top=Math.round((height-280)/2)+"px";insert_div.style.left=Math.round((width-290)/2)+"px";insert_div.style.height="180px";insert_div.style.width="290px";insert_div.style.border="1px solid #000";insert_div.style.borderRadius="5px";insert_div.style.overflow="hidden";insert_div.style.position="absolute";insert_div.style.fontSize="14px";insert_div.style.background="#f9f3f1";insert_div.style.zIndex=9999;}else if(type=="link_dz10"){insert_div.style.top=Math.round((height-280)/2)+"px";insert_div.style.left=Math.round((width-290)/2)+"px";insert_div.style.height="180px";insert_div.style.width="290px";insert_div.style.border="1px solid #909fa8";insert_div.style.borderRadius="10px";insert_div.style.overflow="hidden";insert_div.style.position="absolute";insert_div.style.fontSize="14px";insert_div.style.background="#fff";insert_div.style.zIndex=9999;}else{insert_div.style.top=Math.round((height-180)/2)+"px";insert_div.style.left=Math.round((width-360)/2)+"px";insert_div.style.height="180px";insert_div.style.width="360px";insert_div.style.border="1px solid #3399CC";insert_div.style.position="absolute";insert_div.style.fontSize="14px";insert_div.style.background="url(../img/pf_bg.gif) repeat-x";insert_div.style.zIndex=9999;}
if(type=="link")
{insert_div.innerHTML="<div style='float:right;margin-top:5px;margin-right:3px;width:12px;height:12px;cursor:pointer;background:url(../img/pf_close.gif) no-repeat;' onclick='destryInsertDiv(\"link\")'></div><div style='margin:10px 20px;'><table cellpadding='0' cellspacing='0' border='0' width='100%' align='center'><tr align='center'><td>"+words[4]+"</td></tr><tr align='center' style='height:30px;'><td><input id='insert_link_url' type='text' value='http://' style='width:250px;' onkeypress='if(event.keyCode==13){getLinkContent();try{window.focus();}catch(e){}return false;}'/></td></tr><tr align='center'><td>"+words[3]+"</td></tr><tr align='center' style='height:30px;'><td><input id='insert_link_text' type='text' style='width:250px;' onkeypress='if(event.keyCode==13){getLinkContent();try{window.focus();}catch(e){}return false;}'/></td></tr><tr align='center'><td>"+words[2]+"</td></tr><tr style='height:30px;color:red;' align='center'><td><span><input type='button' value='"+words[1]+"' onclick='getLinkContent()' /></span><input type='button' value='"+words[0]+"' onclick='destryInsertDiv(\"link\")' /></td></tr></div>";}
else if(type=="link_dz8")
{insert_div.innerHTML="<div style='float:right;margin-top:8px;margin-right:8px;width:12px;height:12px;cursor:pointer;background:url(../style/chat/minichat2/img/minchat_ns_dz8.png) -18px 0 no-repeat;' onclick='destryInsertDiv(\"link_dz8\")'></div><div style=''><p style='margin: 0;background: #139ea1;color: #fff;font-size: 14px;line-height: 30px;text-align: left;padding-left: 10px;'>发送链接</p><table cellpadding='0' cellspacing='8' border='0' width='100%' align='center' style='padding-top: 5px;'><tr><td width='70' style=' font-size:12px;'>"+words[4]+"</td><td style='text-align: left; padding-right:5px;'><input id='insert_link_url' type='text' value='http://' style='width:205px; line-height:22px; height:22px;' onkeypress='if(event.keyCode==13){getLinkContent(\"link_dz8\");try{window.focus();}catch(e){}return false;}'/></tr><tr><td style=' font-size:12px;'>"+words[3]+"</td><td style='text-align: left; padding-right:5px;'><input id='insert_link_text' type='text' style='width:205px;height:22px; height:22px;' onkeypress='if(event.keyCode==13){getLinkContent(\"link_dz8\");try{window.focus();}catch(e){}return false;}'/></td></tr><tr><td></td><td style='text-align: left; font-size:12px;padding-bottom: 5px; color:red;'>"+words[2]+"</td></tr><tr><td  colspan='2' style=' text-align:right;'><span style='padding-right:5px;'><input type='button' value='"+words[1]+"' onclick='getLinkContent(\"link_dz8\")' style='width: 78px;height: 31px;background:url(../style/chat/minichat2/img/dialog_send.png) no-repeat; border:none; text-indent:100em;' /></span></td></tr></div>";}
else if(type=="link_dz9")
{insert_div.innerHTML="<div style='float:right;margin-top:8px;margin-right:8px;width:12px;height:12px;cursor:pointer;background:url(../style/chat/minichat2/img/minchat_ns_dz8.png) -18px 0 no-repeat;' onclick='destryInsertDiv(\"link_dz9\")'></div><div style=''><p style='margin: 0;background: #000;color: #fff;font-size: 14px;line-height: 30px;text-align: left;padding-left: 10px;'>发送链接</p><table cellpadding='0' cellspacing='8' border='0' width='100%' align='center' style='padding-top: 5px;'><tr><td width='70' style=' font-size:12px;'>"+words[4]+"</td><td style='text-align: left; padding-right:5px;'><input id='insert_link_url' type='text' value='http://' style='width:205px; line-height:22px; height:22px;' onkeypress='if(event.keyCode==13){getLinkContent(\"link_dz9\");try{window.focus();}catch(e){}return false;}'/></tr><tr><td style=' font-size:12px;'>"+words[3]+"</td><td style='text-align: left; padding-right:5px;'><input id='insert_link_text' type='text' style='width:205px;height:22px; height:22px;' onkeypress='if(event.keyCode==13){getLinkContent(\"link_dz9\");try{window.focus();}catch(e){}return false;}'/></td></tr><tr><td></td><td style='text-align: left; font-size:12px;padding-bottom: 5px; color:red;'>"+words[2]+"</td></tr><tr><td  colspan='2' style=' text-align:center;'><span style='padding-right:5px;'><input type='button' value='"+words[1]+"' onclick='getLinkContent(\"link_dz9\")' style='width: 77px;height: 30px;background:url(../style/chat/minichat2/img/dialog_send9.png) no-repeat; border:none; color:#000; font-size:14px' /></span></td></tr></div>";}
else if(type=="link_dz10")
{insert_div.innerHTML="<div style='float:right;margin-top:6px;margin-right:6px;width:15px;height:15px;cursor:pointer;background:url(../style/chat/minichat2/img/close_llt.png) right center no-repeat;' onclick='destryInsertDiv(\"link_dz10\")'></div><div style=''><p style='margin: 0;background:url(../style/chat/minichat2/img/dialog_top_bg.png) repeat-x;color: #525c63;font-size: 14px;line-height: 30px;text-align: left;padding-left: 10px;'>发送链接</p><table cellpadding='0' cellspacing='8' border='0' width='100%' align='center' style='padding-top: 5px;'><tr><td width='70' style=' font-size:12px;'>"+words[4]+"</td><td style='text-align: left; padding-right:5px;'><input id='insert_link_url' type='text' value='http://' style='width:205px; line-height:22px; height:22px;' onkeypress='if(event.keyCode==13){getLinkContent(\"link_dz10\");try{window.focus();}catch(e){}return false;}'/></tr><tr><td style=' font-size:12px;'>"+words[3]+"</td><td style='text-align: left; padding-right:5px;'><input id='insert_link_text' type='text' style='width:205px;height:22px; height:22px;' onkeypress='if(event.keyCode==13){getLinkContent(\"link_dz10\");try{window.focus();}catch(e){}return false;}'/></td></tr><tr><td></td><td style='text-align: left; font-size:12px;padding-bottom: 5px; color:red;'>"+words[2]+"</td></tr><tr><td  colspan='2' style=' text-align:center;'><span><input type='button' value='"+words[1]+"' onclick='getLinkContent(\"link_dz10\")' style='width: 78px;height: 27px;background:url(../style/chat/minichat2/img/btn_send1.png) no-repeat; border:none; color:#fff; font-size:14px' /></span></td></tr></div>";}
else if(type=="image")
{insert_div.innerHTML="<div style='float:right;margin-top:5px;margin-right:3px;width:12px;height:12px;cursor:pointer;background:url(../img/pf_close.gif) no-repeat;' onclick='destryInsertDiv(\"image\")'></div><div style='margin:10px 20px;'><table cellpadding='0' cellspacing='0' border='0' width='100%' align='center'><tr align='center' style='height:50px;'><td>"+words[2]+"</td></tr><tr align='center'><td><input id='insert_image_url' type='text' value='http://' style='width:250px;' onkeypress='if(event.keyCode==13){getImageContent();try{window.focus();}catch(e){}return false;}'/></td></tr><tr align='center' style='height:70px;'><td><span style='padding-right:20px;'><input type='button' value='"+words[1]+"' onclick='getImageContent()' /></span><input type='button' value='"+words[0]+"' onclick='destryInsertDiv(\"image\")' /></td></tr></div>";}
else if(type=="block")
{insert_div.innerHTML="<div style='float:right;margin-top:5px;margin-right:3px;width:12px;height:12px;cursor:pointer;background:url(../img/pf_close.gif) no-repeat;' onclick='destryInsertDiv(\"block\")'></div><div style='margin:10px 20px;'><table cellpadding='0' cellspacing='0' border='0' width='100%' align='center'><tr align='center' style='height:40px;'><td>"+words[3]+"</td></tr><tr align='center'><td><input id='insert_block_url' type='text' style='width:250px;' onkeypress='if(event.keyCode==13){getBlockContent();try{window.focus();}catch(e){}return false;}'/></td></tr><tr align='center' style='height:40px;color:red;'><td>"+words[2]+"</td></tr><tr align='center'><td><span style='padding-right:20px;'><input type='button' value='"+words[1]+"' onclick='getBlockContent()' /></span><input type='button' value='"+words[0]+"' onclick='destryInsertDiv(\"block\")' /></td></tr></div>";}
else if(type=="pivt")
{insert_div.innerHTML="<div id='advance_ivt' class='advance_dialog_main' style='width:350px;'> <b class='r1'></b> <b class='r2'></b> <b class='r3'></b> <b class='r4'></b><div class='title'><div id='advance_ivt_drag' style='float:left;width:310px;cursor:move;'>"+words_company_bg[423]+"</div><div style='float:right;'><a class='close_btn' onclick='destryInsertDiv(\"pivt\")' title='"+words_company_bg[424]+"'></a></div></div><div class='main_list'>"+"<div class='list01'><span class='txt' style='width:60px;'>"+words_company_bg[425]+"：</span><select id='advance_ivt_state'><option value='0' selected>"+words_company_bg[426]+"</option><option value='3'>"+words_company_bg[427]+"</option><option value='4'>"+words_company_bg[428]+"</option></select></div>"+"<div class='list01'><span class='txt' style='width:60px;'>"+words_company_bg[429]+"：</span><input type='text' id='advance_ivt_ipaddr' class='ttns' style='width: 240px;' value='"+words[0]+"'/></div>"+"<div class='list01'><span class='txt' style='width:60px;'>"+words_company_bg[430]+"：</span><input type='text' id='advance_ivt_talkpage' class='ttns' style='width: 240px;' value='"+words[1]+"'/></div>"+"<div class='list02'><span class='txt' style='width:60px;text-align:right;'>"+words_company_bg[431]+"：</span><textarea id='insert_pivt_url' class='textarea' style='width:235px;height:100px;' onkeypress='if(event.keyCode==13){getpIvtContent();try{window.focus();}catch(e){}return false;}'>"+words[2]+"</textarea></div>"+"<div class='list03' style='padding-left:60px;'><input id='send_ivts' type='button' class='btns' value='"+words_company_bg[432]+"' onclick='getpIvtContent()'/>&nbsp;<span id='q_ivt_div' style='color:red;display:none;'><img src='../img/setting/wait.gif' width='30' height='23' align='top'><span id='q_ivt_cnt'>&nbsp;</span></span></div></div></div>";}
else if(type=="ivt")
{insert_div.innerHTML="<div style='float:right;margin-top:5px;margin-right:3px;width:12px;height:12px;cursor:pointer;background:url(../img/pf_close.gif) no-repeat;' onclick='destryInsertDiv(\"ivt\")'></div><div style='margin:10px 20px;'><table cellpadding='0' cellspacing='0' border='0' width='100%' align='center'><tr align='center' style='height:40px;'><td>"+words[3]+"</td></tr><tr align='center'><td><input id='insert_ivt_url' type='text' value='"+words[4]+"' style='width:250px;' onkeydown='if(event.keyCode==13){getIvtContent();try{window.focus();}catch(e){}return false;}'/></td></tr><tr align='center' style='height:40px;color:red;'><td>"+words[2]+"</td></tr><tr align='center'><td><span style='padding-right:20px;'><input type='button' value='"+words[1]+"' onclick='getIvtContent()' /></span><input type='button' value='"+words[0]+"' onclick='destryInsertDiv(\"ivt\")' /></td></tr></div>";}
else if(type=="name")
{insert_div.innerHTML="<div style='float:right;margin-top:5px;margin-right:3px;width:12px;height:12px;cursor:pointer;background:url(../img/pf_close.gif) no-repeat;' onclick='destryInsertDiv(\"name\")'></div><div style='margin:10px 20px;'><table cellpadding='0' cellspacing='0' border='0' width='100%' align='center'><tr align='center' style='height:50px;'><td>"+words[2]+"</td></tr><tr align='center'><td><input id='insert_name_url' type='text' value='"+words[3]+"' style='width:250px;' onkeypress='if(event.keyCode==13){getNameContent();try{window.focus();}catch(e){}return false;}'/></td></tr><tr align='center' style='height:70px;'><td><span style='padding-right:20px;'><input type='button' value='"+words[1]+"' onclick='getNameContent()' /></span><input type='button' value='"+words[0]+"' onclick='destryInsertDiv(\"name\")' /></td></tr></div>";}
else if(type=="remark")
{insert_div.innerHTML="<div style='float:right;margin-top:5px;margin-right:3px;width:12px;height:12px;cursor:pointer;background:url(../img/pf_close.gif) no-repeat;' onclick='destryInsertDiv(\"remark\")'></div><div style='margin:10px 20px;'><table cellpadding='0' cellspacing='0' border='0' width='100%' align='center'><tr align='center' style='height:50px;'><td>"+words[2]+"</td></tr><tr align='center'><td><input id='insert_remark_url' type='text' style='width:250px;' onkeypress='if(event.keyCode==13){getRemarkContent();try{window.focus();}catch(e){}return false;}'/></td></tr><tr align='center' style='height:70px;'><td><span style='padding-right:20px;'><input type='button' value='"+words[1]+"' onclick='getRemarkContent()' /></span><input type='button' value='"+words[0]+"' onclick='destryInsertDiv(\"remark\")' /></td></tr></div>";}else if(type=="guide"){insert_div.innerHTML="<iframe src='http://"+host+"/guide/iframe_guide.php?arg="+arg+"&sessid="+sid+"' frameborder='0' scrolling='no' width='620' height='335'></iframe>";}else if(type=="notice"){insert_div.innerHTML="<iframe src='http://"+host+"/notice/iframe_notice.php?arg="+arg+"&sessid="+sid+"' frameborder='0' scrolling='no' width='535' height='261'></iframe>";}
if(type=="pivt"){document.body.insertBefore(insert_div,document.body.firstChild);$("#advance_ivt").draggable({handle:"#advance_ivt_drag"});}else{var insert_freeze=document.getElementById("insert_freeze");document.body.insertBefore(insert_div,insert_freeze);}
var obj=document.getElementById("insert_"+type+"_url");try{obj.focus();}catch(e){}
try{var a=obj.createTextRange();var len=obj.value.length;a.moveStart('character',len);a.collapse(true);a.select();}catch(e){}}
function destryInsertDiv(type){var obj=document.getElementById(type+"_insert_div");if(obj!=null){obj.parentNode.removeChild(obj);}
obj=document.getElementById("insert_freeze");if(obj!=null){obj.parentNode.removeChild(obj);}}
function destryGuide(type,isinit){var obj=document.getElementById(type+"_insert_div");if(obj!=null){obj.parentNode.removeChild(obj);}
obj=document.getElementById("insert_freeze");if(obj!=null){obj.parentNode.removeChild(obj);}
if(isinit==false){$.ajax({type:"GET",url:'/guide/iframe_guide.php?action=initall&arg='+arg,dataType:"json",success:function(response){}});}}
function getProvCity(ipAddr)
{var p_code=0;var c_code=0;var provlist=eval("statename"+".split(',')");var codelist=eval("statecode"+".split(',')");for(var i=0;i<provlist.length;i++)
{if(ipAddr.indexOf(provlist[i])!=-1)
{var len=provlist[i].length;p_code=codelist[i];break;}}
if(p_code==0)return{prov:p_code,city:c_code};var citylist=eval("cityname"+p_code+".split(',')");var codelist1=eval("citycode"+p_code+".split(',')");for(var i=0;i<citylist.length;i++)
{if(ipAddr.indexOf(citylist[i],len)!=-1)
{c_code=codelist1[i];break;}}
return{prov:p_code,city:c_code};}
function getElementPos(el)
{var ua=navigator.userAgent.toLowerCase();var isOpera=(ua.indexOf('opera')!=-1);var isIE=(ua.indexOf('msie')!=-1&&!isOpera);if(el.parentNode===null||el.style.display=='none')return false;var parent=null;var pos=[];var box;if(el.getBoundingClientRect){box=el.getBoundingClientRect();if(isIE){var fixTop=-8;var fixLeft=25;}else{var fixTop=-6;var fixLeft=27;}
var scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop)+fixTop;var scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)+fixLeft;return{x:box.left+scrollLeft,y:box.top+scrollTop};}
else if(document.getBoxObjectFor){box=document.getBoxObjectFor(el);var borderLeft=(el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0;var borderTop=(el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0;pos=[box.x-borderLeft,box.y-borderTop];}else{pos=[el.offsetLeft,el.offsetTop];parent=el.offsetParent;if(parent!=el){while(parent)
{pos[0]+=parent.offsetLeft;pos[1]+=parent.offsetTop;parent=parent.offsetParent;}}
if(ua.indexOf('opera')!=-1||(ua.indexOf('safari')!=-1&&el.style.position=='absolute')){pos[0]-=document.body.offsetLeft;pos[1]-=document.body.offsetTop;}}
if(el.parentNode){parent=el.parentNode;}else{parent=null;}
while(parent&&parent.tagName!='BODY'&&parent.tagName!='HTML')
{pos[0]-=parent.scrollLeft;pos[1]-=parent.scrollTop;if(parent.parentNode){parent=parent.parentNode;}else{parent=null;}}
return{x:pos[0],y:pos[1]};}
function windowBindEvent(name,handler){if(window.attachEvent){window.attachEvent("on"+name,handler);}else{window.addEventListener(name,handler,false);}}
var m_joinNames=[];function getWorkerNameById6d(id6d,type){for(var i=0;i<m_joinNames.length;i++){var obj=m_joinNames[i];if(obj.jid6d==id6d){return obj.name;}}
var httprequest=createHttpRequest();if(httprequest!=null){var url="impl/rpc_worker_info.php";var senddata="id6d="+id6d+"&check_id=11917718fe939f3106d35a30074bcd30";httprequest.open("POST",url,false);httprequest.setRequestHeader("Content-Length",senddata.length);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);var dom=httprequest.responseXML,rspNodes=XMLGetNodes(dom,"Response"),rspNode=XMLGetNode(rspNodes,0);if(rspNode!=null){var ecode=XMLGetNamedAttr(rspNode,"ecode");if(ecode==0){var name=type=="visitor"?XMLGetNamedAttr(rspNode,"bname"):XMLGetNamedAttr(rspNode,"name");m_joinNames.push({'jid6d':id6d,'name':name});}}}
return name;}
function get_systemdigits()
{var agent=navigator.userAgent.toLowerCase();if(agent.indexOf("win64")>=0||agent.indexOf("wow64")>=0)return"64";return"32";}
function htmlspecialchars(string,quote_style,charset,double_encode)
{var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'||quote_style===null){quote_style=2;}
string=string.toString();if(double_encode!==false){string=string.replace(/&/g,'&amp;');}
string=string.replace(/</g,'&lt;').replace(/>/g,'&gt;');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true;}
if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true;}
else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]];}}
quote_style=optTemp;}
if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/'/g,'&#039;');}
if(!noquotes){string=string.replace(/"/g,'&quot;');}
return string;}
function analyseSearchEngine(url){var searchEngineConfig={'baidu':{'company':'百度','mainHost':'baidu.com','default':{'host':'baidu.com','name':'百度','icon':'baidu'},'sub':{'www.baidu.com':{'host':'www.baidu.com','name':'百度','icon':'baidu'},'m.baidu.com':{'host':'m.baidu.com','name':'手机百度','icon':'baidu'}}},'google':{'company':'谷歌','mainHost':'google.com','default':{'host':'google.com','name':'谷歌','icon':'google'},'sub':{'www.google.com.hk':{'host':'www.google.com.hk','name':'谷歌','icon':'google'},'www.google.com':{'host':'www.google.com','name':'谷歌','icon':'google'}}},'sogou':{'company':'搜狗','mainHost':'sogou.com','default':{'host':'sogou.com','name':'搜狗','icon':'sogou'},'sub':{'www.sogou.com':{'host':'www.sogou.com','name':'搜狗','icon':'sogou'},'m.sogou.com':{'host':'m.sogou.com','name':'手机搜狗','icon':'sogou'}}},'haosou':{'company':'好搜','mainHost':'haosou.com','default':{'host':'haosou.com','name':'好搜','icon':'haosou'},'sub':{'www.haosou.com':{'host':'www.haosou.com','name':'好搜','icon':'haosou'},'m.haosou.com':{'host':'m.haosou.com','name':'手机好搜','icon':'haosou'}}},'youdao':{'company':'有道','mainHost':'youdao.com','default':{'host':'youdao.com','name':'有道','icon':'youdao'},'sub':{'www.youdao.com':{'host':'www.youdao.com','name':'有道','icon':'youdao'},'m.youdao.com':{'host':'m.youdao.com','name':'手机有道','icon':'youdao'}}},'yahoo':{'company':'雅虎','mainHost':'yahoo.com','default':{'host':'yahoo.com','name':'雅虎','icon':'yahoo'},'sub':{'www.yahoo.com':{'host':'www.yahoo.com','name':'雅虎','icon':'yahoo'},'m.yahoo.com':{'host':'m.yahoo.com','name':'手机雅虎','icon':'yahoo'}}},'bing':{'company':'必应','mainHost':'bing.com','default':{'host':'bing.com','name':'必应','icon':'bing'},'sub':{'cn.bing.com':{'host':'cn.bing.com','name':'必应','icon':'bing'}}},'soso':{'company':'搜搜','mainHost':'soso.com','default':{'host':'soso.com','name':'搜搜','icon':'soso'},'sub':{'www.soso.com':{'host':'www.soso.com','name':'搜搜','icon':'soso'},'m.soso.com':{'host':'m.soso.com','name':'手机搜搜','icon':'soso'}}},'sm':{'company':'神马','mainHost':'sm.cn','default':{'host':'sm.cn','name':'神马','icon':'sm'},'sub':{'m.sm.cn':{'host':'m.sm.cn','name':'手机神马','icon':'sm'}}}};for(var i in searchEngineConfig){if(-1===url.indexOf(searchEngineConfig[i]['mainHost'])){continue;}
for(var j in searchEngineConfig[i]['sub']){if(-1!==url.indexOf(searchEngineConfig[i]['sub'][j]['host'])){return searchEngineConfig[i]['sub'][j];}}
return searchEngineConfig[i]['default'];}
return false;}
function sendkafka(type,device,number,time,vote){var talk_time='0';if(time)talk_time=time;var senddata='';if(type=='type'){senddata="&type="+type+"&talk_id="+mytempid+"&company_id="+company_id+"&guest_id="+myid+"&talk_type="+talk_type+"&talk_time="+talk_time+"&device="+device+"&guest_ip_info="+UrlEncode(guest_ip_info)+"&talk_page="+UrlEncode(talkpage)+"&talk_quality=0&number="+number+"&se="+UrlEncode(search_engine)+"&kw="+UrlEncode(keyword)+"&referer="+UrlEncode(frompage);}else if(type=='vote'){senddata="&type="+type+"&talk_id="+myfirst_tempid+"&company_id="+company_id+"&id6d="+obj_id+"&talk_time="+talk_time+"&number="+number+"&vote="+vote;}
$.ajax({type:"POST",url:"company_collection.php",data:senddata,dataType:"json",success:function(data){if(data.result=='succeed'&&talk_type=='3'){origin_time=data.talk_time;}}});}
$(".mark-icon-main-panel div").live("mouseenter",function(){var current=$(this);var info=current.attr("my-tip");$('#mark-icon-tip').html(info).show();$('#mark-icon-tip').css("left",current.offset().left);$('#mark-icon-tip').css("top",current.offset().top-24);});$(".mark-icon-main-panel div").live("mouseleave",function(){$('#mark-icon-tip').html('').hide();});;var code_key='';function verifyCode(res,event){var e=event||window.event;mouse=new MouseEvent(e);if(res.guestid<0)res.guestid=0;var xpos=mouse.x;var ypos=mouse.y;var url="http://imgcode.53kf.com/imgcode.jsp";var str="action=CODE&operate=verify_code";str+="&pictureid="+res.pictureid;str+="&from="+res.from;str+="&guestid="+res.guestid;str+="&time="+Date.parse(new Date());str+="&xpos="+xpos;str+="&ypos="+ypos;refreshcode('POST',url,str);}
function callBackCode(res){if(res.result==="success"){var char='char'+res.times;$("#"+char).attr("style","font-weight:bold;color:red;width:10%;font-size:medium;background:#FFF;border:0px;");if(res.times==1){code_key=res.code_key;alert("校验成功！");destroyCodeDiv();sendLNK();}}else{if(res.status==2)
alert("验证失败。重新点击。");else
alert("验证超时。重新点击。");fireCode_img(res.pictureid,res.from,res.type,res.guestid);}}
function createCodeFreeze(guestid,from,type){if(type==1){sendLNK(res.code_key);return;}
fireCode_img("",from,type,guestid);}
function createCodeValidateDiv(height,width,res){var validate_str=document.createElement("div");validate_str.id="code_div";validate_str.style.width="300px";validate_str.style.height="225px";validate_str.style.position="absolute";validate_str.style.fontSize="12px";validate_str.style.textAlign="center";validate_str.style.backgroundColor="#FFF";validate_str.style.zIndex=9999;var str='<img style="margin:10px;" id="code_img" alt="正在加载..." src="img/loadingcode.gif">';str+='<div style="text-align:center;position:absolute;bottom:20%;width:100%;padding-top:15px;margin:0 auto;text-align:center;">';str+='<font size="3px" style="margin-left:5px;font-weight:normal;">依次点击图中的: </font>';str+='<label id="char0" style="height;10px;width:35px;font-size:medium;background:#FFF;border:0px;display:inline-block;*display:inline;*zoom:1;" border="0">"&quot;'+decodeURI(res.char0)+'&quot;"';str+='</label>';str+='、';str+='<label id="char1" style="height;10px;width:35px;font-size:medium;background:#FFF;border:0px;display:inline-block;*display:inline;*zoom:1;" border="0">"&quot;'+decodeURI(res.char1)+'&quot;"';str+='</label>';str+='</div>';str+='<div style="margin:0 auto;margin-left:10%;position:absolute;bottom:7%;width:80%;border:1px solid #ccc;height:0px;">';str+='</div>';str+='<a id="code_refresh" onmouseover="btnchange();" class="code_refresh_1" onclick="fireCode_img(\''+res.pictureid　+'\', \''+res.from+'\', \''+res.type+'\', \''+res.guestid+'\')" title="刷新验证码">';str+='</a>';validate_str.innerHTML=str;var validate_freeze=document.getElementById("validate_freeze");document.body.insertBefore(validate_str,validate_freeze);replaccode(res);}
function createCodeValidateFreeze(id,top,left,height,width){var voteFreezeDiv=document.createElement("div");voteFreezeDiv.id=id;voteFreezeDiv.style.top=top+"px";voteFreezeDiv.style.left=left+"px";voteFreezeDiv.style.height=height+"px";voteFreezeDiv.style.width=width+"px";voteFreezeDiv.style.border="none";voteFreezeDiv.style.position="absolute";voteFreezeDiv.style.backgroundColor="#000";voteFreezeDiv.style.margin=0;voteFreezeDiv.style.padding=0;voteFreezeDiv.style.zIndex=9998;voteFreezeDiv.style.opacity="0.2";voteFreezeDiv.style.filter="alpha(opacity=20)";voteFreezeDiv.style.duration=1000;voteFreezeDiv.innerHTML="<div style='position:absolute;z-index:-1;left:-1px;top:0;width:100%;height:100%;'><iframe style='background:#000;width:100%;height:100%;filter:alpha(opacity=0);-moz-opacity:0;' frameborder='0'></iframe></div>";document.body.insertBefore(voteFreezeDiv,document.body.firstChild);}
function fireCode_img(pictureid,from,type,guestid){var url="http://imgcode.53kf.com/imgcode.jsp";var str="action=CODE&operate=get_code";str+="&type="+type;str+="&guestid="+guestid;str+="&pictureid="+pictureid;str+="&from="+from;str+="&time="+Date.parse(new Date());refreshcode('POST',url,str);}
function refreshcode(action,url,str){$.ajax({url:url,data:str,dataType:'jsonp',jsonp:'callback',success:codeInfo,timeout:6000});}
function codeInfo(res){var obj=document.getElementById("validate_freeze");if(obj!=null){replaccode(res);}else{var height=document.body.clientHeight;var width=document.body.clientWidth;createCodeValidateFreeze("validate_freeze",0,0,height,width);createCodeValidateDiv(height,width,res);}}
function replaccode(res){var src="http://imgcode.53kf.com/imgcode.jsp";src+="?action=CODE";src+="&guestid="+res.guestid;src+="&pictureid="+res.pictureid;src+="&from="+res.from;src+="&operate=show_code";src+="&codeid="+res.codeid;src+="&time="+new Date().getTime();$("#code_img").attr("src",src);$("#code_img").unbind('click').bind("click",{res:res},function(event){verifyCode(res,event);});$("#char0").html('"'+decodeURI(res.char0)+'"');$("#char1").html('"'+decodeURI(res.char1)+'"');$("#char0").attr("style","width:10%;font-size:medium;background:#FFF;border:0px;");$("#char1").attr("style","width:10%;font-size:medium;background:#FFF;border:0px;");}
function btnchange(){var bg=document.getElementById("code_refresh");bg.onmouseover=function(){this.setAttribute("className","code_refresh_2");this.setAttribute("class","code_refresh_2");}
bg.onmouseout=function(){this.setAttribute("className","code_refresh_1");this.setAttribute("class","code_refresh_1");}
bg.onmousedown=function(){this.setAttribute("className","code_refresh_3");this.setAttribute("class","code_refresh_3");}
bg.onmouseup=function(){this.setAttribute("className","code_refresh_1");this.setAttribute("class","code_refresh_1");}}
function destroyCodeDiv()
{var obj=document.getElementById("validate_freeze");obj.parentNode.removeChild(obj);obj=document.getElementById("code_div");obj.parentNode.removeChild(obj);}
function MouseEvent(e){var p=$("#code_img");var position=p.position();var positionX=e.pageX-p.offset().left||e.clientX
-p.offset().left||e.layerX-p.offset().left;this.x=positionX;var positionY=e.pageY-p.offset().top||e.clientY
-p.offset().top||e.layerY-p.offset().top;this.y=positionY;}
$(function(){var link=document.createElement("link");link.rel="stylesheet";link.type="text/css";link.href="../css/code.css";document.getElementsByTagName("head").item(0).appendChild(link);});CONST_TYPE_MODE_WITHOUT_MSG=0;CONST_TYPE_MODE_WITH_MSG=1;CONST_LNK_TYPE_ALWAYS_NEW=0;CONST_LNK_TYPE_KEEP_EXIST=1;function XMLGetNodes(xmlDoc,tagName)
{try{return(null==xmlDoc)?null:xmlDoc.getElementsByTagName(tagName);}catch(e){return null;}}
function XMLGetNode(nodeList,i)
{try{return(null==nodeList)?null:nodeList.item(i);}catch(e){return null;}}
function XMLGetNamedAttr(node,attrName)
{try{return(null==node)?'':node.attributes.getNamedItem(attrName).value;}catch(e){return'';}}
function XMLGetNodesLength(nodeList)
{try{return(null==nodeList)?0:nodeList.length;}catch(e){return 0;}}
function XMLCheckStatus(url)
{try
{var ajax=new CXMLRequest().GetXmlHttp();ajax.open("HEAD",url,false);ajax.send();return ajax.status;}
catch(e)
{return 9999;}}
function GetPostDataValue(postData,position)
{return getStringField(getStringField(postData,'&',position),'=',2);}
function CXMLRequest(tag,client)
{this.m_tag=tag;this.m_client=client;this.m_url="";this.m_postData="";this.m_isSubmit=false;this.m_xmlHttp=null;this.m_retryNum=1;if(typeof CXMLRequest._initialized=='undefined'){var myProto=CXMLRequest.prototype;myProto.CreateAjax=function(){var me=this;if(window.XMLHttpRequest)
{this.m_xmlHttp=new XMLHttpRequest();}
else
{this.m_xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}
this.m_xmlHttp.onreadystatechange=function(){me.AjaxHandler();}}
myProto.AjaxHandler=function(){var me=this;if(4==this.m_xmlHttp.readyState){if(200==this.m_xmlHttp.status){this.m_client.RequestHandler(me);this.m_xmlHttp=null;me=null;}else{var cmdArray=['LNK','REG','QST','FIL','SRV','NAM','NTS','TIP','STE','ITK','IFIL','GET','ULN'];if(/cmd=([^&]+)/.test(this.m_postData)&&cmdArray.indexOf(RegExp.$1)>=0){if(this.m_retryNum>0){this.m_retryNum--;this.Repost();}else{this.m_client.RequestHandler(me);}}}}}
myProto.SendReq=function(cmd){if(location.href.indexOf('webCompany_bg.php?')>-1)this.AddPostData('rnd',page_rnd);if(!this.m_isSubmit){this.m_xmlHttp.open("POST",this.m_url,true);this.m_xmlHttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");this.m_xmlHttp.send(this.m_postData);this.m_isSubmit=true;}}
myProto.SetURL=function(URL){if(""==this.m_url){this.m_url=URL+'?_='+new Date().getTime();}}
myProto.AddPostData=function(name,value){this.m_postData+=name+"="+value+"&";}
myProto.SetPostData=function(value){this.m_postData=value;}
myProto.GetPostData=function(value){return this.m_postData;}
myProto.GetTag=function(){return this.m_tag;}
myProto.GetXmlHttp=function(){return this.m_xmlHttp;}
myProto.Repost=function(){this.m_isSubmit=false;this.CreateAjax();this.SendReq();}
CXMLRequest._initialized=true;}
this.CreateAjax();}
function CXMLGETRequest(tag,client){var me=this;var m_tag=tag;var m_client=client;var m_url="";var m_postData="";var m_isSubmit=false;this.SendReq=function(){if(!m_isSubmit){try{$.getJSON(m_url+"?"+m_postData+"jsoncallback=?",function(xmlStr){var xml=me.loadXML(xmlStr);m_client.GETRequestHandler(me,xml);});}catch(e){}
m_isSubmit=true;}}
this.loadXML=function(xmlStr){var xmlDom=null;if(window.ActiveXObject){xmlDom=new ActiveXObject("Microsoft.XMLDOM");xmlDom.async=false;xmlDom.loadXML(xmlStr);}else{xmlDom=new DOMParser().parseFromString(xmlStr,"text/xml");}
return xmlDom;}
this.SetURL=function(URL){if(""==m_url){m_url=URL;}}
this.AddPostData=function(name,value){m_postData+=name+"="+value+"&";}
this.SetPostData=function(value){m_postData=value;}
this.GetPostData=function(value){return m_postData;}
this.GetTag=function(){return m_tag;}};function CXMLClientKh(srvAddr,cmdAddr,debug)
{this.m_cmdAddr="";this.m_srvAddr=srvAddr;this.m_debug=debug;this.m_addNo=1;this.m_gid=0;this.m_vid=0;this.m_tid=0;this.first_tid=0;this.m_link=0;this.m_dwid=0;this.m_kfid=0;this.m_kfName="";this.m_workerid=0;this.m_from="";this.m_kfPage="";this.m_lnkParam="";this.m_tfrom="";this.m_search_engine="";this.m_keyword="";this.m_counter=0;this.m_lastGetTime=0;this.m_lastGetTag=0;this.m_khnumber=1;this.m_shutdown=false;var undefined,get_timestamp="",get_timestamp_old="";if(undefined==cmdAddr){this.m_cmdAddr="/sendmsg.jsp";}else{this.m_cmdAddr=cmdAddr;}
if(typeof CXMLClientKh._initialized=='undefined'){var myProto=CXMLClientKh.prototype;myProto.GetGid=function(){return this.m_gid;}
myProto.GetTid=function(){return this.m_tid;}
myProto.GetFirstTid=function(){if(this.first_tid==''){return this.m_tid;}
return this.first_tid;}
myProto.GetVid=function(){return this.m_vid;}
myProto.GetKfid=function(){return this.m_kfid;}
myProto.GetKfname=function(){return this.m_kfName;}
myProto.GetWorkerid=function(){return this.m_workerid;}
myProto.GetKhnumber=function(){return this.m_khnumber;}
myProto.ShutDown=function(isDown){this.m_shutdown=isDown;if(isDown){this.m_lastGetTime=0;m_lastSessionTime=0;window.clearInterval(this.timerID);}else{this.m_lastGetTime=new Date().getTime();m_lastSessionTime=new Date().getTime();}}
myProto.Timeout=function(){if(this.m_lastGetTime>0&&(new Date().getTime()-this.m_lastGetTime)>20000){this.GetCmd(true);}}
myProto.SetKhInfo=function(gid,frompage,talkpage,talktitle,lnkparam,tfrom,search_engine,keyword){this.m_gid=gid;this.m_from=frompage;m_talkPage=talkpage;m_talktitle=talktitle;this.m_lnkParam=lnkparam;this.m_tfrom=tfrom;this.m_search_engine=search_engine;this.m_keyword=keyword;this.land_page=arguments[8]?arguments[8]:'';}
myProto.CreateRequest=function(){if(this.m_shutdown){return null;}else{var req=new CXMLRequest(++this.m_counter,this);return req;}}
myProto.RequestHandler=function(request){var ajax=request.GetXmlHttp();if(ajax.status==200)
{if(this.m_debug){this.OnDebug(ajax.responseText);}
var rspList=XMLGetNodes(ajax.responseXML,'Response'),rspLength=XMLGetNodesLength(rspList);if(rspLength>0)
{var rspListNodes=[];for(var i=0;i<rspLength;i++)
{rspListNodes[i]=XMLGetNode(rspList,i);if(XMLGetNamedAttr(rspListNodes[i],"cmd")=="GET")
{get_timestamp=XMLGetNamedAttr(rspListNodes[i],"timestamp");if(get_timestamp!=""&&get_timestamp_old==get_timestamp){this.GetCmd();rspListNodes=null;return;}}}
for(var i=0;i<rspLength;i++){try{this.RspProc(request.GetTag(),rspListNodes[i]);}catch(e){this.OnErr(e.name,e.message);}}}
else
{this.m_addNo++;this.OnErr(0,"Parse rsp error!");}}
else
{var postData=request.GetPostData(),cmd=GetPostDataValue(postData,1);switch(cmd){case"LNK":this.OnLnkFail();break;case"QST":var msg=GetPostDataValue(postData,6);this.OnQstFail(msg);break;case"FIL":this.OnFilFail();break;default:break;}}}
myProto.RspProc=function(tag,rsp){var cmd,errCode=0,node,nodeList,data,msg,me=this;if(null==rsp){return;}
try{cmd=XMLGetNamedAttr(rsp,"cmd");switch(cmd){case"LNK":{errCode=XMLGetNamedAttr(rsp,"ecode");this.m_kfid=XMLGetNamedAttr(rsp,"kfid");this.m_kfName=XMLGetNamedAttr(rsp,"kfname");this.m_tid=XMLGetNamedAttr(rsp,"khtmpid");this.first_tid=XMLGetNamedAttr(rsp,"firstkhtempid");this.m_gid=XMLGetNamedAttr(rsp,"khid");this.m_workerid=XMLGetNamedAttr(rsp,"workerid");this.m_khnumber=XMLGetNamedAttr(rsp,"khnumber");origin_time=XMLGetNamedAttr(rsp,"time")?XMLGetNamedAttr(rsp,"time"):0;if(0==errCode||6==errCode)
{var exp=new Date();exp.setTime(exp.getTime()+60*24*60*60*1000);document.cookie='lastKfid6d'+"="+escape(this.m_kfid)+";expires="+exp.toGMTString();try{window.clearInterval(this.timerID);}catch(e){}
this.timerID=window.setInterval(function(){me.Timeout();},2000);}else if((3!=errCode)&&(2!=errCode))
{this.ShutDown(true);}
this.OnLinkOpen(errCode,XMLGetNamedAttr(rsp,"emsg"));break;}
case"ADDN":this.m_addNo++;break;case"GET":var isLost=XMLGetNamedAttr(rsp,'lost');code_key=XMLGetNamedAttr(rsp,'code_key');if('true'===isLost){this.getLostMsg();}
if(tag==this.m_lastGetTag){this.GetCmd();}
break;case"ULN":this.OnLinkClose(XMLGetNamedAttr(rsp,"robid"),XMLGetNamedAttr(rsp,"arg"),XMLGetNamedAttr(rsp,"style"));break;case"FLN":this.OnTimeOverClose(XMLGetNamedAttr(rsp,"link"));break;case"QST":this.OnRecvTalkMsg(XMLGetNamedAttr(rsp,"msg"),XMLGetNamedAttr(rsp,"font"),XMLGetNamedAttr(rsp,"size"),XMLGetNamedAttr(rsp,"color"),XMLGetNamedAttr(rsp,"from"),XMLGetNamedAttr(rsp,"jid6d"),XMLGetNamedAttr(rsp,"sid"));break;case"GHQST":nodeList=XMLGetNodes(rsp,"Data");var node=XMLGetNode(nodeList,0),rowList=XMLGetNodes(node,"row");this.OnRecvReceiveMsg(rowList);break;case"TYP":msg=XMLGetNamedAttr(rsp,"msg");if(""==msg){this.OnTyping();}else{this.OnSetupTyping(msg);}
break;case"FIL":this.OnRecvFile(XMLGetNamedAttr(rsp,"filename"));break;case"WAT":this.m_tid=XMLGetNamedAttr(rsp,"khtmpid");this.OnWaitCount(XMLGetNamedAttr(rsp,"count"));break;case"RLK":this.OnRecvRlk();break;case"VOT":this.OnRecvVote(XMLGetNamedAttr(rsp,"sid"),XMLGetNamedAttr(rsp,"state"));break;case"OK":break;case"XLNK":var x_kfid=XMLGetNamedAttr(rsp,"kfid");var x_gid=XMLGetNamedAttr(rsp,"khid");var x_companyid=XMLGetNamedAttr(rsp,"companyid");this.OnRecvXLNK(x_kfid,x_gid,x_companyid);break;case"GRL":this.sendGrl();break;default:this.OnErr(0,"unknown rsp:"+cmd);}}catch(e){this.OnErr(e.name,e.message);return;}}
myProto.OnLogin=function(errCode){}
myProto.OnLinkOpen=function(errCode,errMsg){}
myProto.OnLinkClose=function(robid,arg,style){}
myProto.OnTimeOverClose=function(link){}
myProto.OnRecvTalkMsg=function(msg,font,size,color,from,jid6d,sid){}
myProto.OnRecvReceiveMsg=function(rowList){}
myProto.OnTyping=function(){}
myProto.OnSetupTyping=function(mode){}
myProto.OnRecvFile=function(fileName){}
myProto.OnErr=function(errCode,message){}
myProto.OnDebug=function(dbgInfo){}
myProto.OnWaitCount=function(cnt){}
myProto.OnRecvRlk=function(){}
myProto.OnLnkFail=function(){}
myProto.OnQstFail=function(msg){}
myProto.OnFilFail=function(){}
myProto.OnRecvVote=function(id6d,state){}
myProto.OpenLink=function(dwid,kfList,type,autotips,khname,dwname,khinfo,khcontact,question){this.ShutDown(false);var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);this.m_lastGetTime=new Date().getTime();var last_id6d=this.getCookie('lastKfid6d');if(last_id6d==undefined)last_id6d=0;req.AddPostData("cmd","LNK");req.AddPostData("sid","");req.AddPostData("lastKfid6d",last_id6d);req.AddPostData("did","11");req.AddPostData("khid",this.m_gid);req.AddPostData("dwid",dwid);req.AddPostData("type",type);req.AddPostData("kf_list",kfList);req.AddPostData("from",this.m_from);req.AddPostData("talkpage",m_talkPage);req.AddPostData("talktitle",m_talktitle);req.AddPostData("lnkparam",this.m_lnkParam);req.AddPostData("tfrom",this.m_tfrom);req.AddPostData("style",style);req.AddPostData("ucust_id",ucust_id);req.AddPostData("u_stat_id",u_stat_id);req.AddPostData("firewall",firewall_uuid);req.AddPostData("style_id",style_id);req.AddPostData("search_engine",encodeURIComponent(this.m_search_engine));req.AddPostData("keyword",this.m_keyword);req.AddPostData("land_page",this.land_page);if(autotips!=undefined){req.AddPostData("autotips",autotips);}
if(khname!=undefined){req.AddPostData("khname",khname);}
if(dwname!=undefined){req.AddPostData("dwname",dwname);}
if(khinfo!=undefined){req.AddPostData("khinfo",khinfo);}
if(khcontact!=undefined){req.AddPostData("khcontact",khcontact);}
if(question!=undefined){req.AddPostData("question",question);}
if(code_key!==''){req.AddPostData("code_key",code_key);}
if(verify_key!==''){req.AddPostData("verify_key",verify_key);}
var stat_id=getCookie2("jzl_stat_id_"+dwid);req.AddPostData("stat_id",stat_id);req.AddPostData("time",this.m_lastGetTime);req.SendReq();this.m_lastGetTag=req.GetTag();this.m_dwid=dwid;return req.GetTag();}
myProto.GetCmd=function(reconnect){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);if(reconnect){this.m_addNo++;req.AddPostData("did","11");this.OnDebug("Reconnect");}else{req.AddPostData("did","0");}
this.m_lastGetTime=new Date().getTime();req.AddPostData("first_khtempid",this.first_tid);req.AddPostData("gid",this.m_gid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("cmd","GET");req.AddPostData("sid",this.m_tid);req.AddPostData("msg",this.m_addNo);req.AddPostData("time",this.m_lastGetTime);if(get_timestamp!=""){get_timestamp_old=get_timestamp;req.AddPostData("timestamp",get_timestamp);}
if(code_key!==''){req.AddPostData("code_key",code_key);}
if(verify_key!==''){req.AddPostData("verify_key",verify_key);}
req.AddPostData("style_id",style_id);req.AddPostData("version",commond_version);req.SendReq();this.m_lastGetTag=req.GetTag();return req.GetTag();}
myProto.TerminateLink=function(){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","ULN");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("time",new Date().getTime());req.SendReq();this.OnLinkClose("","","");return req.GetTag();}
myProto.QuitWait=function(){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","WAT");req.AddPostData("sid",this.m_tid);req.AddPostData("did",11);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.RegSuccess=function(gid){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","REG");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("khid",gid);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendTalkMsg=function(msg){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","QST");req.AddPostData("sid",this.m_tid);req.AddPostData("first_khtempid",this.first_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("msg",msg);req.AddPostData("gid",this.m_gid);req.AddPostData("time",new Date().getTime()+1);if(code_key!==''){req.AddPostData("code_key",code_key);}
if(verify_key!==''){req.AddPostData("verify_key",verify_key);}
req.AddPostData("style_id",style_id);req.SendReq();return req.GetTag();}
myProto.SendReceiveMsg=function(){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","GHQST");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendAttachMsg=function(msg){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","TIP");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("msg",msg);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendTyping=function(msg){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","TYP");req.AddPostData("first_khtempid",this.first_tid);req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("msg",msg);req.AddPostData("khid",this.m_gid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendFile=function(fileURL){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","FIL");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("msg",fileURL);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendVote=function(state){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","VOT");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("state",state);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.getCookie=function(objName){var arrStr=document.cookie.split("; ");for(var i=0;i<arrStr.length;i++){var temp=arrStr[i].split("=");if(temp[0]==objName)return unescape(temp[1]);}}
myProto.sendGrl=function(){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData('cmd','GRL');req.AddPostData('first_khtempid',this.first_tid);req.AddPostData('gid',this.m_gid);req.AddPostData("sid",this.m_tid);req.AddPostData('dwid',this.m_dwid);req.AddPostData('did',this.m_kfid);req.AddPostData('time',new Date().getTime());if(code_key!==''){req.AddPostData("code_key",code_key);}
if(verify_key!==''){req.AddPostData("verify_key",verify_key);}
req.AddPostData("style_id",style_id);req.SendReq();return req.GetTag();}
myProto.getLostMsg=function(){var req=this.CreateRequest();if(null===req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData('cmd','OQST');req.AddPostData('sid',this.m_tid);req.AddPostData('time',new Date().getTime());req.SendReq();return req.GetTag();}
CXMLClientKh._initialized=true;}};var imfocus=1;var retry_num=0;var lnkover=0;var m_hasreg=-1;var worker_online=0;var m_regName="";var m_regEmail="";var m_regPhone="";var m_regQQ="";var m_regMSN="";var m_regCompany="";var m_regAddr="";var zdyzc_obj={};var obj_name="";var autoshow=0;var rec_stat=0;var sendtyptime=0;var settyptime=0;var typtime=8;var sendtyp_type=0;var typcontent="";var m_typTimer=0;var m_gidTimer=0;var m_autoTimer=0;var m_leftTime=0;var m_tempLeftTime=0;var m_noTalkTimer=0;var m_kfNoTalkTimer=0;var m_ImKfNoTalkTimer=0;var m_refreshTimer=0;var g_comm=null;var m_success=false;var m_busy=false;var m_busyCnt=0;var m_browserClose=false;var m_toolHtml="";var m_clickLink=false;var CONST_GID_OVERTIME=5;var CONST_REG_OVERTIME=4;var isImportTimer=0;var isImportTryNum=0;var CONST_NOTALK_TIP=0;var CONST_NOTALK_OVER=180;var noTalkNum=0;var noTalkOver=0;var m_startInitial=false;var m_isLink=false;var m_titleTimer=0;var m_scrollTitle="";var m_titleFlag=true;var m_setTalkLastTime=true;var CONST_KF_NOTALK_TIP=0;var kfNoTalkNum=0;var ImKfNoTalkNum=0;var isRefresh=true;var m_cusWebMsg=true;var m_saveWorkerId=false;var m_last_kf="";var m_repeatConnectTalk=true;var m_isAtuoToKf=false;var m_company_activity=true;var m_validCode="";var m_qa_len=0;var m_fisrtConnPrompt=true;var m_requestVote=false;var m_qa_len=0;var m_delayInitial=false;var m_androidTip=false;var khtalk_up=0;var khtalk_down=0;var closemark="beidong";var fk_dropList=0;var khnumber=1;function initial()
{if(m_startInitial)return;try{document.cookie="hz6d_open_talk_"+company_id+"=1";}catch(e){}
try{m_startInitial=true;display_status(infos[18]+".");display_msg_center(infos[18]+".");first_get();if(myid>0){isold=1;mainProgram();}else{document.getElementById("kh_gid").src=http_pro+host+"/iframe_get_gid.php";m_gidTimer=setInterval("getGidTimer()",1000);}
try{thisMovie("im").SetVariable("domp3",0);}catch(e){}
try{setRightTab(0);}catch(e){}
try{setPowerby();}catch(e){}
init_value();init_comm();}catch(e){m_startInitial=false;}
if(arguments[0]=='minchat'){var border_color;switch(inter_color){case 1:border_color='#529ce3';document.getElementById('chatmini_btns_s').style.color='#0A171A';break;case 2:border_color='#E1DFDA';break;case 3:border_color='#9DD537';break;case 4:border_color='#FF6600';break;case 5:border_color='#122D30';break;case 6:border_color='#EA2323';break;case 7:border_color='#505A57';break;case 8:border_color='#008EE8';break;case 9:border_color='#009AC2';break;}
document.getElementById('send').style.backgroundImage="url(style/chat/minichat2/img/minchat_ns_"+inter_color+".png)";document.getElementById('part_buttons').style.backgroundImage="url(style/chat/minichat2/img/minchat_ns_"+inter_color+".png)";document.getElementById('dialog_clue').style.backgroundImage="url(style/chat/minichat2/img/minchat_ns_"+inter_color+".png)";document.getElementById('body').style.borderColor=border_color;document.getElementById('ornament_2').style.borderColor=border_color;document.getElementById('dialog_content_bg').style.background="url(style/setting/ver06/img/suspend/theme_bg"+inter_theme+".png)";}}
function addDocumentListener(){document.onclick=function(event){var e=event||window.event;var src=e.srcElement||e.target;if(src.className!="wkbutton_1"&&document.getElementById("face_div").style.display!="none"){document.getElementById("face_div").style.display="none";}}}
function getGidTimer()
{myid=get_flash_gid();if(myid>=0)
{clearInterval(m_gidTimer);if(myid>0)
{isold=1;}
mainProgram();}
else
{retry_num++;if(retry_num>=CONST_GID_OVERTIME)
{clearInterval(m_gidTimer);insertErrorInfos("2","flash","mainserverim load failed!");mainProgram();}}}
function get_flash_gid()
{try
{return document.frames["kh_gid"].window.guest_id;}
catch(e)
{try
{return document.getElementById("kh_gid").contentWindow.guest_id;}
catch(e)
{return 0;}}}
function mainProgram()
{if(myid>0&&m_cusWebMsg)
{getCusWebMsg();return;}
if(myid>0&&(reg_c!=""||zdyzc_checked>0)&&(reg_stat==0||m_lyszc=="on"))
{is_import_true();}
if(robot_ass==1){if(zsk=="1"&&is_ly_custom!=1)
{if(is_zdkf=="0")
{if(m_zsk_all.length>0)
{m_robid=m_zsk_all[0].id;zsk_name=m_zsk_all[0].name;zsk_prompt=m_zsk_all[0].prompt;zsk_auto_login=m_zsk_all[0].auto_login;zsk_state=m_zsk_all[0].state;zsk_auto_hidden=m_zsk_all[0].auto_hidden;zsk_robot_ly=m_zsk_all[0].robot_ly;zsk_zsktb_url=m_zsk_all[0].zsktb_url;}}
setCookie2('robot_ass',1);if(zsk_auto_login=="0"||zsk_state=="1")
{showzsk();delayInitial();return;}}}
if(is_wlist==2)
{to_main_kf();if(zdkf_auto!="off")
{m_autoTimer=setInterval("autoLink()",1000);}
delayInitial();}
else
{if(is_wlist==0&&online_cnt=="0")
{if(lyurl.trim()!="")
{zdyly_url();delayInitial();return;}
if(zsk=="1"&&is_ly_custom!=1)
{if(is_zdkf=="0")
{if(m_zsk_all.length>0)
{m_robid=m_zsk_all[0].id;zsk_name=m_zsk_all[0].name;zsk_prompt=m_zsk_all[0].prompt;zsk_auto_login=m_zsk_all[0].auto_login;zsk_state=m_zsk_all[0].state;zsk_auto_hidden=m_zsk_all[0].auto_hidden;zsk_robot_ly=m_zsk_all[0].robot_ly;zsk_zsktb_url=m_zsk_all[0].zsktb_url;}}
if(zsk_auto_login=="0"||zsk_state=="1")
{showzsk();delayInitial();return;}}}
if(lnkover==0)
{if(online_cnt=="0"&&lyurl.trim()!="")
{zdyly_url();delayInitial();return;}
if(zsk=="1"&&online_cnt=="0"&&is_ly_custom!=1)
{if(is_zdkf=="0")
{if(m_zsk_all.length>0)
{m_robid=m_zsk_all[0].id;zsk_name=m_zsk_all[0].name;zsk_prompt=m_zsk_all[0].prompt;zsk_auto_login=m_zsk_all[0].auto_login;zsk_state=m_zsk_all[0].state;zsk_auto_hidden=m_zsk_all[0].auto_hidden;zsk_robot_ly=m_zsk_all[0].robot_ly;zsk_zsktb_url=m_zsk_all[0].zsktb_url;}}
if(zsk_auto_login=="0"||zsk_state=="1")
{showzsk();delayInitial();return;}}
to_kf(wids,worker_name);}}}
function is_import_true()
{try
{var httprequest=createHttpRequest();if(httprequest!=null)
{var senddata="action=get_status&company_id="+company_id+"&guest_id="+myid;var url="impl/rpc_customer.php";httprequest.open("POST",url,true);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function()
{if(4==httprequest.readyState)
{if(200==httprequest.status)
{var rspNodes=XMLGetNodes(httprequest.responseXML,'Response');if(rspNodes!=null)
{var rspNode=rspNodes[0];var status=XMLGetNamedAttr(rspNode,"status");document.getElementById("kh_has_import").value=status;}}}}}}
catch(e){}}
function autoLink()
{if(m_leftTime<0)
{m_isAtuoToKf=true;to_kf(wids,"");m_isAtuoToKf=false;clearInterval(m_autoTimer);m_leftTime=zdkf_auto;}
else
{msg="<font color='red'>"+m_leftTime+"</font> "+infos[59];display_status(msg);m_leftTime--;}
m_tempLeftTime=m_leftTime;}
function init_value(){settyptime=getTime();m_leftTime=zdkf_auto;CONST_NOTALK_TIP=(auto_disconnect-3)*60;CONST_KF_NOTALK_TIP=kf_auto_tip*60;try{document.getElementById("infos_11").innerHTML=infos[11];document.getElementById("l-ts-wd").innerHTML=infos[18];document.getElementById("infos_20").innerHTML=infos[20];document.getElementById("infos_21").innerHTML=infos[21];}catch(e){}
try{if(company_id!=62823904){document.getElementById("declare_a").innerHTML="<div style='float:left;'>"+cname+"</div><a id='certified' href='"+http_pro+market_host+"/certified.php?company_id="+company_id+"' target='_blank' style='display:none;float:left;background:url(\"../img/certified.png\") 5px 4px no-repeat;width:111px;height:24px;'></a>";document.getElementById("declare_a").title=cname;}}catch(e){}
try{if(company_tpl!="crystal_blue"&&company_tpl!="new2010"){document.getElementById("companyname").innerHTML="<span title='"+cname+"'>"+_substring(cname,20)+"&nbsp;</span>";}else{var font_cnt=20
if(kf_card==1){font_cnt=10;}
document.getElementById("tab_company_brief").innerHTML="<span title='"+cname+"'>"+_substring(cname,font_cnt)+"&nbsp;</span>";}}catch(e){}
p_title=cname+" - "+company_title;if(company_id!=609693&&company_id!=609252&&title_power=="1"){p_title+=" - powered by "+service+".com";}
document.title=p_title.replace(/&amp;/g,"&");if(refreshkey==1){document.onkeydown=function(evt){evt=evt?evt:(window.event?window.event:null);if(evt.keyCode==116){if(window.event)evt.keyCode=0;return false;}}}
if(company_tpl!='crystal_blue'){windowBindEvent("resize",function(){try{var obj=document.getElementById("quickQA");var pos=getElementPos(obj);document.getElementById("quickQA_div").style.left=(pos.x-20)+"px";}catch(e){}});}
is_certified_img();}
function is_certified_img(){}
function init_comm(){try{g_comm=new CXMLClientKh(http_pro+host,"/sendmsg.jsp",true);}catch(e){insertErrorInfos("2","comm","create g_comm failed!");}
callback_talk();}
function callback_talk(){g_comm.OnErr=errProc;g_comm.OnDebug=debugProc;g_comm.OnLinkOpen=linkOpenProc;g_comm.OnLinkClose=linkCloseProc;g_comm.OnTimeOverClose=timeOverCloseProc;g_comm.OnRecvTalkMsg=recvTalkMsgProc;g_comm.OnRecvReceiveMsg=recvReceiveMsgProc;g_comm.OnTyping=typingProc;g_comm.OnSetupTyping=setupTypingProc;g_comm.OnRecvFile=recvFileProc;g_comm.OnWaitCount=waitCountProc;g_comm.OnRecvRlk=recvRlkProc;g_comm.OnLnkFail=lnkFailProc;g_comm.OnQstFail=qstFailProc;g_comm.OnFilFail=filFailProc;g_comm.OnRecvVote=recvVoteProc;}
function errProc(ecode,message)
{}
function debugProc(dbgInfo)
{}
function linkOpenProc(errCode,errMsg)
{isRefresh=false;wall_cookie();myid=g_comm.GetGid();mytempid=g_comm.GetTid();myfirst_tempid=g_comm.GetFirstTid();obj_name=g_comm.GetKfname();obj_id=g_comm.GetKfid();khnumber=g_comm.GetKhnumber();try
{setCookie2("guest_id",myid);setFlashGid();}catch(e){}
document.getElementById("input1").focus();if(obj_id==0)
{if(errCode==1)
{stat=infos[5];display_status(infos[5]);getWlist(1);lnkover=2;rec_stat=1;mytempid=g_comm.GetFirstTid();}
else if(errCode==2)
{stat=infos[5];try
{display_status(infos[5]);document.getElementById("l-ts-wd").title=worker_name;}catch(e){}
getWlist(1);lnkover=2;rec_stat=1;mytempid=g_comm.GetFirstTid();}
else if(errCode==3)
{m_busy=true;display_status(infos[6]);disp="";msg_busy="<div class=\"busy\"><table cellpadding='5'><tr><td>"+UBBCode(UBBEncode(busy_prompt))+"</td></tr><tr><td>"+infos[66]+" <font color='red'>"+m_busyCnt+"</font> "+infos[67]+"</td></tr><tr><td>"+infos[68]+"</td></tr></table>";if(is_zdkf=="0"&&zsk=="1")
{if(m_zsk_all.length>0)
{m_robid=m_zsk_all[0].id;zsk_name=m_zsk_all[0].name;zsk_prompt=m_zsk_all[0].prompt;zsk_auto_login=m_zsk_all[0].auto_login;zsk_state=m_zsk_all[0].state;zsk_auto_hidden=m_zsk_all[0].auto_hidden;zsk_robot_ly=m_zsk_all[0].robot_ly;zsk_zsktb_url=m_zsk_all[0].zsktb_url;}}
if(zsk=="1"&&(zsk_auto_login=="0"||zsk_state=="1")&&zsk_auto_hidden=="0")
{msg_busy+=infos[69]+"</div>";}
else
{msg_busy+="</div>";}
display_msg2(msg_busy);lnkover=2;rec_stat=1;}
else if(errCode==11)
{display_status(infos[1]);display_msg(UBBCode(UBBEncode(reject_prompt)));lnkover=2;rec_stat=0;}
else if(errCode==100)
{display_status(infos[1]);display_msg(infos[22]);lnkover=2;}
else if(errCode==101)
{stat=infos[5];display_status(infos[5]);getWlist(1);lnkover=2;rec_stat=1;}
else if(errCode==111)
{alert(infos[111]);set_rlnk();lnkover=200;var curUrl=window.location.href;window.location.href=curUrl;}
document.getElementById("l-ts-wd").className="";document.getElementById("l-ts-close").innerHTML="&nbsp;";}
else
{try{document.getElementById("part_leaveword").style.display="none";}catch(e){}
hide_wait();if(imfocus==0)
{window.focus();}
lnksuccess();if(khnumber>1)
{g_comm.SendReceiveMsg();}
else
{showConnPrompt();}
if(m_kfNoTalkTimer==0&&kf_auto_tip!=0)
{m_kfNoTalkTimer=setInterval("checkKfNoTalk()",1000);}
else
{setKfNoTalkVariable();}
if(m_ImKfNoTalkTimer==0&&errCode==6)
{m_ImKfNoTalkTimer=setInterval('checkImKfNoTalk()',1000);setImKfNoTalkVariable();}
if(m_noTalkTimer==0&&auto_disconnect!=0)
{m_noTalkTimer=setInterval("checkNoTalk()",1000);}
if(m_typTimer==0)
{m_typTimer=setInterval("sendTypMsg()",1000);}
if(company_tpl=="crystal_blue"||company_tpl=="new2010"){if(kf_card==1)getWorkerCard();}
try{document.getElementById('worker_id_div').innerHTML='工号：'+g_comm.m_workerid;document.getElementById('worker_id_div').title='工号：'+g_comm.m_workerid;document.getElementById('star_ul').style.display='block';}catch(e){}}
if(worker_online>0)
{try
{if(username!="")m_regName=username;do_send_reg(m_regName,m_regEmail,m_regPhone,m_regQQ,m_regMSN,m_regCompany,m_regAddr,company_id,myid,obj_id,zdyzc_obj);m_hasreg=1;}catch(e){}}
if(!m_delayInitial)delayInitial();}
function delayInitial(){m_delayInitial=true;getPostkey();try{document.getElementById("press_top").style.zIndex=0;}catch(e){}
try{addDocumentListener();}catch(e){}
if(company_tpl!="minichat2"){if(copartner!="shopex"){document.getElementById("iframe_brief").src=brief;}
document.getElementById("iframe_logo").src=logo;if(dbgg!=""){getAdList();}}
if(company_tpl=="minichat2"||company_tpl=="new2010"){preLoadImages("../img/pf_bg.gif","../img/pf_close.gif","../img/info_tip.gif","../img/open.gif","../img/close.gif");}else{preLoadImages("../img/pf_bg.gif","../img/pf_close.gif","../img/info_tip.gif","../img/open.gif","../img/close.gif","style/chat/"+company_tpl+"/img/send1_"+locate+".gif");}
if(kf_card==1)setCardOption();}
function setCardOption(){var column="bname,phone,mobile,email,msn,qq";var arr=column.split(",");for(var i=0;i<arr.length;i++){if(kf_card_column.indexOf(arr[i])==-1){document.getElementById("card_"+arr[i]).style.display="none";}}}
function getWorkerCard(){try{var httprequest=createHttpRequest();if(httprequest!=null){var url="impl/rpc_worker_info.php";var senddata="id6d="+obj_id+"&check_id=11917718fe939f3106d35a30074bcd30";httprequest.open("POST",url,true);httprequest.setRequestHeader("Content-Length",senddata.length);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function(){if(4==httprequest.readyState){if(200==httprequest.status){var dom=httprequest.responseXML;var rspNodes=XMLGetNodes(dom,"Response");var rspNode=XMLGetNode(rspNodes,0);if(rspNode!=null){var ecode=XMLGetNamedAttr(rspNode,"ecode");if(ecode==0){var column="bname,phone,mobile,email,msn,qq";var arr=column.split(",");for(var i=0;i<arr.length;i++){if(kf_card_column.indexOf(arr[i])>-1){var card_column=XMLGetNamedAttr(rspNode,arr[i]);card_column=HtmlDecode(card_column);document.getElementById("tab_card_"+arr[i]).innerHTML=card_column;}}}}}}}}}catch(e){}}
function repeatConnectTalk()
{if(m_last_kf!=""&&is_wlist==0&&m_repeatConnectTalk){m_clickLink=false;m_last_kf="";m_repeatConnectTalk=false;connectTalk();return true;}
return false;}
function set_rlnk()
{try
{document.frames["iframe_fav"].window.rlnk=1;}
catch(e)
{try
{document.getElementById("iframe_fav").contentWindow.rlnk=1;}
catch(e){}}}
function showConnPrompt()
{if(company_activity!=""&&m_company_activity)
{display_msg("<div>"+company_activity+"</div>");m_company_activity=false;}
var conn_prompt_show="";obj_name=unescapa(obj_name);var cp=getConnPrompt();if(cp!=""){conn_prompt_show=cp;if(m_fisrtConnPrompt==true){set_conn_prompt(conn_prompt_show);}}else{conn_prompt_show=conn_prompt;}
m_fisrtConnPrompt=false;if(conn_prompt_show!="")
{display_msg2("<div class='kefu'><p>"+obj_name+"&nbsp;"+getTime2()+"</p><b class='g-arrows'><img src='../style/chat/minichat2/img/kefu_arrow"+minchat_style+".png'></img></b><div class='chat_word'>"+UBBCode(UBBEncode(conn_prompt_show))+"</div></div>");}
else
{display_msg2("<div class='send-msg-name'>"+infos[113]+obj_name+"&nbsp;"+infos[114]+"</div>");}
if(question!="")
{g_comm.SendTalkMsg(UrlEncode(question));display_msg2("<div class='send-msg-name'>"+infos[13]+"&nbsp;"+getTime2()+"</div><p class='send-msg-content'>"+question+"</p>");}}
function openCompanyActivity(type)
{var obj=document.getElementById("hz6d_company_activity");if(type=="open"){obj.innerHTML=company_activity+"<a href='#' onclick='openCompanyActivity(\"close\");return false;'>["+infos[135]+"]</a>";}else{obj.innerHTML=cutStr_show(company_activity,200)+"<a href='#' onclick='openCompanyActivity(\"open\")'>["+infos[134]+"]</a>";}}
function sendTypMsg()
{if(getTime()-settyptime>=8)
{clearTYP();}
sendTYP();}
function checkNoTalk()
{if(noTalkNum<CONST_NOTALK_TIP)
{noTalkNum++;}
else
{if(noTalkOver==0)
{msgTip(disconnect_prompt);}
if(noTalkOver<CONST_NOTALK_OVER)
{noTalkOver++;}
else
{if(vote_true){closeLink();}else{kfpf=999;closeLink();}}}}
function checkKfNoTalk()
{if(kfNoTalkNum<CONST_KF_NOTALK_TIP)
{kfNoTalkNum++;}
else
{setKfNoTalkVariable();if(m_success==true)msgTip(getKfPrompt('phrase_prompt'),1);}}
function checkImKfNoTalk()
{if(ImKfNoTalkNum<imkf_no_talk_time)
{ImKfNoTalkNum++;}
else
{if(m_success==true)closeLink();}}
function lnksuccess()
{setLnkOverTime();lnkover=1;rec_stat=0;m_success=true;m_setTalkLastTime=false;if(m_saveWorkerId==false){setCookie2("hz6d_last_kf",g_comm.GetWorkerid());m_saveWorkerId=true;}
playSound();document.getElementById("clue").innerHTML=obj_name+" "+infos[26];if(locate=="cn")
{display_status("与 <a href='#' onclick='kfInfo();return false;'>"+obj_name+"</a> 交谈中");}
else if(locate=="tw")
{display_status("與 <a href='#' onclick='kfInfo();return false;'>"+obj_name+"</a> 交談中");}
else if(locate=="en")
{display_status(infos[9]+" <a href='#' onclick='kfInfo();return false;'>"+obj_name+"</a>");}
else if(locate=="ja")
{display_status("<a href='#' onclick='kfInfo();return false;'>"+obj_name+"</a> "+infos[9]);}
else if(locate=="ko")
{display_status("<a href='#' onclick='kfInfo();return false;'>"+obj_name+"</a> "+infos[9]);}
else if(locate=="ge")
{display_status("<a href='#' onclick='kfInfo();return false;'>"+obj_name+"</a> "+infos[9]);}
else if(locate=="ru")
{display_status("<a href='#' onclick='kfInfo();return false;'>"+obj_name+"</a> "+infos[9]);}
else if(locate=="fr")
{display_status("<a href='#' onclick='kfInfo();return false;'>"+obj_name+"</a> "+infos[9]);}
document.getElementById("l-ts-wd").className="right_border";if(company_tpl=="new2010"){document.getElementById("l-ts-close").innerHTML='<input type="button" class="btn_purple" style="background:url(style/chat/new2010/img/'+company_tpl_color+'.gif) 0 0 no-repeat;" value="'+infos[96]+'" onclick="closeLink()" hidefocus />';}else if(company_tpl=="minichat2"){document.getElementById("l-ts-close").innerHTML='<input type="button" class="btn_purple" style="background:url(style/chat/minichat2/img/close_btns.gif) 0 0 no-repeat;" value="'+infos[96]+'" onclick="closeLink()" hidefocus />';}else{document.getElementById("l-ts-close").innerHTML='<a href="#" onclick="closeLink();return false;"><img src="style/chat/'+company_tpl+'/img/dialog_close_'+locate+'.gif" alt="'+infos[96]+'" border=0 ></a>';}
if(zsk=="1")
{document.getElementById("quickQA").style.display="block";}}
function setLnkOverTime(){try{var httprequest=createHttpRequest();if(httprequest!=null){var senddata="arg="+arg+"&lnkopentime="+lnkopentime+"&check_id=11917718fe939f3106d35a30074bcd30";var url="impl/rpc_lnkover_time.php";httprequest.open("POST",url,true);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function(){if(4==httprequest.readyState){if(200==httprequest.status){}}}}}catch(e){}}
function waitCountProc(cnt)
{if(cnt<0)
{getWlist(1);}
else
{m_busyCnt=parseInt(cnt)+1;if(m_busy==true)
{display_status(infos[6]);msg_busy="<div class=\"busy\"><table cellpadding='5'><tr><td>"+UBBCode(UBBEncode(busy_prompt))+"</td></tr><tr><td>"+infos[66]+" <font color='red'>"+m_busyCnt+"</font> "+infos[67]+"</td></tr><tr><td>"+infos[68]+"</td></tr></table>";if(zsk=="1"&&(zsk_auto_login=="0"||zsk_state=="1"))
{msg_busy+=infos[69]+"</div>";}
else
{msg_busy+="</div>";}
disp="";display_msg2(msg_busy);}}}
function hide_wait()
{try
{var re=new RegExp("class=\"busy\"","gim");disp=disp.replace(re,'class=\"\" style=\"display:none\"');document.getElementById("box-main-l-disp").innerHTML=disp;document.getElementById('box-main-l-disp').scrollTop+=100000;}catch(e){}}
function linkCloseProc(robid,arg,style)
{clearInterval(m_noTalkTimer);clearInterval(m_kfNoTalkTimer);try{document.cookie="hz6d_open_talk_"+company_id+"=0";}catch(e){}
m_success=false;g_comm.ShutDown(true);if(enable_talk_collection==1){if(closemark!="zhudong"){$.ajax({type:"POST",url:"impl/rpc_count.php",data:"kf_id="+obj_id+"&kh_id="+myid+"&kh_up="+khtalk_up+"&kh_down="+khtalk_down+"&talk_id="+mytempid,dataType:"xml",success:function(data){}});}}
if(robid!="")
{m_robid=robid;showzsk(1);chatrobot=3;document.getElementById("l-ts-wd").className="";document.getElementById("l-ts-close").innerHTML="&nbsp;";closeUpload();return;}
if(arg!="")
{set_rlnk();vote_true=true;lnkover=200;var curUrl=window.location.href;curUrl_arr=curUrl.split("&");for(var i=0;i<curUrl_arr.length;i++)
{if(curUrl_arr[i].substr(0,3)=="tpl")
{var tpl=curUrl_arr[i].substr(4);}
if(curUrl_arr[i].substr(0,15)=="interface_color")
{var interface_color=curUrl_arr[i].substr(16);}
if(curUrl_arr[i].substr(0,15)=="interface_theme")
{var interface_theme=curUrl_arr[i].substr(16);}
if(curUrl_arr[i].substr(0,13)=="minchat_style")
{var minchat_style=curUrl_arr[i].substr(14);}}
var referer=curUrl.match(/&referer=[^&]*/gim);var keyword=curUrl.match(/&keyword=[^&]*/gim);var str="";if(referer!=null)str+=referer;if(keyword!=null)str+=keyword;var href=http_pro+master_host+"/webCompany.php?arg="+arg+"&style="+style+"&cross=1"+str;if(tpl!=""&&tpl!=undefined&&tpl!=null)
href=href+"&tpl="+tpl;if(interface_color!=""&&interface_color!=undefined&&interface_color!=null)
href=href+"&interface_color="+interface_color;if(interface_theme!=""&&interface_theme!=undefined&&interface_theme!=null)
href=href+"&interface_theme="+interface_theme;if(minchat_style!=""&&minchat_style!=undefined&&minchat_style!=null)
href=href+"&minchat_style="+minchat_style;location.href=href;return;}
lnkover=3;display_msg("<br>"+UBBCode(UBBEncode(getKfPrompt('close_prompt'))));display_status(infos[12]);if(kfpf!=0&&!vote_true)
{vote_open();}
clearTYP();closeUpload();document.getElementById("l-ts-wd").className="";document.getElementById("l-ts-close").innerHTML="&nbsp;";hiddenQuick();}
function timeOverCloseProc(link)
{clearInterval(m_noTalkTimer);clearInterval(m_kfNoTalkTimer);try{document.cookie="hz6d_open_talk_"+company_id+"=0";}catch(e){}
m_success=false;g_comm.ShutDown(true);lnkover=3;display_msg("<br>"+UBBCode(UBBEncode(getKfPrompt('close_prompt'))));display_status(infos[12]);if(kfpf!=0&&!vote_true)
{vote_open();}
clearTYP();closeUpload();document.getElementById("l-ts-wd").className="";document.getElementById("l-ts-close").innerHTML="&nbsp;";hiddenQuick();}
function recvTalkMsgProc(msg,font,size,color,from,jid6d,sid)
{if(m_success==false)return;setKfNoTalkVariable();setImKfNoTalkVariable();khtalk_down=khtalk_down+1;playSound();msg=UBBCode(msg);msg=msg.replace(/(<br>)/g,"<br>");var style="font-family:"+font+";font-size:"+size+"px;color:"+color+";";var talkname=obj_name;if(jid6d!=""){talkname=getWorkerNameById6d(jid6d,"visitor");}
if(sid==obj_id){msg=msg.replace(/\[voice\](.*?)\[\/voice\]/g,"<img style='cursor:pointer' src='../style/setting/ver06/img/suspend/voice_tip.png'></img>");try{top.postMessage('53kf_new_msg','*');}catch(e){}
display_msg2("<div class='kefu'><p>"+talkname+"&nbsp;"+getTime2()+"</p><b class='g-arrows'><img src='../style/chat/minichat2/img/kefu_arrow"+minchat_style+".png'></img></b><div class='chat_word' style='"+style+"'>"+msg+"</div></div>");}else{if(minchat_style==1){display_msg2("<div class='me'><p>"+infos[13]+"&nbsp;&nbsp;"+getTime2()+"</p><b class='g-arrows'><img src='../style/setting/ver06/img/suspend/blue-arrow.png'></img></b><div class='chat_word'>"+msg+"</div></div>");}else{display_msg2("<div class='me'><p>"+infos[13]+"&nbsp;&nbsp;"+getTime2()+"</p><b class='g-arrows'><img src='../style/chat/minichat2/img/arrow"+minchat_style+".png'></img></b><div class='chat_word'>"+msg+"</div></div>");}}
if(!m_androidTip&&from=="android"){m_androidTip=true;msgTip(infos[142]);}
startTitleScroll();if(imfocus==0)
{window.focus();document.getElementById("input1").focus();}
clearTYP();}
function sendDataToIframeProxy(company_id,cmd,data){data=data||'';try{parent.frames['hz6d_iframe_proxy'].recvDataFromComsIframe(company_id,cmd,data);}catch(e){}}
function recvReceiveMsgProc(rowList)
{var show_msg='';if(company_activity!=""&&m_company_activity)
{show_msg+="<div>"+company_activity+"</div>";m_company_activity=false;}
var rowLength=XMLGetNodesLength(rowList);for(var i=0;i<rowLength;i++)
{var node=XMLGetNode(rowList,i);var type=XMLGetNamedAttr(node,"type");var msg=XMLGetNamedAttr(node,"msg");var msg_time=XMLGetNamedAttr(node,"msg_time");var talkname=XMLGetNamedAttr(node,"kfname");msg=UBBCode(msg);msg=msg.replace(/(<br>)/g,"<br>");msg=msg.replace(/\[voice\](.*?)\[\/voice\]/g,"<img style='cursor:pointer' src='../../style/setting/ver06/img/suspend/voice_tip.png'></img>");if(type=='p'){if(msg){show_msg+="<div class='kefu'><p>"+talkname+"&nbsp;"+msg_time+"</p><b class='g-arrows'><img src='../style/chat/minichat2/img/kefu_arrow"+minchat_style+".png'></img></b><div class='chat_word'>"+msg+"</div></div>";}}else{if(minchat_style==1){show_msg+="<div class='me'><p>"+infos[13]+"&nbsp;&nbsp;"+getTime2()+"</p><b class='g-arrows'><img src='../style/setting/ver06/img/suspend/blue-arrow.png'></img></b><div class='chat_word'>"+msg+"</div></div>";}else{show_msg+="<div class='me'><p>"+infos[13]+"&nbsp;&nbsp;"+getTime2()+"</p><b class='g-arrows'><img src='../style/chat/minichat2/img/arrow"+minchat_style+".png'></img></b><div class='chat_word'>"+msg+"</div></div>";}}}
display_msg3(show_msg);}
function startTitleScroll()
{if(m_titleTimer==0)
{m_scrollTitle=infos[117];m_titleTimer=setInterval("scrollTitleWords()",300);setTimeout("resetTitleWords()",7000);}}
function scrollTitleWords()
{if(m_titleFlag==true){m_titleFlag=false;m_scrollTitle="..........";}else{m_titleFlag=true;m_scrollTitle=infos[117];}
document.title=m_scrollTitle;}
function resetTitleWords()
{clearInterval(m_titleTimer);m_titleTimer=0;m_titleFlag=true;document.title=p_title;}
function typingProc()
{setTYP();}
function setupTypingProc(mode)
{if(mode==CONST_TYPE_MODE_WITHOUT_MSG)
{typtime=8;}
else
{typtime=4;}
sendtyp_type=mode;}
function recvFileProc(fileName)
{if(m_success==false)return;setKfNoTalkVariable();setImKfNoTalkVariable();playSound();display_msg("<span style='font-size:13px;'>• "+obj_name+"&nbsp;"+infos[44]+" \"<a title='"+infos[45]+"' href='"+getStringField(fileName,"*",1)+"' target='_blank'>"+getStringField(fileName,"*",2)+"</a>\"</span>");startTitleScroll();if(imfocus==0)
{window.focus();document.getElementById("input1").focus();}
clearTYP();}
function sendTYP()
{if(getTime()-sendtyptime>=typtime&&typcontent!=document.getElementById("input1").value)
{if(sendtyp_type==0)
{if(document.getElementById("input1").value!="")
{g_comm.SendTyping("");}}
else
{if(document.getElementById("input1").value!="")
{msg=UBBEncode(document.getElementById("input1").value);try
{msg=msgFilter(msg);}catch(e){}
g_comm.SendTyping(UBBCode(UrlEncode(msg)));}}
sendtyptime=getTime();typcontent=document.getElementById("input1").value;}}
function setTYP()
{settyptime=getTime();document.getElementById("clue").style.display="block";}
function clearTYP()
{settyptime=getTime();document.getElementById("clue").style.display="none";}
function qstmsg(msg)
{setNoTalkVariable();g_comm.SendTalkMsg(msg);khtalk_up=khtalk_up+1;}
function send_FIL(filename)
{setNoTalkVariable();g_comm.SendFile(filename);}
function closeLink()
{closemark="zhudong";g_comm.TerminateLink();if(enable_talk_collection==1){if(typeof khtalk_up=="undefined"){khtalk_up=0;}
if(typeof khtalk_down=="undefined"){khtalk_downs=0;}
g_comm.ShutDown(true);clearInterval(m_noTalkTimer);clearInterval(m_kfNoTalkTimer);$.ajax({type:"POST",url:"impl/rpc_count.php",data:"kf_id="+obj_id+"&kh_id="+myid+"&kh_up="+khtalk_up+"&kh_down="+khtalk_down+"&talk_id="+mytempid,dataType:"xml",success:function(data){}});}}
function recvRlkProc()
{msgTip(infos[104]);}
function lnkFailProc()
{failTip(0,"");}
function qstFailProc(msg)
{failTip(1,msg);}
function filFailProc()
{failTip(2,"");}
function recvVoteProc(id6d,state)
{m_requestVote=true;if(kfpf==0){replayVote("4");}else if(vote_true){replayVote("3");}else{var isOk=confirm(infos[139]+" "+obj_name+" "+infos[140]);if(isOk){vote_open();}else{replayVote("2");}}}
function replayVote(state)
{if(m_requestVote){g_comm.SendVote(state);m_requestVote=false;}}
function to_reg()
{if(locate=="en")
{var str="<table class=\"to_reg\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\" align=\"left\" colspan=\"3\"><div class=\"to_reg_title\">"+UBBCode(UBBEncode(reg_prompt))+"</div></td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"3\" align=\"center\"><img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+=rwordstr;str+="<tr><td></td><td align=\"left\"><input type=\"submit\" onclick=\"to_link(this)\" value=\"Start Talk\"></td></tr>";str+="</table>";display_status("Waiting for beginning");display_msg(str);document.getElementById("input1").value="Please click the button of \"Start Talk\"!";}
else if(locate=="cn")
{if(company_id==876601||company_id==60603)
{var str="<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\" bgcolor=\"#D8E8FF\" align=\"center\" colspan=\"3\"><span style=\"font-size:14px\">请填写您的信息。</span></td></tr>";str+="<tr><td align=\"right\" colspan=\"3\"><br>* 请如实提供您的真实姓名和用户名，否则客服中心有权拒绝回答您的提问。<br><br></td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"3\" align=\"center\"><img src=\"/img/warning.gif\">&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+="<tr><td align=\"right\"><b>真实姓名:</b></td><td><input type=\"text\" name=\"reg_first_name\" maxlength=\"50\" size=\"30\"> &#160;<input type=\"hidden\" name=\"reg_mail\"><input type=\"hidden\" name=\"reg_phone\"></td><td>&nbsp;</td></tr>";str+="<tr><td align=\"right\"><b>用户名:</b></td><td><input type=\"text\" maxlength=\"100\" name=\"reg_last_name\" size=\"30\"> &#160;</td><td>&nbsp;</td></tr>";str+="<tr><td colspan=\"3\" align=\"center\"><br><input type=\"submit\" onclick=\"to_link(this)\" value=\"开始对话\"></td></tr>";str+="</table>";display_status("等待开始对话");display_msg(str);document.getElementById("input1").value="请点击按钮 \"开始对话\"!";}
else
{var str="<table class=\"to_reg\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\" align=\"left\" colspan=\"2\"><div class=\"to_reg_title\">"+UBBCode(UBBEncode(reg_prompt))+"</div></td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"2\" align=\"center\"><img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+=rwordstr;str+="<tr><td></td><td align=\"left\"><input type=\"submit\" onclick=\"to_link(this)\" value=\"开始对话\"></td></tr>";str+="</table>";display_status("等待开始对话");display_msg(str);document.getElementById("input1").value="请点击按钮 \"开始对话\"!";}}
else if(locate=="tw")
{var str="<table class=\"to_reg\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\"  align=\"left\" colspan=\"3\"><div class=\"to_reg_title\">"+UBBCode(UBBEncode(reg_prompt))+"</div></td></tr>";str+="<tr><td align=\"right\" colspan=\"3\">&nbsp;</td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"3\" align=\"center\"><img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+=rwordstr;str+="<tr><td></td><td align=\"left\"><input type=\"submit\" onclick=\"to_link(this)\" value=\"開始對話\"></td></tr>";str+="</table>";display_status("等待開始對話");display_msg(str);document.getElementById("input1").value="請點擊按鈕 \"開始對話\"!";}
else if(locate=="ja")
{var str="<table class=\"to_reg\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\"  align=\"left\" colspan=\"3\"><div class=\"to_reg_title\">"+UBBCode(UBBEncode(reg_prompt))+"</div></td></tr>";str+="<tr><td align=\"right\" colspan=\"3\">&nbsp;</td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"3\" align=\"center\"><img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+=rwordstr;str+="<tr><td></td><td align=\"left\"><input type=\"submit\" onclick=\"to_link(this)\" value=\"対話を始める\"></td></tr>";str+="</table>";display_status("待機中の対話を開始する");display_msg(str);document.getElementById("input1").value="ボタンをクリックしてください \"対話を始める\"!";}
else if(locate=="ru")
{var str="<table class=\"to_reg\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\"  align=\"left\" colspan=\"3\"><div class=\"to_reg_title\">"+UBBCode(UBBEncode(reg_prompt))+"</div></td></tr>";str+="<tr><td align=\"right\" colspan=\"3\">&nbsp;</td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"3\" align=\"center\"><img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+=rwordstr;str+="<tr><td></td><td align=\"left\"><input type=\"submit\" onclick=\"to_link(this)\" value=\"Start Talk\"></td></tr>";str+="</table>";display_status("Waiting for beginning");display_msg(str);document.getElementById("input1").value="Please click the button of \"Start Talk\"!";}
else if(locate=="ge")
{var str="<table class=\"to_reg\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\"  align=\"left\" colspan=\"3\"><div class=\"to_reg_title\">"+UBBCode(UBBEncode(reg_prompt))+"</div></td></tr>";str+="<tr><td align=\"right\" colspan=\"3\">&nbsp;</td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"3\" align=\"center\"><img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+=rwordstr;str+="<tr><td></td><td align=\"left\"><input type=\"submit\" onclick=\"to_link(this)\" value=\"Start Talk\"></td></tr>";str+="</table>";display_status("Waiting for beginning");display_msg(str);document.getElementById("input1").value="Please click the button of \"Start Talk\"!";}
else if(locate=="ko")
{var str="<table class=\"to_reg\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\"  align=\"left\" colspan=\"3\"><div class=\"to_reg_title\">"+UBBCode(UBBEncode(reg_prompt))+"</div></td></tr>";str+="<tr><td align=\"right\" colspan=\"3\">&nbsp;</td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"3\" align=\"center\"><img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+=rwordstr;str+="<tr><td></td><td align=\"left\"><input type=\"submit\" onclick=\"to_link(this)\" value=\"Start Talk\"></td></tr>";str+="</table>";display_status("Waiting for beginning");display_msg(str);document.getElementById("input1").value="Please click the button of \"Start Talk\"!";}
else if(locate=="fr")
{var str="<table class=\"to_reg\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">";str+="<tr><td width=\"100%\"  align=\"left\" colspan=\"3\"><div class=\"to_reg_title\">"+UBBCode(UBBEncode(reg_prompt))+"</div></td></tr>";str+="<tr><td align=\"right\" colspan=\"3\">&nbsp;</td></tr>";str+="<tr valign=\"top\" id=\"reg_err_tr\" style=\"display:none\"><td colspan=\"3\" align=\"center\"><img src=\"/img/red2.gif\">&nbsp;<font color=\"#C00000\"><b><span id=\"reg_err\"></span></b></font></td></tr>";str+=rwordstr;str+="<tr><td></td><td align=\"left\"><input type=\"submit\" onclick=\"to_link(this)\" value=\"Attendez que le dialogue\"></td></tr>";str+="</table>";display_status("Attendez que le dialogue");display_msg(str);document.getElementById("input1").value="S'il vous plaît appuyez sur le bouton \"Attendez que le dialogue\"!";}
document.getElementById("box-main-l-disp").scrollTop+=-10000;setTimeout("set_reg_focus()",1);}
function set_reg_focus()
{try
{if(reg_c!="")
{var arr=reg_c.split(",");document.getElementById("reg_"+arr[0]).focus();}}
catch(e){}}
function to_link(obj)
{if(company_id==876601||company_id==60603)
{var reg_first_name=document.getElementById("reg_first_name").value.trim();var reg_last_name=document.getElementById("reg_last_name").value.trim();m_regName=reg_first_name+" "+reg_last_name;if(m_regName=="")
{document.getElementById("reg_err").innerHTML=alertinfo;document.getElementById("reg_err_tr").style.display="";return false;}}
else
{var arr=reg_c.split(",");for(var i=0;i<arr.length;i++)
{try
{if(zdyly_ck.indexOf(arr[i])>-1)
{if(document.getElementById("reg_"+arr[i]).value.trim()=="")
{var alertinfo="";if(arr[i]=="name")
{alertinfo=infos[51];}
else if(arr[i]=="email")
{alertinfo=infos[52];}
else if(arr[i]=="phone")
{alertinfo=infos[53];}
else if(arr[i]=="qq")
{alertinfo=infos[55];}
else if(arr[i]=="company")
{alertinfo=infos[86];}
else if(arr[i]=="addr")
{alertinfo=infos[112];}
document.getElementById("reg_err").innerHTML=alertinfo;document.getElementById("reg_err_tr").style.display="";document.getElementById("reg_"+arr[i]).focus();return false;}
if(!checkRegInput(arr[i]))
{return false;}
if(zdyzc_checked>0){for(var key in zdyzc_arr){if(zdyzc_arr[key][2]==1&&document.getElementById("reg_"+key).value.trim()==""){alertinfo=infos[143];document.getElementById("reg_err").innerHTML=alertinfo;document.getElementById("reg_err_tr").style.display="";document.getElementById("reg_"+key).focus();return false;}else{if(zdyzc_arr[key][1]==1){var tmp=zdyzc_arr[key][0];zdyzc_obj[tmp]=document.getElementById("reg_"+key).value.trim();}}}}}
else
{if(document.getElementById("reg_"+arr[i]).value.trim()!="")
{if(!checkRegInput(arr[i]))
{return false;}}}}catch(e){}}
if(reg_c.indexOf("name")>-1)
{m_regName=document.getElementById("reg_name").value.trim();}
if(reg_c.indexOf("email")>-1)
{m_regEmail=document.getElementById("reg_email").value.trim();}
if(reg_c.indexOf("phone")>-1)
{m_regPhone=document.getElementById("reg_phone").value.trim();}
if(reg_c.indexOf("qq")>-1)
{m_regQQ=document.getElementById("reg_qq").value.trim();}
if(reg_c.indexOf("company")>-1)
{m_regCompany=document.getElementById("reg_company").value.trim();}
if(reg_c.indexOf("addr")>-1)
{m_regAddr=document.getElementById("reg_addr").value.trim();}}
obj.disabled=true;disp="";display_status(infos[18]);reg_stat=2;connectTalk();document.getElementById("input1").value="";}
function checkRegInput(inputName)
{if(inputName=="email")
{if(!document.getElementById("reg_"+inputName).value.trim().IsEmail())
{alert(infos[109]);document.getElementById("reg_"+inputName).focus();return false;}}
if(inputName=="phone")
{if(!document.getElementById("reg_"+inputName).value.trim().IsTelephone2())
{alert(infos[54]);document.getElementById("reg_"+inputName).focus();return false;}}
return true;}
function to_kf(wid,wname,online)
{if(m_isLink)
{return;}
m_isLink=true;disp="";worker_id=wid;worker_name=wname;clearInterval(m_autoTimer);m_leftTime=zdkf_auto;if(zdkf_type==2)
{if(online==0&&is_wlist==3&&online_cnt!="0")
{confirmLeaveMessage();return;}}
if(typeof(online)!="undefined")
{worker_online=online;if(worker_online==0)
{confirmLeaveMessage();return;}}
else
{worker_online=online_cnt;}
if(reg_stat==0&&(reg_c!=""||zdyzc_checked>0)&&worker_online>=1)
{if(isold==0)
{to_reg();delayInitial();}
else
{m_hasreg=document.getElementById("kh_has_import").value;if(m_hasreg==0)
{to_reg();delayInitial();}
else if(m_hasreg==1)
{connectTalk();}
else
{isImportTimer=setInterval("checkIsImport()",500);}}}
else
{connectTalk();}}
function confirmLeaveMessage()
{if(confirm(infos[65]))
{connectTalk();return;}
m_isLink=false;if(zdkf_auto!="off")
{m_leftTime=m_tempLeftTime;m_autoTimer=setInterval("autoLink()",1000);}}
function checkIsImport()
{m_hasreg=document.getElementById("kh_has_import").value;if(m_hasreg!=-1)
{clearInterval(isImportTimer);if(m_hasreg==0)
{to_reg();}
else
{connectTalk();}}
else
{if(isImportTryNum>=CONST_REG_OVERTIME)
{clearInterval(isImportTimer);insertErrorInfos("2","rpc","is_import_true request failed!");m_hasreg=0;to_reg();}
isImportTryNum++;}}
function connectTalk()
{if(verify_code==1){createCodeFreeze(myid,verify_code);}else{sendLNK();}}
function sendLNK(){if(m_clickLink==false)
{m_clickLink=true;if(parseInt(myid)<0)myid=0;g_comm.SetKhInfo(myid,UrlEncode(frompage),UrlEncode(talkpage),UrlEncode(talktitle),UrlEncode(lnk_param),tfrom,search_engine,UrlEncode(keyword),UrlEncode(land_page));if(username!="")m_regName=username;if(hz6d_last_kf_online=="0"||hz6d_last_link_all=="1")m_repeatConnectTalk=false;if(is_wlist==0&&m_last_kf==""){worker_id=wids;}
if(m_regName!="")
{g_comm.OpenLink(company_id,worker_id,0,UrlEncode(UBBEncode(conn_prompt)),UrlEncode(HtmlEncode(m_regName)));}
else
{g_comm.OpenLink(company_id,worker_id,0,UrlEncode(UBBEncode(conn_prompt)));}
if(origin_type=='1'){sendkafka('type','1','-1',origin_time);origin_type=0;}
display_status(infos[18]+"...");display_msg_center(infos[18]+"...");m_refreshTimer=setTimeout("refreshPage()",20000);}
autoshow=0;lnkover=2;}
function refreshPage()
{if(isRefresh==false)
{clearTimeout(m_refreshTimer);return;}
set_rlnk();vote_true=true;lnkover=200;var curUrl=window.location.href;var cross="";if(curUrl.indexOf("cross=1")==-1)cross="&cross=1";var kf="";if(curUrl.match(/&kf=[^&]*/gim)!=null){curUrl=curUrl.replace(/&kf=[^&]*/gim,"&kf="+worker_id);}else{kf="&kf="+worker_id;}
var zdkf_type="";if(curUrl.match(/&zdkf_type=[^&]*/gim)!=null){curUrl=curUrl.replace(/&zdkf_type=[^&]*/gim,"&zdkf_type=1");}else{zdkf_type="&zdkf_type=1";}
location.href=curUrl+cross+kf+zdkf_type;}
function to_main_kf()
{try
{disp="";display_status(infos[30]);display_msg(getWlist(2));document.getElementById("box-main-l-disp").scrollTop+=-10000;if(rec_stat==1)
{document.getElementById("part_buttons").innerHTML=m_toolHtml;}}
catch(e)
{return;}
worker_id=0;autoshow=0;lnkover=2;is_wlist=3;rec_stat=0;}
function showzsk(type)
{if(type!=1)
{g_comm.QuitWait();}
g_comm.ShutDown(true);clearInterval(m_autoTimer);m_leftTime=zdkf_auto;document.getElementById("part_leaveword").style.display="none";document.getElementById("input1").focus();var now=new Date();var exitTime=now.getTime()+5000;input_area.onkeyup=function(){now=new Date();if(now.getTime()>exitTime){var word=input_area.value;if(word!=""){get_tips(word);}else{robot_input_tips.style.display="none";}
exitTime=now.getTime()+1000;}};document.getElementById("box-main-l-disp").style.display="none";parent_dialog.appendChild(robot_dialog);part_input.parentNode.insertBefore(robot_input_tips,part_input);document.getElementById("new_box-main-l-disp").style.display="block";document.getElementById('l-ts-wd').style.cssText="width:400px;";var offline_key=23;var cname_tp=cname;if(locate=="en")
{offline_key=23;cname_tp="";}
m_toolHtml=document.getElementById("part_buttons").innerHTML;if(zsk_robot_ly==1){if(type==1){display_status(infos[144]);}else{display_status(infos[80]);}}else{display_status(infos[141]);}
display_tool(infos[83]);rec_stat=1;lnkover=200;if(type==1)
{for(var i=0;i<m_zsk_all.length;i++)
{if(m_robid==m_zsk_all[i].id)
{zsk_name=m_zsk_all[i].name;zsk_prompt=m_zsk_all[i].prompt;zsk_zsktb_url=m_zsk_all[i].zsktb_url;break;}}
if(zsk_zsktb_url==""){zsk_zsktb_url="style/chat/"+company_tpl+"/img/machine.gif";}
var msg="<br />"+infos[87]+"<br /><table width='90%' border='0' cellspacing='0' cellpadding='0'><tr><td width='80' align='center'><img src='"+zsk_zsktb_url+"' width= '64' height= '64'></td><td>"+infos[93]+infos[91]+" "+HtmlDecode(zsk_name)+"<br />"+HtmlDecode(zsk_prompt)+"</td></tr></table>";display_msg(msg);}
else
{if(zsk_zsktb_url==""){zsk_zsktb_url="style/chat/"+company_tpl+"/img/machine.gif";}
disp="<table width='90%' border='0' cellspacing='0' cellpadding='0'><tr><td width='80' align='center'><img src='"+zsk_zsktb_url+"' width= '64' height= '64'></td><td>"+infos[93]+infos[91]+" "+HtmlDecode(zsk_name)+"<br />"+HtmlDecode(zsk_prompt)+"</td></tr></table>";document.getElementById("box-main-l-disp").innerHTML=disp;if(!m_busy)
{insertTalkTotal();}}
if(origin_type!='1'){talk_type=3;sendkafka('type','1','1');origin_type=1;}
if(m_robid!="")
{sendtext("GetTypeList");}
else
{alert("error");}}
function showauto()
{document.getElementById("input1").focus();var offline_key=23;var cname_tp=cname;if(locate=="en")
{offline_key=23;cname_tp="";}
no_autoreply();if(typeof(autoreplys["0"])!="undefined")
{display_msg("<span id=\"autoreply\" style=\"display:\"><font color=\"#666666\">"+cname_tp+infos[4]+":</font><br>&nbsp;&nbsp;"+autoreplys["0"]+"</span>");}}
function no_autoreply()
{var re=new RegExp("id=\"autoreply\" style=\"display:","gim");disp=disp.replace(re,'id=\"\" style=\"display:none');re=new RegExp("<br><span id=\"\" style=\"display:none","gim");disp=disp.replace(re,'<span id=\"\" style=\"display:none');}
function kfInfo()
{}
function zdyly_url()
{if(lytype==1)
{location.href=lyurl;}
else
{display_status(infos[5]);document.getElementById("box-main-l-disp").focus();display_msg("<br><a href=\""+lyurl+"\" target=\"_blank\">点击发送留言</a>");}}
function talkWithOthers()
{var curUrl=window.location.href;var toUrl=curUrl.replace(/(&kflist=off)/gim,"&kflist=on").replace(/&kf=[^&]*/gim,"&kf=").replace(/&cross=1/gim,"");window.location.href=toUrl;}
function createHttpRequest()
{try
{var httpRequest=new ActiveXObject("MSXML2.XMLHTTP");}
catch(e)
{var httpRequest=new XMLHttpRequest();}
return httpRequest;}
function insertErrorInfos(err_from,err_type,err_detail)
{try
{var httprequest=createHttpRequest();if(httprequest!=null)
{var err_from=UrlEncode(HtmlEncode(err_from));var err_type=UrlEncode(HtmlEncode(err_type));var err_detail=UrlEncode(HtmlEncode(err_detail));var senddata="err_from="+err_from+"&err_type="+err_type+"&err_detail="+err_detail+"&company_id="+company_id+"&id6d="+obj_id;var url="err_infos.php";httprequest.open("POST",url,true);httprequest.setRequestHeader("Content-Length",senddata.length);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function()
{if(4==httprequest.readyState)
{if(200==httprequest.status)
{var rspNodes=XMLGetNodes(httprequest.responseXML,'Response');if(rspNodes!=null)
{var rspNode=rspNodes[0];if(rspNode!=null)
{var ecode=unescape(rspNode.attributes.getNamedItem("ecode").nodeValue);}
if(ecode==0)
{}
else
{}}}}}}}
catch(e){}}
function getAdList()
{try
{document.getElementById("ad_html").innerHTML="<iframe height=25 width=100% src='"+http_pro+dbgg+"' frameborder=0 allowTransparency=true scrolling=no></iframe>";}catch(e){}}
function setFlashGid()
{try
{document.getElementById("kh_gid").src=http_pro+host+"/iframe_set_gid.php";}
catch(e){}}
function failTip(type,msg)
{var sysMsg="<img src='../img/info_tip.gif' height='16' width='16'><font style='color:#1B1D74'>【"+infos[118]+"】";if(type==0)
{var msg=infos[100];display_status(msg);display_msg(msg);}
else if(type==1)
{var msg=sysMsg+infos[101]+' "'+failMsg(msg)+'" '+infos[102]+'</font>';display_msg(msg);}
else if(type==2)
{var msg=sysMsg+infos[103]+'</font>';display_msg(msg);}}
function msgTip(msg,alter)
{var sysMsg="<img src='../img/info_tip.gif' height='16' width='16'><font style='color:#1B1D74'>【"+infos[118]+"】";try
{if(alter==1)
{var re=new RegExp("class=\"kf_auto_tip\"","gim");disp=disp.replace(re,'class=\"\" style=\"display:none;\"');document.getElementById("box-main-l-disp").innerHTML=disp;document.getElementById('box-main-l-disp').scrollTop+=100000;var msg='<div class="kf_auto_tip">'+sysMsg+msg+'</font><br></div>';}
else
{var msg=sysMsg+msg+'</font><br>';}
display_msg2(msg);}catch(e){}}
function setNoTalkVariable()
{noTalkNum=0;noTalkOver=0;}
function setKfNoTalkVariable()
{kfNoTalkNum=0;}
function setImKfNoTalkVariable()
{ImKfNoTalkNum=0;}
function quickQA(obj,cmd,type_id,question_id,wd)
{var q_div=document.getElementById("quickQA_div");if(q_div!=null&&q_div.style.display==""&&cmd==undefined)
{q_div.style.display="none";return;}
var robot_id=0;if(cmd==undefined)
{cmd="GetHotList";type_id=0;question_id="";wd="";}
else
{robot_id=m_robid;}
try
{var senddata="cmd="+cmd+"&company_id="+company_id+"&robot_id="+robot_id+"&type_id="+type_id+"&question_id="+question_id+"&wd="+wd;var url="impl/zsk.php";xmlhttp.open("POST",url,false);xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");xmlhttp.send(senddata);var dom=xmlhttp.responseXML;var rspNodes=XMLGetNodes(dom,"Response");var rspNode=XMLGetNode(rspNodes,0);if(rspNode!=null)
{var ecode=XMLGetNamedAttr(rspNode,"ecode");var cmd=XMLGetNamedAttr(rspNode,"cmd");}
else
{return;}
if(ecode==0)
{switch(cmd)
{case"GetHotList":var hotArray=new Array();var datas=XMLGetNodes(rspNode,"Data");var data=XMLGetNode(datas,0);var rowList=XMLGetNodes(data,"row");var nodeLength=XMLGetNodesLength(rowList);for(var i=0;i<nodeLength;i++)
{var node=XMLGetNode(rowList,i);var hot=new Object();hot.id=XMLGetNamedAttr(node,"id");hot.question=XMLGetNamedAttr(node,"question");hotArray.push(hot);}
showQuickList(obj,hotArray);break;case"GetAnswer":setKfNoTalkVariable();setImKfNoTalkVariable();var answer=XMLGetNamedAttr(rspNode,"answer");var msg="<div class='send-msg-name'>"+obj_name+"&nbsp;"+getTime2()+"</div><p class='recv-msg-content'>"+UBBCode(UBBEncode(answer.replace(/(\n)/g,"<br>")))+"</p>";display_msg2(msg);break;default:break;}}else if(ecode==1){alert("参数错误！");}else if(ecode==2){alert("无效的cmd！");}}catch(e){}}
function showQuickList(obj,hotArray)
{var html=new Array();var len=hotArray.length;html.push("<table width='250' style='table-layout:fixed;' border='0' cellspacing='2' cellpadding='0'>");if(len!=0)
{for(var i=0;i<len;i++)
{var hot=hotArray[i];var id=hot.id;var question=hot.question;html.push("<tr><td bgcolor='#FFFFFF' align='left' height='21' style='text-indent: 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>"+(i+1)+". "+"<span class='span-link' style='text-decoration: none;' onclick='getQuickAnswer(\""+id+"\",\""+question.replace(/\\/g,"\\\\").replace(/&quot;/g,"\\&quot;")+"\")' title='"+question+"'>"+question+"</span></td></tr>");}}
else
{len=1;html.push("<tr><td bgcolor='#FFFFFF' align='left' height='21' style='text-indent: 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>"+infos[122]+"</td></tr>");}
html.push("</table>");var q_div=document.getElementById("quickQA_div");if(q_div!=null)
{q_div.parentNode.removeChild(q_div);}
var pos=getElementPos(obj);var quickDiv=document.createElement("div");quickDiv.id="quickQA_div";m_qa_len=len;if(company_tpl=='new2010'){if(len>=13)len=13;quickDiv.style.top=(pos.y-5-len*23)+"px";}else if(company_tpl=='crystal_blue'){if(len>=13)len=13;quickDiv.style.top=(pos.y-3-len*23)+"px";}else{if(len>=9)len=9;quickDiv.style.top=getQuickTop(company_tpl,len)+"px";}
if(company_tpl=='minichat2'){quickDiv.style.left=(pos.x-178)+"px";}else{quickDiv.style.left=(pos.x-20)+"px";}
quickDiv.style.height=(23*len+2)+"px";quickDiv.style.width="250px";quickDiv.style.border="none";quickDiv.style.position="absolute";quickDiv.style.backgroundColor="#F5F7FB";quickDiv.style.margin=0;quickDiv.style.padding=0;quickDiv.style.zIndex=9997;quickDiv.style.border="1px #7B99C8 solid";quickDiv.style.fontSize="12px";quickDiv.style.overflow="auto";quickDiv.style.overflowX="hidden";quickDiv.innerHTML=html.join("");document.body.insertBefore(quickDiv,document.body.firstChild);}
function getQuickTop(tpl,len)
{switch(tpl)
{case'blue2':return 74+(10-len)*23;case'dark':return 67+(10-len)*23;case'gray':return 76+(10-len)*23;case'green':return 69+(10-len)*23;case'pink':return 77+(10-len)*23;case'spring':return 78+(10-len)*23;case'yellow':return 61+(10-len)*23;case'minichat2':return(10-len)*23;}}
function getQuickAnswer(id,question)
{setNoTalkVariable();var msg="<div class='send-msg-name'>"+infos[13]+"&nbsp;"+getTime2()+"</div><p class='send-msg-content'>"+question.replace(/</g,"&lt;")+"</p>";display_msg2(msg);quickQA("","GetAnswer","",id);var q_div=document.getElementById("quickQA_div");q_div.parentNode.removeChild(q_div);}
function hiddenQuick()
{try
{document.getElementById("quickQA").style.display="none";document.getElementById("quickQA_div").style.display="none";}catch(e){}}
function insertTalkTotal()
{try
{var httprequest=createHttpRequest();if(httprequest!=null)
{var url="lword.php";var senddata="company_id="+company_id+"&guest_id="+myid+"&tempid="+mytempid+"&referer="+talkpage+"&referer1="+frompage+"&zsk=1&talk_his_table="+talk_his_table;httprequest.open("POST",url,true);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function()
{if(4==httprequest.readyState)
{if(200==httprequest.status)
{var restxt=httprequest.responseText;ret=str_to_obj(restxt);if(parseInt(ret.tempid)>0)
{mytempid=ret.tempid;}
if(parseInt(ret.guestid)>0)
{myid=ret.guestid;}
try
{setCookie2("guest_id",myid);setFlashGid();}catch(e){}}}}}}
catch(e){}}
function getCusWebMsg()
{try
{var httprequest=createHttpRequest();if(httprequest!=null)
{var url="impl/rpc_cus_web_msg.php";var senddata="check_id=11917718fe939f3106d35a30074bcd30&company_id="+company_id+"&guest_id="+myid;httprequest.open("POST",url,true);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function()
{if(4==httprequest.readyState)
{if(200==httprequest.status)
{var dom=httprequest.responseXML;var msgList=new Array();var rowList=XMLGetNodes(dom,"row");var rowLength=XMLGetNodesLength(rowList);if(rowLength==0){repeatMainProgram();return;}
for(var i=0;i<rowLength;i++)
{var row=XMLGetNode(rowList,i);var msg=new Object();msg.remark=XMLGetNamedAttr(row,"remark");msg.send_time=XMLGetNamedAttr(row,"send_time");msg.bname=XMLGetNamedAttr(row,"bname");msgList.push(msg);}
showCusWebMsgList(msgList);}
else
{repeatMainProgram();return;}}}}}
catch(e)
{repeatMainProgram();return;}}
function repeatMainProgram()
{m_cusWebMsg=false;document.getElementById("l-ts-wd").className="";mainProgram();}
function showCusWebMsgList(msgList)
{var html=new Array();for(var i=0;i<msgList.length;i++)
{var msg=msgList[i];var remark=HtmlEncode(msg.remark).replace(/\\n/g,"<br>");var send_time=msg.send_time;var bname=msg.bname;var imgUrl="../style/chat/new3/img/down.gif";var display="none";if(i==0){imgUrl="../style/chat/new3/img/up.gif";display="";}
html.push("<div class='send-msg-name'><img id='cus_web_msg_img_"+i+"' src='"+imgUrl+"' width='11' height='11' style='cursor:pointer;' onclick='showCusWebMsg("+i+")' />&nbsp;"+bname+" "+infos[131]+"&nbsp;("+send_time+")</div><p class='recv-msg-content' id='cus_web_msg_"+i+"' style='display:"+display+"'>"+remark+"</p>");}
display_status(infos[133]);document.getElementById("l-ts-wd").className="right_border";var css="width:66px;height:21px;line-height:21px;";if(company_tpl=="blue2"||company_tpl=="gray"||company_tpl=="pink")css="width:64px;height:20px;line-height:20px;";if(company_tpl=="dark")css="width:64px;height:19px;line-height:19px;";if(company_tpl=="green")css="width:90px;height:28px;line-height:28px;";if(company_tpl=="new2010"){document.getElementById("l-ts-close").innerHTML='<input type="button" class="btn_purple" style="background:url(style/chat/new2010/img/'+company_tpl_color+'.gif) 0 0 no-repeat;" value="'+infos[132]+'" onclick="repeatMainProgram();this.parentNode.removeChild(this);" hidefocus />';}else if(company_tpl=="minichat2"){document.getElementById("l-ts-close").innerHTML='<input type="button" class="btn_purple" style="background:url(style/chat/minichat2/img/close_btns.gif) 0 0 no-repeat;" value="'+infos[132]+'" onclick="repeatMainProgram();this.parentNode.removeChild(this);" hidefocus />';}else{document.getElementById("l-ts-close").innerHTML='<div onclick="repeatMainProgram();this.parentNode.removeChild(this);"style="background:url(style/chat/'+company_tpl+'/img/dialog_talk.gif) top left no-repeat;'+css+'text-align:center;cursor:pointer;">'+infos[132]+'</div>';}
document.getElementById("box-main-l-disp").innerHTML=html.join("");document.getElementById("box-main-l-disp").scrollTop+=10000;}
function showCusWebMsg(i)
{var msg=document.getElementById("cus_web_msg_"+i);var img=document.getElementById("cus_web_msg_img_"+i);img.src=msg.style.display=="none"?"../style/chat/new3/img/up.gif":"../style/chat/new3/img/down.gif";msg.style.display=msg.style.display=="none"?"":"none";}
function get_worker_intro(id6d)
{for(var i=0;i<m_worker_intro_all.length;i++){var worker_intro=m_worker_intro_all[i];if(worker_intro.id6d==id6d){return worker_intro.worker_intro;}}
return"";}
function createCode()
{m_validCode="";var codeLength=4;var selectChar=new Array(1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');for(var i=0;i<codeLength;i++)
{var charIndex=Math.floor(Math.random()*34);m_validCode+=selectChar[charIndex];}}
function validateCode(obj)
{var codesize=$('#firewall_uuid_img').attr('codesize');var inputCode=obj.value.trim().toLowerCase();if(inputCode.length<1)
{obj.focus();return;}
if(inputCode.length==codesize)
{if($('#firewall_uuid_img').attr('validate_times')>=firewall_image_times)
{alert('验证次数超过限定值，请关闭此对话窗口，然后重新点击客服图标进行对话');}
else
{$.getJSON('imgValidate.php',{'inputCode':inputCode,'firewall_uuid':firewall_uuid,'action':'validate'},function(data){$('#firewall_uuid_img').attr('validate_times',data.validate_times);if(data.ecode==1){sendLNK();destroyValidateDiv();}else{obj.value='';$('#validate_tip').html('验证码错误');firewall_img();}});}}}
function createValidateFreeze()
{var obj=document.getElementById("validate_freeze");if(obj!=null)return;var height=document.documentElement.clientHeight;var width=document.documentElement.clientWidth;createFreeze("validate_freeze",0,0,height,width);createValidateDiv(height,width);try{document.getElementById("vcode").focus();}catch(e){}}
function createValidateDiv(height,width)
{var validate_str=document.createElement("div");validate_str.id="validate_div";validate_str.style.top=Math.round((height-138)/2)+"px";validate_str.style.left=Math.round((width-192)/2)+"px";validate_str.style.height="138px";validate_str.style.width="192px";validate_str.style.position="absolute";validate_str.style.fontSize="12px";validate_str.style.fontWeight="bold";validate_str.style.textAlign="center";validate_str.style.zIndex=9999;var str='<div style="width:192px;height:138px;background:url(\'img/valid/valid_bg.gif\') no-repeat;">';str+='<div style="text-align:left;color:#431010;padding-left:35px;padding-top:6px;width:120px;height:18px;line-height:18px;font-size:14px;">'+infos[134]+'</div>';str+='<div style="width:180px;height:28px;padding-top:15px;color:#6A8BE7;font-size:14px;margin:0 auto;">';str+='<div style="margin:0 auto;width:150px;height:20px;">';str+='<span style="float:left;line-height:20px;text-align:center;margin-left:1px;">'+infos[135]+'</span>';str+='<span style = "width:63px;height:20px;float:left;margin: 0 5.5px;line-height:20px;text-align:center;" title="看不清，点击刷新" onclick="firewall_img(true)" id="firewall_uuid_img" image_times="0" validate_times="0" codesize="0" />&nbsp;&nbsp;</span>';str+='<span style="color:#6A8BE7;font-size:14px;cursor:pointer;float:left;line-height:20px;text-align:center;" onclick="firewall_img(true)">刷新</span>';str+='</div></div>';str+='<div><input type="text" name="vcode" id="vcode" onkeyup="validateCode(this)" style="border:1px solid #AC4822;width:150px;height:18px;line-height:16px;"/></div>';str+='<div style="width:180px;height:30px;padding-top:10px;background:url(\'img/valid/valid_warn.gif\') no-repeat 35px 5px;text-indent:35px;"><span id="validate_tip" style="color:#FE723C;">'+infos[137]+'</span></div></div>';validate_str.innerHTML=str;var validate_freeze=document.getElementById("validate_freeze");document.body.insertBefore(validate_str,validate_freeze);firewall_img();}
function firewall_img(refresh)
{var image_times=$('#firewall_uuid_img').attr('image_times');if(image_times>=firewall_image_times)
{if(refresh)alert('图片刷新次数超过限定值，请关闭此对话窗口，然后重新点击客服图标进行对话');return;}
$.getJSON('imgValidate.php?firewall_uuid='+firewall_uuid+'&action=imgCode&'+Math.random(),function(data){if(typeof data['ecode']!='undefined'&&data['ecode']=='3')
{alert('验证次数超过限定值，请关闭此对话窗口，然后重新点击客服图标进行对话222');return;}
var image_times=data.image_times;var imagedata=data.image_data;var codesize=data.result_size.length;var isMhtml=!-[1,]&&!('prototype'in Image);if(isMhtml){$('#firewall_uuid_img').css('background-image','url("mhtml:'+http_pro+location.host+'/imgValidate.php?firewall_uuid='+firewall_uuid+'&action=ie&'+Math.random()+'!locoloco")').attr('codesize',codesize).attr('image_times',image_times);}else{$('#firewall_uuid_img').css('background-image','url("data:image/gif;base64,'+imagedata+'")').attr('codesize',codesize).attr('image_times',image_times);}});}
function destroyValidateDiv()
{var obj=document.getElementById("validate_freeze");obj.parentNode.removeChild(obj);obj=document.getElementById("validate_div");obj.parentNode.removeChild(obj);}
function playSound()
{if(fk_sound==1){try{thisMovie("im").SetVariable("domp3",1);}catch(e){}}}
function getConnPrompt()
{var len=m_conn_prompt_list.length,info_list;var carousel_count=0;var prompt_count=1;var first_prompt='';for(var i=0;i<len;i++){info_list=m_conn_prompt_list[i];var id6d=info_list.id6d;if(id6d==obj_id){if(typeof(info_list.carousel)=='undefined'||(!info_list.carousel_prompt1&&!info_list.carousel_prompt2&&!info_list.carousel_prompt3&&!info_list.carousel_prompt4&&!info_list.carousel_prompt5&&!info_list.carousel_prompt6&&!info_list.carousel_prompt7&&!info_list.carousel_prompt8)){return info_list.prompt;}else{function check_prmopt(){if(lnkover!=1){return;}
if(eval("info_list.carousel_prompt"+prompt_count)){if(!first_prompt){first_prompt=eval("info_list.carousel_prompt"+prompt_count);prompt_count++;return;}
display_msg2("<div class='kefu'><p>"+obj_name+"&nbsp;"+"&nbsp;"+getTime2()+"</p><b class='g-arrows'><img src='../style/chat/minichat2/img/kefu_arrow"+minchat_style+".png'></img></b><div class='chat_word'>"+UBBCode(UBBEncode(eval("info_list.carousel_prompt"+prompt_count)))+"</div></div>");prompt_count++;}else{prompt_count++;if(prompt_count>8){prompt_count=1;carousel_count++;if(carousel_count>=info_list.carousel_num){clearInterval(carousel_id);return;}}
check_prmopt();}}
check_prmopt();carousel_id=setInterval(check_prmopt,info_list.carousel_interval*1000);return first_prompt;}}}
return"";}
function getKfPrompt(prompt){if(prompt=="close_prompt"){var list=m_close_prompt_list;var list_prompt=close_prompt;}else if(prompt=="phrase_prompt"){var list=m_phrase_prompt_list;var list_prompt=kf_auto_tip_phrase;}
var len=list.length,info_list;for(var i=0;i<len;i++){info_list=list[i];var id6d=info_list.id6d;if(id6d==obj_id&&info_list.prompt!=''){return info_list.prompt;}}
return list_prompt;}
function setRightTab(tab){if(kf_card==1){if(company_tpl=="crystal_blue"){document.getElementById("tab_company_brief").style.borderRight="1px solid #6F90CA";if(tab==0){document.getElementById("tab_company_brief").style.color="#FF6600";document.getElementById("tab_company_card").style.color="#1F4A9C";document.getElementById("intro_content").style.display="";document.getElementById("card_content").style.display="none";document.getElementById("tab_company_brief").style.backgroundColor="#fff";document.getElementById("tab_company_card").style.backgroundColor="";document.getElementById("tab_company_brief").style.borderBottom="none";document.getElementById("tab_company_card").style.borderBottom="1px solid #6f90ca";}else{document.getElementById("tab_company_brief").style.color="#1F4A9C";document.getElementById("tab_company_card").style.color="#FF6600";document.getElementById("intro_content").style.display="none";document.getElementById("card_content").style.display="";document.getElementById("tab_company_brief").style.backgroundColor="";document.getElementById("tab_company_card").style.backgroundColor="#fff";document.getElementById("tab_company_brief").style.borderBottom="1px solid #6f90ca";document.getElementById("tab_company_card").style.borderBottom="none";}}else if(company_tpl=="new2010"){if(company_tpl_color=="blue"){var borderColor="1px solid #6F90CA";var normalColor="#000000";var selectedColor="#006091";}else if(company_tpl_color=="autumn"){var borderColor="1px solid #E3B387";var normalColor="#000000";var selectedColor="#993300";}else if(company_tpl_color=="bright_green"){var borderColor="1px solid #A9CCCD";var normalColor="#000000";var selectedColor="#006091";}else if(company_tpl_color=="gray"){var borderColor="1px solid #A1A0A0";var normalColor="#000000";var selectedColor="#006091";}else if(company_tpl_color=="green"){var borderColor="1px solid #91CC5C";var normalColor="#000000";var selectedColor="#006091";}else if(company_tpl_color=="pink"){var borderColor="1px solid #EC9FAF";var normalColor="#000000";var selectedColor="#993300";}else if(company_tpl_color=="purple"){var borderColor="1px solid #B89BE3";var normalColor="#000000";var selectedColor="#006091";}else if(company_tpl_color=="red"){var borderColor="1px solid #E18378";var normalColor="#000000";var selectedColor="#993300";}else if(company_tpl_color=="spring"){var borderColor="1px solid #ABD8F8";var normalColor="#000000";var selectedColor="#006091";}else if(company_tpl_color=="yellow"){var borderColor="1px solid #E6D155";var normalColor="#000000";var selectedColor="#993300";}
document.getElementById("tab_company_brief").style.borderRight=borderColor;if(locate=="en"){var tdWidth="45px";}else if(locate=="ko"){var tdWidth="50px";}else if(locate=="ja"){var tdWidth="55px";}else if(locate=="fr"||locate=="ge"){var tdWidth="64px";}else if(locate=="ru"){var tdWidth="70px";}else{var tdWidth="50px";}
var objs=document.getElementsByName("tab_card_td");for(var i=0;i<objs.length;i++){objs[i].style.width=tdWidth;}
if(tab==0){document.getElementById("tab_company_brief").style.color=selectedColor;document.getElementById("tab_company_card").style.color=normalColor;document.getElementById("intro_content").style.display="";document.getElementById("card_content").style.display="none";}else{document.getElementById("tab_company_brief").style.color=normalColor;document.getElementById("tab_company_card").style.color=selectedColor;document.getElementById("intro_content").style.display="none";document.getElementById("card_content").style.display="";}}}else{if(company_tpl=="crystal_blue"||company_tpl=="new2010"){document.getElementById("tab_company_brief").style.width="175px";document.getElementById("tab_company_card").style.display="none";document.getElementById("intro_content").style.display="";document.getElementById("card_content").style.display="none";}}}
function setPowerby(){if(is_powerby=="N"){document.getElementById("a-info").innerHTML="";}}
function hz6d_monitor(a){var data={cmd:"DC",utype:"v",ip:client_IP,sid:obj_id,userId:myid,from:document.URL,group:window.location.host.split('.',2)[0],useTime:new Date().getTime()-timeStamp,time:new Date().getTime(),jsoncallback:"hz6d_jsoncallback"};if(data.useTime<0||data.useTime>100000)data.useTime=0;var url=monitor_url+'?'+join_json('&',data);if(data.useTime!=0)hz6d_createScript('hz6d_monitor_js',url);}
function join_json(separator,json){var arr=[];for(var i in json){if(json.hasOwnProperty(i)){arr.push(i+'='+encodeURIComponent(json[i]));}}
return arr.join(separator);}
function hz6d_jsoncallback(data){}
function hz6d$(id){return document.getElementById(id)||null;}
function hz6d_createScript(id,url){var oldS=hz6d$(id);if(oldS!=null)oldS.parentNode.removeChild(oldS);var t=document.createElement('script');t.src=url;t.type='text/javascript';t.id=id;document.getElementsByTagName('head')[0].appendChild(t);}
function unescapa(str){var elem=document.createElement('div')
elem.innerHTML=str
return elem.innerText||elem.textContent}
function wall_cookie(){if(myid!=''){$.ajax({type:"POST",url:"impl/wall_time.php",data:"action=time",success:function(data){setCookie2(myid+"_vis_time",data);document.cookie=myid+"_vistor=1";}});}};var ActRd;var ActRs=new Array();function Act(obj,str)
{eval(obj.type+'.'+str+'(obj)');}
function LoadClass(name)
{eval(name+'=new '+name+'()');}
function GetIndex(obj)
{for(var i=0;i<obj.form.elements.length;i++)
{if(obj.form.elements[i].uniqueID==obj.uniqueID)return(i);}
return(-1);}
function GetOffset(obj)
{var x=0,y=0;if(!obj)return[x,y];while(obj)
{x+=parseInt(obj.offsetLeft);y+=parseInt(obj.offsetTop);obj=obj.offsetParent;}
return[x,y];}
function Cookie()
{this._Cookie=[];this.Load=function()
{if(document.cookie.indexOf(";")!=-1)
{var _sp,_name,_tp,_tars,_tarslength;var _item=document.cookie.split("; ");var _itemlength=_item.length;while(_itemlength>0)
{_sp=_item[--_itemlength].split("=");_name=_sp[0];if(_sp.length<2)
{continue;}
_tp=_sp[1].split(",");_tars=_tp.slice(1,_tp.length);this._Cookie[_name]=[];this._Cookie[_name]=_tars;this._Cookie[_name]["timeout"]=_tp[0];}
return true;}
return false;}
this.Save=function()
{var _str,_ars,_mars,_marslength,timeout,i,key;for(key in this._Cookie)
{if(!this._Cookie[key])return;_str=[];_mars=this._Cookie[key];_marslength=_mars.length;for(i=0;i<_marslength;i++)
{_str[_str.length]=escape(_mars[i]);}
document.cookie=key+"="+_mars["timeout"]+(_str.length>0?",":"")+_str+(_mars["timeout"]==0?"":";expires="+new Date(parseInt(_mars["timeout"])).toGMTString());}}
this.Create=function(name,days)
{days=days?days:0;if(!this._Cookie[name])this._Cookie[name]=[];this._Cookie[name]["timeout"]=days!=0?new Date().getTime()+parseInt(days)*86400000:0;}
this.Modify=function(name,days)
{this.Create(name,days);}
this.Delete=function(name)
{this.Create(name,0);}
this.AddItem=function(name,value)
{this._Cookie[name][this._Cookie[name].length]=value;}
this.DelItem=function(name,index)
{var _ttime=this._Cookie[name]["timeout"];this._Cookie[name]=this._Cookie[name].slice(0,index).concat(this._Cookie[name].slice(parseInt(index)+1,this._Cookie[name].length));this._Cookie[name]["timeout"]=_ttime;}
this.GetItem=function(name,index)
{return this._Cookie[name][index];}
this.GetTime=function(name)
{return new Date(parseInt(this._Cookie[name]["timeout"]));}
this.GetCount=function(name)
{return this._Cookie[name].length;}
this.GetCookieCount=function()
{var _length=0,key;for(key in this._Cookie)_length++;return _length;}
this.SetCookie=function(name,value)
{var today=new Date()
var expires=new Date()
expires.setTime(today.getTime()+1000*60*60*24*365)
document.cookie=name+"="+escape(value)+"; expires="+expires.toGMTString()}
this.GetCookie=function(Name)
{var search=Name+"="
if(document.cookie.length>0)
{offset=document.cookie.indexOf(search)
if(offset!=-1)
{offset+=search.length
end=document.cookie.indexOf(";",offset)
if(end==-1)end=document.cookie.length
return unescape(document.cookie.substring(offset,end))}}
return""}}
Number.prototype.Fix=function()
{return numFix(this)}
Number.prototype.Int=function()
{return numInt(this)}
Array.prototype.Clear=function()
{this.length=0;}
Array.prototype.Max=function()
{var i,max=this[0];for(i=1;i<this.length;i++)
{if(max<this[i])max=this[i];}
return max;}
Array.prototype.Min=function()
{var i,min=this[0];for(i=1;i<this.length;i++)
{if(min>this[i])min=this[i];}
return min;}
Array.prototype.Sum=function()
{var i,sum=0;for(i=0;i<this.length;i++)
{sum+=this[i];}
return sum;}
Array.prototype.Left=function(length)
{return this.slice(0,length);}
Array.prototype.Mid=function(start,length)
{return this.slice(start,start+length);}
Array.prototype.Right=function(length)
{if(length>=this.length)return this;return this.slice(this.length-length,this.length);}
String.prototype.IsDate=function()
{var myReg=/^(\d{4})(-|\/|.)(\d{1,2})\2(\d{1,2})$/;var result=this.match(myReg);if(result==null)return false;var test=new Date(result[1],result[3]-1,result[4]);if((test.getFullYear()==result[1])&&(test.getMonth()+1==result[3])&&(test.getDate()==result[4]))
{ActRs.Clear();ActRs[0]=result[1];ActRs[1]=result[3];ActRs[2]=result[4];return true;}
else return false;}
String.prototype.IsTime=function()
{var myReg=/^(\d{1,2})(:)(\d{1,2})\2(\d{1,2})$/;var result=this.match(myReg);if(result==null)return false;var test=new Date(2000,1,1,result[1],result[3],result[4]);if((test.getHours()==result[1])&&(test.getMinutes()==result[3])&&(test.getSeconds()==result[4]))
{ActRs[3]=result[1];ActRs[4]=result[3];ActRs[5]=result[4];return true;}
else
{return false;}}
String.prototype.IsDateTime=function()
{var myReg=this.split(" ");if(myReg.length!=2)return false;if(myReg[0].IsDate()&&myReg[1].IsTime())return true;return false;}
String.prototype.IsEmail=function()
{var myReg=/[\u4e00-\u9fa5]/;if(!myReg.test(this))
{myReg=/^[_a-zA-Z0-9][-._a-zA-Z0-9]*@[-._a-zA-Z0-9]+\.[-._a-zA-Z0-9]+(\.[-._a-zA-Z])*$/;if(myReg.test(this))return true;}
else
{myReg=/^[_a-zA-Z0-9\u4e00-\u9fa5][-_.a-zA-Z0-9\u4e00-\u9fa5]*@[-._a-zA-Z0-9\u4e00-\u9fa5]+(\.[-._0-9a-zA-Z\u4e00-\u9fa5]+)*$/;if(myReg.test(this))return true;}
return false;}
String.prototype.IsIdcard=function()
{var myReg=/^[1-9][0-9]{14}$|^[1-9][0-9]{16}[0-9a-zA-Z]$/;if(myReg.test(this))return true;return false;}
String.prototype.IsTelephone=function()
{myReg=/[(]/;if(!myReg.test(this))
{myReg=/^[1-9][0-9]{6,7}$|^[0-9]{3,4}-[1-9][0-9]{6,7}$|^[0-9]{3,4}-[1-9][0-9]{6,7}-[0-9]{2,8}$/;if(myReg.test(this))return true;}
return false;}
String.prototype.IsTelephone2=function()
{myReg=/^[0-9]{7,}$|^[0-9]{3,}-[0-9]{7,}$|^[0-9]{3,4}-[0-9]{3,}-[0-9]{4,}$/;if(myReg.test(this))return true;return false;}
String.prototype.IsNumber=function()
{var myReg=/^[0-9]+$/;if(!myReg.test(this))return false;ActRd=parseInt(this)
return true;}
String.prototype.IsFloat=function()
{var myReg=/^[0-9.]+$/;if(!myReg.test(this))return false;var pos=this.indexOf('.')
if(pos==-1)return false;if(pos!=this.lastIndexOf('.'))return false;if(pos==0||(pos+1)==this.length)return false;ActRd=parseFloat(this)
return true;}
String.prototype.IsPhone=function()
{if(!this.IsNumber())return false;if(this.length!=11||this<13000000000||this>13999999999)return false;return true;}
String.prototype.IsDomain=function()
{var myReg=/^[0-9a-zA-Z\-]+$/;if(myReg.test(this))return true;return false;}
String.prototype.IsAvail=function()
{var myReg=/^[0-9a-zA-Z]+$/;if(myReg.test(this))return true;return false;}
String.prototype.IsEn=function()
{var myReg=/^[a-zA-Z]+$/;if(myReg.test(this))return true;return false;}
String.prototype.ConvertHtml=function()
{var tmp=this.replace(/\&/g,"&amp;");tmp=tmp.replace(/\"/g,"&quot;");tmp=tmp.replace(/ /g,"&nbsp;");tmp=tmp.replace(/</g,"&lt;");tmp=tmp.replace(/>/g,"&gt;");return tmp;}
String.prototype.ConvertHtmlWithN=function()
{var tmp=this.replace(/\&/g,"&amp;");tmp=tmp.replace(/\"/g,"&quot;");tmp=tmp.replace(/ /g,"&nbsp;");tmp=tmp.replace(/</g,"&lt;");tmp=tmp.replace(/>/g,"&gt;");tmp=tmp.replace(/\r\n/g,"<br>");return tmp;}
String.prototype.ConvertHtmlWithP=function()
{var tmp=this.replace(/\&/g,"&amp;");tmp=tmp.replace(/\"/g,"&quot;");tmp=tmp.replace(/ /g,"&nbsp;");tmp=tmp.replace(/</g,"&lt;");tmp=tmp.replace(/>/g,"&gt;");tmp=tmp.replace(/\r\n/g,"</p><p>");return tmp;}
String.prototype.IsCn=function()
{var ch,temp,isCN,isTrue;isTrue=true;for(var i=0;i<this.length;i++)
{ch=this.substring(i,i+1);temp=escape(ch);isCN=(temp.length==6)?true:false;if(!isCN)
{isTrue=false;break;}}
return isTrue;}
String.prototype.isCom_sep_char=function()
{var myReg=/^[-()_+*]*$/;if(myReg.test(this))return true;return false;}
String.prototype.IsReg1=function()
{var s,i;for(i=0;i<this.length;i++)
{s=this.charAt(i);if(s.IsNumber()||s.IsEn()||s.IsCn())continue;return false;}
return i?true:false;}
String.prototype.IsReg12=function()
{var s,i;for(i=0;i<this.length;i++)
{s=this.charAt(i);if(s.IsNumber()||s.IsEn()||s.IsCn()||s.isCom_sep_char())continue;return false;}
return i?true:false;}
String.prototype.Trim=function()
{var tmp=this.replace(/(^\s*)|(\s*$)/g,"");return tmp.replace(/(^\2005-9-28*)|(\　*$)/g,"");}
String.prototype.Left=function(n)
{return strLeft(this,n);}
String.prototype.Right=function(n)
{return strRight(this,n);}
String.prototype.Len=function()
{var len=0;for(var i=0;i<this.length;i++)
{if(this.charCodeAt(i)>255)
{len+=2;}
else
{len++;}}
return len;}
String.prototype.Text=function()
{var elm=document.createElement("DIV");elm.innerHTML=this;return elm.innerText;}
String.prototype.Html=function()
{var elm=document.createElement("DIV");elm.innerText=this;return elm.innerHTML;}
String.prototype.Escape=function()
{return escape(this);}
String.prototype.UnEscape=function()
{return unescape(this);}
String.prototype.toInt=function()
{return parseInt(this);}
String.prototype.toFloat=function()
{return parseFloat(this);}
String.prototype.toHex=function()
{if(!this.IsNumber())return"";var x=parseInt(this);var out="";var remainder;while(x>0)
{remainder=x%16;if(remainder<10)
{out=remainder+out;}
else if(remainder==10)
{out="a"+out;}
else if(remainder==11)
{out="b"+out;}
else if(remainder==12)
{out="c"+out;}
else if(remainder==13)
{out="d"+out;}
else if(remainder==14)
{out="e"+out;}
else if(remainder==15)
{out="f"+out;}
x=Math.floor(x/16);}
return out;}
String.prototype.toDate=function()
{ActRs.Clear();this.IsDate();return new Date(ActRs[0],ActRs[1]-1,ActRs[2]);}
String.prototype.Hexto=function()
{var myReg=/^[0-9a-fA-F]+$/;if(!myReg.test(this))return"0";ActRd=parseInt(this,16);return""+ActRd;}
String.prototype.Octto=function()
{var myReg=/^[0-7]+$/;if(!myReg.test(this))return"0";ActRd=parseInt(this,8);return""+ActRd;}
String.prototype.Binto=function()
{var myReg=/^[0-1]+$/;if(!myReg.test(this))return"0";ActRd=parseInt(this,2);return""+ActRd;}
String.prototype.Repeat=function(n)
{if(typeof(n)!="number")return"";var out=this;for(var i=1;i<n;i++)out+=this;return out;}
String.prototype.Reverse=function()
{var out="";for(var i=this.length;i>=0;i--)
{out+=this.charAt(i);}
return out;}
String.prototype.Comp=function(str,m)
{return Compstr(this,str,m);}
String.prototype.addDate=function(mode,d)
{return addDate(mode,d,this);}
String.prototype.Count=function()
{var out=new Array(256);for(var i=0;i<this.length;i++)
{if(out[this.charCodeAt(i)]==undefined)
{out[this.charCodeAt(i)]=1;}
else
{out[this.charCodeAt(i)]++;}}
return out;}
function cutStr(str,strlen)
{var temp_i=0;var temp=0;var temp_str="";for(temp_i=0;temp_i<str.length;temp_i++)
{if(Math.abs(str.charCodeAt(temp_i))>255)
{temp+=2;}
else
{temp+=1;}
if(temp>strlen)
{temp_str=str.substr(0,temp_i)+"...";break;}
else
{temp_str=str;}}
return temp_str;}
String.prototype.myEncode=function()
{return this.replace(/\&/g,"%26").replace(/\?/g,"%3F").replace(/\#/g,"%23").replace(/\+/g,"%2B");}
function generateQueryString(aform)
{var qstr="";if(aform!=null)
{for(var i=0;i<aform.length;i++)
{if(aform[i].type=="text"||aform[i].type=="textarea")
{qstr+=aform[i].name+"="+aform[i].value.myEncode()+"&";}
else if(aform[i].type=="radio")
{if(aform[i].checked)
{qstr+=aform[i].name+"="+aform[i].value.myEncode()+"&";}}
else if(aform[i].type=="checkbox")
{if(aform[i].checked)
{qstr+=aform[i].name+"="+aform[i].value.myEncode()+"&";}}
else if(aform[i].type=="button")
{}
else
{qstr+=aform[i].name+"="+aform[i].value.myEncode()+"&";}}
if(qstr.length>0)
{qstr=qstr.substring(0,qstr.length-1);}}
return qstr;}
function setCookie(name,value,path,domain)
{var curCookie=name+"="+escape(value)+"; expires=Thu, 6 Jan 2033 08:05:36 UTC"+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"");document.cookie=curCookie;}
function getCookie(name)
{var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1)
{begin=dc.indexOf(prefix);if(begin!=0)return null;}
else
{begin+=2;}
var end=document.cookie.indexOf(";",begin);if(end==-1)
{end=dc.length;}
return unescape(dc.substring(begin+prefix.length,end));}
function deleteCookie(name,path,domain)
{if(getCookie(name))
{document.cookie=name+"="+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT";}};$(function(){jQuery.extend({createUploadIframe:function(id,uri)
{var frameId='jUploadFrame'+id;var iframeHtml='<iframe id="'+frameId+'" name="'+frameId+'" style="position:absolute; top:-9999px; left:-9999px"';if(window.ActiveXObject)
{if(typeof uri=='boolean'){iframeHtml+=' src="'+'javascript:false'+'"';}
else if(typeof uri=='string'){iframeHtml+=' src="'+uri+'"';}}
iframeHtml+=' />';jQuery(iframeHtml).appendTo(document.body);return jQuery('#'+frameId).get(0);},createUploadForm:function(id,fileElementId,data)
{var formId='jUploadForm'+id;var fileId='jUploadFile'+id;var form=jQuery('<form  action="" method="POST" name="'+formId+'" id="'+formId+'" enctype="multipart/form-data"></form>');if(data)
{for(var i in data)
{jQuery('<input type="hidden" name="'+i+'" value="'+data[i]+'" />').appendTo(form);}}
var oldElement=jQuery('#'+fileElementId);var newElement=jQuery(oldElement).clone();jQuery(oldElement).attr('id',fileId);jQuery(oldElement).before(newElement);jQuery(oldElement).appendTo(form);jQuery(form).css('position','absolute');jQuery(form).css('top','-1200px');jQuery(form).css('left','-1200px');jQuery(form).appendTo('body');return form;},ajaxFileUpload:function(s){s=jQuery.extend({},jQuery.ajaxSettings,s);var id=new Date().getTime();var form=jQuery.createUploadForm(id,s.fileElementId,(typeof(s.data)=='undefined'?false:s.data));var io=jQuery.createUploadIframe(id,s.secureuri);var frameId='jUploadFrame'+id;var formId='jUploadForm'+id;if(s.global&&!jQuery.active++)
{jQuery.event.trigger("ajaxStart");}
var requestDone=false;var xml={}
if(s.global)
jQuery.event.trigger("ajaxSend",[xml,s]);var uploadCallback=function(isTimeout)
{var io=document.getElementById(frameId);try
{if(io.contentWindow)
{xml.responseText=io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;xml.responseXML=io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;}else if(io.contentDocument)
{xml.responseText=io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;xml.responseXML=io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;}}catch(e)
{jQuery.handleError(s,xml,null,e);}
if(xml||isTimeout=="timeout")
{requestDone=true;var status;try{status=isTimeout!="timeout"?"success":"error";if(status!="error")
{var data=jQuery.uploadHttpData(xml,s.dataType);if(s.success)
s.success(data,status);if(s.global)
jQuery.event.trigger("ajaxSuccess",[xml,s]);}else
jQuery.handleError(s,xml,status);}catch(e)
{status="error";jQuery.handleError(s,xml,status,e);}
if(s.global)
jQuery.event.trigger("ajaxComplete",[xml,s]);if(s.global&&!--jQuery.active)
jQuery.event.trigger("ajaxStop");if(s.complete)
s.complete(xml,status);jQuery(io).unbind()
setTimeout(function()
{try
{jQuery(io).remove();jQuery(form).remove();}catch(e)
{jQuery.handleError(s,xml,null,e);}},100)
xml=null}}
if(s.timeout>0)
{setTimeout(function(){if(!requestDone)uploadCallback("timeout");},s.timeout);}
try
{var form=jQuery('#'+formId);jQuery(form).attr('action',s.url);jQuery(form).attr('method','POST');jQuery(form).attr('target',frameId);if(form.encoding)
{jQuery(form).attr('encoding','multipart/form-data');}
else
{jQuery(form).attr('enctype','multipart/form-data');}
jQuery(form).submit();}catch(e)
{jQuery.handleError(s,xml,null,e);}
jQuery('#'+frameId).load(uploadCallback);return{abort:function(){}};},uploadHttpData:function(r,type){var data=!type;data=type=="xml"||data?r.responseXML:r.responseText;if(type=="script")
jQuery.globalEval(data);if(type=="json")
eval("data = "+data);if(type=="html")
jQuery("<div>").html(data).evalScripts();return data;},handleError:function(s,xhr,status,e){if(s.error){s.error.call(s.context||s,xhr,status,e);}
if(s.global){(s.context?jQuery(s.context):jQuery.event).trigger("ajaxError",[xhr,s,e]);}}})})