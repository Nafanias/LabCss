import{n as Te,a as b,s as G,t as E,e as _,c as se,b as ue}from"./wGYI1cqU.js";import{i as oe}from"./DcXOWZAV.js";import{p as ce,a2 as Y,b as w,m as Z,$ as y,g as v,a3 as Ce,c as h,n as Me,r as m,S as B,a as re,aI as Be,o as be,s as ee,f as te,a8 as we}from"./Bwj3twEK.js";import{l as q,p as s,i as j,s as Re,b as Ze}from"./BLGG1eHZ.js";import{a as Q,t,b as u,s as le,c as O,e as fe,B as Ee,C as Ie}from"./vaU5w7Pq.js";var Ne=Te("<title> </title>"),Ye=Te('<svg><!><path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"></path></svg>');function je(P,e){const k=q(e,["children","$$slots","$$events","$$legacy"]),g=q(k,["size","title"]);ce(e,!1);const p=Z(),d=Z();let L=s(e,"size",8,16),a=s(e,"title",8,void 0);Y(()=>(y(k),y(a())),()=>{w(p,k["aria-label"]||k["aria-labelledby"]||a())}),Y(()=>(v(p),y(k)),()=>{w(d,{"aria-hidden":v(p)?void 0:!0,role:v(p)?"img":void 0,focusable:Number(k.tabindex)===0?!0:void 0})}),Ce(),oe();var x=Ye();let A;var l=h(x);{var o=n=>{var T=Ne(),z=h(T,!0);m(T),B(()=>G(z,a())),b(n,T)};j(l,n=>{a()&&n(o)})}Me(2),m(x),B(()=>A=Q(x,A,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:L(),height:L(),...v(d),...g},void 0,!0)),b(P,x),re()}var qe=E('<button><!> <span aria-hidden="true"> </span></button>');function Fe(P,e){const k=q(e,["children","$$slots","$$events","$$legacy"]),g=q(k,["feedback","feedbackTimeout","iconDescription","text","copy"]);ce(e,!1);let p=s(e,"feedback",8,"Copied!"),d=s(e,"feedbackTimeout",8,2e3),L=s(e,"iconDescription",8,"Copy to clipboard"),a=s(e,"text",8),x=s(e,"copy",8,async H=>{try{await navigator.clipboard.writeText(H)}catch(ie){console.log(ie)}});const A=Be();let l=Z(void 0),o=Z(void 0);be(()=>()=>clearTimeout(v(o))),oe();var n=qe();let T;var z=h(n);je(z,{class:"bx--snippet__icon"});var D=ee(z,2);t(D,"bx--assistive-text",!0),t(D,"bx--copy-btn__feedback",!0);var U=h(D,!0);m(D),m(n),B(()=>{T=Q(n,T,{type:"button","aria-live":"polite","aria-label":L(),title:L(),...g}),t(n,"bx--copy-btn",!0),t(n,"bx--copy",!0),t(n,"bx--copy-btn--animating",v(l)),t(n,"bx--copy-btn--fade-in",v(l)==="fade-in"),t(n,"bx--copy-btn--fade-out",v(l)==="fade-out"),G(U,p())}),_("click",n,function(H){u.call(this,e,H)}),_("click",n,()=>{a()!==void 0&&(x()(a()),A("copy")),v(l)!=="fade-in"&&(w(l,"fade-in"),w(o,setTimeout(()=>{w(l,"fade-out")},d())))}),_("animationend",n,function(H){u.call(this,e,H)}),_("animationend",n,({animationName:H})=>{H==="hide-feedback"&&w(l,void 0)}),b(P,n),re()}var Ge=E("<span></span>"),Je=E("<span></span> <span></span> <span></span>",1),Ke=E("<div><div><!></div></div>");function Oe(P,e){const k=q(e,["children","$$slots","$$events","$$legacy"]),g=q(k,["type"]);let p=s(e,"type",8,"single");var d=Ke();let L;var a=h(d);t(a,"bx--snippet-container",!0);var x=h(a);{var A=o=>{var n=Ge();b(o,n)},l=o=>{var n=se(),T=te(n);{var z=D=>{var U=Je();Me(4),b(D,U)};j(T,D=>{p()==="multi"&&D(z)},!0)}b(o,n)};j(x,o=>{p()==="single"?o(A):o(l,!1)})}m(a),m(d),B(()=>{L=Q(d,L,{...g}),t(d,"bx--skeleton",!0),t(d,"bx--snippet",!0),t(d,"bx--snippet--single",p()==="single"),t(d,"bx--snippet--multi",p()==="multi")}),_("click",d,function(o){u.call(this,e,o)}),_("mouseover",d,function(o){u.call(this,e,o)}),_("mouseenter",d,function(o){u.call(this,e,o)}),_("mouseleave",d,function(o){u.call(this,e,o)}),b(P,d)}var Qe=E("<span><code><!></code></span>"),Ue=E('<button><code><!></code> <span aria-hidden="true"> </span></button>'),We=E("<span> </span> <!>",1),Xe=E("<div><div><pre><code><!></code></pre></div> <!> <!></div>");function st(P,e){const k=q(e,["children","$$slots","$$events","$$legacy"]),g=q(k,["type","code","copy","expanded","hideCopyButton","disabled","wrapText","light","skeleton","copyButtonDescription","copyLabel","feedback","feedbackTimeout","showLessText","showMoreText","showMoreLess","id","ref"]);ce(e,!1);const p=Z(),d=Z(),L=Z();let a=s(e,"type",8,"single"),x=s(e,"code",8,void 0),A=s(e,"copy",8,async S=>{try{await navigator.clipboard.writeText(S)}catch(C){console.log(C)}}),l=s(e,"expanded",12,!1),o=s(e,"hideCopyButton",8,!1),n=s(e,"disabled",8,!1),T=s(e,"wrapText",8,!1),z=s(e,"light",8,!1),D=s(e,"skeleton",8,!1),U=s(e,"copyButtonDescription",8,void 0),H=s(e,"copyLabel",8,void 0),ie=s(e,"feedback",8,"Copied!"),ve=s(e,"feedbackTimeout",8,2e3),pe=s(e,"showLessText",8,"Show less"),xe=s(e,"showMoreText",8,"Show more"),W=s(e,"showMoreLess",12,!0),he=s(e,"id",24,()=>"ccs-"+Math.random().toString(36)),J=s(e,"ref",12,null);const me=Be();let F=Z(void 0),_e=Z(void 0);function ge(){const{height:S}=J().getBoundingClientRect();S>0&&W(J().getBoundingClientRect().height>255)}be(()=>()=>clearTimeout(v(_e))),Y(()=>(y(l()),y(pe()),y(xe())),()=>{w(p,l()?pe():xe())}),Y(()=>y(l()),()=>{w(d,l()?16*15:48)}),Y(()=>y(l()),()=>{w(L,l()?"none":16*15+"px")}),Y(()=>y(a()),()=>{a()!=="multi"&&W(!1)}),Y(()=>(y(a()),y(J()),y(W()),y(x()),we),()=>{a()==="multi"&&J()&&W()&&(x()===void 0&&ge(),x()&&we().then(ge))}),Y(()=>(y(a()),y(l())),()=>{a()==="multi"&&me(l()?"expand":"collapse")}),Ce(),oe();var ye=se(),Le=te(ye);{var ze=S=>{Oe(S,Re({get type(){return a()}},()=>g,{$$events:{click(C){u.call(this,e,C)},mouseover(C){u.call(this,e,C)},mouseenter(C){u.call(this,e,C)},mouseleave(C){u.call(this,e,C)}}}))},De=S=>{var C=se(),He=te(C);{var Se=K=>{var f=se(),ae=te(f);{var M=R=>{var i=Qe();let I;var V=h(i),$=h(V);le($,e,"default",{},N=>{var c=ue();B(()=>G(c,x())),b(N,c)}),m(V),m(i),B(()=>{I=Q(i,I,{...g}),t(i,"bx--snippet",!0),t(i,"bx--snippet--expand",l()),t(i,"bx--snippet--light",z()),t(i,"bx--snippet--no-copy",o()),t(i,"bx--snippet--wraptext",T()),t(i,"bx--snippet--single",a()==="single"),t(i,"bx--snippet--inline",a()==="inline"),t(i,"bx--snippet--multi",a()==="multi"),O(V,"id",he())}),b(R,i)},X=R=>{var i=Ue();let I;var V=h(i),$=h(V);le($,e,"default",{},r=>{var de=ue();B(()=>G(de,x())),b(r,de)}),m(V);var N=ee(V,2);t(N,"bx--assistive-text",!0),t(N,"bx--copy-btn__feedback",!0);var c=h(N,!0);m(N),m(i),B(()=>{I=Q(i,I,{type:"button","aria-live":"polite","aria-label":H(),...g}),t(i,"bx--copy",!0),t(i,"bx--btn--copy",!0),t(i,"bx--copy-btn--animating",v(F)),t(i,"bx--copy-btn--fade-in",v(F)==="fade-in"),t(i,"bx--copy-btn--fade-out",v(F)==="fade-out"),t(i,"bx--snippet",!0),t(i,"bx--snippet--inline",a()==="inline"),t(i,"bx--snippet--expand",l()),t(i,"bx--snippet--light",z()),t(i,"bx--snippet--wraptext",T()),O(V,"id",he()),G(c,ie())}),_("click",i,function(r){u.call(this,e,r)}),_("click",i,()=>{A()(x()),me("copy"),v(F)!=="fade-in"&&(w(F,"fade-in"),w(_e,setTimeout(()=>{w(F,"fade-out")},ve())))}),_("animationend",i,({animationName:r})=>{r==="hide-feedback"&&w(F,void 0)}),_("mouseover",i,function(r){u.call(this,e,r)}),_("mouseenter",i,function(r){u.call(this,e,r)}),_("mouseleave",i,function(r){u.call(this,e,r)}),b(R,i)};j(ae,R=>{o()?R(M):R(X,!1)})}b(K,f)},Ve=K=>{var f=Xe();let ae;var M=h(f),X=h(M),R=h(X),i=h(R);le(i,e,"default",{},c=>{var r=ue();B(()=>G(r,x())),b(c,r)}),m(R),m(X),Ze(X,c=>J(c),()=>J()),m(M);var I=ee(M,2);{var V=c=>{Fe(c,{get text(){return x()},get copy(){return A()},get disabled(){return n()},get feedback(){return ie()},get feedbackTimeout(){return ve()},get iconDescription(){return U()},$$events:{click(r){u.call(this,e,r)},copy(r){u.call(this,e,r)},animationend(r){u.call(this,e,r)}}})};j(I,c=>{o()||c(V)})}var $=ee(I,2);{var N=c=>{Ee(c,{kind:"ghost",size:"small",class:"bx--snippet-btn--expand",get disabled(){return n()},$$events:{click:()=>{l(!l())}},children:(r,de)=>{var ke=We(),ne=te(ke);t(ne,"bx--snippet-btn--text",!0);var Pe=h(ne,!0);m(ne);var Ae=ee(ne,2);Ie(Ae,{class:"bx--icon-chevron--down bx--snippet__icon",get"aria-label"(){return v(p)}}),B(()=>G(Pe,v(p))),b(r,ke)},$$slots:{default:!0}})};j($,c=>{W()&&c(N)})}m(f),B(()=>{ae=Q(f,ae,{...g}),t(f,"bx--snippet",!0),t(f,"bx--snippet--expand",l()),t(f,"bx--snippet--light",z()),t(f,"bx--snippet--no-copy",o()),t(f,"bx--snippet--wraptext",T()),t(f,"bx--snippet--single",a()==="single"),t(f,"bx--snippet--inline",a()==="inline"),t(f,"bx--snippet--multi",a()==="multi"),t(f,"bx--snippet--disabled",a()!=="inline"&&n()),O(M,"role",a()==="single"?"textbox":void 0),O(M,"tabindex",a()==="single"&&!n()?"0":void 0),O(M,"aria-label",g["aria-label"]||H()||"code-snippet"),t(M,"bx--snippet-container",!0),fe(M,"width","100%"),fe(M,"min-height",`${v(d)??""}px`),fe(M,"max-height",v(L))}),_("mouseover",f,function(c){u.call(this,e,c)}),_("mouseenter",f,function(c){u.call(this,e,c)}),_("mouseleave",f,function(c){u.call(this,e,c)}),b(K,f)};j(He,K=>{a()==="inline"?K(Se):K(Ve,!1)},!0)}b(S,C)};j(Le,S=>{D()?S(ze):S(De,!1)})}b(P,ye),re()}var $e=E('<section class="anchor-section svelte-1uivzw0"><!></section>');function lt(P,e){ce(e,!1);let k=s(e,"id",8);be(()=>{}),oe();var g=$e(),p=h(g);le(p,e,"default",{},null),m(g),B(()=>O(g,"id",k())),b(P,g),re()}export{lt as A,st as C};
