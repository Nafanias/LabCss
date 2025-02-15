import{J as P,az as A,av as k,aA as V,l as b,C as q,a7 as z,B as G,h as p,z as E,A as L,aB as Y,aC as U,e as c,s as M,a as W,aD as R,aE as x,y as J,aF as S,c as T,f as K,aG as X,aH as Z,t as Q,k as ee,aI as te,j as re,X as ae,K as ne,Z as oe}from"./k7iXlUI8.js";function ve(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ie=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function pe(e){return ie.includes(e)}const se={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function he(e){return e=e.toLowerCase(),se[e]??e}const ue=["touchstart","touchmove"];function le(e){return ue.includes(e)}function ye(e,t,r,i=!0){i&&r();for(var n of t)e.addEventListener(n,r);P(()=>{for(var a of t)e.removeEventListener(a,r)})}function ce(e){var t=V,r=b;A(null),k(null);try{return e()}finally{A(t),k(r)}}const j=new Set,D=new Set;function me(e){if(!p)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function fe(e,t,r,i={}){function n(a){if(i.capture||g.call(t,a),!a.cancelBubble)return ce(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?q(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function ge(e,t,r,i,n){var a={capture:i,passive:n},o=fe(e,t,r,a);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(e,o,a)})}function Ee(e){for(var t=0;t<e.length;t++)j.add(e[t]);for(var r of D)r(e)}function g(e){var O;var t=this,r=t.ownerDocument,i=e.type,n=((O=e.composedPath)==null?void 0:O.call(e))||[],a=n[0]||e.target,o=0,f=e.__root;if(f){var l=n.indexOf(f);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var y=n.indexOf(t);if(y===-1)return;l<=y&&(o=l)}if(a=n[o]||e.target,a!==t){z(e,"currentTarget",{configurable:!0,get(){return a||r}});var N=V,d=b;A(null),k(null);try{for(var s,u=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+i];if(h!==void 0&&!a.disabled)if(G(h)){var[$,...F]=h;$.apply(a,[e,...F])}else h.call(a,e)}catch(w){s?u.push(w):s=w}if(e.cancelBubble||v===t||v===null)break;a=v}if(s){for(let w of u)queueMicrotask(()=>{throw w});throw s}}finally{e.__root=t,delete e.currentTarget,A(N),k(d)}}}function B(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _(e,t){var r=b;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function be(e,t){var r=(t&Y)!==0,i=(t&U)!==0,n,a=!e.startsWith("<!>");return()=>{if(p)return _(c,null),c;n===void 0&&(n=B(a?e:"<!>"+e),r||(n=E(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var f=E(o),l=o.lastChild;_(f,l)}else _(o,o);return o}}function we(e,t,r="svg"){var i=!e.startsWith("<!>"),n=`<${r}>${i?e:"<!>"+e}</${r}>`,a;return()=>{if(p)return _(c,null),c;if(!a){var o=B(n),f=E(o);a=E(f)}var l=a.cloneNode(!0);return _(l,l),l}}function Te(e=""){if(!p){var t=L(e+"");return _(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=L()),M(r)),_(r,r),r}function Ae(){if(p)return _(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=L();return e.append(t,r),_(t,r),e}function ke(e,t){if(p){b.nodes_end=c,W();return}e!==null&&e.before(t)}let C=!0;function Le(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function de(e,t){return H(e,t)}function Ne(e,t){R(),t.intro=t.intro??!1;const r=t.target,i=p,n=c;try{for(var a=E(r);a&&(a.nodeType!==8||a.data!==x);)a=J(a);if(!a)throw S;T(!0),M(a),W();const o=H(e,{...t,anchor:a});if(c===null||c.nodeType!==8||c.data!==K)throw X(),S;return T(!1),o}catch(o){if(o===S)return t.recover===!1&&Z(),R(),Q(r),T(!1),de(e,t);throw o}finally{T(i),M(n)}}const m=new Map;function H(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:o=!0}){R();var f=new Set,l=d=>{for(var s=0;s<d.length;s++){var u=d[s];if(!f.has(u)){f.add(u);var v=le(u);t.addEventListener(u,g,{passive:v});var h=m.get(u);h===void 0?(document.addEventListener(u,g,{passive:v}),m.set(u,1)):m.set(u,h+1)}}};l(ee(j)),D.add(l);var y=void 0,N=te(()=>{var d=r??t.appendChild(L());return re(()=>{if(a){ae({});var s=ne;s.c=a}n&&(i.$$events=n),p&&_(d,null),C=o,y=e(d,i)||{},C=!0,p&&(b.nodes_end=c),a&&oe()}),()=>{var v;for(var s of f){t.removeEventListener(s,g);var u=m.get(s);--u===0?(document.removeEventListener(s,g),m.delete(s)):m.set(s,u)}D.delete(l),d!==r&&((v=d.parentNode)==null||v.removeChild(d))}});return I.set(y,N),y}let I=new WeakMap;function Se(e,t){const r=I.get(e);return r?(I.delete(e),r(t)):Promise.resolve()}export{ke as a,Te as b,Ae as c,C as d,ge as e,fe as f,Ee as g,Ne as h,ve as i,he as j,pe as k,ye as l,de as m,we as n,me as r,Le as s,be as t,Se as u,ce as w};
