import{o as Ke,w as Qe,t as q,a as y,m as X,k as ce,j as Ne,l as re}from"../chunks/Bn1ovRK6.js";import"../chunks/BphkXv35.js";import{ab as Ze,C as ne,o as je,g as a,Y as J,ad as et,ae as Pe,n as ke,m as me,p as ue,q as tt,af as Ee,A as Ie,ag as at,aC as we,x as Le,D as Oe,aD as nt,a0 as it,a6 as Se,aE as rt,aF as lt,w as st,aG as ot,aH as ut,aI as ct,aJ as dt,k as vt,N as ft,ah as gt,b as _t,B as G,U as A,W as w,X as k,e as x,V as Z,I as M,aB as W,J as $,G as O,E as U,s as T,f as ye}from"../chunks/C-qXi9Pa.js";import{t as S,a as ie,b as $e,B as Ae,s as bt}from"../chunks/D8zRgCfR.js";import{i as K}from"../chunks/DFQv6CKh.js";import{d as pt,l as E,p,i as D,u as He,c as ht,b as Be,e as Re,f as Je}from"../chunks/CQZ0bwsV.js";import{s as xt,g as mt}from"../chunks/GT6Jsl25.js";import{s as L}from"../chunks/AOabMxLw.js";import{a as j,s as _e}from"../chunks/Cly5NGid.js";import{c as De,w as wt}from"../chunks/DKg8PhDR.js";function Ye(s,e){return e}function yt(s,e,t,v){for(var r=[],c=e.length,f=0;f<c;f++)lt(e[f].e,r,!0);var n=c>0&&r.length===0&&t!==null;if(n){var i=t.parentNode;st(i),i.append(t),v.clear(),Q(s,e[0].prev,e[c-1].next)}ot(r,()=>{for(var g=0;g<c;g++){var u=e[g];n||(v.delete(u.k),Q(s,u.prev,u.next)),ut(u.e,!n)}})}function Ve(s,e,t,v,r,c=null){var f=s,n={items:new Map,first:null};ne&&je();var i=null,g=!1,u=J(()=>{var _=t();return ft(_)?_:_==null?[]:Le(_)});Ze(()=>{var _=a(u),o=_.length;if(g&&o===0)return;g=o===0;let l=!1;if(ne){var d=f.data===et;d!==(o===0)&&(f=Pe(),ke(f),me(!1),l=!0)}if(ne){for(var m=null,h,b=0;b<o;b++){if(ue.nodeType===8&&ue.data===tt){f=ue,l=!0,me(!1);break}var N=_[b],I=v(N,b);h=Fe(ue,n,m,null,N,I,b,r,e,t),n.items.set(I,h),m=h}o>0&&ke(Pe())}ne||Mt(_,n,f,r,e,v,t),c!==null&&(o===0?i?Ee(i):i=Ie(()=>c(f)):i!==null&&at(i,()=>{i=null})),l&&me(!0),a(u)}),ne&&(f=ue)}function Mt(s,e,t,v,r,c,f){var n=s.length,i=e.items,g=e.first,u=g,_,o=null,l=[],d=[],m,h,b,N;for(N=0;N<n;N+=1){if(m=s[N],h=c(m,N),b=i.get(h),b===void 0){var I=u?u.e.nodes_start:t;o=Fe(I,e,o,o===null?e.first:o.next,m,h,N,v,r,f),i.set(h,o),l=[],d=[],u=o.next;continue}if($t(b,m,N),b.e.f&we&&Ee(b.e),b!==u){if(_!==void 0&&_.has(b)){if(l.length<d.length){var P=d[0],z;o=P.prev;var Y=l[0],V=l[l.length-1];for(z=0;z<l.length;z+=1)Ce(l[z],P,t);for(z=0;z<d.length;z+=1)_.delete(d[z]);Q(e,Y.prev,V.next),Q(e,o,Y),Q(e,V,P),u=P,o=V,N-=1,l=[],d=[]}else _.delete(b),Ce(b,u,t),Q(e,b.prev,b.next),Q(e,b,o===null?e.first:o.next),Q(e,o,b),o=b;continue}for(l=[],d=[];u!==null&&u.k!==h;)u.e.f&we||(_??(_=new Set)).add(u),d.push(u),u=u.next;if(u===null)continue;b=u}l.push(b),o=b,u=b.next}if(u!==null||_!==void 0){for(var ee=_===void 0?[]:Le(_);u!==null;)u.e.f&we||ee.push(u),u=u.next;var B=ee.length;if(B>0){var ae=null;yt(e,ee,ae,i)}}Oe.first=e.first&&e.first.e,Oe.last=o&&o.e}function $t(s,e,t,v){nt(s.v,e),s.i=t}function Fe(s,e,t,v,r,c,f,n,i,g){var u=(i&ct)!==0,_=(i&dt)===0,o=u?_?it(r):Se(r):r,l=i&rt?Se(f):f,d={i:l,v:o,k:c,a:null,e:null,prev:t,next:v};try{return d.e=Ie(()=>n(s,o,l,g),ne),d.e.prev=t&&t.e,d.e.next=v&&v.e,t===null?e.first=d:(t.next=d,t.e.next=d.e),v!==null&&(v.prev=d,v.e.prev=d.e),d}finally{}}function Ce(s,e,t){for(var v=s.next?s.next.e.nodes_start:t,r=e?e.e.nodes_start:t,c=s.e.nodes_start;c!==v;){var f=vt(c);r.before(c),c=f}}function Q(s,e,t){e===null?s.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Me(s,e,t){if(s.multiple)return Nt(s,e);for(var v of s.options){var r=Xe(v);if(pt(r,e)){v.selected=!0;return}}(!t||e!==void 0)&&(s.selectedIndex=-1)}function zt(s,e){let t=!0;gt(()=>{e&&Me(s,_t(e),t),t=!1;var v=new MutationObserver(()=>{var r=s.__value;Me(s,r)});return v.observe(s,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{v.disconnect()}})}function Nt(s,e){for(var t of s.options)t.selected=~e.indexOf(Xe(t))}function Xe(s){return"__value"in s?s.__value:s.value}function Pt(s,e){Ke(window,["resize"],()=>Qe(()=>e(window[s])))}const kt=!0,Ot="always",ba=Object.freeze(Object.defineProperty({__proto__:null,prerender:kt,trailingSlash:Ot},Symbol.toStringTag,{value:"Module"})),St=()=>{const s=xt;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},At={subscribe(s){return St().page.subscribe(s)}};var Ht=q('<footer class="footer-container svelte-7k0dbs">© 2024 Рога и копыта. Все права защищены.</footer>');function Ct(s){var e=Ht();y(s,e)}var Tt=X("<title> </title>"),Et=X('<svg><!><path d="M12 8L22 16 12 24z"></path></svg>');function It(s,e){const t=E(e,["children","$$slots","$$events","$$legacy"]),v=E(t,["size","title"]);G(e,!1);const r=k(),c=k();let f=p(e,"size",8,16),n=p(e,"title",8,void 0);A(()=>(x(t),x(n())),()=>{w(r,t["aria-label"]||t["aria-labelledby"]||n())}),A(()=>(a(r),x(t)),()=>{w(c,{"aria-hidden":a(r)?void 0:!0,role:a(r)?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})}),Z(),K();var i=Et();let g;var u=M(i);{var _=o=>{var l=Tt(),d=M(l,!0);$(l),O(()=>L(d,n())),y(o,l)};D(u,o=>{n()&&o(_)})}W(),$(i),O(()=>g=j(i,g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:f(),height:f(),...a(c),...v},void 0,!0)),y(s,i),U()}var Lt=X("<title> </title>"),Bt=X('<svg><!><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>');function We(s,e){const t=E(e,["children","$$slots","$$events","$$legacy"]),v=E(t,["size","title"]);G(e,!1);const r=k(),c=k();let f=p(e,"size",8,16),n=p(e,"title",8,void 0);A(()=>(x(t),x(n())),()=>{w(r,t["aria-label"]||t["aria-labelledby"]||n())}),A(()=>(a(r),x(t)),()=>{w(c,{"aria-hidden":a(r)?void 0:!0,role:a(r)?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})}),Z(),K();var i=Bt();let g;var u=M(i);{var _=o=>{var l=Lt(),d=M(l,!0);$(l),O(()=>L(d,n())),y(o,l)};D(u,o=>{n()&&o(_)})}W(),$(i),O(()=>g=j(i,g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:f(),height:f(),...a(c),...v},void 0,!0)),y(s,i),U()}var Rt=X("<title> </title>"),Jt=X('<svg><!><circle cx="8" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="24" cy="16" r="2"></circle></svg>');function Dt(s,e){const t=E(e,["children","$$slots","$$events","$$legacy"]),v=E(t,["size","title"]);G(e,!1);const r=k(),c=k();let f=p(e,"size",8,16),n=p(e,"title",8,void 0);A(()=>(x(t),x(n())),()=>{w(r,t["aria-label"]||t["aria-labelledby"]||n())}),A(()=>(a(r),x(t)),()=>{w(c,{"aria-hidden":a(r)?void 0:!0,role:a(r)?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})}),Z(),K();var i=Jt();let g;var u=M(i);{var _=o=>{var l=Rt(),d=M(l,!0);$(l),O(()=>L(d,n())),y(o,l)};D(u,o=>{n()&&o(_)})}W(3),$(i),O(()=>g=j(i,g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:f(),height:f(),...a(c),...v},void 0,!0)),y(s,i),U()}var Yt=X("<title> </title>"),Vt=X('<svg><!><path d="M20 24L10 16 20 8z"></path></svg>');function Ft(s,e){const t=E(e,["children","$$slots","$$events","$$legacy"]),v=E(t,["size","title"]);G(e,!1);const r=k(),c=k();let f=p(e,"size",8,16),n=p(e,"title",8,void 0);A(()=>(x(t),x(n())),()=>{w(r,t["aria-label"]||t["aria-labelledby"]||n())}),A(()=>(a(r),x(t)),()=>{w(c,{"aria-hidden":a(r)?void 0:!0,role:a(r)?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})}),Z(),K();var i=Vt();let g;var u=M(i);{var _=o=>{var l=Yt(),d=M(l,!0);$(l),O(()=>L(d,n())),y(o,l)};D(u,o=>{n()&&o(_)})}W(),$(i),O(()=>g=j(i,g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:f(),height:f(),...a(c),...v},void 0,!0)),y(s,i),U()}var Xt=q('<li><button type="button"><span><!></span> </button></li>');function ge(s,e){let t=p(e,"page",8,1),v=p(e,"active",8,!1);var r=Xt();S(r,"bx--pagination-nav__list-item",!0);var c=M(r),f=M(c);S(f,"bx--pagination-nav__accessibility-label",!0);var n=M(f);ie(n,e,"default",{},null),$(f);var i=T(f);$(c),$(r),O(()=>{_e(c,"data-page",t()),_e(c,"aria-current",v()?"page":void 0),S(c,"bx--pagination-nav__page",!0),S(c,"bx--pagination-nav__page--active",v()),L(i,` ${t()??""}`)}),ce("click",c,function(g){$e.call(this,e,g)}),y(s,r)}var Wt=q("<option> </option>"),qt=q('<li><div><select aria-label="Select Page number"><option hidden></option><!></select> <div><!></div></div></li>');function Te(s,e){G(e,!1);let t=p(e,"fromIndex",8,0),v=p(e,"count",8,0);const r=De();let c=k("");K();var f=Ne(),n=ye(f);{var i=u=>{var _=qt();S(_,"bx--pagination-nav__list-item",!0);var o=M(_);S(o,"bx--pagination-nav__select",!0);var l=M(o);zt(l,()=>a(c));var d;S(l,"bx--pagination-nav__page",!0),S(l,"bx--pagination-nav__page--select",!0);var m=M(l);m.value=((m.__value="")==null,"");var h=T(m);Ve(h,1,()=>Array.from({length:v()},(I,P)=>P),Ye,(I,P)=>{var z=Wt(),Y={},V=M(z,!0);$(z),O(()=>{Y!==(Y=t()+a(P)+1)&&(z.value=(z.__value=t()+a(P)+1)==null?"":t()+a(P)+1),_e(z,"data-page",t()+a(P)+1),L(V,t()+a(P)+1)}),y(I,z)}),$(l);var b=T(l,2);S(b,"bx--pagination-nav__select-icon-wrapper",!0);var N=M(b);Dt(N,{class:"bx--pagination-nav__select-icon"}),$(b),$(o),$(_),O(()=>{d!==(d=a(c))&&(l.value=(l.__value=a(c))==null?"":a(c),Me(l,a(c)))}),ce("change",l,({target:I})=>{w(c,""),r("select",{index:Number(I.value)})}),y(u,_)},g=u=>{var _=Ne(),o=ye(_);{var l=d=>{const m=J(()=>t()+1);ge(d,{get page(){return a(m)},$$events:{click:()=>{r("select",{index:t()})}},children:(h,b)=>{W();var N=re("Page");y(h,N)},$$slots:{default:!0}})};D(o,d=>{v()===1&&d(l)},!0)}y(u,_)};D(n,u=>{v()>1?u(i):u(g,!1)})}y(s,f),U()}var Gt=q('<nav><ul><li><!></li> <!> <!> <!> <!> <!> <li><!></li></ul> <div aria-live="polite" aria-atomic="true"> </div></nav>');function Ut(s,e){const t=E(e,["children","$$slots","$$events","$$legacy"]),v=E(t,["page","total","shown","loop","forwardText","backwardText","tooltipPosition"]);G(e,!1);const r=k(),c=k(),f=k();let n=p(e,"page",12,1),i=p(e,"total",8,10),g=p(e,"shown",8,10),u=p(e,"loop",8,!1),_=p(e,"forwardText",8,"Next page"),o=p(e,"backwardText",8,"Previous page"),l=p(e,"tooltipPosition",8,"bottom");const d=De(),m=4;let h=k(0),b=k(0);A(()=>x(g()),()=>{w(r,g()>=m?g():m)}),A(()=>(a(r),x(n())),()=>{w(c,a(r)<=m&&n()>1?0:1)}),A(()=>(a(r),x(i())),()=>{a(r)>=i()&&(w(h,0),w(b,0))}),A(()=>(a(r),x(i()),a(h),x(n()),a(b)),()=>{if(a(r)<i()){const C=Math.ceil(a(r)/2)-1;w(h,n()-C),w(b,i()-n()-(a(r)-C)+2),a(h)<=1&&(w(b,a(b)-(a(h)<=0?Math.abs(a(h))+1:0)),w(h,0)),a(b)<=1&&(w(h,a(h)-(a(b)<=0?Math.abs(a(b))+1:0)),w(b,0))}}),A(()=>(x(i()),a(c),a(h),a(b)),()=>{w(f,Array.from({length:i()}).map((C,F)=>F).slice(a(c)+a(h),(a(b)+1)*-1))}),Z(),K();var N=Gt();let I;var P=M(N);S(P,"bx--pagination-nav__list",!0);var z=M(P);S(z,"bx--pagination-nav__list-item",!0);var Y=M(z);const V=J(()=>l()==="inside"?"right":l()==="outside"?"left":l()),ee=J(()=>!u()&&n()===1);Ae(Y,{kind:"ghost",tooltipAlignment:"center",get tooltipPosition(){return a(V)},get iconDescription(){return o()},get disabled(){return a(ee)},icon:Ft,$$events:{click:()=>{n()<=1?u()&&n(i()):He(n,-1),d("click:button--previous",{page:n()}),d("change",{page:n()})}}}),$(z);var B=T(z,2);{var ae=C=>{const F=J(()=>n()===1);ge(C,{page:1,get active(){return a(F)},$$events:{click:()=>{n(1),d("change",{page:n()})}},children:(oe,xe)=>{W();var te=re();O(()=>L(te,n()===1?"Active, Page":"Page")),y(oe,te)},$$slots:{default:!0}})};D(B,C=>{(a(r)>m||a(r)<=m&&n()<=1)&&C(ae)})}var le=T(B,2);Te(le,{get fromIndex(){return a(c)},get count(){return a(h)},$$events:{select:({detail:C})=>{n(C.index),d("change",{page:n()})}}});var de=T(le,2);Ve(de,1,()=>a(f),Ye,(C,F)=>{const oe=J(()=>a(F)+1),xe=J(()=>n()===a(F)+1);ge(C,{get page(){return a(oe)},get active(){return a(xe)},$$events:{click:()=>{n(a(F)+1),d("change",{page:n()})}},children:(te,ra)=>{W();var ze=re();O(()=>L(ze,n()===a(F)?"Active, Page":"Page")),y(te,ze)},$$slots:{default:!0}})});var ve=T(de,2);const be=J(()=>i()-a(b)-1);Te(ve,{get fromIndex(){return a(be)},get count(){return a(b)},$$events:{select:({detail:C})=>{n(C.index),d("change",{page:n()})}}});var H=T(ve,2);{var R=C=>{const F=J(()=>n()===i());ge(C,{get page(){return i()},get active(){return a(F)},$$events:{click:()=>{n(i()),d("change",{page:n()})}},children:(oe,xe)=>{W();var te=re();O(()=>L(te,n()===i()?"Active, Page":"Page")),y(oe,te)},$$slots:{default:!0}})};D(H,C=>{i()>1&&C(R)})}var se=T(H,2);S(se,"bx--pagination-nav__list-item",!0);var pe=M(se);const fe=J(()=>l()==="inside"?"left":l()==="outside"?"right":l()),Ge=J(()=>!u()&&n()===i());Ae(pe,{kind:"ghost",tooltipAlignment:"center",get tooltipPosition(){return a(fe)},get iconDescription(){return _()},get disabled(){return a(Ge)},icon:It,$$events:{click:()=>{n()>=i()?u()&&n(1):He(n),d("click:button--next",{page:n()}),d("change",{page:n()})}}}),$(se),$(P);var he=T(P,2);S(he,"bx--pagination-nav__accessibility-label",!0);var Ue=M(he);$(he),$(N),O(()=>{I=j(N,I,{"aria-label":"pagination",...v}),S(N,"bx--pagination-nav",!0),L(Ue,`Page
    ${n()+1}
    of
    ${i()??""}`)}),y(s,N),U()}var Kt=X("<title> </title>"),Qt=X('<svg><!><path d="M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"></path></svg>');function qe(s,e){const t=E(e,["children","$$slots","$$events","$$legacy"]),v=E(t,["size","title"]);G(e,!1);const r=k(),c=k();let f=p(e,"size",8,16),n=p(e,"title",8,void 0);A(()=>(x(t),x(n())),()=>{w(r,t["aria-label"]||t["aria-labelledby"]||n())}),A(()=>(a(r),x(t)),()=>{w(c,{"aria-hidden":a(r)?void 0:!0,role:a(r)?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})}),Z(),K();var i=Qt();let g;var u=M(i);{var _=o=>{var l=Kt(),d=M(l,!0);$(l),O(()=>L(d,n())),y(o,l)};D(u,o=>{n()&&o(_)})}W(),$(i),O(()=>g=j(i,g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:f(),height:f(),...a(c),...v},void 0,!0)),y(s,i),U()}const Zt=wt(!1);var jt=q("<button><!></button>");function ea(s,e){const t=E(e,["children","$$slots","$$events","$$legacy"]),v=E(t,["ariaLabel","isOpen","iconMenu","iconClose","ref"]);let r=p(e,"ariaLabel",8,void 0),c=p(e,"isOpen",12,!1),f=p(e,"iconMenu",8,qe),n=p(e,"iconClose",8,We),i=p(e,"ref",12,null);var g=jt();let u;var _=M(g);ht(_,()=>c()?n():f(),(o,l)=>{l(o,{size:20})}),$(g),Be(g,o=>i(o),()=>i()),O(()=>{u=j(g,u,{type:"button",title:r(),"aria-label":r(),...v}),S(g,"bx--header__action",!0),S(g,"bx--header__menu-trigger",!0),S(g,"bx--header__menu-toggle",!0)}),ce("click",g,function(o){$e.call(this,e,o)}),ce("click",g,()=>c(!c())),y(s,g)}var ta=q("<span><!></span>"),aa=q("<header><!> <!> <a><!> <!></a> <!></header>");function na(s,e){const t=bt(e),v=E(e,["children","$$slots","$$events","$$legacy"]),r=E(v,["expandedByDefault","isSideNavOpen","uiShellAriaLabel","href","company","platformName","persistentHamburgerMenu","expansionBreakpoint","ref","iconMenu","iconClose"]);G(e,!1);const[c,f]=Re(),n=()=>Je(Zt,"$shouldRenderHamburgerMenu",c),i=k();let g=p(e,"expandedByDefault",8,!0),u=p(e,"isSideNavOpen",12,!1),_=p(e,"uiShellAriaLabel",8,void 0),o=p(e,"href",8,void 0),l=p(e,"company",8,void 0),d=p(e,"platformName",8,""),m=p(e,"persistentHamburgerMenu",8,!1),h=p(e,"expansionBreakpoint",8,1056),b=p(e,"ref",12,null),N=p(e,"iconMenu",8,qe),I=p(e,"iconClose",8,We),P=k(void 0);A(()=>(x(g()),a(P),x(h()),x(m())),()=>{u(g()&&a(P)>=h()&&!m())}),A(()=>(x(l()),x(_()),x(v),x(d())),()=>{w(i,l()?`${l()} `:""+(_()||v["aria-label"]||d()))}),Z(),K();var z=aa(),Y=M(z);ie(Y,e,"skip-to-content",{},null);var V=T(Y,2);{var ee=H=>{ea(H,{get iconClose(){return I()},get iconMenu(){return N()},get isOpen(){return u()},set isOpen(R){u(R)},$$legacy:!0})};D(V,H=>{(n()&&a(P)<h()||m())&&H(ee)})}var B=T(V,2);let ae;var le=M(B);{var de=H=>{var R=ta();S(R,"bx--header__name--prefix",!0);var se=M(R);ie(se,e,"company",{},pe=>{var fe=re();O(()=>L(fe,`${l()??""} `)),y(pe,fe)}),$(R),y(H,R)};D(le,H=>{(l()||t.company)&&H(de)})}var ve=T(le,2);ie(ve,e,"platform",{},H=>{var R=re();O(()=>L(R,d())),y(H,R)}),$(B),Be(B,H=>b(H),()=>b());var be=T(B,2);ie(be,e,"default",{},null),$(z),O(()=>{_e(z,"aria-label",a(i)),S(z,"bx--header",!0),ae=j(B,ae,{href:o(),...r}),S(B,"bx--header__name",!0)}),Pt("innerWidth",H=>w(P,H)),ce("click",B,function(H){$e.call(this,e,H)}),y(s,z),U(),f()}var ia=q("<!> <!> <!> <!>",1);function pa(s,e){G(e,!1);const[t,v]=Re(),r=()=>Je(At,"$page",t),c=k(),f=k();let n=k(!1);const i=7,g={1:[{id:"JSON",title:"Как устроен JSON"},{id:"JSON-object",title:"JSON-объект"},{id:"JSON-array",title:"JSON-массив"}],2:[{id:"vsXML",title:"JSON vs XML"}],3:[{id:"data",title:"Данные написаны в виде пар «ключ:значение»"},{id:"Separation",title:"Данные разделены запятыми"},{id:"object",title:"Объект находится внутри фигурных скобок {}"},{id:"array",title:"Массив — внутри квадратных []"},{id:"output",title:"Вывод"}],4:[{id:"data",title:"Данные написаны в виде пар «ключ:значение»"},{id:"Formatting",title:"Форматирование JSON"},{id:"sort",title:"Сортировка JSON"}],6:[{id:"encoding",title:"Кодирование"},{id:"decoding",title:"Декодирование"},{id:"errors",title:"Получение ошибок и их исправление"},{id:"http",title:"HTTP-запросы в формате JSON"}]};A(()=>r(),()=>{w(c,{"/":1,"/vsXML":2,"/FormedJSON":3,"/python":4,"/JavaScript":5,"/php":6,"/Сsharp":7}[r().url.pathname]||1)}),A(()=>a(c),()=>{w(f,g[a(c)]||[])}),Z(),K();var u=ia(),_=ye(u);na(_,{persistentHamburgerMenu:!0,company:"Рога и копыта",get isSideNavOpen(){return a(n)},set isSideNavOpen(m){w(n,m)},$$legacy:!0});var o=T(_,2);ie(o,e,"default",{},null);var l=T(o,2);Ut(l,{get page(){return a(c)},total:i,$$events:{change:({detail:m})=>mt(getPagePath(m.page))}});var d=T(l,2);Ct(d),y(s,u),U(),v()}export{pa as component,ba as universal};
