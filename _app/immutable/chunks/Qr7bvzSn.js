import{a2 as O,a3 as re,a4 as ne,a5 as g,a6 as ae,g as b,a7 as v,Y as w,a8 as S,D as j,a9 as ie,T as te,G as se,aa as J,h as D,a as Q,ab as W,ac as fe,ad as ue,p as le,o as M,ae as U,B,af as C,q as X,ag as ce,ah as de,d as F,R as _e,ai as oe,aj as ve,ak as k,al as he,am as G,an as pe,Z as ee,I as be,ao as Pe,ap as ge,aq as we,O as Z,ar as ye,j as $,$ as Re,as as A,at as Ee,au as Ie}from"./CkhXezJc.js";function I(e,r=null,f){if(typeof e!="object"||e===null||O in e)return e;const i=te(e);if(i!==re&&i!==ne)return e;var n=new Map,l=se(e),h=g(0);l&&n.set("length",g(e.length));var P;return new Proxy(e,{defineProperty(c,a,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&ie();var u=n.get(a);return u===void 0?(u=g(t.value),n.set(a,u)):w(u,I(t.value,P)),!0},deleteProperty(c,a){var t=n.get(a);if(t===void 0)a in c&&n.set(a,g(v));else{if(l&&typeof a=="string"){var u=n.get("length"),s=Number(a);Number.isInteger(s)&&s<u.v&&w(u,s)}w(t,v),H(h)}return!0},get(c,a,t){var o;if(a===O)return e;var u=n.get(a),s=a in c;if(u===void 0&&(!s||(o=S(c,a))!=null&&o.writable)&&(u=g(I(s?c[a]:v,P)),n.set(a,u)),u!==void 0){var d=b(u);return d===v?void 0:d}return Reflect.get(c,a,t)},getOwnPropertyDescriptor(c,a){var t=Reflect.getOwnPropertyDescriptor(c,a);if(t&&"value"in t){var u=n.get(a);u&&(t.value=b(u))}else if(t===void 0){var s=n.get(a),d=s==null?void 0:s.v;if(s!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(c,a){var d;if(a===O)return!0;var t=n.get(a),u=t!==void 0&&t.v!==v||Reflect.has(c,a);if(t!==void 0||j!==null&&(!u||(d=S(c,a))!=null&&d.writable)){t===void 0&&(t=g(u?I(c[a],P):v),n.set(a,t));var s=b(t);if(s===v)return!1}return u},set(c,a,t,u){var R;var s=n.get(a),d=a in c;if(l&&a==="length")for(var o=t;o<s.v;o+=1){var y=n.get(o+"");y!==void 0?w(y,v):o in c&&(y=g(v),n.set(o+"",y))}s===void 0?(!d||(R=S(c,a))!=null&&R.writable)&&(s=g(void 0),w(s,I(t,P)),n.set(a,s)):(d=s.v!==v,w(s,I(t,P)));var p=Reflect.getOwnPropertyDescriptor(c,a);if(p!=null&&p.set&&p.set.call(u,t),!d){if(l&&typeof a=="string"){var x=n.get("length"),T=Number(a);Number.isInteger(T)&&T>=x.v&&w(x,T+1)}H(h)}return!0},ownKeys(c){b(h);var a=Reflect.ownKeys(c).filter(s=>{var d=n.get(s);return d===void 0||d.v!==v});for(var[t,u]of n)u.v!==v&&!(t in c)&&a.push(t);return a},setPrototypeOf(){ae()}})}function H(e,r=1){w(e,e.v+r)}function Ae(e,r,f=!1){D&&Q();var i=e,n=null,l=null,h=v,P=f?W:0,c=!1;const a=(u,s=!0)=>{c=!0,t(s,u)},t=(u,s)=>{if(h===(h=u))return;let d=!1;if(D){const o=i.data===fe;!!h===o&&(i=ue(),le(i),M(!1),d=!0)}h?(n?U(n):s&&(n=B(()=>s(i))),l&&C(l,()=>{l=null})):(l?U(l):s&&(l=B(()=>s(i))),n&&C(n,()=>{n=null})),d&&M(!0)};J(()=>{c=!1,r(a),c||t(null,null)},P),D&&(i=X)}function De(e,r,f){D&&Q();var i=e,n,l;J(()=>{n!==(n=r())&&(l&&(C(l),l=null),n&&(l=B(()=>f(i,n))))},W),D&&(i=X)}function z(e,r){return e===r||(e==null?void 0:e[O])===r}function Ne(e={},r,f,i){return ce(()=>{var n,l;return de(()=>{n=l,l=[],F(()=>{e!==f(...l)&&(r(e,...l),n&&z(f(...n),e)&&r(null,...n))})}),()=>{_e(()=>{l&&z(f(...l),e)&&r(null,...l)})}}),e}let N=!1;function Oe(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const Se={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=Te({get[r](){return e.props[r]}},r,k)),e.special[r](f),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Le(e,r){return new Proxy({props:e,exclude:r,special:{},version:g(0)},Se)}const xe={get(e,r){let f=e.props.length;for(;f--;){let i=e.props[f];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,f){let i=e.props.length;for(;i--;){let n=e.props[i];A(n)&&(n=n());const l=S(n,r);if(l&&l.set)return l.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let i=e.props[f];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=S(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===O||r===ee)return!1;for(let f of e.props)if(A(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){A(f)&&(f=f());for(const i in f)r.includes(i)||r.push(i)}return r}};function qe(...e){return new Proxy({props:e},xe)}function V(e){for(var r=j,f=j;r!==null&&!(r.f&(ge|we));)r=r.parent;try{return Z(r),e()}finally{Z(f)}}function Te(e,r,f,i){var K;var n=(f&ye)!==0,l=!be||(f&Pe)!==0,h=(f&pe)!==0,P=(f&Ee)!==0,c=!1,a;h?[a,c]=Oe(()=>e[r]):a=e[r];var t=O in e||ee in e,u=h&&(((K=S(e,r))==null?void 0:K.set)??(t&&r in e&&(_=>e[r]=_)))||void 0,s=i,d=!0,o=!1,y=()=>(o=!0,d&&(d=!1,P?s=F(i):s=i),s);a===void 0&&i!==void 0&&(u&&l&&oe(),a=y(),u&&u(a));var p;if(l)p=()=>{var _=e[r];return _===void 0?y():(d=!0,o=!1,_)};else{var x=V(()=>(n?$:Ie)(()=>e[r]));x.f|=ve,p=()=>{var _=b(x);return _!==void 0&&(s=void 0),_===void 0?s:_}}if(!(f&k))return p;if(u){var T=e.$$legacy;return function(_,E){return arguments.length>0?((!l||!E||T||c)&&u(E?p():_),_):p()}}var R=!1,Y=!1,L=Re(a),m=V(()=>$(()=>{var _=p(),E=b(L);return R?(R=!1,Y=!0,E):(Y=!1,L.v=_)}));return n||(m.equals=he),function(_,E){if(arguments.length>0){const q=E?b(m):l&&h?I(_):_;return m.equals(q)||(R=!0,w(L,q),o&&s!==void 0&&(s=q),F(()=>b(m))),_}return b(m)}}export{I as a,Ne as b,De as c,Ae as i,Le as l,Te as p,qe as s};
