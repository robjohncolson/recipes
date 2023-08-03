/*! For license information please see main.js.LICENSE.txt */
!function(){"use strict";function t(t){var r=0;for(var e in t)t[e]&&r++;return r}function r(r){var e,n,o,i,a=t(null===r||void 0===r||null===(e=r.purpose)||void 0===e?void 0:e.consents),c=t(null===r||void 0===r||null===(n=r.purpose)||void 0===n?void 0:n.legitimateInterests),u=null===r||void 0===r||null===(o=r.vendor)||void 0===o||null===(i=o.consents)||void 0===i?void 0:i[858];return 10===a&&9===c&&u}function e(){return Math.floor(100*Math.random())}function n(t){var r={NODE_ENV:"production",PUBLIC_URL:"https://faves.grow.me",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_PACKAGE_VERSION:"7.179.3",SC_ATTR:"data-styled-grow-me",REACT_APP_USE_PERSISTED_QUERIES:"true",REACT_APP_SCRIPT_SRC_ROOT:"https://faves.grow.me",REACT_APP_BACKEND_BASE_URL:"https://api.grow.me",REACT_APP_LOGIN_REGISTER_BASE_URL:"https://app.grow.me",REACT_APP_FIREBASE_API_KEY:"AIzaSyC-jIuCQMNEDKPVWUI0QaC9ksxOrgTWigc",REACT_APP_RECOMBEE_DATABASE_ID:"mediavine-prod",REACT_APP_RECOMBEE_PUBLIC_TOKEN:"hPmpLydzRSvu1FNsz1RHZaWjB7WHqElR6Z6mwS3apwe74xHypnB70pJ6KZlCLHz6",REACT_APP_SNOWPLOW_APP_ID:"growme",REACT_APP_SNOWPLOW_TRACKER_NAMESPACE:"grow-me-widget-prod",REACT_APP_SNOWPLOW_COLLECTOR_URL:"https://snowplow.mediavine.com/com.snowplowanalytics.snowplow/tp2",REACT_APP_SC_DISABLE_SPEEDY:"true",REACT_APP_GROW_LINKS_URL:"https://s.grow.me"}[t];if(!r)throw new Error('Required environment variable "'.concat(t,'" not found'));return r}n("REACT_APP_USE_PERSISTED_QUERIES"),n("REACT_APP_BACKEND_BASE_URL"),n("REACT_APP_SCRIPT_SRC_ROOT");var o=n("REACT_APP_LOGIN_REGISTER_BASE_URL");"".concat(o,"/register"),"".concat(o,"/sign-up-after-subscribe"),"".concat(o,"/login"),"".concat(o,"/logout"),"".concat(o,"/password-reset"),"".concat(o,"/account/info?source=faves-ui"),"".concat(o,"/bookmarks"),n("REACT_APP_PACKAGE_VERSION"),n("REACT_APP_RECOMBEE_DATABASE_ID"),n("REACT_APP_RECOMBEE_PUBLIC_TOKEN"),n("REACT_APP_SNOWPLOW_COLLECTOR_URL"),n("REACT_APP_SNOWPLOW_APP_ID"),n("REACT_APP_SNOWPLOW_TRACKER_NAMESPACE"),n("REACT_APP_GROW_LINKS_URL");try{var i,a=null===(i=function(){var t,r=window.$adManagementConfig||window.$mediavine;return null===r||void 0===r||null===(t=r.web)||void 0===t?void 0:t.model}())||void 0===i?void 0:i.jtr_button_selector;a&&[".wprm-recipe-jump",".tasty-recipes-jump-link",".mv-create-jtr",".mv-create-jtr-slot-v2",".jump_to_get_recipe_button_btn"].push(a)}catch(C){}var c=/^(?:[A-Za-z\d+/]{4})*(?:[A-Za-z\d+/]{3}=|[A-Za-z\d+/]{2}==)?$/;function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(T){l=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:P(t,e,c)}),a}function v(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(T){return{type:"throw",arg:T}}}t.wrap=f;var p={};function d(){}function h(){}function y(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(R([])));w&&w!==r&&e.call(w,i)&&(m=w);var _=y.prototype=d.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function A(t,r){function o(n,i,a,c){var s=v(t[n],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==u(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function P(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=b(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=v(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function b(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,b(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=v(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function R(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=y,n(_,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(A.prototype),l(A.prototype,a,(function(){return this})),t.AsyncIterator=A,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new A(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),l(_,c,"Generator"),l(_,i,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:R(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function l(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?l(Object(e),!0).forEach((function(r){v(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function v(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==u(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===u(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function p(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(c.push(n.value),c.length!==r);u=!0);}catch(l){s=!0,o=l}finally{try{if(!u&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return d(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function h(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function y(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)}))}}function m(){return g.apply(this,arguments)}function g(){return(g=y(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b().catch((function(){return{gdprApplies:!0,hasGivenConsent:!1,isAdditionalPrivacyState:!1,countryCode:""}}));case 2:return e=t.sent,t.abrupt("return",new Promise((function(t){var n=window.__tcfapi;if(n)n("addEventListener",2,(function(o,i){return n("removeEventListener",2,(function(){}),o.listenerId),i?"tcloaded"===o.eventStatus||"useractioncomplete"===o.eventStatus?t({gdprApplies:o.gdprApplies,hasGivenConsent:r(o),tcData:o,isAdditionalPrivacyState:!1,countryCode:e.countryCode}):t({gdprApplies:o.gdprApplies,hasGivenConsent:!1,tcData:o,isAdditionalPrivacyState:!1,countryCode:e.countryCode}):t({gdprApplies:!0,hasGivenConsent:!1,isAdditionalPrivacyState:!1,countryCode:e.countryCode})}));else{var o=e.gdprApplies,i=e.isAdditionalPrivacyState,a=e.countryCode;t({gdprApplies:o,hasGivenConsent:!1,isAdditionalPrivacyState:Boolean(i),countryCode:a})}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){var r=t.version,n=function(t){var r=t.version,n=t.betas;if(!n||0===n.length)return r;for(var o=0,i=e(),a=0;a<n.length;a++){var c=n[a];if(i<o+c.trafficPercentage)return c.version;o+=c.trafficPercentage}return r}({version:r,betas:t.betas});return n===r?{name:r,version:r}:e()<50?{name:"".concat(n,"-beta-test"),version:n}:{name:"".concat(n,"-beta-control"),version:r}}function _(t){var r=t.privacyData,e=t.version,n=t.betas;try{if(r.gdprApplies&&!r.hasGivenConsent)return{name:e,version:e};var o=function(t){var r=document.cookie.match("(^|;)\\s*".concat(t,"\\s*=\\s*([^;]+)"));return r?r.pop():""}("growme_version"),i=o?JSON.parse(o):null,a=function(t){var r=t.versionsResponse,e=t.versionFromCookie;if(!e)return!1;var n=e.version===r.version,o=r.betas.some((function(t){return t.version===e.version}));return n||o}({versionsResponse:{version:e,betas:n},versionFromCookie:i});if(i&&a)return i}catch(C){0}var c=w({version:e,betas:n});try{var u=new Date;u.setTime(u.getTime()+18e5);var s="expires="+u.toUTCString(),l=JSON.stringify(c);document.cookie="growme_version=".concat(l,"; path=/; ").concat(s)}catch(C){0}return c}function E(t){var r=t.name,e=t.version,n=t.scriptSrcRoot,o=t.siteId,i=document.createElement("script"),a="".concat(n,"/app.").concat(e,".js");i.type="text/javascript",i.src=a,i.defer=!0,i.setAttribute("data-grow-me-beta-name",r),i.setAttribute("data-grow-me-beta-version",e),i.setAttribute("data-grow-faves-site-id",o),document.head.appendChild(i)}var A="https://api.grow.me";function P(t){return fetch("".concat(A,"/sites/").concat(t,"/config")).then((function(t){if(!t.ok)throw new Error("Failed to fetch site config");return t.json()})).then((function(t){return window.GrowMeSite=t,t}))}function b(){var t=new URL("".concat(A,"/location-privacy-info"));return fetch(t.toString(),{method:"GET"}).then((function(t){if(!t.ok)throw new Error("Failed fetchLocationPrivacyInfo");return t.json()})).then((function(t){return t}))}function S(t){window.GrowInitializationData=t}!function(){var t;if(!function(){try{return window.self!==window.top}catch(C){return!0}}()&&Boolean(document.head.attachShadow)&&!function(){var t;return Boolean(null===(t=window)||void 0===t?void 0:t.growMeMainScriptLoaded)}()&&!function(){var t,r,e=null===(t=document.currentScript)||void 0===t?void 0:t.getAttribute("data-grow-faves-site-id"),n=e&&(c.test(e)?window.atob(e).split(":")[1]:e),o=null===(r=document)||void 0===r?void 0:r.querySelector("script[data-grow-initializer]");if(o&&n)try{var i,a,u=null===(i=o.innerHTML)||void 0===i||null===(a=i.split('data-grow-faves-site-id","')[1])||void 0===a?void 0:a.split('");')[0],s=u&&(c.test(u)?window.atob(u).split(":")[1]:u);if(s&&s!==n)return!0}catch(C){return!1}return!1}()){window.growMeMainScriptLoaded=!0;var r="https://api.grow.me",e="https://faves.grow.me",n=null===(t=document.currentScript)||void 0===t?void 0:t.getAttribute("data-grow-faves-site-id");if(n){if(window.location.search)try{var o=new URLSearchParams(window.location.search).get("growMeVersion");if("off"===o)return;if(o)return void Promise.all([P(n),m()]).then((function(t){var r=p(t,2),i=r[0],a=r[1];S({site:i,gdprConsentData:a,privacyData:a}),E({name:"local",version:o,siteId:n,scriptSrcRoot:e})})).catch((function(t){console.error(t)}))}catch(C){}var i=P(n),a=m(),u=fetch("".concat(r,"/versions")).then((function(t){if(!t.ok)throw new Error("Failed to fetch versions");return t.json()}));return Promise.all([i,u,a]).then((function(t){var r,o=p(t,3),i=o[0],a=o[1],c=o[2],u=null!==(r=i.siteConfig)&&void 0!==r&&r.growLabs?a.betas:a.betas.filter((function(t){return!t.growLabs})),s=_({version:a.version,betas:u,privacyData:c});S({site:i,gdprConsentData:c,privacyData:c}),E(f(f({},s),{},{siteId:n,scriptSrcRoot:e}))})).catch((function(t){console.error(t)}))}console.error("data-grow-faves-site-id is required")}}()}();