import{a1 as w,a2 as se,a3 as ae,a4 as P,a5 as fe,g as h,a6 as v,W as g,a7 as I,D as q,a8 as ue,S as le,O as ce,a9 as Q,C as N,o as k,aa as ee,ab as oe,ac as de,n as _e,m as Y,ad as Z,A as C,ae as F,p as re,af as ve,ag as be,b as U,R as pe,ah as he,Z as ge,L as $,_ as ne,ai as ye,aj as Pe,ak as ie,al as we,am as G,an as Re,X as te,P as Ee,ao as Oe,ap as Se,aq as Ie,ar as H,as as xe,h as z,at as A,au as me,av as Te}from"./Bxk8jPFT.js";import{s as Ae,g as Ne}from"./C1Z84IhU.js";function S(e,r=null,t){if(typeof e!="object"||e===null||w in e)return e;const i=le(e);if(i!==se&&i!==ae)return e;var n=new Map,u=ce(e),b=P(0);u&&n.set("length",P(e.length));var y;return new Proxy(e,{defineProperty(c,s,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&ue();var l=n.get(s);return l===void 0?(l=P(a.value),n.set(s,l)):g(l,S(a.value,y)),!0},deleteProperty(c,s){var a=n.get(s);if(a===void 0)s in c&&n.set(s,P(v));else{if(u&&typeof s=="string"){var l=n.get("length"),f=Number(s);Number.isInteger(f)&&f<l.v&&g(l,f)}g(a,v),V(b)}return!0},get(c,s,a){var _;if(s===w)return e;var l=n.get(s),f=s in c;if(l===void 0&&(!f||(_=I(c,s))!=null&&_.writable)&&(l=P(S(f?c[s]:v,y)),n.set(s,l)),l!==void 0){var o=h(l);return o===v?void 0:o}return Reflect.get(c,s,a)},getOwnPropertyDescriptor(c,s){var a=Reflect.getOwnPropertyDescriptor(c,s);if(a&&"value"in a){var l=n.get(s);l&&(a.value=h(l))}else if(a===void 0){var f=n.get(s),o=f==null?void 0:f.v;if(f!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return a},has(c,s){var o;if(s===w)return!0;var a=n.get(s),l=a!==void 0&&a.v!==v||Reflect.has(c,s);if(a!==void 0||q!==null&&(!l||(o=I(c,s))!=null&&o.writable)){a===void 0&&(a=P(l?S(c[s],y):v),n.set(s,a));var f=h(a);if(f===v)return!1}return l},set(c,s,a,l){var E;var f=n.get(s),o=s in c;if(u&&s==="length")for(var _=a;_<f.v;_+=1){var R=n.get(_+"");R!==void 0?g(R,v):_ in c&&(R=P(v),n.set(_+"",R))}f===void 0?(!o||(E=I(c,s))!=null&&E.writable)&&(f=P(void 0),g(f,S(a,y)),n.set(s,f)):(o=f.v!==v,g(f,S(a,y)));var p=Reflect.getOwnPropertyDescriptor(c,s);if(p!=null&&p.set&&p.set.call(l,a),!o){if(u&&typeof s=="string"){var x=n.get("length"),m=Number(s);Number.isInteger(m)&&m>=x.v&&g(x,m+1)}V(b)}return!0},ownKeys(c){h(b);var s=Reflect.ownKeys(c).filter(f=>{var o=n.get(f);return o===void 0||o.v!==v});for(var[a,l]of n)l.v!==v&&!(a in c)&&s.push(a);return s},setPrototypeOf(){fe()}})}function V(e,r=1){g(e,e.v+r)}function W(e){return e!==null&&typeof e=="object"&&w in e?e[w]:e}function Ue(e,r){return Object.is(W(e),W(r))}function Be(e,r,t=!1){N&&k();var i=e,n=null,u=null,b=v,y=t?ee:0,c=!1;const s=(l,f=!0)=>{c=!0,a(f,l)},a=(l,f)=>{if(b===(b=l))return;let o=!1;if(N){const _=i.data===oe;!!b===_&&(i=de(),_e(i),Y(!1),o=!0)}b?(n?Z(n):f&&(n=C(()=>f(i))),u&&F(u,()=>{u=null})):(u?Z(u):f&&(u=C(()=>f(i))),n&&F(n,()=>{n=null})),o&&Y(!0)};Q(()=>{c=!1,r(s),c||a(null,null)},y),N&&(i=re)}function Ke(e,r,t){N&&k();var i=e,n,u;Q(()=>{n!==(n=r())&&(u&&(F(u),u=null),n&&(u=C(()=>t(i,n))))},ee),N&&(i=re)}function X(e,r){return e===r||(e==null?void 0:e[w])===r}function Me(e={},r,t,i){return ve(()=>{var n,u;return be(()=>{n=u,u=[],U(()=>{e!==t(...u)&&(r(e,...u),n&&X(t(...n),e)&&r(null,...n))})}),()=>{pe(()=>{u&&X(t(...u),e)&&r(null,...u)})}}),e}let D=!1,B=Symbol();function Ye(e,r,t){const i=t[r]??(t[r]={store:null,source:ne(void 0),unsubscribe:$});if(i.store!==e&&!(B in t))if(i.unsubscribe(),i.store=e??null,e==null)i.source.v=void 0,i.unsubscribe=$;else{var n=!0;i.unsubscribe=Ae(e,u=>{n?i.source.v=u:g(i.source,u)}),n=!1}return e&&B in t?Ne(e):h(i.source)}function Ze(e,r){return e.set(r),r}function $e(){const e={};function r(){he(()=>{for(var t in e)e[t].unsubscribe();ge(e,B,{enumerable:!1,value:!0})})}return[e,r]}function De(e){var r=D;try{return D=!1,[e(),D]}finally{D=r}}function Ge(e,r=1){const t=e();return e(t+r),t}const Le={get(e,r){if(!e.exclude.includes(r))return h(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=qe({get[r](){return e.props[r]}},r,ie)),e.special[r](t),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function He(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},Le)}const je={get(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,t){let i=e.props.length;for(;i--;){let n=e.props[i];A(n)&&(n=n());const u=I(n,r);if(u&&u.set)return u.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(A(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=I(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===w||r===te)return!1;for(let t of e.props)if(A(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){A(t)&&(t=t());for(const i in t)r.includes(i)||r.push(i)}return r}};function ze(...e){return new Proxy({props:e},je)}function J(e){for(var r=q,t=q;r!==null&&!(r.f&(Se|Ie));)r=r.parent;try{return H(r),e()}finally{H(t)}}function qe(e,r,t,i){var M;var n=(t&xe)!==0,u=!Ee||(t&Oe)!==0,b=(t&Re)!==0,y=(t&me)!==0,c=!1,s;b?[s,c]=De(()=>e[r]):s=e[r];var a=w in e||te in e,l=b&&(((M=I(e,r))==null?void 0:M.set)??(a&&r in e&&(d=>e[r]=d)))||void 0,f=i,o=!0,_=!1,R=()=>(_=!0,o&&(o=!1,y?f=U(i):f=i),f);s===void 0&&i!==void 0&&(l&&u&&ye(),s=R(),l&&l(s));var p;if(u)p=()=>{var d=e[r];return d===void 0?R():(o=!0,_=!1,d)};else{var x=J(()=>(n?z:Te)(()=>e[r]));x.f|=Pe,p=()=>{var d=h(x);return d!==void 0&&(f=void 0),d===void 0?f:d}}if(!(t&ie))return p;if(l){var m=e.$$legacy;return function(d,O){return arguments.length>0?((!u||!O||m||c)&&l(O?p():d),d):p()}}var E=!1,K=!1,L=ne(s),T=J(()=>z(()=>{var d=p(),O=h(L);return E?(E=!1,K=!0,O):(K=!1,L.v=d)}));return n||(T.equals=we),function(d,O){if(arguments.length>0){const j=O?h(T):u&&b?S(d):d;return T.equals(j)||(E=!0,g(L,j),_&&f!==void 0&&(f=j),U(()=>h(T))),d}return h(T)}}export{S as a,Me as b,Ke as c,Ue as d,Ye as e,$e as f,Ze as g,Be as i,He as l,qe as p,ze as s,Ge as u};
