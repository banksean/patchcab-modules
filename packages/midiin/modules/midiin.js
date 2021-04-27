
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { usePan, scale, round, Label, Faceplate, Knob, Patch, Switch } from '/js/core.js';

function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t&&"object"==typeof t&&"function"==typeof t.then}function s(t){return t()}function l(){return Object.create(null)}function i(t){t.forEach(s);}function r(t){return "function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return 0===Object.keys(t).length}function u(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function d(t){let e;return u(t,(t=>e=t))(),e}function p(t,e,n){t.$$.on_destroy.push(u(e,n));}function f(t,e,n,o){if(t){const s=h(t,e,n,o);return t[0](s)}}function h(t,e,o,s){return t[1]&&s?n(o.ctx.slice(),t[1](s(e))):o.ctx}function m(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}function v(t,e,n,o,s,l,i){const r=m(e,o,s,l);if(r){const s=h(e,n,o,i);t.p(s,r);}}function g(t){return null==t?"":t}const y=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);function b(e){return e&&r(e.destroy)?e.destroy:t}const x="undefined"!=typeof window;let w=x?()=>window.performance.now():()=>Date.now(),$=x?t=>requestAnimationFrame(t):t;const k=new Set;function _(t){k.forEach((e=>{e.c(t)||(k.delete(e),e.f());})),0!==k.size&&$(_);}function E(t){let e;return 0===k.size&&$(_),{promise:new Promise((n=>{k.add(e={c:t,f:n});})),abort(){k.delete(e);}}}function F(t,e){t.appendChild(e);}function z(t,e,n){t.insertBefore(e,n||null);}function M(t){t.parentNode.removeChild(t);}function j(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e);}function L(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function T(){return S(" ")}function A(){return S("")}function O(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function H(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n);}function D(t){return Array.from(t.childNodes)}function B(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return S(e)}function R(t,e){e=""+e,t.wholeText!==e&&(t.data=e);}function q(t,e){t.value=null==e?"":e;}function I(t,e,n,o){t.style.setProperty(e,n,o?"important":"");}let N;function P(){if(void 0===N){N=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document;}catch(t){N=!0;}}return N}function X(t,e,n){t.classList[n?"add":"remove"](e);}function U(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const Y=new Set;let W,K=0;function G(t,e,n,o,s,l,i,r=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);a+=100*t+`%{${i(o,1-o)}}\n`;}const u=a+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,p=t.ownerDocument;Y.add(p);const f=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(L("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[d]||(h[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${s}ms 1 both`,K+=1,d}function J(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),K-=s,K||$((()=>{K||(Y.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={};})),Y.clear());})));}function V(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`;}}function Q(t){W=t;}function Z(){if(!W)throw new Error("Function called outside component initialization");return W}function tt(t){Z().$$.on_mount.push(t);}function et(t){Z().$$.after_update.push(t);}function nt(t,e){Z().$$.context.set(t,e);}function ot(t){return Z().$$.context.get(t)}function st(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)));}const lt=[],it=[],rt=[],ct=[],at=Promise.resolve();let ut=!1;function dt(){ut||(ut=!0,at.then(vt));}function pt(t){rt.push(t);}function ft(t){ct.push(t);}let ht=!1;const mt=new Set;function vt(){if(!ht){ht=!0;do{for(let t=0;t<lt.length;t+=1){const e=lt[t];Q(e),gt(e.$$);}for(Q(null),lt.length=0;it.length;)it.pop()();for(let t=0;t<rt.length;t+=1){const e=rt[t];mt.has(e)||(mt.add(e),e());}rt.length=0;}while(lt.length);for(;ct.length;)ct.pop()();ut=!1,ht=!1,mt.clear();}}function gt(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pt);}}let yt;function bt(){return yt||(yt=Promise.resolve(),yt.then((()=>{yt=null;}))),yt}function xt(t,e,n){t.dispatchEvent(U(`${e?"intro":"outro"}${n}`));}const wt=new Set;let $t;function kt(){$t={r:0,c:[],p:$t};}function _t(){$t.r||i($t.c),$t=$t.p;}function Et(t,e){t&&t.i&&(wt.delete(t),t.i(e));}function Ft(t,e,n,o){if(t&&t.o){if(wt.has(t))return;wt.add(t),$t.c.push((()=>{wt.delete(t),o&&(n&&t.d(1),o());})),t.o(e);}}const zt={duration:0};const Mt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function jt(t,e){t.d(1),e.delete(t.key);}function Lt(t,e){Ft(t,1,1,(()=>{e.delete(t.key);}));}function Ct(t,e,n,o,s,l,i,r,c,a,u,d){let p=t.length,f=l.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const v=[],g=new Map,y=new Map;for(h=f;h--;){const t=d(s,l,h),r=n(t);let c=i.get(r);c?o&&c.p(t,e):(c=a(r,t),c.c()),g.set(r,v[h]=c),r in m&&y.set(r,Math.abs(h-m[r]));}const b=new Set,x=new Set;function w(t){Et(t,1),t.m(r,u),i.set(t.key,t),u=t.first,f--;}for(;p&&f;){const e=v[f-1],n=t[p-1],o=e.key,s=n.key;e===n?(u=e.first,p--,f--):g.has(s)?!i.has(o)||b.has(o)?w(e):x.has(s)?p--:y.get(o)>y.get(s)?(x.add(o),w(e)):(b.add(s),p--):(c(n,i),p--);}for(;p--;){const e=t[p];g.has(e.key)||c(e,i);}for(;f;)w(v[f-1]);return v}const St=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),Tt=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;const At={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function Ot(t){return String(t).replace(/["'&<>]/g,(t=>At[t]))}let Ht,Dt;function Bt(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]));}function Rt(t){t&&t.c();}function qt(t,e,n,o){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,n),o||pt((()=>{const e=c.map(s).filter(r);a?a.push(...e):i(e),t.$$.on_mount=[];})),u.forEach(pt);}function It(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[]);}function Nt(e,n,o,s,r,c,a=[-1]){const u=W;Q(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:l(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&r(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&function(t,e){-1===t.$$.dirty[0]&&(lt.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31;}(e,t)),n})):[],d.update(),p=!0,i(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=D(n.target);d.fragment&&d.fragment.l(t),t.forEach(M);}else d.fragment&&d.fragment.c();n.intro&&Et(e.$$.fragment),qt(e,n.target,n.anchor,n.customElement),vt();}Q(u);}"function"==typeof HTMLElement&&(Dt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(s).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t]);}attributeChangedCallback(t,e,n){this[t]=n;}disconnectedCallback(){i(this.$$.on_disconnect);}$destroy(){It(this,1),this.$destroy=t;}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1);}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1);}});class Pt{$destroy(){It(this,1),this.$destroy=t;}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1);}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1);}}function Xt(t,e){document.dispatchEvent(U(t,Object.assign({version:"3.35.0"},e)));}function Ut(t){Xt("SvelteDOMRemove",{node:t}),M(t);}class Yt extends Pt{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super();}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed");};}$capture_state(){}$inject_state(){}}var Wt=Object.freeze({__proto__:null,HtmlTag:class{constructor(t=null){this.a=t,this.e=this.n=null;}m(t,e,n=null){this.e||(this.e=L(e.nodeName),this.t=e,this.h(t)),this.i(n);}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes);}i(t){for(let e=0;e<this.n.length;e+=1)z(this.t,this.n[e],t);}p(t){this.d(),this.h(t),this.i(this.a);}d(){this.n.forEach(M);}},SvelteComponent:Pt,SvelteComponentDev:Yt,SvelteComponentTyped:class extends Yt{constructor(t){super(t);}},get SvelteElement(){return Dt},action_destroyer:b,add_attribute:function(t,e,n){return null==e||n&&!e?"":` ${t}${!0===e?"":`=${"string"==typeof e?JSON.stringify(Ot(e)):`"${e}"`}`}`},add_classes:function(t){return t?` class="${t}"`:""},add_flush_callback:ft,add_location:function(t,e,n,o,s){t.__svelte_meta={loc:{file:e,line:n,column:o,char:s}};},add_render_callback:pt,add_resize_listener:function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=L("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=P();let s;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=O(window,"message",(t=>{t.source===n.contentWindow&&e();}))):(n.src="about:blank",n.onload=()=>{s=O(n.contentWindow,"resize",e);}),F(t,n),()=>{(o||s&&n.contentWindow)&&s(),M(n);}},add_transform:V,afterUpdate:et,append:F,append_dev:function(t,e){Xt("SvelteDOMInsert",{target:t,node:e}),F(t,e);},assign:n,attr:H,attr_dev:function(t,e,n){H(t,e,n),null==n?Xt("SvelteDOMRemoveAttribute",{node:t,attribute:e}):Xt("SvelteDOMSetAttribute",{node:t,attribute:e,value:n});},attribute_to_object:function(t){const e={};for(const n of t)e[n.name]=n.value;return e},beforeUpdate:function(t){Z().$$.before_update.push(t);},bind:Bt,binding_callbacks:it,blank_object:l,bubble:st,check_outros:_t,children:D,claim_component:function(t,e){t&&t.l(e);},claim_element:function(t,e,n,o){for(let o=0;o<t.length;o+=1){const s=t[o];if(s.nodeName===e){let e=0;const l=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||l.push(t.name);}for(let t=0;t<l.length;t++)s.removeAttribute(l[t]);return t.splice(o,1)[0]}}return o?C(e):L(e)},claim_space:function(t){return B(t," ")},claim_text:B,clear_loops:function(){k.clear();},component_subscribe:p,compute_rest_props:function(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n},compute_slots:function(t){const e={};for(const n in t)e[n]=!0;return e},createEventDispatcher:function(){const t=Z();return (e,n)=>{const o=t.$$.callbacks[e];if(o){const s=U(e,n);o.slice().forEach((e=>{e.call(t,s);}));}}},create_animation:function(n,o,s,l){if(!o)return t;const i=n.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:r=0,duration:c=300,easing:a=e,start:u=w()+r,end:d=u+c,tick:p=t,css:f}=s(n,{from:o,to:i},l);let h,m=!0,v=!1;function g(){f&&J(n,h),m=!1;}return E((t=>{if(!v&&t>=u&&(v=!0),v&&t>=d&&(p(1,0),g()),!m)return !1;if(v){const e=0+1*a((t-u)/c);p(e,1-e);}return !0})),f&&(h=G(n,0,1,c,r,a,f)),r||(v=!0),p(0,1),g},create_bidirectional_transition:function(n,o,s,l){let c=o(n,s),a=l?0:1,u=null,d=null,p=null;function f(){p&&J(n,p);}function h(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function m(o){const{delay:s=0,duration:l=300,easing:r=e,tick:m=t,css:v}=c||zt,g={start:w()+s,b:o};o||(g.group=$t,$t.r+=1),u||d?d=g:(v&&(f(),p=G(n,a,o,l,s,r,v)),o&&m(0,1),u=h(g,l),pt((()=>xt(n,o,"start"))),E((t=>{if(d&&t>d.start&&(u=h(d,l),d=null,xt(n,u.b,"start"),v&&(f(),p=G(n,a,u.b,u.duration,0,r,c.css))),u)if(t>=u.end)m(a=u.b,1-a),xt(n,u.b,"end"),d||(u.b?f():--u.group.r||i(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*r(e/u.duration),m(a,1-a);}return !(!u&&!d)})));}return {run(t){r(c)?bt().then((()=>{c=c(),m(t);})):m(t);},end(){f(),u=d=null;}}},create_component:Rt,create_in_transition:function(n,o,s){let l,i,c=o(n,s),a=!1,u=0;function d(){l&&J(n,l);}function p(){const{delay:o=0,duration:s=300,easing:r=e,tick:p=t,css:f}=c||zt;f&&(l=G(n,0,1,s,o,r,f,u++)),p(0,1);const h=w()+o,m=h+s;i&&i.abort(),a=!0,pt((()=>xt(n,!0,"start"))),i=E((t=>{if(a){if(t>=m)return p(1,0),xt(n,!0,"end"),d(),a=!1;if(t>=h){const e=r((t-h)/s);p(e,1-e);}}return a}));}let f=!1;return {start(){f||(J(n),r(c)?(c=c(),bt().then(p)):p());},invalidate(){f=!1;},end(){a&&(d(),a=!1);}}},create_out_transition:function(n,o,s){let l,c=o(n,s),a=!0;const u=$t;function d(){const{delay:o=0,duration:s=300,easing:r=e,tick:d=t,css:p}=c||zt;p&&(l=G(n,1,0,s,o,r,p));const f=w()+o,h=f+s;pt((()=>xt(n,!1,"start"))),E((t=>{if(a){if(t>=h)return d(0,1),xt(n,!1,"end"),--u.r||i(u.c),!1;if(t>=f){const e=r((t-f)/s);d(1-e,e);}}return a}));}return u.r+=1,r(c)?bt().then((()=>{c=c(),d();})):d(),{end(t){t&&c.tick&&c.tick(1,0),a&&(l&&J(n,l),a=!1);}}},create_slot:f,create_ssr_component:function(t){function e(e,n,o,s){const i=W;Q({$$:{on_destroy:Ht,context:new Map(i?i.$$.context:[]),on_mount:[],before_update:[],after_update:[],callbacks:l()}});const r=t(e,n,o,s);return Q(i),r}return {render:(t={},n={})=>{Ht=[];const o={title:"",head:"",css:new Set},s=e(o,t,{},n);return i(Ht),{html:s,css:{code:Array.from(o.css).map((t=>t.code)).join("\n"),map:null},head:o.title+o.head}},$$render:e}},get current_component(){return W},custom_event:U,dataset_dev:function(t,e,n){t.dataset[e]=n,Xt("SvelteDOMSetDataset",{node:t,property:e,value:n});},debug:function(t,e,n,o){return console.log(`{@debug} ${t?t+" ":""}(${e}:${n})`),console.log(o),""},destroy_block:jt,destroy_component:It,destroy_each:j,detach:M,detach_after_dev:function(t){for(;t.nextSibling;)Ut(t.nextSibling);},detach_before_dev:function(t){for(;t.previousSibling;)Ut(t.previousSibling);},detach_between_dev:function(t,e){for(;t.nextSibling&&t.nextSibling!==e;)Ut(t.nextSibling);},detach_dev:Ut,dirty_components:lt,dispatch_dev:Xt,each:function(t,e){let n="";for(let o=0;o<t.length;o+=1)n+=e(t[o],o);return n},element:L,element_is:function(t,e){return document.createElement(t,{is:e})},empty:A,escape:Ot,escaped:At,exclude_internal_props:function(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e},fix_and_destroy_block:function(t,e){t.f(),jt(t,e);},fix_and_outro_and_destroy_block:function(t,e){t.f(),Lt(t,e);},fix_position:function(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,V(t,s);}},flush:vt,getContext:ot,get_binding_group_value:function(t,e,n){const o=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&o.add(t[e].__value);return n||o.delete(e),Array.from(o)},get_current_component:Z,get_custom_elements_slots:function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0;})),e},get_slot_changes:m,get_slot_context:h,get_spread_object:function(t){return "object"==typeof t&&null!==t?t:{}},get_spread_update:function(t,e){const n={},o={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],r=e[l];if(r){for(const t in i)t in r||(o[t]=1);for(const t in r)s[t]||(n[t]=r[t],s[t]=1);t[l]=r;}else for(const t in i)s[t]=1;}for(const t in o)t in n||(n[t]=void 0);return n},get_store_value:d,globals:Mt,group_outros:kt,handle_promise:function(t,e){const n=e.token={};function s(t,o,s,l){if(e.token!==n)return;e.resolved=l;let i=e.ctx;void 0!==s&&(i=i.slice(),i[s]=l);const r=t&&(e.current=t)(i);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(kt(),Ft(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null);})),_t());})):e.block.d(1),r.c(),Et(r,1),r.m(e.mount(),e.anchor),c=!0),e.block=r,e.blocks&&(e.blocks[o]=r),c&&vt();}if(o(t)){const n=Z();if(t.then((t=>{Q(n),s(e.then,1,e.value,t),Q(null);}),(t=>{if(Q(n),s(e.catch,2,e.error,t),Q(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else {if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t;}},hasContext:function(t){return Z().$$.context.has(t)},has_prop:y,identity:e,init:Nt,insert:z,insert_dev:function(t,e,n){Xt("SvelteDOMInsert",{target:t,node:e,anchor:n}),z(t,e,n);},intros:{enabled:!1},invalid_attribute_name_character:Tt,is_client:x,is_crossorigin:P,is_empty:a,is_function:r,is_promise:o,listen:O,listen_dev:function(t,e,n,o,s,l){const i=!0===o?["capture"]:o?Array.from(Object.keys(o)):[];s&&i.push("preventDefault"),l&&i.push("stopPropagation"),Xt("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:i});const r=O(t,e,n,o);return ()=>{Xt("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:i}),r();}},loop:E,loop_guard:function(t){const e=Date.now();return ()=>{if(Date.now()-e>t)throw new Error("Infinite loop detected")}},missing_component:{$$render:()=>""},mount_component:qt,noop:t,not_equal:function(t,e){return t!=t?e==e:t!==e},get now(){return w},null_to_empty:g,object_without_properties:function(t,e){const n={};for(const o in t)y(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n},onDestroy:function(t){Z().$$.on_destroy.push(t);},onMount:tt,once:function(t){let e=!1;return function(...n){e||(e=!0,t.call(this,...n));}},outro_and_destroy_block:Lt,prevent_default:function(t){return function(e){return e.preventDefault(),t.call(this,e)}},prop_dev:function(t,e,n){t[e]=n,Xt("SvelteDOMSetProperty",{node:t,property:e,value:n});},query_selector_all:function(t,e=document.body){return Array.from(e.querySelectorAll(t))},get raf(){return $},run:s,run_all:i,safe_not_equal:c,schedule_update:dt,select_multiple_value:function(t){return [].map.call(t.querySelectorAll(":checked"),(t=>t.__value))},select_option:function(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}},select_options:function(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];o.selected=~e.indexOf(o.__value);}},select_value:function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value},self:function(t){return function(e){e.target===this&&t.call(this,e);}},setContext:nt,set_attributes:function(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:H(t,o,e[o]);},set_current_component:Q,set_custom_element_data:function(t,e,n){e in t?t[e]=n:H(t,e,n);},set_data:R,set_data_dev:function(t,e){e=""+e,t.wholeText!==e&&(Xt("SvelteDOMSetData",{node:t,data:e}),t.data=e);},set_input_type:function(t,e){try{t.type=e;}catch(t){}},set_input_value:q,set_now:function(t){w=t;},set_raf:function(t){$=t;},set_store_value:function(t,e,n=e){return t.set(n),e},set_style:I,set_svg_attributes:function(t,e){for(const n in e)H(t,n,e[n]);},space:T,spread:function(t,e){const n=Object.assign({},...t);e&&(null==n.class?n.class=e:n.class+=" "+e);let o="";return Object.keys(n).forEach((t=>{if(Tt.test(t))return;const e=n[t];!0===e?o+=" "+t:St.has(t.toLowerCase())?e&&(o+=" "+t):null!=e&&(o+=` ${t}="${String(e).replace(/"/g,"&#34;").replace(/'/g,"&#39;")}"`);})),o},stop_propagation:function(t){return function(e){return e.stopPropagation(),t.call(this,e)}},subscribe:u,svg_element:C,text:S,tick:function(){return dt(),at},time_ranges_to_array:function(t){const e=[];for(let n=0;n<t.length;n+=1)e.push({start:t.start(n),end:t.end(n)});return e},to_number:function(t){return ""===t?null:+t},toggle_class:X,transition_in:Et,transition_out:Ft,update_keyed_each:Ct,update_slot:v,update_slot_spread:function(t,e,n,o,s,l,i,r){const c=i(s)|m(e,o,s,l);if(c){const s=h(e,n,o,r);t.p(s,c);}},validate_component:function(t,e){if(!t||!t.$$render)throw "svelte:component"===e&&(e+=" this={...}"),new Error(`<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return t},validate_each_argument:function(t){if(!("string"==typeof t||t&&"object"==typeof t&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw "function"==typeof Symbol&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}},validate_each_keys:function(t,e,n,o){const s=new Set;for(let l=0;l<e.length;l++){const i=o(n(t,e,l));if(s.has(i))throw new Error("Cannot have duplicate keys in a keyed each");s.add(i);}},validate_slots:function(t,e,n){for(const o of Object.keys(e))~n.indexOf(o)||console.warn(`<${t}> received an unexpected slot "${o}".`);},validate_store:function(t,e){if(null!=t&&"function"!=typeof t.subscribe)throw new Error(`'${e}' is not a store with a 'subscribe' method`)},xlink_attr:function(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n);}});const Kt={w:16,h:380},Jt=[];function Vt(e,n=t){let o;const s=[];function l(t){if(c(e,t)&&(e=t,o)){const t=!Jt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Jt.push(n,e);}if(t){for(let t=0;t<Jt.length;t+=2)Jt[t][0](Jt[t+1]);Jt.length=0;}}}return {set:l,update:function(t){l(t(e));},subscribe:function(i,r=t){const c=[i,r];return s.push(c),1===s.length&&(o=n(l)||t),i(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null);}}}}new class{constructor(t=[],e=[]){this.modules=Vt([]),this.moduleStates=Vt([]),this.updateCallbacks=[],this.modules.set(t),this.moduleStates.set(e);}get store(){return this.modules}get state(){return d(this.modules)}add(t){const e=this.getEmptySpace(t.size);if(t.position=e,!t.id){const e=Math.random().toString(36).substr(2,9);t.id=`${t.type}-${e}`;}return this.moduleStates.update((n=>n.concat([{id:t.id,state:t.state,position:e}]))),this.modules.update((e=>e.concat([t]))),t.id}update(t,e){this.moduleStates.update((n=>n.map((n=>n.id===t?{id:t,state:e,position:n.position}:n))));}remove(t){this.modules.update((e=>e.filter((e=>e.id!==t)))),this.moduleStates.update((e=>e.filter((e=>e.id!==t))));}move(t,e,n){const o=d(this.moduleStates);for(let s=0;s<o.length;s++){const l=o[s];if(l.id===t.id)continue;const i=this.state.find((t=>t.id===l.id));if(!(n+t.size.h*Kt.h<=l.position.y||n>=l.position.y+i.size.h*Kt.h||e+t.size.w*Kt.w<=l.position.x||e>=l.position.x+i.size.w*Kt.w))return !1}return this.moduleStates.update((o=>o.map((o=>o.id===t.id?{...o,position:{x:e,y:n}}:o)))),!0}import(t){this.moduleStates.update((()=>t.map((t=>({id:t.id,state:t.state,position:t.position}))))),this.modules.set(t);}export(){const t=d(this.moduleStates);return this.state.map((e=>{const n={...e},{state:o,position:s}=t.find((t=>t.id===n.id));return n.state=o,n.position=s,delete n.libs,delete n.size,delete n.type,n}))}onAfterUpdate(t){this.updateCallbacks.push(t);}afterUpdate(){this.updateCallbacks.forEach((t=>t()));}getEmptySpace(t){const e=this.state;let n=0,o=0,s=0===e.length;const l=document.documentElement.scrollLeft||document.body.scrollLeft,i=document.documentElement.scrollTop||document.body.scrollTop;for(;!s;){let r=!1;for(let s=0;s<e.length;s++){const c=document.getElementById(e[s].id).getBoundingClientRect();if(!(o+Kt.h*t.h-48<=c.y+i||o>=c.bottom-48+i||n+Kt.w*t.w<=c.x+l||n>=c.right+l)){r=!0;break}}r?n>window.innerWidth?(o+=380,n=0):n+=16:s=!0;}return {x:n,y:o}}reset(){this.modules.set([]),this.moduleStates.set([]);}};var fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function he(t){var e={exports:{}};return t(e,e.exports),e.exports}he((function(t,e){!function(){function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){r(o.response,e,n);},o.onerror=function(){console.error("could not download file");},o.send();}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send();}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"));}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e);}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof fe&&fe.global===fe?fe:void 0,i=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,e,i){var r=l.URL||l.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?s(c):o(c.href)?n(t,e,i):s(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href);}),4e4),setTimeout((function(){s(c);}),0));}:"msSaveOrOpenBlob"in navigator?function(t,l,i){if(l=l||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),l);else if(o(t))n(t,l,i);else {var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){s(r);}));}}:function(t,e,o,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,o);var r="application/octet-stream"===t.type,c=/constructor/i.test(l.HTMLElement)||l.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||r&&c||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=a?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=t:location=t,s=null;},u.readAsDataURL(t);}else {var d=l.URL||l.webkitURL,p=d.createObjectURL(t);s?s.location=p:location.href=p,s=null,setTimeout((function(){d.revokeObjectURL(p);}),4e4);}});l.saveAs=r.saveAs=r,t.exports=r;}();}));he((function(t,e){var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=document.createElement("input");return "object"===o(e[0])&&(!0===e[0].multiple&&s.setAttribute("multiple",""),void 0!==e[0].accept&&s.setAttribute("accept",e[0].accept)),s.setAttribute("type","file"),s.style.display="none",s.setAttribute("id","hidden-file"),document.body.appendChild(s),new Promise((function(t){s.addEventListener("change",(function(){t(s.files);var n=e[e.length-1];"function"==typeof n&&n(s.files),document.body.removeChild(s);}));var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,0,null),s.dispatchEvent(n);}))},t.exports&&(e=t.exports=n),e.fileDialog=n;}));class io{constructor(t){this.bangs=[],this.output=t;}connect(t){this.bangs=[...this.bangs,t];}disconnect(t){this.bangs=this.bangs.filter((e=>e!==t));}bang(t,e=!1,n=!1){this.bangs.forEach((o=>{o.trigger(t,e,n);}));}trigger(t,e=!1,n=!1){this.output(t,e,n);}}window.__sv=Wt;

/* node_modules/@banksean/patchcab-ui/lib/components/Fader.svelte generated by Svelte v3.35.0 */

function add_css$2() {
	var style = __sv.element("style");
	style.id = "svelte-byng8-style";
	style.textContent = ".container.svelte-byng8{display:block;position:absolute;width:32px;height:228px;cursor:row-resize}svg.svelte-byng8{position:absolute;top:0px;left:0px;transform-origin:center}.label.svelte-byng8{position:absolute;bottom:0px;width:100%;margin-left:auto;margin-right:auto;font-size:small;text-align:center}";
	__sv.append(document.head, style);
}

// (62:4) {#if label}
function create_if_block$1(ctx) {
	let div;
	let t;

	return {
		c() {
			div = __sv.element("div");
			t = __sv.text(/*label*/ ctx[2]);
			__sv.attr(div, "class", "label svelte-byng8");
		},
		m(target, anchor) {
			__sv.insert(target, div, anchor);
			__sv.append(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*label*/ 4) __sv.set_data(t, /*label*/ ctx[2]);
		},
		d(detaching) {
			if (detaching) __sv.detach(div);
		}
	};
}

function create_fragment$2(ctx) {
	let div;
	let svg;
	let g;
	let rect0;
	let rect1;
	let rect1_y_value;
	let t;
	let mounted;
	let dispose;
	let if_block = /*label*/ ctx[2] && create_if_block$1(ctx);

	return {
		c() {
			div = __sv.element("div");
			svg = __sv.svg_element("svg");
			g = __sv.svg_element("g");
			rect0 = __sv.svg_element("rect");
			rect1 = __sv.svg_element("rect");
			t = __sv.space();
			if (if_block) if_block.c();
			__sv.set_style(rect0, "fill", "#ddd");
			__sv.attr(rect0, "x", "50%");
			__sv.attr(rect0, "y", "0");
			__sv.attr(rect0, "width", "3");
			__sv.attr(rect0, "height", "100%");
			__sv.set_style(rect1, "fill", "#eee");
			__sv.attr(rect1, "x", "0");
			__sv.attr(rect1, "y", rect1_y_value = "" + (/*position*/ ctx[3] + "px"));
			__sv.attr(rect1, "width", "100%");
			__sv.attr(rect1, "height", "8");
			__sv.attr(svg, "width", "32");
			__sv.attr(svg, "height", "200");
			__sv.attr(svg, "fill", "red");
			__sv.attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			__sv.attr(svg, "class", "svelte-byng8");
			__sv.attr(div, "class", "container svelte-byng8");
			__sv.set_style(div, "left", /*x*/ ctx[0] + "px");
			__sv.set_style(div, "top", /*y*/ ctx[1] + "px");
		},
		m(target, anchor) {
			__sv.insert(target, div, anchor);
			__sv.append(div, svg);
			__sv.append(svg, g);
			__sv.append(g, rect0);
			__sv.append(g, rect1);
			__sv.append(div, t);
			if (if_block) if_block.m(div, null);

			if (!mounted) {
				dispose = __sv.action_destroyer(usePan.call(null, div, /*onPan*/ ctx[4]));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*position*/ 8 && rect1_y_value !== (rect1_y_value = "" + (/*position*/ ctx[3] + "px"))) {
				__sv.attr(rect1, "y", rect1_y_value);
			}

			if (/*label*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*x*/ 1) {
				__sv.set_style(div, "left", /*x*/ ctx[0] + "px");
			}

			if (dirty & /*y*/ 2) {
				__sv.set_style(div, "top", /*y*/ ctx[1] + "px");
			}
		},
		i: __sv.noop,
		o: __sv.noop,
		d(detaching) {
			if (detaching) __sv.detach(div);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let position;
	
	let { x } = $$props;
	let { y } = $$props;
	let { min } = $$props;
	let { max } = $$props;
	let { value } = $$props;
	let { label } = $$props;
	let { steps = 200 } = $$props;
	let { precision = 0 } = $$props;

	const onPan = ({ dy }) => {
		if (dy !== 0) {
			const interval = (max - min) / steps;
			const change = round(value - dy * interval, precision);
			$$invalidate(5, value = Math.max(Math.min(change, max), min));
		}
	};

	$$self.$$set = $$props => {
		if ("x" in $$props) $$invalidate(0, x = $$props.x);
		if ("y" in $$props) $$invalidate(1, y = $$props.y);
		if ("min" in $$props) $$invalidate(6, min = $$props.min);
		if ("max" in $$props) $$invalidate(7, max = $$props.max);
		if ("value" in $$props) $$invalidate(5, value = $$props.value);
		if ("label" in $$props) $$invalidate(2, label = $$props.label);
		if ("steps" in $$props) $$invalidate(8, steps = $$props.steps);
		if ("precision" in $$props) $$invalidate(9, precision = $$props.precision);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value, min, max*/ 224) {
			$$invalidate(3, position = scale(value, [min, max], [190, 5], 0));
		}
	};

	return [x, y, label, position, onPan, value, min, max, steps, precision];
}

class Fader extends __sv.SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-byng8-style")) add_css$2();

		__sv.init(this, options, instance$2, create_fragment$2, __sv.safe_not_equal, {
			x: 0,
			y: 1,
			min: 6,
			max: 7,
			value: 5,
			label: 2,
			steps: 8,
			precision: 9
		});
	}
}

/* node_modules/@banksean/patchcab-ui/lib/components/Indicator.svelte generated by Svelte v3.35.0 */

function add_css$1() {
	var style = __sv.element("style");
	style.id = "svelte-1pjduaz-style";
	style.textContent = "button.svelte-1pjduaz{position:absolute;width:18px;height:18px;border-radius:18px;background:var(--color-dark);border:1px solid rgba(0, 0, 0, 0.32);box-shadow:inset 2px 2px 0px rgba(255, 255, 255, 0.08), 0px 0px 0px 2px rgba(0, 0, 0, 0.12);cursor:pointer;color:inherit}button.high.svelte-1pjduaz{background:var(--color-dark-highlight)}button.svelte-1pjduaz{width:10px;height:10px;border-radius:50%}button.on.svelte-1pjduaz{background:var(--color-on);box-shadow:inset 2px 2px 0px rgba(255, 255, 255, 0.24), 0px 0px 0px 2px rgba(0, 0, 0, 0.12)}button.on.high.svelte-1pjduaz{background:var(--color-on-highlight)}";
	__sv.append(document.head, style);
}

// (43:0) {#if label}
function create_if_block(ctx) {
	let label_1;
	let current;

	label_1 = new Label({
			props: {
				top: -1,
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			__sv.create_component(label_1.$$.fragment);
		},
		m(target, anchor) {
			__sv.mount_component(label_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const label_1_changes = {};

			if (dirty & /*$$scope, label*/ 33) {
				label_1_changes.$$scope = { dirty, ctx };
			}

			label_1.$set(label_1_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(label_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(label_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__sv.destroy_component(label_1, detaching);
		}
	};
}

// (44:0) <Label top={-1}>
function create_default_slot$1(ctx) {
	let t;

	return {
		c() {
			t = __sv.text(/*label*/ ctx[0]);
		},
		m(target, anchor) {
			__sv.insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*label*/ 1) __sv.set_data(t, /*label*/ ctx[0]);
		},
		d(detaching) {
			if (detaching) __sv.detach(t);
		}
	};
}

function create_fragment$1(ctx) {
	let button;
	let current;
	let if_block = /*label*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			button = __sv.element("button");
			if (if_block) if_block.c();
			__sv.attr(button, "aria-label", "indicator");
			__sv.set_style(button, "left", /*x*/ ctx[3] + "px");
			__sv.set_style(button, "top", /*y*/ ctx[4] + "px");
			__sv.attr(button, "class", "svelte-1pjduaz");
			__sv.toggle_class(button, "on", /*active*/ ctx[2]);
			__sv.toggle_class(button, "high", /*high*/ ctx[1]);
		},
		m(target, anchor) {
			__sv.insert(target, button, anchor);
			if (if_block) if_block.m(button, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*label*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*label*/ 1) {
						__sv.transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					__sv.transition_in(if_block, 1);
					if_block.m(button, null);
				}
			} else if (if_block) {
				__sv.group_outros();

				__sv.transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				__sv.check_outros();
			}

			if (!current || dirty & /*x*/ 8) {
				__sv.set_style(button, "left", /*x*/ ctx[3] + "px");
			}

			if (!current || dirty & /*y*/ 16) {
				__sv.set_style(button, "top", /*y*/ ctx[4] + "px");
			}

			if (dirty & /*active*/ 4) {
				__sv.toggle_class(button, "on", /*active*/ ctx[2]);
			}

			if (dirty & /*high*/ 2) {
				__sv.toggle_class(button, "high", /*high*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;
			__sv.transition_in(if_block);
			current = true;
		},
		o(local) {
			__sv.transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) __sv.detach(button);
			if (if_block) if_block.d();
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { label = undefined } = $$props;
	let { high } = $$props;
	let { active = false } = $$props;
	let { x = 0 } = $$props;
	let { y = 0 } = $$props;

	$$self.$$set = $$props => {
		if ("label" in $$props) $$invalidate(0, label = $$props.label);
		if ("high" in $$props) $$invalidate(1, high = $$props.high);
		if ("active" in $$props) $$invalidate(2, active = $$props.active);
		if ("x" in $$props) $$invalidate(3, x = $$props.x);
		if ("y" in $$props) $$invalidate(4, y = $$props.y);
	};

	return [label, high, active, x, y];
}

class Indicator extends __sv.SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1pjduaz-style")) add_css$1();
		__sv.init(this, options, instance$1, create_fragment$1, __sv.safe_not_equal, { label: 0, high: 1, active: 2, x: 3, y: 4 });
	}
}

/* src/MIDIIn.svelte generated by Svelte v3.35.0 */

function add_css() {
	var style = __sv.element("style");
	style.id = "svelte-1jen6zg-style";
	style.textContent = "midi.svelte-1jen6zg{position:absolute;top:50px;left:20px}";
	__sv.append(document.head, style);
}

// (136:0) <Faceplate title="MIDI IN" color="#1D1E22">
function create_default_slot(ctx) {
	let midi;
	let indicator0;
	let t0;
	let knob;
	let updating_value;
	let t1;
	let patch0;
	let t2;
	let indicator1;
	let t3;
	let patch1;
	let t4;
	let patch2;
	let t5;
	let switch_1;
	let t6;
	let patch3;
	let t7;
	let patch4;
	let t8;
	let patch5;
	let t9;
	let patch6;
	let current;

	indicator0 = new Indicator({
			props: {
				x: 20,
				active: /*inputs*/ ctx[1] != undefined,
				label: /*midiStatus*/ ctx[3]
			}
		});

	function knob_value_binding(value) {
		/*knob_value_binding*/ ctx[11](value);
	}

	let knob_props = {
		size: "s",
		y: 40,
		x: 4,
		min: 0,
		max: 15,
		precision: 0,
		label: "ch " + (/*state*/ ctx[0].channel + 1)
	};

	if (/*state*/ ctx[0].channel !== void 0) {
		knob_props.value = /*state*/ ctx[0].channel;
	}

	knob = new Knob({ props: knob_props });
	__sv.binding_callbacks.push(() => __sv.bind(knob, "value", knob_value_binding));

	patch0 = new Patch({
			props: {
				y: 120,
				output: /*gateOut*/ ctx[4],
				name: "gate",
				label: "gate"
			}
		});

	indicator1 = new Indicator({
			props: {
				y: 128,
				x: 40,
				active: /*keysDown*/ ctx[2].size > 0
			}
		});

	patch1 = new Patch({
			props: {
				y: 170,
				output: /*noteCv*/ ctx[8],
				name: "cv-note",
				label: "f"
			}
		});

	patch2 = new Patch({
			props: {
				y: 220,
				output: /*velCv*/ ctx[9],
				name: "cv-vel",
				label: "vel"
			}
		});

	switch_1 = new Switch({
			props: {
				x: 40,
				y: 220,
				value: /*state*/ ctx[0].velocityAftertouch === true,
				onToggle: /*func*/ ctx[12],
				square: true,
				label: "aftch"
			}
		});

	patch3 = new Patch({
			props: {
				y: 270,
				output: /*modCv*/ ctx[10],
				name: "cv-mod",
				label: "mod"
			}
		});

	patch4 = new Patch({
			props: {
				x: 80,
				y: 120,
				output: /*start*/ ctx[5],
				name: "start",
				label: "start"
			}
		});

	patch5 = new Patch({
			props: {
				x: 80,
				y: 170,
				output: /*stop*/ ctx[6],
				name: "stop",
				label: "stop"
			}
		});

	patch6 = new Patch({
			props: {
				x: 80,
				y: 220,
				output: /*clock*/ ctx[7],
				name: "clock",
				label: "clck"
			}
		});

	return {
		c() {
			midi = __sv.element("midi");
			__sv.create_component(indicator0.$$.fragment);
			t0 = __sv.space();
			__sv.create_component(knob.$$.fragment);
			t1 = __sv.space();
			__sv.create_component(patch0.$$.fragment);
			t2 = __sv.space();
			__sv.create_component(indicator1.$$.fragment);
			t3 = __sv.space();
			__sv.create_component(patch1.$$.fragment);
			t4 = __sv.space();
			__sv.create_component(patch2.$$.fragment);
			t5 = __sv.space();
			__sv.create_component(switch_1.$$.fragment);
			t6 = __sv.space();
			__sv.create_component(patch3.$$.fragment);
			t7 = __sv.space();
			__sv.create_component(patch4.$$.fragment);
			t8 = __sv.space();
			__sv.create_component(patch5.$$.fragment);
			t9 = __sv.space();
			__sv.create_component(patch6.$$.fragment);
			__sv.attr(midi, "class", "svelte-1jen6zg");
		},
		m(target, anchor) {
			__sv.insert(target, midi, anchor);
			__sv.mount_component(indicator0, midi, null);
			__sv.append(midi, t0);
			__sv.mount_component(knob, midi, null);
			__sv.append(midi, t1);
			__sv.mount_component(patch0, midi, null);
			__sv.append(midi, t2);
			__sv.mount_component(indicator1, midi, null);
			__sv.append(midi, t3);
			__sv.mount_component(patch1, midi, null);
			__sv.append(midi, t4);
			__sv.mount_component(patch2, midi, null);
			__sv.append(midi, t5);
			__sv.mount_component(switch_1, midi, null);
			__sv.append(midi, t6);
			__sv.mount_component(patch3, midi, null);
			__sv.append(midi, t7);
			__sv.mount_component(patch4, midi, null);
			__sv.append(midi, t8);
			__sv.mount_component(patch5, midi, null);
			__sv.append(midi, t9);
			__sv.mount_component(patch6, midi, null);
			current = true;
		},
		p(ctx, dirty) {
			const indicator0_changes = {};
			if (dirty & /*inputs*/ 2) indicator0_changes.active = /*inputs*/ ctx[1] != undefined;
			if (dirty & /*midiStatus*/ 8) indicator0_changes.label = /*midiStatus*/ ctx[3];
			indicator0.$set(indicator0_changes);
			const knob_changes = {};
			if (dirty & /*state*/ 1) knob_changes.label = "ch " + (/*state*/ ctx[0].channel + 1);

			if (!updating_value && dirty & /*state*/ 1) {
				updating_value = true;
				knob_changes.value = /*state*/ ctx[0].channel;
				__sv.add_flush_callback(() => updating_value = false);
			}

			knob.$set(knob_changes);
			const indicator1_changes = {};
			if (dirty & /*keysDown*/ 4) indicator1_changes.active = /*keysDown*/ ctx[2].size > 0;
			indicator1.$set(indicator1_changes);
			const switch_1_changes = {};
			if (dirty & /*state*/ 1) switch_1_changes.value = /*state*/ ctx[0].velocityAftertouch === true;
			if (dirty & /*state*/ 1) switch_1_changes.onToggle = /*func*/ ctx[12];
			switch_1.$set(switch_1_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(indicator0.$$.fragment, local);
			__sv.transition_in(knob.$$.fragment, local);
			__sv.transition_in(patch0.$$.fragment, local);
			__sv.transition_in(indicator1.$$.fragment, local);
			__sv.transition_in(patch1.$$.fragment, local);
			__sv.transition_in(patch2.$$.fragment, local);
			__sv.transition_in(switch_1.$$.fragment, local);
			__sv.transition_in(patch3.$$.fragment, local);
			__sv.transition_in(patch4.$$.fragment, local);
			__sv.transition_in(patch5.$$.fragment, local);
			__sv.transition_in(patch6.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(indicator0.$$.fragment, local);
			__sv.transition_out(knob.$$.fragment, local);
			__sv.transition_out(patch0.$$.fragment, local);
			__sv.transition_out(indicator1.$$.fragment, local);
			__sv.transition_out(patch1.$$.fragment, local);
			__sv.transition_out(patch2.$$.fragment, local);
			__sv.transition_out(switch_1.$$.fragment, local);
			__sv.transition_out(patch3.$$.fragment, local);
			__sv.transition_out(patch4.$$.fragment, local);
			__sv.transition_out(patch5.$$.fragment, local);
			__sv.transition_out(patch6.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) __sv.detach(midi);
			__sv.destroy_component(indicator0);
			__sv.destroy_component(knob);
			__sv.destroy_component(patch0);
			__sv.destroy_component(indicator1);
			__sv.destroy_component(patch1);
			__sv.destroy_component(patch2);
			__sv.destroy_component(switch_1);
			__sv.destroy_component(patch3);
			__sv.destroy_component(patch4);
			__sv.destroy_component(patch5);
			__sv.destroy_component(patch6);
		}
	};
}

function create_fragment(ctx) {
	let faceplate;
	let current;

	faceplate = new Faceplate({
			props: {
				title: "MIDI IN",
				color: "#1D1E22",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			__sv.create_component(faceplate.$$.fragment);
		},
		m(target, anchor) {
			__sv.mount_component(faceplate, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const faceplate_changes = {};

			if (dirty & /*$$scope, state, keysDown, inputs, midiStatus*/ 2097167) {
				faceplate_changes.$$scope = { dirty, ctx };
			}

			faceplate.$set(faceplate_changes);
		},
		i(local) {
			if (current) return;
			__sv.transition_in(faceplate.$$.fragment, local);
			current = true;
		},
		o(local) {
			__sv.transition_out(faceplate.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__sv.destroy_component(faceplate, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let inputs;

	let { state = {
		channel: 0,
		velocityAftertouch: false,
		input: 0, // If you have multiple midi interfaces, e.g.
		
	} } = $$props;

	navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
	const gateOut = new io();
	const start = new io();
	const stop = new io();
	const clock = new io();
	const noteCv = new Tone.Signal();
	const velCv = new Tone.Signal();
	const modCv = new Tone.Signal();
	let keysDown = new Set();
	let midiStatus = "connecting...";

	function onMIDISuccess(midiAccess) {
		$$invalidate(3, midiStatus = "connected");
		$$invalidate(1, inputs = midiAccess.inputs);
		midiAccess.outputs;

		for (var input of midiAccess.inputs.values()) {
			// TODO: Make some kind of input selector if there
			// are multiple inputs. The current behavior will
			// respond to events on *any* connected interface.
			input.onmidimessage = onMIDIMessage;
		}
	}

	function onMIDIMessage(midiMessage) {
		// TODO: Clean this up and catch more corner cases (like treating a note-on
		// event with 0 velocity as a note-off event, deal with legato, glide etc).
		// https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message
		// There may exist some libraries to help with this, but keeping the dependencies
		// low for maintenance's sake.
		// System Messages:
		if (midiMessage.data[0] >> 4 == 15) {
			console.log("system message", midiMessage.data, midiMessage.data[0] & 15);

			switch (midiMessage.data[0] & 15) {
				case 8:
					clock.bang(Tone.now(), true, false);
					break;
				case 10:
					start.bang(Tone.now(), true, false);
					break;
				case 12:
					stop.bang(Tone.now(), true, false);
					break;
			}

			return;
		}

		// Channel Voice Messages:
		const channel = midiMessage.data[0] & 15;

		if (channel != state.channel) {
			return;
		}

		switch (midiMessage.data[0] >> 4) {
			case 8:
				noteOff(midiMessage.data[1], midiMessage.data[2]);
				break;
			case 9:
				noteOn(midiMessage.data[1], midiMessage.data[2]);
				break;
			case 10:
				break;
			case 11:
				controlChange(midiMessage.data[1], midiMessage.data[2]);
				break;
			case 12:
				// program change
				break;
			case 13:
				channelAftertouch(midiMessage.data[1]);
				break;
		}
	}

	function noteOn(note, velocity) {
		keysDown.add(note);

		if (keysDown.size == 1) {
			gateOut.bang(Tone.now(), true, false);
		}

		// TODO: Glide
		let p = Tone.Frequency(note, "midi").toFrequency();

		console.log("note on", p);
		noteCv.setValueAtTime(p, Tone.now());
		velCv.setValueAtTime(velocity / 127, Tone.now());

		// Sigh, this is so Svelte's templating or whatever it is updates the
		// gate's indicator light.
		$$invalidate(2, keysDown = new Set(keysDown));
	}

	function noteOff(note, velocity) {
		keysDown.delete(note);

		if (keysDown.size == 0) {
			gateOut.bang(Tone.now(), false, true);
		}

		velCv.setValueAtTime(velocity / 127, Tone.now());

		// If there were other keys still down, switch
		// output CV to match it's respective frequency.
		const stillDown = Array.from(keysDown);

		if (stillDown.length > 0) {
			// TODO: Glide
			noteCv.setValueAtTime(Tone.Frequency(stillDown[0], "midi").toFrequency(), Tone.now());
		}

		// Sigh, this is so Svelte's templating or whatever it is updates the
		// gate's indicator light.
		$$invalidate(2, keysDown = new Set(keysDown));
	}

	function controlChange(control, value) {
		modCv.setValueAtTime(value / 127, Tone.now());
	}

	function channelAftertouch(velocity) {
		if (!state.velocityAftertouch) {
			return;
		}

		velCv.setValueAtTime(velocity / 127, Tone.now());
	}

	function onMIDIFailure() {
		console.log("Could not access your MIDI devices.");
		$$invalidate(3, midiStatus = "disconnected");
	}

	function knob_value_binding(value) {
		if ($$self.$$.not_equal(state.channel, value)) {
			state.channel = value;
			$$invalidate(0, state);
		}
	}

	const func = () => {
		$$invalidate(0, state.velocityAftertouch = !state.velocityAftertouch, state);
	};

	$$self.$$set = $$props => {
		if ("state" in $$props) $$invalidate(0, state = $$props.state);
	};

	return [
		state,
		inputs,
		keysDown,
		midiStatus,
		gateOut,
		start,
		stop,
		clock,
		noteCv,
		velCv,
		modCv,
		knob_value_binding,
		func
	];
}

class MIDIIn extends __sv.SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1jen6zg-style")) add_css();
		__sv.init(this, options, instance, create_fragment, __sv.safe_not_equal, { state: 0 });
	}
}

export default MIDIIn;
