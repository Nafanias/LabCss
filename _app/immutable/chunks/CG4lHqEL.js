import{a9 as P,aa as se,ab as ae,o as w,ac as fe,g as h,ad as v,a0 as g,G as S,l as q,ae as ue,af as le,B as ce,b as X,h as A,a as k,ag as ee,H as oe,r as de,s as _e,c as Y,i as G,j as C,p as B,e as re,ah as ve,ai as be,O as F,C as pe,J as he,a7 as ge,aj as H,n as ne,ak as ye,al as we,am as Pe,an as Re,ao as ie,ap as Ee,aq as $,ar as Oe,a5 as te,as as Ie,at as Se,au as xe,av as Z,aw as Te,R as z,ax as N,ay as me,d as Ne}from"./Dd7UJIo3.js";import{l as Ae}from"./DIeogL5L.js";function I(e,r=null,t){if(typeof e!="object"||e===null||P in e)return e;const i=le(e);if(i!==se&&i!==ae)return e;var n=new Map,u=ce(e),b=w(0);u&&n.set("length",w(e.length));var y;return new Proxy(e,{defineProperty(c,s,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&ue();var l=n.get(s);return l===void 0?(l=w(a.value),n.set(s,l)):g(l,I(a.value,y)),!0},deleteProperty(c,s){var a=n.get(s);if(a===void 0)s in c&&n.set(s,w(v));else{if(u&&typeof s=="string"){var l=n.get("length"),f=Number(s);Number.isInteger(f)&&f<l.v&&g(l,f)}g(a,v),J(b)}return!0},get(c,s,a){var _;if(s===P)return e;var l=n.get(s),f=s in c;if(l===void 0&&(!f||(_=S(c,s))!=null&&_.writable)&&(l=w(I(f?c[s]:v,y)),n.set(s,l)),l!==void 0){var o=h(l);return o===v?void 0:o}return Reflect.get(c,s,a)},getOwnPropertyDescriptor(c,s){var a=Reflect.getOwnPropertyDescriptor(c,s);if(a&&"value"in a){var l=n.get(s);l&&(a.value=h(l))}else if(a===void 0){var f=n.get(s),o=f==null?void 0:f.v;if(f!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return a},has(c,s){var o;if(s===P)return!0;var a=n.get(s),l=a!==void 0&&a.v!==v||Reflect.has(c,s);if(a!==void 0||q!==null&&(!l||(o=S(c,s))!=null&&o.writable)){a===void 0&&(a=w(l?I(c[s],y):v),n.set(s,a));var f=h(a);if(f===v)return!1}return l},set(c,s,a,l){var E;var f=n.get(s),o=s in c;if(u&&s==="length")for(var _=a;_<f.v;_+=1){var R=n.get(_+"");R!==void 0?g(R,v):_ in c&&(R=w(v),n.set(_+"",R))}f===void 0?(!o||(E=S(c,s))!=null&&E.writable)&&(f=w(void 0),g(f,I(a,y)),n.set(s,f)):(o=f.v!==v,g(f,I(a,y)));var p=Reflect.getOwnPropertyDescriptor(c,s);if(p!=null&&p.set&&p.set.call(l,a),!o){if(u&&typeof s=="string"){var x=n.get("length"),T=Number(s);Number.isInteger(T)&&T>=x.v&&g(x,T+1)}J(b)}return!0},ownKeys(c){h(b);var s=Reflect.ownKeys(c).filter(f=>{var o=n.get(f);return o===void 0||o.v!==v});for(var[a,l]of n)l.v!==v&&!(a in c)&&s.push(a);return s},setPrototypeOf(){fe()}})}function J(e,r=1){g(e,e.v+r)}function V(e){return e!==null&&typeof e=="object"&&P in e?e[P]:e}function Fe(e,r){return Object.is(V(e),V(r))}function Ue(e,r,t=!1){A&&k();var i=e,n=null,u=null,b=v,y=t?ee:0,c=!1;const s=(l,f=!0)=>{c=!0,a(f,l)},a=(l,f)=>{if(b===(b=l))return;let o=!1;if(A){const _=i.data===oe;!!b===_&&(i=de(),_e(i),Y(!1),o=!0)}b?(n?G(n):f&&(n=C(()=>f(i))),u&&B(u,()=>{u=null})):(u?G(u):f&&(u=C(()=>f(i))),n&&B(n,()=>{n=null})),o&&Y(!0)};X(()=>{c=!1,r(s),c||a(null,null)},y),A&&(i=re)}function Ke(e,r,t){A&&k();var i=e,n,u;X(()=>{n!==(n=r())&&(u&&(B(u),u=null),n&&(u=C(()=>t(i,n))))},ee),A&&(i=re)}function Q(e,r){return e===r||(e==null?void 0:e[P])===r}function Me(e={},r,t,i){return ve(()=>{var n,u;return be(()=>{n=u,u=[],F(()=>{e!==t(...u)&&(r(e,...u),n&&Q(t(...n),e)&&r(null,...n))})}),()=>{pe(()=>{u&&Q(t(...u),e)&&r(null,...u)})}}),e}let D=!1,U=Symbol();function Ye(e,r,t){const i=t[r]??(t[r]={store:null,source:ne(void 0),unsubscribe:H});if(i.store!==e&&!(U in t))if(i.unsubscribe(),i.store=e??null,e==null)i.source.v=void 0,i.unsubscribe=H;else{var n=!0;i.unsubscribe=ye(e,u=>{n?i.source.v=u:g(i.source,u)}),n=!1}return e&&U in t?we(e):h(i.source)}function Ge(e,r){return e.set(r),r}function He(){const e={};function r(){he(()=>{for(var t in e)e[t].unsubscribe();ge(e,U,{enumerable:!1,value:!0})})}return[e,r]}function De(e){var r=D;try{return D=!1,[e(),D]}finally{D=r}}function $e(e,r=1){const t=e();return e(t+r),t}const Le={get(e,r){if(!e.exclude.includes(r))return h(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=qe({get[r](){return e.props[r]}},r,ie)),e.special[r](t),$(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),$(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ze(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},Le)}const je={get(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(N(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,t){let i=e.props.length;for(;i--;){let n=e.props[i];N(n)&&(n=n());const u=S(n,r);if(u&&u.set)return u.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(N(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=S(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===P||r===te)return!1;for(let t of e.props)if(N(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){N(t)&&(t=t());for(const i in t)r.includes(i)||r.push(i)}return r}};function ze(...e){return new Proxy({props:e},je)}function W(e){for(var r=q,t=q;r!==null&&!(r.f&(Se|xe));)r=r.parent;try{return Z(r),e()}finally{Z(t)}}function qe(e,r,t,i){var M;var n=(t&Te)!==0,u=!Ae||(t&Ie)!==0,b=(t&Oe)!==0,y=(t&me)!==0,c=!1,s;b?[s,c]=De(()=>e[r]):s=e[r];var a=P in e||te in e,l=b&&(((M=S(e,r))==null?void 0:M.set)??(a&&r in e&&(d=>e[r]=d)))||void 0,f=i,o=!0,_=!1,R=()=>(_=!0,o&&(o=!1,y?f=F(i):f=i),f);s===void 0&&i!==void 0&&(l&&u&&Pe(),s=R(),l&&l(s));var p;if(u)p=()=>{var d=e[r];return d===void 0?R():(o=!0,_=!1,d)};else{var x=W(()=>(n?z:Ne)(()=>e[r]));x.f|=Re,p=()=>{var d=h(x);return d!==void 0&&(f=void 0),d===void 0?f:d}}if(!(t&ie))return p;if(l){var T=e.$$legacy;return function(d,O){return arguments.length>0?((!u||!O||T||c)&&l(O?p():d),d):p()}}var E=!1,K=!1,L=ne(s),m=W(()=>z(()=>{var d=p(),O=h(L);return E?(E=!1,K=!0,O):(K=!1,L.v=d)}));return n||(m.equals=Ee),function(d,O){if(arguments.length>0){const j=O?h(m):u&&b?I(d):d;return m.equals(j)||(E=!0,g(L,j),_&&f!==void 0&&(f=j),F(()=>h(m))),d}return h(m)}}export{I as a,Me as b,Ke as c,Ye as d,He as e,Ge as f,Fe as g,Ue as i,Ze as l,qe as p,ze as s,$e as u};
