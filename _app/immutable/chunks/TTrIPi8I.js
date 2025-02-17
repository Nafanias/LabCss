var cn=Array.isArray,vn=Array.prototype.indexOf,Qn=Array.from,te=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,pn=Object.getOwnPropertyDescriptors,ne=Object.prototype,ee=Array.prototype,hn=Object.getPrototypeOf;function re(t){return typeof t=="function"}const z=()=>{};function se(t){return t()}function St(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Dt=4,G=8,dt=16,x=32,$=64,X=128,T=256,J=512,p=1024,k=2048,O=4096,L=8192,M=16384,dn=32768,Ot=65536,ae=1<<17,En=1<<19,Ct=1<<20,At=Symbol("$state"),le=Symbol("legacy props"),ue=Symbol("");function Nt(t){return t===this.v}function qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function oe(t,n){return t!==n}function Pt(t){return!qt(t,this.v)}function yn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function mn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function gn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fe(){throw new Error("https://svelte.dev/e/hydration_failed")}function Tn(t){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ie(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function _e(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ce(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function An(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let K=!1;function ve(){K=!0}const pe=1,he=2,de=4,Ee=8,ye=16,we=1,me=2,ge=4,Te=8,be=16,Ae=4,xe=1,ke=2,xn="[",kn="[!",In="]",Ft={},Ie=Symbol();function Lt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function st(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let u=null;function xt(t){u=t}function Re(t){return Mt().get(t)}function Se(t,n){return Mt().set(t,n),n}function De(t,n=!1,e){u={p:u,c:null,e:null,m:!1,s:t,x:null,l:null},K&&!n&&(u.l={s:null,u:null,r1:[],r2:Et(!1)})}function Oe(t){const n=u;if(n!==null){t!==void 0&&(n.x=t);const l=n.e;if(l!==null){var e=c,r=i;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];et(a.effect),nt(a.reaction),Kt(a.fn)}}finally{et(e),nt(r)}}u=n.p,n.m=!0}return t||{}}function at(){return!K||u!==null&&u.l===null}function Mt(t){return u===null&&st(),u.c??(u.c=new Map(Rn(u)||void 0))}function Rn(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}function Et(t,n){var e={f:0,v:t,reactions:null,equals:Nt,rv:0,wv:0};return e}function Ce(t){return Yt(Et(t))}function Sn(t,n=!1){var r;const e=Et(t);return n||(e.equals=Pt),K&&u!==null&&u.l!==null&&((r=u.l).s??(r.s=[])).push(e),e}function Ne(t,n=!1){return Yt(Sn(t,n))}function Yt(t){return i!==null&&!A&&i.f&w&&(g===null?jn([t]):g.push(t)),t}function qe(t,n){return yt(t,it(()=>ft(t))),n}function yt(t,n){return i!==null&&!A&&at()&&i.f&(w|dt)&&(g===null||!g.includes(t))&&An(),Dn(t,n)}function Dn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=rn(),Ht(t,k),at()&&c!==null&&c.f&p&&!(c.f&(x|$))&&(b===null?Bn([t]):b.push(t))),n}function Pe(t,n=1){var e=ft(t),r=n===1?e++:e--;return yt(t,e),r}function Ht(t,n){var e=t.reactions;if(e!==null)for(var r=at(),s=e.length,a=0;a<s;a++){var l=e[a],o=l.f;o&k||!r&&l===c||(y(l,n),o&(p|T)&&(o&w?Ht(l,O):ot(l)))}}let S=!1;function Fe(t){S=t}let m;function U(t){if(t===null)throw Lt(),Ft;return m=t}function Le(){return U(C(m))}function Me(t){if(S){if(C(m)!==null)throw Lt(),Ft;m=t}}function Ye(t=1){if(S){for(var n=t,e=m;n--;)e=C(e);m=e}}function He(){for(var t=0,n=m;;){if(n.nodeType===8){var e=n.data;if(e===In){if(t===0)return n;t-=1}else(e===xn||e===kn)&&(t+=1)}var r=C(n);n.remove(),n=r}}var kt,Ut,jt;function Ue(){if(kt===void 0){kt=window;var t=Element.prototype,n=Node.prototype;Ut=bt(n,"firstChild").get,jt=bt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function _t(t=""){return document.createTextNode(t)}function ct(t){return Ut.call(t)}function C(t){return jt.call(t)}function je(t,n){if(!S)return ct(t);var e=ct(m);if(e===null)e=m.appendChild(_t());else if(n&&e.nodeType!==3){var r=_t();return e==null||e.before(r),U(r),r}return U(e),e}function Be(t,n){if(!S){var e=ct(t);return e instanceof Comment&&e.data===""?C(e):e}return m}function Ve(t,n=1,e=!1){let r=S?m:t;for(var s;n--;)s=r,r=C(r);if(!S)return r;var a=r==null?void 0:r.nodeType;if(e&&a!==3){var l=_t();return r===null?s==null||s.after(l):r.before(l),U(l),l}return U(r),r}function Ge(t){t.textContent=""}function Bt(t){var n=w|k,e=i!==null&&i.f&w?i:null;return c===null||e!==null&&e.f&T?n|=T:c.f|=Ct,{ctx:u,deps:null,effects:null,equals:Nt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??c}}function $e(t){const n=Bt(t);return n.equals=Pt,n}function wt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)D(n[e])}}function On(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function Vt(t){var n,e=c;et(On(t));try{wt(t),n=an(t)}finally{et(e)}return n}function Gt(t){var n=Vt(t),e=(R||t.f&T)&&t.deps!==null?O:p;y(t,e),t.equals(n)||(t.v=n,t.wv=rn())}function Cn(t){wt(t),V(t,0),y(t,M),t.v=t.deps=t.ctx=t.reactions=null}function $t(t){c===null&&i===null&&mn(),i!==null&&i.f&T&&c===null&&wn(),gt&&yn()}function Nn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function Y(t,n,e,r=!0){var s=(t&$)!==0,a=c,l={ctx:u,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,wv:0};if(e){var o=P;try{It(!0),ut(l),l.f|=dn}catch(N){throw D(l),N}finally{It(o)}}else n!==null&&ot(l);var v=e&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Ct|X))===0;if(!v&&!s&&r&&(a!==null&&Nn(l,a),i!==null&&i.f&w)){var f=i;(f.effects??(f.effects=[])).push(l)}return l}function Ke(t){const n=Y(G,null,!1);return y(n,p),n.teardown=t,n}function qn(t){$t();var n=c!==null&&(c.f&x)!==0&&u!==null&&!u.m;if(n){var e=u;(e.e??(e.e=[])).push({fn:t,effect:c,reaction:i})}else{var r=Kt(t);return r}}function ze(t){return $t(),mt(t)}function Ze(t){const n=Y($,t,!0);return(e={})=>new Promise(r=>{e.outro?Ln(n,()=>{D(n),r(void 0)}):(D(n),r(void 0))})}function Kt(t){return Y(Dt,t,!1)}function We(t,n){var e=u,r={effect:null,ran:!1};e.l.r1.push(r),r.effect=mt(()=>{t(),!r.ran&&(r.ran=!0,yt(e.l.r2,!0),it(n))})}function Xe(){var t=u;mt(()=>{if(ft(t.l.r2)){for(var n of t.l.r1){var e=n.effect;e.f&p&&y(e,O),H(e)&&ut(e),n.ran=!1}t.l.r2.v=!1}})}function mt(t){return Y(G,t,!0)}function Je(t,n=[],e=Bt){const r=n.map(e);return Pn(()=>t(...r.map(ft)))}function Pn(t,n=0){return Y(G|dt|n,t,!0)}function Qe(t,n=!0){return Y(G|x,t,!0,n)}function zt(t){var n=t.teardown;if(n!==null){const e=gt,r=i;Rt(!0),nt(null);try{n.call(null)}finally{Rt(e),nt(r)}}}function Zt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;D(e,n),e=r}}function Fn(t){for(var n=t.first;n!==null;){var e=n.next;n.f&x||D(n),n=e}}function D(t,n=!0){var e=!1;if((n||t.f&En)&&t.nodes_start!==null){for(var r=t.nodes_start,s=t.nodes_end;r!==null;){var a=r===s?null:C(r);r.remove(),r=a}e=!0}Zt(t,n&&!e),V(t,0),y(t,M);var l=t.transitions;if(l!==null)for(const v of l)v.stop();zt(t);var o=t.parent;o!==null&&o.first!==null&&Wt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Wt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Ln(t,n){var e=[];Xt(t,e,!0),Mn(e,()=>{D(t),n&&n()})}function Mn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var s of t)s.out(r)}else n()}function Xt(t,n,e){if(!(t.f&L)){if(t.f^=L,t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&n.push(l);for(var r=t.first;r!==null;){var s=r.next,a=(r.f&Ot)!==0||(r.f&x)!==0;Xt(r,n,a?e:!1),r=s}}}function tr(t){Jt(t,!0)}function Jt(t,n){if(t.f&L){t.f^=L,t.f&p||(t.f^=p),H(t)&&(y(t,k),ot(t));for(var e=t.first;e!==null;){var r=e.next,s=(e.f&Ot)!==0||(e.f&x)!==0;Jt(e,s?n:!1),e=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const Yn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Q=!1,tt=!1,vt=[],pt=[];function Qt(){Q=!1;const t=vt.slice();vt=[],St(t)}function tn(){tt=!1;const t=pt.slice();pt=[],St(t)}function nr(t){Q||(Q=!0,queueMicrotask(Qt)),vt.push(t)}function er(t){tt||(tt=!0,Yn(tn)),pt.push(t)}function Hn(){Q&&Qt(),tt&&tn()}const nn=0,Un=1;let Z=!1,W=nn,j=!1,B=null,P=!1,gt=!1;function It(t){P=t}function Rt(t){gt=t}let I=[],F=0;let i=null,A=!1;function nt(t){i=t}let c=null;function et(t){c=t}let g=null;function jn(t){g=t}let h=null,E=0,b=null;function Bn(t){b=t}let en=1,rt=0,R=!1;function rn(){return++en}function H(t){var f;var n=t.f;if(n&k)return!0;if(n&O){var e=t.deps,r=(n&T)!==0;if(e!==null){var s,a,l=(n&J)!==0,o=r&&c!==null&&!R,v=e.length;if(l||o){for(s=0;s<v;s++)a=e[s],(l||!((f=a==null?void 0:a.reactions)!=null&&f.includes(t)))&&(a.reactions??(a.reactions=[])).push(t);l&&(t.f^=J)}for(s=0;s<v;s++)if(a=e[s],H(a)&&Gt(a),a.wv>t.wv)return!0}(!r||c!==null&&!R)&&y(t,p)}return!1}function Vn(t,n){for(var e=n;e!==null;){if(e.f&X)try{e.fn(t);return}catch{e.f^=X}e=e.parent}throw Z=!1,t}function Gn(t){return(t.f&M)===0&&(t.parent===null||(t.parent.f&X)===0)}function lt(t,n,e,r){if(Z){if(e===null&&(Z=!1),Gn(n))throw t;return}e!==null&&(Z=!0);{Vn(t,n);return}}function sn(t,n,e=0){var r=t.reactions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];a.f&w?sn(a,n,e+1):n===a&&(e===0?y(a,k):a.f&p&&y(a,O),ot(a))}}function an(t){var Tt;var n=h,e=E,r=b,s=i,a=R,l=g,o=u,v=A,f=t.f;h=null,E=0,b=null,i=f&(x|$)?null:t,R=(f&T)!==0&&(!P||(s===null||v)&&t.parent!==null),g=null,xt(t.ctx),A=!1,rt++;try{var N=(0,t.fn)(),d=t.deps;if(h!==null){var _;if(V(t,E),d!==null&&E>0)for(d.length=E+h.length,_=0;_<h.length;_++)d[E+_]=h[_];else t.deps=d=h;if(!R)for(_=E;_<d.length;_++)((Tt=d[_]).reactions??(Tt.reactions=[])).push(t)}else d!==null&&E<d.length&&(V(t,E),d.length=E);if(at()&&b!==null&&!(t.f&(w|O|k)))for(_=0;_<b.length;_++)sn(b[_],t);return s!==null&&rt++,N}finally{h=n,E=e,b=r,i=s,R=a,g=l,xt(o),A=v}}function $n(t,n){let e=n.reactions;if(e!==null){var r=vn.call(e,t);if(r!==-1){var s=e.length-1;s===0?e=n.reactions=null:(e[r]=e[s],e.pop())}}e===null&&n.f&w&&(h===null||!h.includes(n))&&(y(n,O),n.f&(T|J)||(n.f^=J),wt(n),V(n,0))}function V(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)$n(t,e[r])}function ut(t){var n=t.f;if(!(n&M)){y(t,p);var e=c,r=u;c=t;try{n&dt?Fn(t):Zt(t),zt(t);var s=an(t);t.teardown=typeof s=="function"?s:null,t.wv=en;var a=t.deps,l}catch(o){lt(o,t,e,r||t.ctx)}finally{c=e}}}function ln(){if(F>1e3){F=0;try{gn()}catch(t){if(B!==null)lt(t,B,null);else throw t}}F++}function un(t){var n=t.length;if(n!==0){ln();var e=P;P=!0;try{for(var r=0;r<n;r++){var s=t[r];s.f&p||(s.f^=p);var a=[];on(s,a),Kn(a)}}finally{P=e}}}function Kn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if(!(r.f&(M|L)))try{H(r)&&(ut(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Wt(r):r.fn=null))}catch(s){lt(s,r,null,r.ctx)}}}function zn(){if(j=!1,F>1001)return;const t=I;I=[],un(t),j||(F=0,B=null)}function ot(t){W===nn&&(j||(j=!0,queueMicrotask(zn))),B=t;for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&($|x)){if(!(e&p))return;n.f^=p}}I.push(n)}function on(t,n){var e=t.first,r=[];t:for(;e!==null;){var s=e.f,a=(s&x)!==0,l=a&&(s&p)!==0,o=e.next;if(!l&&!(s&L))if(s&G){if(a)e.f^=p;else{var v=i;try{i=e,H(e)&&ut(e)}catch(_){lt(_,e,null,e.ctx)}finally{i=v}}var f=e.first;if(f!==null){e=f;continue}}else s&Dt&&r.push(e);if(o===null){let _=e.parent;for(;_!==null;){if(t===_)break t;var N=_.next;if(N!==null){e=N;continue t}_=_.parent}}e=o}for(var d=0;d<r.length;d++)f=r[d],n.push(f),on(f,n)}function fn(t){var n=W,e=I;try{ln();const s=[];W=Un,I=s,j=!1,un(e);var r=t==null?void 0:t();return Hn(),(I.length>0||s.length>0)&&fn(),F=0,B=null,r}finally{W=n,I=e}}async function rr(){await Promise.resolve(),fn()}function ft(t){var n=t.f,e=(n&w)!==0;if(e&&n&M){var r=Vt(t);return Cn(t),r}if(i!==null&&!A){g!==null&&g.includes(t)&&bn();var s=i.deps;t.rv<rt&&(t.rv=rt,h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t))}else if(e&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&!(l.f&T)&&(a.f^=T)}return e&&(a=t,H(a)&&Gt(a)),t.v}function it(t){var n=A;try{return A=!0,t()}finally{A=n}}const Zn=-7169;function y(t,n){t.f=t.f&Zn|n}function sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(At in t)ht(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&At in e&&ht(e)}}}function ht(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ht(t[r],n)}catch{}const e=hn(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=pn(e);for(let s in r){const a=r[s].get;if(a)try{a.call(t)}catch{}}}}}function Wn(t,n,e){if(t==null)return n(void 0),z;const r=it(()=>t.subscribe(n,e));return r.unsubscribe?()=>r.unsubscribe():r}const q=[];function ar(t,n){return{subscribe:Xn(t,n).subscribe}}function Xn(t,n=z){let e=null;const r=new Set;function s(o){if(qt(t,o)&&(t=o,e)){const v=!q.length;for(const f of r)f[1](),q.push(f,t);if(v){for(let f=0;f<q.length;f+=2)q[f][0](q[f+1]);q.length=0}}}function a(o){s(o(t))}function l(o,v=z){const f=[o,v];return r.add(f),r.size===1&&(e=n(s,a)||z),o(t),()=>{r.delete(f),r.size===0&&e&&(e(),e=null)}}return{set:s,update:a,subscribe:l}}function lr(t){let n;return Wn(t,e=>n=e)(),n}function ur(t){u===null&&st(),K&&u.l!==null?_n(u).m.push(t):qn(()=>{const n=it(t);if(typeof n=="function")return n})}function Jn(t,n,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:r})}function or(){const t=u;return t===null&&st(),(n,e,r)=>{var a;const s=(a=t.s.$$events)==null?void 0:a[n];if(s){const l=cn(s)?s.slice():[s],o=Jn(n,e,r);for(const v of l)v.call(t.x,o);return!o.defaultPrevented}return!0}}function fr(t){u===null&&st(),u.l===null&&Tn(),_n(u).a.push(t)}function _n(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{ve as $,_t as A,cn as B,nr as C,de as D,he as E,Ee as F,Je as G,kn as H,L as I,je as J,Me as K,Ve as L,Be as M,Ye as N,bt as O,Ke as P,De as Q,ur as R,Oe as S,u as T,ze as U,qn as V,St as W,it as X,se as Y,sr as Z,Bt as _,Le as a,We as a0,yt as a1,Ne as a2,Xe as a3,or as a4,rr as a5,le as a6,fn as a7,te as a8,Ce as a9,be as aA,at as aB,oe as aC,qt as aD,dt as aE,dn as aF,Ae as aG,nt as aH,i as aI,xe as aJ,ke as aK,Ue as aL,xn as aM,Ft as aN,Lt as aO,fe as aP,Ze as aQ,ue as aR,er as aS,pn as aT,Re as aU,ar as aV,Xn as aW,Se as aX,qe as aY,fr as aZ,At as aa,ne as ab,ee as ac,ce as ad,Ie as ae,_e as af,hn as ag,Ot as ah,Kt as ai,mt as aj,z as ak,Wn as al,lr as am,ie as an,ae as ao,ge as ap,Pt as aq,Pe as ar,Te as as,K as at,me as au,x as av,$ as aw,et as ax,we as ay,re as az,Pn as b,Fe as c,$e as d,m as e,In as f,ft as g,S as h,tr as i,Qe as j,Qn as k,c as l,Dn as m,Sn as n,Et as o,Ln as p,Xt as q,He as r,U as s,Ge as t,Mn as u,D as v,pe as w,ye as x,C as y,ct as z};
