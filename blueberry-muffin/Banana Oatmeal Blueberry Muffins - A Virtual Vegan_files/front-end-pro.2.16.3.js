parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Mzb7":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=e=>{if(!e)return!1;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");return[{name:"version",value:"1.1"},{name:"xmlns",value:"http://www.w3.org/2000/svg"},{name:"viewBox",value:`0 0 ${e.width} ${e.height}`},{name:"height",value:e.referenceHeight?e.referenceHeight:e.height},{name:"width",value:e.referenceHeight?"100%":e.width},{name:"class",value:e.class?e.class:""},...(e=>e.fill?[{name:"fill",value:e.fill}]:[])(e),...(e=>e.y?[{name:"y",value:e.y}]:[])(e),...(e=>e.x?[{name:"x",value:e.x}]:[])(e)].forEach(({name:e,value:a})=>t.setAttribute(e,a)),e.paths.forEach(e=>{const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",e),t.appendChild(a)}),t};var t=e;exports.default=t},{}],"ZFee":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isDebug=exports.debugTimeLog=exports.debugTimeEnd=exports.debugTime=exports.debugTable=exports.debugGroupEnd=exports.debugGroupCollapsed=exports.debugGroup=exports.debugError=exports.debugWarn=exports.debugInfo=exports.debugLog=void 0;const e=e=>(...r)=>{o()&&console[e](...r)},o=()=>window.MV_GROW_DEBUG||new URLSearchParams(window.location.search).has("MV_GROW_DEBUG");exports.isDebug=o;const r=e("log");exports.debugLog=r;const s=e("info");exports.debugInfo=s;const t=e("warn");exports.debugWarn=t;const p=e("error");exports.debugError=p;const d=e("group");exports.debugGroup=d;const u=e("groupCollapsed");exports.debugGroupCollapsed=u;const g=e("groupEnd");exports.debugGroupEnd=g;const n=e("table");exports.debugTable=n;const b=e("time");exports.debugTime=b;const x=e("timeEnd");exports.debugTimeEnd=x;const c=e("timeLog");exports.debugTimeLog=c},{}],"LvEJ":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./utils/create-svg-icon")),t=require("./utils/debug");function o(e){return e&&e.__esModule?e:{default:e}}const a=()=>{[].slice.call(document.getElementsByClassName("dpsp-network-btn")).forEach(e=>{if(e.getElementsByTagName("svg").length>0)return!0;const t=e.classList[1].split("-")[1],o=Boolean(window.mvGrowData.buttonSVG[`${t}_override`]);n(o?`${t}_override`:t,e.getElementsByClassName("dpsp-network-icon-inner")[0])}),[].slice.call(document.getElementsByClassName("dpsp-icon-total-share")).forEach(e=>{if(e.getElementsByTagName("svg").length>0)return!0;n("share",e)})},n=(o,a)=>{const n=window.mvGrowData.buttonSVG[o],r=(0,e.default)(n);try{a.appendChild(r)}catch(s){(0,t.debugGroup)(`MV Grow: Icon Loading Failed for ${o}`),(0,t.debugLog)(s),window.mvGrowData&&window.mvGrowData.buttonSVG?n?r||(0,t.debugLog)(`Malformed SVG for ${o}`):(0,t.debugLog)(`Missing Icon Data for ${o}`):(0,t.debugLog)("All Icon Data Missing"),(0,t.debugGroupEnd)()}};var r=a;exports.default=r},{"./utils/create-svg-icon":"Mzb7","./utils/debug":"ZFee"}],"qbcG":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./utils/debug");const e={width:700,height:300,toolbar:!1,location:!1,status:!1,menubar:!1,scrollbars:!1,resizable:!0,top:200},r={width:800,height:575},s={width:720,height:520,scrollbars:!0},i=r=>{r.blur();const s=Object.assign({},e,a(r.classList));return(0,t.debugTable)(s),window.open(r.href||r.getAttribute("data-href"),"targetWindow",n(s))},n=t=>{let e=Object.keys(t).reduce(function(e,r){return`${e}${r}=${o(t[r])},`},"");return t.hasOwnProperty("left")||(e=`${e}left=${(window.innerWidth-t.width)/2}`),e},o=t=>"boolean"!=typeof t?t:t?"yes":"no",a=t=>t.contains("dpsp-buffer")?r:t.contains("dpsp-pinterest")||t.contains("dpsp-pin-it-button")?s:{};var d=i;exports.default=d},{"./utils/debug":"ZFee"}],"CR0T":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initializeButtonHover=s,exports.initializeButtons=r;var t=e(require("./open-popup"));function e(t){return t&&t.__esModule?t:{default:t}}function s(){const t=document.querySelectorAll(".dpsp-networks-btns-wrapper li .dpsp-network-btn");Array.prototype.forEach.call(t,t=>{t.addEventListener("mouseenter",({target:t})=>{t.parentNode.classList.add("dpsp-hover")}),t.addEventListener("mouseleave",({target:t})=>{t.parentNode.classList.remove("dpsp-hover")})})}function r(){const e=document.querySelectorAll(".dpsp-networks-btns-share .dpsp-network-btn, .dpsp-click-to-tweet, .dpsp-pin-it-button");Array.prototype.forEach.call(e,e=>{e.addEventListener("click",s=>{e.classList.contains("dpsp-whatsapp")||e.classList.contains("dpsp-email")||(s.preventDefault(),/#$/.test(e.href)||/#$/.test(e.getAttribute("data-href"))?s.stopPropagation():(0,t.default)(e))})})}},{"./open-popup":"qbcG"}],"jsG1":[function(require,module,exports){"use strict";function e(){const e=document.querySelectorAll(".dpsp-network-btn.dpsp-print");Array.prototype.forEach.call(e,e=>{e.addEventListener("click",()=>{window.print()})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t},{}],"fkUf":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=()=>window.mvGrowData&&window.mvGrowData.shouldRun;exports.default=e},{}],"i355":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=({target:e,callback:t,options:r})=>{const o=new IntersectionObserver(t,r);return o.observe(e),o};var t=e;exports.default=t},{}],"tCTD":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const t=(t="mv-grow-data")=>window.mvGrowData&&window.mvGrowData.init?window.mvGrowData:(document.getElementById(t)&&document.getElementById(t).dataset.settings&&(window.mvGrowData=JSON.parse(document.getElementById(t).dataset.settings),window.mvGrowData.init=!0),{init:!0});var e=t;exports.default=e},{}],"VRvp":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("./utils/should-run")),t=s(require("./utils/observe-intersection")),o=s(require("./utils/get-settings"));function s(e){return e&&e.__esModule?e:{default:e}}function r(){const s=document.getElementById("dpsp-floating-sidebar");if(!s||!(0,e.default)())return;const r=(0,o.default)(),n=Number(s.getAttribute("data-trigger-scroll"));let d=0;if(n?window.addEventListener("scroll",()=>{(d=Number(window.scrollY/document.body.clientHeight*100))>n?s.classList.add("opened"):s.classList.remove("opened")}):s.classList.add("opened"),r.floatingSidebar&&r.floatingSidebar.stopSelector){const e=document.querySelector(r.floatingSidebar.stopSelector);e&&(0,t.default)({target:e,callback:e=>{const t=e[0].intersectionRect,o=s.getBoundingClientRect();t.top-50<=o.bottom&&e[0].isIntersecting?s.classList.add("stop-hidden"):s.classList.remove("stop-hidden")},options:{threshold:i()}})}}function i(){let e=[];for(let t=1;t<=20;t++){let o=t/20;e.push(o)}return e.push(0),e}var n=r;exports.default=n},{"./utils/should-run":"fkUf","./utils/observe-intersection":"i355","./utils/get-settings":"tCTD"}],"DKSj":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=()=>{if(window.mvGrowData&&window.mvGrowData.general&&window.mvGrowData.general.contentSelector)return document.querySelector(window.mvGrowData.general.contentSelector);if(window.mvGrowData&&window.mvGrowData.general&&window.mvGrowData.general.isTrellis&&document.getElementById("content")&&document.getElementById("content").getElementsByClassName("article"))return document.getElementById("content").getElementsByClassName("article")[0];const e=document.getElementById("theme-content-section");if(e)return e;const t=document.getElementById("dpsp-post-content-markup");return t&&t.parentNode?t.parentNode:document.body};var t=e;exports.default=t},{}],"loi4":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("./utils/get-content-wrapper")),t=s(require("./utils/should-run"));function s(e){return e&&e.__esModule?e:{default:e}}function i(){const s=document.getElementById("dpsp-sticky-bar-wrapper");if(!s||!(0,t.default)())return!1;const i=document.getElementById("dpsp-sticky-bar"),d=Number(s.getAttribute("data-trigger-scroll")),o=Number(window.mvGrowData.stickyBar.mobileSize)||720,n=()=>window.innerWidth<=o;if(n()&&s.classList.add("dpsp-is-mobile"),window.mvGrowData.stickyBar.hasSticky&&(window.addEventListener("resize",()=>{const t=(0,e.default)();i.style.width=`${t.clientWidth}px`,i.style.left=`${t.getBoundingClientRect().left||0}px`,i.style.display="block",n()?s.classList.add("dpsp-is-mobile"):s.classList.remove("dpsp-is-mobile")}),window.dispatchEvent(new Event("resize"))),d){let e=0;window.addEventListener("scroll",()=>{(e=Number(window.scrollY/document.body.clientHeight*100))>d?s.classList.add("opened"):s.classList.remove("opened")})}else s.classList.add("opened");document.body.style.paddingBottom=`${s.outerHeight}px`}var d=i;exports.default=d},{"./utils/get-content-wrapper":"DKSj","./utils/should-run":"fkUf"}],"wPWf":[function(require,module,exports){"use strict";function e(){const e=document.getElementById("dpsp-pop-up");if(!e)return!1;const t=document.getElementById("dpsp-pop-up-overlay"),o=document.getElementById("dpsp-post-bottom"),n=e&&"true"===e.getAttribute("data-trigger-exit"),r=e&&e.getAttribute("data-trigger-delay"),s=!!o&&o.offsetTop,p=Number(e.getAttribute("data-trigger-scroll")),i=Number(e.getAttribute("data-session"));function d(e,t,o,n){const r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3);const s=`expires=${r.toUTCString()}`;n&&(n="path="+n),document.cookie=`${e}=${t};SameSite=Strict;${s};${n}`}function u(){e.classList.add("opened"),t.classList.add("opened"),d("dpsp_pop_up","1",i,"/")}function c(){setTimeout(()=>{e.remove(),t.remove()},250)}i?function(e){const t=e+"=",o=document.cookie.split(";");for(let n=0;n<o.length;n++){let e=o[n];for(;" "===e.charAt(0);)e=e.substring(1);if(e.startsWith(t))return e.substring(t.length,e.length)}return""}("dpsp_pop_up")&&(e.remove(),t.remove()):d("dpsp_pop_up","",-1);let l=0;window.addEventListener("scroll",()=>{l=Number(window.scrollY/document.body.clientHeight*100);const e=p&&l>p,t=s&&window.scrollY+window.innerHeight/1.5>=s;(e||t)&&u()}),n&&document.documentElement.addEventListener("mouseleave",e=>{e.clientY<1&&u()}),isNaN(Number(r))||setTimeout(u,1e3*Number(r));const a=document.querySelectorAll("#dpsp-pop-up-overlay, #dpsp-pop-up-close, .dpsp-network-btn");Array.prototype.forEach.call(a,e=>e.addEventListener("click",c))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t},{}],"X18c":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.manageNoPinSingle=void 0;const e=({})=>e=>!e.classList.contains("dpsp-post-pinterest-image-hidden-inner")&&(e.setAttribute("data-pin-nopin","true"),!0),t=({content:e})=>t=>!e.contains(t)&&(t.setAttribute("data-pin-nopin","true"),!0),n={post_custom_images:e,post_images:t,all_images:()=>()=>!0},s=({pinnableImages:e,content:t})=>s=>(Object.keys(n).includes(e)||(e="all_images"),n[e]({content:t})(s));exports.manageNoPinSingle=s},{}],"jp0L":[function(require,module,exports){"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSettings=void 0;var a=t(require("../utils/get-content-wrapper")),i={minimumImageHeight:200,minimumImageWidth:200,buttonPosition:"top_left",buttonShareBehavior:"post_image",hoverButtonShareBehavior:"hover_image",showImageOverlay:!0,showButtonLabel:!0,buttonLabelText:"Save",buttonShape:"rectangular",pinImageURL:"",pinnableImages:"all_images",pinDescriptionSource:"image_alt_tag",pinDescription:"",pinTitle:"",postTypeDisplay:["post"],postImageHidden:!1,postImageHiddenMultiple:!1,lazyLoadCompatibility:!1,disableIframes:!1,imagePinIt:!1,hasContent:!1,shareURL:"",ignoreSelectors:[],bypassClasses:[],bypassDenyClasses:[],hoverButtonIgnoreClasses:[]},n=function(){return e(e(e({},i),mvGrowData.pinterest),{content:(0,a.default)()})};exports.getSettings=n},{"../utils/get-content-wrapper":"DKSj"}],"sWuK":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addButtonSingle=void 0;var t='<svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 23 32"><path d="M0 10.656q0-1.92 0.672-3.616t1.856-2.976 2.72-2.208 3.296-1.408 3.616-0.448q2.816 0 5.248 1.184t3.936 3.456 1.504 5.12q0 1.728-0.32 3.36t-1.088 3.168-1.792 2.656-2.56 1.856-3.392 0.672q-1.216 0-2.4-0.576t-1.728-1.568q-0.16 0.704-0.48 2.016t-0.448 1.696-0.352 1.28-0.48 1.248-0.544 1.12-0.832 1.408-1.12 1.536l-0.224 0.096-0.16-0.192q-0.288-2.816-0.288-3.36 0-1.632 0.384-3.68t1.184-5.152 0.928-3.616q-0.576-1.152-0.576-3.008 0-1.504 0.928-2.784t2.368-1.312q1.088 0 1.696 0.736t0.608 1.824q0 1.184-0.768 3.392t-0.8 3.36q0 1.12 0.8 1.856t1.952 0.736q0.992 0 1.824-0.448t1.408-1.216 0.992-1.696 0.672-1.952 0.352-1.984 0.128-1.792q0-3.072-1.952-4.8t-5.12-1.728q-3.552 0-5.952 2.304t-2.4 5.856q0 0.8 0.224 1.536t0.48 1.152 0.48 0.832 0.224 0.544q0 0.48-0.256 1.28t-0.672 0.8q-0.032 0-0.288-0.032-0.928-0.288-1.632-0.992t-1.088-1.696-0.576-1.92-0.192-1.92z"></path></svg>',e=function(e){return function(i){if(!n(e)(i))return!1;var a=e.buttonPosition,s=e.hoverButtonShareBehavior,r=e.showImageOverlay,o=e.showButtonLabel,p=e.buttonLabelText,c=e.buttonShape,d=e.pinImageURL,l=e.pinDescription,u=e.shareURL,m=e.hoverButtonIgnoreClasses,b=i.getAttribute("data-pin-media")||i.getAttribute("data-media")||i.getAttribute("data-lazy-src")||i.getAttribute("data-src")||i.getAttribute("src"),g=i.getAttribute("data-pin-description")||"";if("post_image"===s&&(b=d||b,g=l||g),!b)return!1;var h=i.getAttribute("class"),v=i.getAttribute("style");h&&(h=h.split(" ").filter(function(t){return!m.includes(t)}).join(" "));var A=document.createElement("div");A.setAttribute("class","dpsp-pin-it-wrapper ".concat(h||"")),v&&A.setAttribute("style",v),h&&h.split(" ").forEach(function(t){t.trim()&&i.classList.remove(t)}),i.setAttribute("style",""),i.parentNode.insertBefore(A,i),A.appendChild(i);var L=i.getAttribute("data-pin-id"),q=L?"https://pinterest.com/pin/".concat(L,"/repin/x"):"https://pinterest.com/pin/create/bookmarklet/?media=".concat(encodeURIComponent(b),"&url=").concat(encodeURIComponent(u),"&is_video=false&description=").concat(encodeURIComponent(g)),f=document.createElement("a");if(f.classList.add("dpsp-pin-it-button"),f.classList.add("dpsp-pin-it-button-".concat(a)),f.classList.add("dpsp-pin-it-button-shape-".concat(c)),f.setAttribute("target","_blank"),f.rel="noopener",f.innerHTML='<span class="dpsp-network-icon">'+t+"</span>",o&&(f.classList.add("dpsp-pin-it-button-has-label"),f.title=p,f.setAttribute("aria-label",p)),f.href=q,r){var w=document.createElement("span");w.setAttribute("class","dpsp-pin-it-overlay"),A.appendChild(w)}return A.appendChild(f),!0}};exports.addButtonSingle=e;var n=function(t){return function(e){var n=t.imagePinIt,i=t.imageInContent,a=t.minimumImageWidth,s=t.minimumImageHeight;return"1"===n&&(!!i&&("IFRAME"!==e.nodeName&&(!e.parentNode.parentNode.classList.contains("rll-youtube-player")&&(!e.parentNode.classList.contains("dpsp-pin-it-wrapper")&&(!!e.parentNode.parentNode.classList.contains("blocks-gallery-item")||(!(e.clientWidth<=0||e.clientHeight<=0)||"lazy"===e.loading)&&(!e.getAttribute("data-pin-nopin")&&(e.classList.contains("dpsp_no_pin")||e.classList.contains("nopin")||e.parentNode.classList.contains("nopin")?(e.setAttribute("data-pin-nopin","true"),!1):!(e.clientWidth<Number(a)||e.clientHeight<Number(s))&&!e.classList.contains("emoji"))))))))}}},{}],"a47m":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addDescriptionSingle=void 0;const t=({pinDescriptionSource:t,pinDescription:i,imageInContent:n})=>r=>{if(!e({imageInContent:n})(r))return!1;let o="";"image_alt_tag"===t&&r.getAttribute("alt")&&(o=r.getAttribute("alt")),"image_title"===t&&r.getAttribute("title")&&(o=r.getAttribute("title")),i&&"post_pinterest_description"===t&&(o=i),!o&&i&&(o=i);const p=document.querySelector('[property="og:title"]');return!o&&p&&(o=p.getAttribute("content")),o&&r.setAttribute("data-pin-description",o),!0};exports.addDescriptionSingle=t;const e=({imageInContent:t})=>e=>!!t&&!e.getAttribute("data-pin-description")},{}],"QfZG":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addTitleSingle=void 0;const t=({pinTitle:t,imageInContent:n})=>i=>{if(!e({imageInContent:n})(i))return!1;let o="";!o&&t&&(o=t);const r=document.querySelector('[property="og:title"]');return!o&&r&&(o=r.getAttribute("content")),!!o&&(i.setAttribute("data-pin-title",o),!0)};exports.addTitleSingle=t;const e=({imageInContent:t})=>e=>!!t&&!e.getAttribute("data-pin-title")},{}],"UfYi":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeBrowserExtensionButton=void 0;const e=({})=>e=>!e.parentNode.classList.contains("dpsp-pin-it-wrapper")&&(e.addEventListener("mouseenter",()=>{const e=Array.prototype.slice.call(document.querySelectorAll('[style*="z-index: 8675309"][style*="data:image/svg+xml"]')),t=Array.prototype.slice.call(document.querySelectorAll('span[class^="PIN_"][data-pin-log^="button_pinit_floating"]'));e.concat(t).forEach(e=>e.remove())}),!0);exports.removeBrowserExtensionButton=e},{}],"RgVB":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,s){var t=e.minimumImageHeight,a=e.minimumImageWidth,n=e.disableIframes,i=e.bypassClasses,r=e.bypassDenyClasses;e.buttonShareBehavior;return!r.some(function(e){return s.classList.contains(e)})&&("true"===s.dataset.pinNopin||!s.parentNode.parentNode.classList.contains("blocks-gallery-item")&&(s.height<t||(s.width<a||("yes"===n&&"IFRAME"===s.nodeName||i.some(function(e){return s.classList.contains(e)})))))};exports.default=e},{}],"xUEp":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./add-button.ts"),t=require("./add-descriptions"),r=require("./add-titles"),i=require("./remove-extension"),n=o(require("./filter-image.ts"));function o(e){return e&&e.__esModule?e:{default:e}}const d=o=>d=>(0,n.default)(o,d)?(d.setAttribute("data-pin-nopin","true"),!1):(o.imageInContent=o.content.contains(d),[t.addDescriptionSingle,r.addTitleSingle,e.addButtonSingle,i.removeBrowserExtensionButton].forEach(e=>e(o)(d)),!0);var u=d;exports.default=u},{"./add-button.ts":"sWuK","./add-descriptions":"a47m","./add-titles":"QfZG","./remove-extension":"UfYi","./filter-image.ts":"RgVB"}],"Bmo8":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=()=>e=>{e.parentNode.classList.contains("dpsp-post-pinterest-image-hidden")&&(e.parentNode.style.cssText="position:absolute;height:0;width:0;"),e.removeAttribute("loading")};var t=e;exports.default=t},{}],"xtn3":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./get-settings.ts");const t=(t=[])=>{const s=(0,e.getSettings)();[].slice.call(document.getElementsByTagName("img")).map(e=>{t.forEach(t=>t(s)(e))})};var s=t;exports.default=s},{"./get-settings.ts":"jp0L"}],"h63O":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addShareURL=void 0;const e=({shareURL:e})=>t=>!t.getAttribute("data-pin-url")&&(!!e&&(t.setAttribute("data-pin-url",e),!0));exports.addShareURL=e},{}],"axgK":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../utils/debug");const e=()=>{const e=document.createElement("script"),s=(0,t.isDebug)()?"https://cdn.mediavine.com/pinmarklet.js":"https://assets.pinterest.com/js/pinmarklet.js";e.setAttribute("type","text/javascript"),e.setAttribute("charset","UTF-8"),e.setAttribute("src",s),document.body.appendChild(e)};var s=e;exports.default=s},{"../utils/debug":"ZFee"}],"dCCy":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=({target:e,callback:t})=>{const r=new MutationObserver(t);return r.observe(e,{childList:!0,subtree:!0}),r};var t=e;exports.default=t},{}],"AalF":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("../utils/observe-mutation")),t=require("../pinterest/manage-nopin"),r=require("../pinterest");function a(e){return e&&e.__esModule?e:{default:e}}const l=()=>{[].slice.call(document.getElementsByClassName("tl-widget-container")).forEach(a=>{(0,e.default)({target:a,callback:()=>{Array.prototype.forEach.call(document.querySelectorAll("img"),(0,t.manageNoPinSingle)((0,r.getPinterestSettings)()))}})})};var n=l;exports.default=n},{"../utils/observe-mutation":"dCCy","../pinterest/manage-nopin":"X18c","../pinterest":"b4YO"}],"dRtE":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=({ignoreSelectors:e=[]})=>{e.forEach(e=>{[...document.querySelectorAll(`${e}, ${e} img`)].forEach(e=>"IMG"===e.tagName&&e.classList.add("mv-grow-bypass"))})};var t=e;exports.default=t},{}],"b4YO":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initializePinterest=f,exports.initializeProPinterest=p,Object.defineProperty(exports,"getPinterestSettings",{enumerable:!0,get:function(){return t.getSettings}});var e=require("./manage-nopin"),t=require("./get-settings.ts"),r=c(require("./process-image")),i=c(require("./un-lazy-image")),n=c(require("./on-demand-data")),a=require("./add-share-url"),u=c(require("./load-grid")),o=c(require("../observations/thrive-leads")),s=c(require("../utils/get-content-wrapper")),d=c(require("../utils/should-run")),l=c(require("./ignore-images"));function c(e){return e&&e.__esModule?e:{default:e}}function f(){if(!(0,d.default)())return!1;[...document.querySelectorAll(".dpsp-networks-btns-share .dpsp-network-btn.dpsp-pinterest")].forEach(e=>{e.addEventListener("click",t=>{/#$/.test(e.href)||/#$/.test(e.getAttribute("data-href"))?(t.preventDefault(),(0,n.default)([i.default,a.addShareURL]),(0,u.default)()):t.preventDefault()}),e.addEventListener("keydown",t=>{"Space"!==t.code&&"Enter"!==t.code||e.click()})})}function p(){if(document.body.classList.contains("tve_editor_page"))return!1;if(!window.mvGrowData||!window.mvGrowData.pinterest)return!1;const i=(0,t.getSettings)();return!(!(0,d.default)()||"1"!==i.hasContent)&&([...document.querySelectorAll("img, iframe")].forEach((0,e.manageNoPinSingle)(i)),(0,l.default)(i),(0,o.default)(),Array.prototype.forEach.call((0,s.default)().querySelectorAll("img, iframe"),(0,r.default)(i)),!0)}},{"./manage-nopin":"X18c","./get-settings.ts":"jp0L","./process-image":"xUEp","./un-lazy-image":"Bmo8","./on-demand-data":"xtn3","./add-share-url":"h63O","./load-grid":"axgK","../observations/thrive-leads":"AalF","../utils/get-content-wrapper":"DKSj","../utils/should-run":"fkUf","./ignore-images":"dRtE"}],"nDkI":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=()=>{if(document.querySelector(".dpsp-top-shared-post")||document.querySelector(".dpsp-click-to-tweet")||document.querySelector(".dpsp-network-btn")){const e=document.querySelector(".mv-grow-style");e&&(e.rel="stylesheet",e.type="text/css")}};var t=e;exports.default=t},{}],"SYuf":[function(require,module,exports){"use strict";function t(t,e){if(t instanceof HTMLElement&&"number"==typeof e&&null===t.querySelector(".dpsp-network-count")){var o=document.createElement("span");o.classList.add("dpsp-network-count"),o.appendChild(document.createTextNode(e.toString())),t.classList.add("dpsp-has-count"),t.appendChild(o)}}function e(t){if("object"!=typeof window.mvGrowData||"object"!=typeof window.mvGrowData.general)return null;var e=window.mvGrowData.general||!1,o={};"object"==typeof e&&"object"==typeof e.show_count&&(o=e.show_count);var n=[];for(var r in o)o.hasOwnProperty(r)&&o[r]&&("string"==typeof t&&t.length>0?n.push(".dpsp-networks-btns-".concat(r,".dpsp-networks-btns-share ").concat(t)):n.push(".dpsp-networks-btns-".concat(r,".dpsp-networks-btns-share")));return n.length<1?null:document.querySelectorAll(n.join(", "))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.queryButtonContainersWithCounts=exports.appendBookmarkCountToButton=void 0,exports.appendBookmarkCountToButton=t,exports.queryButtonContainersWithCounts=e},{}],"YvVA":[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./utils/should-run")),o=n(require("./utils/create-svg-icon")),t=require("./button-utils.ts");function n(e){return e&&e.__esModule?e:{default:e}}function r(){if(!(0,e.default)())return!1;window.growMe?window.growMe(s):(window.growMe=function(e){window.growMe._.push(e)},window.growMe._=[s])}const s=()=>{const e=[...document.querySelectorAll(".dpsp-networks-btns-share .dpsp-network-list-item.dpsp-network-list-item-grow")];e.forEach(o=>{const t=o.querySelector(".dpsp-network-label"),n=o.querySelector(".dpsp-network-btn");let r=window.growMe.getIsBookmarked();d(n),r&&(t.innerText="Saved!"),window.growMe.on("isBookmarkedChanged",e=>{(r=e.isBookmarked)&&(t&&(t.innerText="Saved!"),n.classList.add("dpsp-grow-saved"))}),o.classList.add("dpsp-grow-load-in"),setTimeout(()=>{o.classList.remove("dpsp-grow-load-in"),o.classList.add("dpsp-grow-loaded")},900),n.addEventListener("click",o=>{o.preventDefault(),window.growMe.addBookmark({source:"grow_social_pro",tooltipReferenceElement:n}).then(function(o){i(e)}).catch(function(o){i(e)})}),n.addEventListener("keydown",e=>{"Space"!==e.code&&"Enter"!==e.code||n.click()})}),c()},d=e=>{const t=(0,o.default)({paths:["M9.19481 0L3.14304 6.31111L0.80576 3.8777L0 4.71887L3.14304 8L10 0.841163L9.19481 0Z"],height:8,width:10,class:"dpsp-grow-check-icon",referenceHeight:"5",y:3}),n=e.querySelector(".dpsp-network-icon-inner > svg");n&&n.appendChild(t.cloneNode(!0))},i=e=>{e.forEach(e=>{const o=e.querySelector(".dpsp-network-label");o&&(o.innerText="Saved!"),e.querySelector(".dpsp-network-btn").classList.add("dpsp-grow-saved"),e.querySelector(".dpsp-network-icon").classList.remove("dpsp-network-icon-outlined")})},c=()=>{const e=(0,t.queryButtonContainersWithCounts)(".dpsp-network-list-item.dpsp-network-list-item-grow");if(e instanceof NodeList&&!(e.length<1)&&"function"==typeof window.growMe&&"function"==typeof window.growMe.getBookmarkCount){const o=window.growMe.getBookmarkCount();o instanceof Promise&&o.then(o=>{e.forEach(e=>{if(!(e instanceof HTMLElement))return;const n=e.querySelector(".dpsp-network-btn");n instanceof HTMLElement&&(0,t.appendBookmarkCountToButton)(n,o)})})}};var a=r;exports.default=a},{"./utils/should-run":"fkUf","./utils/create-svg-icon":"Mzb7","./button-utils.ts":"SYuf"}],"ftfB":[function(require,module,exports){"use strict";var e=f(require("./fn/add-missing-icons")),i=require("./fn/init-buttons"),t=f(require("./fn/init-print")),n=f(require("./fn/init-sidebar")),r=f(require("./fn/init-sticky-bar")),u=f(require("./fn/init-popup")),d=require("./fn/pinterest"),a=require("./fn/utils/debug"),o=f(require("./fn/utils/get-settings")),l=f(require("./fn/load-styles")),s=f(require("./fn/init-grow-me"));function f(e){return e&&e.__esModule?e:{default:e}}const q=()=>{(0,o.default)(),(0,a.debugLog)(window.mvGrowData),(0,l.default)();let f=0;window.addEventListener("scroll",()=>{f=Number(window.scrollY/document.body.clientHeight*100)}),(0,i.initializeButtonHover)(),(0,d.initializePinterest)(),(0,t.default)(),(0,d.initializeProPinterest)(),(0,i.initializeButtons)(),(0,n.default)(),(0,r.default)(),(0,u.default)(),(0,s.default)(),(0,e.default)()};"loading"===document.readyState?window.addEventListener("DOMContentLoaded",q):q()},{"./fn/add-missing-icons":"LvEJ","./fn/init-buttons":"CR0T","./fn/init-print":"jsG1","./fn/init-sidebar":"VRvp","./fn/init-sticky-bar":"loi4","./fn/init-popup":"wPWf","./fn/pinterest":"b4YO","./fn/utils/debug":"ZFee","./fn/utils/get-settings":"tCTD","./fn/load-styles":"nDkI","./fn/init-grow-me":"YvVA"}]},{},["ftfB"],null)