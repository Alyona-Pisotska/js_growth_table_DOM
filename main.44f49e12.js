parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i,o=!0,d=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return o=e.done,e},e:function(e){d=!0,i=e},f:function(){try{o||null==l.return||l.return()}finally{if(d)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=document.querySelector("tbody"),l=document.querySelector(".append-row"),i=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),d=document.querySelector(".remove-column"),a=10,c=2;l.addEventListener("click",function(){r.append(r.lastElementChild.cloneNode(!0)),r.children.length===a&&l.setAttribute("disabled","disabled"),r.children.length>c&&i.removeAttribute("disabled")}),i.addEventListener("click",function(){r.lastElementChild.remove(),r.children.length===c&&i.setAttribute("disabled","disabled"),r.children.length<a&&l.removeAttribute("disabled")}),o.addEventListener("click",function(){var t,n=e(r.rows);try{for(n.s();!(t=n.n()).done;){var l=t.value;l.append(l.lastElementChild.cloneNode(!0))}}catch(i){n.e(i)}finally{n.f()}r.firstElementChild.children.length===a&&o.setAttribute("disabled","disabled"),r.firstElementChild.children.length>c&&d.removeAttribute("disabled")}),d.addEventListener("click",function(){var t,n=e(r.rows);try{for(n.s();!(t=n.n()).done;){t.value.lastElementChild.remove()}}catch(l){n.e(l)}finally{n.f()}r.firstElementChild.children.length===c&&(d.disabled=!0),r.firstElementChild.children.length<a&&(o.disabled=!1)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.44f49e12.js.map