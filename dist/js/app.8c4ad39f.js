(function(t){function e(e){for(var o,c,i=e[0],u=e[1],l=e[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);s&&s(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"36be":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("CKEditor4 Demo")]),n("div",{attrs:{id:"carrier"}},[t._v("Some text ..............")]),n("button",{on:{click:t.insertVueComp}},[t._v("insert Vue component")])])},i=[],u=(n("ac1f"),n("5319"),n("a026")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"color-comp",style:{backgroundColor:t.backgroundColor}},[t._v(" My background will change!But after Redo and Undo my backround won't change! ")])},s=[],f={props:{},data:function(){return{backgroundColor:"#aaa"}},mounted:function(){var t=this;t.changeColor(),setInterval((function(){t.changeColor()}),3e3)},methods:{changeColor:function(){this.backgroundColor=this.getRandomColor()},getRandomColor:function(){var t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"rgb("+t+","+e+","+n+")"}}},d=f,p=(n("fa33"),n("2877")),m=Object(p["a"])(d,l,s,!1,null,"dce86aa6",null),h=m.exports,v={props:{},data:function(){return{editor:null}},mounted:function(){this.editor=window.CKEDITOR.replace("carrier",{width:800,allowedContent:!0,copyFormatting_allowRules:!0,extraPlugins:"divarea",removePlugins:"easyimage,cloudservices"})},methods:{insertVueComp:function(){var t="comp-"+(new Date).getTime();this.editor.insertHtml('<div data-comp-id="'.concat(t,'"><color-comp></color-comp></div>')),this.instantiate(t)},instantiate:function(t){this.$nextTick((function(){new u["a"]({el:'[data-comp-id="'.concat(t,'"]'),components:{ColorComp:h}})}))}}},g=v,b=(n("9661"),Object(p["a"])(g,c,i,!1,null,"bffd24b2",null)),y=b.exports,w={name:"App",components:{HelloWorld:y}},C=w,_=(n("034f"),Object(p["a"])(C,r,a,!1,null,null,null)),O=_.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){},9661:function(t,e,n){"use strict";var o=n("d761"),r=n.n(o);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d761:function(t,e,n){},fa33:function(t,e,n){"use strict";var o=n("36be"),r=n.n(o);r.a}});
//# sourceMappingURL=app.8c4ad39f.js.map