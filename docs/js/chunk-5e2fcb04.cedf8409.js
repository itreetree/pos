(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e2fcb04"],{"16c0":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},[s("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[s("ul",t._l(t.item1,(function(e,i){return s("li",{key:e,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(e){return t.selectMenu(i,e)}}},[s("span",{staticClass:"text border-1px"},[t._v(t._s(e))])])})),0)]),s("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[s("ul",t._l(t.item1,(function(e){return s("li",{key:e,staticClass:"food-list food-list-hook"},[s("h1",{staticClass:"title"},[t._v(t._s(e)+"dd")]),s("ul",t._l(t.item2,(function(e){return s("li",{key:e,staticClass:"food-item border-1px"},[t._v(" "+t._s(e)+" ")])})),0)])})),0)])])},o=[],r=s("1fba"),l={data:function(){return{goods:[],listHeight:[],scrollY:0,item1:[1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88],item2:["a","b","c","d","e","f"]}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],s=this.listHeight[t+1];if(this.scrollY>=e&&this.scrollY<s)return this.scroolmenuitem(t),t}return 0}},beforeCreate:function(){console.log(111,this)},created:function(){var t=this;this.$nextTick((function(){t._initScroll(),t._calulateHeight()}))},methods:{_initScroll:function(){var t=this;this.menuScroll=new r["a"](this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new r["a"](this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",(function(e){t.scrollY=Math.abs(Math.round(e.y))}))},_calulateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),e=0;this.listHeight.push(e);for(var s=0;s<t.length;s++){var i=t[s];e+=i.clientHeight,this.listHeight.push(e)}},scroolmenuitem:function(t){console.log(t);var e=this.$refs.menuWrapper.getElementsByClassName("menu-item"),s=e[t];this.menuScroll.scrollToElement(s,300)},selectMenu:function(t,e){if(e._constructed){var s=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),i=s[t];this.foodsScroll.scrollToElement(i,300)}}}},n=l,c=(s("ea90"),s("2877")),a=Object(c["a"])(n,i,o,!1,null,"a65293e0",null);e["default"]=a.exports},"3c60":function(t,e,s){},ea90:function(t,e,s){"use strict";var i=s("3c60"),o=s.n(i);o.a}}]);
//# sourceMappingURL=chunk-5e2fcb04.cedf8409.js.map