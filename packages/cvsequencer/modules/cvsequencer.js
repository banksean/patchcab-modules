import{Faceplate as t,Bang as e,Patch as n,Knob as s}from"/js/core.js";import{Indicator as _}from"@banksean/patchcab-ui";function o(t,e,n){const s=t.slice();return s[6]=e[n],s[7]=e,s[8]=n,s}function r(t){let e,n,o,r,a;function i(e){t[5](e,t[8])}let c={size:"s",x:20,y:48*t[8]+60,min:0,max:1,precision:2};return void 0!==t[0].seqSteps[t[8]]&&(c.value=t[0].seqSteps[t[8]]),e=new s({props:c}),__sv.binding_callbacks.push((()=>__sv.bind(e,"value",i))),r=new _({props:{x:68,y:48*t[8]+76,active:t[8]==t[1]}}),{c(){__sv.create_component(e.$$.fragment),o=__sv.space(),__sv.create_component(r.$$.fragment)},m(t,n){__sv.mount_component(e,t,n),__sv.insert(t,o,n),__sv.mount_component(r,t,n),a=!0},p(s,_){t=s;const o={};!n&&1&_&&(n=!0,o.value=t[0].seqSteps[t[8]],__sv.add_flush_callback((()=>n=!1))),e.$set(o);const a={};2&_&&(a.active=t[8]==t[1]),r.$set(a)},i(t){a||(__sv.transition_in(e.$$.fragment,t),__sv.transition_in(r.$$.fragment,t),a=!0)},o(t){__sv.transition_out(e.$$.fragment,t),__sv.transition_out(r.$$.fragment,t),a=!1},d(t){__sv.destroy_component(e,t),t&&__sv.detach(o),__sv.destroy_component(r,t)}}}function a(t){let e,s,_,a,i,v,p,l,m=t[0].seqSteps,u=[];for(let e=0;e<m.length;e+=1)u[e]=r(o(t,m,e));const $=t=>__sv.transition_out(u[t],1,1,(()=>{u[t]=null}));return _=new n({props:{label:"out",x:62,y:48+64*c,name:"out-cv",output:t[2]}}),i=new n({props:{label:"adv",x:18,y:64*c,name:"advance",input:t[4]}}),p=new n({props:{label:"rst",x:62,y:64*c,name:"reset",input:t[3]}}),{c(){e=__sv.element("steps");for(let t=0;t<u.length;t+=1)u[t].c();s=__sv.space(),__sv.create_component(_.$$.fragment),a=__sv.space(),__sv.create_component(i.$$.fragment),v=__sv.space(),__sv.create_component(p.$$.fragment),__sv.attr(e,"class","svelte-3pyt7d")},m(t,n){__sv.insert(t,e,n);for(let t=0;t<u.length;t+=1)u[t].m(e,null);__sv.insert(t,s,n),__sv.mount_component(_,t,n),__sv.insert(t,a,n),__sv.mount_component(i,t,n),__sv.insert(t,v,n),__sv.mount_component(p,t,n),l=!0},p(t,n){if(3&n){let s;for(m=t[0].seqSteps,s=0;s<m.length;s+=1){const _=o(t,m,s);u[s]?(u[s].p(_,n),__sv.transition_in(u[s],1)):(u[s]=r(_),u[s].c(),__sv.transition_in(u[s],1),u[s].m(e,null))}for(__sv.group_outros(),s=m.length;s<u.length;s+=1)$(s);__sv.check_outros()}},i(t){if(!l){for(let t=0;t<m.length;t+=1)__sv.transition_in(u[t]);__sv.transition_in(_.$$.fragment,t),__sv.transition_in(i.$$.fragment,t),__sv.transition_in(p.$$.fragment,t),l=!0}},o(t){u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)__sv.transition_out(u[t]);__sv.transition_out(_.$$.fragment,t),__sv.transition_out(i.$$.fragment,t),__sv.transition_out(p.$$.fragment,t),l=!1},d(t){t&&__sv.detach(e),__sv.destroy_each(u,t),t&&__sv.detach(s),__sv.destroy_component(_,t),t&&__sv.detach(a),__sv.destroy_component(i,t),t&&__sv.detach(v),__sv.destroy_component(p,t)}}}function i(e){let n,s;return n=new t({props:{title:"CVSEQ",color:"#1D1E22",$$slots:{default:[a]},$$scope:{ctx:e}}}),{c(){__sv.create_component(n.$$.fragment)},m(t,e){__sv.mount_component(n,t,e),s=!0},p(t,[e]){const s={};515&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(__sv.transition_in(n.$$.fragment,t),s=!0)},o(t){__sv.transition_out(n.$$.fragment,t),s=!1},d(t){__sv.destroy_component(n,t)}}}const c=4;function v(t,n,s){let{state:_={seqSteps:Array(c).fill(0)}}=n,o=0;const r=new Tone.Signal,a=new e(((t,e,n)=>{s(1,o=0)})),i=new e(((t,e,n)=>{s(1,o++,o),s(1,o%=c);let a=_.seqSteps[o];r.setValueAtTime(a,t)}));return t.$$set=t=>{"state"in t&&s(0,_=t.state)},[_,o,r,a,i,function(e,n){t.$$.not_equal(_.seqSteps[n],e)&&(_.seqSteps[n]=e,s(0,_))}]}class p extends __sv.SvelteComponent{constructor(t){var e;super(),document.getElementById("svelte-3pyt7d-style")||((e=__sv.element("style")).id="svelte-3pyt7d-style",e.textContent="steps.svelte-3pyt7d{position:absolute;top:0px}",__sv.append(document.head,e)),__sv.init(this,t,v,i,__sv.safe_not_equal,{state:0})}}export default p;
