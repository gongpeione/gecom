webpackJsonp([1,0],[function(t,e,n){"use strict";n(36),n(4),n(7),n(9),n(16),n(17),n(18),console.log("src")},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=e.CONST={USE_CAPTURE:{BUBBLING:!1,CAPTURE:!0},KEY_CODE:{UP:38,DOWN:40}},o={$:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return e instanceof NodeList?Array.from(e,function(e){return e.querySelector(t)}):e.querySelector(t)},$$:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return e instanceof NodeList?Array.from(e,function(e){return e.querySelectorAll(t)}):e.querySelectorAll(t)},create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(t);for(var i in e)n.setAttribute(i,e[i]);return n},attr:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return n?void t.setAttribute(e,n):t.getAttribute(e)},attrs:function t(e){var t={};return Array.from(e.attributes).forEach(function(n){var i=n.nodeName;t[i]=e.getAttribute(i)}),t},class:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n)return void t.classList.remove(e);if(Array.isArray(e)){var r;return void(r=t.classList).add.apply(r,i(e))}t.classList.add(e)},css:function(t,e){t.style.cssText=t.style.cssText?t.style.cssText+=e:e},width:function(t){return t.getBoundingClientRect().width},height:function(t){return t.getBoundingClientRect().height},vdom:function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n(this,t),this.tagName=e,this.attrs=i,this.children=Array.isArray(r)?r:Array.from(r),this.event=[]}return r(t,[{key:"render",value:function(){var e=document.createElement(this.tagName),n=this.attrs;for(var i in n)e.setAttribute(i,n[i]);this.event.length&&this.event.forEach(function(t){e.addEventListener(t.eventName,t.callback)});var r=this.children;return Array.from(r).forEach(function(n){var i=n instanceof t?n.render():document.createTextNode(n);e.appendChild(i)}),e}},{key:"addEvent",value:function(t,e){arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.USE_CAPTURE.BUBBLING;return this.event.push({eventName:t,callback:e}),this}}]),t}()};e.g=o},function(t,e,n){"use strict";n(19)},function(t,e,n){"use strict";n(20)},function(t,e,n){"use strict";n(22),n(5),n(3),n(6),n(2)},function(t,e,n){"use strict";n(21)},function(t,e,n){"use strict";n(23)},function(t,e,n){"use strict";n(24),console.log("data")},function(t,e,n){"use strict";n(25)},function(t,e,n){"use strict";n(31),n(12),n(8),n(10),n(11),n(13),n(15),n(14),console.log("form")},function(t,e,n){"use strict";n(26)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(27);var a=n(1),o=a.g.$,s=a.g.$$,u=a.g.vdom,c=s(".g-input--num"),l=(o("input",c),o(".min",c),o(".plus",c),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".g-input--num";i(this,t),this.original=s(e),this.renderedList=[],this.generate()}return r(t,[{key:"generate",value:function(){var t=this;this.original.forEach(function(e){t.renderedList.push(new h(e,t))})}},{key:"getList",value:function(){return this.renderedList}}]),t}()),h=function(){function t(e,n){i(this,t),this.original=e,this.parentNode=e.parentNode,this.originalAttrs=a.g.attrs(this.original),this.manager=n,this.counter=this.original.value?parseInt(this.original.value,10):parseInt(this.originalAttrs["data-counter"]||0,10),this.max=parseInt(this.originalAttrs["data-max"]||0,10),this.step=parseInt(this.originalAttrs["data-step"]||1,10),this.generate()}return r(t,[{key:"generate",value:function(){var t=this.generateInput(),e=this.generatePlus(),n=this.generateMinus();this.originalAttrs.class.indexOf("g-input--num")<0&&(this.originalAttrs.class+=" g-input--num");var i=new u("div",this.originalAttrs,[t,n,e]),r=i.render();this.parentNode.insertBefore(r,this.original),this.original.remove()}},{key:"generateInput",value:function(){var t=this,e=new u("input",{type:"text",value:this.counter,"data-counter":this.counter,"data-max":this.max,"data-step":this.step});return e.addEvent("keydown",function(t){if(/[^\d]/.test(String.fromCharCode(t.which)))return t.preventDefault(),!1}),e.addEvent("keyup",function(e){var n=e.target,i=n.value;console.log(i),t.max>0&&i>t.max&&(i=t.max+""),t.counter=n.value=parseInt(i.replace(/[^\d]/g,""),10)||0;var r=e.keyCode;if(r==a.CONST.KEY_CODE.UP||r==a.CONST.KEY_CODE.DOWN)if(r==a.CONST.KEY_CODE.UP){if(t.max>0&&t.counter>=t.max)return;var o=t.counter+t.step;t.max>0&&o>t.max&&(o=t.max),n.dataset.counter=n.value=t.value=o}else if(r==a.CONST.KEY_CODE.DOWN&&0!==t.counter){var s=t.counter-t.step;s<0&&(s=0),n.dataset.counter=n.value=t.counter=s}}),e}},{key:"generatePlus",value:function(){var t=this,e=new u("span",{class:"plus"});return e.addEvent("click",function(e){var n=e.target,i=n.parentNode,r=o("input",i);if(!(t.max>0&&t.counter>=t.max)){var a=t.counter+t.step;t.max>0&&a>t.max&&(a=t.max),r.dataset.counter=r.value=t.counter=a}}),e}},{key:"generateMinus",value:function(){var t=this,e=new u("span",{class:"min"});return e.addEvent("click",function(e){var n=e.target,i=n.parentNode,r=o("input",i);if(0!==t.counter){var a=t.counter-t.step;a<0&&(a=0),r.dataset.counter=r.value=t.counter=a}}),e}}]),t}(),d=new l("input[type=num].g-input--num");console.log(d)},function(t,e,n){"use strict";n(28)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(29);var a=n(1),o=a.g.vdom,s=a.g.$,u=a.g.$$,c=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".g-select";i(this,t),this.original=u(n),this.renderedList=[],this.generate(),document.addEventListener("click",function(t){e.flush()})}return r(t,[{key:"generate",value:function(){var t=this;this.original.forEach(function(e){t.renderedList.push(new l(e,t))})}},{key:"flush",value:function(){this.renderedList.forEach(function(t){t.hide()})}},{key:"getList",value:function(){return this.renderedList}}]),t}(),l=function(){function t(e,n){i(this,t),this.select=e,this.manager=n,this.parentNode=e.parentNode,this.nodeAttrs=a.g.attrs(e),this.options=[],this.optionsGroup={},this.optionsOriginal=u("option",this.select),this.mode=this.nodeAttrs["data-mode"]?this.nodeAttrs["data-mode"].split(/[,\s，]/):[],this.selected={value:"",text:""},this.child=null,this.nodeChildren=[],this.selectRendered=null,this.walkOriginal(),this.inputGenerator(),this.optionListGenerator(),this.buttonsGenerator(),this.render()}return r(t,[{key:"walkOriginal",value:function(){var t=this;this.optionsOriginal.forEach(function(e){var n=e.innerText,i=a.g.attrs(e);"selected"in i&&(t.selected.text=n,t.selected.value=i.value);var r=new o("li",i,[n]);if(r.addEvent("click",function(e){var n=e.target,i=n.parentNode,r=i.parentNode,o=s("input",r);if(!a.g.attr(n,"disabled")){if(r.classList.remove("slideDown"),t.mode.indexOf("clearable")>=0){var u=s(".close",r);u.classList.remove("hidden")}o.value=n.innerText,a.g.attr(o,"data-value",a.g.attr(n,"value"))}}),t.mode.indexOf("group")<0)t.options.push(r);else{var u=i["data-group"]||"Other";Array.isArray(t.optionsGroup[u])?t.optionsGroup[u].push(r):(t.optionsGroup[u]=[],t.optionsGroup[u].push(r))}})}},{key:"optionListGenerator",value:function(){var t=this,e=[];this.mode.indexOf("group")>=0?!function(){var n=[];for(var i in t.optionsGroup)n.push(new o("li",{class:"g-group--name"},[i])),t.optionsGroup[i].forEach(function(t){n.push(t)});e=new o("ul",{},n)}():e=new o("ul",{},this.options),this.nodeChildren.push(e)}},{key:"inputGenerator",value:function(){var t=this,e=new o("input",{type:"text",name:this.nodeAttrs.name,readonly:!0,value:this.selected.text,"data-value":this.selected.value,placeholder:"请选择"});e.addEvent("click",function(e){var n=e.target.parentNode;t.manager.getList().forEach(function(e){e!==t&&e.hide()}),n.classList.toggle("slideDown"),e.stopPropagation()}),this.nodeChildren.push(e)}},{key:"buttonsGenerator",value:function(){var t=new o("div",{class:"arror"},[]);if(this.nodeChildren.push(t),!(this.mode.indexOf("clearable")<0)){var e=new o("div",{class:"close hidden"},[]);e.addEvent("click",function(t){var e=t.target.parentNode,n=s("input",e),i=s(".close",e);n.value="",n.dataset.value="",i.classList.add("hidden")}),this.nodeChildren.push(e)}}},{key:"render",value:function(){var t=new o("div",{class:"g-selector"},this.nodeChildren);this.selectRendered=t.render(),this.parentNode.insertBefore(this.selectRendered,this.select),this.select.remove()}},{key:"hide",value:function(){this.selectRendered.classList.remove("slideDown")}}]),t}(),h=new c;console.log(h),e.default=c},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(30);var a=n(1),o=a.g.$,s=a.g.$$,u=a.g.vdom,c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".g-input--slider";i(this,t),this.original=s(e),this.renderedList=[],this.generate()}return r(t,[{key:"generate",value:function(){var t=this;this.original.forEach(function(e){t.renderedList.push(new l(e,t))})}},{key:"getList",value:function(){return this.renderedList}}]),t}(),l=function(){function t(e,n){var r=this;i(this,t),this.original=e,this.parentNode=this.original.parentNode,this.originalAttrs=a.g.attrs(this.original),this.manager=n,this.rendered=null,this.btn=null,this.line=null,this.cur=null,this.totalLength=0,this._curPercentage=0,this.curPos=0,this.oldPos=0,this._curValue=0,this.onDragHandler=this.onDrag.bind(this),this.onDragEndHandler=this.onDragEnd.bind(this),Object.defineProperty(this,"curPercentage",{get:function(){return r._curPercentage},set:function(t){r._curPercentage=t,r.updatePos()}}),Object.defineProperty(this,"curVal",{get:function(){return r._curValue},set:function(t){r._curValue=t,r.btn.dataset.value=r._curValue}}),this.generate(),this.updatePos({}),this.curVal=0}return r(t,[{key:"generate",value:function(){var t=this,e=new u("input",this.originalAttrs),n=new u("div",{class:"line"},[new u("div",{class:"current"})]),i=new u("div",{class:"button","data-current":0});i.addEvent("mousedown",function(e){return t.onMouseDown(e)});var r=new u("div",{class:"g-input--slider_wrap"},[e,n,i]);this.rendered=r.render(),this.parentNode.insertBefore(this.rendered,this.original),this.original.remove(),this.btn=o(".button",this.rendered),this.line=o(".line",this.rendered),this.cur=o(".current",this.rendered),this.totalLength=a.g.width(this.line)}},{key:"generateInput",value:function(){var t=new u("input",this.originalAttrs);return t}},{key:"onDrag",value:function(t){var e=this.curPos,n=t.clientX,i=n-e,r=i/this.totalLength,a=this.curPercentage+r;a>=1?this.curPercentage=1:a<=0?this.curPercentage=0:this.curPercentage=a;var o=Math.floor(100*this.curPercentage);o!=this.curVal&&(this.curVal=o),this.curPos=n}},{key:"onDragEnd",value:function(t){console.log(t),this.btn.classList.remove("dragging"),document.removeEventListener("mousemove",this.onDragHandler),document.removeEventListener("mouseup",this.onDragEndHandler),document.removeEventListener("contextmenu",this.onDragEndHandler)}},{key:"onMouseDown",value:function(t){this.curPos=t.clientX,this.btn.classList.add("dragging"),document.addEventListener("mousemove",this.onDragHandler),document.addEventListener("mouseup",this.onDragEndHandler),document.addEventListener("contextmenu",this.onDragEndHandler)}},{key:"updatePos",value:function(){this.cur.style.width=100*this.curPercentage+"%",this.btn.style.left=100*this.curPercentage+"%"}}]),t}();console.log(new c),e.default=c},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(32);var a=n(1),o=(a.g.$,a.g.$$),s=a.g.vdom,u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".g-input--switch";i(this,t),this.original=o(e),this.renderedList=[],this.generate()}return r(t,[{key:"generate",value:function(){var t=this;this.original.forEach(function(e){t.renderedList.push(new c(e,t))})}},{key:"getList",value:function(){return this.renderedList}}]),t}(),c=function(){function t(e,n){i(this,t),this.original=e,this.parentNode=this.original.parentNode,this.originalAttrs=a.g.attrs(this.original),this.manager=n,this.generate()}return r(t,[{key:"generate",value:function(){var t=this.generateInput(),e=new s("label",{for:this.originalAttrs.id}),n=new s("div",{class:"g-input--switch_wrap"},[t,e]),i=n.render();console.log(i),this.parentNode.insertBefore(i,this.original),this.original.remove()}},{key:"generateInput",value:function(){var t=new s("input",this.originalAttrs);return t}}]),t}(),l=new u("input.g-input--switch");console.log(l)},function(t,e,n){"use strict";n(33),console.log("navigation")},function(t,e,n){"use strict";n(34),console.log("notice")},function(t,e,n){"use strict";n(35),console.log("others")},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){}]);
//# sourceMappingURL=index.a0befd46e3bb5722323d.js.map