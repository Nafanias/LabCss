import{l as _t,t as sn}from"./DIeogL5L.js";const at=!1;var $n=Array.isArray,un=Array.prototype.indexOf,Zn=Array.from,zn=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,Jn=Object.prototype,Wn=Array.prototype,fn=Object.getPrototypeOf;function Xn(t){return typeof t=="function"}const Qn=()=>{};function tr(t){return t()}function kt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Rt=4,V=8,ct=16,k=32,G=64,Z=128,T=256,z=512,c=1024,R=2048,C=4096,F=8192,M=16384,_n=32768,It=65536,nr=1<<17,cn=1<<19,St=1<<20,mt=Symbol("$state"),rr=Symbol("legacy props"),er=Symbol("");function Ot(t){return t===this.v}function vn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Dt(t){return!vn(t,this.v)}function pn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function hn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function dn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function yn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function lr(){throw new Error("https://svelte.dev/e/hydration_failed")}function ar(t){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function sr(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function ur(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function or(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function En(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function wn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const fr=1,ir=2,_r=16,cr=1,vr=2,pr=4,hr=8,dr=16,yr=1,Er=2,mn="[",gn="[!",Tn="]",Ct={},wr=Symbol();function Nt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function xn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let u=null;function gt(t){u=t}function mr(t){return bt().get(t)}function gr(t,n){return bt().set(t,n),n}function Tr(t,n=!1,r){u={p:u,c:null,e:null,m:!1,s:t,x:null,l:null},_t&&!n&&(u.l={s:null,u:null,r1:[],r2:vt(!1)})}function xr(t){const n=u;if(n!==null){t!==void 0&&(n.x=t);const s=n.e;if(s!==null){var r=i,e=o;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Q(a.effect),X(a.reaction),Ut(a.fn)}}finally{Q(r),X(e)}}u=n.p,n.m=!0}return t||{}}function nt(){return!_t||u!==null&&u.l===null}function bt(t){return u===null&&xn(),u.c??(u.c=new Map(An(u)||void 0))}function An(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function vt(t,n){var r={f:0,v:t,reactions:null,equals:Ot,rv:0,wv:0};return r}function Ar(t){return qt(vt(t))}function kn(t,n=!1){var e;const r=vt(t);return n||(r.equals=Dt),_t&&u!==null&&u.l!==null&&((e=u.l).s??(e.s=[])).push(r),r}function kr(t,n=!1){return qt(kn(t,n))}function qt(t){return o!==null&&!A&&o.f&w&&(g===null?Mn([t]):g.push(t)),t}function Pt(t,n){return o!==null&&!A&&nt()&&o.f&(w|ct)&&(g===null||!g.includes(t))&&wn(),Rn(t,n)}function Rn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Qt(),Ft(t,R),nt()&&i!==null&&i.f&c&&!(i.f&(k|G))&&(x===null?Ln([t]):x.push(t))),n}function Rr(t,n=1){var r=yt(t),e=n===1?r++:r--;return Pt(t,r),e}function Ft(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],_=s.f;_&R||!e&&s===i||(y(s,n),_&(c|T)&&(_&w?Ft(s,C):lt(s)))}}let O=!1;function Ir(t){O=t}let m;function H(t){if(t===null)throw Nt(),Ct;return m=t}function Sr(){return H(N(m))}function Or(t){if(O){if(N(m)!==null)throw Nt(),Ct;m=t}}function Dr(t=1){if(O){for(var n=t,r=m;n--;)r=N(r);m=r}}function Cr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===Tn){if(t===0)return n;t-=1}else(r===mn||r===gn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var Tt,Mt,Lt;function Nr(){if(Tt===void 0){Tt=window;var t=Element.prototype,n=Node.prototype;Mt=wt(n,"firstChild").get,Lt=wt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function ut(t){return Mt.call(t)}function N(t){return Lt.call(t)}function br(t,n){if(!O)return ut(t);var r=ut(m);if(r===null)r=m.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),H(e),e}return H(r),r}function qr(t,n){if(!O){var r=ut(t);return r instanceof Comment&&r.data===""?N(r):r}return m}function Pr(t,n=1,r=!1){let e=O?m:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=st();return e===null?l==null||l.after(s):e.before(s),H(s),s}return H(e),e}function Fr(t){t.textContent=""}function Yt(t){var n=w|R,r=o!==null&&o.f&w?o:null;return i===null||r!==null&&r.f&T?n|=T:i.f|=St,{ctx:u,deps:null,effects:null,equals:Ot,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i}}function Mr(t){const n=Yt(t);return n.equals=Dt,n}function pt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)D(n[r])}}function In(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function Ht(t){var n,r=i;Q(In(t));try{pt(t),n=nn(t)}finally{Q(r)}return n}function jt(t){var n=Ht(t),r=(S||t.f&T)&&t.deps!==null?C:c;y(t,r),t.equals(n)||(t.v=n,t.wv=Qt())}function Sn(t){pt(t),U(t,0),y(t,M),t.v=t.deps=t.ctx=t.reactions=null}function Bt(t){i===null&&o===null&&dn(),o!==null&&o.f&T&&i===null&&hn(),dt&&pn()}function On(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&G)!==0,a=i,s={ctx:u,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=q;try{xt(!0),et(s),s.f|=_n}catch(b){throw D(s),b}finally{xt(_)}}else n!==null&&lt(s);var E=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(St|Z))===0;if(!E&&!l&&e&&(a!==null&&On(s,a),o!==null&&o.f&w)){var v=o;(v.effects??(v.effects=[])).push(s)}return s}function Lr(t){const n=L(V,null,!1);return y(n,c),n.teardown=t,n}function Yr(t){Bt();var n=i!==null&&(i.f&k)!==0&&u!==null&&!u.m;if(n){var r=u;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:o})}else{var e=Ut(t);return e}}function Hr(t){return Bt(),ht(t)}function jr(t){const n=L(G,t,!0);return(r={})=>new Promise(e=>{r.outro?Nn(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function Ut(t){return L(Rt,t,!1)}function Br(t,n){var r=u,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ht(()=>{t(),!e.ran&&(e.ran=!0,Pt(r.l.r2,!0),Vn(n))})}function Ur(){var t=u;ht(()=>{if(yt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&c&&y(r,C),Y(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function ht(t){return L(V,t,!0)}function Vr(t,n=[],r=Yt){const e=n.map(r);return Dn(()=>t(...e.map(yt)))}function Dn(t,n=0){return L(V|ct|n,t,!0)}function Gr(t,n=!0){return L(V|k,t,!0,n)}function Vt(t){var n=t.teardown;if(n!==null){const r=dt,e=o;At(!0),X(null);try{n.call(null)}finally{At(r),X(e)}}}function Gt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function Cn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&k||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&cn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}Gt(t,n&&!r),U(t,0),y(t,M);var s=t.transitions;if(s!==null)for(const E of s)E.stop();Vt(t);var _=t.parent;_!==null&&_.first!==null&&Kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Nn(t,n){var r=[];$t(t,r,!0),bn(r,()=>{D(t),n&&n()})}function bn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function $t(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&It)!==0||(e.f&k)!==0;$t(e,n,a?r:!1),e=l}}}function Kr(t){Zt(t,!0)}function Zt(t,n){if(t.f&F){t.f^=F,t.f&c||(t.f^=c),Y(t)&&(y(t,R),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&It)!==0||(r.f&k)!==0;Zt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const qn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let J=!1,W=!1,ot=[],ft=[];function zt(){J=!1;const t=ot.slice();ot=[],kt(t)}function Jt(){W=!1;const t=ft.slice();ft=[],kt(t)}function $r(t){J||(J=!0,queueMicrotask(zt)),ot.push(t)}function Zr(t){W||(W=!0,qn(Jt)),ft.push(t)}function Pn(){J&&zt(),W&&Jt()}const Wt=0,Fn=1;let K=!1,$=Wt,j=!1,B=null,q=!1,dt=!1;function xt(t){q=t}function At(t){dt=t}let I=[],P=0;let o=null,A=!1;function X(t){o=t}let i=null;function Q(t){i=t}let g=null;function Mn(t){g=t}let p=null,d=0,x=null;function Ln(t){x=t}let Xt=1,tt=0,S=!1;function Qt(){return++Xt}function Y(t){var v;var n=t.f;if(n&R)return!0;if(n&C){var r=t.deps,e=(n&T)!==0;if(r!==null){var l,a,s=(n&z)!==0,_=e&&i!==null&&!S,E=r.length;if(s||_){for(l=0;l<E;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(t)))&&(a.reactions??(a.reactions=[])).push(t);s&&(t.f^=z)}for(l=0;l<E;l++)if(a=r[l],Y(a)&&jt(a),a.wv>t.wv)return!0}(!e||i!==null&&!S)&&y(t,c)}return!1}function Yn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function Hn(t){return(t.f&M)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if(K){if(r===null&&(K=!1),Hn(n))throw t;return}r!==null&&(K=!0);{Yn(t,n);return}}function tn(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];a.f&w?tn(a,n,r+1):n===a&&(r===0?y(a,R):a.f&c&&y(a,C),lt(a))}}function nn(t){var Et;var n=p,r=d,e=x,l=o,a=S,s=g,_=u,E=A,v=t.f;p=null,d=0,x=null,o=v&(k|G)?null:t,S=(v&T)!==0&&(!q||(l===null||E)&&t.parent!==null),g=null,gt(t.ctx),A=!1,tt++;try{var b=(0,t.fn)(),h=t.deps;if(p!==null){var f;if(U(t,d),h!==null&&d>0)for(h.length=d+p.length,f=0;f<p.length;f++)h[d+f]=p[f];else t.deps=h=p;if(!S)for(f=d;f<h.length;f++)((Et=h[f]).reactions??(Et.reactions=[])).push(t)}else h!==null&&d<h.length&&(U(t,d),h.length=d);if(nt()&&x!==null&&!(t.f&(w|C|R)))for(f=0;f<x.length;f++)tn(x[f],t);return l!==null&&tt++,b}finally{p=n,d=r,x=e,o=l,S=a,g=s,gt(_),A=E}}function jn(t,n){let r=n.reactions;if(r!==null){var e=un.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(p===null||!p.includes(n))&&(y(n,C),n.f&(T|z)||(n.f^=z),pt(n),U(n,0))}function U(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)jn(t,r[e])}function et(t){var n=t.f;if(!(n&M)){y(t,c);var r=i,e=u;i=t;try{n&ct?Cn(t):Gt(t),Vt(t);var l=nn(t);t.teardown=typeof l=="function"?l:null,t.wv=Xt;var a=t.deps,s;at&&sn&&t.f&R}catch(_){rt(_,t,r,e||t.ctx)}finally{i=r}}}function rn(){if(P>1e3){P=0;try{yn()}catch(t){if(B!==null)rt(t,B,null);else throw t}}P++}function en(t){var n=t.length;if(n!==0){rn();var r=q;q=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&c||(l.f^=c);var a=[];ln(l,a),Bn(a)}}finally{q=r}}}function Bn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(M|F)))try{Y(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Kt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Un(){if(j=!1,P>1001)return;const t=I;I=[],en(t),j||(P=0,B=null)}function lt(t){$===Wt&&(j||(j=!0,queueMicrotask(Un))),B=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|k)){if(!(r&c))return;n.f^=c}}I.push(n)}function ln(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,a=(l&k)!==0,s=a&&(l&c)!==0,_=r.next;if(!s&&!(l&F))if(l&V){if(a)r.f^=c;else{var E=o;try{o=r,Y(r)&&et(r)}catch(f){rt(f,r,null,r.ctx)}finally{o=E}}var v=r.first;if(v!==null){r=v;continue}}else l&Rt&&e.push(r);if(_===null){let f=r.parent;for(;f!==null;){if(t===f)break t;var b=f.next;if(b!==null){r=b;continue t}f=f.parent}}r=_}for(var h=0;h<e.length;h++)v=e[h],n.push(v),ln(v,n)}function an(t){var n=$,r=I;try{rn();const l=[];$=Fn,I=l,j=!1,en(r);var e=t==null?void 0:t();return Pn(),(I.length>0||l.length>0)&&an(),P=0,B=null,e}finally{$=n,I=r}}async function zr(){await Promise.resolve(),an()}function yt(t){var n=t.f,r=(n&w)!==0;if(r&&n&M){var e=Ht(t);return Sn(t),e}if(o!==null&&!A){g!==null&&g.includes(t)&&En();var l=o.deps;t.rv<tt&&(t.rv=tt,p===null&&l!==null&&l[d]===t?d++:p===null?p=[t]:p.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,s=a.parent;s!==null&&!(s.f&T)&&(a.f^=T)}return r&&(a=t,Y(a)&&jt(a)),t.v}function Vn(t){var n=A;try{return A=!0,t()}finally{A=n}}const Gn=-7169;function y(t,n){t.f=t.f&Gn|n}function Jr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(mt in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&mt in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=fn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=on(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{Ar as $,vn as A,xn as B,$n as C,ar as D,Lr as E,X as F,Q as G,o as H,$r as I,zn as J,Nr as K,mn as L,N as M,Ct as N,Ir as O,Tn as P,Nt as Q,lr as R,Fr as S,yr as T,Zn as U,jr as V,Gr as W,Pt as X,rr as Y,an as Z,kn as _,Yr as a,zr as a0,mt as a1,Jn as a2,Wn as a3,vt as a4,or as a5,wr as a6,wt as a7,ur as a8,fn as a9,on as aA,mr as aB,F as aC,Rn as aD,ir as aE,$t as aF,bn as aG,D as aH,fr as aI,_r as aJ,gr as aK,Dn as aa,It as ab,gn as ac,Cr as ad,Kr as ae,Nn as af,Ut as ag,ht as ah,sr as ai,nr as aj,pr as ak,Dt as al,Rr as am,hr as an,vr as ao,k as ap,G as aq,cr as ar,Xn as as,dr as at,Mr as au,Br as av,kr as aw,Ur as ax,er as ay,Zr as az,Vn as b,u as c,tr as d,Jr as e,Yt as f,yt as g,ut as h,st as i,Er as j,i as k,O as l,m,Dr as n,Sr as o,Tr as p,qr as q,kt as r,H as s,Vr as t,Hr as u,xr as v,br as w,Or as x,Pr as y,Qn as z};
