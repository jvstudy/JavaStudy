(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ja});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}
function qa(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ra(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
qa.prototype.A=function(a){this.l=a};
function sa(a,b){a.i={Md:b,ge:!0};a.g=a.o||a.s}
qa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function z(a,b,c){a.g=c;return{value:b}}
qa.prototype.N=function(a){this.g=a};
function ta(a,b,c){a.o=b;void 0!=c&&(a.s=c)}
function ua(a){a.o=0;var b=a.i.Md;a.i=null;return b}
function va(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.ge?a.g=a.o||a.s:void 0!=b.N&&a.s<b.N?(a.g=b.N,a.i=null):a.g=a.s:a.g=0}
function wa(a){this.g=new qa;this.l=a}
function xa(a,b){ra(a.g);var c=a.g.m;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,sa(a.g,g),za(a)}a.g.m=null;d.call(a.g,f);return za(a)}
function za(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,sa(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.ge)throw b.Md;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){ra(a.g);a.g.m?b=ya(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=za(a));return b};
this.throw=function(b){ra(a.g);a.g.m?b=ya(a,a.g.m["throw"],b,a.g.A):(sa(a.g,b),b=za(a));return b};
this.return=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ba(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ba(new Aa(new wa(a)))}
function Ca(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.m(k)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(k){return function(n){l||(l=!0,k.call(h,n))}}
var h=this,l=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}"function"==typeof h?this.K(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,l=ea.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.B=function(){if(null!=this.l){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.dc(h.resolve,h.reject)};
b.prototype.K=function(g,h){var l=this.m();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(r,q){return"function"==typeof r?function(t){try{k(r(t))}catch(u){n(u)}}:q}
var k,n,p=new b(function(r,q){k=r;n=q});
this.dc(l(g,k),l(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.dc=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;null==this.l?f.l(l):this.l.push(l);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),n=k.next();!n.done;n=k.next())d(n.value).dc(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,n){function p(t){return function(u){r[t]=u;q--;0==q&&k(r)}}
var r=[],q=0;do r.push(void 0),q++,d(l.value).dc(p(r.length-1),n),l=h.next();while(!l.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||pa});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return"object"===k&&null!==l||"function"===k}
function e(l){if(!ia(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return k(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),n=new a([[l,2],[k,3]]);if(2!=n.get(l)||3!=n.get(k))return!1;n.delete(l);n.set(k,4);return!n.has(l)&&4==n.get(k)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ia(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&ia(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&ia(l,g)&&ia(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&ia(l,g)&&ia(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return fa(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;"object"==k||"function"==k?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var n=h[0][k];if(n&&ia(h[0],k))for(h=0;h<n.length;h++){var p=n[h];if(l!==l&&p.key!==p.key||l===p.key)return{id:k,list:n,index:h,entry:p}}return{id:k,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var k=l.entries(),n=k.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=k.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!k.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),n;!(n=k.next()).done;)n=n.value,h.call(l,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Da(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Da(this,b,"includes").indexOf(b,c||0)}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Fa(a){var b=D("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a,b,c){return a.call.apply(a.bind,arguments)}
function Ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function F(a,b,c){F=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ja:Ka;return F.apply(null,arguments)}
function G(){return Date.now()}
function H(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function I(a,b){function c(){}
c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Jh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function La(a){return a}
;function Ma(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ma);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
I(Ma,Error);Ma.prototype.name="CustomError";function Na(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Oa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Pa(){return-1!=Qa().toLowerCase().indexOf("webkit")}
function Ra(a,b){return a<b?-1:a>b?1:0}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function Sa(a){return{valueOf:a}.valueOf()}
;var Va;function Wa(){if(void 0===Va){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:La,createScript:La,createScriptURL:La})}catch(c){C.console&&C.console.error(c.message)}Va=a}else Va=a}return Va}
;function Xa(a){this.g=a}
Xa.prototype.toString=function(){return this.g+""};
function Ya(a){if(a instanceof Xa&&a.constructor===Xa)return a.g;Ga(a);return"type_error:TrustedResourceUrl"}
var Za={};function $a(a){var b=Wa();a=b?b.createScriptURL(a):a;return new Xa(a,Za)}
;function ab(a){this.g=a}
ab.prototype.toString=function(){return this.g.toString()};
var bb={};var cb=new ab("about:invalid#zClosurez",bb);function db(a){this.lg=a}
function eb(a){return new db(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ib=[eb("data"),eb("http"),eb("https"),eb("mailto"),eb("ftp"),new db(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function jb(a){for(var b=Ca.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new ab(c.join(""),bb)}
var kb=Sa(function(){return"function"===typeof URL}),lb=["data:",
"http:","https:","mailto:","ftp:"],mb=/^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;function nb(a){a instanceof ab?a instanceof ab&&a.constructor===ab?a=a.g:(Ga(a),a="type_error:SafeUrl"):a=mb.test(a)?a:void 0;return a}
;function ob(a,b){b=nb(b);void 0!==b&&(a.href=b)}
;var pb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},qb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},rb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e};
function sb(a,b){b=pb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function tb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ub(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function yb(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return yb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var zb=Fa(610401301),Ab=Fa(188588736);function Qa(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Bb,Cb=C.navigator;Bb=Cb?Cb.userAgentData||null:null;function Db(a){return zb?Bb?Bb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function J(a){return-1!=Qa().indexOf(a)}
;function Eb(){return zb?!!Bb&&0<Bb.brands.length:!1}
function Fb(){return Eb()?!1:J("Opera")}
function Gb(){return Eb()?!1:J("Trident")||J("MSIE")}
function Hb(){return Eb()?!1:J("Edge")}
function Ib(){return Eb()?Db("Microsoft Edge"):J("Edg/")}
function Jb(){return J("Safari")&&!(Kb()||(Eb()?0:J("Coast"))||Fb()||Hb()||Ib()||(Eb()?Db("Opera"):J("OPR"))||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))}
function Kb(){return Eb()?Db("Chromium"):(J("Chrome")||J("CriOS"))&&!Hb()||J("Silk")}
function Lb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function Mb(){var a=Qa();if(Gb()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=Lb(b);return Fb()?a(["Version","Opera"]):
Hb()?a(["Edge"]):Ib()?a(["Edg"]):J("Silk")?a(["Silk"]):Kb()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;var Nb={};function Ob(a){this.g=a}
Ob.prototype.toString=function(){return this.g.toString()};
function Pb(a){if(a instanceof Ob&&a.constructor===Ob)return a.g;Ga(a);return"type_error:SafeHtml"}
function Qb(a){var b=Wa();a=b?b.createHTML(a):a;return new Ob(a,Nb)}
;function Rb(a,b){if(1===a.nodeType){var c=a.tagName;if("SCRIPT"===c||"STYLE"===c)throw Error("");}a.innerHTML=Pb(b)}
;function Sb(){throw Error("unknown trace type");}
;function Tb(a,b){a.src=Ya(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Ub(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Vb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a){var b=a.match(Wb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function $b(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function ac(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bc(a){var b=[],c;for(c in a)ac(c,a[c],b);return b.join("&")}
function cc(a,b){b=bc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function dc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var ec=/#|$/,fc=/[?&]($|#)/;function gc(){this.bb=this.bb;this.m=this.m}
gc.prototype.bb=!1;gc.prototype.dispose=function(){this.bb||(this.bb=!0,this.Ba())};
gc.prototype.addOnDisposeCallback=function(a,b){this.bb?void 0!==b?a.call(b):a():(this.m||(this.m=[]),this.m.push(void 0!==b?F(a,b):a))};
gc.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function hc(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
hc.prototype.stopPropagation=function(){this.i=!0};
hc.prototype.preventDefault=function(){this.defaultPrevented=!0};var ic=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function jc(){return J("Gecko")&&!(Pa()&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge")}
;function kc(){return zb&&Bb&&Bb.platform?"Android"===Bb.platform:J("Android")}
function lc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function mc(a){mc[" "](a);return a}
mc[" "]=function(){};var nc=Fb(),oc=Gb(),pc=J("Edge"),qc=jc(),rc=Pa()&&!J("Edge"),sc=kc();function tc(){var a=C.document;return a?a.documentMode:void 0}
var uc;a:{var vc="",wc=function(){var a=Qa();if(qc)return/rv:([^\);]+)(\)|;)/.exec(a);if(pc)return/Edge\/([\d\.]+)/.exec(a);if(oc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rc)return/WebKit\/(\S+)/.exec(a);if(nc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
wc&&(vc=wc?wc[1]:"");if(oc){var xc=tc();if(null!=xc&&xc>parseFloat(vc)){uc=String(xc);break a}}uc=vc}var yc=uc,zc;if(C.document&&oc){var Ac=tc();zc=Ac?Ac:parseInt(yc,10)||void 0}else zc=void 0;var Bc=zc;function Cc(a,b){hc.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
I(Cc,hc);var Dc={2:"touch",3:"pen",4:"mouse"};
Cc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(qc){a:{try{mc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Dc[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&Cc.Fa.preventDefault.call(this)};
Cc.prototype.stopPropagation=function(){Cc.Fa.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
Cc.prototype.preventDefault=function(){Cc.Fa.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ec="closure_listenable_"+(1E6*Math.random()|0);var Fc=0;function Gc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.mc=e;this.key=++Fc;this.Tb=this.cc=!1}
function Hc(a){a.Tb=!0;a.listener=null;a.proxy=null;a.src=null;a.mc=null}
;function Ic(a){this.src=a;this.listeners={};this.g=0}
Ic.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=Kc(a,b,d,e);-1<g?(b=a[g],c||(b.cc=!1)):(b=new Gc(b,this.src,f,!!d,e),b.cc=c,a.push(b));return b};
Ic.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Kc(e,b,c,d);return-1<b?(Hc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function Lc(a,b){var c=b.type;c in a.listeners&&sb(a.listeners[c],b)&&(Hc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function Kc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Tb&&f.listener==b&&f.capture==!!c&&f.mc==d)return e}return-1}
;var Mc="closure_lm_"+(1E6*Math.random()|0),Nc={},Oc=0;function Pc(a,b,c,d,e){if(d&&d.once)Qc(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Pc(a,b[f],c,d,e);else c=Rc(c),a&&a[Ec]?a.qa(b,c,Ia(d)?!!d.capture:!!d,e):Sc(a,b,c,!1,d,e)}
function Sc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=Tc(a);h||(a[Mc]=h=new Ic(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Uc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ic||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Vc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Oc++}}
function Uc(){function a(c){return b.call(a.src,a.listener,c)}
var b=Wc;return a}
function Qc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qc(a,b[f],c,d,e);else c=Rc(c),a&&a[Ec]?a.g.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):Sc(a,b,c,!0,d,e)}
function Xc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xc(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=Rc(c),a&&a[Ec])?a.g.remove(String(b),c,d,e):a&&(a=Tc(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Kc(b,c,d,e)),(c=-1<a?b[a]:null)&&Yc(c))}
function Yc(a){if("number"!==typeof a&&a&&!a.Tb){var b=a.src;if(b&&b[Ec])Lc(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Vc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Oc--;(c=Tc(b))?(Lc(c,a),0==c.g&&(c.src=null,b[Mc]=null)):Hc(a)}}}
function Vc(a){return a in Nc?Nc[a]:Nc[a]="on"+a}
function Wc(a,b){if(a.Tb)a=!0;else{b=new Cc(b,this);var c=a.listener,d=a.mc||a.src;a.cc&&Yc(a);a=c.call(d,b)}return a}
function Tc(a){a=a[Mc];return a instanceof Ic?a:null}
var Zc="__closure_events_fn_"+(1E9*Math.random()>>>0);function Rc(a){if("function"===typeof a)return a;a[Zc]||(a[Zc]=function(b){return a.handleEvent(b)});
return a[Zc]}
;function $c(){gc.call(this);this.g=new Ic(this);this.B=this;this.u=null}
I($c,gc);$c.prototype[Ec]=!0;$c.prototype.addEventListener=function(a,b,c,d){Pc(this,a,b,c,d)};
$c.prototype.removeEventListener=function(a,b,c,d){Xc(this,a,b,c,d)};
function ad(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;"string"===typeof b?b=new hc(b,a):b instanceof hc?b.target=b.target||a:(e=b,b=new hc(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=bd(g,c,!0,b)&&e}b.i||(g=b.g=a,e=bd(g,c,!0,b)&&e,b.i||(e=bd(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=bd(g,c,!1,b)&&e}
$c.prototype.Ba=function(){$c.Fa.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Hc(d[e]);delete a.listeners[c];a.g--}}this.u=null};
$c.prototype.qa=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function bd(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Tb&&g.capture==c){var h=g.listener,l=g.mc||g.src;g.cc&&Lc(a.g,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function cd(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
cd.prototype.get=function(){if(0<this.l){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function dd(a,b){a.m(b);100>a.l&&(a.l++,b.next=a.g,a.g=b)}
;function ed(){}
;function fd(){var a=gd;return document.createRange().createContextualFragment(Pb(Qb(a[0])))}
;function hd(a,b){var c=b.createRange();c.selectNode(b.body);a=Qb(a);return c.createContextualFragment(Pb(a))}
;function id(a){a=a.nodeName;return"string"===typeof a?a:"FORM"}
function jd(a){a=a.nodeType;return 1===a||"number"!==typeof a}
;var kd="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
ld=[["A",new Map([["href",{ra:2}]])],["AREA",new Map([["href",{ra:2}]])],["LINK",new Map([["href",{ra:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ra:1}]])],["IMG",new Map([["src",{ra:1}]])],["VIDEO",new Map([["src",{ra:1}]])],["AUDIO",new Map([["src",{ra:1}]])]],md="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
nd=[["dir",{ra:3,conditions:Sa(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ra:3,conditions:Sa(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ra:2}],["loading",{ra:3,conditions:Sa(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ra:2}],["target",{ra:3,conditions:Sa(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],od=new function(){var a=new Set(md),b=new Map(nd),c=new Map(ld);
this.l=new Set(kd);this.g=c;this.i=a;this.m=b};function pd(){this.g=od}
function qd(a,b){var c=document.implementation.createHTMLDocument("");a=rd(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return Qb(c)}
function rd(a,b,c){b=hd(b,c);b=document.createTreeWalker(b,5,function(h){if(3===h.nodeType)h=1;else if(jd(h))if(h=id(h),null===h)h=2;else{var l=a.g;h="FORM"!==h&&(l.l.has(h)||l.g.has(h))?1:2}else h=2;return h},!1);
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;null!==d;){var g=void 0;if(3===d.nodeType)g=document.createTextNode(d.data);else if(jd(d))g=sd(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function sd(a,b,c){var d=id(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var l=h.g.get(d);h=(null==l?0:l.has(f))?l.get(f):h.i.has(f)?{ra:1}:(h=h.m.get(f))?h:{ra:0};a:{if(l=h.conditions){l=w(l);for(var k=l.next();!k.done;k=l.next()){var n=w(k.value);k=n.next().value;n=n.next().value;var p=void 0;if((k=null==(p=b.getNamedItem(k))?void 0:p.value)&&!n.has(k)){l=!1;break a}}}l=!0}if(l)switch(h.ra){case 1:td(c,f,g);break;
case 2:a:if(h=void 0,kb){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=":"===h||""===h?"https:":h}td(c,f,void 0!==h&&-1!==lb.indexOf(h.toLowerCase())?g:"about:invalid#zClosurez");break;case 3:td(c,f,g.toLowerCase());break;case 4:td(c,f,g)}}return c}
function td(a,b,c){a.setAttribute(b,c)}
var ud=Sa(function(){return new pd});function vd(a){var b=a.split(/\?|#/),c=/\?/.test(a)?"?"+b[1]:"";return{path:b[0],params:c,hash:/#/.test(a)?"#"+(c?b[2]:b[1]):""}}
function wd(a){var b=Ca.apply(1,arguments);if(0===b.length)return $a(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return $a(c)}
function xd(a,b){a=vd(Ya(a).toString());var c=a.params,d=c.length?"&":"?";b.forEach(function(e,f){e=e instanceof Array?e:[e];for(var g=0;g<e.length;g++){var h=e[g];null!==h&&void 0!==h&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});
return $a(a.path+c+a.hash)}
;function yd(a,b){this.width=a;this.height=b}
m=yd.prototype;m.clone=function(){return new yd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
;function Ad(a){"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&!Hb()&&C.Window.prototype.setImmediate==C.setImmediate?(Bd||(Bd=Cd()),Bd(a)):C.setImmediate(a)}
var Bd;function Cd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=zd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=F(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Gb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Hd;c.Hd=null;e()}};
return function(e){d.next={Hd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Dd(a){C.setTimeout(function(){throw a;},0)}
;function Ed(){this.l=this.g=null}
Ed.prototype.add=function(a,b){var c=Fd.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
Ed.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var Fd=new cd(function(){return new Gd},function(a){return a.reset()});
function Gd(){this.next=this.scope=this.g=null}
Gd.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Gd.prototype.reset=function(){this.next=this.scope=this.g=null};var Hd,Id=!1,Jd=new Ed;function Kd(a,b){Hd||Ld();Id||(Hd(),Id=!0);Jd.add(a,b)}
function Ld(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Hd=function(){a.then(Md)}}else Hd=function(){Ad(Md)}}
function Md(){for(var a;a=Jd.remove();){try{a.g.call(a.scope)}catch(b){Dd(b)}dd(Fd,a)}Id=!1}
;function Nd(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=ed)try{var b=this;a.call(void 0,function(c){Od(b,2,c)},function(c){Od(b,3,c)})}catch(c){Od(this,3,c)}}
function Pd(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
Pd.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var Qd=new cd(function(){return new Pd},function(a){a.reset()});
function Rd(a,b,c){var d=Qd.get();d.i=a;d.l=b;d.context=c;return d}
Nd.prototype.then=function(a,b,c){return Sd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Nd.prototype.$goog_Thenable=!0;Nd.prototype.cancel=function(a){if(0==this.g){var b=new Td(a);Kd(function(){Ud(this,b)},this)}};
function Ud(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Ud(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Vd(c),Wd(c,e,3,b)))}a.i=null}else Od(a,3,b)}
function Xd(a,b){a.l||2!=a.g&&3!=a.g||Yd(a);a.m?a.m.next=b:a.l=b;a.m=b}
function Sd(a,b,c,d){var e=Rd(null,null,null);e.g=new Nd(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.l=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof Td?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;Xd(a,e);return e.g}
Nd.prototype.B=function(a){this.g=0;Od(this,2,a)};
Nd.prototype.D=function(a){this.g=0;Od(this,3,a)};
function Od(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof Nd){Xd(d,Rd(e||ed,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ia(d))try{var l=d.then;if("function"===typeof l){Zd(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,Yd(a),3!=b||c instanceof Td||$d(a,c))}}
function Zd(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Yd(a){a.s||(a.s=!0,Kd(a.A,a))}
function Vd(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
Nd.prototype.A=function(){for(var a;a=Vd(this);)Wd(this,a,this.g,this.u);this.s=!1};
function Wd(a,b,c,d){if(3==c&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,ae(b,c,d);else try{b.m?b.i.call(b.context):ae(b,c,d)}catch(e){be.call(null,e)}dd(Qd,b)}
function ae(a,b,c){2==b?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function $d(a,b){a.o=!0;Kd(function(){a.o&&be.call(null,b)})}
var be=Dd;function Td(a){Ma.call(this,a)}
I(Td,Ma);Td.prototype.name="cancel";function ce(a,b){$c.call(this);this.i=a||1;this.l=b||C;this.o=F(this.Ug,this);this.s=G()}
I(ce,$c);m=ce.prototype;m.enabled=!1;m.Ma=null;m.Ug=function(){if(this.enabled){var a=G()-this.s;0<a&&a<.8*this.i?this.Ma=this.l.setTimeout(this.o,this.i-a):(this.Ma&&(this.l.clearTimeout(this.Ma),this.Ma=null),ad(this,"tick"),this.enabled&&(de(this),this.start()))}};
m.start=function(){this.enabled=!0;this.Ma||(this.Ma=this.l.setTimeout(this.o,this.i),this.s=G())};
function de(a){a.enabled=!1;a.Ma&&(a.l.clearTimeout(a.Ma),a.Ma=null)}
m.Ba=function(){ce.Fa.Ba.call(this);de(this);delete this.l};var ee=lc()||J("iPod"),fe=J("iPad");!J("Android")||Kb();Kb();var ge=Jb()&&!(lc()||J("iPad")||J("iPod"));var he={},ie=null;
function je(a,b){Ha(a);void 0===b&&(b=0);if(!ie){ie={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));he[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===ie[h]&&(ie[h]=g)}}}b=he[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ke="undefined"!==typeof Uint8Array,le=!oc&&"function"===typeof btoa;function me(){return"function"===typeof BigInt}
;var ne=0,oe=0;function pe(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(qe(c,a)),b=c.next().value,a=c.next().value,c=b);ne=c>>>0;oe=a>>>0}
function re(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else me()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+se(c)+se(a));return c}
function se(a){a=String(a);return"0000000".slice(a.length)+a}
function te(){var a=ne,b=oe;b&2147483648?me()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(qe(a,b)),a=b.next().value,b=b.next().value,a="-"+re(a,b)):a=re(a,b);return a}
function qe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function ue(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var ve=ue(),we=ue("2ex");Math.max.apply(Math,x(Object.values({vh:1,th:2,sh:4,yh:8,xh:16,wh:32,nh:64,Ah:128,rh:256,qh:512,uh:1024,oh:2048,zh:4096,ph:8192})));var xe=ve?function(a,b){a[ve]|=b}:function(a,b){void 0!==a.Da?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},ye=ve?function(a,b){a[ve]&=~b}:function(a,b){void 0!==a.Da&&(a.Da&=~b)};
function ze(a,b,c){return c?a|b:a&~b}
var Ae=ve?function(a){return a[ve]|0}:function(a){return a.Da|0},Be=ve?function(a){return a[ve]}:function(a){return a.Da},Ce=ve?function(a,b){a[ve]=b;
return a}:function(a,b){void 0!==a.Da?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function De(a,b){Ce(b,(a|0)&-14591)}
function Ee(a,b){Ce(b,(a|34)&-14557)}
function Fe(a){a=a>>14&1023;return 0===a?536870912:a}
;var Ge={},He={};function Ie(a){return!(!a||"object"!==typeof a||a.g!==He)}
function Je(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Ke;function Le(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Ae(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Ce(a,d|1);return!0}
var Me,Ne=[];Ce(Ne,55);Me=Object.freeze(Ne);function Oe(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var Pe;function Qe(a){a=Error(a);Ub(a,"warning");return a}
;function Re(a){return a.displayName||a.name||"unknown type name"}
var Se=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Te(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Se.test(a)}
function Ue(a){if(null!=a){var b=!!b;if(!Te(a))throw Qe("int64");"string"===typeof a?a=Ve(a):b?(Te(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),We(b)?a=b:(pe(a),a=te()))):a=Xe(a)}return a}
function We(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Xe(a){Te(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){pe(a);var b=ne,c=oe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Ve(a){Te(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));if(!We(a)){if(16>a.length)pe(Number(a));else if(me())a=BigInt(a),ne=Number(a&BigInt(4294967295))>>>0,oe=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);oe=ne=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),oe*=1E6,ne=1E6*ne+d,4294967296<=ne&&(oe+=Math.trunc(ne/4294967296),oe>>>=0,ne>>>=0);b&&(b=w(qe(ne,oe)),a=b.next().value,
b=b.next().value,ne=a,oe=b)}a=te()}return a}
function Ye(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Ze(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Re(b)+" but got "+(a&&Re(a.constructor)));return a}
function $e(a,b,c){if(null!=a&&"object"===typeof a&&a.ed===Ge)return a;if(Array.isArray(a)){var d=Ae(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Ce(a,e);return new b(a)}}
;var af;
function K(a,b,c){null==a&&(a=af);af=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=Ae(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Je(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}Ce(a,d);return a}
;function bf(a,b){return cf(b)}
function cf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Le(a,void 0,0))return}else if(ke&&null!=a&&a instanceof Uint8Array){if(le){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=je(a);return a}}return a}
;function df(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function ef(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=Le(a,void 0,0)?void 0:e&&Ae(a)&2?a:ff(a,b,c,void 0!==d,e);else if(Je(a)){var f={},g;for(g in a)f[g]=ef(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function ff(a,b,c,d,e){var f=d||c?Ae(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=ef(a[g],b,c,d,e);c&&c(f,a);return a}
function gf(a){return a.ed===Ge?a.toJSON():cf(a)}
;function hf(a,b,c){c=void 0===c?Ee:c;if(null!=a){if(ke&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ae(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?Ce(a,(d|34)&-12293):ff(a,hf,d&4?Ee:c,!0,!0)}a.ed===Ge&&(c=a.P,d=Be(c),a=d&2?a:jf(a,c,d,!0));return a}}
function jf(a,b,c,d){a=a.constructor;b=kf(b,c,d);Ae(b);af=b;b=new a(b);af=void 0;return b}
function kf(a,b,c){var d=c||b&2?Ee:De,e=!!(b&32);a=df(a,b,function(f){return hf(f,e,d)});
xe(a,32|(c?2:0));return a}
function lf(a){var b=a.P,c=Be(b);return c&2?jf(a,b,c,!1):a}
;function mf(a,b){a=a.P;return nf(a,Be(a),b)}
function of(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function nf(a,b,c,d){if(-1===c)return null;var e=Fe(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(of(a,b,e,c)&&null!=we){var g;a=null!=(g=Pe)?g:Pe={};g=a[we]||0;4<=g||(a[we]=g+1,g=Error(),Ub(g,"incident"),Dd(g))}return d}return of(a,b,e,c)}}
function pf(a,b,c){var d=a.P,e=Be(d);Oe(e);qf(d,e,b,c);return a}
function qf(a,b,c,d,e){Je(d);var f=Fe(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Ce(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function rf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function sf(a,b,c,d){a=a.P;var e=Be(a);Oe(e);(c=tf(a,e,c))&&c!==b&&null!=d&&(e=qf(a,e,c));qf(a,e,b,d)}
function tf(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=nf(a,b,f)&&(0!==d&&(b=qf(a,b,d)),d=f)}return d}
function uf(a,b,c){var d=void 0===d?!1:d;var e=a.P;var f=Be(e),g=nf(e,f,c,d);b=$e(g,b,f);b!==g&&null!=b&&qf(e,f,c,b,d);e=b;if(null==e)return e;a=a.P;f=Be(a);f&2||(g=lf(e),g!==e&&(e=g,qf(a,f,c,e,d)));return e}
function vf(a,b,c,d){null!=d?Ze(d,b):d=void 0;return pf(a,c,d)}
function wf(a,b){var c=!0;a=ze(a,2,!!(2&b));a=ze(a,32,!!(32&b)&&c);return a=ze(a,2048,!1)}
function xf(a,b,c,d){a=a.P;var e=Be(a);Oe(e);var f,g=!!(2&e),h=g?1:2,l=1===h;h=2===h;f&&(f=!g);g=nf(a,e,b);g=Array.isArray(g)?g:Me;var k=Ae(g),n=!!(4&k);if(!n){var p=k;0===p&&(p=wf(p,e));p=ze(p,1,!0);k=g;var r=e,q=!!(2&p);q&&(r=ze(r,2,!0));for(var t=!q,u=!0,A=0,E=0;A<k.length;A++){var R=$e(k[A],c,r);if(R instanceof c){if(!q){var X=!!(Ae(R.P)&2);t&&(t=!X);u&&(u=X)}k[E++]=R}}E<A&&(k.length=E);p=ze(p,4,!0);p=ze(p,16,u);p=ze(p,8,t);Ce(k,p);q&&Object.freeze(k);k=p}p=!!(8&k)||l&&!g.length;if(f&&!p){rf(k)&&
(g=Array.prototype.slice.call(g),k=wf(k,e),e=qf(a,e,b,g));f=g;for(p=0;p<f.length;p++)r=f[p],q=lf(r),r!==q&&(f[p]=q);k=ze(k,8,!0);k=ze(k,16,!f.length);Ce(f,k)}rf(k)||(f=k,l&&(k=ze(k,!g.length||16&k&&(!n||32&k)?2:2048,!0)),k!==f&&Ce(g,k),l&&Object.freeze(g));h&&rf(k)&&(g=Array.prototype.slice.call(g),k=wf(k,e),Ce(g,k),qf(a,e,b,g));b=g;c=null!=d?Ze(d,c):new c;b.push(c);Ae(c.P)&2?ye(b,8):ye(b,16)}
function yf(a,b){var c=0;c=void 0===c?0:c;a=mf(a,b);a=null==a?a:Number.isFinite(a)?a|0:void 0;return null!=a?a:c}
function zf(a,b){var c=a.P;b=tf(c,Be(c),Af)===b?b:-1;a=mf(a,b);return null==a||"string"===typeof a?a:void 0}
function L(a,b,c){return pf(a,b,Ye(c))}
function Bf(a,b,c){if(null!=c){if(!Number.isFinite(c))throw Qe("enum");c|=0}return pf(a,b,c)}
;function M(a,b,c){this.P=K(a,b,c)}
M.prototype.toJSON=function(){if(Ke)var a=Cf(this,this.P,!1);else a=ff(this.P,gf,void 0,void 0,!1),a=Cf(this,a,!0);return a};
M.prototype.clone=function(){var a=this.P;return jf(this,a,Be(a),!1)};
M.prototype.ed=Ge;M.prototype.toString=function(){return Cf(this,this.P,!1).toString()};
function Cf(a,b,c){var d=Ab?void 0:a.constructor.ib;var e=Be(c?a.P:b);a=b.length;if(!a)return b;var f;if(Je(c=b[a-1])){a:{var g=c;var h={},l=!1,k;for(k in g){var n=g[k];if(Array.isArray(n)){var p=n;if(Le(n,d,+k)||Ie(n)&&0===n.size)n=null;n!=p&&(l=!0)}null!=n?h[k]=n:l=!0}if(l){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(k=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=k;if(!(null==c||Le(c,d,r)||Ie(c)&&0===c.size))break;var q=!0}if(!f&&!q)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;var Df=window;function Ef(){return zb&&Bb?Bb.mobile:!(zb&&Bb?!Bb.mobile&&(J("iPad")||J("Android")||J("Silk")):J("iPad")||J("Android")&&!J("Mobile")||J("Silk"))&&(J("iPod")||J("iPhone")||J("Android")||J("IEMobile"))}
;function Ff(a){var b=Gf;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Hf(){var a=[];Ff(function(b){a.push(b)});
return a}
var Gf={bh:"allow-forms",dh:"allow-modals",eh:"allow-orientation-lock",fh:"allow-pointer-lock",gh:"allow-popups",hh:"allow-popups-to-escape-sandbox",ih:"allow-presentation",jh:"allow-same-origin",kh:"allow-scripts",lh:"allow-top-navigation",mh:"allow-top-navigation-by-user-activation"},If=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Hf()});
function Jf(){var a=Kf(),b={};qb(If(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Kf(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Lf(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Mf=(new Date).getTime();function Nf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Of(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=k=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],A=e[3],E=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var R=A^t&(u^A);var X=1518500249}else R=t^u^A,X=1859775393;else 60>q?(R=t&u|A&(t|u),X=2400959708):(R=t^u^A,X=3395469782);R=((p<<5|p>>>27)&4294967295)+R+E+X+r[q]&4294967295;E=A;A=u;u=(t<<30|t>>>2)&4294967295;t=p;p=R}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+E&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],t=0,u=p.length;t<u;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(0==k)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[k++]=p[q++],n++,64==k)for(k=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>k?c(h,56-k):c(h,64-(k-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var t=24;0<=t;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var k,n;a();return{reset:a,update:c,digest:d,bf:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Pf(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Qf(Nf(d),a,c||null)].join(" "):null}
function Qf(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],qb(d,function(h){e.push(h)}),Rf(e.join(" "));
var f=[],g=[];qb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];qb(d,function(h){e.push(h)});
a=Rf(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Rf(a){var b=Of();b.update(a);return b.bf().toLowerCase()}
;var Sf={};function Tf(a){this.g=a||{cookie:""}}
m=Tf.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{cd:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ni;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.cd}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Oa(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{cd:0,path:b,domain:c});return d};
m.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Oa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Uf=new Tf("undefined"==typeof document?null:document);function Vf(a){return!!Sf.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Wf(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Vf(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Tf(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Vf(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Xf(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Tf(document)).get(b));return a?Pf(a,c,d):null}
function Yf(a){var b=void 0===b?!1:b;var c=Nf(String(C.location.href)),d=[];if(Wf(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Tf(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Pf(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Vf(b)&&((b=Xf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Xf("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Zf(a){$c.call(this);var b=this;this.A=this.i=0;this.Ea=null!=a?a:{Ia:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return B(function(e){return z(e,$f(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||ag(this)}
y(Zf,$c);function bg(){var a=cg;Zf.g||(Zf.g=new Zf(a));return Zf.g}
Zf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.xa(this.A);delete Zf.g};
Zf.prototype.ya=function(){return this.l};
function ag(a){a.A=a.Ea.Ia(function(){var b;return B(function(c){if(1==c.g)return a.l?(null==(b=window.navigator)?0:b.onLine)?c.N(3):z(c,$f(a),3):z(c,$f(a),3);ag(a);c.g=0})},3E4)}
function $f(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ta(h,2,3),d&&(a.i=a.Ea.Ia(function(){d.abort()},b||2E4)),z(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Ea.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?ad(a,"networkstatus-online"):ad(a,"networkstatus-offline"));c(g);va(h);break;case 2:ua(h),g=!1,h.N(3)}})})}
;var dg=/^[6-9]$/,eg=/<\/?(?:b|em)>/gi;function fg(a){this.g=a}
var gg=new fg({});function hg(a){a=ig(a);return Qb(a)}
function jg(a){a=ig(a);return $a(a)}
function ig(a){return null===a?"null":void 0===a?"undefined":a}
;function kg(a,b,c,d,e,f){this.A=a instanceof Ob?a:hg(a);this.g=b;this.u=c;this.s=d;this.i=e;this.m=f||gg;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
kg.prototype.getHtml=function(){return Pb(this.A).toString()};
kg.prototype.l=function(){return this.u};
kg.prototype.getType=function(){return this.s};var lg=/^\s/,mg=/\s+/,ng=/\s+/g,og=/^\s+|\s+$/g,pg=/^\s+$/,qg=/<[^>]*>/g,rg=/&nbsp;/g,sg=/&#x3000;/g,tg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],ug=document.getElementsByTagName("head")[0],vg=0,wg=1;function xg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function yg(a,b){function c(){return b}
void 0===b&&(b=a);return{Ob:c,Vd:function(){return a},
wf:c,Wh:function(){return a<b},
equals:function(d){return d&&a==d.Vd()&&b==d.wf()}}}
function zg(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Ag(a,b){var c=[],d;for(d in a)zg(d,a[d],c,b);return c.join("&")}
function Bg(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Cg(a){return!!a&&!pg.test(a)}
function Dg(a){for(var b=tg.length,c=0;c<b;c+=2)a=a.replace(tg[c],tg[c+1].source);return a}
function Eg(a){for(var b=tg.length,c=0;c<b;c+=2)a=a.replace(tg[c+1],tg[c].source);a=a.replace(rg," ");return a.replace(sg,"\u3000")}
function Fg(a,b){return a&&(-1<a.indexOf(" ")||mg.test(a))?(a=a.replace(ng," "),a.replace(b?og:lg,"")):a}
function Gg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function Hg(){}
function Ig(a){var b=Jg;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function Kg(){return 0}
function Lg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Mg(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(-1!=pb(b,173)?14:1));return a}
;function Ng(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(vg++).toString(36);this.B=this.g.toLowerCase();this.l=Fg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
Ng.prototype.getId=function(){return this.u};
function Og(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function Pg(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function Qg(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&33==this.g[0].getType()&&(this.m=this.s=!1):this.g=[];this.i||(this.i=gg)}
Qg.prototype.getType=function(){return this.s};function Rg(){}
Rg.prototype.Ad=function(){};
Rg.prototype.redirect=function(){};
Rg.prototype.zd=function(){return""};
Rg.prototype.je=function(){};function Sg(){this.l={};this.g={}}
Sg.prototype.set=function(a,b){this.l[a]=b};
Sg.prototype.has=function(a){return!!this.l[a]};
function Tg(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function Ug(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(Vg);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.je(this.o);this.o.Ve();for(g=0;a=this.g[g++];)a.O(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.nb(this.config_);
for(g=0;a=this.g[g++];)a.R(this.config_);this.l=!0}
function Wg(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Ga();a.l=!1}}
Ug.prototype.isActive=function(){return this.l};
Ug.prototype.get=function(a){return this.u[a]};
function Xg(a,b){return a.m[b]||[]}
function Vg(a,b){a=Ig(a.getType());b=Ig(b.getType());return 0>a?1:0>b?-1:a-b}
var Jg=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function N(a){this.l=a}
m=N.prototype;m.sa=function(){};
m.O=function(){};
m.ga=function(){};
m.nb=function(){};
m.R=function(){};
m.getType=function(){return this.l};
m.Ga=function(){};function Yg(){this.l=149;this.g={};this.i=0}
y(Yg,N);m=Yg.prototype;m.O=function(a){this.A=a.get(127)};
m.R=function(a){if(a.connectionType==this.qb()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.fc;this.u=b.yc;this.m=b.Ee}};
m.Ga=function(){Zg(this);this.i=0};
m.Ce=function(a,b,c){$g(this,a.getId(),a.g,b,c);return!0};
m.qb=function(){return 1};
m.Rc=function(){return this.i};
m.Nc=function(a){var b=this.g[a];b&&(ah(b),delete this.g[a])};
function $g(a,b,c,d,e){a.config_.Ld||Zg(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(4==f.readyState){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;0==g.lastIndexOf(")]}'\n",0)&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Nc(b)}};
a.g[b]=f;f.send(null)}
function Zg(a){for(var b in a.g)ah(a.g[b]);a.g={}}
function ah(a){a.onreadystatechange=Hg;var b=a.readyState;0!=b&&4!=b&&a.abort()}
;var bh;function ch(){this.l=153}
y(ch,N);function dh(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function eh(a){this.o=a}
eh.prototype.getType=function(){return this.o};
eh.prototype.s=function(){return!0};function fh(a){this.l=152;this.D=a}
I(fh,N);fh.prototype.Ab=Hg;var gh=Gb(),hh;if(hh=gh){for(var ih=Mb(),jh=0,kh=Oa(String(ih)).split("."),lh=Oa("10").split("."),mh=Math.max(kh.length,lh.length),nh=0;0==jh&&nh<mh;nh++){var oh=kh[nh]||"",ph=lh[nh]||"";do{var qh=/(\d*)(\D*)(.*)/.exec(oh)||["","","",""],rh=/(\d*)(\D*)(.*)/.exec(ph)||["","","",""];if(0==qh[0].length&&0==rh[0].length)break;jh=Ra(0==qh[1].length?0:parseInt(qh[1],10),0==rh[1].length?0:parseInt(rh[1],10))||Ra(0==qh[2].length,0==rh[2].length)||Ra(qh[2],rh[2]);oh=qh[3];ph=rh[3]}while(0==jh)}hh=0<=jh}
var sh=hh,th=jc();th&&Mb();var uh=Fb(),vh=Pa()&&!J("Edge");Jb();var wh=Kb(),xh=Ef()&&Jb(),yh=kc(),zh=zb&&Bb&&Bb.platform?"macOS"===Bb.platform:J("Macintosh"),Ah=Ef();var Bh;yb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Ch(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function Dh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Bh||(c={},Bh=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Bh,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Eh(a){var b=a.getAttribute("aria-activedescendant");return(9==a.nodeType?a:a.ownerDocument||a.document).getElementById(null==b||void 0==b?"":String(b))}
function Fh(a,b){var c="";b&&(c=b.id);Dh(a,"activedescendant",c)}
;var Gh=void 0!=document.documentElement.style.opacity,Hh={rtl:"right",ltr:"left"};function Ih(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Jh(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Dc:b,Ua:c}}
function Kh(a){try{return Lh(a).activeElement==a}catch(b){}return!1}
function O(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function P(a){return O("div",a)}
function Mh(a,b){a.innerHTML!=b&&Rb(a,hg(b))}
function Nh(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Hh[b])}
function Oh(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Ph(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Oh(a)}
function Qh(a){var b=O("a");ob(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Rh(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Le:c,ae:b}}
function Lh(a){return a?a.ownerDocument||a.document:window.document}
function Sh(a){return a?(a=Lh(a),a.defaultView||a.parentWindow):window}
function Th(){return Gh?"opacity":"filter"}
function Uh(a){return Gh?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function Vh(){this.o=507;Wh(this)}
y(Vh,eh);Vh.prototype.g=function(){return this.i};
function Xh(a,b,c,d){Wh(a,c,d);Rb(a.l,qd(ud,b))}
function Wh(a,b,c){a.i=P("sbfl_a");a.l=P("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var Yh=[30,35,33,41],Zh=[39,10,21];function $h(a,b){fh.call(this,507);this.m=a;this.g=b}
y($h,fh);$h.prototype.O=function(a){this.i=a.get(128)};
$h.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
$h.prototype.Ib=function(){return new Vh};
function ai(a){return a.map(function(b){return{label:b.g}})}
$h.prototype.Bb=function(a,b){a=rb(this.i.m,function(c){a:if(0<=Yh.indexOf(c.getType()))c=!1;else{c=c.i||[];for(var d=w(Zh),e=d.next();!e.done;e=d.next())if(0<=c.indexOf(e.value)){c=!1;break a}c=!0}return c},this);
0<a.length?(Xh(b,this.m,ai(a),this.g),b.g().style.display=""):b.g().style.display="none"};var gd=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),bi=ha(["#ps"]);
function ci(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=P("sbpqs_d");this.u=P();this.K=O("span","sbpqs_a");this.J&&(this.l=O("a"),ob(this.l,jb(bi)),this.l.className="sbsb_i",this.I=P("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=P("sbpqs_c"),Rb(this.m,qd(ud,this.Y)),Ch(this.m,"alert"));this.u.appendChild(this.K);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(ci,eh);ci.prototype.g=function(){return this.i};
ci.prototype.s=function(){return this.B};
function di(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";Rb(a.K,qd(ud,b));a.J&&(a.m.style.display="none",b=fd(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){ei(a,f)},a.l.title=e)}
function ei(a,b){a.A=!0;fi(a.X,a.ca,function(){a.A&&(gi(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&hi(a.H),a.D.g==a.F&&(ii(a.D),ji(a.H)),a.B=!1)});
Ph(b)}
;function ki(){fh.call(this,35)}
y(ki,fh);m=ki.prototype;m.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
m.O=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
m.ga=function(a){this.R(a)};
m.R=function(a){this.A=a.td;this.s=a.od;this.o=a.nd};
m.Ib=function(){return new ci(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
m.Bb=function(a,b){di(b,a.getHtml(),a.g,a.l(),this.s)};
m.Ab=function(a,b,c){li(c,b.g,1)};function mi(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=P("sbpqs_d");this.m=P();this.K=O("span","sbpqs_a");this.J&&(this.u=O("a"),ob(this.u,"#ps"),this.u.className="sbsb_i",this.I=P("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=P("sbpqs_c"),Rb(this.i,qd(ud,this.Y)),Ch(this.i,"alert"));this.m.appendChild(this.K);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(mi,eh);mi.prototype.g=function(){return this.l};
mi.prototype.s=function(){return this.B};
mi.prototype.ea=function(a){this.A=!0;fi(this.X,this.ca,F(this.ma,this));return Ph(a)};
mi.prototype.ma=function(){this.A&&(gi(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&hi(this.H),this.D.g==this.F&&(ii(this.D),ji(this.H)),this.B=!1)};function ni(){fh.call(this,35)}
y(ni,fh);m=ni.prototype;m.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
m.O=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
m.ga=function(a){this.R(a)};
m.R=function(a){this.A=a.td;this.s=a.od;this.o=a.nd};
m.Ib=function(a){return new mi(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
m.Bb=function(a,b){var c=a.getHtml(),d=a.g;a=a.l();var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";Rb(b.K,qd(ud,c));b.J&&(b.i.style.display="none",Rb(b.u,qd(ud,e)),b.u.onclick=F(b.ea,b))};
m.Ab=function(a,b,c){li(c,b.g,1)};function oi(){this.l=134;this.i={}}
y(oi,N);m=oi.prototype;m.O=function(a){this.m=a.i.getId()};
m.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=F(this.Qe,this)};
m.R=function(a){this.A=jg("//"+(a.pd||"clients1."+a.fc)+"/complete/deleteitems");this.s=a.xd;this.o=a.authuser;this.u=a.clientName};
m.Ga=function(){pi(this)};
function pi(a){a.g&&(qi.removeChild(a.g),a.g=null)}
m.Qe=function(a){pi(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var qi=ug;function ri(){this.l=189}
y(ri,N);ri.prototype.O=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
ri.prototype.ga=function(a){this.o=a.rf};
ri.prototype.R=function(a){this.m=a.xd;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(F(this.B,this),a),this.o=!1)};
function fi(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===Bg(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=O("script");b=xd(b,c);Tb(a.g,b);qi.appendChild(a.g)}
ri.prototype.B=function(){var a=si(this.A,"",void 0,void 0,!0);ti(this.i,a);ui(this.i)};function vi(){this.l=156}
y(vi,N);vi.prototype.O=function(a){this.m=a.get(189)};
vi.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===Bg(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)Pg(a,d,c[d]);return 1};
vi.prototype.g=function(){return 12};function wi(a){this.l=156;this.o=a;this.m=null}
I(wi,N);wi.prototype.i=function(a){var b=1,c=a.D;a=Cg(a.g);var d="focus"==c||"input"==c;c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&"mousedown"==c&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
wi.prototype.g=function(){return 2};
wi.prototype.O=function(a){this.m=a.get(128)};function xi(){this.l=157}
y(xi,N);function yi(){this.l=156}
y(yi,N);yi.prototype.i=function(a){var b=Bg(Vb(window.location.href));b.v&&Pg(a,"video_id",b.v,!0);return 1};
yi.prototype.g=function(){return 24};function zi(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(zi,N);zi.prototype.O=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
zi.prototype.ga=function(a){this.m=a.md;this.H=a.nf};
function Ai(a,b){a.s=b;a.F.sd(a.s)}
function Bi(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||0==b.length)return!1;if(b!=a.m)return"always"==a.A&&a.g&&a.g.m&&0<a.g.m.length&&Ci(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];"ClearBySearchbox"==d?a.o=[]:"FromSearchResponse"==d&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||0>=a.o.length)return a.g&&a.g.m&&0<a.g.m.length?(Ci(a.g),!1):"always"==a.A||"fallback"==a.A;c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&0<f.length&&
c.push(new kg(a.B.bold(b,f),f,d++,0,[71],null))}0<c.length&&Di(a.g,c,!1);return!1}
;function Ei(){this.l=156}
y(Ei,N);Ei.prototype.O=function(a){this.m=a.get(598)};
Ei.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=Bg(Vb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,Ai(b,c)):d||""==b.s?d&&""==b.s&&Ai(b,b.m):Ai(b,"");return"mousedown"!=a.D&&"focus"!=a.D||!Bi(this.m)?1:2};
Ei.prototype.g=function(){return 46};function Fi(){this.l=149;this.i=ug;this.g={}}
y(Fi,N);m=Fi.prototype;m.O=function(a){this.D=a.get(127);this.u=a.i.getId()};
m.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
m.R=function(a){this.config_=a;a.connectionType==this.qb()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.yc,this.A=a.Ee,this.F="https:"==document.location.protocol,Gi(this,F(this.Re,this)),(new Image).src=this.s+this.o+"/generate_204")};
m.Ga=function(){Gi(this,null);Hi(this)};
m.Ce=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Ld||Hi(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];zg("q",e,a,!0);this.config_.Ke||zg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(32*Math.random()),g,h=0;h<f;++h)g=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),e+=String.fromCharCode(g);zg("gs_gbg",e,a)}e=O("script");this.config_.mg&&e.setAttribute("nonce",this.config_.mg);
Tb(e,jg(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
m.qb=function(){return 0};
m.Rc=function(){return 0};
m.Nc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function Hi(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
m.Re=function(a){this.m&&this.m(a)};
function Gi(a,b){b||(b=Hg);var c=window.google;a.config_.Ke?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Ii(){this.l=115;this.o={}}
y(Ii,N);m=Ii.prototype;m.O=function(a){this.m=a.get(116);if(a=Xg(a,154))for(var b,c=0;b=a[c++];)this.o[Ji]=b};
m.R=function(){this.g=!1};
m.Ga=function(){Ki(this)};
m.isVisible=function(){return this.g};
m.getHeight=function(){return this.g?this.m.getHeight():0};
function Ki(a){if(a.g){var b=a.m;b.B=0;Li(b.o.m,!1);Mi(b.K,!1);Mi(b.i,!1);Ni(b,b.W);Oi(b.F,9);a.g=!1}}
var Pi={be:"left",ig:!0,pb:null,marginWidth:0};function Qi(){this.l=118}
y(Qi,N);m=Qi.prototype;m.O=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=Xg(a,160)};
m.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
m.R=function(a){this.config_=a;this.D=this.K=!1;Ri(this)};
function Ti(a){var b={};Oi(a.s,11,b);!b.cancel&&a.config_.Tf&&Ad(function(){var c=a.i;ui(c.D);Ui(c)})}
function Vi(a,b){if(0==a.config_.Cc||2==a.config_.Cc||3==a.config_.Cc&&!a.o&&!b)return!1;a:{if(Wi(a.i)&&(null!=a.i.i?b=Xi(a.i):(b=a.i,b=Wi(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Gg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),Yi(a,b,yg(b.length),"",!0),Zi(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function Yi(a,b,c,d,e){a.config_.ef&&!a.i.isVisible()&&"mousedown"==d&&$i(a.i,c,d);var f=!1,g=!1;if(b!=a.g||"onremovechip"==d)Gg(d,"key")?a.B.add(1):"paste"==d&&a.B.add(2),f=!0,aj(a,b),Oi(a.s,1,{Wb:d,pb:a.u}),g=G(),a.H||(a.H=g),a.W=g,Cg(b)&&(e=!0),g=!0;b=si(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(F(f.clear,f),f.config_.Uf))),a.K&&Pg(b,"gs_is",1),ti(a.I,b)):g&&(a.i.clear(),ui(a.I));Oi(a.s,2,{Wb:d})}
function ji(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,bj(a)}catch(b){}}
function cj(a,b){aj(a,b);dj(a.m);Oi(a.s,4,{pb:a.u,input:b})}
function hi(a){a.g!=a.o&&aj(a,a.o);Oi(a.s,5,{input:a.o,Qg:a.i.m,pb:a.u});dj(a.m)}
m.getHeight=function(){return this.m.getHeight()};
function ej(a){if(a.ca){if(a.config_.Uc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
m.clear=function(){this.g&&(aj(this,""),this.m.clear(),Oi(this.s,1),Oi(this.s,16),this.i.clear())};
function fj(a,b){var c=a.m.s.Ob();a.u==b?Wi(a.i)&&c==a.g.length&&(null!=a.i.i?a.config_.kc&&!a.config_.Oa&&li(a.F,Xi(a.i).g,6):a.config_.ie&&Vi(a,!0)):a.A&&0==c&&a.A.g()}
function gj(a){var b=a.m.s.Ob();return a.config_.Oa&&Wi(a.i)&&null!=a.i.i&&b===a.g.length}
function Zi(a,b,c){a.g=b||"";Ri(a);dj(a.m);c||Oi(a.s,4,{pb:a.u,input:a.g})}
function Ri(a){var b=hj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Cb){c=c.g;var d=0,e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.u=b}}
function aj(a,b){a.g=a.o=b||"";Ri(a)}
;function ij(){this.l=128}
y(ij,N);m=ij.prototype;m.O=function(a){this.o=a.get(129);this.K=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=Xg(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
m.ga=function(){this.W.sort(Kg)};
m.R=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
m.Ga=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;Ui(this)};
function Di(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=Wi(a)?b[0].g:a.u.o;a:{var f=e;if(a.K.g){for(var g=!1,h=!1,l=0,k;l<f.length;++l)if(k=f.charAt(l),!jj.test(k)&&(kj.test(k)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=hj(a.K,e);if(a.config_.Bg&&Wi(a)&&c&&!Ah){a.F=!0;c=a.o;if(c.o){c.F=a.B;lj(c);e=!1;for(f=0;g=b[f++];)mj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Eg(e);b=a.ca;f=0;e&&(b.g||nj(b),oj(b),e in b.m?f=b.m[e]:(Mh(b.g,Dg(e)),b.m[e]=f=b.g.offsetWidth,Mh(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Mg&&!Wi(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!dh(a.m,e););(f=e?e.length:0)&&(f-=pj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=pj(e,c,1));a.config_.Qf&&c.push(1);f&&(f-=pj(e,c,2));f&&pj(e,c,3);a.config_.Yd&&c.push(2);a.ea&&1<c.length&&5==c[0].getType()&&c.splice(1,0,3)}if(b.o){b.F=a.B;lj(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.B?g.B.style.display="":(h=O("li"),l=h.style,l.position="relative",l.textAlign="center",l.whiteSpace="nowrap",h.dir=
g.H,g.i=P(),g.i.className="sbsb_g",g.config_.Yd&&(g.i.style.paddingBottom="1px"),qj(g,g.config_.Jg,g.i,13),g.config_.Pf?qj(g,g.config_.Od,g.i,8):g.config_.Rf&&qj(g,g.config_.Kg,g.i,14),h.appendChild(g.i),h.onmousedown=F(g.ld,g),h.className=g.config_.Bc,g.B=h),g.g.appendChild(g.B);else if(2==g)if(g=b,g.A)g.A.style.display="";else{h=P("sbsb_j "+g.config_.Bc);l=O("a");l.id="sbsb_f";ob(l,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.Yc+"&answer=106230");var n=g.config_.ng;k={Cg:!0};
k=void 0===k?{}:k;n instanceof Ob?k=n:(n=String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),k.ji&&(n=n.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),k.Cg&&(n=n.replace(/(\r\n|\n|\r)/g,"<br>")),k.ki&&(n=n.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),k=Qb(n));Rb(l,k);h.appendChild(l);h.onmousedown=F(g.ld,g);g.A=h;g.o.appendChild(g.A)}else 3==g?(g=b,h=g.ca.pop(),h||(h=O("li"),Dh(h,"hidden",!0),h.l=!0,l=O("div","sbsb_e"),h.appendChild(l)),
g.g.appendChild(h)):mj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),rj(a,a.H.g()));c?Ci(a):a.clear()}
function rj(a,b){if(a.g!=b){var c=a.g;a.g=b;sj(a,c)}}
m.Ae=function(){if(Wi(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:null==this.g?this.g=0:++this.g;this.i=this.g;tj(this,a,F(this.Ae,this))}else Ci(this)};
m.Be=function(){if(Wi(this))if(this.s){var a=this.g;this.m&&0!=this.g?null==this.g?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;tj(this,a,F(this.Be,this))}else Ci(this)};
m.isVisible=function(){return this.s};
m.isEnabled=function(){return this.X};
function Xi(a){return null!=a.i?a.m[a.i]:null}
function Wi(a){return!(!a.m||!a.m.length)}
function Ci(a){if(!a.s){a:{var b=a.I,c=Ji;if(c in b.o){if(b.i){if(c==Ji)break a;Ki(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=Lg(Pi);if(c.i){var e=c.i.i;d.pb=e.B;d.marginWidth=e.J;var f=e.config_.Rg;f||(f="rtl"==e.B?"right":"left");d.be=f}Ni(b,d.pb||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.ig;b.ca=d.be;Li(b.o.m,!0);Mi(b.K,!0);Mi(b.i,
!0);Oi(b.F,14);b.Cd();c.g=!0}a.s=!0}}
function Ui(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),Ki(a.I),a.s=!1)}
m.clear=function(){Ui(this);this.m=null;this.F=!1;null!=this.g&&uj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function ii(a){null!=a.g&&uj(a.o,a.g);a.i=a.g=null}
function $i(a,b,c){if(Wi(a))Ci(a);else{var d=a.u.o;d&&(b=si(a.Y,d,b||a.u.m.s,c),ti(a.D,b))}}
function pj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.ka&&f.ka(b)&&++d:(b.push(f),++d));return d}
function tj(a,b,c){var d;(d=null==a.g)||(d=(d=a.o.m[a.g])?d.s():!1);d?(sj(a,b),b=a.o,c=a.g,c=void 0===c?null:c,null===c?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Oa&&(c=c.querySelector('[role="gridcell"]')),c&&Fh(b.u,c)),null==a.g?hi(a.u):(b=a.m[a.g],b.getType(),Zi(a.u,b.g))):(uj(a.o,b),c())}
function sj(a,b){null!=b&&uj(a.o,b);null!=a.g&&(b=a.o,(a=b.m[a.g])&&a.s()&&vj(a.g().parentNode,b.X))}
var Ji=wg++;function wj(){this.l=154}
y(wj,N);wj.prototype.O=function(a){this.i=a.get(128);this.g=a.get(129)};function xj(){this.l=145;this.g=kj.test("x")}
y(xj,N);xj.prototype.sa=function(a){this.i=a.lc()};
function hj(a,b){var c=a.i;a.g&&(kj.test(b)?c="ltr":jj.test(b)||(c="rtl"));return c}
var jj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),kj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function yj(){this.l=117;this.i=[];this.g={Pe:1}}
y(yj,N);function zj(a,b,c,d,e,f){var g=Aj(a,b);g||(g={},a.i.push({element:b,Lf:g}));var h=g[c];h||(h=g[c]=[],a=Bj(a,c,b.Pe?window:Sh(b),h),"string"!==typeof c?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({hg:!!f,bd:!1,priority:e||0,process:d});h.sort(Cj);d.mf=c}
function Dj(a,b,c){if(a=Aj(a,b))if(a=a[c.mf])for(var d=0;b=a[d++];)if(b.process==c){b.bd=!0;break}}
function Oi(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Wb)}
yj.prototype.qa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function Bj(a,b,c,d){return F(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.gg=!0)}e.Wb=f||b;f=e;for(var h,l,k=0;g=d[k++];)g.bd?l=!0:h||(g.hg?Ej(g,f):h=g.process(f));if(l)for(l=0;h=d[l];)h.bd?d.splice(l,1):++l;if(e.pc)return delete e.pc,e.gg&&(e=c.event||e),Ph(e),e.returnValue=!1}},a)}
function Aj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.Lf;return null}
function Ej(a,b){Ad(function(){a.process(b)})}
function Cj(a,b){return b.priority-a.priority}
;function Fj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(Fj,N);Fj.prototype.R=function(){this.reset()};
Fj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Gj(){this.l=374}
y(Gj,N);Gj.prototype.R=function(){this.reset()};
Gj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Gj.prototype.reset=function(){this.g={}};function Hj(){this.l=120;this.D=-1}
y(Hj,N);Hj.prototype.O=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=Xg(a,311)};
Hj.prototype.ga=function(a){this.u=a.pg};
Hj.prototype.R=function(a){this.config_=a;this.reset()};
function Ij(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=Jj(a.config_.clientName);d[28]=Jj(a.config_.requestIdentifier);d[1]=void 0==b?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";null!=a.o.i?f=a.o.i+"":(b=a.B.i,(10<=b.s||3<=b.u.Rc())&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=Mg(h.getType(),h.i||[]);if(h!=l){1<e&&(f+="l"+e);f+=(l?"j":"")+h;e=0;var l=h}++e}1<e&&(f+="l"+e)}d[3]=f;l="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var k=Mg(g.getType(),
g.i||[]);k in b&&delete b[k]}if(b)for(k in b)l+=(l?"j":"")+k;d[35]=l;k=a.i.i;d[33]=-1<k?String(k):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=G()-a.s;d[18]=Math.max(a.m.ma-a.s,0);d[8]=a.g.Db;l=a.g;l=(k=l.i)?l.g.m:0;d[25]=k?"1"+(a.config_.hf?"a":"")+(a.config_.Jd?"c":""):"";d[10]=l;k=a.g;d[11]=k.i?k.g.o:0;d[12]=a.g.ma;f=a.g;k=f.ca;l=f.Y;f=f.ea;d[9]=k;d[22]=l;d[17]=f;d[13]=a.g.Cb;d[14]=a.g.H;d[15]=a.g.J;k=a.g;l=[];for(b=e=0;b<=Kj;++b)f=k.I[b],0==f?e++:(e=1==e?"0j":1<e?b+"-":
"",l.push(e+f),e=0);d[16]=l.join("j");d[36]=a.g.K;k=0;for(var n in a.i.g)k++;d[30]=k;d[31]=a.i.u;d[32]=a.i.o;d[19]=Jj(a.config_.vd);n=a.i;l=a.B.g;k=!1;l&&(k=l.i.g.e||"");l=0;k?(l|=1,1<n.m&&(l|=2)):0<n.m&&(l|=2);n=l;d[20]=0==n?"":n+"";for(n=0;k=a.F[n++];)l=k.l(),Lj[l]&&(d[l]=void 0==d[l]?Jj(k.g()):"");d=d.join(".").replace(Mj,"");if(a.H&&a.u){n=c+d;b:{k=a.u;l=[];if(k)for(e=b=f=0;e<k.length;++e){g=k.charCodeAt(e);if(32>g||127<g||!Nj[g-32]){k=[];break b}f<<=6;f|=Nj[g-32]-1;b+=6;8<=b&&(l.push(f>>b-8&
255),b-=8)}k=l}f=k;k={};k.chain=Array(4);k.buffer=Array(4);k.ah=Array(4);k.padding=Array(64);k.padding[0]=128;for(l=1;64>l;++l)k.padding[l]=0;Oj(k);l=Array(64);64<f.length&&(Oj(k),Pj(k,f),f=Qj(k));for(b=0;b<f.length;++b)l[b]=f[b]^92;for(b=f.length;64>b;++b)l[b]=92;Oj(k);for(b=0;64>b;++b)k.buffer[b]=l[b]^106;Rj(k,k.buffer);k.total=64;Pj(k,Sj(n));n=Qj(k);Oj(k);Rj(k,l);k.total=64;Pj(k,n);n=Qj(k);n=n.slice(0,8);"string"===typeof n&&(n=Sj(n));k="";if(n){l=n.length;for(e=b=f=0;l--;)for(b<<=8,b|=n[e++],
f+=8;6<=f;)k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}n=k}else n="";c={oq:c,gs_l:d+"."+n};a.config_.jg&&(c.q=a.m.g);return c}
Hj.prototype.reset=function(){this.s=G();++this.D;var a=this.m;a.H=0;a.W=0;a.ma=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Db=0;a.s=0;a.ma=0;a.ca=0;a.Y=0;a.ea=0;a.Cb=0;a.H=0;a.J=0;a.K=0;a.I=[];for(b=0;b<=Kj;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function Jj(a){return a?a.replace(Tj,"-"):""}
var Mj=/\.+$/,Tj=/\./g,Lj=xg([23]);function Uj(){this.l=121}
y(Uj,N);Uj.prototype.sa=function(a){this.m=a.Sd()};
Uj.prototype.O=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=Xg(a,294)};
Uj.prototype.R=function(a){this.config_=a};
function li(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)2==f.g(b,c)&&(d=!0);if(d)return}if(Cg(b)||a.config_.lb||a.s&&a.s.lb()){if(dg.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){e=f;break b}e=null}e?d=null:(e=O("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Oc&&Vj(a.g,c);a.u.Ad(c);Wj(a);Oi(a.F,12,{query:b})}}
Uj.prototype.redirect=function(a){this.g&&this.config_.Oc&&Vj(this.g);this.u.redirect(a);Wj(this)};
function Wj(a){ui(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function Xj(){this.l=553}
y(Xj,N);Xj.prototype.O=function(a){this.g=Xg(a,156);a.get(126)};
Xj.prototype.ga=function(){this.g.sort(Yj)};
Xj.prototype.R=function(a){this.config_=a;this.i=a.md};
Xj.prototype.sd=function(a){this.i=a};
function si(a,b,c,d,e){b=new Ng(b,c||yg(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;null!=a.config_.Lc&&Pg(b,"ds",a.config_.Lc,!0);null!=a.config_.De&&Pg(b,"swl",a.config_.De,!0);Pg(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=G(),"cp"in b.A||(a=b.J.Ob(),Pg(b,"cp",a,!0)),Pg(b,"gs_id",b.u),b.i=Ag(b.A)+":"+b.B,b.m=!0);return b}
function Yj(a,b){return a.g()-b.g()}
;function Zj(){this.l=123;this.A=!1;this.F=-1}
y(Zj,N);m=Zj.prototype;m.O=function(a){this.g=a.get(133);this.W=a.get(130);this.Gc=a.get(118);this.Hc=a.get(120);this.X=a.get(494);this.We=a.get(124);this.Eb=a.get(125);this.Fb=a.get(230);this.Ic=a.get(127)};
m.R=function(a){this.u=this.Ic.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Se=a.sf;this.Te=a.Xf;this.Za=-1;this.i=this.config_.enableCaching&&!!this.g};
m.Ga=function(){this.A=!1;ak(this);this.m=this.o=null;ui(this)};
function ti(a,b){if(!(!a.A||a.Te||a.W&&a.W.l())){var c=!0,d=Og(b);d>a.F&&(a.F=d);++a.Db;a.X.g[b.getId()]=!0;Cg(a.Gc.g)||Cg(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=G();for(var e in a.m)2500<d-a.m[e].s&&bk(a,e);a.i&&(e=a.g.get(b))&&((c=a.Se||b.I)&&a.config_.Yf&&(b.o=!0),a.Eb.process(e),e.o&&++a.ma,a.o=null);c&&(a.o=b,a.B||a.qe())}}
function ui(a){a.Za=a.F}
function gi(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(35==d.getType()){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function ck(a,b){return F(function(c){this.Bd(c,b)},a)}
m.qe=function(){ak(this);if(!(2<this.u.Rc())){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)zg(d,c[d],b);b=this.u.Ce(a,b.join("&"),ck(this,a),F(this.Bd,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(F(this.qe,this),a)}}};
function ak(a){null!=a.B&&(window.clearTimeout(a.B),a.B=null)}
function bk(a,b){a.u.Nc(b);delete a.m[b];a.s&&--a.s}
m.Bd=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.We;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var l=a[h];h in c.g&&(l=c.g[h].parse(l));g[h]=l}h=l=a=!1;for(var k,n=0;k=f[n++];)if(33==(k[1]||0)?l=!0:a=!0,l&&a){h=!0;break}a=0;l=[];for(n=0;k=f[n++];){var p=k[1]||0;if(!h||33!=p){var r=k[0];c.m&&(r=c.i.bold(e.toLowerCase(),Eg(r).replace(qg,"")));var q=l,t=q.push,u=Eg(r).replace(qg,""),A=a++,E=k[3];t.call(q,new kg(r,u,A,p,k[2]||[],E?new fg(E):gg))}}c=
new Qg(d,l,new fg(g),!1,!0,!1);this.Fb&&(c=qd(this.Fb,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||""!=e.l.g)&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);Og(b)<=this.Za?!b||b.g||c.o||(this.K=G()-b.s):(++this.ea,this.Eb.process(c)||++this.Cb,this.D=c.i.g.d||0,b&&(bk(this,b.getId()),d=b.s,d=G()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>dk?Kj:ek[Math.floor(d/100)]]):this.K=d));c&&(b=c.i.g.q||"")&&(this.Hc.u=b)}}};
var ek=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Kj=ek[ek.length-1]+1,dk=100*ek.length-1;function fk(){this.l=124;this.g={}}
y(fk,N);fk.prototype.O=function(a){this.i=a.get(150);if(a=Xg(a,158))for(var b,c=0;b=a[c++];)this.g[b.Th()]=b};
fk.prototype.R=function(a){this.m=a.Tc};function gk(){this.l=125}
y(gk,N);gk.prototype.O=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=Xg(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(hk)};
gk.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Fg(c);var e=b.l;b=e?e.l:Fg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=0==d.getType(),Di(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;0<h&&(Cg(g.g)||(b.i=h),g=g.s,g=G()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[Mg(h,f.i||[])]=!0;Oi(this.o,3,{input:a,Qg:e})}return c};
function hk(a,b){return a.g()-b.g()}
;function ik(){this.l=126}
y(ik,N);ik.prototype.O=function(a){this.i=a.get(123)};
ik.prototype.R=function(){this.g=null};var jk=["expflags","plugin"];function kk(){this.l=127;this.m={}}
y(kk,N);kk.prototype.O=function(a){a=Xg(a,149);for(var b,c=0;b=a[c++];)this.m[b.qb()]=b};
kk.prototype.R=function(a){var b="https:"==document.location.protocol,c=[];zg("client",a.clientName,c);zg("hl",a.Yc,c);zg("gl",a.Ge,c);zg("sugexp",a.vd,c);zg("gs_rn",64,c);zg("gs_ri",a.requestIdentifier,c);var d=Bg(a.url||C.location.href);jk.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&zg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.pd||"clients1."+a.fc,yc:a.yc||"/complete/search",Ee:c.length?c.join("&"):""};this.g&&this.g.qb()==a.connectionType||(this.g=this.m[a.connectionType])};function lk(){this.l=191}
y(lk,N);function Sj(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Oj(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.Yb=a.total=0}
function Rj(a,b){for(var c=a.ah,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,l,k=0;64>k;++k)16>k?(g=f^b&(d^f),h=k):32>k?(g=d^f&(b^d),h=5*k+1&15):48>k?(g=b^d^f,h=3*k+5&15):(g=d^(b|~f),h=7*k&15),l=f,f=d,d=b,e=e+g+mk[k]+c[h]&4294967295,g=nk[k],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=l;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function Pj(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Yb++]=b[d],64==a.Yb&&(Rj(a,a.buffer),a.Yb=0)}
function Qj(a){var b=Array(16),c=8*a.total,d=a.Yb;Pj(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Rj(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var Nj=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],nk=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],mk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function ok(){this.l=150}
I(ok,N);
ok.prototype.bold=function(a,b){b=Dg(b.replace(eg,""));a=Dg(Fg(a,!0));if(Gg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)" "==h||"\t"==h?c.length&&(d.push({t:c,Ub:g,e:f+1}),c="",g=-1):(c+=h,-1==g?g=f:f==e&&d.push({t:c,Ub:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=-1==g,c==h?a.push({Ub:e?c:g,e:c}):e&&(g=c)):-1<g&&(a.push({Ub:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Ub].Ub)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function pk(){this.l=146}
I(pk,N);function qk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
qk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");qk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");qk("D1,D4,D7,DA,DD");qk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");qk("D1__,D4__,D7__,DA__,DD");qk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");qk("CF,D2,D5,D8,DB");function rk(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(rk,N);m=rk.prototype;
m.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.lc();b.addRule(".sbdd_a",(Ah?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Ah?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
m.O=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
m.ga=function(a){this.config_=a};
m.nb=function(a){this.g=P();this.g.className="gstl_"+this.Y+" sbdd_a";Mi(this.g,!1);this.K=this.g;this.H=P("fl");this.g.appendChild(this.H);this.A=P();this.g.appendChild(this.A);this.s=P("sbdd_b");this.A.appendChild(this.s);this.ma=P();this.A.appendChild(this.ma);this.config_.Xd&&(this.i=O("iframe","gstl_"+this.Y+" sbdd_c"),Mi(this.i,!1),(this.config_.Ja||document.body).appendChild(this.i));if(this.m=this.config_.ff)"number"===typeof this.m&&(this.m+=this.config_.ic[2],this.m-=sk(this)),tk(this,this.g,
this.m);uk(this);(a.Ja||document.body).appendChild(this.g);a=this.F;var b=F(this.Cd,this);zj(a,a.g,8,b)};
m.R=function(a){this.config_=a;this.g.style.position=a.Mb};
m.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
m.Cd=function(){this.B=0;uk(this);if(this.i){var a=this.config_.Ed[0],b=this.i.style;"relative"!=this.config_.Mb&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";tk(this,this.i,this.s.offsetWidth)}this.u&&lj(this.u.g)};
function uk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Of||c.H==c.F?c.Za:null;var d=(b=c)?b.offsetWidth:vk(a.o.m);var e=a.m;c=sk(a);e?"string"===typeof e&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.ic[2]-c,tk(a,a.g,e));if("relative"!=a.config_.Mb){var f="rtl"==Lf()!=("rtl"==a.D),g=a.config_.Ja;var h={Ua:0,Dc:0};if(f||!g||g==document.body||a.config_.Qd)h=Jh(a.o.m.F),b&&(h.Ua=Jh(b).Ua);b=h;h=e;e=a.config_.ic;g=e[1];e=e[0];e=b.Dc+a.o.getHeight()+e;if("right"==
a.ca){h="rtl"==Lf()!=("rtl"==a.D);var l=a.config_.Ja;g=-g;if(h||!l||l==document.body)g+=(Sh(a.g)||window).document.documentElement.clientWidth-d-b.Ua;d=g;h=e;b=void 0}else b=b.Ua+g,"center"==a.ca&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Ua:0,Dc:0};"absolute"==a.config_.Mb&&a.config_.Ja&&a.config_.Ja!=document.body&&(f||a.config_.Qd)&&(e=Jh(a.config_.Ja));g=a.g.style;g.top=h-e.Dc+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.Ua+"px":(b=0,a.config_.Ja&&f&&(b=document.body.clientWidth-(e.Ua+a.config_.Ja.offsetWidth)),
g.right=d+c-b+"px")}}
function tk(a,b,c){"number"===typeof c?0<c&&(a.config_.Zg?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Mi(a,b){a&&(a.style.display=b?"":"none")}
function Ni(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ja;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");Nh(a.g,b)}}
function sk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,"number"===typeof a)?a:0}
;function wk(){this.l=119;this.W=!1;this.s=yg(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(wk,N);m=wk.prototype;
m.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Sc();Ch(this.g,"combobox");Dh(this.g,"haspopup",!1);Dh(this.g,"autocomplete","list");this.Gc=a.lc();a.Jc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=zh&&vh||gh?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),sh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
m.O=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Cb=!!a.get(136);this.Hc=a.i.getId()};
m.ga=function(a){this.config_=a;this.J=a.Pb;this.K=a.fg;this.Ic=a.Kd;this.u=Kh(this.g);this.Fc();var b=this;gh&&zj(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.pc=!0)},10);
a=(lc()||J("iPad")||J("iPod"))&&wh;th&&xk(this);(xh||a)&&yk(this);this.F=this.g};
m.nb=function(a){var b=!!a.lf[130];if(this.Cb||ej(this.i)||b||a.tf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=P("gstl_"+this.Hc+" sbib_a"),a=this.A.style,this.K&&(a.width=this.K+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=uh||gh?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Xc,b&&(this.B=P("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),ej(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Gc,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=P("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),zk(this,this.A,this.o)),this.config_.rd&&this.g&&this.o&&(this.g.removeAttribute("role"),Ch(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),Dh(this.o,"haspopup",!0)),this.config_.Oa&&this.g&&(b=this.D.getId("sbsg"),Dh(this.g,"controls",b),this.config_.rd&&this.o?(Dh(this.o,"haspopup","grid"),Dh(this.o,
"owns",b)):Dh(this.g,"haspopup","grid")),this.config_.Ng||this.config_.cf||Ak(this,this.A),this.F=this.A;this.Ic&&(b=F(this.oe,this),zj(this.m,this.g,"blur",b,10),b=F(this.xe,this),zj(this.m,this.g,"focus",b,10),this.Fb=!0);b=this.m;a=F(this.Kf,this);zj(b,b.g,8,a);Bk(this)};
m.R=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.ke?"":"none";this.Db=this.g.value;this.Fb&&this.xe();Ck(this)};
m.Ga=function(){this.Fb&&this.oe();Dk(this)};
function zk(a,b,c){Dk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Eg&&(gh||th?Ad(function(){a.g.focus();Ih(a.g,a.s.Ob())}):a.g.focus());
Ck(a)}
m.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function vk(a){return a.K?a.K:a.F?a.F.offsetWidth:0}
m.select=function(){this.g.select();this.Fc()};
function dj(a){yh&&(a.g.value="");a.g.value=a.i.g;yh&&(a.g.value=a.g.value);bj(a)}
function Ek(a){a.u&&(a.g.blur(),a.u=!1)}
m.clear=function(){this.g.value=""};
function bj(a){if(a.u){var b=a.g.value.length;a.s=yg(b);Ih(a.g,b)}}
function Ak(a,b){zj(a.m,b,"mouseup",function(){a.g.focus()})}
function Bk(a){function b(e){zj(a.m,a.g,e,F(a.ue,a),10,c)}
zj(a.m,a.g,"keydown",F(a.If,a));(uh||a.config_.Ze)&&zj(a.m,a.g,"keypress",F(a.Jf,a));zj(a.m,a.g,"select",F(a.Fc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=F(a.Ff,a);zj(a.m,a.g,"compositionstart",d);zj(a.m,a.g,"compositionend",d)}
m.Ff=function(a){a=a.type;"compositionstart"==a?(a=this.i,1!=a.D&&(a.D=!0)):"compositionend"==a&&(a=this.i,0!=a.D&&(a.D=!1))};
m.If=function(a){var b=a.keyCode;this.ca=b;var c=(vh||th)&&(38==b||40==b)&&Wi(this.X),d=13==b,e=27==b;this.Y=!1;9!=b||a.shiftKey||(this.Y=Vi(this.i));if(d){(b=Xi(this.X))&&b.getType();var f=this;Ad(function(){var g=f.X,h=a.shiftKey?4:3;null!=g.i&&Xi(g).getType();g=g.u;li(g.F,g.g,h)})}if(c||d||e||this.Y)a.pc=!0};
m.Jf=function(a){var b=a.keyCode,c=9==b&&this.Y;if(13==b||27==b||c)a.pc=!0};
m.ue=function(a){if(!this.Eb){var b=a.Wb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.i;var e=229==a;(d.K=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Ig?li(a.F,a.g,5):(a.i.isVisible()?(c=a.i,ui(c.D),Ui(c)):Ek(a.m),hi(a));break;case 37:a=this.i;fj(a,"rtl");if(gj(a)&&(c=a.i,null!==c.i&&(a=c.o,(c=Fk(a,c.i))&&!(1>=c.length))))for(d=Eh(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Fh(a.u,c[e-1]);break;case 39:a=this.i;fj(a,"ltr");if(gj(a)&&(c=a.i,null!==c.i&&(a=c.o,c=Fk(a,c.i))))for(d=Eh(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Fh(a.u,c[e+1]);break;case 38:this.i.i.Be();break;case 40:a=this.i;c=this.s;Wi(a.i)?a.i.Ae():$i(a.i,c);break;case 46:a=this.i;a.g&&this.s.Vd()==a.g.length&&(a.J&&a.J.clear(),a.config_.Hg&&li(a.F,a.g,2));break;case 8:a=this.i,a.A&&0==this.s.Ob()&&a.A.g()}}this.Fc();Yi(this.i,this.g.value,this.s,b)}};
m.Ef=function(){this.u=!0;Oi(this.i.s,10)};
m.Cf=function(){this.u=!1;Ti(this.i)};
function Ck(a){a.W||(a.W=!0,a.Za=F(a.Ef,a),zj(a.m,a.g,"focus",a.Za,99),a.ma=F(a.Cf,a),zj(a.m,a.g,"blur",a.ma,99))}
function Dk(a){a.W&&(a.W=!1,Dj(a.m,a.g,a.Za),Dj(a.m,a.g,a.ma))}
m.xe=function(){this.H||(this.H=new ce(this.config_.Ag||50),this.H.qa("tick",this.zg,void 0,this),this.H.start())};
m.oe=function(){this.H&&(de(this.H),this.H=null)};
m.zg=function(){this.ue({Wb:"polling"})};
m.Kf=function(){if(th){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
m.Fc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Lh(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=yg(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function xk(a){var b;a.m.qa(window,"pagehide",function(){a.Eb=!0;b=a.g.value});
a.m.qa(window,"pageshow",function(c){a.Eb=!1;(c.persisted||void 0!==b)&&cj(a.i,b)})}
function yk(a){a.m.qa(window,"pageshow",function(b){b.persisted&&a.Db&&cj(a.i,a.Db)})}
function Li(a,b){a.config_.rd&&a.o?Dh(a.o,"expanded",b):Dh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Gk(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Hk(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ik(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Gk(a).match(/\S+/g)||[],b=0<=pb(a,b));return b}
function vj(a,b){if(a.classList)a.classList.add(b);else if(!Ik(a,b)){var c=Gk(a);Hk(a,c+(0<c.length?" "+b:b))}}
function Jk(a,b){a.classList?a.classList.remove(b):Ik(a,b)&&Hk(a,Array.prototype.filter.call(a.classList?a.classList:Gk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function Kk(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(Kk,N);m=Kk.prototype;
m.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.K=a;this.u=a.Sc();this.H=a.lc();Ah||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Ah||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(vh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Ah&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
m.O=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=Xg(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.ma=b};
m.ga=function(a){this.config_=a};
m.nb=function(a){this.o=P();a.Oa?(this.g=P("sbsb_b"),Ch(this.g,"grid"),this.g.id=this.K.getId("sbsg")):(this.g=O("ul","sbsb_b"),Ch(this.g,"listbox"));this.o.appendChild(this.g)};
m.R=function(a){this.config_=a;var b=a.te;b&&(this.Za=this.K.Rd(b));this.o.className=a.Sg||"sbsb_a";this.X=a.Pg||"sbsb_d"};
function Fk(a,b){if(a.config_.Oa&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function uj(a,b){(b=a.m[b])&&Jk(b.g().parentNode,a.X)}
m.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function mj(a,b){var c=b.getType(),d=a.ma[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Lk(a,d));d.Bb(b,c);a.W.push(c);var e=c.g();if(a.config_.Oa)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Mk(a);f.appendChild(e);if(void 0!==b.l){a.m.push(c);g=a.F;var h=b.l();a.config_.Vf&&(e.onmouseover=function(){rj(a.D,h)},e.onmouseout=function(){ii(a.D)});
var l=c.g();l.onclick=function(k){Ek(a.s.m);b.o&&Zi(a.s,b.g);ii(a.D);var n=a.D;n.i=n.g=h;k=k||Sh(l).event;d.Ab(k,b,a.I)}}else g=a.H;
Nh(f,g);return!0}
function Lk(a,b){b=b.Ib(a.I);var c=b.g();vj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Oa&&Ch(c,"option");a.ea++;return b}
function qj(a,b,c,d){var e=O("input");e.type="button";e.value=Eg(b);e.onclick=function(){li(a.I,a.s.g,d)};
if(a.config_.Nf){b="lsb";var f=O("span");var g=O("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Mk(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Oa?(b=P(),Ch(b,"row")):(b=O("li"),Ch(b,"presentation"));b.className="sbsb_c "+a.config_.Bc;b.onmousedown=F(a.ld,a);a.g.appendChild(b);return b}
m.ld=function(a){a=a||Sh(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):gh&&!uh&&(this.s.m.ea=!0);return!1};
function lj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=vk(a.s.m)-b-3;0<a&&(c.style.width=a+"px")}}
;function Nk(){this.l=147}
I(Nk,N);Nk.prototype.sa=function(a){this.u=a.Sd()||document.body};
Nk.prototype.ga=function(a){this.config_=a};
Nk.prototype.getHeight=function(){this.g||nj(this);oj(this);this.i||(Mh(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function nj(a){var b=P(a.config_.Xc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function oj(a){var b=G();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=Sh(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function Ok(){Sg.call(this);this.set(191,new lk);this.set(150,new ok);this.set(146,new pk);this.set(147,new Nk);Tg(this,149,new Fi);this.set(145,new xj);this.set(117,new yj);this.set(494,new Fj);this.set(374,new Gj);this.set(120,new Hj);this.set(121,new Uj);this.set(553,new Xj);this.set(124,new fk);this.set(125,new gk);this.set(123,new Zj);this.set(126,new ik);this.set(127,new kk);this.set(115,new Ii);this.set(118,new Qi);this.set(128,new ij);Tg(this,154,new wj);this.set(116,new rk);this.set(119,
new wk);this.set(129,new Kk)}
y(Ok,Sg);function Pk(){this.l=347;this.i=[];this.m=0}
y(Pk,N);Pk.prototype.O=function(a){this.o=a.get(120)};
Pk.prototype.R=function(a){this.s="//"+(a.og||"www."+a.fc)+"/gen_204?";this.g=a.Og||{}};
function Vj(a,b){b=Ij(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=Ag(b,!0);Qk(a,a.s+c)}
function Qk(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function Rk(){this.l=151;this.g=!0;this.i={}}
y(Rk,N);m=Rk.prototype;m.O=function(a){this.m=a.get(150)};
m.ga=function(){this.s=xg([0])};
m.R=function(a){this.o=a.Tc;this.g=a.Jd};
m.Ga=function(){this.g=!1};
m.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].g;if(Gg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
m.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,l,k=b.g,n,p=0;n=k[p++];)l=n.g,h=f?this.m.bold(c,l):Dg(l),g.push(new kg(h,l,n.l(),n.getType(),n.i||[],n.m));delete this.i[d];return new Qg(a,g,e,!0,b.m,!1)}}return null};
m.reset=function(){this.i={}};function Sk(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(Sk,N);Sk.prototype.O=function(a){this.g=Xg(a,151);this.g.sort(Tk)};
Sk.prototype.R=function(){this.o=this.m=0};
Sk.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new Qg(a,b.g,b.i,b.o,b.m,b.u):null};
Sk.prototype.has=function(a){return!!this.i[a.i]};
function Tk(){return 0}
;function Uk(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function Vk(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function Wk(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function Xk(){this.l=570;this.m=!1}
I(Xk,N);m=Xk.prototype;m.sa=function(a){this.u=a};
m.O=function(a){this.s=a.get(117);this.A=a.get(118)};
m.ga=function(a){var b=a.Nb;if(this.g=b?this.u.Rd(b):null){b=this.s;var c=F(this.Df,this);zj(b,b.g,10,c);b=this.s;c=F(this.Bf,this);zj(b,b.g,11,c);zj(this.s,this.g,"mouseover",F(this.Hf,this));zj(this.s,this.g,"mouseout",F(this.Gf,this));a.Qc&&(this.o=new Uk(a.Qc));a.Pc&&(this.i=new Uk(a.Pc))}};
m.R=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&Vk(this.i,this.g)};
m.Ga=function(){this.m=!1;this.g&&(this.o&&Wk(this.o,this.g),this.i&&Wk(this.i,this.g))};
m.Hf=function(){this.m&&this.o&&Vk(this.o,this.g)};
m.Gf=function(){this.m&&this.o&&Wk(this.o,this.g)};
m.Df=function(){this.m&&this.i&&Vk(this.i,this.g)};
m.Bf=function(){this.m&&this.i&&Wk(this.i,this.g)};var Yk=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function Zk(){this.l=160}
I(Zk,N);m=Zk.prototype;m.sa=function(a,b){this.o=a;a.Jc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
m.O=function(a){this.u=a.get(374);this.A=a.get(128)};
m.ga=function(a){this.s=!!a.nc;this.B=a.me;this.F=a.sc;this.m=a.xg;this.H=a.wg};
m.nb=function(){(this.i=this.o.get("gs_ok"))?this.g=this.i.firstChild:(this.g=O("img"),this.g.src=this.B+"/tia.png",this.i=O("span","gsok_a gsst_e"),this.i.id=this.o.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=F(this.df,this);this.g.setAttribute("tia_field_name",this.o.Sc().name);this.g.setAttribute("tia_disable_swap",!0)};
m.R=function(a){a.Uc&&(this.s=!!a.nc);this.g.setAttribute("tia_property",a.ne)};
m.isEnabled=function(){return this.s};
m.Ud=function(){return{tooltip:this.H}};
m.Dd=function(a){if(!this.D){a=zd("SCRIPT");var b=wd(Yk,this.m,this.F);Tb(a,b);document.body.appendChild(a);this.D=!0;this.u.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
m.df=function(){var a=this.A;ui(a.D);Ui(a)};
var $k=wg++;var al=ha(["#"]);function bl(){this.l=173;this.m={}}
y(bl,N);m=bl.prototype;
m.sa=function(a,b){this.o=a;a.Jc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(Th()+":"+Uh(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",Th()+":"+Uh(.8)+";"),b.addRule(".gsst_a:active .gsst_e",Th()+":"+
Uh(1)+";"))};
m.O=function(a){this.u=a.get(118);this.i=Xg(a,160)};
m.ga=function(a){this.A=a.Uc;this.i.sort(cl)};
m.nb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=P("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Pb)this.g.style.lineHeight=a+"px";dl(this)}el(this)};
m.R=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[$k];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);dl(this);el(this);break}}};
function cl(){return 0}
function dl(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=O("a","gsst_a");fl(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function el(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=$k,e=c.i.parentNode;e.onclick=F(c.Dd,c);a.m[d]=e;c.Ud&&(c=c.Ud(),c.Zh&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function fl(a,b,c){ob(b,jb(al));b.addEventListener("click",function(){return!1});
uh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(13==e||32==e)c.Dd(d),ji(a.u),Ph(d)}}
wg++;function gl(){this.o=33;this.l=P();this.l.className="gspr_a"}
I(gl,eh);gl.prototype.g=function(){return this.l};function hl(){fh.call(this,33)}
y(hl,fh);hl.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
hl.prototype.Ib=function(){return new gl};
hl.prototype.Bb=function(a,b){Rb(b.l,qd(ud,a.m.g.b||""))};
hl.prototype.Ab=function(a,b,c){li(c,b.g,1)};function il(a,b){this.o=0;this.u=a;this.D=b;this.m=P();this.l=P("sbqs_a");this.m.appendChild(this.l);this.B=P("sbqs_c");this.m.appendChild(this.B)}
y(il,eh);il.prototype.g=function(){return this.m};
function jl(a,b,c,d){Rb(a.B,hg(b));a.A=c;d&&!a.i&&(a.i=Qh(a.l),a.i.onclick=F(function(e){Ek(this.u.m);Zi(this.u,this.A);li(this.D,this.A,9);return Ph(e)},a));
d?(Rb(a.i,hg(d+" &raquo;")),a.l.style.display="",Dh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function kl(){fh.call(this,0)}
I(kl,fh);m=kl.prototype;m.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
m.O=function(a){this.g=a.get(118)};
m.R=function(a){this.i=a.Nd?a.Od:""};
m.Ib=function(a){return new il(this.g,a)};
m.Bb=function(a,b){jl(b,a.getHtml(),a.g,this.i)};
m.Ab=function(a,b,c){li(c,b.g,1)};function ll(a){Ok.call(this);Tg(this,149,new Yg);this.set(347,new Pk);this.set(133,new Sk);Tg(this,151,new Rk);this.set(570,new Xk);this.set(134,new oi);this.set(189,new ri);Tg(this,156,new vi);a.ENABLE_DELETE_ICON?Tg(this,152,new ki):Tg(this,152,new ni);Tg(this,152,new hl);Tg(this,152,new kl);this.set(173,new bl);Tg(this,160,new Zk);this.set(157,new xi);Tg(this,156,new yi);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&Tg(this,156,new wi(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(Tg(this,153,new ch),Tg(this,152,new $h(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new zi(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),Tg(this,156,new Ei))}
y(ll,Ok);function ml(){return{vf:function(){return{clientName:"hp",requestIdentifier:"hp",fc:"google.com",Ge:"",Yc:"en",Lc:"",md:"",videoId:"",xd:"",authuser:0,pg:"",zi:"",De:null,vd:"",Ld:!1,pd:"",yc:"",connectionType:0,transport:null,Ke:!1,mi:!1,Xf:!1,enableCaching:!0,nf:10,Sh:10,hf:!0,Jd:!0,Oh:!1,sf:!1,jg:!1,kg:!1,ci:!1,Tf:!0,ef:!1,Uf:500,Uc:!1,Mf:!0,Xh:!0,si:!1,nc:!1,sc:"",me:"//www.google.com/textinputassistant",ne:"",xg:7,Uh:!1,Vh:!1,Qf:!1,Pf:!0,Rf:!1,Yd:!1,Oa:!1,Ig:!1,Hg:!1,Cc:1,ie:!0,kc:!1,Nd:!1,Kd:!1,
Ag:10,Tc:!1,Eg:!0,Ja:document.body,Sf:!0,He:null,lf:{},Rh:{},li:0,tf:!1,Yf:!0,lb:!1,rf:!1,Mg:!1,ui:null,jf:!1,og:null,Og:null,Oc:!1,Vf:!0,rd:!1,Ze:!1,wi:1,ke:!1,Jg:"Search",Od:"I'm  Feeling Lucky",Kg:"",ng:"Learn more",od:"Remove",nd:"This search was removed from your Web History",Yh:"",Nh:"Did you mean:",wg:"",oi:"",Ci:"Search by voice",Bi:'Listening for "Ok Google"',Ai:'Say "Ok Google"',Mh:"Clear Search",Pb:0,fg:0,Xc:"",Bc:"",bi:!1,Mb:"absolute",Nf:!1,Xd:!1,te:null,Of:!0,ic:[0,0,0],ff:null,Rg:null,
Ed:[0],td:!0,Je:"",Sg:"",Pg:"",Nb:null,Qc:"",Pc:"",Lh:1,Zg:!1,Qd:!1,fi:0,Ng:!1,cf:!1,Ph:!1,Bg:!0}}}}
;function nl(a,b,c,d,e){var f=th?"-moz-":gh?"-ms-":uh?"-o-":vh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),l=[];return{addRule:function(k,n){if(b){if(c){k=k.split(",");for(var p=[],r=0,q;q=k[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);k=p.join(",")}l.push(k,"{",n,"}")}},
Ve:function(){if(b&&l.length){b=!1;var k=O("style");k.setAttribute("type","text/css");(a||ug).appendChild(k);var n=l.join("");l=null;k.styleSheet?k.styleSheet.cssText=n:k.appendChild(document.createTextNode(n))}},
prefix:function(k,n){var p=k+(n||"");f&&(p+=n?k+f+n:f+k);return p}}}
;function ol(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
m=ol.prototype;m.install=function(a){if(!this.D){a=pl(a);0>this.l&&(this.l=ql(a));var b=Lh(this.i),c=rl(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Je&&f.push(a.Je);f=nl(a.He,a.Sf,a.jf,this.l,f);this.A=a.lb;this.g=new Ug(this.F,this.H,{Jc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Rd:function(g){return b.getElementById(g)},
Sd:function(){return e.I},
lc:function(){return c},
getId:function(g){return g+e.l},
Sc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.K=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=Sh(this.i);this.s=Rh(a);this.B=F(this.Gg,this);this.m.qa(a,"resize",this.B);this.D=!0}};
m.isActive=function(){return!!this.g&&this.g.isActive()};
function sl(a,b){function c(d){li(a.X,a.J.g,12);return Oh(d)}
a.m.qa(b,"keyup",function(d){13!=d.keyCode&&32!=d.keyCode||c(d)});
a.m.qa(b,"click",c)}
m.getId=function(){return this.l};
m.lb=function(){return this.A||!!this.u&&this.u.lb()};
m.sd=function(a){this.W.sd(a)};
function ql(a){a=Sh(a.He||ug);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function rl(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function pl(a){a=Lg(a);var b=a.sc;b?a.sc=b.toLowerCase():a.nc=!1;a.kc&&!a.Nd&&(a.kc=!1);wh||(a.kg=!1);return a}
m.Gg=function(){var a=Rh(Sh(this.i));if(a.Le!=this.s.Le||a.ae!=this.s.ae)this.s=a,Oi(this.m,8)};function tl(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
H("ytvoicesearchloggingparams",F(this.xf,this))}
y(tl,Rg);m=tl.prototype;m.xf=function(){this.g.K.add(6);return Ij(this.g.o,15)};
m.Ad=function(a){Ek(this.g.Y);this.u(Ij(this.g.o,a))&&this.l.submit()};
m.redirect=function(a){this.J(this.zd(a))};
m.zd=function(a){var b=0<=a.indexOf("?")?"&":"?",c=Ij(this.g.o);var d=this.g;c||(c=Ij(d.o));d=Ag(c);return a+b+d};
m.je=function(a){if(this.o||this.m){if(22<this.s){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.K?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b=this.I?'<svg fill="fillColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>':
'<svg fill="fillColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.3917 16.8083L12.7333 12.15C13.625 11.125 14.1667 9.79167 14.1667 8.33333C14.1667 5.10833 11.5583 2.5 8.33333 2.5C5.10833 2.5 2.5 5.10833 2.5 8.33333C2.5 11.5583 5.10833 14.1667 8.33333 14.1667C9.79167 14.1667 11.125 13.625 12.15 12.7417L16.8083 17.4L17.3917 16.8083ZM8.33333 13.3333C5.575 13.3333 3.33333 11.0917 3.33333 8.33333C3.33333 5.575 5.575 3.33333 8.33333 3.33333C11.0917 3.33333 13.3333 5.575 13.3333 8.33333C13.3333 11.0917 11.0917 13.3333 8.33333 13.3333Z"/></svg>';
var c='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa(b.replace("fillColor","#030303"))+'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",c);c='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",c);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa(b.replace("fillColor","#f1f1f1"))+'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c",
"line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b",
"font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]","padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before",
"margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b",
"border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");
a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
m.install=function(a,b,c,d,e,f,g){this.l=a;this.J=f;g&&(this.u=g);f=ml().vf();f.clientName="youtube";f.requestIdentifier="youtube";f.Lc="yt";f.Yc=d.REQUEST_LANGUAGE;f.Ge=d.REQUEST_DOMAIN;f.Mf=!1;f.Cc=0;f.ie=!1;f.kc=!1;f.ke=!1;f.Tc=!0;f.Xc=this.D;f.Bc=this.i;f.Qc=this.B;f.Pc=this.A;f.ai=!0;f.nc=d.HAS_ON_SCREEN_KEYBOARD;f.sc=d.REQUEST_LANGUAGE;f.me="//www.gstatic.com/inputtools/images";f.ne="youtube";f.Oc=!0;f.Mb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.K=d.SEARCHBOX_REPORTING;this.s=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;this.I=d.ENABLE_PROMINENT_SEARCH_ICON;f.pd="suggestqueries-clients6.youtube.com";d.PQ&&(f.md=d.PQ);f.xd=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.nd=e.SUGGESTION_DISMISSED_LABEL;f.od=e.SUGGESTION_DISMISS_LABEL;f.td=!d.HIDE_REMOVE_LINK;f.vi=xg([0,33,35]);this.o?(f.Nb="search-container",f.Pb=24):this.m?(f.Nb="masthead-search",f.Pb=24):(f.Nb="masthead-search-terms",f.Pb=30);Fb()||(f.Xd=!0);f.te=f.Nb;e=this.l.offsetHeight;f.ic=[e+(56-e)/
2-40+4,0,0];e=[0];Gb()&&"8.0"==Mb()&&(e[0]=-1);f.Ed=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.Kd=!0);if(e=d.SUGG_EXP_ID)f.vd=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=Sh(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);Wg(a.g);b=pl(b);a.A=b.lb;a=a.g;Wg(a);for(c=0;d=a.g[c++];)d.R(b);a.l=!0}else d=
new ll(d),this.g=new ol(b,a,this,d),this.g.install(f),c&&(sl(this.g,c),c.onclick=null)};function ul(){this.data=[];this.g=-1}
ul.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
ul.prototype.get=function(a){return!!this.data[a]};
function vl(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function wl(a,b){this.g=a[C.Symbol.iterator]();this.l=b}
wl.prototype[Symbol.iterator]=function(){return this};
wl.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.l.call(void 0,a.value),done:a.done}};
function xl(a,b){return new wl(a,b)}
;function yl(){this.blockSize=-1}
;function zl(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
I(zl,yl);zl.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function Al(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else 60>e?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
zl.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(0==f)for(;d<=c;)Al(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Al(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Al(this,e);f=0;break}}this.l=f;this.m+=b}};
zl.prototype.digest=function(){var a=[],b=8*this.m;56>this.l?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Al(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Bl(){}
Bl.prototype.next=function(){return Cl};
var Cl={done:!0,value:void 0};function Dl(a){return{value:a,done:!1}}
Bl.prototype.Ha=function(){return this};function El(a){if(a instanceof Fl||a instanceof Gl||a instanceof Hl)return a;if("function"==typeof a.next)return new Fl(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Fl(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ha)return new Fl(function(){return a.Ha()});
throw Error("Not an iterator or iterable.");}
function Fl(a){this.l=a}
Fl.prototype.Ha=function(){return new Gl(this.l())};
Fl.prototype[Symbol.iterator]=function(){return new Hl(this.l())};
Fl.prototype.g=function(){return new Hl(this.l())};
function Gl(a){this.l=a}
y(Gl,Bl);Gl.prototype.next=function(){return this.l.next()};
Gl.prototype[Symbol.iterator]=function(){return new Hl(this.l)};
Gl.prototype.g=function(){return new Hl(this.l)};
function Hl(a){Fl.call(this,function(){return a});
this.i=a}
y(Hl,Fl);Hl.prototype.next=function(){return this.i.next()};function Il(a){var b=[];Jl(new Kl,a,b);return b.join("")}
function Kl(){}
function Jl(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Jl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ll(d,c),c.push(":"),Jl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ll(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ml={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Nl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ll(a,b){b.push('"',a.replace(Nl,function(c){var d=Ml[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ml[c]=d);return d}),'"')}
;function Ol(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Q(a){gc.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
I(Q,gc);m=Q.prototype;m.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
m.Ec=function(a){var b=this.g[a];if(b){var c=this.l[b];0!=this.o?(this.i.push(a),this.g[a+1]=function(){}):(c&&sb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
m.re=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Pl(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.bb;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.Ec(c)}}return 0!=e}return!1};
function Pl(a,b,c){Kd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Ec,this),delete this.l[a])}else this.g.length=0,this.l={}};
m.Ba=function(){Q.Fa.Ba.call(this);this.clear();this.i.length=0};function Ql(a){this.g=a}
Ql.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Il(b))};
Ql.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ql.prototype.remove=function(a){this.g.remove(a)};function Rl(a){this.g=a}
I(Rl,Ql);function Sl(a){this.data=a}
function Tl(a){return void 0===a||a instanceof Sl?a:new Sl(a)}
Rl.prototype.set=function(a,b){Rl.Fa.set.call(this,a,Tl(b))};
Rl.prototype.l=function(a){a=Rl.Fa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rl.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ul(a){this.g=a}
I(Ul,Rl);Ul.prototype.set=function(a,b,c){if(b=Tl(b)){if(c){if(c<G()){Ul.prototype.remove.call(this,a);return}b.expiration=c}b.creation=G()}Ul.Fa.set.call(this,a,b)};
Ul.prototype.l=function(a){var b=Ul.Fa.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<G()||c&&c>G())Ul.prototype.remove.call(this,a);else return b}};function Vl(){}
;function Wl(){}
I(Wl,Vl);Wl.prototype[Symbol.iterator]=function(){return El(this.Ha(!0)).g()};
Wl.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xl(a){this.g=a;this.l=null}
I(Xl,Wl);m=Xl.prototype;m.set=function(a,b){Yl(this);try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){Yl(this);a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){Yl(this);this.g.removeItem(a)};
m.Ha=function(a){Yl(this);var b=0,c=this.g,d=new Bl;d.next=function(){if(b>=c.length)return Cl;var e=c.key(b++);if(a)return Dl(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Dl(e)};
return d};
m.clear=function(){Yl(this);this.g.clear()};
m.key=function(a){Yl(this);return this.g.key(a)};
function Yl(a){if(null==a.g)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.l)?b:a.l=Zl(a.g))||Dd(Error("Storage mechanism: Storage unavailable"))}
function Zl(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&("QuotaExceededError"===b.name||22===b.code||1014===b.code||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}
;function $l(){var a=null;try{a=C.localStorage||null}catch(b){}Xl.call(this,a)}
I($l,Xl);function am(a,b){this.l={};this.g=[];this.m=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof am)for(c=bm(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function bm(a){cm(a);return a.g.concat()}
m=am.prototype;m.has=function(a){return dm(this.l,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||em;cm(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function em(a,b){return a===b}
m.clear=function(){this.l={};this.m=this.size=this.g.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return dm(this.l,a)?(delete this.l[a],--this.size,this.m++,this.g.length>2*this.size&&cm(this),!0):!1};
function cm(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];dm(a.l,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],dm(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
m.get=function(a,b){return dm(this.l,a)?this.l[a]:b};
m.set=function(a,b){dm(this.l,a)||(this.size+=1,this.g.push(a),this.m++);this.l[a]=b};
m.forEach=function(a,b){for(var c=bm(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new am(this)};
m.keys=function(){return El(this.Ha(!0)).g()};
m.values=function(){return El(this.Ha(!1)).g()};
m.entries=function(){var a=this;return xl(this.keys(),function(b){return[b,a.get(b)]})};
m.Ha=function(a){cm(this);var b=0,c=this.m,d=this,e=new Bl;e.next=function(){if(c!=d.m)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Cl;var f=d.g[b++];return Dl(a?f:d.l[f])};
return e};
function dm(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function fm(a,b){this.l=a;this.g=null;var c;if(c=oc)c=!(9<=Number(Bc));if(c){gm||(gm=new am);this.g=gm.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),gm.set(a,this.g));try{this.g.load(this.l)}catch(d){this.g=null}}}
I(fm,Wl);var hm={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},gm=null;function im(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return hm[b]})}
m=fm.prototype;m.set=function(a,b){this.g.setAttribute(im(a),b);jm(this)};
m.get=function(a){a=this.g.getAttribute(im(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.g.removeAttribute(im(a));jm(this)};
m.Ha=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Bl;d.next=function(){if(b>=c.length)return Cl;var e=c[b++];if(a)return Dl(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Dl(e)};
return d};
m.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);jm(this)};
function jm(a){try{a.g.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function km(a,b){this.l=a;this.g=b+"::"}
I(km,Wl);km.prototype.set=function(a,b){this.l.set(this.g+a,b)};
km.prototype.get=function(a){return this.l.get(this.g+a)};
km.prototype.remove=function(a){this.l.remove(this.g+a)};
km.prototype.Ha=function(a){var b=this.l[Symbol.iterator](),c=this,d=new Bl;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Dl(a?e.slice(c.g.length):c.l.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var S={},lm="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;S.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
S.ud=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var mm={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Pd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},nm={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Pd:function(a){return[].concat.apply([],a)}};
S.Lg=function(){lm?(S.kb=Uint8Array,S.La=Uint16Array,S.Oe=Int32Array,S.assign(S,mm)):(S.kb=Array,S.La=Array,S.Oe=Array,S.assign(S,nm))};
S.Lg();var om=!0;try{new Uint8Array(1)}catch(a){om=!1}
function pm(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new S.kb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var qm={};qm=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var rm={},sm,tm=[],um=0;256>um;um++){sm=um;for(var vm=0;8>vm;vm++)sm=sm&1?3988292384^sm>>>1:sm>>>1;tm[um]=sm}rm=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^tm[(a^b[d])&255];return a^-1};var wm={};wm={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function xm(a){for(var b=a.length;0<=--b;)a[b]=0}
var ym=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],zm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Am=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Bm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Cm=Array(576);xm(Cm);var Dm=Array(60);xm(Dm);var Em=Array(512);xm(Em);var Fm=Array(256);xm(Fm);var Gm=Array(29);xm(Gm);var Hm=Array(30);xm(Hm);function Im(a,b,c,d,e){this.Fe=a;this.qf=b;this.pf=c;this.gf=d;this.tg=e;this.Zd=a&&a.length}
var Jm,Km,Lm;function Mm(a,b){this.Id=a;this.wb=0;this.Va=b}
function Nm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function Om(a,b,c){a.ha>16-c?(a.oa|=b<<a.ha&65535,Nm(a,a.oa),a.oa=b>>16-a.ha,a.ha+=c-16):(a.oa|=b<<a.ha&65535,a.ha+=c)}
function Pm(a,b,c){Om(a,c[2*b],c[2*b+1])}
function Qm(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Rm(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Qm(d[e]++,e))}
function Sm(a){var b;for(b=0;286>b;b++)a.ta[2*b]=0;for(b=0;30>b;b++)a.cb[2*b]=0;for(b=0;19>b;b++)a.ja[2*b]=0;a.ta[512]=1;a.Sa=a.zb=0;a.za=a.matches=0}
function Tm(a){8<a.ha?Nm(a,a.oa):0<a.ha&&(a.ba[a.pending++]=a.oa);a.oa=0;a.ha=0}
function Um(a,b,c){Tm(a);Nm(a,c);Nm(a,~c);S.mb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Vm(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Wm(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Ra;){e<a.Ra&&Vm(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Vm(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Xm(a,b,c){var d=0;if(0!==a.za){do{var e=a.ba[a.Jb+2*d]<<8|a.ba[a.Jb+2*d+1];var f=a.ba[a.ad+d];d++;if(0===e)Pm(a,f,b);else{var g=Fm[f];Pm(a,g+256+1,b);var h=ym[g];0!==h&&(f-=Gm[g],Om(a,f,h));e--;g=256>e?Em[e]:Em[256+(e>>>7)];Pm(a,g,c);h=zm[g];0!==h&&(e-=Hm[g],Om(a,e,h))}}while(d<a.za)}Pm(a,256,b)}
function Ym(a,b){var c=b.Id,d=b.Va.Fe,e=b.Va.Zd,f=b.Va.gf,g,h=-1;a.Ra=0;a.sb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.da[++a.Ra]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ra;){var l=a.da[++a.Ra]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.Sa--;e&&(a.zb-=d[2*l+1])}b.wb=h;for(g=a.Ra>>1;1<=g;g--)Wm(a,c,g);l=f;do g=a.da[1],a.da[1]=a.da[a.Ra--],Wm(a,c,1),d=a.da[1],a.da[--a.sb]=g,a.da[--a.sb]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.da[1]=l++,Wm(a,c,1);while(2<=
a.Ra);a.da[--a.sb]=a.da[1];g=b.Id;l=b.wb;d=b.Va.Fe;e=b.Va.Zd;f=b.Va.qf;var k=b.Va.pf,n=b.Va.tg,p,r=0;for(p=0;15>=p;p++)a.Na[p]=0;g[2*a.da[a.sb]+1]=0;for(b=a.sb+1;573>b;b++){var q=a.da[b];p=g[2*g[2*q+1]+1]+1;p>n&&(p=n,r++);g[2*q+1]=p;if(!(q>l)){a.Na[p]++;var t=0;q>=k&&(t=f[q-k]);var u=g[2*q];a.Sa+=u*(p+t);e&&(a.zb+=u*(d[2*q+1]+t))}}if(0!==r){do{for(p=n-1;0===a.Na[p];)p--;a.Na[p]--;a.Na[p+1]+=2;a.Na[n]--;r-=2}while(0<r);for(p=n;0!==p;p--)for(q=a.Na[p];0!==q;)d=a.da[--b],d>l||(g[2*d+1]!==p&&(a.Sa+=(p-
g[2*d+1])*g[2*d],g[2*d+1]=p),q--)}Rm(c,h,a.Na)}
function Zm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];++g<h&&k===f||(g<l?a.ja[2*k]+=g:0!==k?(k!==e&&a.ja[2*k]++,a.ja[32]++):10>=g?a.ja[34]++:a.ja[36]++,g=0,e=k,0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function $m(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];if(!(++g<h&&k===f)){if(g<l){do Pm(a,k,a.ja);while(0!==--g)}else 0!==k?(k!==e&&(Pm(a,k,a.ja),g--),Pm(a,16,a.ja),Om(a,g-3,2)):10>=g?(Pm(a,17,a.ja),Om(a,g-3,3)):(Pm(a,18,a.ja),Om(a,g-11,7));g=0;e=k;0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function an(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ta[2*c])return 0;if(0!==a.ta[18]||0!==a.ta[20]||0!==a.ta[26])return 1;for(c=32;256>c;c++)if(0!==a.ta[2*c])return 1;return 0}
var bn=!1;function cn(a,b,c){a.ba[a.Jb+2*a.za]=b>>>8&255;a.ba[a.Jb+2*a.za+1]=b&255;a.ba[a.ad+a.za]=c&255;a.za++;0===b?a.ta[2*c]++:(a.matches++,b--,a.ta[2*(Fm[c]+256+1)]++,a.cb[2*(256>b?Em[b]:Em[256+(b>>>7)])]++);return a.za===a.Rb-1}
;function dn(a,b){a.msg=wm[b];return b}
function en(a){for(var b=a.length;0<=--b;)a[b]=0}
function fn(a){var b=a.state,c=b.pending;c>a.U&&(c=a.U);0!==c&&(S.mb(a.output,b.ba,b.Sb,c,a.xb),a.xb+=c,b.Sb+=c,a.wd+=c,a.U-=c,b.pending-=c,0===b.pending&&(b.Sb=0))}
function gn(a,b){var c=0<=a.va?a.va:-1,d=a.C-a.va,e=0;if(0<a.level){2===a.S.Mc&&(a.S.Mc=an(a));Ym(a,a.qc);Ym(a,a.hc);Zm(a,a.ta,a.qc.wb);Zm(a,a.cb,a.hc.wb);Ym(a,a.Fd);for(e=18;3<=e&&0===a.ja[2*Bm[e]+1];e--);a.Sa+=3*(e+1)+14;var f=a.Sa+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Om(a,b?1:0,3),Um(a,c,d);else if(4===a.strategy||g===f)Om(a,2+(b?1:0),3),Xm(a,Cm,Dm);else{Om(a,4+(b?1:0),3);c=a.qc.wb+1;d=a.hc.wb+1;e+=1;Om(a,c-257,5);Om(a,d-1,5);Om(a,e-4,4);for(f=0;f<e;f++)Om(a,a.ja[2*
Bm[f]+1],3);$m(a,a.ta,c-1);$m(a,a.cb,d-1);Xm(a,a.ta,a.cb)}Sm(a);b&&Tm(a);a.va=a.C;fn(a.S)}
function T(a,b){a.ba[a.pending++]=b}
function hn(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function jn(a,b){var c=a.he,d=a.C,e=a.wa,f=a.le,g=a.C>a.la-262?a.C-(a.la-262):0,h=a.window,l=a.Xa,k=a.Ka,n=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Wd&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<n;);q=258-(n-d);d=n-258;if(q>e){a.vb=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=k[b&l])>g&&0!==--c);return e<=
a.G?e:a.G}
function kn(a){var b=a.la,c;do{var d=a.Me-a.G-a.C;if(a.C>=b+(b-262)){S.mb(a.window,a.window,b,b,0);a.vb-=b;a.C-=b;a.va-=b;var e=c=a.oc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ka[--e],a.Ka[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.S.na)break;e=a.S;c=a.window;f=a.C+a.G;var g=e.na;g>d&&(g=d);0===g?c=0:(e.na-=g,S.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.M=qm(e.M,c,g,f):2===e.state.wrap&&(e.M=rm(e.M,c,g,f)),e.hb+=g,e.jb+=g,c=g);a.G+=c;if(3<=a.G+a.ka)for(d=a.C-a.ka,a.T=a.window[d],
a.T=(a.T<<a.Qa^a.window[d+1])&a.Pa;a.ka&&!(a.T=(a.T<<a.Qa^a.window[d+3-1])&a.Pa,a.Ka[d&a.Xa]=a.head[a.T],a.head[a.T]=d,d++,a.ka--,3>a.G+a.ka););}while(262>a.G&&0!==a.S.na)}
function ln(a,b){for(var c;;){if(262>a.G){kn(a);if(262>a.G&&0===b)return 1;if(0===a.G)break}c=0;3<=a.G&&(a.T=(a.T<<a.Qa^a.window[a.C+3-1])&a.Pa,c=a.Ka[a.C&a.Xa]=a.head[a.T],a.head[a.T]=a.C);0!==c&&a.C-c<=a.la-262&&(a.V=jn(a,c));if(3<=a.V)if(c=cn(a,a.C-a.vb,a.V-3),a.G-=a.V,a.V<=a.dd&&3<=a.G){a.V--;do a.C++,a.T=(a.T<<a.Qa^a.window[a.C+3-1])&a.Pa,a.Ka[a.C&a.Xa]=a.head[a.T],a.head[a.T]=a.C;while(0!==--a.V);a.C++}else a.C+=a.V,a.V=0,a.T=a.window[a.C],a.T=(a.T<<a.Qa^a.window[a.C+1])&a.Pa;else c=cn(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(gn(a,!1),0===a.S.U))return 1}a.ka=2>a.C?a.C:2;return 4===b?(gn(a,!0),0===a.S.U?3:4):a.za&&(gn(a,!1),0===a.S.U)?1:2}
function mn(a,b){for(var c,d;;){if(262>a.G){kn(a);if(262>a.G&&0===b)return 1;if(0===a.G)break}c=0;3<=a.G&&(a.T=(a.T<<a.Qa^a.window[a.C+3-1])&a.Pa,c=a.Ka[a.C&a.Xa]=a.head[a.T],a.head[a.T]=a.C);a.wa=a.V;a.pe=a.vb;a.V=2;0!==c&&a.wa<a.dd&&a.C-c<=a.la-262&&(a.V=jn(a,c),5>=a.V&&(1===a.strategy||3===a.V&&4096<a.C-a.vb)&&(a.V=2));if(3<=a.wa&&a.V<=a.wa){d=a.C+a.G-3;c=cn(a,a.C-1-a.pe,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.T=(a.T<<a.Qa^a.window[a.C+3-1])&a.Pa,a.Ka[a.C&a.Xa]=a.head[a.T],a.head[a.T]=a.C);
while(0!==--a.wa);a.fb=0;a.V=2;a.C++;if(c&&(gn(a,!1),0===a.S.U))return 1}else if(a.fb){if((c=cn(a,0,a.window[a.C-1]))&&gn(a,!1),a.C++,a.G--,0===a.S.U)return 1}else a.fb=1,a.C++,a.G--}a.fb&&(cn(a,0,a.window[a.C-1]),a.fb=0);a.ka=2>a.C?a.C:2;return 4===b?(gn(a,!0),0===a.S.U?3:4):a.za&&(gn(a,!1),0===a.S.U)?1:2}
function nn(a,b){for(var c,d,e,f=a.window;;){if(258>=a.G){kn(a);if(258>=a.G&&0===b)return 1;if(0===a.G)break}a.V=0;if(3<=a.G&&0<a.C&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}3<=a.V?(c=cn(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=cn(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(gn(a,!1),0===a.S.U))return 1}a.ka=0;return 4===b?(gn(a,!0),0===a.S.U?3:4):
a.za&&(gn(a,!1),0===a.S.U)?1:2}
function on(a,b){for(var c;;){if(0===a.G&&(kn(a),0===a.G)){if(0===b)return 1;break}a.V=0;c=cn(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(gn(a,!1),0===a.S.U))return 1}a.ka=0;return 4===b?(gn(a,!0),0===a.S.U?3:4):a.za&&(gn(a,!1),0===a.S.U)?1:2}
function pn(a,b,c,d,e){this.zf=a;this.sg=b;this.vg=c;this.rg=d;this.uf=e}
var qn;qn=[new pn(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(1>=a.G){kn(a);if(0===a.G&&0===b)return 1;if(0===a.G)break}a.C+=a.G;a.G=0;var d=a.va+c;if(0===a.C||a.C>=d)if(a.G=a.C-d,a.C=d,gn(a,!1),0===a.S.U)return 1;if(a.C-a.va>=a.la-262&&(gn(a,!1),0===a.S.U))return 1}a.ka=0;if(4===b)return gn(a,!0),0===a.S.U?3:4;a.C>a.va&&gn(a,!1);return 1}),
new pn(4,4,8,4,ln),new pn(4,5,16,8,ln),new pn(4,6,32,32,ln),new pn(4,4,16,16,mn),new pn(8,16,32,32,mn),new pn(8,16,128,128,mn),new pn(8,32,128,256,mn),new pn(32,128,258,1024,mn),new pn(32,258,258,4096,mn)];
function rn(){this.S=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Sb=this.Aa=0;this.L=null;this.Ca=0;this.method=8;this.tb=-1;this.Xa=this.yd=this.la=0;this.window=null;this.Me=0;this.head=this.Ka=null;this.le=this.Wd=this.strategy=this.level=this.dd=this.he=this.wa=this.G=this.vb=this.C=this.fb=this.pe=this.V=this.va=this.Qa=this.Pa=this.Vc=this.oc=this.T=0;this.ta=new S.La(1146);this.cb=new S.La(122);this.ja=new S.La(78);en(this.ta);en(this.cb);en(this.ja);this.Fd=this.hc=this.qc=
null;this.Na=new S.La(16);this.da=new S.La(573);en(this.da);this.sb=this.Ra=0;this.depth=new S.La(573);en(this.depth);this.ha=this.oa=this.ka=this.matches=this.zb=this.Sa=this.Jb=this.za=this.Rb=this.ad=0}
function sn(a,b){if(!a||!a.state||5<b||0>b)return a?dn(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.na||666===c.status&&4!==b)return dn(a,0===a.U?-5:-2);c.S=a;var d=c.tb;c.tb=b;if(42===c.status)if(2===c.wrap)a.M=0,T(c,31),T(c,139),T(c,8),c.L?(T(c,(c.L.text?1:0)+(c.L.Ta?2:0)+(c.L.extra?4:0)+(c.L.name?8:0)+(c.L.comment?16:0)),T(c,c.L.time&255),T(c,c.L.time>>8&255),T(c,c.L.time>>16&255),T(c,c.L.time>>24&255),T(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),T(c,c.L.hi&255),c.L.extra&&c.L.extra.length&&
(T(c,c.L.extra.length&255),T(c,c.L.extra.length>>8&255)),c.L.Ta&&(a.M=rm(a.M,c.ba,c.pending,0)),c.Ca=0,c.status=69):(T(c,0),T(c,0),T(c,0),T(c,0),T(c,0),T(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),T(c,3),c.status=113);else{var e=8+(c.yd-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.C&&(e|=32);c.status=113;hn(c,e+(31-e%31));0!==c.C&&(hn(c,a.M>>>16),hn(c,a.M&65535));a.M=1}if(69===c.status)if(c.L.extra){for(e=c.pending;c.Ca<(c.L.extra.length&65535)&&(c.pending!==c.Aa||
(c.L.Ta&&c.pending>e&&(a.M=rm(a.M,c.ba,c.pending-e,e)),fn(a),e=c.pending,c.pending!==c.Aa));)T(c,c.L.extra[c.Ca]&255),c.Ca++;c.L.Ta&&c.pending>e&&(a.M=rm(a.M,c.ba,c.pending-e,e));c.Ca===c.L.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.L.name){e=c.pending;do{if(c.pending===c.Aa&&(c.L.Ta&&c.pending>e&&(a.M=rm(a.M,c.ba,c.pending-e,e)),fn(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.L.name.length?c.L.name.charCodeAt(c.Ca++)&255:0;T(c,f)}while(0!==f);c.L.Ta&&c.pending>
e&&(a.M=rm(a.M,c.ba,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.L.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.L.Ta&&c.pending>e&&(a.M=rm(a.M,c.ba,c.pending-e,e)),fn(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.L.comment.length?c.L.comment.charCodeAt(c.Ca++)&255:0;T(c,f)}while(0!==f);c.L.Ta&&c.pending>e&&(a.M=rm(a.M,c.ba,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.L.Ta?(c.pending+2>c.Aa&&fn(a),c.pending+2<=c.Aa&&(T(c,
a.M&255),T(c,a.M>>8&255),a.M=0,c.status=113)):c.status=113);if(0!==c.pending){if(fn(a),0===a.U)return c.tb=-1,0}else if(0===a.na&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return dn(a,-5);if(666===c.status&&0!==a.na)return dn(a,-5);if(0!==a.na||0!==c.G||0!==b&&666!==c.status){d=2===c.strategy?on(c,b):3===c.strategy?nn(c,b):qn[c.level].uf(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.U&&(c.tb=-1),0;if(2===d&&(1===b?(Om(c,2,3),Pm(c,256,Cm),16===c.ha?(Nm(c,c.oa),c.oa=0,c.ha=0):8<=c.ha&&
(c.ba[c.pending++]=c.oa&255,c.oa>>=8,c.ha-=8)):5!==b&&(Om(c,0,3),Um(c,0,0),3===b&&(en(c.head),0===c.G&&(c.C=0,c.va=0,c.ka=0))),fn(a),0===a.U))return c.tb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(T(c,a.M&255),T(c,a.M>>8&255),T(c,a.M>>16&255),T(c,a.M>>24&255),T(c,a.jb&255),T(c,a.jb>>8&255),T(c,a.jb>>16&255),T(c,a.jb>>24&255)):(hn(c,a.M>>>16),hn(c,a.M&65535));fn(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var tn={};tn=function(){this.input=null;this.jb=this.na=this.hb=0;this.output=null;this.wd=this.U=this.xb=0;this.msg="";this.state=null;this.Mc=2;this.M=0};var un=Object.prototype.toString;
function vn(a){if(!(this instanceof vn))return new vn(a);a=this.options=S.assign({level:-1,method:8,chunkSize:16384,Ya:15,ug:8,strategy:0,Wa:""},a||{});a.raw&&0<a.Ya?a.Ya=-a.Ya:a.Af&&0<a.Ya&&16>a.Ya&&(a.Ya+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.S=new tn;this.S.U=0;var b=this.S;var c=a.level,d=a.method,e=a.Ya,f=a.ug,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=dn(b,-2);else{8===e&&(e=9);var l=new rn;
b.state=l;l.S=b;l.wrap=h;l.L=null;l.yd=e;l.la=1<<l.yd;l.Xa=l.la-1;l.Vc=f+7;l.oc=1<<l.Vc;l.Pa=l.oc-1;l.Qa=~~((l.Vc+3-1)/3);l.window=new S.kb(2*l.la);l.head=new S.La(l.oc);l.Ka=new S.La(l.la);l.Rb=1<<f+6;l.Aa=4*l.Rb;l.ba=new S.kb(l.Aa);l.Jb=1*l.Rb;l.ad=3*l.Rb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.jb=b.wd=0;b.Mc=2;c=b.state;c.pending=0;c.Sb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.M=2===c.wrap?0:1;c.tb=0;if(!bn){d=Array(16);for(f=g=0;28>f;f++)for(Gm[f]=g,e=0;e<1<<ym[f];e++)Fm[g++]=
f;Fm[g-1]=f;for(f=g=0;16>f;f++)for(Hm[f]=g,e=0;e<1<<zm[f];e++)Em[g++]=f;for(g>>=7;30>f;f++)for(Hm[f]=g<<7,e=0;e<1<<zm[f]-7;e++)Em[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Cm[2*e+1]=8,e++,d[8]++;for(;255>=e;)Cm[2*e+1]=9,e++,d[9]++;for(;279>=e;)Cm[2*e+1]=7,e++,d[7]++;for(;287>=e;)Cm[2*e+1]=8,e++,d[8]++;Rm(Cm,287,d);for(e=0;30>e;e++)Dm[2*e+1]=5,Dm[2*e]=Qm(e,5);Jm=new Im(Cm,ym,257,286,15);Km=new Im(Dm,zm,0,30,15);Lm=new Im([],Am,0,19,7);bn=!0}c.qc=new Mm(c.ta,Jm);c.hc=new Mm(c.cb,Km);c.Fd=
new Mm(c.ja,Lm);c.oa=0;c.ha=0;Sm(c);c=0}else c=dn(b,-2);0===c&&(b=b.state,b.Me=2*b.la,en(b.head),b.dd=qn[b.level].sg,b.Wd=qn[b.level].zf,b.le=qn[b.level].vg,b.he=qn[b.level].rg,b.C=0,b.va=0,b.G=0,b.ka=0,b.V=b.wa=2,b.fb=0,b.T=0);b=c}}else b=-2;if(0!==b)throw Error(wm[b]);a.header&&(b=this.S)&&b.state&&2===b.state.wrap&&(b.state.L=a.header);if(a.Kb){var k;"string"===typeof a.Kb?k=pm(a.Kb):"[object ArrayBuffer]"===un.call(a.Kb)?k=new Uint8Array(a.Kb):k=a.Kb;a=this.S;f=k;g=f.length;if(a&&a.state)if(k=
a.state,b=k.wrap,2===b||1===b&&42!==k.status||k.G)b=-2;else{1===b&&(a.M=qm(a.M,f,g,0));k.wrap=0;g>=k.la&&(0===b&&(en(k.head),k.C=0,k.va=0,k.ka=0),c=new S.kb(k.la),S.mb(c,f,g-k.la,k.la,0),f=c,g=k.la);c=a.na;d=a.hb;e=a.input;a.na=g;a.hb=0;a.input=f;for(kn(k);3<=k.G;){f=k.C;g=k.G-2;do k.T=(k.T<<k.Qa^k.window[f+3-1])&k.Pa,k.Ka[f&k.Xa]=k.head[k.T],k.head[k.T]=f,f++;while(--g);k.C=f;k.G=2;kn(k)}k.C+=k.G;k.va=k.C;k.ka=k.G;k.G=0;k.V=k.wa=2;k.fb=0;a.hb=d;a.input=e;a.na=c;k.wrap=b;b=0}else b=-2;if(0!==b)throw Error(wm[b]);
this.Gh=!0}}
vn.prototype.push=function(a,b){var c=this.S,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=pm(a):"[object ArrayBuffer]"===un.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.na=c.input.length;do{0===c.U&&(c.output=new S.kb(d),c.xb=0,c.U=d);a=sn(c,e);if(1!==a&&0!==a)return wn(this,a),this.ended=!0,!1;if(0===c.U||0===c.na&&(4===e||2===e))if("string"===this.options.Wa){var f=S.ud(c.output,c.xb);b=f;f=f.length;if(65537>f&&(b.subarray&&om||!b.subarray))b=
String.fromCharCode.apply(null,S.ud(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=S.ud(c.output,c.xb),this.chunks.push(b)}while((0<c.na||0===c.U)&&1!==a);if(4===e)return(c=this.S)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=dn(c,-2):(c.state=null,a=113===d?dn(c,-3):0)):a=-2,wn(this,a),this.ended=!0,0===a;2===e&&(wn(this,0),c.U=0);return!0};
function wn(a,b){0===b&&(a.result="string"===a.options.Wa?a.chunks.join(""):S.Pd(a.chunks));a.chunks=[];a.err=b;a.msg=a.S.msg}
;function xn(a){this.name=a}
;var yn=new xn("rawColdConfigGroup");var zn=new xn("rawHotConfigGroup");function An(a){this.P=K(a)}
y(An,M);An.prototype.g=function(a){L(this,5,a)};function Bn(a){this.P=K(a)}
y(Bn,M);function Cn(a){this.P=K(a)}
y(Cn,M);Cn.ib=[2];function Dn(a){this.P=K(a)}
y(Dn,M);Dn.prototype.qb=function(){return yf(this,61)};
Dn.prototype.getPlayerType=function(){return yf(this,36)};
Dn.prototype.setHomeGroupInfo=function(a){return vf(this,Cn,81,a)};
Dn.ib=[9,66,32,86,100,101];function En(a){this.P=K(a)}
y(En,M);var Fn=[2,3,4,5,6];function Gn(a){this.P=K(a)}
y(Gn,M);Gn.ib=[15,26,28];function Hn(a){this.P=K(a)}
y(Hn,M);Hn.ib=[5];function In(a){this.P=K(a)}
y(In,M);function Jn(a){this.P=K(a)}
y(Jn,M);Jn.prototype.setSafetyMode=function(a){return Bf(this,5,a)};
Jn.ib=[12];function Kn(a){this.P=K(a)}
y(Kn,M);Kn.ib=[12];var Ln={Fh:"WEB_DISPLAY_MODE_UNKNOWN",Bh:"WEB_DISPLAY_MODE_BROWSER",Dh:"WEB_DISPLAY_MODE_MINIMAL_UI",Eh:"WEB_DISPLAY_MODE_STANDALONE",Ch:"WEB_DISPLAY_MODE_FULLSCREEN"};function Mn(a){this.P=K(a)}
y(Mn,M);function Nn(a){this.P=K(a)}
y(Nn,M);Nn.prototype.l=function(){var a=void 0===a?0:a;var b=mf(this,2);b=null==b?b:Te(b)?"number"===typeof b?Xe(b):Ve(b):void 0;return null!=b?b:a};function On(a){this.P=K(a)}
y(On,M);function Pn(a){this.P=K(a,497)}
y(Pn,M);
var Qn=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function Rn(a){this.P=K(a)}
y(Rn,M);function Sn(a){this.P=K(a)}
y(Sn,M);Sn.prototype.getPlaylistId=function(){return zf(this,2)};
var Af=[1,2];function Tn(a){this.P=K(a)}
y(Tn,M);Tn.ib=[3];var Un=C.window,Vn,Wn,Xn=(null==Un?void 0:null==(Vn=Un.yt)?void 0:Vn.config_)||(null==Un?void 0:null==(Wn=Un.ytcfg)?void 0:Wn.data_)||{};H("yt.config_",Xn);function Yn(){var a=arguments;1<a.length?Xn[a[0]]=a[1]:1===a.length&&Object.assign(Xn,a[0])}
function U(a,b){return a in Xn?Xn[a]:b}
;var Zn={};function $n(){return Zn.clicktracking||(Zn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function V(a){a=ao(a);return"string"===typeof a&&"false"===a?!1:!!a}
function bo(a,b){a=ao(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ao(a){return U("EXPERIMENT_FLAGS",{})[a]}
function co(){for(var a=[],b=U("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=U("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;function eo(a,b,c,d){Uf.set(""+a,b,{cd:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;var fo=[];function go(a){fo.forEach(function(b){return b(a)})}
function ho(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){io(b)}}:a}
function io(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Yn("ERRORS",b));go(a)}
function jo(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=U("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Yn("ERRORS",f))}
;var ko=/^[\w.]*$/,lo={q:!0,search_query:!0};function mo(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=no(f[0]||""),h=no(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?tb(l,h):c[g]=[l,h]}else c[g]=h}catch(r){var k=r,n=f[0],p=String(mo);k.args=[{key:n,value:f[1],query:a,method:oo===p?"unchanged":p}];lo.hasOwnProperty(n)||jo(k)}}return c}
var oo=String(mo);function po(a){var b=[];ub(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];qb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function qo(a){"?"===a.charAt(0)&&(a=a.substring(1));return mo(a,"&")}
function ro(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=qo(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return cc(a,e)+d}
function so(a){if(!b)var b=window.location.href;var c=a.match(Wb)[1]||null,d=Yb(a);c&&d?(a=a.match(Wb),b=b.match(Wb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Yb(b)===d&&(Number(b.match(Wb)[4]||null)||null)===(Number(a.match(Wb)[4]||null)||null):!0;return a}
function no(a){return a&&a.match(ko)?a:Vb(a)}
;var to=ee||fe;function uo(a){var b=Qa();return b?0<=b.toLowerCase().indexOf(a):!1}
;var vo=Date.now().toString();function wo(a){var b=xo;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Mf;e.flash="0";a:{try{var f=b.g.top.location.href}catch(fb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Df:g;try{var h=g.history.length}catch(fb){h=0}e.u_his=h;var l;e.u_h=null==(l=Df.screen)?void 0:l.height;var k;e.u_w=null==(k=Df.screen)?void 0:k.width;var n;e.u_ah=null==(n=Df.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Df.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=Df.screen)?void 0:r.colorDepth}catch(fb){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(fb){}try{var u=h.outerWidth;var A=h.outerHeight}catch(fb){}try{var E=h.innerWidth;var R=h.innerHeight}catch(fb){}try{var X=h.screenLeft;var da=h.screenTop}catch(fb){}try{E=h.innerWidth,R=h.innerHeight}catch(fb){}try{var gb=h.screen.availWidth;var Si=h.screen.availTop}catch(fb){}q=[X,da,q,t,gb,Si,u,A,E,R];t=b.g.top;try{var Jc=(t||window).document,hb=
"CSS1Compat"==Jc.compatMode?Jc.documentElement:Jc.body;var Ta=(new yd(hb.clientWidth,hb.clientHeight)).round()}catch(fb){Ta=new yd(-12245933,-12245933)}Jc=Ta;Ta={};var Ua=void 0===Ua?C:Ua;hb=new ul;"SVGElement"in Ua&&"createElementNS"in Ua.document&&hb.set(0);t=Jf();t["allow-top-navigation-by-user-activation"]&&hb.set(1);t["allow-popups-to-escape-sandbox"]&&hb.set(2);Ua.crypto&&Ua.crypto.subtle&&hb.set(3);"TextDecoder"in Ua&&"TextEncoder"in Ua&&hb.set(4);Ua=vl(hb);Ta.bc=Ua;Ta.bih=Jc.height;Ta.biw=
Jc.width;Ta.brdim=q.join();b=b.l;b=(Ta.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ta.wgl=!!Df.WebGLRenderingContext,Ta);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var xo=new function(){var a=window.document;this.g=window;this.l=a};
H("yt.ads_.signals_.getAdSignalsString",function(a){return po(wo(a))});G();var yo="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function zo(){if(!yo)return null;var a=yo();return"open"in a?a:null}
;function Ao(a,b){"function"===typeof a&&(a=ho(a));return window.setTimeout(a,b)}
;var Bo="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Bo);var Co={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Do="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Bo)),Eo=!1;
function Fo(a,b,c,d,e,f,g,h){function l(){4===(k&&"readyState"in k?k.readyState:0)&&b&&ho(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var k=zo();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;V("debug_forward_web_query_parameters")&&(a=Go(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ho(a,e))for(var n in e)k.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(p){jo(p)}}k.send(d);return k}
function Ho(a,b){b=void 0===b?{}:b;var c=so(a),d=V("web_ajax_ignore_global_headers_if_set"),e;for(e in Co){var f=U(Co[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=U("VISITOR_DATA"));!f||!c&&Yb(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===U("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Yb(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(l){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Yb(a)||(b["X-YouTube-Ad-Signals"]=po(wo()));return b}
function Io(a,b){b.method="POST";b.postParams||(b.postParams={});return Jo(a,b)}
function Jo(a,b){var c=b.format||"JSON";a=Ko(a,b);var d=Lo(a,b),e=!1,f=Mo(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var n=null,p=400<=l.status&&500>l.status,r=500<=l.status&&600>l.status;if(k||p||r)n=No(a,c,l,b.convertToSafeHtml);k&&(k=Oo(c,l,n));n=n||{};p=b.context||C;k?b.onSuccess&&b.onSuccess.call(p,l,n):b.onError&&b.onError.call(p,l,n);b.onFinish&&
b.onFinish.call(p,l,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Ao(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Ko(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=U("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ro(a,b||{},!0);return a}
function Lo(a,b){var c=U("XSRF_FIELD_NAME"),d=U("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=U("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Yb(a)&&!b.withCredentials&&Yb(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(V("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=qo(e),xb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):bc(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!Eo&&a&&"POST"!==b.method&&(Eo=!0,io(Error("AJAX request with postData should use POST")));return e}
function No(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,jo(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Po(a):null)e={},qb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Qo(g)})}d&&Ro(e);
return e}
function Ro(a){if(Ia(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b]);a[c]=d}else Ro(a[b])}}
function Oo(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Po(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Qo(a){var b="";qb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Go(a){var b=window.location.search,c=Yb(a);V("debug_handle_relative_url_for_query_forward_killswitch")||!c&&so(a)&&(c=document.location.hostname);var d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=qo(b),f={};qb(Do,function(g){e[g]&&(f[g]=e[g])});
return ro(a,f||{},!1)}
var Mo=Fo;function So(){}
;function To(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Uo(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;H("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Vo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Wo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Xo={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Yo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Zo(){var a=C.navigator;return a?a.connection:void 0}
;function $o(a){var b=Ca.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y($o,Error);function ap(){try{return bp(),!0}catch(a){return!1}}
function bp(){if(void 0!==U("DATASYNC_ID"))return U("DATASYNC_ID");throw new $o("Datasync ID not set","unknown");}
;function cp(){}
function dp(a,b){return cg.ab(a,0,b)}
cp.prototype.Ia=function(a,b){return this.ab(a,1,b)};
cp.prototype.Gb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var ep=bo("web_emulated_idle_callback_delay",300),fp=1E3/60-3,gp=[8,5,4,3,2,1,0];
function hp(a){a=void 0===a?{}:a;gc.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(gp),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.ma=a.timeout||1;this.A=fp;this.u=0;this.K=this.yg.bind(this);this.ea=this.Vg.bind(this);this.X=this.Ue.bind(this);this.Y=this.Wf.bind(this);this.ca=this.Dg.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!V("disable_scheduler_requestIdleCallback");(this.F=!1!==a.useRaf&&
!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.K)}
y(hp,gc);m=hp.prototype;m.Gb=function(a){var b=G();ip(a);a=G()-b;this.s||(this.A-=a)};
m.ab=function(a,b,c){++this.I;if(10===b)return this.Gb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(0!==this.g&&jp(this)!==this.u&&kp(this),this.start()));return d};
m.xa=function(a){delete this.i[a]};
function lp(a){a.B.length=0;for(var b=5;0<=b;b--)a.l[b].length=0;a.l[8].length=0;a.i={};kp(a)}
function jp(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(0<a.l[b].length)return 0<b?!document.hidden&&a.F?3:2:1;return 0}
function mp(a){var b=D("yt.logging.errors.log");b&&b(a)}
function ip(a){try{a()}catch(b){mp(b)}}
function np(a){for(var b=w(gp),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
m.Wf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;op(this,b);this.J=!1};
m.Vg=function(){op(this)};
m.Ue=function(){pp(this)};
m.Dg=function(a){this.D=!0;var b=jp(this);4===b&&b!==this.u&&(kp(this),this.start());op(this,void 0,a);this.D=!1};
m.yg=function(){document.hidden||pp(this);this.g&&(kp(this),this.start())};
function pp(a){kp(a);a.s=!0;for(var b=G(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&ip(e)}qp(a);a.s=!1;np(a)&&a.start();b=G()-b;a.A-=b}
function qp(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function op(a,b,c){a.D&&4===a.u&&a.g||kp(a);a.s=!0;b=G()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){mp(k)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&ip(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(G()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&ip(c)}while(c&&G()<b)}a.s=!1;qp(a);a.A=fp;np(a)&&a.start()}
m.start=function(){this.H=!1;if(0===this.g)switch(this.u=jp(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,ep);break;case 2:this.g=window.setTimeout(this.ea,this.ma);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function kp(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
m.Ba=function(){lp(this);kp(this);this.F&&document.removeEventListener("visibilitychange",this.K);gc.prototype.Ba.call(this)};var rp=D("yt.scheduler.instance.timerIdMap_")||{},sp=bo("kevlar_tuner_scheduler_soft_state_timer_ms",800),tp=0,up=0;function vp(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.bb)a=new hp(U("scheduler")||{}),H("ytglobal.schedulerInstanceInstance_",a);return a}
function wp(){xp();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),H("ytglobal.schedulerInstanceInstance_",null))}
function xp(){lp(vp());for(var a in rp)rp.hasOwnProperty(a)&&delete rp[Number(a)]}
function yp(a,b,c){if(!c)return c=void 0===c,-vp().ab(a,b,c);var d=window.setTimeout(function(){var e=vp().ab(a,b);rp[d]=e},c);
return d}
function zp(a){vp().Gb(a)}
function Ap(a){var b=vp();if(0>a)b.xa(-a);else{var c=rp[a];c?(b.xa(c),delete rp[a]):window.clearTimeout(a)}}
function Bp(){Cp()}
function Cp(){window.clearTimeout(tp);vp().start()}
function Dp(){var a=vp();kp(a);a.H=!0;window.clearTimeout(tp);tp=window.setTimeout(Bp,sp)}
function Ep(){window.clearTimeout(up);up=window.setTimeout(function(){Fp(0)},sp)}
function Fp(a){Ep();var b=vp();b.o=a;b.start()}
function Gp(a){Ep();var b=vp();b.o>a&&(b.o=a,b.start())}
function Hp(){window.clearTimeout(up);var a=vp();a.o=0;a.start()}
;function Ip(){cp.apply(this,arguments)}
y(Ip,cp);function Jp(){Ip.g||(Ip.g=new Ip);return Ip.g}
Ip.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ao(a,c||0)};
Ip.prototype.xa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Ip.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var cg=Jp();
V("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(H("yt.scheduler.instance.dispose",wp),H("yt.scheduler.instance.addJob",yp),H("yt.scheduler.instance.addImmediateJob",zp),H("yt.scheduler.instance.cancelJob",Ap),H("yt.scheduler.instance.cancelAllJobs",xp),H("yt.scheduler.instance.start",Cp),H("yt.scheduler.instance.pause",Dp),H("yt.scheduler.instance.setPriorityThreshold",Fp),H("yt.scheduler.instance.enablePriorityThreshold",Gp),H("yt.scheduler.instance.clearPriorityThreshold",Hp),H("yt.scheduler.initialized",
!0));function Kp(a){var b=new $l;(b=(b.l=Zl(b.g))?a?new km(b,a):b:null)||(a=new fm(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Ul(a):null;this.l=document.domain||window.location.hostname}
Kp.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Il(b))}catch(f){return}else e=escape(b);eo(a,e,c,this.l)};
Kp.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Uf.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Kp.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;Uf.remove(""+a,"/",void 0===b?"youtube.com":b)};var Lp=function(){var a;return function(){a||(a=new Kp("ytidb"));return a}}();
function Mp(){var a;return null==(a=Lp())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Np=[],Op=!1;function Pp(a){Op||(Np.push({type:"ERROR",payload:a}),10<Np.length&&Np.shift())}
function Qp(a,b){Op||(Np.push({type:"EVENT",eventType:a,payload:b}),10<Np.length&&Np.shift())}
;function Rp(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Sp(a){return a.substr(0,a.indexOf(":"))||a}
;var Tp={},Up=(Tp.AUTH_INVALID="No user identifier specified.",Tp.EXPLICIT_ABORT="Transaction was explicitly aborted.",Tp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Tp.MISSING_INDEX="Index not created.",Tp.MISSING_OBJECT_STORES="Object stores not created.",Tp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Tp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Tp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Tp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Tp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Tp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Tp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Tp),Vp={},Wp=(Vp.AUTH_INVALID="ERROR",Vp.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Vp.EXPLICIT_ABORT="IGNORED",Vp.IDB_NOT_SUPPORTED="ERROR",Vp.MISSING_INDEX=
"WARNING",Vp.MISSING_OBJECT_STORES="ERROR",Vp.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Vp.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Vp.QUOTA_EXCEEDED="WARNING",Vp.QUOTA_MAYBE_EXCEEDED="WARNING",Vp.UNKNOWN_ABORT="WARNING",Vp.INCOMPATIBLE_DB_VERSION="WARNING",Vp),Xp={},Yp=(Xp.AUTH_INVALID=!1,Xp.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Xp.EXPLICIT_ABORT=!1,Xp.IDB_NOT_SUPPORTED=!1,Xp.MISSING_INDEX=!1,Xp.MISSING_OBJECT_STORES=!1,Xp.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Xp.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Xp.QUOTA_EXCEEDED=!1,Xp.QUOTA_MAYBE_EXCEEDED=!0,Xp.UNKNOWN_ABORT=!0,Xp.INCOMPATIBLE_DB_VERSION=!1,Xp);function W(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Up[a]:c;d=void 0===d?Wp[a]:d;e=void 0===e?Yp[a]:e;$o.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,W.prototype)}
y(W,$o);function Zp(a,b){W.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Up.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Zp.prototype)}
y(Zp,W);function $p(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,$p.prototype)}
y($p,Error);var aq=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function bq(a,b,c,d){b=Sp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof W)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new W("QUOTA_EXCEEDED",a);if(ge&&"UnknownError"===e.name)return new W("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof $p)return new W("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&aq.some(function(f){return e.message.includes(f)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new W("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",gi:e.name})];e.level="WARNING";return e}
function cq(a,b,c){var d=Mp();return new W("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function dq(a){if(!a)throw Error();throw a;}
function eq(a){return a}
function fq(a){this.g=a}
function gq(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
gq.resolve=function(a){return new gq(new fq(function(b,c){a instanceof gq?a.then(b,c):b(a)}))};
gq.reject=function(a){return new gq(new fq(function(b,c){c(a)}))};
gq.prototype.then=function(a,b){var c=this,d=null!=a?a:eq,e=null!=b?b:dq;return new gq(new fq(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){hq(c,c,d,f,g)}),c.l.push(function(){iq(c,c,e,f,g)})):"FULFILLED"===c.state.status?hq(c,c,d,f,g):"REJECTED"===c.state.status&&iq(c,c,e,f,g)}))};
function jq(a,b){a.then(void 0,b)}
function hq(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof gq?kq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function iq(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof gq?kq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function kq(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof gq?kq(a,b,f,d,e):d(f)},function(f){e(f)})}
;function lq(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function mq(a){return new Promise(function(b,c){lq(a,b,c)})}
function nq(a){return new gq(new fq(function(b,c){lq(a,b,c)}))}
;function oq(a,b){return new gq(new fq(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var pq=window,Y=pq.ytcsi&&pq.ytcsi.now?pq.ytcsi.now:pq.performance&&pq.performance.timing&&pq.performance.now&&pq.performance.timing.navigationStart?function(){return pq.performance.timing.navigationStart+pq.performance.now()}:function(){return(new Date).getTime()};function qq(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
m=qq.prototype;m.add=function(a,b,c){return rq(this,[a],{mode:"readwrite",pa:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return rq(this,[a],{mode:"readwrite",pa:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function sq(a,b,c){a=a.g.createObjectStore(b,c);return new tq(a)}
m.delete=function(a,b){return rq(this,[a],{mode:"readwrite",pa:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return rq(this,[a],{mode:"readonly",pa:!0},function(c){return c.objectStore(a).get(b)})};
function uq(a,b,c){return rq(a,[b],{mode:"readwrite",pa:!0},function(d){d=d.objectStore(b);return nq(d.g.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function rq(a,b,c,d){var e,f,g,h,l,k,n,p,r,q,t,u;return B(function(A){switch(A.g){case 1:var E={mode:"readonly",pa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?E.mode=c:Object.assign(E,c);e=E;a.transactionCount++;f=e.pa?3:1;g=0;case 2:if(h){A.N(4);break}g++;l=Math.round(Y());ta(A,5);k=a.g.transaction(b,e.mode);E=new vq(k);E=wq(E,d);return z(A,E,7);case 7:return n=A.l,p=Math.round(Y()),xq(a,l,p,g,void 0,b.join(),e),A.return(n);case 5:r=ua(A);q=Math.round(Y());t=bq(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof W&&!t.g)||g>=f)xq(a,l,q,g,t,b.join(),e),h=t;A.N(2);break;case 4:return A.return(Promise.reject(h))}})}
function xq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof W&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Qp("QUOTA_EXCEEDED",{dbName:Sp(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof W&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),Qp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),yq(a,!1,d,f,b,g.tag),Pp(e)):yq(a,!0,d,f,b,g.tag)}
function yq(a,b,c,d,e,f){Qp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.g.name};
function tq(a){this.g=a}
m=tq.prototype;m.add=function(a,b){return nq(this.g.add(a,b))};
m.autoIncrement=function(){return this.g.autoIncrement};
m.clear=function(){return nq(this.g.clear()).then(function(){})};
function zq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function Aq(a,b){return Bq(a,{query:b},function(c){return c.delete().then(function(){return Cq(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Aq(this,a):nq(this.g.delete(a))};
m.get=function(a){return nq(this.g.get(a))};
m.index=function(a){try{return new Dq(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new $p(a,this.g.name);throw b;}};
m.getName=function(){return this.g.name};
m.keyPath=function(){return this.g.keyPath};
function Bq(a,b,c){a=a.g.openCursor(b.query,b.direction);return Eq(a).then(function(d){return oq(d,c)})}
function vq(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=W;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function wq(a,b){var c=new Promise(function(d,e){try{jq(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
vq.prototype.abort=function(){this.g.abort();this.l=!0;throw new W("EXPLICIT_ABORT");};
vq.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new tq(a),this.i.set(a,b));return b};
function Dq(a){this.g=a}
Dq.prototype.delete=function(a){return Fq(this,{query:a},function(b){return b.delete().then(function(){return Cq(b)})})};
Dq.prototype.get=function(a){return nq(this.g.get(a))};
Dq.prototype.keyPath=function(){return this.g.keyPath};
Dq.prototype.unique=function(){return this.g.unique};
function Fq(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Eq(a).then(function(d){return oq(d,c)})}
function Gq(a,b){this.request=a;this.cursor=b}
function Eq(a){return nq(a).then(function(b){return b?new Gq(a,b):null})}
function Cq(a){a.cursor.continue(void 0);return Eq(a.request)}
Gq.prototype.delete=function(){return nq(this.cursor.delete()).then(function(){})};
Gq.prototype.update=function(a){return nq(this.cursor.update(a))};function Hq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new qq(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Xe,l=c.Ye,k=c.Tg,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Qp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Sp(a)});var t=f(),u=new vq(g.transaction);n&&
n(t,function(A){return q.oldVersion<A&&q.newVersion>=A},u);
u.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var q=g.result;l&&q.addEventListener("versionchange",function(){l(f())});
q.addEventListener("close",function(){Qp("IDB_UNEXPECTEDLY_CLOSED",{dbName:Sp(a),dbVersion:q.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Iq(a,b,c){c=void 0===c?{}:c;return Hq(a,b,c)}
function Jq(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return ta(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Xe)&&c.addEventListener("blocked",function(){e()}),z(g,mq(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=ua(g),bq(f,a,"",-1);})}
;function Kq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
Kq.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Iq(a,b,c)};
Kq.prototype.delete=function(a){a=void 0===a?{}:a;return Jq(this.name,a)};
function Lq(a,b){return new W("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Mq(a,b){if(!b)throw cq("openWithToken",Sp(a.name));return Nq(a)}
function Nq(a){function b(){var f,g,h,l,k,n,p,r,q,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",ta(u,2),z(u,a.l(a.name,a.options.version,d),4);case 4:for(var A=h=u.l,E=a.options,R=[],X=w(Object.keys(E.yb)),da=X.next();!da.done;da=X.next()){da=da.value;var gb=E.yb[da],Si=void 0===gb.Fg?Number.MAX_VALUE:gb.Fg;!(A.g.version>=gb.Hb)||A.g.version>=Si||A.g.objectStoreNames.contains(da)||R.push(da)}l=R;if(0===l.length){u.N(5);break}k=Object.keys(a.options.yb);n=h.objectStoreNames();
if(a.o<bo("ytidb_reopen_db_retries",0))return a.o++,h.close(),Pp(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:n})),u.return(b());if(!(a.m<bo("ytidb_remake_db_retries",1))){u.N(6);break}a.m++;return z(u,a.delete(),7);case 7:return Pp(new W("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:n})),u.return(b());case 6:throw new Zp(n,k);case 5:return u.return(h);case 2:p=ua(u);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){u.N(8);break}return z(u,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.l;q=r.g.version;if(void 0!==a.options.version&&q>a.options.version+1)throw r.close(),a.i=!1,Lq(a,q);return u.return(r);case 8:throw c(),p instanceof Error&&!V("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),bq(p,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Lq(a);if(a.g)return a.g;var d={Ye:function(f){f.close()},
closed:c,Tg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Oq=new Kq("YtIdbMeta",{yb:{databases:{Hb:1}},upgrade:function(a,b){b(1)&&sq(a,"databases",{keyPath:"actualName"})}});
function Pq(a,b){var c;return B(function(d){if(1==d.g)return z(d,Mq(Oq,b),2);c=d.l;return d.return(rq(c,["databases"],{pa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return nq(f.g.put(a,void 0)).then(function(){})})}))})}
function Qq(a,b){var c;return B(function(d){if(1==d.g)return a?z(d,Mq(Oq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function Rq(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],z(e,Mq(Oq,b),2)):3!=e.g?(d=e.l,z(e,rq(d,["databases"],{pa:!0,mode:"readonly"},function(f){c.length=0;return Bq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return Cq(g)})}),3)):e.return(c)})}
function Sq(a){return Rq(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Tq,Uq=new function(){}(new function(){});
function Vq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Mp();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=to)f=/WebKit\/([0-9]+)/.exec(Qa()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Qa()),f=!(f&&602<=parseInt(f[1],10)));if(f||pc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ta(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return z(e,Pq(d,Uq),4);case 4:return z(e,Qq("yt-idb-test-do-not-use",Uq),5);case 5:return e.return(!0);case 2:return ua(e),e.return(!1)}})}
function Wq(){if(void 0!==Tq)return Tq;Op=!0;return Tq=Vq().then(function(a){Op=!1;var b;if(null!=(b=Lp())&&b.g){var c;b={hasSucceededOnce:(null==(c=Mp())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Lp())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Xq(){return D("ytglobal.idbToken_")||void 0}
function Yq(){var a=Xq();return a?Promise.resolve(a):Wq().then(function(b){(b=b?Uq:void 0)&&H("ytglobal.idbToken_",b);return b})}
;new Ol;function Zq(a){if(!ap())throw a=new W("AUTH_INVALID",{dbName:a}),Pp(a),a;var b=bp();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function $q(a,b,c,d){var e,f,g,h,l,k;return B(function(n){switch(n.g){case 1:return f=null!=(e=Error().stack)?e:"",z(n,Yq(),2);case 2:g=n.l;if(!g)throw h=cq("openDbImpl",a,b),V("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Pp(h),h;Rp(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Zq(a);ta(n,3);return z(n,Pq(l,g),5);case 5:return z(n,Iq(l.actualName,b,d),6);case 6:return n.return(n.l);case 3:return k=ua(n),ta(n,7),z(n,Qq(l.actualName,g),9);case 9:n.g=
8;n.o=0;break;case 7:ua(n);case 8:throw k;}})}
function ar(a,b,c){c=void 0===c?{}:c;return $q(a,b,!1,c)}
function br(a,b,c){c=void 0===c?{}:c;return $q(a,b,!0,c)}
function cr(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return z(e,Yq(),2);if(3!=e.g){c=e.l;if(!c)return e.return();Rp(a);d=Zq(a);return z(e,Jq(d.actualName,b),3)}return z(e,Qq(d.actualName,c),0)})}
function dr(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?z(e,Jq(d.actualName,b),2):z(e,Qq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function er(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return z(d,Yq(),2);if(3!=d.g){b=d.l;if(!b)return d.return();Rp("LogsDatabaseV2");return z(d,Sq(b),3)}c=d.l;return z(d,dr(c,a,b),0)})}
function fr(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return z(d,Yq(),2);if(3!=d.g){c=d.l;if(!c)return d.return();Rp(a);return z(d,Jq(a,b),3)}return z(d,Qq(a,c),0)})}
;function gr(a,b){Kq.call(this,a,b);this.options=b;Rp(a)}
y(gr,Kq);function hr(a,b){var c;return function(){c||(c=new gr(a,b));return c}}
gr.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ac?br:ar)(a,b,Object.assign({},c))};
gr.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ac?fr:cr)(this.name,a)};
function ir(a,b){return hr(a,b)}
;var jr={},kr=ir("ytGcfConfig",{yb:(jr.coldConfigStore={Hb:1},jr.hotConfigStore={Hb:1},jr),Ac:!1,upgrade:function(a,b){b(1)&&(zq(sq(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),zq(sq(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function lr(a){return Mq(kr(),a)}
function mr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},z(g,lr(c),2);case 2:return e=g.l,z(g,e.clear("hotConfigStore"),3);case 3:return z(g,uq(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function nr(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},z(h,lr(d),2);case 2:return f=h.l,z(h,f.clear("coldConfigStore"),3);case 3:return z(h,uq(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function or(a){var b,c;return B(function(d){return 1==d.g?z(d,lr(a),2):3!=d.g?(b=d.l,c=void 0,z(d,rq(b,["coldConfigStore"],{mode:"readwrite",pa:!0},function(e){return Fq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function pr(a){var b,c;return B(function(d){return 1==d.g?z(d,lr(a),2):3!=d.g?(b=d.l,c=void 0,z(d,rq(b,["hotConfigStore"],{mode:"readwrite",pa:!0},function(e){return Fq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function qr(){gc.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],H("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(qr,gc);qr.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.l.length=0;gc.prototype.Ba.call(this)};function rr(){this.l=0;this.i=new qr}
function sr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!V("start_client_gcf")){g.N(0);break}c&&(a.m=c,H("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=Xq();if(!d){g.N(3);break}if(c){g.N(4);break}return z(g,pr(d),5);case 5:e=g.l,c=null==(f=e)?void 0:f.config;case 4:return z(g,mr(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function tr(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!V("start_client_gcf"))return h.N(0);a.coldHashData=b;H("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Xq())?c?h.N(4):z(h,or(d),5):h.N(0)}4!=h.g&&(e=h.l,c=null==(f=e)?void 0:f.config);if(!c)return h.N(0);g=c.configData;return z(h,nr(c,b,g,d),0)})}
rr.prototype.g=function(a){this.hotHashData=a;H("yt.gcf.config.hotHashData",this.hotHashData||null)};function ur(){return"INNERTUBE_API_KEY"in Xn&&"INNERTUBE_API_VERSION"in Xn}
function vr(){return{Zf:U("INNERTUBE_API_KEY"),ag:U("INNERTUBE_API_VERSION"),Wc:U("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ce:U("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),bg:U("INNERTUBE_CONTEXT_CLIENT_NAME",1),de:U("INNERTUBE_CONTEXT_CLIENT_VERSION"),fe:U("INNERTUBE_CONTEXT_HL"),ee:U("INNERTUBE_CONTEXT_GL"),cg:U("INNERTUBE_HOST_OVERRIDE")||"",eg:!!U("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),dg:!!U("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:U("SERIALIZED_CLIENT_CONFIG_DATA")}}
function wr(a){var b={client:{hl:a.fe,gl:a.ee,clientName:a.ce,clientVersion:a.de,configInfo:a.Wc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=U("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=co();0<c.length&&(b.request={internalExperimentFlags:c});xr(a,void 0,b);yr(void 0,b);zr(void 0,b);Ar(a,void 0,b);Br(void 0,b);V("start_client_gcf")&&Cr(void 0,b);U("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&
(b.user={onBehalfOfUser:U("DELEGATED_SESSION_ID")});!V("fill_delegate_context_in_gel_killswitch")&&(a=U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(qo(U("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function xr(a,b,c){a=a.ce;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=uf(b,Bn,96)||new Bn;var d=To();d=Object.keys(Ln).indexOf(d);d=-1===d?null:d;null!==d&&Bf(c,3,d);vf(b,Bn,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=To())}
function yr(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=uf(a,Hn,7)||new Hn,L(b,4,c),vf(a,Hn,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function zr(a,b){var c;if(V("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?pf(a,95,Ue(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ar(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=uf(b,An,62))?d:new An;L(c,6,a.appInstallData);vf(b,An,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Br(a,b){a:{var c=Zo();if(c){var d=Vo[c.type||"unknown"]||"CONN_UNKNOWN";c=Vo[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?Bf(a,61,Wo[d]):b&&(b.client.connectionType=d));V("web_log_effective_connection_type")&&(d=Zo(),d=null!=d&&d.effectiveType?Yo.hasOwnProperty(d.effectiveType)?Yo[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Bf(a,94,Xo[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Dr(a,b,c){c=void 0===c?{}:c;var d={};U("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":U("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||U("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Ih||U("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Hh;else{So.g||(So.g=new So);a={};if(c=Yf([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(U("SESSION_INDEX",0)),c=isNaN(c)?0:c),V("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Xn||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Xn&&(a["X-Goog-PageId"]=U("DELEGATED_SESSION_ID"));V("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Cr(a,b){if(!rr.g){var c=new rr;rr.g=c}c=rr.g;var d=Y()-c.l;if(0!==c.l&&d<bo("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=uf(a,An,62))?g:new An;L(b,1,c);L(b,3,d);b.g(e);vf(a,An,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Er="undefined"!==typeof TextEncoder?new TextEncoder:null,Fr=Er?function(a){return Er.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Gr=D("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.Ec;Q.prototype.publish=Q.prototype.re;Q.prototype.clear=Q.prototype.clear;H("ytPubsub2Pubsub2Instance",Gr);H("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});H("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});H("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});H("ytPubsub2Pubsub2SkipSubKey",null);function Hr(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={yi:a,xi:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Ir=void 0,Jr=void 0;function Kr(){if(!Jr){var a=U("WORKER_SERIALIZATION_URL");Jr=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?$a(a):null:null}return Jr||void 0}
function Lr(){var a=Kr();Ir||void 0===a||(Ir=new Worker(Ya(a),void 0));return Ir}
;var Mr=bo("max_body_size_to_compress",5E5),Nr=bo("min_body_size_to_compress",500),Or=!0,Pr=0,Qr=0,Rr=bo("compression_performance_threshold_lr",250),Sr=bo("slow_compressions_before_abandon_count",4),Tr=!1,Ur=new Map,Vr=1,Wr=!0;function Xr(){if("function"===typeof Worker&&Kr()&&!Tr){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Ur.get(c.key);d&&(Yr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Ur.delete(c.key))}},b=Lr();
b&&(b.addEventListener("message",a),b.onerror=function(){Ur.clear()},Tr=!0)}}
function Zr(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Or)try{try{var g=(new Blob(b.split(""))).size}catch(n){jo(n),g=null}if(null!=g&&(g>Mr||g<Nr))d(a,c);else{if(V("gzip_gel_with_worker")&&(V("initial_gzip_use_main_thread")&&!Wr||!V("initial_gzip_use_main_thread"))){Tr||Xr();var h=Lr();if(h&&!e){Ur.set(Vr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Vr});Vr++;return}}var l=Fr(b);b=(b=void 0,{});b.Af=!0;var k=new vn(b);
k.push(l,!0);if(k.err)throw k.msg||wm[k.err];Yr(k.result,f,a,c,d)}}catch(n){jo(n),d(a,c)}else d(a,c)}
function Yr(a,b,c,d,e){Wr=!1;var f=Y();b.ticks.gelc=f;Qr++;V("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Rr&&(Pr++,V("abandon_compression_after_N_slow_zips")?Qr===bo("compression_disable_point")&&Pr>Sr&&(Or=!1):Or=!1);V("gel_compression_csi_killswitch")||!V("log_gel_compression_latency")&&!V("log_gel_compression_latency_lr")||Hr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function $r(a){a=Object.assign({},a);delete a.Authorization;var b=Yf();if(b){var c=new zl;c.update(U("INNERTUBE_API_KEY"));c.update(b);a.hash=je(c.digest(),3)}return a}
;var as;function bs(){as||(as=new Kp("yt.innertube"));return as}
function cs(a,b,c,d){if(d)return null;d=bs().get("nextId",!0)||1;var e=bs().get("requests",!0)||{};e[d]={method:a,request:b,authState:$r(c),requestTime:Math.round(Y())};bs().set("nextId",d+1,86400,!0);bs().set("requests",e,86400,!0);return d}
function ds(a){var b=bs().get("requests",!0)||{};delete b[a];bs().set("requests",b,86400,!0)}
function es(a){var b=bs().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState;var f=$r(Dr(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),fs(a,d.method,e,{}));delete b[c]}}bs().set("requests",b,86400,!0)}}
;function gs(a){this.Zb=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Lb=!1;var b;this.Ie=null!=(b=a.Ie)?b:100;var c;this.ze=null!=(c=a.ze)?c:1;var d;this.we=null!=(d=a.we)?d:2592E6;var e;this.se=null!=(e=a.se)?e:12E4;var f;this.ye=null!=(f=a.ye)?f:5E3;var g;this.Z=null!=(g=a.Z)?g:void 0;this.jc=!!a.jc;var h;this.ec=null!=(h=a.ec)?h:.1;var l;this.vc=null!=(l=a.vc)?l:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Lb&&(this.Lb=a.Lb);a.Zb&&(this.Zb=a.Zb);this.aa=a.aa;this.Ea=a.Ea;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.kd=a.kd;this.gd=a.gd;hs(this)&&(!this.aa||this.aa("networkless_logging"))&&is(this)}
function is(a){hs(a)&&!a.Lb&&(a.g=!0,a.jc&&Math.random()<=a.ec&&a.fa.af(a.Z),js(a),a.ia.ya()&&a.Vb(),a.ia.qa(a.kd,a.Vb.bind(a)),a.ia.qa(a.gd,a.Gd.bind(a)))}
m=gs.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(hs(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&ks(c,d)}).catch(function(e){ks(c,d);
ls(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(hs(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(1==l.g)return z(l,d.fa.set(e,d.Z).catch(function(k){ls(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
ls(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(hs(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.fa.ob(d.id,c.Z):e=!0;c.ia.gb&&c.aa&&c.aa("vss_network_hint")&&c.ia.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.ob(d.id,c.Z)}).catch(function(g){ls(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Vb=function(){var a=this;if(!hs(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Ea.Ia(function(){var b;return B(function(c){if(1==c.g)return z(c,a.fa.Td("NEW",a.Z),2);if(3!=c.g)return b=c.l,b?z(c,ks(a,b),3):(a.Gd(),c.return());a.l&&(a.l=0,a.Vb());c.g=0})},this.Ie))};
m.Gd=function(){this.Ea.xa(this.l);this.l=0};
function ks(a,b){var c;return B(function(d){switch(d.g){case 1:if(!hs(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.N(2);break}return z(d,a.fa.qg(b.id,a.Z),3);case 3:(c=d.l)||a.rb(Error("The request cannot be found in the database."));case 2:if(ms(a,b,a.we)){d.N(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.N(5);break}return z(d,a.fa.ob(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=ns(a,b));if(!b){d.N(0);
break}if(!b.skipRetry||void 0===b.id){d.N(8);break}return z(d,a.fa.ob(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function ns(a,b){if(!hs(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(n){switch(n.g){case 1:g=os(f);(h=ps(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.vc)){n.N(2);break}if(!a.ia.zc){n.N(3);break}return z(n,a.ia.zc(),3);case 3:if(a.ia.ya()){n.N(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:
l.id)){n.N(6);break}return z(n,a.fa.qd(b.id,a.Z,!1),6);case 6:return n.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.vc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){n.N(8);break}return b.sendCount<a.ze?z(n,a.fa.qd(b.id,a.Z,!0,h?!1:void 0),12):z(n,a.fa.ob(b.id,a.Z),8);case 12:a.Ea.Ia(function(){a.ia.ya()&&a.Vb()},a.ye);
case 8:c(e,f),n.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.N(2):z(h,a.fa.ob(b.id,a.Z),2);a.ia.gb&&a.aa&&a.aa("vss_network_hint")&&a.ia.gb(!0);d(e,f);h.g=0})};
return b}
function ms(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function js(a){if(!hs(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Td("QUEUED",a.Z).then(function(b){b&&!ms(a,b,a.se)?a.Ea.Ia(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.N(2):z(c,a.fa.qd(b.id,a.Z),2);js(a);c.g=0})}):a.ia.ya()&&a.Vb()})}
function ls(a,b){a.Ne&&!a.ia.ya()?a.Ne(b):a.handleError(b)}
function hs(a){return!!a.Z||a.Zb}
function os(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function ps(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var qs;
function rs(){if(qs)return qs();var a={};qs=ir("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Hb:2},a),Ac:!1,upgrade:function(b,c,d){c(2)&&sq(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),zq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return qs()}
;function ss(a){return Mq(rs(),a)}
function ts(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},z(g,ss(b),2);if(3!=g.g)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:U("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),z(g,uq(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();us(c);return g.return(f)})}
function vs(a,b){var c,d,e,f,g,h,l,k;return B(function(n){if(1==n.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},z(n,ss(b),2);if(3!=n.g)return d=n.l,e=U("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),l="prev",V("use_fifo_for_networkless")&&(l="next"),k=void 0,z(n,rq(d,["LogsRequestsStore"],{mode:"readwrite",pa:!0},function(p){return Fq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:l},function(r){r.cursor.value&&
(k=r.cursor.value,"NEW"===a&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=Y();us(c);return n.return(k)})}
function ws(a,b){var c;return B(function(d){if(1==d.g)return z(d,ss(b),2);c=d.l;return d.return(rq(c,["LogsRequestsStore"],{mode:"readwrite",pa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",nq(f.g.put(g,void 0)).then(function(){return g})})}))})}
function xs(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return z(f,ss(b),2);e=f.l;return f.return(rq(e,["LogsRequestsStore"],{mode:"readwrite",pa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),nq(h.g.put(l,void 0)).then(function(){return l})):gq.resolve(void 0)})}))})}
function ys(a,b){var c;return B(function(d){if(1==d.g)return z(d,ss(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function zs(a){var b,c;return B(function(d){if(1==d.g)return z(d,ss(a),2);b=d.l;c=Y()-2592E6;return z(d,rq(b,["LogsRequestsStore"],{mode:"readwrite",pa:!0},function(e){return Bq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return Cq(f)})})}),0)})}
function As(){B(function(a){return z(a,er(),0)})}
function us(a){V("nwl_csi_killswitch")||Hr("networkless_performance",a,{sampleRate:1})}
;var Bs={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var Cs={},Ds=ir("ServiceWorkerLogsDatabase",{yb:(Cs.SWHealthLog={Hb:1},Cs),Ac:!0,upgrade:function(a,b){b(1)&&zq(sq(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Es(a){return Mq(Ds(),a)}
function Fs(a){var b,c;B(function(d){if(1==d.g)return z(d,Es(a),2);b=d.l;c=Y()-2592E6;return z(d,rq(b,["SWHealthLog"],{mode:"readwrite",pa:!0},function(e){return Bq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return Cq(f)})})}),0)})}
function Gs(a){var b;return B(function(c){if(1==c.g)return z(c,Es(a),2);b=c.l;return z(c,b.clear("SWHealthLog"),0)})}
;var Hs={},Is=0;function Js(a){var b=new Image,c=""+Is++;Hs[c]=b;b.onload=b.onerror=function(){delete Hs[c]};
b.src=a}
;function Ks(){this.g=new Map;this.l=!1}
function Ls(){if(!Ks.g){var a=D("yt.networkRequestMonitor.instance")||new Ks;H("yt.networkRequestMonitor.instance",a);Ks.g=a}return Ks.g}
Ks.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Ks.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.l?!0:null};
Ks.prototype.removeParams=function(a){return a.split("?")[0]};
Ks.prototype.removeParams=Ks.prototype.removeParams;Ks.prototype.isEndpointCFR=Ks.prototype.isEndpointCFR;Ks.prototype.requestComplete=Ks.prototype.requestComplete;Ks.getInstance=Ls;var Ms;function Ns(){Ms||(Ms=new Kp("yt.offline"));return Ms}
function Os(a){if(V("offline_error_handling")){var b=Ns().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Ns().set("errors",b,2592E3,!0)}}
;function Z(){$c.call(this);var a=this;this.i=!1;this.l=bg();this.l.qa("networkstatus-online",function(){if(a.i&&V("offline_error_handling")){var b=Ns().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new $o(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;io(d)}Ns().set("errors",{},2592E3,!0)}}})}
y(Z,$c);function Ps(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;H("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
m=Z.prototype;m.ya=function(){return this.l.ya()};
m.gb=function(a){this.l.l=a};
m.yf=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.kf=function(){this.i=!0};
m.qa=function(a,b){return this.l.qa(a,b)};
m.zc=function(a){a=$f(this.l,a);a.then(function(b){V("use_cfr_monitor")&&Ls().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.zc;Z.prototype.listen=Z.prototype.qa;Z.prototype.enableErrorFlushing=Z.prototype.kf;Z.prototype.getWindowStatus=Z.prototype.yf;Z.prototype.networkStatusHint=Z.prototype.gb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=Ps;function Qs(a){a=void 0===a?{}:a;$c.call(this);var b=this;this.l=this.s=0;this.i=Ps();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.xc?(this.xc=a.xc,c("networkstatus-online",function(){Rs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Rs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ad(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ad(b,"publicytnetworkstatus-offline")})))}
y(Qs,$c);Qs.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Qs.prototype.gb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Qs.prototype.zc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return V("skip_network_check_if_cfr")&&Ls().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function Rs(a,b){a.xc?a.l?(cg.xa(a.s),a.s=cg.Ia(function(){a.o!==b&&(ad(a,b),a.o=b,a.l=Y())},a.xc-(Y()-a.l))):(ad(a,b),a.o=b,a.l=Y()):ad(a,b)}
;var Ss;function Ts(){var a=gs.call;Ss||(Ss=new Qs({di:!0,Qh:!0}));a.call(gs,this,{fa:{af:zs,ob:ys,Td:vs,qg:ws,qd:xs,set:ts},ia:Ss,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;jo(new $o(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else io(b)},
rb:jo,sendFn:Us,now:Y,Ne:Os,Ea:Jp(),kd:"publicytnetworkstatus-online",gd:"publicytnetworkstatus-offline",jc:!0,ec:.1,vc:bo("potential_esf_error_limit",10),aa:V,Lb:!(ap()&&"www.youtube-nocookie.com"!==Yb(document.location.toString()))});this.i=new Ol;V("networkless_immediately_drop_all_requests")&&As();fr("LogsDatabaseV2")}
y(Ts,gs);function Vs(){var a=D("yt.networklessRequestController.instance");a||(a=new Ts,H("yt.networklessRequestController.instance",a),V("networkless_logging")&&Yq().then(function(b){a.Z=b;is(a);a.i.resolve();a.jc&&Math.random()<=a.ec&&a.Z&&Fs(a.Z);V("networkless_immediately_drop_sw_health_store")&&Ws(a)}));
return a}
Ts.prototype.writeThenSend=function(a,b){b||(b={});b=Xs(a,b);ap()||(this.g=!1);gs.prototype.writeThenSend.call(this,a,b)};
Ts.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Xs(a,b);ap()||(this.g=!1);gs.prototype.sendThenWrite.call(this,a,b,c)};
Ts.prototype.sendAndWrite=function(a,b){b||(b={});b=Xs(a,b);ap()||(this.g=!1);gs.prototype.sendAndWrite.call(this,a,b)};
Ts.prototype.awaitInitialization=function(){return this.i.promise};
function Ws(a){var b;B(function(c){if(!a.Z)throw b=cq("clearSWHealthLogsDb"),b;return c.return(Gs(a.Z).catch(function(d){a.handleError(d)}))})}
function Us(a,b,c,d){d=void 0===d?!1:d;b=V("web_fp_via_jspb")?Object.assign({},b):b;V("use_cfr_monitor")&&Ys(a,b);if(V("use_request_time_ms_header"))b.headers&&so(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Fo(a,void 0,"POST",f,void 0);else if(U("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Fo(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new Na({url:a});if(l.i&&l.l||l.m){var k=Xb(a.match(Wb)[5]||null),n;if(!(n=!k||!k.endsWith("/aclk"))){var p=a.search(ec),r=dc(a,0,"ri",p);if(0>r)var q=null;else{var t=a.indexOf("&",r);if(0>t||t>p)t=p;q=Vb(a.slice(r+3,-1!==t?t:0))}n="1"!==q}var u=!n;break b}}catch(E){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(E){}A=!1}c=A?!0:!1}else c=!1;c||Js(a)}}else b.compress?
b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Zr(a,b.postBody,b,Jo,d)):Zr(a,JSON.stringify(b.postParams),b,Io,d):Jo(a,b)}
function Xs(a,b){V("use_event_time_ms_header")&&so(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function Ys(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ls().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ls().requestComplete(a,!0);d(e,f)}}
;var Zs=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};H("ytNetworklessLoggingInitializationOptions",Zs);function $s(a){var b=this;this.config_=null;a?this.config_=a:ur()&&(this.config_=vr());dp(function(){es(b)},5E3)}
$s.prototype.isReady=function(){!this.config_&&ur()&&(this.config_=vr());return!!this.config_};
function fs(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||V("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=cs(b,c,k,l)),u)){var A=g.onSuccess,E=g.onFetchSuccess;g.onSuccess=function(da,gb){ds(u);A(da,gb)};
c.onFetchSuccess=function(da,gb){ds(u);E(da,gb)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Vs().writeThenSend(q,g):Vs().sendAndWrite(q,g);
else if(d.compress){var R=!d.networklessOptions.writeThenSend;if(g.postBody){var X=g.postBody;"string"!==typeof X&&(X=JSON.stringify(g.postBody));Zr(q,X,g,Jo,R)}else Zr(q,JSON.stringify(g.postParams),g,Io,R)}else V("web_all_payloads_via_jspb")?Jo(q,g):Io(q,g)}catch(da){if("InvalidAccessError"===da.name)u&&(ds(u),u=0),jo(Error("An extension is blocking network request."));else throw da;}u&&dp(function(){es(a)},5E3)}
!U("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&jo(new $o("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new $o("innertube xhrclient not ready",b,c,d);io(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.cg)&&(h=f);var l=a.config_.eg||!1,k=Dr(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.ag+"/"+b,p={alt:"json"},r=a.config_.dg&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.Zf);var q=ro(""+h+n,p||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Zs.isNwlInitialized?Wq().then(function(t){e(t)}):e(!1)}
;var at=0;H("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++at});H("ytEventsEventsListeners",C.ytEventsEventsListeners||{});H("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});function bt(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var ct=C.ytPubsubPubsubInstance||new Q,dt=C.ytPubsubPubsubSubscribedKeys||{},et=C.ytPubsubPubsubTopicToKeys||{},ft=C.ytPubsubPubsubIsSynchronous||{};Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.Ec;Q.prototype.publish=Q.prototype.re;Q.prototype.clear=Q.prototype.clear;H("ytPubsubPubsubInstance",ct);H("ytPubsubPubsubTopicToKeys",et);H("ytPubsubPubsubIsSynchronous",ft);H("ytPubsubPubsubSubscribedKeys",dt);var gt=Symbol("injectionDeps");function ht(){this.key=rr}
function it(){this.l=new Map;this.g=new Map}
it.prototype.resolve=function(a){return a instanceof ht?jt(this,a.key,[],!0):jt(this,a,[])};
function jt(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(void 0!==d.Yg)var e=d.Yg;else if(d.Xg)e=d[gt]?kt(a,d[gt],c):[],e=d.Xg.apply(d,x(e));else if(d.Wg){e=d.Wg;var f=e[gt]?kt(a,e[gt],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ti||a.g.set(b,e);return e}
function kt(a,b,c){return b?b.map(function(d){return d instanceof ht?jt(a,d.key,c,!0):jt(a,d,c)}):[]}
;var lt;function mt(){lt||(lt=new it);return lt}
;var nt=window;function ot(){var a,b;return"h5vcc"in nt&&(null==(a=nt.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=nt.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in nt&&nt.performance.mark&&nt.performance.measure?2:0}
function pt(a){switch(ot()){case 1:nt.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:nt.performance.mark(a+"-start");break;case 0:break;default:Sb()}}
function qt(a){switch(ot()){case 1:nt.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";nt.performance.mark(c);nt.performance.measure(a,b,c);break;case 0:break;default:Sb()}}
;var rt=V("web_enable_lifecycle_monitoring")&&0!==ot(),st=V("web_enable_lifecycle_monitoring");function tt(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Jp():d;this.m=c;this.l=d;this.i=new Ol;this.g=a;for(a={eb:0};a.eb<this.g.length;a={uc:void 0,eb:a.eb},a.eb++)a.uc=this.g[a.eb],c=function(e){return function(){e.uc.Zc();b.g[e.eb].wc=!0;b.g.every(function(f){return!0===f.wc})&&b.i.resolve()}}(a),d=this.l.ab(c,ut(this,a.uc)),this.g[a.eb]=Object.assign({},a.uc,{Zc:c,
jobId:d})}
function vt(a){var b=Array.from(a.g.keys()).sort(function(d,e){return ut(a,a.g[e])-ut(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.wc||(a.l.xa(c.jobId),a.l.ab(c.Zc,10))}
tt.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.wc||this.l.xa(b.jobId),b.wc=!0;this.i.resolve()};
function ut(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function wt(a){this.state=a;this.i=[];this.o=void 0;this.u={};rt&&pt(this.state)}
wt.prototype.install=function(a){this.i.push(a);return this};
function xt(a){rt&&qt(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Wa}):d.from===a.state&&"none"===d.Wa});
if(b){a.l&&(vt(a.l),a.l=void 0);st&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";rt&&pt(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(zt(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function zt(a,b){var c=b.filter(function(e){return 10===At(a,e)}),d=b.filter(function(e){return 10!==At(a,e)});
return a.u.ri?function(){var e=Ca.apply(0,arguments);return B(function(f){if(1==f.g)return z(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ca.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
wt.prototype.F=function(a){for(var b=Ca.apply(1,arguments),c=Jp(),d=w(a),e=d.next(),f={};!e.done;f={Qb:void 0},e=d.next())f.Qb=e.value,c.Gb(function(g){return function(){Bt(g.Qb.name);g.Qb.Kc.apply(g.Qb,x(b));Ct(g.Qb.name)}}(f))};
wt.prototype.D=function(a){var b=Ca.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=Jp(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.N(0);f.ub=e.value;f.Xb=void 0;g=function(l){return function(){Bt(l.ub.name);var k=l.ub.Kc.apply(l.ub,x(b));"function"===typeof(null==k?void 0:k.then)?l.Xb=k.then(function(){Ct(l.ub.name)}):Ct(l.ub.name)}}(f);
c.Gb(g);return f.Xb?z(h,f.Xb,3):h.N(3)}f={ub:void 0,Xb:void 0};e=d.next();return h.N(2)})};
wt.prototype.s=function(a){var b=Ca.apply(1,arguments),c=this,d=a.map(function(e){return{Zc:function(){Bt(e.name);e.Kc.apply(e,x(b));Ct(e.name)},
priority:At(c,e)}});
d.length&&(this.l=new tt(d))};
function At(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function Bt(a){rt&&a&&pt(a)}
function Ct(a){rt&&a&&qt(a)}
ea.Object.defineProperties(wt.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Dt(a){wt.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Wa:"application_navigating",action:this.A},{from:"application_navigating",Wa:"none",action:this.B},{from:"application_navigating",Wa:"application_navigating",action:function(){}},
{from:"none",Wa:"none",action:function(){}}]}
var Et;y(Dt,wt);Dt.prototype.A=function(a,b){var c=this;this.g=dp(function(){"application_navigating"===c.m&&xt(c)},5E3);
a(null==b?void 0:b.event)};
Dt.prototype.B=function(a,b){this.g&&(cg.xa(this.g),this.g=null);a(null==b?void 0:b.event)};
function Ft(){Et||(Et=new Dt);return Et}
;var Gt=[];H("yt.logging.transport.getScrapedGelPayloads",function(){return Gt});function Ht(){this.store={};this.g={}}
Ht.prototype.storePayload=function(a,b){a=It(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
Ht.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Jt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Ht.prototype.extractMatchingEntries=function(a){a=Jt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Ht.prototype.getSequenceCount=function(a){a=Jt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Jt(a,b){var c=It(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&It(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Kt(b.auth,g[0])){var h=b.isJspb;Kt(void 0===h?"undefined":h?"true":"false",g[1])&&Kt(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Kt(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Kt(a,b){return void 0===a||"undefined"===a?!0:a===b}
Ht.prototype.getSequenceCount=Ht.prototype.getSequenceCount;Ht.prototype.extractMatchingEntries=Ht.prototype.extractMatchingEntries;Ht.prototype.smartExtractMatchingEntries=Ht.prototype.smartExtractMatchingEntries;Ht.prototype.storePayload=Ht.prototype.storePayload;function It(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Lt=bo("initial_gel_batch_timeout",2E3),Mt=bo("gel_queue_timeout_max_ms",6E4),Nt=Math.pow(2,16)-1,Ot=bo("gel_min_batch_size",5),Pt=void 0;function Qt(){this.m=this.g=this.l=0;this.i=!1}
var Rt=new Qt,St=new Qt,Tt=new Qt,Ut=new Qt,Vt,Wt=!0,Xt=1,Yt=new Map,Zt=C.ytLoggingTransportTokensToCttTargetIds_||{};H("ytLoggingTransportTokensToCttTargetIds_",Zt);var $t=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};H("ytLoggingTransportTokensToJspbCttTargetIds_",$t);var au={};function bu(){var a=D("yt.logging.ims");a||(a=new Ht,H("yt.logging.ims",a));return a}
function cu(a,b){if("log_event"===a.endpoint){du(a);var c=eu(a),d=fu(a.payload)||"",e=gu(d),f=200;if(e){if(!1===e.enabled&&!V("web_payload_policy_disabled_killswitch"))return;f=hu(e.tier);if(400===f){iu(a,b);return}}au[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};bu().storePayload(e,a.payload);ju(b,c,!1,e,ku(d))}}
function lu(a,b,c){if("log_event"===b.endpoint){du(void 0,b);var d=eu(b,!0),e=gu(a),f=200;if(e){if(!1===e.enabled&&!V("web_payload_policy_disabled_killswitch"))return;f=hu(e.tier);if(400===f){mu(a,b,c);return}}au[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};bu().storePayload(e,b.payload.toJSON());ju(c,d,!0,e,ku(a))}}
function ju(a,b,c,d,e){function f(){nu(V("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(Pt=new a);a=bo("tvhtml5_logging_max_batch_ads_fork")||bo("web_logging_max_batch")||100;var g=Y(),h=ou(c,d.tier),l=h.m;e&&(h.i=!0);e=0;d&&(e=bu().getSequenceCount(d));1E3<=e?f():e>=a?Vt||(Vt=pu(function(){f();Vt=void 0},0)):10<=g-l&&(qu(c,d.tier),h.m=g)}
function iu(a,b){if("log_event"===a.endpoint){du(a);var c=eu(a),d=new Map;d.set(c,[a.payload]);var e=fu(a.payload)||"";b&&(Pt=new b);return new Nd(function(f,g){Pt&&Pt.isReady()?ru(d,Pt,f,g,{bypassNetworkless:!0},!0,ku(e)):f()})}}
function mu(a,b,c){if("log_event"===b.endpoint){du(void 0,b);var d=eu(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(Pt=new c);return new Nd(function(f){Pt&&Pt.isReady()?su(e,Pt,f,{bypassNetworkless:!0},!0,ku(a)):f()})}}
function eu(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Sn;c.videoId?sf(d,1,Af,Ye(c.videoId)):c.playlistId&&sf(d,2,Af,Ye(c.playlistId));$t[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Zt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function nu(a,b,c){var d={writeThenSend:!0};d=void 0===d?{}:d;b=void 0===b?!1:b;new Nd(function(e,f){var g=ou(b,c),h=g.i;g.i=!1;tu(g.l);tu(g.g);g.g=0;Pt&&Pt.isReady()?void 0===c&&V("enable_web_tiered_gel")?uu(e,f,d,a,b,300,h):uu(e,f,d,a,b,c,h):(qu(b,c),e())})}
function uu(a,b,c,d,e,f,g){var h=Pt;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var l=new Map,k=new Map,n={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=V("enable_web_tiered_gel")?bu().smartExtractMatchingEntries({keys:[n,p],sizeLimit:1E3}):bu().extractMatchingEntries(p),l.set(d,b),su(l,h,a,c,!1,g)):(l=V("enable_web_tiered_gel")?bu().smartExtractMatchingEntries({keys:[n,p],sizeLimit:1E3}):bu().extractMatchingEntries(p),k.set(d,l),ru(k,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(au));for(k=b.next();!k.done;k=b.next())k=k.value,f=V("enable_web_tiered_gel")?bu().smartExtractMatchingEntries({keys:[n,p],sizeLimit:1E3}):bu().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&l.set(k,f),(V("web_fp_via_jspb_and_json")&&c.writeThenSend||!V("web_fp_via_jspb_and_json"))&&delete au[k];su(l,h,a,c,!1,g)}else{l=w(Object.keys(au));for(n=l.next();!n.done;n=l.next())n=n.value,p=V("enable_web_tiered_gel")?bu().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:n,tier:f},{isJspb:!1,cttAuthInfo:n}],sizeLimit:1E3}):bu().extractMatchingEntries({isJspb:!1,cttAuthInfo:n}),0<p.length&&k.set(n,p),(V("web_fp_via_jspb_and_json")&&c.writeThenSend||!V("web_fp_via_jspb_and_json"))&&delete au[n];ru(k,h,a,b,c,!1,g)}}
function qu(a,b){function c(){nu(void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=ou(a,b),e=d===Ut||d===Tt?5E3:Mt;V("web_gel_timeout_cap")&&!d.g&&(e=pu(function(){c()},e),d.g=e);
tu(d.l);e=U("LOGGING_BATCH_TIMEOUT",bo("web_gel_debounce_ms",1E4));V("shorten_initial_gel_batch_timeout")&&Wt&&(e=Lt);e=pu(function(){0<bo("gel_min_batch_size")?bu().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Ot&&c():c()},e);
d.l=e}
function ru(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),l=a.size,k=vu(g);a=w(a);var n=a.next();for(g={};!n.done;g={fd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,jd:void 0,hd:void 0},n=a.next()){var p=w(n.value);n=p.next().value;p=p.next().value;g.batchRequest=vb({context:wr(b.config_||vr())});if(!Ha(p)&&!V("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Zt[n])&&wu(g.batchRequest,n,p);delete Zt[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
n;xu(g.batchRequest,h,g.dangerousLogToVisitorSession);yu(e);g.jd=function(r){V("start_client_gcf")&&cg.Ia(function(){return B(function(q){return z(q,zu(r),0)})});
l--;l||c()};
g.fd=0;g.hd=function(r){return function(){r.fd++;if(e.bypassNetworkless&&1===r.fd)try{fs(b,k,r.batchRequest,Au({writeThenSend:!0},r.dangerousLogToVisitorSession,r.jd,r.hd,f)),Wt=!1}catch(q){io(q),d()}l--;l||c()}}(g);
try{fs(b,k,g.batchRequest,Au(e,g.dangerousLogToVisitorSession,g.jd,g.hd,f)),Wt=!1}catch(r){io(r),d()}}}
function su(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},l=new Map([].concat(x(a)));l=w(l);for(var k=l.next();!k.done;k=l.next()){var n=w(k.value).next().value,p=a.get(n);k=new Tn;var r=b.config_||vr(),q=new Kn,t=new Dn;L(t,1,r.fe);L(t,2,r.ee);Bf(t,16,r.bg);L(t,17,r.de);if(r.Wc){var u=r.Wc,A=new An;u.coldConfigData&&L(A,1,u.coldConfigData);u.appInstallData&&L(A,6,u.appInstallData);u.coldHashData&&L(A,3,u.coldHashData);u.hotHashData&&A.g(u.hotHashData);vf(t,An,62,A)}if((u=
C.devicePixelRatio)&&1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);pf(t,65,u)}u=U("EXPERIMENTS_TOKEN","");""!==u&&L(t,54,u);u=co();if(0<u.length){A=new Gn;for(var E=0;E<u.length;E++){var R=new En;L(R,1,u[E].key);sf(R,2,Fn,Ye(u[E].value));xf(A,15,En,R)}vf(q,Gn,5,A)}xr(r,t);yr(q);zr(t);Ar(r,t);Br(t);V("start_client_gcf")&&Cr(t);U("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&(r=new Jn,L(r,3,U("DELEGATED_SESSION_ID")));
!V("fill_delegate_context_in_gel_killswitch")&&(u=U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(A=uf(q,Jn,3)||new Jn,r=q,u=L(A,18,u),vf(r,Jn,3,u));r=t;u=w(Object.entries(qo(U("DEVICE",""))));for(A=u.next();!A.done;A=u.next())E=w(A.value),A=E.next().value,E=E.next().value,"cbrand"===A?L(r,12,E):"cmodel"===A?L(r,13,E):"cbr"===A?L(r,87,E):"cbrver"===A?L(r,88,E):"cos"===A?L(r,18,E):"cosver"===A?L(r,19,E):"cplatform"===A&&Bf(r,42,Uo(E));vf(q,Dn,1,t);vf(k,Kn,1,q);if(t=$t[n])a:{if(zf(t,1))q=1;
else if(t.getPlaylistId())q=2;else break a;vf(k,Sn,4,t);t=uf(k,Kn,1)||new Kn;r=uf(t,Jn,3)||new Jn;u=new In;L(u,2,n);Bf(u,1,q);xf(r,12,In,u);vf(t,Jn,3,r)}delete $t[n];n="visitorOnlyApprovedKey"===n;Bu()||pf(k,2,Ue(g));!n&&(q=U("EVENT_ID"))&&(t=Cu(),r=new Rn,L(r,1,q),pf(r,2,Ue(t)),vf(k,Rn,5,r));yu(d);if(V("jspb_serialize_with_worker")&&(q=Lr())&&d.writeThenSend){Yt.set(Xt,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:n,requestsOutstanding:h});q.postMessage({op:"gelBatchToSerialize",
batchRequest:k.toJSON(),clientEvents:p,key:Xt});Xt++;break}if(p){q=[];for(t=0;t<p.length;t++)try{q.push(new Pn(p[t]))}catch(da){io(new $o("Transport failed to deserialize "+String(p[t])))}p=q}else p=[];p=w(p);for(q=p.next();!q.done;q=p.next())xf(k,3,Pn,q.value);p={startTime:Y(),ticks:{},infos:{}};a:{Ke=!0;try{var X=JSON.stringify(k.toJSON(),bf);break a}finally{Ke=!1}X=void 0}p.ticks.geljspc=Y();V("log_jspb_serialize_latency")&&Hr("gel_jspb_serialize",p,{sampleRate:.1});Du(X,b,c,d,e,f,n,h)}}
function Du(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=vu(f);d=Au(d,g,function(l){V("start_client_gcf")&&cg.Ia(function(){return B(function(k){return z(k,zu(l),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;fs(b,f,"",d);Wt=!1}
function yu(a){V("always_send_and_write")&&(a.writeThenSend=!1)}
function Au(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Kh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:V("compress_gel")||V("compress_gel_lr")};Bu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function xu(a,b,c){Bu()||(a.requestTimeMs=String(b));V("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=U("EVENT_ID"))&&(c=Cu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Cu(){var a=U("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Nt/2));a++;a>Nt&&(a=1);Yn("BATCH_CLIENT_COUNTER",a);return a}
function wu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function du(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=ao("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))Gt=[],H("yt.logging.transport.enableScrapingForTest",!0),H("yt.logging.transport.scrapedPayloadsForTesting",Gt),H("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),H("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
H("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}H("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function Bu(){return V("use_request_time_ms_header")||V("lr_use_request_time_ms_header")}
function pu(a,b){return!1===V("embeds_transport_use_scheduler")?Ao(a,b):V("logging_avoid_blocking_during_navigation")||V("lr_logging_avoid_blocking_during_navigation")?dp(function(){if("none"===Ft().m)a();else{var c={};Ft().install((c.none={Kc:a},c))}},b):dp(a,b)}
function tu(a){V("transport_use_scheduler")?cg.xa(a):window.clearTimeout(a)}
function zu(a){var b,c,d,e,f,g,h,l,k,n;return B(function(p){if(1==p.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[zn.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[yn.name]:void 0;h=r;k=null==(l=d)?void 0:l.coldHashData;return(n=mt().resolve(new ht))?g?e?z(p,sr(n,g,e),2):z(p,sr(n,g),2):p.N(2):p.return()}return k?h?z(p,tr(n,k,h),0):z(p,tr(n,k),0):p.N(0)})}
function ou(a,b){b=void 0===b?200:b;return a?300===b?Ut:St:300===b?Tt:Rt}
function gu(a){if(V("enable_web_tiered_gel")){a=Bs[a||""];var b,c;if(null==mt().resolve(new ht))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:U("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function fu(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Bs[b])return b}
function hu(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function ku(a){return"gelDebuggingEvent"===a}
function vu(a){return(void 0===a?0:a)&&V("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var Eu=C.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",Eu);function Fu(a){Eu[a]=a in Eu?Eu[a]+1:0;return Eu[a]}
;var Gu=[];var Hu=C.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",Hu);var Iu=C.ytLoggingDocDocumentNonce_;
if(!Iu){var Ju;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Ku=Array(16),Lu=new Uint8Array(16);window.crypto.getRandomValues(Lu);for(var Mu=0;Mu<Ku.length;Mu++)Ku[Mu]=Lu[Mu];Ju=Ku;break a}catch(a){}for(var Nu=Array(16),Ou=0;16>Ou;Ou++){for(var Pu=Date.now(),Qu=0;Qu<Pu%23;Qu++)Nu[Ou]=Math.random();Nu[Ou]=Math.floor(256*Math.random())}if(vo)for(var Ru=1,Su=0;Su<vo.length;Su++)Nu[Ru%16]=Nu[Ru%16]^Nu[(Ru-1)%16]/4^vo.charCodeAt(Su),Ru++;Ju=Nu}for(var Tu=Ju,Uu=[],Vu=0;Vu<Tu.length;Vu++)Uu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Tu[Vu]&
63));Iu=Uu.join("");H("ytLoggingDocDocumentNonce_",Iu)}var Wu=Iu;function Xu(a){return U("client-screen-nonce-store",{})[void 0===a?0:a]}
function Yu(a,b){b=void 0===b?0:b;var c=U("client-screen-nonce-store");c||(c={},Yn("client-screen-nonce-store",c));c[b]=a}
function Zu(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
H("yt_logging_screen.getRootVeType",function(a){return U(Zu(void 0===a?0:a))});
function $u(){var a=U("csn-to-ctt-auth-info");a||(a={},Yn("csn-to-ctt-auth-info",a));return a}
function av(a){a=Xu(void 0===a?0:a);if(!a&&!U("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
H("yt_logging_screen.getCurrentCsn",av);function bv(a,b,c){var d=$u();(c=av(c))&&delete d[c];b&&(d[a]=b)}
H("yt_logging_screen.getCttAuthInfo",function(a){return $u()[a]});
H("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Xu(c)||b!==U(Zu(c)))if(bv(a,d,c),Yu(a,c),Yn(Zu(c),b),b=function(){setTimeout(function(){if(a)if(V("web_time_via_jspb")){var e=new Mn;L(e,1,Wu);L(e,2,a);var f=V("jspb_sparse_encoded_pivot")?new Pn([{}]):new Pn;null!=e?Ze(e,Mn):e=void 0;sf(f,111,Qn,e);var g=void 0;g=void 0===g?{}:g;e=!1;U("ytLoggingEventsDefaultDisabled",!1)&&(e=!0);e=e?null:$s;g=void 0===g?{}:g;var h=Math.round(g.timestamp||Y());pf(f,1,Ue(h<Number.MAX_SAFE_INTEGER?
h:0));h=new On;if(g.lact)pf(h,1,Ue(isFinite(g.lact)?g.lact:-1));else if(g.timestamp)pf(h,1,Ue(-1));else{var l=bt();pf(h,1,Ue(isFinite(l)?l:-1))}if(g.sequenceGroup&&!V("web_gel_sequence_info_killswitch")){l=g.sequenceGroup;var k=Fu(l),n=new Nn;pf(n,2,Ue(k));L(n,1,l);vf(h,Nn,3,n);g.endOfSequence&&delete Hu[g.sequenceGroup]}vf(f,On,33,h);(g.sendIsolatedPayload?mu:lu)("foregroundHeartbeatScreenAssociated",{endpoint:"log_event",payload:f,cttAuthInfo:g.cttAuthInfo,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession},
e)}else h={clientDocumentNonce:Wu,clientScreenNonce:a},e=void 0===e?{}:e,f=$s,U("ytLoggingEventsDefaultDisabled",!1)&&$s===$s&&(f=null),V("web_all_payloads_via_jspb")?(e.timestamp||(e.lact=bt(),e.timestamp=Y()),Gu.push({ii:"foregroundHeartbeatScreenAssociated",payload:h,options:e})):(e=void 0===e?{}:e,g={},l=Math.round(e.timestamp||Y()),g.eventTimeMs=l<Number.MAX_SAFE_INTEGER?l:0,g.foregroundHeartbeatScreenAssociated=h,h=bt(),g.context={lastActivityMs:String(e.timestamp||!isFinite(h)?-1:h)},e.sequenceGroup&&
!V("web_gel_sequence_info_killswitch")&&(h=g.context,l=e.sequenceGroup,l={index:Fu(l),groupKey:l},h.sequence=l,e.endOfSequence&&delete Eu[e.sequenceGroup]),(e.sendIsolatedPayload?iu:cu)({endpoint:"log_event",payload:g,cttAuthInfo:e.cttAuthInfo,dangerousLogToVisitorSession:e.dangerousLogToVisitorSession},f))},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var cv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function dv(a,b){var c=void 0===c?!0:c;var d=U("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Yb(window.location.href);e&&d.push(e);e=Yb(a);if(0<=pb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),ob(d,a),a=d.href)if(a=Zb(a),a=$b(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:av()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ev(a,b,f)}else ev(a,b)}
function ev(a,b,c){a=fv(a);b=b?bc(b):"";c=c||5;(Wf()||(ee||fe)&&uo("applewebkit")&&!uo("version")&&(!uo("safari")||uo("gsa/"))||sc&&uo("version/")||!U("EOM_VISITOR_DATA"))&&eo(a,b,c)}
function fv(a){var b=a;a=w(cv);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(ec),f=0,g=[];0<=(c=dc(b,f,d,e));)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(fc,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new Q;function gv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return V("copy_login_info_to_st_cookie")&&("WEB"===U("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===U("INNERTUBE_CLIENT_NAME"))&&a}
;function hv(a,b){b=b?{feature:b}:{};var c=U("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[$n()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,dv(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;a=cc(a,d);U("LOGGED_IN",!0)&&gv()&&(d=U("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Yb(window.location.href))&&d.push(b),b=Yb(a),0<=pb(d,b)||!b&&0==a.lastIndexOf("/",0)?(d=Zb(a),(d=$b(d))?
(d=fv(d),d=(d=Uf.get(""+d,void 0)||null)?qo(d):{}):d=null):d=null,null==d&&(d={}),b=d,c=void 0,gv()?(c||(c=U("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&dv(a,d));e=a+e;var g=void 0===g?ib:g;a:if(g=void 0===g?ib:g,e instanceof ab)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof db&&d.lg(e)){g=new ab(e,bb);break a}g=void 0}f=f.location;g=nb(g||cb);void 0!==g&&(f.href=g)}}
;H("searchbox.yt.install",function(a,b,c,d,e,f,g){bh||(bh=new tl);bh.install(a,b,c,d,e,f,g)});
H("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=cg.Ia;if(a&&e){var f=U("SBOX_SETTINGS"),g=U("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,hv,d))&&e(a,100)}});}).call(this);
