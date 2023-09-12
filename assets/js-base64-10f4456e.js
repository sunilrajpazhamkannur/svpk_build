import{g as m}from"./@popperjs-b0a63116.js";var V={exports:{}};(function(L,X){(function(l,b){L.exports=b()})(typeof self<"u"?self:typeof window<"u"?window:typeof m<"u"?m:m,function(){var l="3.7.5",b=l,N=typeof atob=="function",k=typeof btoa=="function",f=typeof Buffer=="function",B=typeof TextDecoder=="function"?new TextDecoder:void 0,_=typeof TextEncoder=="function"?new TextEncoder:void 0,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=Array.prototype.slice.call(G),x=function(r){var t={};return r.forEach(function(e,o){return t[e]=o}),t}(d),$=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,n=String.fromCharCode.bind(String),C=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):function(r){return new Uint8Array(Array.prototype.slice.call(r,0))},U=function(r){return r.replace(/=/g,"").replace(/[+\/]/g,function(t){return t=="+"?"-":"_"})},F=function(r){return r.replace(/[^A-Za-z0-9\+\/]/g,"")},w=function(r){for(var t,e,o,u,a="",g=r.length%3,v=0;v<r.length;){if((e=r.charCodeAt(v++))>255||(o=r.charCodeAt(v++))>255||(u=r.charCodeAt(v++))>255)throw new TypeError("invalid character found");t=e<<16|o<<8|u,a+=d[t>>18&63]+d[t>>12&63]+d[t>>6&63]+d[t&63]}return g?a.slice(0,g-3)+"===".substring(g):a},h=k?function(r){return btoa(r)}:f?function(r){return Buffer.from(r,"binary").toString("base64")}:w,p=f?function(r){return Buffer.from(r).toString("base64")}:function(r){for(var t=4096,e=[],o=0,u=r.length;o<u;o+=t)e.push(n.apply(null,r.subarray(o,o+t)));return h(e.join(""))},s=function(r,t){return t===void 0&&(t=!1),t?U(p(r)):p(r)},q=function(r){if(r.length<2){var t=r.charCodeAt(0);return t<128?r:t<2048?n(192|t>>>6)+n(128|t&63):n(224|t>>>12&15)+n(128|t>>>6&63)+n(128|t&63)}else{var t=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return n(240|t>>>18&7)+n(128|t>>>12&63)+n(128|t>>>6&63)+n(128|t&63)}},H=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,E=function(r){return r.replace(H,q)},S=f?function(r){return Buffer.from(r,"utf8").toString("base64")}:_?function(r){return p(_.encode(r))}:function(r){return h(E(r))},i=function(r,t){return t===void 0&&(t=!1),t?U(S(r)):S(r)},D=function(r){return i(r,!0)},J=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,K=function(r){switch(r.length){case 4:var t=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),e=t-65536;return n((e>>>10)+55296)+n((e&1023)+56320);case 3:return n((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return n((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}},R=function(r){return r.replace(J,K)},T=function(r){if(r=r.replace(/\s+/g,""),!$.test(r))throw new TypeError("malformed base64.");r+="==".slice(2-(r.length&3));for(var t,e="",o,u,a=0;a<r.length;)t=x[r.charAt(a++)]<<18|x[r.charAt(a++)]<<12|(o=x[r.charAt(a++)])<<6|(u=x[r.charAt(a++)]),e+=o===64?n(t>>16&255):u===64?n(t>>16&255,t>>8&255):n(t>>16&255,t>>8&255,t&255);return e},y=N?function(r){return atob(F(r))}:f?function(r){return Buffer.from(r,"base64").toString("binary")}:T,I=f?function(r){return C(Buffer.from(r,"base64"))}:function(r){return C(y(r).split("").map(function(t){return t.charCodeAt(0)}))},z=function(r){return I(P(r))},M=f?function(r){return Buffer.from(r,"base64").toString("utf8")}:B?function(r){return B.decode(I(r))}:function(r){return R(y(r))},P=function(r){return F(r.replace(/[-_]/g,function(t){return t=="-"?"+":"/"}))},A=function(r){return M(P(r))},Q=function(r){if(typeof r!="string")return!1;var t=r.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},Z=function(r){return{value:r,enumerable:!1,writable:!0,configurable:!0}},j=function(){var r=function(t,e){return Object.defineProperty(String.prototype,t,Z(e))};r("fromBase64",function(){return A(this)}),r("toBase64",function(t){return i(this,t)}),r("toBase64URI",function(){return i(this,!0)}),r("toBase64URL",function(){return i(this,!0)}),r("toUint8Array",function(){return z(this)})},O=function(){var r=function(t,e){return Object.defineProperty(Uint8Array.prototype,t,Z(e))};r("toBase64",function(t){return s(this,t)}),r("toBase64URI",function(){return s(this,!0)}),r("toBase64URL",function(){return s(this,!0)})},W=function(){j(),O()},c={version:l,VERSION:b,atob:y,atobPolyfill:T,btoa:h,btoaPolyfill:w,fromBase64:A,toBase64:i,encode:i,encodeURI:D,encodeURL:D,utob:E,btou:R,decode:A,isValid:Q,fromUint8Array:s,toUint8Array:z,extendString:j,extendUint8Array:O,extendBuiltins:W};return c.Base64={},Object.keys(c).forEach(function(r){return c.Base64[r]=c[r]}),c})})(V);var rr=V.exports;export{rr as b};
