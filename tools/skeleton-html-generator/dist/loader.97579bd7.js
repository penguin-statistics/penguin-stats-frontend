parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vQE2":[function(require,module,exports) {
function t(t,r){return a(t)||o(t,r)||n(t,r)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}function a(t){if(Array.isArray(t))return t}!function(){setTimeout(function(){document.getElementById("p-loader--gradientel").style.opacity=1},750);var e={languageWithRegion:function(){var t,e,n,r=window.navigator,o=["language","browserLanguage","systemLanguage","userLanguage"],a=null;if(Array.isArray(r.languages))for(t=0;t<r.languages.length;t++)if(n=(e=r.languages[t]).length,!a&&n&&(a=e),e&&n>2)return e;for(t=0;t<o.length;t++)if(null!=(e=r[o[t]])&&(n=e.length,!a&&n&&(a=e),e&&n>2))return e;return a},language:function(){if(localStorage){var t=localStorage.getItem("penguin-stats-settings");if(t)try{return JSON.parse(t).settings.language}catch(r){return"en"}}var e=this.languageWithRegion().replace("_","-");if(!e)return"en";var n=e.split("-");return 1===n.length?e:2===n.length?n[0]:"en"},data:{zh:{titles:["正在尝试与 Rhodes Island™ 建立神经连接","正在释放神经递质","少女祈祷中","资源装载中"],subtitle:"首次加载可能较慢，请耐心等待",vendor:"&copy; 企鹅物流数据统计"},en:{titles:["Connecting to the neural network of Rhodes Island","Submitting feedback to the neural network"],subtitle:"Initialization may take some time",vendor:"&copy; Penguin Statistics"},ja:{titles:["読み込み中..."],subtitle:"初めての読み込みは動作が遅くなる可能性があります<br>少々お待ち下さい",vendor:"&copy; ペンギン急便データ統計処理部門"},ko:{titles:["로딩중..."],subtitle:"초기 설정에 시간이 좀 걸릴 수 있으니, 기다려 주시기 바랍니다",vendor:"&copy; 펭귄 물류 데이터 분석 부서"}},fill:function(t,e){document.getElementById(t).innerHTML=e},render:function(){document.querySelector("#p-loader__footer--year").textContent=(new Date).getFullYear().toString();var e=this.language(),n=this.data[e],r=document.querySelector(".p-loader__title");function o(){var t=n.titles.shift();return n.titles.push(t),t}r.textContent=o(),setInterval(function(){r.style.opacity=0,setTimeout(function(){r.textContent=o(),r.style.opacity=1},500)},4e3);var a=0;setInterval(function(){a+=2+4*Math.random(),document.querySelector(".p-loader__loader-progress").style.width=a+"%"},500);for(var i=0,l=Object.entries({subtitle:"p-loader__subtitle",vendor:"p-loader__footer-vendor"});i<l.length;i++){var u=t(l[i],2),s=u[0],c=u[1];document.getElementById(c).innerHTML=n[s]}}};try{e.render()}catch(n){console.error(n)}}();
},{}]},{},["vQE2"], null)
//# sourceMappingURL=/loader.97579bd7.js.map