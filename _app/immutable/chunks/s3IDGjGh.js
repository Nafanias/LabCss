import{a1 as I,a2 as ee,a3 as re,a4 as w,a5 as ne,g as b,a6 as v,b as y,a7 as O,B as q,a8 as ae,_ as ie,R as te,a9 as V,h as N,a as W,aa as J,ab as se,ac as fe,l as ue,k as U,ad as Y,y as B,ae as C,o as Q,af as le,ag as ce,G as F,W as de,ah as oe,ai as _e,aj as X,ak as ve,al as M,am as he,an as k,ao as pe,ap as be,aq as Pe,U as G,ar as we,K as H,m as ye,as as A,at as ge,au as Re}from"./Dajy0z_f.js";import{c as me}from"./gxVdYzmE.js";import{l as Ee}from"./DIeogL5L.js";function E(e,r=null,f){if(typeof e!="object"||e===null||I in e)return e;const i=ie(e);if(i!==ee&&i!==re)return e;var n=new Map,l=te(e),h=w(0);l&&n.set("length",w(e.length));var P;return new Proxy(e,{defineProperty(c,a,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&ae();var u=n.get(a);return u===void 0?(u=w(t.value),n.set(a,u)):y(u,E(t.value,P)),!0},deleteProperty(c,a){var t=n.get(a);if(t===void 0)a in c&&n.set(a,w(v));else{if(l&&typeof a=="string"){var u=n.get("length"),s=Number(a);Number.isInteger(s)&&s<u.v&&y(u,s)}y(t,v),Z(h)}return!0},get(c,a,t){var _;if(a===I)return e;var u=n.get(a),s=a in c;if(u===void 0&&(!s||(_=O(c,a))!=null&&_.writable)&&(u=w(E(s?c[a]:v,P)),n.set(a,u)),u!==void 0){var d=b(u);return d===v?void 0:d}return Reflect.get(c,a,t)},getOwnPropertyDescriptor(c,a){var t=Reflect.getOwnPropertyDescriptor(c,a);if(t&&"value"in t){var u=n.get(a);u&&(t.value=b(u))}else if(t===void 0){var s=n.get(a),d=s==null?void 0:s.v;if(s!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(c,a){var d;if(a===I)return!0;var t=n.get(a),u=t!==void 0&&t.v!==v||Reflect.has(c,a);if(t!==void 0||q!==null&&(!u||(d=O(c,a))!=null&&d.writable)){t===void 0&&(t=w(u?E(c[a],P):v),n.set(a,t));var s=b(t);if(s===v)return!1}return u},set(c,a,t,u){var R;var s=n.get(a),d=a in c;if(l&&a==="length")for(var _=t;_<s.v;_+=1){var g=n.get(_+"");g!==void 0?y(g,v):_ in c&&(g=w(v),n.set(_+"",g))}s===void 0?(!d||(R=O(c,a))!=null&&R.writable)&&(s=w(void 0),y(s,E(t,P)),n.set(a,s)):(d=s.v!==v,y(s,E(t,P)));var p=Reflect.getOwnPropertyDescriptor(c,a);if(p!=null&&p.set&&p.set.call(u,t),!d){if(l&&typeof a=="string"){var S=n.get("length"),x=Number(a);Number.isInteger(x)&&x>=S.v&&y(S,x+1)}Z(h)}return!0},ownKeys(c){b(h);var a=Reflect.ownKeys(c).filter(s=>{var d=n.get(s);return d===void 0||d.v!==v});for(var[t,u]of n)u.v!==v&&!(t in c)&&a.push(t);return a},setPrototypeOf(){ne()}})}function Z(e,r=1){y(e,e.v+r)}function Ne(e,r,f=!1){N&&W();var i=e,n=null,l=null,h=v,P=f?J:0,c=!1;const a=(u,s=!0)=>{c=!0,t(s,u)},t=(u,s)=>{if(h===(h=u))return;let d=!1;if(N){const _=i.data===se;!!h===_&&(i=fe(),ue(i),U(!1),d=!0)}h?(n?Y(n):s&&(n=B(()=>s(i))),l&&C(l,()=>{l=null})):(l?Y(l):s&&(l=B(()=>s(i))),n&&C(n,()=>{n=null})),d&&U(!0)};V(()=>{c=!1,r(a),c||t(null,null)},P),N&&(i=Q)}function De(e,r,f){N&&W();var i=e,n,l;V(()=>{n!==(n=r())&&(l&&(C(l),l=null),n&&(l=B(()=>f(i,n))))},J),N&&(i=Q)}function $(e,r){return e===r||(e==null?void 0:e[I])===r}function Le(e={},r,f,i){return le(()=>{var n,l;return ce(()=>{n=l,l=[],F(()=>{e!==f(...l)&&(r(e,...l),n&&$(f(...n),e)&&r(null,...n))})}),()=>{de(()=>{l&&$(f(...l),e)&&r(null,...l)})}}),e}const Ie={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=Se({get[r](){return e.props[r]}},r,X)),e.special[r](f),M(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),M(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function qe(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},Ie)}const Oe={get(e,r){let f=e.props.length;for(;f--;){let i=e.props[f];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,f){let i=e.props.length;for(;i--;){let n=e.props[i];A(n)&&(n=n());const l=O(n,r);if(l&&l.set)return l.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let i=e.props[f];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=O(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===I||r===k)return!1;for(let f of e.props)if(A(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){A(f)&&(f=f());for(const i in f)r.includes(i)||r.push(i)}return r}};function Be(...e){return new Proxy({props:e},Oe)}function z(e){for(var r=q,f=q;r!==null&&!(r.f&(be|Pe));)r=r.parent;try{return G(r),e()}finally{G(f)}}function Se(e,r,f,i){var j;var n=(f&we)!==0,l=!Ee||(f&pe)!==0,h=(f&he)!==0,P=(f&ge)!==0,c=!1,a;h?[a,c]=me(()=>e[r]):a=e[r];var t=I in e||k in e,u=h&&(((j=O(e,r))==null?void 0:j.set)??(t&&r in e&&(o=>e[r]=o)))||void 0,s=i,d=!0,_=!1,g=()=>(_=!0,d&&(d=!1,P?s=F(i):s=i),s);a===void 0&&i!==void 0&&(u&&l&&oe(),a=g(),u&&u(a));var p;if(l)p=()=>{var o=e[r];return o===void 0?g():(d=!0,_=!1,o)};else{var S=z(()=>(n?H:Re)(()=>e[r]));S.f|=_e,p=()=>{var o=b(S);return o!==void 0&&(s=void 0),o===void 0?s:o}}if(!(f&X))return p;if(u){var x=e.$$legacy;return function(o,m){return arguments.length>0?((!l||!m||x||c)&&u(m?p():o),o):p()}}var R=!1,K=!1,D=ye(a),T=z(()=>H(()=>{var o=p(),m=b(D);return R?(R=!1,K=!0,m):(K=!1,D.v=o)}));return n||(T.equals=ve),function(o,m){if(arguments.length>0){const L=m?b(T):l&&h?E(o):o;return T.equals(L)||(R=!0,y(D,L),_&&s!==void 0&&(s=L),F(()=>b(T))),o}return b(T)}}export{E as a,Le as b,De as c,Ne as i,qe as l,Se as p,Be as s};
