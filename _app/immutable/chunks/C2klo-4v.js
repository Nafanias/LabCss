import{a4 as P,a5 as se,a6 as ae,a7 as w,a8 as fe,g as h,a9 as v,F as g,aa as S,l as j,ab as ue,ac as le,C as ce,ad as X,m as A,q as k,ae as ee,af as oe,ag as de,p as _e,U as Y,ah as $,$ as C,ai as F,o as re,aj as ve,ak as be,b as U,N as pe,J as he,O as ge,z,a2 as ne,al as ye,am as we,an as ie,ao as Pe,ap as G,aq as Re,a0 as te,ar as Ee,as as Oe,at as Ie,L as H,au as Se,f as Z,av as T,aw as me,ax as xe}from"./MOftl_Qc.js";import{s as Ne,g as Te}from"./BsVSmaY6.js";import{l as Ae}from"./DIeogL5L.js";function I(e,r=null,t){if(typeof e!="object"||e===null||P in e)return e;const i=le(e);if(i!==se&&i!==ae)return e;var n=new Map,u=ce(e),b=w(0);u&&n.set("length",w(e.length));var y;return new Proxy(e,{defineProperty(c,s,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&ue();var l=n.get(s);return l===void 0?(l=w(a.value),n.set(s,l)):g(l,I(a.value,y)),!0},deleteProperty(c,s){var a=n.get(s);if(a===void 0)s in c&&n.set(s,w(v));else{if(u&&typeof s=="string"){var l=n.get("length"),f=Number(s);Number.isInteger(f)&&f<l.v&&g(l,f)}g(a,v),J(b)}return!0},get(c,s,a){var _;if(s===P)return e;var l=n.get(s),f=s in c;if(l===void 0&&(!f||(_=S(c,s))!=null&&_.writable)&&(l=w(I(f?c[s]:v,y)),n.set(s,l)),l!==void 0){var o=h(l);return o===v?void 0:o}return Reflect.get(c,s,a)},getOwnPropertyDescriptor(c,s){var a=Reflect.getOwnPropertyDescriptor(c,s);if(a&&"value"in a){var l=n.get(s);l&&(a.value=h(l))}else if(a===void 0){var f=n.get(s),o=f==null?void 0:f.v;if(f!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return a},has(c,s){var o;if(s===P)return!0;var a=n.get(s),l=a!==void 0&&a.v!==v||Reflect.has(c,s);if(a!==void 0||j!==null&&(!l||(o=S(c,s))!=null&&o.writable)){a===void 0&&(a=w(l?I(c[s],y):v),n.set(s,a));var f=h(a);if(f===v)return!1}return l},set(c,s,a,l){var E;var f=n.get(s),o=s in c;if(u&&s==="length")for(var _=a;_<f.v;_+=1){var R=n.get(_+"");R!==void 0?g(R,v):_ in c&&(R=w(v),n.set(_+"",R))}f===void 0?(!o||(E=S(c,s))!=null&&E.writable)&&(f=w(void 0),g(f,I(a,y)),n.set(s,f)):(o=f.v!==v,g(f,I(a,y)));var p=Reflect.getOwnPropertyDescriptor(c,s);if(p!=null&&p.set&&p.set.call(l,a),!o){if(u&&typeof s=="string"){var m=n.get("length"),x=Number(s);Number.isInteger(x)&&x>=m.v&&g(m,x+1)}J(b)}return!0},ownKeys(c){h(b);var s=Reflect.ownKeys(c).filter(f=>{var o=n.get(f);return o===void 0||o.v!==v});for(var[a,l]of n)l.v!==v&&!(a in c)&&s.push(a);return s},setPrototypeOf(){fe()}})}function J(e,r=1){g(e,e.v+r)}function V(e){return e!==null&&typeof e=="object"&&P in e?e[P]:e}function Be(e,r){return Object.is(V(e),V(r))}function Ke(e,r,t=!1){A&&k();var i=e,n=null,u=null,b=v,y=t?ee:0,c=!1;const s=(l,f=!0)=>{c=!0,a(f,l)},a=(l,f)=>{if(b===(b=l))return;let o=!1;if(A){const _=i.data===oe;!!b===_&&(i=de(),_e(i),Y(!1),o=!0)}b?(n?$(n):f&&(n=C(()=>f(i))),u&&F(u,()=>{u=null})):(u?$(u):f&&(u=C(()=>f(i))),n&&F(n,()=>{n=null})),o&&Y(!0)};X(()=>{c=!1,r(s),c||a(null,null)},y),A&&(i=re)}function Me(e,r,t){A&&k();var i=e,n,u;X(()=>{n!==(n=r())&&(u&&(F(u),u=null),n&&(u=C(()=>t(i,n))))},ee),A&&(i=re)}function Q(e,r){return e===r||(e==null?void 0:e[P])===r}function Ye(e={},r,t,i){return ve(()=>{var n,u;return be(()=>{n=u,u=[],U(()=>{e!==t(...u)&&(r(e,...u),n&&Q(t(...n),e)&&r(null,...n))})}),()=>{pe(()=>{u&&Q(t(...u),e)&&r(null,...u)})}}),e}let D=!1,B=Symbol();function $e(e,r,t){const i=t[r]??(t[r]={store:null,source:ne(void 0),unsubscribe:z});if(i.store!==e&&!(B in t))if(i.unsubscribe(),i.store=e??null,e==null)i.source.v=void 0,i.unsubscribe=z;else{var n=!0;i.unsubscribe=Ne(e,u=>{n?i.source.v=u:g(i.source,u)}),n=!1}return e&&B in t?Te(e):h(i.source)}function ze(e,r){return e.set(r),r}function Ge(){const e={};function r(){he(()=>{for(var t in e)e[t].unsubscribe();ge(e,B,{enumerable:!1,value:!0})})}return[e,r]}function De(e){var r=D;try{return D=!1,[e(),D]}finally{D=r}}function He(e,r=1){const t=e();return e(t+r),t}const Le={get(e,r){if(!e.exclude.includes(r))return h(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=je({get[r](){return e.props[r]}},r,ie)),e.special[r](t),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ze(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},Le)}const qe={get(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,t){let i=e.props.length;for(;i--;){let n=e.props[i];T(n)&&(n=n());const u=S(n,r);if(u&&u.set)return u.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=S(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===P||r===te)return!1;for(let t of e.props)if(T(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){T(t)&&(t=t());for(const i in t)r.includes(i)||r.push(i)}return r}};function Je(...e){return new Proxy({props:e},qe)}function W(e){for(var r=j,t=j;r!==null&&!(r.f&(Oe|Ie));)r=r.parent;try{return H(r),e()}finally{H(t)}}function je(e,r,t,i){var M;var n=(t&Se)!==0,u=!Ae||(t&Ee)!==0,b=(t&Re)!==0,y=(t&me)!==0,c=!1,s;b?[s,c]=De(()=>e[r]):s=e[r];var a=P in e||te in e,l=b&&(((M=S(e,r))==null?void 0:M.set)??(a&&r in e&&(d=>e[r]=d)))||void 0,f=i,o=!0,_=!1,R=()=>(_=!0,o&&(o=!1,y?f=U(i):f=i),f);s===void 0&&i!==void 0&&(l&&u&&ye(),s=R(),l&&l(s));var p;if(u)p=()=>{var d=e[r];return d===void 0?R():(o=!0,_=!1,d)};else{var m=W(()=>(n?Z:xe)(()=>e[r]));m.f|=we,p=()=>{var d=h(m);return d!==void 0&&(f=void 0),d===void 0?f:d}}if(!(t&ie))return p;if(l){var x=e.$$legacy;return function(d,O){return arguments.length>0?((!u||!O||x||c)&&l(O?p():d),d):p()}}var E=!1,K=!1,L=ne(s),N=W(()=>Z(()=>{var d=p(),O=h(L);return E?(E=!1,K=!0,O):(K=!1,L.v=d)}));return n||(N.equals=Pe),function(d,O){if(arguments.length>0){const q=O?h(N):u&&b?I(d):d;return N.equals(q)||(E=!0,g(L,q),_&&f!==void 0&&(f=q),U(()=>h(N))),d}return h(N)}}export{I as a,Ye as b,Me as c,Be as d,$e as e,Ge as f,ze as g,Ke as i,Ze as l,je as p,Je as s,He as u};
