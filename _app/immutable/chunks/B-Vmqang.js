import{l as rt,t as an}from"./DIeogL5L.js";const ut=!1;var un=Array.isArray,on=Array.prototype.indexOf,Jn=Array.from,Wn=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,fn=Object.getOwnPropertyDescriptors,Xn=Object.prototype,Qn=Array.prototype,_n=Object.getPrototypeOf;function tr(t){return typeof t=="function"}const K=()=>{};function nr(t){return t()}function cn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,St=4,$=8,ct=16,A=32,G=64,J=128,T=256,W=512,p=1024,R=2048,O=4096,M=8192,L=16384,vn=32768,kt=65536,rr=1<<17,pn=1<<19,Dt=1<<20,Tt=Symbol("$state"),er=Symbol("legacy props"),sr=Symbol("");function It(t){return t===this.v}function Ot(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Ct(t){return!Ot(t,this.v)}function hn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function dn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function En(t){throw new Error("https://svelte.dev/e/effect_orphan")}function wn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function lr(){throw new Error("https://svelte.dev/e/hydration_failed")}function ar(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function ur(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function or(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function yn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function mn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const fr=1,ir=2,_r=16,cr=1,vr=2,pr=4,hr=8,dr=16,Er=1,wr=2,gn="[",Tn="[!",bn="]",Nt={},yr=Symbol();function Pt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function vt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let u=null;function bt(t){u=t}function mr(t){return xn().get(t)}function gr(t,n=!1,r){u={p:u,c:null,e:null,m:!1,s:t,x:null,l:null},rt&&!n&&(u.l={s:null,u:null,r1:[],r2:pt(!1)})}function Tr(t){const n=u;if(n!==null){const a=n.e;if(a!==null){var r=c,e=i;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];tt(l.effect),Q(l.reaction),Vt(l.fn)}}finally{tt(r),Q(e)}}u=n.p,n.m=!0}return{}}function et(){return!rt||u!==null&&u.l===null}function xn(t){return u===null&&vt(),u.c??(u.c=new Map(An(u)||void 0))}function An(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function pt(t,n){var r={f:0,v:t,reactions:null,equals:It,rv:0,wv:0};return r}function br(t){return Ft(pt(t))}function Rn(t,n=!1){var e;const r=pt(t);return n||(r.equals=Ct),rt&&u!==null&&u.l!==null&&((e=u.l).s??(e.s=[])).push(r),r}function xr(t,n=!1){return Ft(Rn(t,n))}function Ft(t){return i!==null&&!x&&i.f&y&&(g===null?Ln([t]):g.push(t)),t}function qt(t,n){return i!==null&&!x&&et()&&i.f&(y|ct)&&(g===null||!g.includes(t))&&mn(),Sn(t,n)}function Sn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Qt(),Mt(t,R),et()&&c!==null&&c.f&p&&!(c.f&(A|G))&&(b===null?Yn([t]):b.push(t))),n}function Ar(t,n=1){var r=wt(t),e=n===1?r++:r--;return qt(t,r),e}function Mt(t,n){var r=t.reactions;if(r!==null)for(var e=et(),s=r.length,l=0;l<s;l++){var a=r[l],o=a.f;o&R||!e&&a===c||(w(a,n),o&(p|T)&&(o&y?Mt(a,O):at(a)))}}let D=!1;function Rr(t){D=t}let m;function j(t){if(t===null)throw Pt(),Nt;return m=t}function Sr(){return j(C(m))}function kr(t){if(D){if(C(m)!==null)throw Pt(),Nt;m=t}}function Dr(t=1){if(D){for(var n=t,r=m;n--;)r=C(r);m=r}}function Ir(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===bn){if(t===0)return n;t-=1}else(r===gn||r===Tn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var xt,Lt,Yt;function Or(){if(xt===void 0){xt=window;var t=Element.prototype,n=Node.prototype;Lt=gt(n,"firstChild").get,Yt=gt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ot(t=""){return document.createTextNode(t)}function ft(t){return Lt.call(t)}function C(t){return Yt.call(t)}function Cr(t,n){if(!D)return ft(t);var r=ft(m);if(r===null)r=m.appendChild(ot());else if(n&&r.nodeType!==3){var e=ot();return r==null||r.before(e),j(e),e}return j(r),r}function Nr(t,n){if(!D){var r=ft(t);return r instanceof Comment&&r.data===""?C(r):r}return m}function Pr(t,n=1,r=!1){let e=D?m:t;for(var s;n--;)s=e,e=C(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=ot();return e===null?s==null||s.after(a):e.before(a),j(a),a}return j(e),e}function Fr(t){t.textContent=""}function Ht(t){var n=y|R,r=i!==null&&i.f&y?i:null;return c===null||r!==null&&r.f&T?n|=T:c.f|=Dt,{ctx:u,deps:null,effects:null,equals:It,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??c}}function qr(t){const n=Ht(t);return n.equals=Ct,n}function ht(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function kn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function jt(t){var n,r=c;tt(kn(t));try{ht(t),n=nn(t)}finally{tt(r)}return n}function Bt(t){var n=jt(t),r=(k||t.f&T)&&t.deps!==null?O:p;w(t,r),t.equals(n)||(t.v=n,t.wv=Qt())}function Dn(t){ht(t),V(t,0),w(t,L),t.v=t.deps=t.ctx=t.reactions=null}function Ut(t){c===null&&i===null&&En(),i!==null&&i.f&T&&c===null&&dn(),Et&&hn()}function In(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var s=(t&G)!==0,l=c,a={ctx:u,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=F;try{At(!0),lt(a),a.f|=vn}catch(N){throw I(a),N}finally{At(o)}}else n!==null&&at(a);var v=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Dt|J))===0;if(!v&&!s&&e&&(l!==null&&In(a,l),i!==null&&i.f&y)){var f=i;(f.effects??(f.effects=[])).push(a)}return a}function Mr(t){const n=Y($,null,!1);return w(n,p),n.teardown=t,n}function On(t){Ut();var n=c!==null&&(c.f&A)!==0&&u!==null&&!u.m;if(n){var r=u;(r.e??(r.e=[])).push({fn:t,effect:c,reaction:i})}else{var e=Vt(t);return e}}function Lr(t){return Ut(),dt(t)}function Yr(t){const n=Y(G,t,!0);return(r={})=>new Promise(e=>{r.outro?Pn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Vt(t){return Y(St,t,!1)}function Hr(t,n){var r=u,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=dt(()=>{t(),!e.ran&&(e.ran=!0,qt(r.l.r2,!0),yt(n))})}function jr(){var t=u;dt(()=>{if(wt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&w(r,O),H(r)&&lt(r),n.ran=!1}t.l.r2.v=!1}})}function dt(t){return Y($,t,!0)}function Br(t,n=[],r=Ht){const e=n.map(r);return Cn(()=>t(...e.map(wt)))}function Cn(t,n=0){return Y($|ct|n,t,!0)}function Ur(t,n=!0){return Y($|A,t,!0,n)}function $t(t){var n=t.teardown;if(n!==null){const r=Et,e=i;Rt(!0),Q(null);try{n.call(null)}finally{Rt(r),Q(e)}}}function Gt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function Nn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&pn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}r=!0}Gt(t,n&&!r),V(t,0),w(t,L);var a=t.transitions;if(a!==null)for(const v of a)v.stop();$t(t);var o=t.parent;o!==null&&o.first!==null&&Kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Pn(t,n){var r=[];zt(t,r,!0),Fn(r,()=>{I(t),n&&n()})}function Fn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function zt(t,n,r){if(!(t.f&M)){if(t.f^=M,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&kt)!==0||(e.f&A)!==0;zt(e,n,l?r:!1),e=s}}}function Vr(t){Zt(t,!0)}function Zt(t,n){if(t.f&M){t.f^=M,t.f&p||(t.f^=p),H(t)&&(w(t,R),at(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&kt)!==0||(r.f&A)!==0;Zt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let X=!1,it=[];function Jt(){X=!1;const t=it.slice();it=[],cn(t)}function $r(t){X||(X=!0,queueMicrotask(Jt)),it.push(t)}function qn(){X&&Jt()}const Wt=0,Mn=1;let z=!1,Z=Wt,B=!1,U=null,F=!1,Et=!1;function At(t){F=t}function Rt(t){Et=t}let S=[],q=0;let i=null,x=!1;function Q(t){i=t}let c=null;function tt(t){c=t}let g=null;function Ln(t){g=t}let h=null,E=0,b=null;function Yn(t){b=t}let Xt=1,nt=0,k=!1;function Qt(){return++Xt}function H(t){var f;var n=t.f;if(n&R)return!0;if(n&O){var r=t.deps,e=(n&T)!==0;if(r!==null){var s,l,a=(n&W)!==0,o=e&&c!==null&&!k,v=r.length;if(a||o){for(s=0;s<v;s++)l=r[s],(a||!((f=l==null?void 0:l.reactions)!=null&&f.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=W)}for(s=0;s<v;s++)if(l=r[s],H(l)&&Bt(l),l.wv>t.wv)return!0}(!e||c!==null&&!k)&&w(t,p)}return!1}function Hn(t,n){for(var r=n;r!==null;){if(r.f&J)try{r.fn(t);return}catch{r.f^=J}r=r.parent}throw z=!1,t}function jn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&J)===0)}function st(t,n,r,e){if(z){if(r===null&&(z=!1),jn(n))throw t;return}r!==null&&(z=!0);{Hn(t,n);return}}function tn(t,n,r=0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var l=e[s];l.f&y?tn(l,n,r+1):n===l&&(r===0?w(l,R):l.f&p&&w(l,O),at(l))}}function nn(t){var mt;var n=h,r=E,e=b,s=i,l=k,a=g,o=u,v=x,f=t.f;h=null,E=0,b=null,i=f&(A|G)?null:t,k=(f&T)!==0&&(!F||(s===null||v)&&t.parent!==null),g=null,bt(t.ctx),x=!1,nt++;try{var N=(0,t.fn)(),d=t.deps;if(h!==null){var _;if(V(t,E),d!==null&&E>0)for(d.length=E+h.length,_=0;_<h.length;_++)d[E+_]=h[_];else t.deps=d=h;if(!k)for(_=E;_<d.length;_++)((mt=d[_]).reactions??(mt.reactions=[])).push(t)}else d!==null&&E<d.length&&(V(t,E),d.length=E);if(et()&&b!==null&&!(t.f&(y|O|R)))for(_=0;_<b.length;_++)tn(b[_],t);return s!==null&&nt++,N}finally{h=n,E=r,b=e,i=s,k=l,g=a,bt(o),x=v}}function Bn(t,n){let r=n.reactions;if(r!==null){var e=on.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(w(n,O),n.f&(T|W)||(n.f^=W),ht(n),V(n,0))}function V(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Bn(t,r[e])}function lt(t){var n=t.f;if(!(n&L)){w(t,p);var r=c,e=u;c=t;try{n&ct?Nn(t):Gt(t),$t(t);var s=nn(t);t.teardown=typeof s=="function"?s:null,t.wv=Xt;var l=t.deps,a;ut&&an&&t.f&R}catch(o){st(o,t,r,e||t.ctx)}finally{c=r}}}function rn(){if(q>1e3){q=0;try{wn()}catch(t){if(U!==null)st(t,U,null);else throw t}}q++}function en(t){var n=t.length;if(n!==0){rn();var r=F;F=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];sn(s,l),Un(l)}}finally{F=r}}}function Un(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|M)))try{H(e)&&(lt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Kt(e):e.fn=null))}catch(s){st(s,e,null,e.ctx)}}}function Vn(){if(B=!1,q>1001)return;const t=S;S=[],en(t),B||(q=0,U=null)}function at(t){Z===Wt&&(B||(B=!0,queueMicrotask(Vn))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|A)){if(!(r&p))return;n.f^=p}}S.push(n)}function sn(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&p)!==0,o=r.next;if(!a&&!(s&M))if(s&$){if(l)r.f^=p;else{var v=i;try{i=r,H(r)&&lt(r)}catch(_){st(_,r,null,r.ctx)}finally{i=v}}var f=r.first;if(f!==null){r=f;continue}}else s&St&&e.push(r);if(o===null){let _=r.parent;for(;_!==null;){if(t===_)break t;var N=_.next;if(N!==null){r=N;continue t}_=_.parent}}r=o}for(var d=0;d<e.length;d++)f=e[d],n.push(f),sn(f,n)}function ln(t){var n=Z,r=S;try{rn();const s=[];Z=Mn,S=s,B=!1,en(r);var e=t==null?void 0:t();return qn(),(S.length>0||s.length>0)&&ln(),q=0,U=null,e}finally{Z=n,S=r}}async function Gr(){await Promise.resolve(),ln()}function wt(t){var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=jt(t);return Dn(t),e}if(i!==null&&!x){g!==null&&g.includes(t)&&yn();var s=i.deps;t.rv<nt&&(t.rv=nt,h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&!(a.f&T)&&(l.f^=T)}return r&&(l=t,H(l)&&Bt(l)),t.v}function yt(t){var n=x;try{return x=!0,t()}finally{x=n}}const $n=-7169;function w(t,n){t.f=t.f&$n|n}function Kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Tt in t)_t(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Tt in r&&_t(r)}}}function _t(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{_t(t[e],n)}catch{}const r=_n(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=fn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Gn(t,n,r){if(t==null)return n(void 0),K;const e=yt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}const P=[];function zr(t,n=K){let r=null;const e=new Set;function s(o){if(Ot(t,o)&&(t=o,r)){const v=!P.length;for(const f of e)f[1](),P.push(f,t);if(v){for(let f=0;f<P.length;f+=2)P[f][0](P[f+1]);P.length=0}}}function l(o){s(o(t))}function a(o,v=K){const f=[o,v];return e.add(f),e.size===1&&(r=n(s,l)||K),o(t),()=>{e.delete(f),e.size===0&&r&&(r(),r=null)}}return{set:s,update:l,subscribe:a}}function Zr(t){let n;return Gn(t,r=>n=r)(),n}function Jr(t){u===null&&vt(),rt&&u.l!==null?zn(u).m.push(t):On(()=>{const n=yt(t);if(typeof n=="function")return n})}function Kn(t,n,{bubbles:r=!1,cancelable:e=!1}={}){return new CustomEvent(t,{detail:n,bubbles:r,cancelable:e})}function Wr(){const t=u;return t===null&&vt(),(n,r,e)=>{var l;const s=(l=t.s.$$events)==null?void 0:l[n];if(s){const a=un(s)?s.slice():[s],o=Kn(n,r,e);for(const v of a)v.call(t.x,o);return!o.defaultPrevented}return!0}}function zn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{Zr as $,or as A,gt as B,c as C,ur as D,_n as E,un as F,Cn as G,D as H,Sr as I,kt as J,Tn as K,er as L,Ir as M,j as N,Rr as O,Vr as P,Ur as Q,Pn as R,Tt as S,m as T,yr as U,Vt as V,dt as W,$r as X,Mr as Y,K as Z,Gn as _,On as a,ar as a0,rr as a1,pr as a2,Ct as a3,Ar as a4,hr as a5,vr as a6,A as a7,G as a8,tt as a9,Dr as aA,Wr as aB,M as aC,Sn as aD,ir as aE,zt as aF,Fn as aG,I as aH,fr as aI,_r as aJ,zr as aK,cr as aa,tr as ab,dr as ac,qr as ad,Q as ae,i as af,ft as ag,ot as ah,Er as ai,wr as aj,Or as ak,gn as al,C as am,Nt as an,bn as ao,Pt as ap,lr as aq,Fr as ar,Jn as as,Yr as at,sr as au,fn as av,mr as aw,Hr as ax,jr as ay,xr as az,yt as b,u as c,nr as d,Kr as e,Ht as f,wt as g,Nr as h,Tr as i,Cr as j,kr as k,qt as l,ln as m,Wn as n,Rn as o,gr as p,Jr as q,cn as r,Pr as s,Br as t,Lr as u,br as v,Gr as w,Xn as x,Qn as y,pt as z};
