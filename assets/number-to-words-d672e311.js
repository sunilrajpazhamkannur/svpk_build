import{g as h,i as A}from"./@popperjs-b0a63116.js";var c={exports:{}};/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */(function(d,y){(function(){typeof self=="object"&&self.self===self&&self||typeof h=="object"&&h.global===h&&h;var $=9007199254740991;function g(r){return!(typeof r!="number"||r!=r||r===1/0||r===-1/0)}function w(r){return typeof r=="number"&&Math.abs(r)<=$}var I=/(hundred|thousand|(m|b|tr|quadr)illion)$/,q=/teen$/,x=/y$/,M=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,N={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function z(r){return I.test(r)||q.test(r)?r+"th":x.test(r)?r.replace(x,"ieth"):M.test(r)?r.replace(M,O):r}function O(r,i){return N[i]}var E=10,l=100,u=1e3,v=1e6,p=1e9,m=1e12,b=1e15,R=9007199254740992,T=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],_=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function W(r,i){var s,a=parseInt(r,10);if(!g(a))throw new TypeError("Not a finite number: "+r+" ("+typeof r+")");if(!w(a))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return s=function o(e){var t,n,f=arguments[1];return e===0?f?f.join(" ").replace(/,$/,""):"zero":(f||(f=[]),e<0&&(f.push("minus"),e=Math.abs(e)),e<20?(t=0,n=T[e]):e<l?(t=e%E,n=_[Math.floor(e/E)],t&&(n+="-"+T[t],t=0)):e<u?(t=e%l,n=o(Math.floor(e/l))+" hundred"):e<v?(t=e%u,n=o(Math.floor(e/u))+" thousand,"):e<p?(t=e%v,n=o(Math.floor(e/v))+" million,"):e<m?(t=e%p,n=o(Math.floor(e/p))+" billion,"):e<b?(t=e%m,n=o(Math.floor(e/m))+" trillion,"):e<=R&&(t=e%b,n=o(Math.floor(e/b))+" quadrillion,"),f.push(n),o(t,f))}(a),i?z(s):s}var j={toOrdinal:function(r){var i=parseInt(r,10);if(!g(i))throw new TypeError("Not a finite number: "+r+" ("+typeof r+")");if(!w(i))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var s=String(i),a=Math.abs(i%100),o=11<=a&&a<=13,e=s.charAt(s.length-1);return s+(o?"th":e==="1"?"st":e==="2"?"nd":e==="3"?"rd":"th")},toWords:W,toWordsOrdinal:function(r){return z(W(r))}};d.exports&&(y=d.exports=j),y.numberToWords=j})()})(c,c.exports);var C=c.exports;const F=A(C);export{F as n};