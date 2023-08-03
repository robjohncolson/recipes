/*! For license information please see app.6.55.9.js.LICENSE.txt */
!function(){"use strict";var t={3353:function(t,e,n){function r(t){var e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_PACKAGE_VERSION:"6.55.9",SC_ATTR:"data-styled-grow-me",REACT_APP_BACKEND_BASE_URL:"https://api.grow.me",REACT_APP_FIREBASE_API_KEY:"AIzaSyC-jIuCQMNEDKPVWUI0QaC9ksxOrgTWigc",REACT_APP_FIREBASE_AUTH_DOMAIN:"grow-faves.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://grow-faves.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"grow-faves",REACT_APP_FIREBASE_STORAGE_BUCKET:"grow-faves.appspot.com",REACT_APP_FIREBASE_MESSAGE_SENDER_ID:"1006509562140",REACT_APP_FIREBASE_APP_ID:"1:1006509562140:web:984f4eef9d5cfae9fe42d9",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-4L07WZ5MW7",REACT_APP_LOGIN_REGISTER_BASE_URL:"https://app.grow.me"}[t];if(!e)throw new Error('Required environment variable "'.concat(t,'" not found'));return e}n.d(e,{AU:function(){return y},PV:function(){return i},Q3:function(){return s},Up:function(){return c},WQ:function(){return u},Wd:function(){return E},XG:function(){return a},XT:function(){return S},Xu:function(){return l},cZ:function(){return p},cd:function(){return h},dd:function(){return g},fw:function(){return o},hO:function(){return w},hX:function(){return A},hc:function(){return R},jP:function(){return P},jY:function(){return m},kO:function(){return f},nl:function(){return v},pQ:function(){return T},qG:function(){return d},rV:function(){return _},tF:function(){return b}});var o=r("REACT_APP_FIREBASE_API_KEY"),i=r("REACT_APP_FIREBASE_AUTH_DOMAIN"),u=r("REACT_APP_FIREBASE_DATABASE_URL"),a=r("REACT_APP_FIREBASE_PROJECT_ID"),c=r("REACT_APP_FIREBASE_STORAGE_BUCKET"),f=r("REACT_APP_FIREBASE_MESSAGE_SENDER_ID"),s=r("REACT_APP_FIREBASE_APP_ID"),l=(r("REACT_APP_FIREBASE_MEASUREMENT_ID"),"growme_has_logged_in"),p="grow_anonymous_id",d="grow_unverified_reader_id",h="grow_check_third_party_cookie_support",y=r("REACT_APP_BACKEND_BASE_URL"),v=r("REACT_APP_LOGIN_REGISTER_BASE_URL"),m="https://www.grow.me/tos.html",_="https://www.grow.me/",w="https://www.mediavine.com/privacy-policy/?publisher=www.grow.me",g="grow.me@mediavine.com",E="https://www.facebook.com/mediavinepublishernetwork",b="https://www.instagram.com/mediavine",A="https://twitter.com/mediavine",S="growme",R="grow-me-app-prod",P="https://snowplow.mediavine.com/com.snowplowanalytics.snowplow/tp2",T=r("REACT_APP_PACKAGE_VERSION")},8013:function(t,e,n){n.d(e,{$E:function(){return o},LK:function(){return r},l:function(){return i}});var r=900,o=500,i=2147483647},4242:function(t,e,n){n.d(e,{DG:function(){return v},Do:function(){return p},Dv:function(){return y},EN:function(){return u},LQ:function(){return d},PL:function(){return f},Ph:function(){return h},e$:function(){return c},m9:function(){return s},pM:function(){return a},vI:function(){return l}});var r=n(6234),o=n(763),i=n(8013);function u(t){return void 0!==t&&null!==t}function a(t){try{return new URL(t).hostname===window.location.hostname}catch(e){return!1}}function c(t){return a(t)?"_self":"_blank"}function f(t,e){if(!("URLSearchParams"in window))return t;try{var n=new URL(t);return n.searchParams.set("utm_medium","social"),n.searchParams.set("utm_source","grow.me"),n.searchParams.set("utm_campaign",e),n.toString()}catch(r){return t}}function s(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value}function l(t){return new Date(Date.now()+1e3*Number(t)).toUTCString()}function p(t){var e=document.cookie.match("(^|;)\\s*".concat(t,"\\s*=\\s*([^;]+)"));return e?e.pop():""}function d(t,e){return e.includes(t)?t:null}function h(t){return new URLSearchParams(window.location.search).get(t)}function y(t){var e=function(){var t=o.useState({height:window.innerHeight,width:window.innerWidth}),e=(0,r.Z)(t,2),n=e[0],i=e[1];return o.useEffect((function(){var t=function(){i({height:window.innerHeight,width:window.innerWidth})};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),n}();switch(t){case"widthAndHeight":return e.width<=i.$E&&e.height<=i.LK;case"height":return e.height<=i.LK;default:return e.width<=i.$E}}function v(t,e){var n=new URL(t);return n.hash?t:(n.hash=e,n.toString())}},7973:function(t,e){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,v={};function m(t,e,n){this.props=t,this.context=e,this.refs=v,this.updater=n||h}function _(){}function w(t,e,n){this.props=t,this.context=e,this.refs=v,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},m.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},_.prototype=m.prototype;var g=w.prototype=new _;g.constructor=w,y(g,m.prototype),g.isPureReactComponent=!0;var E=Array.isArray,b=Object.prototype.hasOwnProperty,A={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(t,e,r){var o,i={},u=null,a=null;if(null!=e)for(o in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(u=""+e.key),e)b.call(e,o)&&!S.hasOwnProperty(o)&&(i[o]=e[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var f=Array(c),s=0;s<c;s++)f[s]=arguments[s+2];i.children=f}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:t,key:u,ref:a,props:i,_owner:A.current}}function P(t){return"object"===typeof t&&null!==t&&t.$$typeof===n}var T=/\/+/g;function I(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function O(t,e,o,i,u){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case n:case r:c=!0}}if(c)return u=u(c=t),t=""===i?"."+I(c,0):i,E(u)?(o="",null!=t&&(o=t.replace(T,"$&/")+"/"),O(u,e,o,"",(function(t){return t}))):null!=u&&(P(u)&&(u=function(t,e){return{$$typeof:n,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(T,"$&/")+"/")+t)),e.push(u)),1;if(c=0,i=""===i?".":i+":",E(t))for(var f=0;f<t.length;f++){var s=i+I(a=t[f],f);c+=O(a,e,o,s,u)}else if(s=function(t){return null===t||"object"!==typeof t?null:"function"===typeof(t=d&&t[d]||t["@@iterator"])?t:null}(t),"function"===typeof s)for(t=s.call(t),f=0;!(a=t.next()).done;)c+=O(a=a.value,e,o,s=i+I(a,f++),u);else if("object"===a)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function x(t,e,n){if(null==t)return t;var r=[],o=0;return O(t,r,"","",(function(t){return e.call(n,t,o++)})),r}function L(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var k={current:null},C={transition:null},j={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:C,ReactCurrentOwner:A};e.Children={map:x,forEach:function(t,e,n){x(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return x(t,(function(){e++})),e},toArray:function(t){return x(t,(function(t){return t}))||[]},only:function(t){if(!P(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=m,e.Fragment=o,e.Profiler=u,e.PureComponent=w,e.StrictMode=i,e.Suspense=s,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,e.cloneElement=function(t,e,r){if(null===t||void 0===t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=y({},t.props),i=t.key,u=t.ref,a=t._owner;if(null!=e){if(void 0!==e.ref&&(u=e.ref,a=A.current),void 0!==e.key&&(i=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(f in e)b.call(e,f)&&!S.hasOwnProperty(f)&&(o[f]=void 0===e[f]&&void 0!==c?c[f]:e[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:n,type:t.type,key:i,ref:u,props:o,_owner:a}},e.createContext=function(t){return(t={$$typeof:c,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:t},t.Consumer=t},e.createElement=R,e.createFactory=function(t){var e=R.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:f,render:t}},e.isValidElement=P,e.lazy=function(t){return{$$typeof:p,_payload:{_status:-1,_result:t},_init:L}},e.memo=function(t,e){return{$$typeof:l,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=C.transition;C.transition={};try{t()}finally{C.transition=e}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(t,e){return k.current.useCallback(t,e)},e.useContext=function(t){return k.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return k.current.useDeferredValue(t)},e.useEffect=function(t,e){return k.current.useEffect(t,e)},e.useId=function(){return k.current.useId()},e.useImperativeHandle=function(t,e,n){return k.current.useImperativeHandle(t,e,n)},e.useInsertionEffect=function(t,e){return k.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return k.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return k.current.useMemo(t,e)},e.useReducer=function(t,e,n){return k.current.useReducer(t,e,n)},e.useRef=function(t){return k.current.useRef(t)},e.useState=function(t){return k.current.useState(t)},e.useSyncExternalStore=function(t,e,n){return k.current.useSyncExternalStore(t,e,n)},e.useTransition=function(){return k.current.useTransition()},e.version="18.1.0"},763:function(t,e,n){t.exports=n(7973)},926:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},9868:function(t,e,n){function r(t){if(Array.isArray(t))return t}n.d(e,{Z:function(){return r}})},4795:function(t,e,n){function r(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(f){return void n(f)}a.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var u=t.apply(e,n);function a(t){r(u,o,i,a,c,"next",t)}function c(t){r(u,o,i,a,c,"throw",t)}a(void 0)}))}}n.d(e,{Z:function(){return o}})},4434:function(t,e,n){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,{Z:function(){return r}})},2723:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(6522);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(I){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),u=new R(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=b(u,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,u),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var p={};function d(){}function h(){}function y(){}var v={};f(v,u,(function(){return this}));var m=Object.getPrototypeOf,_=m&&m(m(P([])));_&&_!==e&&n.call(_,u)&&(v=_);var w=y.prototype=d.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(i,u,a,c){var f=l(t[i],t,u);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"==(0,r.Z)(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(f.arg)}var i;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=y,f(w,"constructor",y),f(y,"constructor",h),h.displayName=f(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},g(E.prototype),f(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var u=new E(s(e,n,r,o),i);return t.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},g(w),f(w,c,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return u.type="throw",u.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}},6234:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(9868);var o=n(9147),i=n(4434);function u(t,e){return(0,r.Z)(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,e)||(0,o.Z)(t,e)||(0,i.Z)()}},6522:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{Z:function(){return r}})},9147:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(926);function o(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var u={};t=t||[null,e({}),e([]),e(e)];for(var a=2&o&&r;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((function(t){u[t]=function(){return r[t]}}));return u.default=function(){return r},n.d(i,u),i}}(),n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))},n.u=function(t){return"static/js/"+t+"."+{87:"4502af57",952:"52fcf2b2"}[t]+".chunk.js"},n.miniCssF=function(t){},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={},e="@mediavine/faves-login-register:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var p=function(e,n){a.onerror=a.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},n.p="/",function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error;n.l(u,(function(r){if(n.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}}),"chunk-"+e,e)}};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)c(n)}for(e&&e(r);f<u.length;f++)i=u[f],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0},r=self.webpackChunk_mediavine_faves_login_register=self.webpackChunk_mediavine_faves_login_register||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),function(){var t=n(2723),e=n(4795),r=n(4242),o=n(3353);function i(){return window.parent.location!==window.location}function u(t,e){var n=new Date;n.setTime(n.getTime()+15778463e4);var r="expires=".concat(n.toUTCString());document.cookie="".concat(t,"=").concat(e,"; ").concat("SameSite=None; Secure;"," ").concat(r)}function a(){return u(o.cd,"test"),Boolean((0,r.Do)(o.cd))}function c(t){var e=(0,r.Do)(o.qG);e&&(t.postMessage({type:"GROW_UNVERIFIED_READER_ID_FOUND",unverifiedReaderId:e},"*"),v("unverified_reader_id_found_in_iframe"))}function f(t){var e=(0,r.Do)(o.cZ);e&&t.postMessage({type:"MV_ANONYMOUS_ID_FOUND",anonymousId:e},"*")}function s(){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)((0,t.Z)().mark((function e(){var n,i,u;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=window.parent,i=new URLSearchParams(window.location.search),u=i.get("siteId"),n&&u){t.next=5;break}return t.abrupt("return");case 5:if(c(n),f(n),a()||n.postMessage({type:"MV_COOKIES_NOT_ALLOWED"},"*"),!("true"===(0,r.Do)(o.Xu))){t.next=12;break}return t.next=12,h({targetWindow:n,isIframe:!0});case 12:n.postMessage({type:"MV_IFRAME_FLOW_COMPLETE"},"*");case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)((0,t.Z)().mark((function e(){var n,i,u;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=window.opener,i=new URLSearchParams(window.location.search),u=i.get("siteId"),n&&u){t.next=5;break}return t.abrupt("return",{shouldKeepLoading:!0});case 5:if(c(n),f(n),"true"===(0,r.Do)(o.Xu)){t.next=10;break}return t.abrupt("return",{shouldKeepLoading:!0});case 10:return t.next=12,h({targetWindow:n,isIframe:!1});case 12:return t.abrupt("return",{shouldKeepLoading:!1});case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function h(t){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)((0,t.Z)().mark((function e(n){var i,u,a,c,f,s,l,p,d,h;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.targetWindow,u=n.isIframe,a=new URLSearchParams(window.location.search),c=a.get("callback")||"",f=a.get("siteId"),s=(s=new URL(c).hostname).startsWith("www.")?s.replace("www.",""):s,!1,t.prev=7,t.next=10,fetch("".concat(o.AU,"/graphql"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:"\n          query GetIsAllowedDomain($domain: String!) {\n            isAllowedDomain(domain: $domain) {\n              isAllowed\n            }\n          }\n        ",variables:{domain:s},operationName:"GetIsAllowedDomain"})});case 10:return l=t.sent,t.next=13,l.json();case 13:p=t.sent,Boolean(null===p||void 0===p?void 0:p.isAllowedDomain.isAllowed),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(7);case 19:return t.next=22,fetch("".concat(o.AU,"/auto-login"),{method:"POST",headers:{"content-type":"application/json"},credentials:"include",body:JSON.stringify({siteId:f})});case 22:return d=t.sent,t.next=25,d.json();case 25:if(!("error"in(h=t.sent))){t.next=28;break}throw new Error("Auto login failed");case 28:i.postMessage({type:"MV_AUTHENTICATED",accessToken:h.access_token,refreshToken:h.refresh_token,expirationTime:(0,r.vI)(h.expires_in),authType:"login",isAutoLogin:!0,isIframe:u},"*");case 29:case"end":return t.stop()}}),e,null,[[7,17]])})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(o.jP,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({schema:"iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",data:[{aid:o.XT,dtm:String(Date.now()),e:"se",p:"web",se_ca:"pageActions",se_ac:n,tna:o.hc,tv:"0.1.0",ua:navigator.userAgent,url:window.location.href}]})});case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function _(){return(_=(0,e.Z)((0,t.Z)().mark((function e(){var r,a,c,f,l,d,h;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=new URLSearchParams(window.location.search),f=c.get("siteId"),!i()){t.next=14;break}return t.prev=3,t.next=6,s();case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(3);case 10:return window.addEventListener("message",(function(t){"GROW_UNVERIFIED_READER_ID_ACQUIRED"===t.data.type&&(u(o.qG,t.data.unverifiedReaderId),v("unverified_reader_id_acquired_in_iframe"))})),t.abrupt("return");case 14:if(!window.opener||!f||"/logout"===window.location.pathname){t.next=27;break}return t.prev=15,t.next=18,p();case 18:if(l=t.sent,l.shouldKeepLoading){t.next=23;break}return window.close(),t.abrupt("return");case 23:t.next=27;break;case 25:t.prev=25,t.t1=t.catch(15);case 27:d=null===(r=document.currentScript)||void 0===r?void 0:r.getAttribute("data-grow-me-beta-name"),h=null===(a=document.currentScript)||void 0===a?void 0:a.getAttribute("data-grow-me-beta-version"),Promise.all([n.e(952),n.e(87)]).then(n.bind(n,5739)).then((function(t){(0,t.initializeApp)({betaName:d,betaVersion:h})}));case 30:case"end":return t.stop()}}),e,null,[[3,8],[15,25]])})))).apply(this,arguments)}!function(){_.apply(this,arguments)}()}()}();