import{g as D,i as fr}from"./@popperjs-b0a63116.js";import{i as lr}from"./is-base64-e632f7a3.js";import{F as cr}from"./file-saver-db02bc5c.js";import{b as dr}from"./js-base64-10f4456e.js";import{r as pr,p as hr}from"./pdfjs-dist-16da7544.js";import{r as mr}from"./print-js-5f97398e.js";var pe={exports:{}},me={exports:{}},Ve=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},vr=Ve,ve=Object.prototype.toString,we=function(r){return function(e){var t=ve.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function L(r){return r=r.toLowerCase(),function(t){return we(t)===r}}function be(r){return Array.isArray(r)}function J(r){return typeof r>"u"}function wr(r){return r!==null&&!J(r)&&r.constructor!==null&&!J(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var We=L("ArrayBuffer");function br(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&We(r.buffer),e}function yr(r){return typeof r=="string"}function Er(r){return typeof r=="number"}function Xe(r){return r!==null&&typeof r=="object"}function H(r){if(we(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Rr=L("Date"),_r=L("File"),gr=L("Blob"),Or=L("FileList");function ye(r){return ve.call(r)==="[object Function]"}function xr(r){return Xe(r)&&ye(r.pipe)}function Ar(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||ve.call(r)===e||ye(r.toString)&&r.toString()===e)}var Cr=L("URLSearchParams");function Pr(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Sr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Ee(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),be(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function he(){var r={};function e(n,a){H(r[a])&&H(n)?r[a]=he(r[a],n):H(n)?r[a]=he({},n):be(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)Ee(arguments[t],e);return r}function Tr(r,e,t){return Ee(e,function(n,a){t&&typeof n=="function"?r[a]=vr(n,t):r[a]=n}),r}function Dr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Nr(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function qr(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function Br(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function Ur(r){if(!r)return null;var e=r.length;if(J(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var kr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),_={isArray:be,isArrayBuffer:We,isBuffer:wr,isFormData:Ar,isArrayBufferView:br,isString:yr,isNumber:Er,isObject:Xe,isPlainObject:H,isUndefined:J,isDate:Rr,isFile:_r,isBlob:gr,isFunction:ye,isStream:xr,isURLSearchParams:Cr,isStandardBrowserEnv:Sr,forEach:Ee,merge:he,extend:Tr,trim:Pr,stripBOM:Dr,inherits:Nr,toFlatObject:qr,kindOf:we,kindOfTest:L,endsWith:Br,toArray:Ur,isTypedArray:kr,isFileList:Or},j=_;function ge(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ge=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(j.isURLSearchParams(t))n=t.toString();else{var a=[];j.forEach(t,function(l,v){l===null||typeof l>"u"||(j.isArray(l)?v=v+"[]":l=[l],j.forEach(l,function(w){j.isDate(w)?w=w.toISOString():j.isObject(w)&&(w=JSON.stringify(w)),a.push(ge(v)+"="+ge(w))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Lr=_;function V(){this.handlers=[]}V.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};V.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};V.prototype.forEach=function(e){Lr.forEach(this.handlers,function(i){i!==null&&e(i)})};var jr=V,Ir=_,Fr=function(e,t){Ir.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},Ke=_;function F(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Ke.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Qe=F.prototype,Ye={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ye[r]={value:r}});Object.defineProperties(F,Ye);Object.defineProperty(Qe,"isAxiosError",{value:!0});F.from=function(r,e,t,i,n,a){var s=Object.create(Qe);return Ke.toFlatObject(r,s,function(l){return l!==Error.prototype}),F.call(s,r.message,e,t,i,n),s.name=r.name,a&&Object.assign(s,a),s};var M=F,Ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},T=_;function $r(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":T.isDate(a)?a.toISOString():T.isArrayBuffer(a)||T.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(T.isPlainObject(a)||T.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),T.forEach(a,function(l,v){if(!T.isUndefined(l)){var h=s?s+"."+v:v,w;if(l&&!s&&typeof l=="object"){if(T.endsWith(v,"{}"))l=JSON.stringify(l);else if(T.endsWith(v,"[]")&&(w=T.toArray(l))){w.forEach(function(f){!T.isUndefined(f)&&e.append(h,i(f))});return}}n(l,h)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var er=$r,Y,Oe;function Mr(){if(Oe)return Y;Oe=1;var r=M;return Y=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},Y}var Z,xe;function Hr(){if(xe)return Z;xe=1;var r=_;return Z=r.isStandardBrowserEnv()?function(){return{write:function(i,n,a,s,u,l){var v=[];v.push(i+"="+encodeURIComponent(n)),r.isNumber(a)&&v.push("expires="+new Date(a).toGMTString()),r.isString(s)&&v.push("path="+s),r.isString(u)&&v.push("domain="+u),l===!0&&v.push("secure"),document.cookie=v.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Z}var zr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Jr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Vr=zr,Wr=Jr,rr=function(e,t){return e&&!Vr(t)?Wr(e,t):t},ee,Ae;function Xr(){if(Ae)return ee;Ae=1;var r=_,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return ee=function(i){var n={},a,s,u;return i&&r.forEach(i.split(`
`),function(v){if(u=v.indexOf(":"),a=r.trim(v.substr(0,u)).toLowerCase(),s=r.trim(v.substr(u+1)),a){if(n[a]&&e.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([s]):n[a]=n[a]?n[a]+", "+s:s}}),n},ee}var re,Ce;function Gr(){if(Ce)return re;Ce=1;var r=_;return re=r.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(s){var u=s;return t&&(i.setAttribute("href",u),u=i.href),i.setAttribute("href",u),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(u){var l=r.isString(u)?a(u):u;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),re}var te,Pe;function W(){if(Pe)return te;Pe=1;var r=M,e=_;function t(i){r.call(this,i??"canceled",r.ERR_CANCELED),this.name="CanceledError"}return e.inherits(t,r,{__CANCEL__:!0}),te=t,te}var ne,Se;function Kr(){return Se||(Se=1,ne=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}),ne}var ie,Te;function De(){if(Te)return ie;Te=1;var r=_,e=Mr(),t=Hr(),i=Ge,n=rr,a=Xr(),s=Gr(),u=Ze,l=M,v=W(),h=Kr();return ie=function(f){return new Promise(function(K,q){var U=f.data,d=f.headers,c=f.responseType,p;function m(){f.cancelToken&&f.cancelToken.unsubscribe(p),f.signal&&f.signal.removeEventListener("abort",p)}r.isFormData(U)&&r.isStandardBrowserEnv()&&delete d["Content-Type"];var o=new XMLHttpRequest;if(f.auth){var b=f.auth.username||"",S=f.auth.password?unescape(encodeURIComponent(f.auth.password)):"";d.Authorization="Basic "+btoa(b+":"+S)}var O=n(f.baseURL,f.url);o.open(f.method.toUpperCase(),i(O,f.params,f.paramsSerializer),!0),o.timeout=f.timeout;function g(){if(o){var y="getAllResponseHeaders"in o?a(o.getAllResponseHeaders()):null,N=!c||c==="text"||c==="json"?o.responseText:o.response,k={data:N,status:o.status,statusText:o.statusText,headers:y,config:f,request:o};e(function(Q){K(Q),m()},function(Q){q(Q),m()},k),o=null}}if("onloadend"in o?o.onloadend=g:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(g)},o.onabort=function(){o&&(q(new l("Request aborted",l.ECONNABORTED,f,o)),o=null)},o.onerror=function(){q(new l("Network Error",l.ERR_NETWORK,f,o,o)),o=null},o.ontimeout=function(){var N=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded",k=f.transitional||u;f.timeoutErrorMessage&&(N=f.timeoutErrorMessage),q(new l(N,k.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,f,o)),o=null},r.isStandardBrowserEnv()){var x=(f.withCredentials||s(O))&&f.xsrfCookieName?t.read(f.xsrfCookieName):void 0;x&&(d[f.xsrfHeaderName]=x)}"setRequestHeader"in o&&r.forEach(d,function(N,k){typeof U>"u"&&k.toLowerCase()==="content-type"?delete d[k]:o.setRequestHeader(k,N)}),r.isUndefined(f.withCredentials)||(o.withCredentials=!!f.withCredentials),c&&c!=="json"&&(o.responseType=f.responseType),typeof f.onDownloadProgress=="function"&&o.addEventListener("progress",f.onDownloadProgress),typeof f.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",f.onUploadProgress),(f.cancelToken||f.signal)&&(p=function(y){o&&(q(!y||y&&y.type?new v:y),o.abort(),o=null)},f.cancelToken&&f.cancelToken.subscribe(p),f.signal&&(f.signal.aborted?p():f.signal.addEventListener("abort",p))),U||(U=null);var A=h(O);if(A&&["http","https","file"].indexOf(A)===-1){q(new l("Unsupported protocol "+A+":",l.ERR_BAD_REQUEST,f));return}o.send(U)})},ie}var ae,Ne;function Qr(){return Ne||(Ne=1,ae=null),ae}var E=_,qe=Fr,Be=M,Yr=Ze,Zr=er,et={"Content-Type":"application/x-www-form-urlencoded"};function Ue(r,e){!E.isUndefined(r)&&E.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function rt(){var r;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(r=De()),r}function tt(r,e,t){if(E.isString(r))try{return(e||JSON.parse)(r),E.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var X={transitional:Yr,adapter:rt(),transformRequest:[function(e,t){if(qe(t,"Accept"),qe(t,"Content-Type"),E.isFormData(e)||E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return Ue(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=E.isObject(e),n=t&&t["Content-Type"],a;if((a=E.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Zr(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return Ue(t,"application/json"),tt(e);return e}],transformResponse:[function(e){var t=this.transitional||X.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&E.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?Be.from(s,Be.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qr()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(e){X.headers[e]={}});E.forEach(["post","put","patch"],function(e){X.headers[e]=E.merge(et)});var Re=X,nt=_,it=Re,at=function(e,t,i){var n=this||it;return nt.forEach(i,function(s){e=s.call(n,e,t)}),e},se,ke;function tr(){return ke||(ke=1,se=function(e){return!!(e&&e.__CANCEL__)}),se}var Le=_,oe=at,st=tr(),ot=Re,ut=W();function ue(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new ut}var ft=function(e){ue(e),e.headers=e.headers||{},e.data=oe.call(e,e.data,e.headers,e.transformRequest),e.headers=Le.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Le.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||ot.adapter;return t(e).then(function(n){return ue(e),n.data=oe.call(e,n.data,n.headers,e.transformResponse),n},function(n){return st(n)||(ue(e),n&&n.response&&(n.response.data=oe.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},P=_,nr=function(e,t){t=t||{};var i={};function n(h,w){return P.isPlainObject(h)&&P.isPlainObject(w)?P.merge(h,w):P.isPlainObject(w)?P.merge({},w):P.isArray(w)?w.slice():w}function a(h){if(P.isUndefined(t[h])){if(!P.isUndefined(e[h]))return n(void 0,e[h])}else return n(e[h],t[h])}function s(h){if(!P.isUndefined(t[h]))return n(void 0,t[h])}function u(h){if(P.isUndefined(t[h])){if(!P.isUndefined(e[h]))return n(void 0,e[h])}else return n(void 0,t[h])}function l(h){if(h in t)return n(e[h],t[h]);if(h in e)return n(void 0,e[h])}var v={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return P.forEach(Object.keys(e).concat(Object.keys(t)),function(w){var f=v[w]||a,R=f(w);P.isUndefined(R)&&f!==l||(i[w]=R)}),i},fe,je;function ir(){return je||(je=1,fe={version:"0.27.2"}),fe}var lt=ir().version,B=M,_e={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){_e[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var Ie={};_e.transitional=function(e,t,i){function n(a,s){return"[Axios v"+lt+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,u){if(e===!1)throw new B(n(s," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!Ie[s]&&(Ie[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,u):!0}};function ct(r,e,t){if(typeof r!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var u=r[a],l=u===void 0||s(u,a,r);if(l!==!0)throw new B("option "+a+" must be "+l,B.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new B("Unknown option "+a,B.ERR_BAD_OPTION)}}var dt={assertOptions:ct,validators:_e},ar=_,pt=Ge,Fe=jr,$e=ft,G=nr,ht=rr,sr=dt,I=sr.validators;function $(r){this.defaults=r,this.interceptors={request:new Fe,response:new Fe}}$.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=G(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&sr.assertOptions(i,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(a=a&&R.synchronous,n.unshift(R.fulfilled,R.rejected))});var s=[];this.interceptors.response.forEach(function(R){s.push(R.fulfilled,R.rejected)});var u;if(!a){var l=[$e,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(s),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var v=t;n.length;){var h=n.shift(),w=n.shift();try{v=h(v)}catch(f){w(f);break}}try{u=$e(v)}catch(f){return Promise.reject(f)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};$.prototype.getUri=function(e){e=G(this.defaults,e);var t=ht(e.baseURL,e.url);return pt(t,e.params,e.paramsSerializer)};ar.forEach(["delete","get","head","options"],function(e){$.prototype[e]=function(t,i){return this.request(G(i||{},{method:e,url:t,data:(i||{}).data}))}});ar.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,u){return this.request(G(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}$.prototype[e]=t(),$.prototype[e+"Form"]=t(!0)});var mt=$,le,Me;function vt(){if(Me)return le;Me=1;var r=W();function e(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(s){i=s});var n=this;this.promise.then(function(a){if(n._listeners){var s,u=n._listeners.length;for(s=0;s<u;s++)n._listeners[s](a);n._listeners=null}}),this.promise.then=function(a){var s,u=new Promise(function(l){n.subscribe(l),s=l}).then(a);return u.cancel=function(){n.unsubscribe(s)},u},t(function(s){n.reason||(n.reason=new r(s),i(n.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},e.prototype.unsubscribe=function(i){if(this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},e.source=function(){var i,n=new e(function(s){i=s});return{token:n,cancel:i}},le=e,le}var ce,He;function wt(){return He||(He=1,ce=function(e){return function(i){return e.apply(null,i)}}),ce}var de,ze;function bt(){if(ze)return de;ze=1;var r=_;return de=function(t){return r.isObject(t)&&t.isAxiosError===!0},de}var Je=_,yt=Ve,z=mt,Et=nr,Rt=Re;function or(r){var e=new z(r),t=yt(z.prototype.request,e);return Je.extend(t,z.prototype,e),Je.extend(t,e),t.create=function(n){return or(Et(r,n))},t}var C=or(Rt);C.Axios=z;C.CanceledError=W();C.CancelToken=vt();C.isCancel=tr();C.VERSION=ir().version;C.toFormData=er;C.AxiosError=M;C.Cancel=C.CanceledError;C.all=function(e){return Promise.all(e)};C.spread=wt();C.isAxiosError=bt();me.exports=C;me.exports.default=C;var _t=me.exports,gt=_t;(function(r,e){var t=D&&D.__createBinding||(Object.create?function(d,c,p,m){m===void 0&&(m=p);var o=Object.getOwnPropertyDescriptor(c,p);(!o||("get"in o?!c.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return c[p]}}),Object.defineProperty(d,m,o)}:function(d,c,p,m){m===void 0&&(m=p),d[m]=c[p]}),i=D&&D.__setModuleDefault||(Object.create?function(d,c){Object.defineProperty(d,"default",{enumerable:!0,value:c})}:function(d,c){d.default=c}),n=D&&D.__importStar||function(d){if(d&&d.__esModule)return d;var c={};if(d!=null)for(var p in d)p!=="default"&&Object.prototype.hasOwnProperty.call(d,p)&&t(c,d,p);return i(c,d),c},a=D&&D.__awaiter||function(d,c,p,m){function o(b){return b instanceof p?b:new p(function(S){S(b)})}return new(p||(p=Promise))(function(b,S){function O(A){try{x(m.next(A))}catch(y){S(y)}}function g(A){try{x(m.throw(A))}catch(y){S(y)}}function x(A){A.done?b(A.value):o(A.value).then(O,g)}x((m=m.apply(d,c||[])).next())})},s=D&&D.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.EasyInvoice=void 0;const u=s(gt),l=s(lr),v=s(cr),h=dr,w=hr;let f;typeof window<"u"&&Promise.resolve().then(()=>n(mr())).then(d=>{f=d.default}).catch(d=>{console.error("Failed to load print-js:",d)}),a(void 0,void 0,void 0,function*(){w.GlobalWorkerOptions.workerSrc=yield Promise.resolve().then(()=>n(pr()))});class R{constructor(c,p,m,o){this._pdf=c,this._totalPages=p,this._renderedPdf=m,this._elementId=o}createInvoice(c,p=()=>{}){return new Promise((m,o)=>{const b="https://api.easyinvoice.cloud/v2/free/invoices",S={data:c},O={headers:{"easyinvoice-source":"npm"}};u.default.create().post(b,S,O).then(g=>{const x=g.data.data;this._pdf=x.pdf,m(x),p(x)}).catch(g=>{console.log(g.response.data),o(g.response.data),p(g.response.data)})})}download(c="invoice.pdf",p=this._pdf){if(c===void 0||(0,l.default)(c))throw new Error("Invalid filename.");if(typeof window>"u")throw new Error("Easy Invoice download() is only supported in the browser.");K(c,"application/pdf",p)}print(c=this._pdf){f({printable:c,type:"pdf",base64:!0})}render(c,p=this._pdf,m=()=>{}){return new Promise(o=>{if(typeof window>"u")throw new Error("Easy Invoice render() is only supported in the browser.");this._elementId=c,this.renderPdf(p,function(b){o(b),m(b)})})}renderPdf(c,p){(0,w.getDocument)({data:h.Base64.atob(c)}).promise.then(o=>{this._totalPages=o.numPages,this._renderedPdf=o,this.renderPage(1,p)},function(o){console.error(o)})}renderPage(c,p){this._renderedPdf.getPage(c).then(m=>{const o=document.createElement("canvas"),b=U()?m.getViewport({scale:window.screen.width/m.getViewport({scale:1}).width}):m.getViewport({scale:Math.max(window.devicePixelRatio||1,1)});document.getElementById(this._elementId).innerHTML="",document.getElementById(this._elementId).appendChild(o);const O=o.getContext("2d");o.height=b.height,o.width=b.width;const g={canvasContext:O,viewport:b};m.render(g).promise.then(function(){p(!0)})})}}e.EasyInvoice=R;function K(d,c,p){const m=q(p,c);v.default.saveAs(m,d)}function q(d,c){c=c||"";const p=1024,m=h.Base64.atob(d),o=m.length,b=Math.ceil(o/p),S=new Array(b);for(let O=0;O<b;++O){const g=O*p,x=Math.min(g+p,o),A=new Array(x-g);for(let y=g,N=0;y<x;++N,++y)A[N]=m[y].charCodeAt(0);S[O]=new Uint8Array(A)}return new Blob(S,{type:c})}function U(){var d=navigator.userAgent;return!!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(d)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(d.substr(0,4)))}e.default=new R,typeof window>"u"&&(r.exports=new R),globalThis.easyinvoice=new R})(pe,pe.exports);var Ot=pe.exports;const Dt=fr(Ot);export{Dt as e};