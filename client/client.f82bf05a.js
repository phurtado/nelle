function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function y(t){return b(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}class S{constructor(t,e=null){this.e=h("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)l(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(u)}}let w;function x(t){w=t}function _(t,e){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.context.set(t,e)}const A=[],N=[],P=[],L=[],R=Promise.resolve();let k=!1;function q(t){P.push(t)}const D=new Set;function j(){do{for(;A.length;){const t=A.shift();x(t),C(t.$$)}for(;N.length;)N.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];D.has(e)||(D.add(e),e())}P.length=0}while(A.length);for(;L.length;)L.pop()();k=!1,D.clear()}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const I=new Set;let O;function U(){O={r:0,c:[],p:O}}function V(){O.r||s(O.c),O=O.p}function J(t,e){t&&t.i&&(I.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),O.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function T(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function B(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function K(t,e){t&&t.l(e)}function z(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),q(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(q)}function F(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(A.push(t),k||(k=!0,R.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,o,a,c,i,l=[-1]){const u=w;x(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;h.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),d&&G(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target&&(n.hydrate?h.fragment&&h.fragment.l($(n.target)):h.fragment&&h.fragment.c(),n.intro&&J(e.$$.fragment),z(e,n.target,n.anchor),j()),x(u)}class X{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Y=[];function Q(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!Y.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Y.push(n,e)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const Z={},tt=()=>({});function et(e){let n,r,s,o,a,c,f,m,E,S,w,x,_,A,N,P,L,R,k,q,D,j,C,I,O,U,V,J,M,T;return{c(){n=h("nav"),r=h("div"),s=h("a"),o=d("NELLE"),a=p(),c=h("span"),f=h("span"),m=p(),E=h("span"),S=p(),w=h("span"),x=p(),_=h("div"),A=h("div"),N=h("div"),P=h("span"),L=d("Discord"),R=p(),k=h("div"),q=h("a"),D=d("Join the Server"),j=p(),C=h("div"),I=h("span"),O=d("Resources"),U=p(),V=h("div"),J=h("a"),M=d("Dictionaries"),this.h()},l(t){n=v(t,"NAV",{class:!0,role:!0,"aria-label":!0});var e=$(n);r=v(e,"DIV",{class:!0});var i=$(r);s=v(i,"A",{class:!0,href:!0});var l=$(s);o=b(l,"NELLE"),l.forEach(u),a=y(i),c=v(i,"SPAN",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0});var h=$(c);f=v(h,"SPAN",{"aria-hidden":!0}),$(f).forEach(u),m=y(h),E=v(h,"SPAN",{"aria-hidden":!0}),$(E).forEach(u),S=y(h),w=v(h,"SPAN",{"aria-hidden":!0}),$(w).forEach(u),h.forEach(u),i.forEach(u),x=y(e),_=v(e,"DIV",{id:!0,class:!0});var d=$(_);A=v(d,"DIV",{class:!0});var p=$(A);N=v(p,"DIV",{class:!0});var g=$(N);P=v(g,"SPAN",{class:!0});var T=$(P);L=b(T,"Discord"),T.forEach(u),R=y(g),k=v(g,"DIV",{class:!0});var B=$(k);q=v(B,"A",{class:!0,href:!0});var H=$(q);D=b(H,"Join the Server"),H.forEach(u),B.forEach(u),g.forEach(u),j=y(p),C=v(p,"DIV",{class:!0});var K=$(C);I=v(K,"SPAN",{class:!0});var z=$(I);O=b(z,"Resources"),z.forEach(u),U=y(K),V=v(K,"DIV",{class:!0});var F=$(V);J=v(F,"A",{class:!0,href:!0});var G=$(J);M=b(G,"Dictionaries"),G.forEach(u),F.forEach(u),K.forEach(u),p.forEach(u),d.forEach(u),e.forEach(u),this.h()},h(){g(s,"class","navbar-item"),g(s,"href","."),g(f,"aria-hidden","true"),g(E,"aria-hidden","true"),g(w,"aria-hidden","true"),g(c,"role","button"),g(c,"class","navbar-burger burger"),g(c,"aria-label","menu"),g(c,"aria-expanded","false"),g(c,"data-target","navMenu"),g(r,"class","navbar-brand"),g(P,"class","navbar-link"),g(q,"class","navbar-item"),g(q,"href","https://discord.gg/2d37xPa"),g(k,"class","navbar-dropdown"),g(N,"class","navbar-item has-dropdown is-hoverable"),g(I,"class","navbar-link"),g(J,"class","navbar-item"),g(J,"href","resources/dictionaries"),g(V,"class","navbar-dropdown"),g(C,"class","navbar-item has-dropdown is-hoverable"),g(A,"class","navbar-start"),g(_,"id","navMenu"),g(_,"class","navbar-menu"),g(n,"class","navbar is-dark is-fixed-top"),g(n,"role","navigation"),g(n,"aria-label","main navigation")},m(t,e){var u,h,d,p;l(t,n,e),i(n,r),i(r,s),i(s,o),i(r,a),i(r,c),i(c,f),i(c,m),i(c,E),i(c,S),i(c,w),i(n,x),i(n,_),i(_,A),i(A,N),i(N,P),i(P,L),i(N,R),i(N,k),i(k,q),i(q,D),i(A,j),i(A,C),i(C,I),i(I,O),i(C,U),i(C,V),i(V,J),i(J,M),h="click",d=nt,(u=c).addEventListener(h,d,p),T=()=>u.removeEventListener(h,d,p)},p:t,i:t,o:t,d(t){t&&u(n),T()}}}function nt(){const{target:t}=this.dataset,e=document.getElementById(t);this.classList.toggle("is-active"),e.classList.toggle("is-active")}class rt extends X{constructor(t){super(),W(this,t,null,et,a,{})}}function st(t){let e,n,r,s;const o=new rt({}),a=t[1].default,i=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(a,t,t[0],null);return{c(){e=p(),H(o.$$.fragment),n=p(),r=h("main"),i&&i.c(),this.h()},l(t){(function(t,e=document.body){return Array.from(e.querySelectorAll(t))})('[data-svelte="svelte-cjqhr7"]',document.head).forEach(u),e=y(t),K(o.$$.fragment,t),n=y(t),r=v(t,"MAIN",{});var s=$(r);i&&i.l(s),s.forEach(u),this.h()},h(){document.title="Norwegian-English Language Learning Exchange"},m(t,a){l(t,e,a),z(o,t,a),l(t,n,a),l(t,r,a),i&&i.m(r,null),s=!0},p(t,[e]){i&&i.p&&1&e&&i.p(c(a,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(a,t[0],e,null))},i(t){s||(J(o.$$.fragment,t),J(i,t),s=!0)},o(t){M(o.$$.fragment,t),M(i,t),s=!1},d(t){t&&u(e),F(o,t),t&&u(n),t&&u(r),i&&i.d(t)}}}function ot(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class at extends X{constructor(t){super(),W(this,t,ot,st,a,{})}}function ct(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=v(t,"PRE",{});var s=$(e);n=b(s,r),s.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&u(e)}}}function it(e){let n,r,s,o,a,c,f,g=e[1].message+"",S=e[2]&&e[1].stack&&ct(e);return{c(){n=h("h1"),r=d(e[0]),s=p(),o=h("p"),a=d(g),c=p(),S&&S.c(),f=m()},l(t){n=v(t,"H1",{});var i=$(n);r=b(i,e[0]),i.forEach(u),s=y(t),o=v(t,"P",{});var l=$(o);a=b(l,g),l.forEach(u),c=y(t),S&&S.l(t),f=m()},m(t,e){l(t,n,e),i(n,r),l(t,s,e),l(t,o,e),i(o,a),l(t,c,e),S&&S.m(t,e),l(t,f,e)},p(t,[e]){1&e&&E(r,t[0]),2&e&&g!==(g=t[1].message+"")&&E(a,g),t[2]&&t[1].stack?S?S.p(t,e):(S=ct(t),S.c(),S.m(f.parentNode,f)):S&&(S.d(1),S=null)},i:t,o:t,d(t){t&&u(n),t&&u(s),t&&u(o),t&&u(c),S&&S.d(t),t&&u(f)}}}function lt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class ut extends X{constructor(t){super(),W(this,t,lt,it,a,{status:0,error:1})}}function ft(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&H(c.$$.fragment),n=m()},l(t){c&&K(c.$$.fragment,t),n=m()},m(t,e){c&&z(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?T(s,[B(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){U();const t=c;M(t.$$.fragment,1,0,()=>{F(t,1)}),V()}o?(H((c=new o(a())).$$.fragment),J(c.$$.fragment,1),z(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&J(c.$$.fragment,t),r=!0)},o(t){c&&M(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&F(c,t)}}}function ht(t){let e;const n=new ut({props:{error:t[0],status:t[1]}});return{c(){H(n.$$.fragment)},l(t){K(n.$$.fragment,t)},m(t,r){z(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}function dt(t){let e,n,r,s;const o=[ht,ft],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),l(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(U(),M(a[i],1,1,()=>{a[i]=null}),V(),n=a[e],n||(n=a[e]=o[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){s||(J(n),s=!0)},o(t){M(n),s=!1},d(t){a[e].d(t),t&&u(r)}}}function pt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[dt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new at({props:s});return{c(){H(o.$$.fragment)},l(t){K(o.$$.fragment,t)},m(t,e){z(o,t,e),n=!0},p(t,[e]){const n=12&e?T(r,[4&e&&{segment:t[2][0]},8&e&&B(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(J(o.$$.fragment,t),n=!0)},o(t){M(o.$$.fragment,t),n=!1},d(t){F(o,t)}}}function mt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;return _(Z,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[s,o,a,c,i,r]}class gt extends X{constructor(t){super(),W(this,t,mt,pt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const $t=[],vt=[{js:()=>import("./index.e25cebf8.js"),css:["client.f82bf05a.css"]},{js:()=>import("./dictionaries.11471c96.js"),css:["client.f82bf05a.css"]}],bt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/resources\/dictionaries\/?$/,parts:[null,{i:1}]}];const yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Et,St,wt,xt=!1,_t=[],At="{}";const Nt={page:Q({}),preloading:Q(null),session:Q(yt&&yt.session)};let Pt,Lt;Nt.session.subscribe(async t=>{if(Pt=t,!xt)return;Lt=!0;const e=Ot(new URL(location.href)),n=St={},{redirect:r,props:s,branch:o}=await Mt(e);n===St&&await Jt(r,o,s,e.page)});let Rt,kt=null;let qt,Dt=1;const jt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ct={};function It(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(yt.baseUrl))return null;let e=t.pathname.slice(yt.baseUrl.length);if(""===e&&(e="/"),!$t.some(t=>t.test(e)))for(let n=0;n<bt.length;n+=1){const r=bt[n],s=r.pattern.exec(e);if(s){const n=It(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Ut(){return{x:pageXOffset,y:pageYOffset}}async function Vt(t,e,n,r){if(e)qt=e;else{const t=Ut();Ct[qt]=t,e=qt=++Dt,Ct[qt]=n?t:{x:0,y:0}}qt=e,Et&&Nt.preloading.set(!0);const s=kt&&kt.href===t.href?kt.promise:Mt(t);kt=null;const o=St={},{redirect:a,props:c,branch:i}=await s;if(o===St&&(await Jt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ct[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Ct[qt]=t,t&&scrollTo(t.x,t.y)}}async function Jt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ot(new URL(t,document.baseURI));return n?(jt[e.replaceState?"replaceState":"pushState"]({id:qt},"",t),Vt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Nt.page.set(r),Nt.preloading.set(!1),Et)Et.$set(n);else{n.stores={page:{subscribe:Nt.page.subscribe},preloading:{subscribe:Nt.preloading.subscribe},session:Nt.session},n.level0={props:await wt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Bt(t.nextSibling);Bt(t),Bt(e)}Et=new gt({target:Rt,props:n,hydrate:!0})}_t=e,At=JSON.stringify(r.query),xt=!0,Lt=!1}async function Mt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;wt||(wt=yt.preloaded[0]||tt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Pt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==At)return!0;const s=_t[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const h=i++;if(!Lt&&!u&&_t[c]&&_t[c].part===e.i)return _t[c];u=!1;const{default:d,preload:p}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Tt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(vt[e.i]);let m;return m=xt||!yt.preloaded[c+1]?p?await p.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Pt):{}:yt.preloaded[c+1],o[`level${h}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Tt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Bt(t){t.parentNode.removeChild(t)}function Ht(t){const e=Ot(new URL(t,document.baseURI));if(e)return kt&&t===kt.href||function(t,e){kt={href:t,promise:e}}(t,Mt(e)),kt.promise}let Kt;function zt(t){clearTimeout(Kt),Kt=setTimeout(()=>{Ft(t)},20)}function Ft(t){const e=Wt(t.target);e&&"prefetch"===e.rel&&Ht(e.href)}function Gt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Wt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ot(s);if(o){Vt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),jt.pushState({id:qt},"",s.href)}}function Wt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Xt(t){if(Ct[qt]=Ut(),t.state){const e=Ot(new URL(location.href));e?Vt(e,t.state.id):location.href=location.href}else Dt=Dt+1,function(t){qt=t}(Dt),jt.replaceState({id:qt},"",location.href)}var Yt;Yt={target:document.querySelector("#sapper")},"scrollRestoration"in jt&&(jt.scrollRestoration="manual"),function(t){Rt=t}(Yt.target),addEventListener("click",Gt),addEventListener("popstate",Xt),addEventListener("touchstart",Ft),addEventListener("mousemove",zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;jt.replaceState({id:Dt},"",e);const n=new URL(location.href);if(yt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=yt;wt||(wt=o&&o[0]),Jt(null,[],{error:c,status:a,session:s,level0:{props:wt},level1:{props:{status:a,error:c},component:ut},segments:o},{host:e,path:n,query:It(r),params:{}})}();const r=Ot(n);return r?Vt(r,Dt,!0,t):void 0});export{S as H,X as S,p as a,$ as b,v as c,b as d,h as e,u as f,y as g,g as h,W as i,l as j,i as k,f as l,t as n,a as s,d as t};
