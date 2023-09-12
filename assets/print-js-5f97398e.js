var v={exports:{}},j;function S(){return j||(j=1,function(M,O){(function(a,n){M.exports=n()})(window,function(){return function(h){var a={};function n(o){if(a[o])return a[o].exports;var s=a[o]={i:o,l:!1,exports:{}};return h[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=h,n.c=a,n.d=function(o,s,f){n.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:f})},n.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,s){if(s&1&&(o=n(o)),s&8||s&4&&typeof o=="object"&&o&&o.__esModule)return o;var f=Object.create(null);if(n.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:o}),s&2&&typeof o!="string")for(var b in o)n.d(f,b,function(i){return o[i]}.bind(null,b));return f},n.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(s,"a",s),s},n.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},n.p="",n(n.s=0)}({"./src/index.js":function(h,a,n){n.r(a),n("./src/sass/index.scss");var o=n("./src/js/init.js"),s=o.default.init;typeof window<"u"&&(window.printJS=s),a.default=s},"./src/js/browser.js":function(h,a,n){n.r(a);var o={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!f.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};a.default=o},"./src/js/functions.js":function(h,a,n){n.r(a),n.d(a,"addWrapper",function(){return b}),n.d(a,"capitalizePrint",function(){return i}),n.d(a,"collectStyles",function(){return l}),n.d(a,"addHeader",function(){return e}),n.d(a,"cleanUp",function(){return u}),n.d(a,"isRawHTML",function(){return y});var o=n("./src/js/modal.js"),s=n("./src/js/browser.js");function f(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(c){return typeof c}:f=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},f(t)}function b(t,d){var c="font-family:"+d.font+" !important; font-size: "+d.font_size+" !important; width:100%;";return'<div style="'+c+'">'+t+"</div>"}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,d){for(var c=document.defaultView||window,E="",p=c.getComputedStyle(t,""),m=0;m<p.length;m++)(d.targetStyles.indexOf("*")!==-1||d.targetStyle.indexOf(p[m])!==-1||r(d.targetStyles,p[m]))&&p.getPropertyValue(p[m])&&(E+=p[m]+":"+p.getPropertyValue(p[m])+";");return E+="max-width: "+d.maxWidth+"px !important; font-size: "+d.font_size+" !important;",E}function r(t,d){for(var c=0;c<t.length;c++)if(f(d)==="object"&&d.indexOf(t[c])!==-1)return!0;return!1}function e(t,d){var c=document.createElement("div");if(y(d.header))c.innerHTML=d.header;else{var E=document.createElement("h1"),p=document.createTextNode(d.header);E.appendChild(p),E.setAttribute("style",d.headerStyle),c.appendChild(E)}t.insertBefore(c,t.childNodes[0])}function u(t){t.showModal&&o.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var d="mouseover";(s.default.isChrome()||s.default.isFirefox())&&(d="focus");var c=function E(){window.removeEventListener(d,E),t.onPrintDialogClose();var p=document.getElementById(t.frameId);p&&p.remove()};window.addEventListener(d,c)}function y(t){var d=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return d.test(t)}},"./src/js/html.js":function(h,a,n){n.r(a);var o=n("./src/js/functions.js"),s=n("./src/js/print.js");function f(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(e){return typeof e}:f=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(l)}a.default={print:function(r,e){var u=i(r.printable)?r.printable:document.getElementById(r.printable);if(!u){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=b(u,r),r.header&&Object(o.addHeader)(r.printableElement,r),s.default.send(r,e)}};function b(l,r){for(var e=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),y=0;y<u.length;y++)if(r.ignoreElements.indexOf(u[y].id)===-1){var t=b(u[y],r);e.appendChild(t)}switch(r.scanStyles&&l.nodeType===1&&e.setAttribute("style",Object(o.collectStyles)(l,r)),l.tagName){case"SELECT":e.value=l.value;break;case"CANVAS":e.getContext("2d").drawImage(l,0,0);break}return e}function i(l){return f(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(h,a,n){n.r(a);var o=n("./src/js/functions.js"),s=n("./src/js/print.js"),f=n("./src/js/browser.js");a.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(r){var e=document.createElement("img");if(e.setAttribute("style",i.imageStyle),e.src=r,f.default.isFirefox()){var u=e.src;e.src=u}var y=document.createElement("div");y.appendChild(e),i.printableElement.appendChild(y)}),i.header&&Object(o.addHeader)(i.printableElement,i),s.default.send(i,l)}}},"./src/js/init.js":function(h,a,n){n.r(a);var o=n("./src/js/browser.js"),s=n("./src/js/modal.js"),f=n("./src/js/pdf.js"),b=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),r=n("./src/js/json.js");function e(y){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(d){return typeof d}:e=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},e(y)}var u=["pdf","html","image","json","raw-html"];a.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(P){throw P},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},d=arguments[0];if(d===void 0)throw new Error("printJS expects at least 1 attribute.");switch(e(d)){case"string":t.printable=encodeURI(d),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=d.printable,t.fallbackPrintable=typeof d.fallbackPrintable<"u"?d.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var c in t)c==="printable"||c==="fallbackPrintable"||(t[c]=typeof d[c]<"u"?d[c]:t[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+e(d))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||u.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&s.default.show(t),t.onLoadingStart&&t.onLoadingStart();var E=document.getElementById(t.frameId);E&&E.parentNode.removeChild(E);var p=document.createElement("iframe");switch(o.default.isFirefox()?p.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):p.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),p.setAttribute("id",t.frameId),t.type!=="pdf"&&(p.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(g){p.srcdoc+='<link rel="stylesheet" href="'+g+'">'})),p.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(o.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var m=window.open(t.fallbackPrintable,"_blank");m.focus(),t.onIncompatibleBrowser()}catch(g){t.onError(g)}finally{t.showModal&&s.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else f.default.print(t,p);break;case"image":l.default.print(t,p);break;case"html":b.default.print(t,p);break;case"raw-html":i.default.print(t,p);break;case"json":r.default.print(t,p);break}}}},"./src/js/json.js":function(h,a,n){n.r(a);var o=n("./src/js/functions.js"),s=n("./src/js/print.js");function f(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(r){return typeof r}:f=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},f(i)}a.default={print:function(l,r){if(f(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(e){return{field:f(e)==="object"?e.field:e,displayName:f(e)==="object"?e.displayName:e,columnSize:f(e)==="object"&&e.columnSize?e.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(o.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=b(l),s.default.send(l,r)}};function b(i){var l=i.printable,r=i.properties,e='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(e+="<thead>"),e+="<tr>";for(var u=0;u<r.length;u++)e+='<th style="width:'+r[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(o.capitalizePrint)(r[u].displayName)+"</th>";e+="</tr>",i.repeatTableHeader&&(e+="</thead>"),e+="<tbody>";for(var y=0;y<l.length;y++){e+="<tr>";for(var t=0;t<r.length;t++){var d=l[y],c=r[t].field.split(".");if(c.length>1)for(var E=0;E<c.length;E++)d=d[c[E]];else d=d[r[t].field];e+='<td style="width:'+r[t].columnSize+i.gridStyle+'">'+d+"</td>"}e+="</tr>"}return e+="</tbody></table>",e}},"./src/js/modal.js":function(h,a,n){n.r(a);var o={show:function(f){var b="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",b),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),l.appendChild(r);var e=document.createElement("span");e.setAttribute("class","printSpinner"),l.appendChild(e);var u=document.createTextNode(f.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){o.close()})},close:function(){var f=document.getElementById("printJS-Modal");f&&f.parentNode.removeChild(f)}};a.default=o},"./src/js/pdf.js":function(h,a,n){n.r(a);var o=n("./src/js/print.js"),s=n("./src/js/functions.js");a.default={print:function(i,l){if(i.base64){var r=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});f(i,l,r);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var e=new window.XMLHttpRequest;e.responseType="arraybuffer",e.addEventListener("error",function(){Object(s.cleanUp)(i),i.onError(e.statusText,e)}),e.addEventListener("load",function(){if([200,201].indexOf(e.status)===-1){Object(s.cleanUp)(i),i.onError(e.statusText,e);return}f(i,l,e.response)}),e.open("GET",i.printable,!0),e.send()}};function f(b,i,l){var r=new window.Blob([l],{type:"application/pdf"});r=window.URL.createObjectURL(r),i.setAttribute("src",r),o.default.send(b,i)}},"./src/js/print.js":function(h,a,n){n.r(a);var o=n("./src/js/browser.js"),s=n("./src/js/functions.js"),f={send:function(e,u){document.getElementsByTagName("body")[0].appendChild(u);var y=document.getElementById(e.frameId);y.onload=function(){if(e.type==="pdf"){o.default.isFirefox()?setTimeout(function(){return b(y,e)},1e3):b(y,e);return}var t=y.contentWindow||y.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.type!=="pdf"&&e.style){var d=document.createElement("style");d.innerHTML=e.style,t.head.appendChild(d)}var c=t.getElementsByTagName("img");c.length>0?i(Array.from(c)).then(function(){return b(y,e)}):b(y,e)}}};function b(r,e){try{if(r.focus(),o.default.isEdge()||o.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch{r.contentWindow.print()}else r.contentWindow.print()}catch(u){e.onError(u)}finally{o.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(s.cleanUp)(e)}}function i(r){var e=r.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(e)}function l(r){return new Promise(function(e){var u=function y(){!r||typeof r.naturalWidth>"u"||r.naturalWidth===0||!r.complete?setTimeout(y,500):e()};u()})}a.default=f},"./src/js/raw-html.js":function(h,a,n){n.r(a);var o=n("./src/js/print.js");a.default={print:function(f,b){f.printableElement=document.createElement("div"),f.printableElement.setAttribute("style","width:100%"),f.printableElement.innerHTML=f.printable,o.default.send(f,b)}}},"./src/sass/index.scss":function(h,a,n){},0:function(h,a,n){h.exports=n("./src/index.js")}}).default})}(v)),v.exports}export{S as r};
