import{K as T,h as v,a as q,ag as C,aK as g,aL as I,aM as K,J as M}from"./B6Bop3hW.js";import{i as R,d as S,f as V,g as B,j as G}from"./Cp961D8H.js";function D(s,r){if(r){const t=document.body;s.autofocus=!0,T(()=>{document.activeElement===t&&s.focus()})}}let $=!1;function F(){$||($=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const t of s.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function X(s,r,t,i,a){var o;v&&q();var c=(o=r.$$slots)==null?void 0:o[t],d=!1;c===!0&&(c=r[t==="default"?"children":t],d=!0),c===void 0?a!==null&&a(s):c(s,d?()=>i:i)}function Z(s){const r={};s.children&&(r.default=!0);for(const t in s.$$slots)r[t]=!0;return r}function z(s){var r,t,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(r=0;r<a;r++)s[r]&&(t=z(s[r]))&&(i&&(i+=" "),i+=t)}else for(t in s)s[t]&&(i&&(i+=" "),i+=t);return i}function J(){for(var s,r,t=0,i="",a=arguments.length;t<a;t++)(s=arguments[t])&&(r=z(s))&&(i&&(i+=" "),i+=r);return i}function Y(s){return typeof s=="object"?J(s):s??""}function x(s){if(v){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var i=s.value;y(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var a=s.checked;y(s,"checked",null),s.checked=a}}};s.__on_r=t,I(t),F()}}function m(s,r){var t=s.__attributes??(s.__attributes={});t.value===(t.value=r??void 0)||s.value===r&&(r!==0||s.nodeName!=="PROGRESS")||(s.value=r??"")}function ss(s,r){var t=s.__attributes??(s.__attributes={});t.checked!==(t.checked=r??void 0)&&(s.checked=r)}function H(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function y(s,r,t,i){var a=s.__attributes??(s.__attributes={});v&&(a[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||a[r]!==(a[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[g]=t),t==null?s.removeAttribute(r):typeof t!="string"&&E(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function rs(s,r,t,i,a=!1,c=!1,d=!1){var o=r||{},b=s.tagName==="OPTION";for(var A in r)A in t||(t[A]=null);t.class&&(t.class=Y(t.class));var O=E(s),j=s.__attributes??(s.__attributes={});for(const e in t){let f=t[e];if(b&&e==="value"&&f==null){s.value=s.__value="",o[e]=f;continue}var p=o[e];if(f!==p){o[e]=f;var k=e[0]+e[1];if(k!=="$$"){if(k==="on"){const l={},_="$$"+e;let n=e.slice(2);var h=G(n);if(R(n)&&(n=n.slice(0,-7),l.capture=!0),!h&&p){if(f!=null)continue;s.removeEventListener(n,o[_],l),o[_]=null}if(f!=null)if(h)s[`__${n}`]=f,V([n]);else{let w=function(P){o[e].call(this,P)};o[_]=S(n,s,w,l)}else h&&(s[`__${n}`]=void 0)}else if(e==="style"&&f!=null)s.style.cssText=f+"";else if(e==="autofocus")D(s,!!f);else if(e==="__value"||e==="value"&&f!=null)s.value=s[e]=s.__value=f;else if(e==="selected"&&b)H(s,f);else{var u=e;a||(u=B(u));var N=u==="defaultValue"||u==="defaultChecked";if(f==null&&!c&&!N)if(j[e]=null,u==="value"||u==="checked"){let l=s;if(u==="value"){let _=l.defaultValue;l.removeAttribute(u),l.defaultValue=_}else{let _=l.defaultChecked;l.removeAttribute(u),l.defaultChecked=_}}else s.removeAttribute(e);else N||O.includes(u)&&(c||typeof f!="string")?s[u]=f:typeof f!="function"&&(v&&(u==="src"||u==="href"||u==="srcset")||y(s,u,f))}e==="style"&&"__styles"in s&&(s.__styles={})}}}return o}var L=new Map;function E(s){var r=L.get(s.nodeName);if(r)return r;L.set(s.nodeName,r=[]);for(var t,i=s,a=Element.prototype;a!==i;){t=K(i);for(var c in t)t[c].set&&r.push(c);i=C(i)}return r}function ts(s){if(!v&&s.loading==="lazy"){var r=s.src;s[g]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[g]!=="eager"&&(s.loading="lazy"),s.src=r})}}function is(s,r,t){var i=s.__className,a=Q(r);v&&s.className===a?s.__className=a:(i!==a||v&&s.className!==a)&&(r==null?s.removeAttribute("class"):s.className=a,s.__className=a)}function Q(s,r){return(s??"")+""}function as(s,r,t){if(t){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}function es(s,r){var c;var t=(c=s.$$events)==null?void 0:c[r.type],i=M(t)?t.slice():t==null?[]:[t];for(var a of i)a.call(this,r)}export{y as a,rs as b,es as c,Z as d,ss as e,m as f,H as g,ts as h,is as i,Y as j,x as r,X as s,as as t};
