(function(){var ozoki_tc = "AiliaMsIBMmDqvPg",ozoki_os = "s.xlgmedia.com",ozoki_url = "https://s.xlgmedia.com/2/538152/analytics.js?dt\u003D5381521547756905349000\u0026ai\u003D366806\u0026ac\u003D2954092\u0026pi\u003D30237290\u0026si\u003D170441319939121\u0026ti\u003Dbidder-base-prd-us-east4-b-15785867%3A9034-1691069682861-685674148\u0026ui\u003D0705A4681FE44B4980487E194AB3883B\u0026ap\u003D0\u0026dm\u003D728x90\u0026de\u003DMozilla%2F5.0+%28X11%3B+Linux+x86_64%3B+rv%3A102.0%29+Gecko%2F20100101+Firefox%2F102.0\u0026ci\u003D538152",
ozoki_ct ={"ai":"366806", "pi":"30237290", "ti":"bidder-base-prd-us-east4-b-15785867:9034-1691069682861-685674148", "ci":"538152", "dm":"728x90", "de":"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0", "dt":"5381521547756905349000", "ac":"2954092", "si":"170441319939121", "ui":"0705A4681FE44B4980487E194AB3883B", "ap":"0"},ozoki_omid = {dm:"minkatu.com",v:"1",f:"json",e:"js"
},ozoki_lep,ozoki_opt = {sm:0.4619,xhr_ipv6:true,chrext:true,prb:true,cpl:true,bwk:true,nvl:true,kmp:true,ndm:true,ecm:true,wor:true,hco:true,mouse:true,dup:true,wrip:true};var PAGESPEED_VERSION="2.99.0";var xFn, fFn, bFn, postUrl;!function(){var o,t,i,n,e=window,r=e.document,c=e.navigator,s=Date.now(),u=e.encodeURIComponent,f={},a=0,d={},_=!1,p=!1,k=!1,l="",z=JSON.stringify;try{if("undefined"==typeof ozoki_sv&&(ozoki_sv=!1),I(),"undefined"==typeof ozoki_os){k=!0;var v="",m="",y="pagespeed.js";if(document.currentScript)v=document.currentScript.src.split("?")[1],p=document.currentScript.integrity.length>0,m=document.currentScript.src.substr(0,document.currentScript.src.indexOf(":")),l=document.currentScript.src.substr(0,document.currentScript.src.lastIndexOf("/"));else{var E=document.scripts[document.scripts.length-1];if(E.src.indexOf(y)>-1)v=E.src.split("?")[1],"undefined"!=typeof E.integrity&&(p=E.integrity.length>0),m=E.src.substr(0,E.src.indexOf(":")),l=E.src.substr(0,E.src.lastIndexOf("/"));else for(var h=document.querySelectorAll("script"),g=0;g<h.length;g++)if((E=h[g]).src.indexOf(y)>-1){v=E.src.split("?")[1],"undefined"!=typeof E.integrity&&(p=E.integrity.length>0),m=E.src.substr(0,E.src.indexOf(":")),l=E.src.substr(0,E.src.lastIndexOf("/"));break}}if(!v)throw new Error("Cannot locate config vars");for(var S={},x=v.split("&"),b=0;b<x.length;b++)if(x[b]){var O=x[b].split("=");S[u(O[0])]=u(O[1])}if(!S.dom)throw new Error("Insufficient Config Vars");!function w(o,t,i){var n=o+"://"+t+"/o/config.json?"+i,e=new XMLHttpRequest;try{e.onreadystatechange=function(){if(4===e.readyState&&200==e.status){var o=e.responseText.split("\\x3D").join("=");o=o.split("\\x26").join("&");var t=JSON.parse(o);if(t.shi)throw new Error("Dead.");!function i(o){PAGESPEED_VERSION=k?"2.99.0":o.PAGESPEED_VERSION,ozoki_tc=o.ozoki_tc,ozoki_os=o.ozoki_os,ozoki_url=o.ozoki_url,ozoki_ct=o.ozoki_ct,"undefined"!=typeof o.ozoki_dt&&(ozoki_dt=o.ozoki_dt),"undefined"!=typeof o.ozoki_omid&&(ozoki_omid=o.ozoki_omid),ozoki_opt=o.ozoki_opt,ozoki_lep=o.ozoki_lep}(t),V()}},e.open("GET",n,!0),"function"==typeof e.overrideMimeType&&e.overrideMimeType("application/json"),e.send("")}catch(o){}}(m,S.dom,v)}}catch(o){}function P(o){var t=new Image;t.src=o,t.style.visibility="hidden",t.style.width="1px",t.style.height="1px",r.body.appendChild(t)}function I(){return Date.now?Date.now():(new Date).getTime()}function N(o){var t=I();P(n+"y.gif?en="+u(o.name)+"&em="+u(o.message)+"&es="+u(o.stack)+"&ets="+u(t)+"&"+i)}function R(o){return o.sm=ozoki_opt.sm,{loader:o}}function D(){if(!_){var t;d.ozoki_mn=function i(){var o=ozoki_url.substr(0,ozoki_url.indexOf(":"))+"://"+ozoki_os+"/2/"+PAGESPEED_VERSION+"/",t="main.js";k&&(o=l+"/");var i={default:"",cb:"?cb="+ozoki_tc};return ozoki_sv&&(i.default="?sv=1",i.cb+="&sv=1"),ozoki_ct.oz_cb?o+t+i.cb:o+t+i.default}();var n=d.ozoki_mn;if(r&&!o){o=r.createElement("script");var c=I();o.onload=function(){return xFn(R({load:I()-c}))},o.onerror=function(){return xFn(R({error:I()-c}))},function s(o){var i,e=isNaN(i=n.substr(n.indexOf(".")+1,8))?i:n.substr(0,8),r=isNaN(i=n.substr(n.indexOf(".")+1,1))?i:n.substr(0,1);d.ozoki_onf=void 0===o.onfocus||void 0,d.ozoki_onf||(t={toString:function(){return null}}),t[r]=function(o){if(o==e)return d},o.onfocus=function(){return t}}(o),o.src=d.ozoki_mn,p&&(o.integrity="sha256-tl6S6Hw3jmE1E71bmpwn/X1OF8xclTTAjWwHZaUFPqg=",o.crossOrigin="anonymous")}r.body?(_=!0,r.body.appendChild(o)):e.setTimeout((function(){return D()}),4)}}function V(){t=ozoki_url.substr(0,ozoki_url.indexOf(":"))+"://"+ozoki_os,i=function o(){var o,t=["oz_pl=1"];for(o in ozoki_ct)ozoki_ct.hasOwnProperty(o)&&t.push(u(o)+"="+u(ozoki_ct[o]));return t}().join("&")+"&psv="+PAGESPEED_VERSION,n=t+"/2/"+ozoki_ct.ci+"/"+ozoki_tc+"/",postUrl=function _(){return[t,"2",PAGESPEED_VERSION,ozoki_ct.ci,ozoki_tc,"postback?"+i].join("/")}(),function p(){var o=!!e.chrome,t=!!e.URL,i=!!e.v8Locale;if(o&&t&&!i)return a=1,!0;var n=!(void 0===e.mozInnerScreenX),s=!!r.contains,u=!!e.HTMLBlockquoteElement,d=!!c.registerProtocolHandler;if(!o&&!n&&s&&!u&&!d&&t)return a=2,!0;var _=!!r.documentMode,p=!!e.SVGFilterElement;if(_&&p)return a=3,!0;var k=!!e.crypto&&!!e.crypto.getRandomValues,l=!(void 0===e.orientation),z=!!e.visualViewport;return n&&!l&&k?(a=4,!0):n&&l&&z?(a=5,!0):!o&&!i&&t&&z?(a=6,!0):(f={ch:o,url:t,v8l:i,mpc:n,dct:s,hbe:u,rph:d,dmo:_,sfe:p,cgrv:k,o:l,vv:z,ex:a,ts:I()},!1)}()?function k(){if(void 0===r[ozoki_tc])r[ozoki_tc]=!1;else if(!ozoki_opt.dup)return!1;return!!r[ozoki_tc]||(r[ozoki_tc]=!0,!1)}()?xFn(R({init:0,dup:!0})):(xFn(R({init:1,sup:a})),function l(){d.PAGESPEED_VERSION=PAGESPEED_VERSION,d.API_VERSION="2",d.is_vast=function o(t){return!!t.v_ver&&!!t.vs}(ozoki_ct),d.ozoki_st=s,d.ozoki_os=ozoki_os,d.ozoki_url=ozoki_url,d.ozoki_tc=ozoki_tc,"undefined"!=typeof ozoki_dt&&(d.ozoki_dt=ozoki_dt),d.ozoki_ct=ozoki_ct,d.ozoki_opt=ozoki_opt,d.ozoki_omid=ozoki_omid,d.ozoki_lep=ozoki_lep,d.ozoki_sv=ozoki_sv,d.ozoki_spt=r.currentScript||null}(),D(),function z(){e.$$$||(e.$$$={}),e.$$$.setHumanConfig=function(o){d.ai_config=o}}()):function v(o){var t="";try{t=JSON.stringify(o)}catch(o){}P(n+"u.gif?init=0&sup="+u(t)+"&"+i)}(f)}xFn=function(o){try{var t=postUrl+"&_x=1",i=new XMLHttpRequest;i.open("POST",t,!0),i.withCredentials=!1,i.setRequestHeader("Content-Type","text/plain"),"function"==typeof i.overrideMimeType&&i.overrideMimeType("text/plain"),i.send(z(o))}catch(o){}},fFn=function(o){try{var t=postUrl+"&_f=1";fetch(t,{method:"POST",keepalive:!0,body:z(o)}).catch((function(o){N(o)}))}catch(o){N(o)}},bFn=function(o){try{var t=postUrl+"&_b=1";navigator.sendBeacon(t,z(o))}catch(o){N(o)}};try{k||V()}catch(o){N(o)}}();})();
