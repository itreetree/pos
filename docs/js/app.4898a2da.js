(function(e){function n(n){for(var a,r,c=n[0],i=n[1],s=n[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&l.push(u[r][0]),u[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(l.length)l.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==u[c]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},u={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0bd441":"55d3fd44","chunk-2d0c7e1d":"7bdf052d","chunk-2d230153":"461bb55a","chunk-5d1db850":"e05ac8f5"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-5d1db850":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0bd441":"31d6cfe0","chunk-2d0c7e1d":"31d6cfe0","chunk-2d230153":"31d6cfe0","chunk-5d1db850":"a6153072"}[e]+".css",u=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===u))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===a||d===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),t(o)},f.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,t[1](l)}u[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("85ec"),r=t.n(a);r.a},"222d":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=(t("df49"),t("e7bd")),u=t("0c29"),o=t("cd5d"),c=t("6f24"),i=t("2696"),s=t("7c8a"),d=t("ae0c"),l=t("47fe"),f=t("4403"),p=t("1cf7"),h=t("7add"),b=t("84d6"),m=t("d2c1"),v=t("291f"),g=t("7ced"),y=t("09ad"),k=t("81c3"),w=t("6fe1"),x=t("a801"),O=t("031d"),j=t("63b4"),_=t("9173"),E=t("8344"),P=t("664d"),S=t("0124"),L=t("9736"),T=t("1cc1"),C=t("e231"),A=t("aea1"),D=t("5f4e"),N=t("0679"),M=t("2799"),$=t("bdd9"),B=t("a2d2"),H=t("ba90"),q=t("36b6"),J=t("0f85");a["a"].use(r["a"]),a["a"].use(u["a"]),a["a"].use(o["a"]),a["a"].use(c["a"]),a["a"].use(i["a"]),a["a"].use(s["a"]),a["a"].use(d["a"]),a["a"].use(l["a"]),a["a"].use(f["a"]),a["a"].use(p["a"]),a["a"].use(h["a"]),a["a"].use(b["a"]),a["a"].use(m["a"]),a["a"].use(v["a"]),a["a"].use(g["a"]),a["a"].use(y["a"]),a["a"].use(k["a"]),a["a"].use(w["a"]),a["a"].use(x["a"]),a["a"].use(O["a"]),a["a"].use(j["a"]),a["a"].use(_["a"]),a["a"].use(E["a"]),a["a"].use(P["a"]),a["a"].use(S["a"]),a["a"].use(L["a"]),a["a"].use(T["a"]),a["a"].use(C["a"]),a["a"].use(A["a"]),a["a"].use(D["a"]),a["a"].use(N["a"]),a["a"].use(M["a"]),a["a"].use($["a"]),a["a"].use(B["a"]),a["a"].use(H["a"]),a["a"].use(q["a"]),a["a"].use(J["a"]);var F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},I=[],K=(t("034f"),t("2877")),U={},z=Object(K["a"])(U,F,I,!1,null,null,null),G=z.exports,Q=(t("d3b7"),t("8c4f")),R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"container"}},[t("router-view")],1),t("div",{attrs:{id:"tabbar"}},[t("cube-tab-bar",{attrs:{"show-slider":!0,data:e.tabs,"use-transition":!0},on:{change:e.changeHandler},model:{value:e.selectedLabelDefault,callback:function(n){e.selectedLabelDefault=n},expression:"selectedLabelDefault"}})],1)])},V=[],W={components:{},data:function(){return{selectedLabelDefault:"/index/home",tabs:[{label:"位置",icon:"cubeic-home",value:"/index/home"},{label:"菜单",icon:"cubeic-like",value:"/index/menu"},{label:"订单",icon:"cubeic-vip",value:"/index/order"},{label:"我的",icon:"cubeic-person",value:"/index/my"}]}},computed:{},created:function(){},methods:{changeHandler:function(e){console.log(e),this.$router.push(e)}}},X=W,Y=(t("d44d"),Object(K["a"])(X,R,V,!1,null,null,null)),Z=Y.exports;a["a"].use(Q["a"]);var ee=[{path:"/",name:"index",component:Z,redirect:"/index/home",children:[{path:"/index/home",component:function(){return t.e("chunk-5d1db850").then(t.bind(null,"16c0"))}},{path:"/index/menu",component:function(){return t.e("chunk-2d0c7e1d").then(t.bind(null,"5309"))}},{path:"/index/order",component:function(){return t.e("chunk-2d0bd441").then(t.bind(null,"2aea"))}},{path:"/index/my",component:function(){return t.e("chunk-2d230153").then(t.bind(null,"eb88"))}}]}],ne=new Q["a"]({routes:ee}),te=ne,ae=t("2f62");a["a"].use(ae["a"]);var re=new ae["a"].Store({state:{seatinfo:""},mutations:{setseatinfo:function(e,n){e.seatinfo=n}},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:te,store:re,render:function(e){return e(G)}}).$mount("#app")},"85ec":function(e,n,t){},d44d:function(e,n,t){"use strict";var a=t("222d"),r=t.n(a);r.a}});
//# sourceMappingURL=app.4898a2da.js.map