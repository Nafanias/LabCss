import{K as a,b as _,L as m,M as p,a as d,c as l,J as g}from"./DKre9Aca.js";import{l as h}from"./DIeogL5L.js";function v(e,n,t){if(e==null)return n(void 0),a;const s=_(()=>e.subscribe(n,t));return s.unsubscribe?()=>s.unsubscribe():s}const r=[];function y(e,n=a){let t=null;const s=new Set;function o(c){if(m(e,c)&&(e=c,t)){const f=!r.length;for(const u of s)u[1](),r.push(u,e);if(f){for(let u=0;u<r.length;u+=2)r[u][0](r[u+1]);r.length=0}}}function i(c){o(c(e))}function b(c,f=a){const u=[c,f];return s.add(u),s.size===1&&(t=n(o,i)||a),c(e),()=>{s.delete(u),s.size===0&&t&&(t(),t=null)}}return{set:o,update:i,subscribe:b}}function z(e){let n;return v(e,t=>n=t)(),n}function E(e){l===null&&p(),h&&l.l!==null?k(l).m.push(e):d(()=>{const n=_(e);if(typeof n=="function")return n})}function x(e,n,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:s})}function M(){const e=l;return e===null&&p(),(n,t,s)=>{var i;const o=(i=e.s.$$events)==null?void 0:i[n];if(o){const b=g(o)?o.slice():[o],c=x(n,t,s);for(const f of b)f.call(e.x,c);return!c.defaultPrevented}return!0}}function k(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{M as c,z as g,E as o,v as s,y as w};
