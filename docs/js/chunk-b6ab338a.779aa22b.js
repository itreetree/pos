(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6ab338a"],{"16c0":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},[n("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[n("ul",t._l(t.item1,(function(e,s){return n("li",{key:e,staticClass:"menu-item",class:{current:t.currentIndexnum===s},on:{click:function(e){return t.selectMenu(s,e)}}},[n("span",{staticClass:"text border-1px"},[t._v(t._s(e))])])})),0)]),n("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[n("ul",t._l(t.item1,(function(e){return n("li",{key:e,staticClass:"food-list food-list-hook"},[n("h1",{staticClass:"title"},[t._v(t._s(e)+"dd")]),n("ul",t._l(t.item2,(function(e){return n("li",{key:e,staticClass:"food-item border-1px"},[t._v(" "+t._s(e)+" ")])})),0)])})),0)])])},i=[],r=(n("d3b7"),n("96cf"),n("1da1")),l=n("1fba"),c={data:function(){return{leftclick:!1,listHeight:[],currentIndexnum:0,scrollY:0,item1:[1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88],item2:["a","b","c","d","e","f"]}},watch:{currentIndexnum:function(t){console.log("watch"),this.scroolmenuitem(t-3)}},created:function(){var t=this;this.$nextTick((function(){t._initScroll(),t._calulateHeight()}))},methods:{_initScroll:function(){var t=this;this.menuScroll=new l["a"](this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new l["a"](this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",(function(e){if(!t.leftclick){t.scrollY=Math.abs(Math.round(e.y));for(var n=0;n<t.listHeight.length;n++){var s=t.listHeight[n],i=t.listHeight[n+1];t.scrollY>=s&&t.scrollY<i&&(t.currentIndexnum=n)}}}))},_calulateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),e=0;this.listHeight.push(e);for(var n=0;n<t.length;n++){var s=t[n];e+=s.clientHeight,this.listHeight.push(e)}},scroolmenuitem:function(t){var e=this.$refs.menuWrapper.getElementsByClassName("menu-item"),n=e[t];this.menuScroll.scrollToElement(n,300)},leftclickfalse:function(){return new Promise((function(t){setTimeout((function(){t(!1)}),600)}))},selectMenu:function(t,e){var n=this;if(e._constructed){this.leftclick=!0,this.currentIndexnum=t;var s=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),i=s[t];Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.foodsScroll.scrollToElement(i,300),t.next=3,n.leftclickfalse();case 3:n.leftclick=t.sent;case 4:case"end":return t.stop()}}),t)})))()}}}},o=c,a=(n("d9a8"),n("2877")),u=Object(a["a"])(o,s,i,!1,null,"74b0a674",null);e["default"]=u.exports},d9a8:function(t,e,n){"use strict";var s=n("ea5e"),i=n.n(s);i.a},ea5e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-b6ab338a.779aa22b.js.map