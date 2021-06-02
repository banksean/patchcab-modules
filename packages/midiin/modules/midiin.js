import{usePan as t,scale as e,round as n,Label as o,Faceplate as s,Knob as r,Patch as i,Switch as a}from"/js/core.js";function c(){}const u=t=>t;function l(t,e){for(const n in e)t[n]=e[n];return t}function d(t){return t&&"object"==typeof t&&"function"==typeof t.then}function _(t){return t()}function f(){return Object.create(null)}function p(t){t.forEach(_)}function m(t){return"function"==typeof t}function h(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function v(t){return 0===Object.keys(t).length}function g(t,...e){if(null==t)return c;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function b(t){let e;return g(t,(t=>e=t))(),e}function y(t,e,n,o){return t[1]&&o?l(n.ctx.slice(),t[1](o(e))):n.ctx}function $(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}const w=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);const F="undefined"!=typeof window;let x=F?()=>window.performance.now():()=>Date.now(),k=F?t=>requestAnimationFrame(t):c;const S=new Set;function E(t){S.forEach((e=>{e.c(t)||(S.delete(e),e.f())})),0!==S.size&&k(E)}function A(t){let e;return 0===S.size&&k(E),{promise:new Promise((n=>{S.add(e={c:t,f:n})})),abort(){S.delete(e)}}}function T(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function z(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function L(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t){return Array.from(t.childNodes)}function q(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return D(e)}let B;function I(){if(void 0===B){B=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){B=!0}}return B}function U(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const N=new Set;let P,H=0;function V(t,e,n,o,s,r,i,a=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*r(t);u+=100*t+`%{${i(o,1-o)}}\n`}const l=u+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${a}`,_=t.ownerDocument;N.add(_);const f=_.__svelte_stylesheet||(_.__svelte_stylesheet=_.head.appendChild(O("style")).sheet),p=_.__svelte_rules||(_.__svelte_rules={});p[d]||(p[d]=!0,f.insertRule(`@keyframes ${d} ${l}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${s}ms 1 both`,H+=1,d}function W(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),H-=s,H||k((()=>{H||(N.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),N.clear())})))}function X(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function Y(t){P=t}function G(){if(!P)throw new Error("Function called outside component initialization");return P}const J=[],K=[],Q=[],Z=[],tt=Promise.resolve();let et=!1;function nt(){et||(et=!0,tt.then(it))}function ot(t){Q.push(t)}let st=!1;const rt=new Set;function it(){if(!st){st=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];Y(e),at(e.$$)}for(Y(null),J.length=0;K.length;)K.pop()();for(let t=0;t<Q.length;t+=1){const e=Q[t];rt.has(e)||(rt.add(e),e())}Q.length=0}while(J.length);for(;Z.length;)Z.pop()();et=!1,st=!1,rt.clear()}}function at(t){if(null!==t.fragment){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}let ct;function ut(){return ct||(ct=Promise.resolve(),ct.then((()=>{ct=null}))),ct}function lt(t,e,n){t.dispatchEvent(U(`${e?"intro":"outro"}${n}`))}const dt=new Set;let _t;function ft(){_t={r:0,c:[],p:_t}}function pt(){_t.r||p(_t.c),_t=_t.p}function mt(t,e){t&&t.i&&(dt.delete(t),t.i(e))}function ht(t,e,n,o){if(t&&t.o){if(dt.has(t))return;dt.add(t),_t.c.push((()=>{dt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const vt={duration:0},gt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function bt(t,e){t.d(1),e.delete(t.key)}function yt(t,e){ht(t,1,1,(()=>{e.delete(t.key)}))}const $t=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),wt=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u,Ft={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function xt(t){return String(t).replace(/["'&<>]/g,(t=>Ft[t]))}let kt,St;function Et(t,e,n){const{fragment:o,on_mount:s,on_destroy:r,after_update:i}=t.$$;o&&o.m(e,n),ot((()=>{const e=s.map(_).filter(m);r?r.push(...e):p(e),t.$$.on_mount=[]})),i.forEach(ot)}function At(t,e){const n=t.$$;null!==n.fragment&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}"function"==typeof HTMLElement&&(St=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){At(this,1),this.$destroy=c}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!v(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class Tt{$destroy(){At(this,1),this.$destroy=c}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!v(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function jt(t,e){document.dispatchEvent(U(t,Object.assign({version:"3.31.2"},e)))}function Ct(t){jt("SvelteDOMRemove",{node:t}),C(t)}class Ot extends Tt{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}var Mt=Object.freeze({__proto__:null,HtmlTag:class{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=O(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)j(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(C)}},SvelteComponent:Tt,SvelteComponentDev:Ot,SvelteComponentTyped:class extends Ot{constructor(t){super(t)}},get SvelteElement(){return St},action_destroyer:function(t){return t&&m(t.destroy)?t.destroy:c},add_attribute:function(t,e,n){return null==e||n&&!e?"":` ${t}${!0===e?"":`=${"string"==typeof e?JSON.stringify(xt(e)):`"${e}"`}`}`},add_classes:function(t){return t?` class="${t}"`:""},add_flush_callback:function(t){Z.push(t)},add_location:function(t,e,n,o,s){t.__svelte_meta={loc:{file:e,line:n,column:o,char:s}}},add_render_callback:ot,add_resize_listener:function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=O("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=I();let s;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=z(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=z(n.contentWindow,"resize",e)}),T(t,n),()=>{(o||s&&n.contentWindow)&&s(),C(n)}},add_transform:X,afterUpdate:function(t){G().$$.after_update.push(t)},append:T,append_dev:function(t,e){jt("SvelteDOMInsert",{target:t,node:e}),T(t,e)},assign:l,attr:L,attr_dev:function(t,e,n){L(t,e,n),null==n?jt("SvelteDOMRemoveAttribute",{node:t,attribute:e}):jt("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})},attribute_to_object:function(t){const e={};for(const n of t)e[n.name]=n.value;return e},beforeUpdate:function(t){G().$$.before_update.push(t)},bind:function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))},binding_callbacks:K,blank_object:f,bubble:function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))},check_outros:pt,children:R,claim_component:function(t,e){t&&t.l(e)},claim_element:function(t,e,n,o){for(let o=0;o<t.length;o+=1){const s=t[o];if(s.nodeName===e){let e=0;const r=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)s.removeAttribute(r[t]);return t.splice(o,1)[0]}}return o?M(e):O(e)},claim_space:function(t){return q(t," ")},claim_text:q,clear_loops:function(){S.clear()},component_subscribe:function(t,e,n){t.$$.on_destroy.push(g(e,n))},compute_rest_props:function(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n},compute_slots:function(t){const e={};for(const n in t)e[n]=!0;return e},createEventDispatcher:function(){const t=G();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=U(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}},create_animation:function(t,e,n,o){if(!e)return c;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return c;const{delay:r=0,duration:i=300,easing:a=u,start:l=x()+r,end:d=l+i,tick:_=c,css:f}=n(t,{from:e,to:s},o);let p,m=!0,h=!1;function v(){f&&W(t,p),m=!1}return A((t=>{if(!h&&t>=l&&(h=!0),h&&t>=d&&(_(1,0),v()),!m)return!1;if(h){const e=0+1*a((t-l)/i);_(e,1-e)}return!0})),f&&(p=V(t,0,1,i,r,a,f)),r||(h=!0),_(0,1),v},create_bidirectional_transition:function(t,e,n,o){let s=e(t,n),r=o?0:1,i=null,a=null,l=null;function d(){l&&W(t,l)}function _(t,e){const n=t.b-r;return e*=Math.abs(n),{a:r,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function f(e){const{delay:n=0,duration:o=300,easing:f=u,tick:m=c,css:h}=s||vt,v={start:x()+n,b:e};e||(v.group=_t,_t.r+=1),i||a?a=v:(h&&(d(),l=V(t,r,e,o,n,f,h)),e&&m(0,1),i=_(v,o),ot((()=>lt(t,e,"start"))),A((e=>{if(a&&e>a.start&&(i=_(a,o),a=null,lt(t,i.b,"start"),h&&(d(),l=V(t,r,i.b,i.duration,0,f,s.css))),i)if(e>=i.end)m(r=i.b,1-r),lt(t,i.b,"end"),a||(i.b?d():--i.group.r||p(i.group.c)),i=null;else if(e>=i.start){const t=e-i.start;r=i.a+i.d*f(t/i.duration),m(r,1-r)}return!(!i&&!a)})))}return{run(t){m(s)?ut().then((()=>{s=s(),f(t)})):f(t)},end(){d(),i=a=null}}},create_component:function(t){t&&t.c()},create_in_transition:function(t,e,n){let o,s,r=e(t,n),i=!1,a=0;function l(){o&&W(t,o)}function d(){const{delay:e=0,duration:n=300,easing:d=u,tick:_=c,css:f}=r||vt;f&&(o=V(t,0,1,n,e,d,f,a++)),_(0,1);const p=x()+e,m=p+n;s&&s.abort(),i=!0,ot((()=>lt(t,!0,"start"))),s=A((e=>{if(i){if(e>=m)return _(1,0),lt(t,!0,"end"),l(),i=!1;if(e>=p){const t=d((e-p)/n);_(t,1-t)}}return i}))}let _=!1;return{start(){_||(W(t),m(r)?(r=r(),ut().then(d)):d())},invalidate(){_=!1},end(){i&&(l(),i=!1)}}},create_out_transition:function(t,e,n){let o,s=e(t,n),r=!0;const i=_t;function a(){const{delay:e=0,duration:n=300,easing:a=u,tick:l=c,css:d}=s||vt;d&&(o=V(t,1,0,n,e,a,d));const _=x()+e,f=_+n;ot((()=>lt(t,!1,"start"))),A((e=>{if(r){if(e>=f)return l(0,1),lt(t,!1,"end"),--i.r||p(i.c),!1;if(e>=_){const t=a((e-_)/n);l(1-t,t)}}return r}))}return i.r+=1,m(s)?ut().then((()=>{s=s(),a()})):a(),{end(e){e&&s.tick&&s.tick(1,0),r&&(o&&W(t,o),r=!1)}}},create_slot:function(t,e,n,o){if(t){const s=y(t,e,n,o);return t[0](s)}},create_ssr_component:function(t){function e(e,n,o,s){const r=P;Y({$$:{on_destroy:kt,context:new Map(r?r.$$.context:[]),on_mount:[],before_update:[],after_update:[],callbacks:f()}});const i=t(e,n,o,s);return Y(r),i}return{render:(t={},n={})=>{kt=[];const o={title:"",head:"",css:new Set},s=e(o,t,{},n);return p(kt),{html:s,css:{code:Array.from(o.css).map((t=>t.code)).join("\n"),map:null},head:o.title+o.head}},$$render:e}},get current_component(){return P},custom_event:U,dataset_dev:function(t,e,n){t.dataset[e]=n,jt("SvelteDOMSetDataset",{node:t,property:e,value:n})},debug:function(t,e,n,o){return console.log(`{@debug} ${t?t+" ":""}(${e}:${n})`),console.log(o),""},destroy_block:bt,destroy_component:At,destroy_each:function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)},detach:C,detach_after_dev:function(t){for(;t.nextSibling;)Ct(t.nextSibling)},detach_before_dev:function(t){for(;t.previousSibling;)Ct(t.previousSibling)},detach_between_dev:function(t,e){for(;t.nextSibling&&t.nextSibling!==e;)Ct(t.nextSibling)},detach_dev:Ct,dirty_components:J,dispatch_dev:jt,each:function(t,e){let n="";for(let o=0;o<t.length;o+=1)n+=e(t[o],o);return n},element:O,element_is:function(t,e){return document.createElement(t,{is:e})},empty:function(){return D("")},escape:xt,escaped:Ft,exclude_internal_props:function(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e},fix_and_destroy_block:function(t,e){t.f(),bt(t,e)},fix_and_outro_and_destroy_block:function(t,e){t.f(),yt(t,e)},fix_position:function(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,X(t,s)}},flush:it,getContext:function(t){return G().$$.context.get(t)},get_binding_group_value:function(t,e,n){const o=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&o.add(t[e].__value);return n||o.delete(e),Array.from(o)},get_current_component:G,get_custom_elements_slots:function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e},get_slot_changes:$,get_slot_context:y,get_spread_object:function(t){return"object"==typeof t&&null!==t?t:{}},get_spread_update:function(t,e){const n={},o={},s={$$scope:1};let r=t.length;for(;r--;){const i=t[r],a=e[r];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[r]=a}else for(const t in i)s[t]=1}for(const t in o)t in n||(n[t]=void 0);return n},get_store_value:b,globals:gt,group_outros:ft,handle_promise:function(t,e){const n=e.token={};function o(t,o,s,r){if(e.token!==n)return;e.resolved=r;let i=e.ctx;void 0!==s&&(i=i.slice(),i[s]=r);const a=t&&(e.current=t)(i);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(ft(),ht(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),pt())})):e.block.d(1),a.c(),mt(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[o]=a),c&&it()}if(d(t)){const n=G();if(t.then((t=>{Y(n),o(e.then,1,e.value,t),Y(null)}),(t=>{if(Y(n),o(e.catch,2,e.error,t),Y(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}},hasContext:function(t){return G().$$.context.has(t)},has_prop:w,identity:u,init:function(t,e,n,o,s,r,i=[-1]){const a=P;Y(t);const u=e.props||{},l=t.$$={fragment:null,ctx:null,props:r,update:c,not_equal:s,bound:f(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:f(),dirty:i,skip_bound:!1};let d=!1;if(l.ctx=n?n(t,u,((e,n,...o)=>{const r=o.length?o[0]:n;return l.ctx&&s(l.ctx[e],l.ctx[e]=r)&&(!l.skip_bound&&l.bound[e]&&l.bound[e](r),d&&function(t,e){-1===t.$$.dirty[0]&&(J.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],l.update(),d=!0,p(l.before_update),l.fragment=!!o&&o(l.ctx),e.target){if(e.hydrate){const t=R(e.target);l.fragment&&l.fragment.l(t),t.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&mt(t.$$.fragment),Et(t,e.target,e.anchor),it()}Y(a)},insert:j,insert_dev:function(t,e,n){jt("SvelteDOMInsert",{target:t,node:e,anchor:n}),j(t,e,n)},intros:{enabled:!1},invalid_attribute_name_character:wt,is_client:F,is_crossorigin:I,is_empty:v,is_function:m,is_promise:d,listen:z,listen_dev:function(t,e,n,o,s,r){const i=!0===o?["capture"]:o?Array.from(Object.keys(o)):[];s&&i.push("preventDefault"),r&&i.push("stopPropagation"),jt("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:i});const a=z(t,e,n,o);return()=>{jt("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:i}),a()}},loop:A,loop_guard:function(t){const e=Date.now();return()=>{if(Date.now()-e>t)throw new Error("Infinite loop detected")}},missing_component:{$$render:()=>""},mount_component:Et,noop:c,not_equal:function(t,e){return t!=t?e==e:t!==e},get now(){return x},null_to_empty:function(t){return null==t?"":t},object_without_properties:function(t,e){const n={};for(const o in t)w(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n},onDestroy:function(t){G().$$.on_destroy.push(t)},onMount:function(t){G().$$.on_mount.push(t)},once:function(t){let e=!1;return function(...n){e||(e=!0,t.call(this,...n))}},outro_and_destroy_block:yt,prevent_default:function(t){return function(e){return e.preventDefault(),t.call(this,e)}},prop_dev:function(t,e,n){t[e]=n,jt("SvelteDOMSetProperty",{node:t,property:e,value:n})},query_selector_all:function(t,e=document.body){return Array.from(e.querySelectorAll(t))},get raf(){return k},run:_,run_all:p,safe_not_equal:h,schedule_update:nt,select_multiple_value:function(t){return[].map.call(t.querySelectorAll(":checked"),(t=>t.__value))},select_option:function(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}},select_options:function(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];o.selected=~e.indexOf(o.__value)}},select_value:function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value},self:function(t){return function(e){e.target===this&&t.call(this,e)}},setContext:function(t,e){G().$$.context.set(t,e)},set_attributes:function(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:L(t,o,e[o])},set_current_component:Y,set_custom_element_data:function(t,e,n){e in t?t[e]=n:L(t,e,n)},set_data:function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)},set_data_dev:function(t,e){e=""+e,t.wholeText!==e&&(jt("SvelteDOMSetData",{node:t,data:e}),t.data=e)},set_input_type:function(t,e){try{t.type=e}catch(t){}},set_input_value:function(t,e){t.value=null==e?"":e},set_now:function(t){x=t},set_raf:function(t){k=t},set_store_value:function(t,e,n=e){return t.set(n),e},set_style:function(t,e,n,o){t.style.setProperty(e,n,o?"important":"")},set_svg_attributes:function(t,e){for(const n in e)L(t,n,e[n])},space:function(){return D(" ")},spread:function(t,e){const n=Object.assign({},...t);e&&(null==n.class?n.class=e:n.class+=" "+e);let o="";return Object.keys(n).forEach((t=>{if(wt.test(t))return;const e=n[t];!0===e?o+=" "+t:$t.has(t.toLowerCase())?e&&(o+=" "+t):null!=e&&(o+=` ${t}="${String(e).replace(/"/g,"&#34;").replace(/'/g,"&#39;")}"`)})),o},stop_propagation:function(t){return function(e){return e.stopPropagation(),t.call(this,e)}},subscribe:g,svg_element:M,text:D,tick:function(){return nt(),tt},time_ranges_to_array:function(t){const e=[];for(let n=0;n<t.length;n+=1)e.push({start:t.start(n),end:t.end(n)});return e},to_number:function(t){return""===t?null:+t},toggle_class:function(t,e,n){t.classList[n?"add":"remove"](e)},transition_in:mt,transition_out:ht,update_keyed_each:function(t,e,n,o,s,r,i,a,c,u,l,d){let _=t.length,f=r.length,p=_;const m={};for(;p--;)m[t[p].key]=p;const h=[],v=new Map,g=new Map;for(p=f;p--;){const t=d(s,r,p),a=n(t);let c=i.get(a);c?o&&c.p(t,e):(c=u(a,t),c.c()),v.set(a,h[p]=c),a in m&&g.set(a,Math.abs(p-m[a]))}const b=new Set,y=new Set;function $(t){mt(t,1),t.m(a,l),i.set(t.key,t),l=t.first,f--}for(;_&&f;){const e=h[f-1],n=t[_-1],o=e.key,s=n.key;e===n?(l=e.first,_--,f--):v.has(s)?!i.has(o)||b.has(o)?$(e):y.has(s)?_--:g.get(o)>g.get(s)?(y.add(o),$(e)):(b.add(s),_--):(c(n,i),_--)}for(;_--;){const e=t[_];v.has(e.key)||c(e,i)}for(;f;)$(h[f-1]);return h},update_slot:function(t,e,n,o,s,r,i){const a=$(e,o,s,r);if(a){const s=y(e,n,o,i);t.p(s,a)}},update_slot_spread:function(t,e,n,o,s,r,i,a){const c=i(s)|$(e,o,s,r);if(c){const s=y(e,n,o,a);t.p(s,c)}},validate_component:function(t,e){if(!t||!t.$$render)throw"svelte:component"===e&&(e+=" this={...}"),new Error(`<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return t},validate_each_argument:function(t){if(!("string"==typeof t||t&&"object"==typeof t&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw"function"==typeof Symbol&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}},validate_each_keys:function(t,e,n,o){const s=new Set;for(let r=0;r<e.length;r++){const i=o(n(t,e,r));if(s.has(i))throw new Error("Cannot have duplicate keys in a keyed each");s.add(i)}},validate_slots:function(t,e,n){for(const o of Object.keys(e))~n.indexOf(o)||console.warn(`<${t}> received an unexpected slot "${o}".`)},validate_store:function(t,e){if(null!=t&&"function"!=typeof t.subscribe)throw new Error(`'${e}' is not a store with a 'subscribe' method`)},xlink_attr:function(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}});const Dt=16,zt=380,Lt=[];function Rt(t,e=c){let n;const o=[];function s(e){if(h(t,e)&&(t=e,n)){const e=!Lt.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),Lt.push(n,t)}if(e){for(let t=0;t<Lt.length;t+=2)Lt[t][0](Lt[t+1]);Lt.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(r,i=c){const a=[r,i];return o.push(a),1===o.length&&(n=e(s)||c),r(t),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(n(),n=null)}}}}new class{constructor(t=[],e=[]){this.modules=Rt([]),this.moduleStates=Rt([]),this.updateCallbacks=[],this.modules.set(t),this.moduleStates.set(e)}get store(){return this.modules}get state(){return b(this.modules)}add(t){const e=this.getEmptySpace(t.size);if(t.position=e,!t.id){const e=Math.random().toString(36).substr(2,9);t.id=`${t.type}-${e}`}return this.moduleStates.update((n=>n.concat([{id:t.id,state:t.state,position:e}]))),this.modules.update((e=>e.concat([t]))),t.id}update(t,e){this.moduleStates.update((n=>n.map((n=>n.id===t?{id:t,state:e,position:n.position}:n))))}remove(t){this.modules.update((e=>e.filter((e=>e.id!==t)))),this.moduleStates.update((e=>e.filter((e=>e.id!==t))))}move(t,e,n){const o=b(this.moduleStates);for(let s=0;s<o.length;s++){const r=o[s];if(r.id===t.id)continue;const i=this.state.find((t=>t.id===r.id));if(!(n+t.size.h*zt<=r.position.y||n>=r.position.y+i.size.h*zt||e+t.size.w*Dt<=r.position.x||e>=r.position.x+i.size.w*Dt))return!1}return this.moduleStates.update((o=>o.map((o=>o.id===t.id?{...o,position:{x:e,y:n}}:o)))),!0}import(t){this.moduleStates.update((()=>t.map((t=>({id:t.id,state:t.state,position:t.position}))))),this.modules.set(t)}export(){const t=b(this.moduleStates);return this.state.map((e=>{const n={...e},{state:o,position:s}=t.find((t=>t.id===n.id));return n.state=o,n.position=s,delete n.libs,delete n.size,delete n.type,n}))}onAfterUpdate(t){this.updateCallbacks.push(t)}afterUpdate(){this.updateCallbacks.forEach((t=>t()))}getEmptySpace(t){const e=this.state;let n=0,o=0,s=0===e.length;const r=document.documentElement.scrollLeft||document.body.scrollLeft,i=document.documentElement.scrollTop||document.body.scrollTop;for(;!s;){let a=!1;for(let s=0;s<e.length;s++){const c=document.getElementById(e[s].id).getBoundingClientRect();if(!(o+zt*t.h-48<=c.y+i||o>=c.bottom-48+i||n+Dt*t.w<=c.x+r||n>=c.right+r)){a=!0;break}}a?n>window.innerWidth?(o+=380,n=0):n+=16:s=!0}return{x:n,y:o}}reset(){this.modules.set([]),this.moduleStates.set([])}};var qt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Bt(t){var e={exports:{}};return t(e,e.exports),e.exports}Bt((function(t,e){!function(){function e(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){i(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof qt&&qt.global===qt?qt:void 0,r=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,r,i){var a=s.URL||s.webkitURL,c=document.createElement("a");r=r||t.name||"download",c.download=r,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?o(c):n(c.href)?e(t,r,i):o(c,c.target="_blank")):(c.href=a.createObjectURL(t),setTimeout((function(){a.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,s,r){if(s=s||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,r),s);else if(n(t))e(t,s,r);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){o(i)}))}}:function(t,n,o,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,o);var a="application/octet-stream"===t.type,c=/constructor/i.test(s.HTMLElement)||s.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&c||r)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},l.readAsDataURL(t)}else{var d=s.URL||s.webkitURL,_=d.createObjectURL(t);i?i.location=_:location.href=_,i=null,setTimeout((function(){d.revokeObjectURL(_)}),4e4)}});s.saveAs=i.saveAs=i,t.exports=i}()})),Bt((function(t,e){var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=document.createElement("input");return"object"===o(e[0])&&(!0===e[0].multiple&&s.setAttribute("multiple",""),void 0!==e[0].accept&&s.setAttribute("accept",e[0].accept)),s.setAttribute("type","file"),s.style.display="none",s.setAttribute("id","hidden-file"),document.body.appendChild(s),new Promise((function(t){s.addEventListener("change",(function(){t(s.files);var n=e[e.length-1];"function"==typeof n&&n(s.files),document.body.removeChild(s)}));var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,0,null),s.dispatchEvent(n)}))},t.exports&&(e=t.exports=n),e.fileDialog=n}));class It{constructor(t){this.bangs=[],this.output=t}connect(t){this.bangs=[...this.bangs,t]}disconnect(t){this.bangs=this.bangs.filter((e=>e!==t))}bang(t,e=!1,n=!1){this.bangs.forEach((o=>{o.trigger(t,e,n)}))}trigger(t,e=!1,n=!1){this.output(t,e,n)}}window.__sv=Mt;__sv.SvelteComponent;function Ut(t){let e,n;return e=new o({props:{top:-1,$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){__sv.create_component(e.$$.fragment)},m(t,o){__sv.mount_component(e,t,o),n=!0},p(t,n){const o={};33&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(__sv.transition_in(e.$$.fragment,t),n=!0)},o(t){__sv.transition_out(e.$$.fragment,t),n=!1},d(t){__sv.destroy_component(e,t)}}}function Nt(t){let e;return{c(){e=__sv.text(t[0])},m(t,n){__sv.insert(t,e,n)},p(t,n){1&n&&__sv.set_data(e,t[0])},d(t){t&&__sv.detach(e)}}}function Pt(t){let e,n,o=t[0]&&Ut(t);return{c(){e=__sv.element("button"),o&&o.c(),__sv.attr(e,"aria-label","indicator"),__sv.set_style(e,"left",t[3]+"px"),__sv.set_style(e,"top",t[4]+"px"),__sv.attr(e,"class","svelte-1pjduaz"),__sv.toggle_class(e,"on",t[2]),__sv.toggle_class(e,"high",t[1])},m(t,s){__sv.insert(t,e,s),o&&o.m(e,null),n=!0},p(t,[s]){t[0]?o?(o.p(t,s),1&s&&__sv.transition_in(o,1)):(o=Ut(t),o.c(),__sv.transition_in(o,1),o.m(e,null)):o&&(__sv.group_outros(),__sv.transition_out(o,1,1,(()=>{o=null})),__sv.check_outros()),(!n||8&s)&&__sv.set_style(e,"left",t[3]+"px"),(!n||16&s)&&__sv.set_style(e,"top",t[4]+"px"),4&s&&__sv.toggle_class(e,"on",t[2]),2&s&&__sv.toggle_class(e,"high",t[1])},i(t){n||(__sv.transition_in(o),n=!0)},o(t){__sv.transition_out(o),n=!1},d(t){t&&__sv.detach(e),o&&o.d()}}}function Ht(t,e,n){let{label:o}=e,{high:s}=e,{active:r=!1}=e,{x:i=0}=e,{y:a=0}=e;return t.$$set=t=>{"label"in t&&n(0,o=t.label),"high"in t&&n(1,s=t.high),"active"in t&&n(2,r=t.active),"x"in t&&n(3,i=t.x),"y"in t&&n(4,a=t.y)},[o,s,r,i,a]}class Vt extends __sv.SvelteComponent{constructor(t){var e;super(),document.getElementById("svelte-1pjduaz-style")||((e=__sv.element("style")).id="svelte-1pjduaz-style",e.textContent="button.svelte-1pjduaz{position:absolute;width:18px;height:18px;border-radius:18px;background:var(--color-dark);border:1px solid rgba(0, 0, 0, 0.32);box-shadow:inset 2px 2px 0px rgba(255, 255, 255, 0.08), 0px 0px 0px 2px rgba(0, 0, 0, 0.12);cursor:pointer;color:inherit}button.high.svelte-1pjduaz{background:var(--color-dark-highlight)}button.svelte-1pjduaz{width:10px;height:10px;border-radius:50%}button.on.svelte-1pjduaz{background:var(--color-on);box-shadow:inset 2px 2px 0px rgba(255, 255, 255, 0.24), 0px 0px 0px 2px rgba(0, 0, 0, 0.12)}button.on.high.svelte-1pjduaz{background:var(--color-on-highlight)}",__sv.append(document.head,e)),__sv.init(this,t,Ht,Pt,__sv.safe_not_equal,{label:0,high:1,active:2,x:3,y:4})}}function Wt(t){let e,n,o,s,c,u,l,d,_,f,p,m,h,v,g,b,y,$,w,F,x,k,S,E,A,T;function j(e){t[12](e)}n=new Vt({props:{x:40,active:null!=t[1],label:t[3]}});let C={size:"s",y:40,x:24,min:0,max:15,precision:0,label:"ch "+(t[0].channel+1)};return void 0!==t[0].channel&&(C.value=t[0].channel),s=new r({props:C}),__sv.binding_callbacks.push((()=>__sv.bind(s,"value",j))),l=new i({props:{y:120,output:t[4],name:"gate",label:"gate"}}),_=new Vt({props:{y:128,x:40,active:t[2].size>0}}),p=new i({props:{y:170,output:t[8],name:"cv-note",label:"f"}}),h=new i({props:{y:170,x:40,output:t[9],name:"cv-unit",label:"unit"}}),g=new i({props:{y:220,output:t[10],name:"cv-vel",label:"vel"}}),y=new a({props:{x:40,y:220,value:!0===t[0].velocityAftertouch,onToggle:t[13],square:!0,label:"aftch"}}),w=new i({props:{y:270,output:t[11],name:"cv-mod",label:"mod"}}),x=new i({props:{x:80,y:120,output:t[5],name:"start",label:"start"}}),S=new i({props:{x:80,y:170,output:t[6],name:"stop",label:"stop"}}),A=new i({props:{x:80,y:220,output:t[7],name:"clock",label:"clck"}}),{c(){e=__sv.element("midi"),__sv.create_component(n.$$.fragment),o=__sv.space(),__sv.create_component(s.$$.fragment),u=__sv.space(),__sv.create_component(l.$$.fragment),d=__sv.space(),__sv.create_component(_.$$.fragment),f=__sv.space(),__sv.create_component(p.$$.fragment),m=__sv.space(),__sv.create_component(h.$$.fragment),v=__sv.space(),__sv.create_component(g.$$.fragment),b=__sv.space(),__sv.create_component(y.$$.fragment),$=__sv.space(),__sv.create_component(w.$$.fragment),F=__sv.space(),__sv.create_component(x.$$.fragment),k=__sv.space(),__sv.create_component(S.$$.fragment),E=__sv.space(),__sv.create_component(A.$$.fragment),__sv.attr(e,"class","svelte-1jen6zg")},m(t,r){__sv.insert(t,e,r),__sv.mount_component(n,e,null),__sv.append(e,o),__sv.mount_component(s,e,null),__sv.append(e,u),__sv.mount_component(l,e,null),__sv.append(e,d),__sv.mount_component(_,e,null),__sv.append(e,f),__sv.mount_component(p,e,null),__sv.append(e,m),__sv.mount_component(h,e,null),__sv.append(e,v),__sv.mount_component(g,e,null),__sv.append(e,b),__sv.mount_component(y,e,null),__sv.append(e,$),__sv.mount_component(w,e,null),__sv.append(e,F),__sv.mount_component(x,e,null),__sv.append(e,k),__sv.mount_component(S,e,null),__sv.append(e,E),__sv.mount_component(A,e,null),T=!0},p(t,e){const o={};2&e&&(o.active=null!=t[1]),8&e&&(o.label=t[3]),n.$set(o);const r={};1&e&&(r.label="ch "+(t[0].channel+1)),!c&&1&e&&(c=!0,r.value=t[0].channel,__sv.add_flush_callback((()=>c=!1))),s.$set(r);const i={};4&e&&(i.active=t[2].size>0),_.$set(i);const a={};1&e&&(a.value=!0===t[0].velocityAftertouch),1&e&&(a.onToggle=t[13]),y.$set(a)},i(t){T||(__sv.transition_in(n.$$.fragment,t),__sv.transition_in(s.$$.fragment,t),__sv.transition_in(l.$$.fragment,t),__sv.transition_in(_.$$.fragment,t),__sv.transition_in(p.$$.fragment,t),__sv.transition_in(h.$$.fragment,t),__sv.transition_in(g.$$.fragment,t),__sv.transition_in(y.$$.fragment,t),__sv.transition_in(w.$$.fragment,t),__sv.transition_in(x.$$.fragment,t),__sv.transition_in(S.$$.fragment,t),__sv.transition_in(A.$$.fragment,t),T=!0)},o(t){__sv.transition_out(n.$$.fragment,t),__sv.transition_out(s.$$.fragment,t),__sv.transition_out(l.$$.fragment,t),__sv.transition_out(_.$$.fragment,t),__sv.transition_out(p.$$.fragment,t),__sv.transition_out(h.$$.fragment,t),__sv.transition_out(g.$$.fragment,t),__sv.transition_out(y.$$.fragment,t),__sv.transition_out(w.$$.fragment,t),__sv.transition_out(x.$$.fragment,t),__sv.transition_out(S.$$.fragment,t),__sv.transition_out(A.$$.fragment,t),T=!1},d(t){t&&__sv.detach(e),__sv.destroy_component(n),__sv.destroy_component(s),__sv.destroy_component(l),__sv.destroy_component(_),__sv.destroy_component(p),__sv.destroy_component(h),__sv.destroy_component(g),__sv.destroy_component(y),__sv.destroy_component(w),__sv.destroy_component(x),__sv.destroy_component(S),__sv.destroy_component(A)}}}function Xt(t){let e,n;return e=new s({props:{title:"MIDI IN",color:"#1D1E22",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){__sv.create_component(e.$$.fragment)},m(t,o){__sv.mount_component(e,t,o),n=!0},p(t,[n]){const o={};8388623&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(__sv.transition_in(e.$$.fragment,t),n=!0)},o(t){__sv.transition_out(e.$$.fragment,t),n=!1},d(t){__sv.destroy_component(e,t)}}}function Yt(t,e,n){let o,{state:s={channel:0,velocityAftertouch:!1,input:0}}=e;navigator.requestMIDIAccess&&navigator.requestMIDIAccess().then((function(t){for(var e of(n(3,m="connected"),n(1,o=t.inputs),t.inputs.values()))e.onmidimessage=h}),(function(){console.log("Could not access your MIDI devices."),n(3,m="disconnected")}));const r=new It,i=new It,a=new It,c=new It,u=new Tone.Signal,l=new Tone.Signal,d=new Tone.Signal,_=new Tone.Signal;let f=new Set,p=0,m="connecting...";function h(t){if(t.data[0]>>4==15){switch(console.log("system message",t.data,15&t.data[0]),15&t.data[0]){case 8:let t=Tone.now();if(c.bang(Tone.now(),!0,!1),p){let e=1e3/(t-p)/24/60;console.log("bpm",e)}p=t;break;case 10:i.bang(Tone.now(),!0,!1);break;case 12:a.bang(Tone.now(),!0,!1)}return}var e;if((15&t.data[0])==s.channel)switch(t.data[0]>>4){case 8:!function(t,e){f.delete(t),0==f.size&&r.bang(Tone.now(),!1,!0);d.setValueAtTime(e/127,Tone.now());const o=Array.from(f);if(o.length>0){let t=Tone.Frequency(o[0],"midi").toFrequency();console.log("note off",t),u.setValueAtTime(t,Tone.now())}n(2,f=new Set(f))}(t.data[1],t.data[2]);break;case 9:!function(t,e){f.add(t),1==f.size&&r.bang(Tone.now(),!0,!1);let o=Tone.Frequency(t,"midi").toFrequency();console.log("note on",o),u.setValueAtTime(o,Tone.now()),l.setValueAtTime(t/127,Tone.now()),d.setValueAtTime(e/127,Tone.now()),n(2,f=new Set(f))}(t.data[1],t.data[2]);break;case 10:break;case 11:t.data[1],e=t.data[2],_.setValueAtTime(e/127,Tone.now());break;case 12:break;case 13:!function(t){if(!s.velocityAftertouch)return;d.setValueAtTime(t/127,Tone.now())}(t.data[1])}}return t.$$set=t=>{"state"in t&&n(0,s=t.state)},[s,o,f,m,r,i,a,c,u,l,d,_,function(e){t.$$.not_equal(s.channel,e)&&(s.channel=e,n(0,s))},()=>{n(0,s.velocityAftertouch=!s.velocityAftertouch,s)}]}class Gt extends __sv.SvelteComponent{constructor(t){var e;super(),document.getElementById("svelte-1jen6zg-style")||((e=__sv.element("style")).id="svelte-1jen6zg-style",e.textContent="midi.svelte-1jen6zg{position:absolute;top:50px;left:20px}",__sv.append(document.head,e)),__sv.init(this,t,Yt,Xt,__sv.safe_not_equal,{state:0})}}export default Gt;
