import{ae as I,af as X,ag as J,o as g,ah as Q,g as p,ab as _,a7 as w,X as m,l as j,ai as W,aj as k,B as ee,Y as re,ak as ne,al as q,n as Z,am as ie,an as te,ao as se,ap as ue,aq as H,ar as ae,a1 as K,as as M,at as fe,au as V,av as le,aw as ce,ax as oe,ay as de,az as Y,aA as _e,a4 as F,aB as N,aC as ve,d as be}from"./BpE17Re9.js";function R(e,r=null,i){if(typeof e!="object"||e===null||I in e)return e;const t=k(e);if(t!==X&&t!==J)return e;var s=new Map,d=ee(e),h=g(0);d&&s.set("length",g(e.length));var P;return new Proxy(e,{defineProperty(l,n,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&W();var f=s.get(n);return f===void 0?(f=g(u.value),s.set(n,f)):w(f,R(u.value,P)),!0},deleteProperty(l,n){var u=s.get(n);if(u===void 0)n in l&&s.set(n,g(_));else{if(d&&typeof n=="string"){var f=s.get("length"),a=Number(n);Number.isInteger(a)&&a<f.v&&w(f,a)}w(u,_),$(h)}return!0},get(l,n,u){var v;if(n===I)return e;var f=s.get(n),a=n in l;if(f===void 0&&(!a||(v=m(l,n))!=null&&v.writable)&&(f=g(R(a?l[n]:_,P)),s.set(n,f)),f!==void 0){var c=p(f);return c===_?void 0:c}return Reflect.get(l,n,u)},getOwnPropertyDescriptor(l,n){var u=Reflect.getOwnPropertyDescriptor(l,n);if(u&&"value"in u){var f=s.get(n);f&&(u.value=p(f))}else if(u===void 0){var a=s.get(n),c=a==null?void 0:a.v;if(a!==void 0&&c!==_)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(l,n){var c;if(n===I)return!0;var u=s.get(n),f=u!==void 0&&u.v!==_||Reflect.has(l,n);if(u!==void 0||j!==null&&(!f||(c=m(l,n))!=null&&c.writable)){u===void 0&&(u=g(f?R(l[n],P):_),s.set(n,u));var a=p(u);if(a===_)return!1}return f},set(l,n,u,f){var O;var a=s.get(n),c=n in l;if(d&&n==="length")for(var v=u;v<a.v;v+=1){var y=s.get(v+"");y!==void 0?w(y,_):v in l&&(y=g(_),s.set(v+"",y))}a===void 0?(!c||(O=m(l,n))!=null&&O.writable)&&(a=g(void 0),w(a,R(u,P)),s.set(n,a)):(c=a.v!==_,w(a,R(u,P)));var b=Reflect.getOwnPropertyDescriptor(l,n);if(b!=null&&b.set&&b.set.call(f,u),!c){if(d&&typeof n=="string"){var S=s.get("length"),E=Number(n);Number.isInteger(E)&&E>=S.v&&w(S,E+1)}$(h)}return!0},ownKeys(l){p(h);var n=Reflect.ownKeys(l).filter(a=>{var c=s.get(a);return c===void 0||c.v!==_});for(var[u,f]of s)f.v!==_&&!(u in l)&&n.push(u);return n},setPrototypeOf(){Q()}})}function $(e,r=1){w(e,e.v+r)}function z(e){return e!==null&&typeof e=="object"&&I in e?e[I]:e}function ye(e,r){return Object.is(z(e),z(r))}let A=!1,B=Symbol();function Ie(e,r,i){const t=i[r]??(i[r]={store:null,source:Z(void 0),unsubscribe:q});if(t.store!==e&&!(B in i))if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=q;else{var s=!0;t.unsubscribe=ie(e,d=>{s?t.source.v=d:w(t.source,d)}),s=!1}return e&&B in i?te(e):p(t.source)}function Oe(e,r){return e.set(r),r}function xe(){const e={};function r(){re(()=>{for(var i in e)e[i].unsubscribe();ne(e,B,{enumerable:!1,value:!0})})}return[e,r]}function pe(e){var r=A;try{return A=!1,[e(),A]}finally{A=r}}function Re(e,r=1){const i=e();return e(i+r),i}const we={get(e,r){if(!e.exclude.includes(r))return p(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,i){return r in e.special||(e.special[r]=he({get[r](){return e.props[r]}},r,H)),e.special[r](i),M(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),M(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function me(e,r){return new Proxy({props:e,exclude:r,special:{},version:g(0)},we)}const ge={get(e,r){let i=e.props.length;for(;i--;){let t=e.props[i];if(N(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t)return t[r]}},set(e,r,i){let t=e.props.length;for(;t--;){let s=e.props[t];N(s)&&(s=s());const d=m(s,r);if(d&&d.set)return d.set(i),!0}return!1},getOwnPropertyDescriptor(e,r){let i=e.props.length;for(;i--;){let t=e.props[i];if(N(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t){const s=m(t,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){if(r===I||r===V)return!1;for(let i of e.props)if(N(i)&&(i=i()),i!=null&&r in i)return!0;return!1},ownKeys(e){const r=[];for(let i of e.props){N(i)&&(i=i());for(const t in i)r.includes(t)||r.push(t)}return r}};function Se(...e){return new Proxy({props:e},ge)}function G(e){for(var r=j,i=j;r!==null&&!(r.f&(oe|de));)r=r.parent;try{return Y(r),e()}finally{Y(i)}}function he(e,r,i,t){var U;var s=(i&_e)!==0,d=!le||(i&ce)!==0,h=(i&fe)!==0,P=(i&ve)!==0,l=!1,n;h?[n,l]=pe(()=>e[r]):n=e[r];var u=I in e||V in e,f=h&&(((U=m(e,r))==null?void 0:U.set)??(u&&r in e&&(o=>e[r]=o)))||void 0,a=t,c=!0,v=!1,y=()=>(v=!0,c&&(c=!1,P?a=K(t):a=t),a);n===void 0&&t!==void 0&&(f&&d&&se(),n=y(),f&&f(n));var b;if(d)b=()=>{var o=e[r];return o===void 0?y():(c=!0,v=!1,o)};else{var S=G(()=>(s?F:be)(()=>e[r]));S.f|=ue,b=()=>{var o=p(S);return o!==void 0&&(a=void 0),o===void 0?a:o}}if(!(i&H))return b;if(f){var E=e.$$legacy;return function(o,x){return arguments.length>0?((!d||!x||E||l)&&f(x?b():o),o):b()}}var O=!1,C=!1,T=Z(n),D=G(()=>F(()=>{var o=b(),x=p(T);return O?(O=!1,C=!0,x):(C=!1,T.v=o)}));return s||(D.equals=ae),function(o,x){if(arguments.length>0){const L=x?p(D):d&&h?R(o):o;return D.equals(L)||(O=!0,w(T,L),v&&a!==void 0&&(a=L),K(()=>p(D))),o}return p(D)}}export{R as a,Ie as b,xe as c,Oe as d,ye as i,me as l,he as p,Se as s,Re as u};
