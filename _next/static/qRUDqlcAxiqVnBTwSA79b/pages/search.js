(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"5mFU":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("1OyB"),i=n("vuIU"),a=n("rePB"),o=function(){function t(e,n){Object(r.a)(this,t),Object(a.a)(this,"_topic",void 0),Object(a.a)(this,"_page",void 0),Object(a.a)(this,"_title",void 0),this._topic=e,this._page=n,this._title=t.createTitle(e,n)}return Object(i.a)(t,[{key:"getTopic",value:function(){return this._topic}},{key:"getPage",value:function(){return this._page}},{key:"getTitle",value:function(){return this._title}},{key:"getLink",value:function(){return"/content/".concat(this._topic,"/").concat(this._page)}}],[{key:"createTitle",value:function(t,e){var n=t.charAt(0).toUpperCase()+t.slice(1),r=e.charAt(0).toUpperCase()+e.slice(1);return"".concat(n," - ").concat(r)}}]),t}()},"8dkK":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n("easm")}])},Z4Yb:function(t,e,n){t.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",mainContent:"utils_mainContent__103EJ",jumbotron:"utils_jumbotron__10hI1",backColor1:"utils_backColor1__3OKXg",backColor2:"utils_backColor2__1urgU",backColor3:"utils_backColor3__Ad6h2",backColor4:"utils_backColor4__46yfC",backColor5:"utils_backColor5__2xMhD",backColor6:"utils_backColor6__1q9Lf"}},easm:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return T})),n.d(e,"default",(function(){return I}));var r=n("q1tI"),i=n.n(r),a=n("8Kt/"),o=n.n(a),u=n("5M6V"),c=n("Tred"),l=n.n(c),s=n("nOHt"),_=n("1OyB"),f=n("vuIU"),h=n("rePB");function d(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"===typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){o=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=function(){function t(e,n){Object(_.a)(this,t),Object(h.a)(this,"_a",void 0),Object(h.a)(this,"_b",void 0),Object(h.a)(this,"_aSize",void 0),Object(h.a)(this,"_bSize",void 0),Object(h.a)(this,"_d",void 0),this._a=e,this._b=n,this._aSize=e.length,this._bSize=n.length,this._d=new Array(e.length+1).fill(0).map((function(){return new Array(n.length+1).fill(0)}))}return Object(f.a)(t,[{key:"min",value:function(t,e){return Math.min(t,e)}},{key:"max",value:function(t,e){return Math.max(t,e)}},{key:"lev",value:function(t,e){for(var n=1;n<=t;n++)this._d[n][0]=n;for(var r=1;r<=e;r++)this._d[0][r]=r;for(var i=1;i<=e;i++)for(var a=1;a<=t;a++){var o=0;o=this._a[a]===this._b[i]?0:1,this._d[a][i]=Math.min(this._d[a-1][i]+1,this._d[a][i-1]+1,this._d[a-1][i-1]+o)}return this._d[t][e]}},{key:"run",value:function(){var t=this.lev(this._aSize,this._bSize),e=this._aSize-this._bSize===0?1:this._aSize-this._bSize;return t/Math.abs(e)}}]),t}();var p=n("2hU1"),g=n.n(p),y=n("Z4Yb"),m=n.n(y),k=n("YFqc"),C=n.n(k),w=i.a.createElement;function O(t){var e=t.page,n=t.color;return w(C.a,{href:"/content/[topic]/[page]",as:e.getLink()},w("a",null,w("div",{className:" ".concat(g.a.searchCard)},w("div",{className:" ".concat(g.a.searchCardColor," ").concat(m.a[n]," ")}),w("div",{className:g.a.searchCardTitle},e.getTitle()))))}var j=n("5mFU"),S=i.a.createElement,T=!0;function I(t){var e=t.pages,n=Object(s.useRouter)(),r=0,i=[],a=e.map((function(t){return new j.a(t.topic,t.page)}));return void 0!==n.query.query&&(i=function(t,e){var n,r=[],i=d(e);try{for(i.s();!(n=i.n()).done;){var a=n.value,o=a.getTitle(),u=new v(t,o).run();u<1.09&&r.push({page:a,ratio:u})}}catch(c){i.e(c)}finally{i.f()}return r.sort((function(t,e){return t.ratio<e.ratio?-1:t.ratio>e.ratio?1:0}))}(n.query.query,a)),S(u.a,null,S(o.a,null,S("title",null,u.b)),S("div",{className:l.a.contentContainer},i.map((function(t){return S(O,{page:t.page,key:t.page.getTitle(),color:"backColor".concat(r=r%7+1)})}))))}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))}},[["8dkK",0,2,1,3]]]);