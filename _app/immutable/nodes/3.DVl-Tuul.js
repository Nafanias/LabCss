import{j as re,a as i,t as Y,l as N,m as ve,k as J}from"../chunks/BWBl0_Ne.js";import"../chunks/BUidJAUI.js";import{B as fe,f as W,E as pe,I as m,s as x,J as y,G as A,$ as G,T as L,a1 as I,e as $,g as R,a0 as Re,aB as E,Z as ke}from"../chunks/B-NyaUN4.js";import{s as Be,a as oe,t,b,c as Se,B as Ve}from"../chunks/B2d3oR6e.js";import{l as H,p as d,i as F,b as Te,c as je,s as Pe}from"../chunks/iM0IuG91.js";import{a as ee,s as me}from"../chunks/CEihCf3D.js";import{i as he}from"../chunks/BWqUMWCX.js";import{s as ie}from"../chunks/DIeNxj8h.js";import{c as $e,o as Ce}from"../chunks/Sq5_thd6.js";var De=Y("<div><!></div>"),Ie=Y("<a><!> <!></a>"),Fe=Y("<div><!></div>"),Ye=Y("<a><!> <!></a>");function Xe(z,e){const u=Be(e),P=H(e,["children","$$slots","$$events","$$legacy"]),o=H(P,["size","href","inline","icon","disabled","visited","ref"]);fe(e,!1);let h=d(e,"size",8,void 0),O=d(e,"href",8,void 0),n=d(e,"inline",8,!1),_=d(e,"icon",8,void 0),T=d(e,"disabled",8,!1),p=d(e,"visited",8,!1),c=d(e,"ref",12,null);he();var r=re(),S=W(r);{var C=U=>{var l=Ie();let V;var K=m(l);oe(K,e,"default",{},null);var te=x(K,2);{var ae=v=>{var s=De();t(s,"bx--link__icon",!0);var g=m(s);oe(g,e,"icon",{},a=>{var D=re(),de=W(D);je(de,_,(ce,ue)=>{ue(ce,{})}),i(a,D)}),y(s),i(v,s)};F(te,v=>{!n()&&(u.icon||_())&&v(ae)})}y(l),Te(l,v=>c(v),()=>c()),A(()=>{V=ee(l,V,{role:"link","aria-disabled":"true",...o}),t(l,"bx--link",!0),t(l,"bx--link--disabled",T()),t(l,"bx--link--inline",n()),t(l,"bx--link--visited",p())}),N("click",l,function(v){b.call(this,e,v)}),N("mouseover",l,function(v){b.call(this,e,v)}),N("mouseenter",l,function(v){b.call(this,e,v)}),N("mouseleave",l,function(v){b.call(this,e,v)}),i(U,l)},M=U=>{var l=Ye();let V;var K=m(l);oe(K,e,"default",{},null);var te=x(K,2);{var ae=v=>{var s=Fe();t(s,"bx--link__icon",!0);var g=m(s);oe(g,e,"icon",{},a=>{var D=re(),de=W(D);je(de,_,(ce,ue)=>{ue(ce,{})}),i(a,D)}),y(s),i(v,s)};F(te,v=>{!n()&&(u.icon||_())&&v(ae)})}y(l),Te(l,v=>c(v),()=>c()),A(()=>{V=ee(l,V,{rel:o.target==="_blank"?"noopener noreferrer":void 0,href:O(),...o}),t(l,"bx--link",!0),t(l,"bx--link--disabled",T()),t(l,"bx--link--inline",n()),t(l,"bx--link--visited",p()),t(l,"bx--link--sm",h()==="sm"),t(l,"bx--link--lg",h()==="lg")}),N("click",l,function(v){b.call(this,e,v)}),N("mouseover",l,function(v){b.call(this,e,v)}),N("mouseenter",l,function(v){b.call(this,e,v)}),N("mouseleave",l,function(v){b.call(this,e,v)}),i(U,l)};F(S,U=>{T()?U(C):U(M,!1)})}i(z,r),pe()}var Ze=ve("<title> </title>"),Ge=ve('<svg><!><path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"></path></svg>');function Ke(z,e){const u=H(e,["children","$$slots","$$events","$$legacy"]),P=H(u,["size","title"]);fe(e,!1);const o=I(),h=I();let O=d(e,"size",8,16),n=d(e,"title",8,void 0);G(()=>($(u),$(n())),()=>{L(o,u["aria-label"]||u["aria-labelledby"]||n())}),G(()=>(R(o),$(u)),()=>{L(h,{"aria-hidden":R(o)?void 0:!0,role:R(o)?"img":void 0,focusable:Number(u.tabindex)===0?!0:void 0})}),Re(),he();var _=Ge();let T;var p=m(_);{var c=r=>{var S=Ze(),C=m(S,!0);y(S),A(()=>ie(C,n())),i(r,S)};F(p,r=>{n()&&r(c)})}E(2),y(_),A(()=>T=ee(_,T,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:O(),height:O(),...R(h),...P},void 0,!0)),i(z,_),pe()}var Qe=Y('<button><!> <span aria-hidden="true"> </span></button>');function qe(z,e){const u=H(e,["children","$$slots","$$events","$$legacy"]),P=H(u,["feedback","feedbackTimeout","iconDescription","text","copy"]);fe(e,!1);let o=d(e,"feedback",8,"Copied!"),h=d(e,"feedbackTimeout",8,2e3),O=d(e,"iconDescription",8,"Copy to clipboard"),n=d(e,"text",8),_=d(e,"copy",8,async l=>{try{await navigator.clipboard.writeText(l)}catch(V){console.log(V)}});const T=$e();let p=I(void 0),c=I(void 0);Ce(()=>()=>clearTimeout(R(c))),he();var r=Qe();let S;var C=m(r);Ke(C,{class:"bx--snippet__icon"});var M=x(C,2);t(M,"bx--assistive-text",!0),t(M,"bx--copy-btn__feedback",!0);var U=m(M,!0);y(M),y(r),A(()=>{S=ee(r,S,{type:"button","aria-live":"polite","aria-label":O(),title:O(),...P}),t(r,"bx--copy-btn",!0),t(r,"bx--copy",!0),t(r,"bx--copy-btn--animating",R(p)),t(r,"bx--copy-btn--fade-in",R(p)==="fade-in"),t(r,"bx--copy-btn--fade-out",R(p)==="fade-out"),ie(U,o())}),N("click",r,function(l){b.call(this,e,l)}),N("click",r,()=>{n()!==void 0&&(_()(n()),T("copy")),R(p)!=="fade-in"&&(L(p,"fade-in"),L(c,setTimeout(()=>{L(p,"fade-out")},h())))}),N("animationend",r,function(l){b.call(this,e,l)}),N("animationend",r,({animationName:l})=>{l==="hide-feedback"&&L(p,void 0)}),i(z,r),pe()}var We=ve("<title> </title>"),et=ve('<svg><!><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>');function tt(z,e){const u=H(e,["children","$$slots","$$events","$$legacy"]),P=H(u,["size","title"]);fe(e,!1);const o=I(),h=I();let O=d(e,"size",8,16),n=d(e,"title",8,void 0);G(()=>($(u),$(n())),()=>{L(o,u["aria-label"]||u["aria-labelledby"]||n())}),G(()=>(R(o),$(u)),()=>{L(h,{"aria-hidden":R(o)?void 0:!0,role:R(o)?"img":void 0,focusable:Number(u.tabindex)===0?!0:void 0})}),Re(),he();var _=et();let T;var p=m(_);{var c=r=>{var S=We(),C=m(S,!0);y(S),A(()=>ie(C,n())),i(r,S)};F(p,r=>{n()&&r(c)})}E(),y(_),A(()=>T=ee(_,T,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:O(),height:O(),...R(h),...P},void 0,!0)),i(z,_),pe()}var at=Y("<span></span>"),nt=Y("<span></span> <span></span> <span></span>",1),it=Y("<div><div><!></div></div>");function st(z,e){const u=H(e,["children","$$slots","$$events","$$legacy"]),P=H(u,["type"]);let o=d(e,"type",8,"single");var h=it();let O;var n=m(h);t(n,"bx--snippet-container",!0);var _=m(n);{var T=c=>{var r=at();i(c,r)},p=c=>{var r=re(),S=W(r);{var C=M=>{var U=nt();E(4),i(M,U)};F(S,M=>{o()==="multi"&&M(C)},!0)}i(c,r)};F(_,c=>{o()==="single"?c(T):c(p,!1)})}y(n),y(h),A(()=>{O=ee(h,O,{...P}),t(h,"bx--skeleton",!0),t(h,"bx--snippet",!0),t(h,"bx--snippet--single",o()==="single"),t(h,"bx--snippet--multi",o()==="multi")}),N("click",h,function(c){b.call(this,e,c)}),N("mouseover",h,function(c){b.call(this,e,c)}),N("mouseenter",h,function(c){b.call(this,e,c)}),N("mouseleave",h,function(c){b.call(this,e,c)}),i(z,h)}var lt=Y("<span><code><!></code></span>"),ot=Y('<button><code><!></code> <span aria-hidden="true"> </span></button>'),rt=Y("<span> </span> <!>",1),dt=Y("<div><div><pre><code><!></code></pre></div> <!> <!></div>");function B(z,e){const u=H(e,["children","$$slots","$$events","$$legacy"]),P=H(u,["type","code","copy","expanded","hideCopyButton","disabled","wrapText","light","skeleton","copyButtonDescription","copyLabel","feedback","feedbackTimeout","showLessText","showMoreText","showMoreLess","id","ref"]);fe(e,!1);const o=I(),h=I(),O=I();let n=d(e,"type",8,"single"),_=d(e,"code",8,void 0),T=d(e,"copy",8,async Q=>{try{await navigator.clipboard.writeText(Q)}catch(X){console.log(X)}}),p=d(e,"expanded",12,!1),c=d(e,"hideCopyButton",8,!1),r=d(e,"disabled",8,!1),S=d(e,"wrapText",8,!1),C=d(e,"light",8,!1),M=d(e,"skeleton",8,!1),U=d(e,"copyButtonDescription",8,void 0),l=d(e,"copyLabel",8,void 0),V=d(e,"feedback",8,"Copied!"),K=d(e,"feedbackTimeout",8,2e3),te=d(e,"showLessText",8,"Show less"),ae=d(e,"showMoreText",8,"Show more"),v=d(e,"showMoreLess",12,!0),s=d(e,"id",24,()=>"ccs-"+Math.random().toString(36)),g=d(e,"ref",12,null);const a=$e();let D=I(void 0),de=I(void 0);function ce(){const{height:Q}=g().getBoundingClientRect();Q>0&&v(g().getBoundingClientRect().height>255)}Ce(()=>()=>clearTimeout(R(de))),G(()=>($(p()),$(te()),$(ae())),()=>{L(o,p()?te():ae())}),G(()=>$(p()),()=>{L(h,p()?16*15:48)}),G(()=>$(p()),()=>{L(O,p()?"none":16*15+"px")}),G(()=>$(n()),()=>{n()!=="multi"&&v(!1)}),G(()=>($(n()),$(g()),$(v()),$(_()),ke),()=>{n()==="multi"&&g()&&v()&&(_()===void 0&&ce(),_()&&ke().then(ce))}),G(()=>($(n()),$(p())),()=>{n()==="multi"&&a(p()?"expand":"collapse")}),Re(),he();var ue=re(),we=W(ue);{var Je=Q=>{st(Q,Pe({get type(){return n()}},()=>P,{$$events:{click(X){b.call(this,e,X)},mouseover(X){b.call(this,e,X)},mouseenter(X){b.call(this,e,X)},mouseleave(X){b.call(this,e,X)}}}))},ze=Q=>{var X=re(),Ae=W(X);{var Le=_e=>{var w=re(),ye=W(w);{var Z=ne=>{var f=lt();let se;var q=m(f),xe=m(q);oe(xe,e,"default",{},le=>{var k=J();A(()=>ie(k,_())),i(le,k)}),y(q),y(f),A(()=>{se=ee(f,se,{...P}),t(f,"bx--snippet",!0),t(f,"bx--snippet--expand",p()),t(f,"bx--snippet--light",C()),t(f,"bx--snippet--no-copy",c()),t(f,"bx--snippet--wraptext",S()),t(f,"bx--snippet--single",n()==="single"),t(f,"bx--snippet--inline",n()==="inline"),t(f,"bx--snippet--multi",n()==="multi"),me(q,"id",s())}),i(ne,f)},be=ne=>{var f=ot();let se;var q=m(f),xe=m(q);oe(xe,e,"default",{},j=>{var Oe=J();A(()=>ie(Oe,_())),i(j,Oe)}),y(q);var le=x(q,2);t(le,"bx--assistive-text",!0),t(le,"bx--copy-btn__feedback",!0);var k=m(le,!0);y(le),y(f),A(()=>{se=ee(f,se,{type:"button","aria-live":"polite","aria-label":l(),...P}),t(f,"bx--copy",!0),t(f,"bx--btn--copy",!0),t(f,"bx--copy-btn--animating",R(D)),t(f,"bx--copy-btn--fade-in",R(D)==="fade-in"),t(f,"bx--copy-btn--fade-out",R(D)==="fade-out"),t(f,"bx--snippet",!0),t(f,"bx--snippet--inline",n()==="inline"),t(f,"bx--snippet--expand",p()),t(f,"bx--snippet--light",C()),t(f,"bx--snippet--wraptext",S()),me(q,"id",s()),ie(k,V())}),N("click",f,function(j){b.call(this,e,j)}),N("click",f,()=>{T()(_()),a("copy"),R(D)!=="fade-in"&&(L(D,"fade-in"),L(de,setTimeout(()=>{L(D,"fade-out")},K())))}),N("animationend",f,({animationName:j})=>{j==="hide-feedback"&&L(D,void 0)}),N("mouseover",f,function(j){b.call(this,e,j)}),N("mouseenter",f,function(j){b.call(this,e,j)}),N("mouseleave",f,function(j){b.call(this,e,j)}),i(ne,f)};F(ye,ne=>{c()?ne(Z):ne(be,!1)})}i(_e,w)},He=_e=>{var w=dt();let ye;var Z=m(w),be=m(Z),ne=m(be),f=m(ne);oe(f,e,"default",{},k=>{var j=J();A(()=>ie(j,_())),i(k,j)}),y(ne),y(be),Te(be,k=>g(k),()=>g()),y(Z);var se=x(Z,2);{var q=k=>{qe(k,{get text(){return _()},get copy(){return T()},get disabled(){return r()},get feedback(){return V()},get feedbackTimeout(){return K()},get iconDescription(){return U()},$$events:{click(j){b.call(this,e,j)},copy(j){b.call(this,e,j)},animationend(j){b.call(this,e,j)}}})};F(se,k=>{c()||k(q)})}var xe=x(se,2);{var le=k=>{Ve(k,{kind:"ghost",size:"small",class:"bx--snippet-btn--expand",get disabled(){return r()},$$events:{click:()=>{p(!p())}},children:(j,Oe)=>{var Ee=rt(),ge=W(Ee);t(ge,"bx--snippet-btn--text",!0);var Me=m(ge,!0);y(ge);var Ue=x(ge,2);tt(Ue,{class:"bx--icon-chevron--down bx--snippet__icon",get"aria-label"(){return R(o)}}),A(()=>ie(Me,R(o))),i(j,Ee)},$$slots:{default:!0}})};F(xe,k=>{v()&&k(le)})}y(w),A(()=>{ye=ee(w,ye,{...P}),t(w,"bx--snippet",!0),t(w,"bx--snippet--expand",p()),t(w,"bx--snippet--light",C()),t(w,"bx--snippet--no-copy",c()),t(w,"bx--snippet--wraptext",S()),t(w,"bx--snippet--single",n()==="single"),t(w,"bx--snippet--inline",n()==="inline"),t(w,"bx--snippet--multi",n()==="multi"),t(w,"bx--snippet--disabled",n()!=="inline"&&r()),me(Z,"role",n()==="single"?"textbox":void 0),me(Z,"tabindex",n()==="single"&&!r()?"0":void 0),me(Z,"aria-label",P["aria-label"]||l()||"code-snippet"),t(Z,"bx--snippet-container",!0),Se(Z,"width","100%"),Se(Z,"min-height",`${R(h)??""}px`),Se(Z,"max-height",R(O))}),N("mouseover",w,function(k){b.call(this,e,k)}),N("mouseenter",w,function(k){b.call(this,e,k)}),N("mouseleave",w,function(k){b.call(this,e,k)}),i(_e,w)};F(Ae,_e=>{n()==="inline"?_e(Le):_e(He,!1)},!0)}i(Q,X)};F(we,Q=>{M()?Q(Je):Q(ze,!1)})}i(z,ue),pe()}var ct=ve("<title> </title>"),ut=ve('<svg><!><path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"></path><path d="M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"></path></svg>');function _t(z,e){const u=H(e,["children","$$slots","$$events","$$legacy"]),P=H(u,["size","title"]);fe(e,!1);const o=I(),h=I();let O=d(e,"size",8,16),n=d(e,"title",8,void 0);G(()=>($(u),$(n())),()=>{L(o,u["aria-label"]||u["aria-labelledby"]||n())}),G(()=>(R(o),$(u)),()=>{L(h,{"aria-hidden":R(o)?void 0:!0,role:R(o)?"img":void 0,focusable:Number(u.tabindex)===0?!0:void 0})}),Re(),he();var _=ut();let T;var p=m(_);{var c=r=>{var S=ct(),C=m(S,!0);y(S),A(()=>ie(C,n())),i(r,S)};F(p,r=>{n()&&r(c)})}E(2),y(_),A(()=>T=ee(_,T,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",preserveAspectRatio:"xMidYMid meet",width:O(),height:O(),...R(h),...P},void 0,!0)),i(z,_),pe()}function Ne(z,e){const u=H(e,["children","$$slots","$$events","$$legacy"]),P=H(u,[]);Xe(z,Pe(()=>P,{target:"_blank",icon:_t,$$events:{click(o){b.call(this,e,o)},mouseover(o){b.call(this,e,o)},mouseenter(o){b.call(this,e,o)},mouseleave(o){b.call(this,e,o)}},children:(o,h)=>{var O=re(),n=W(O);oe(n,e,"default",{},null),i(o,O)},$$slots:{default:!0}}))}var vt=Y('<h1 class="svelte-c0j5xz">Работа с JSON в PHP</h1> <p class="svelte-c0j5xz">В PHP поддержка JSON появилась с версии 5.2.0 и работает только с кодировкой UTF-8.</p> <h2 id="encoding" class="svelte-c0j5xz">1. Кодирование</h2> <p class="svelte-c0j5xz"><!> – кодирует массив или объект в JSON.</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Как видно кириллица кодируется, исправляется это добавлением опции <span style="color: var(--cds-support-03)">JSON_UNESCAPED_UNICODE.</span></p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Далее такую строку можно сохранить в файл, или отдать в браузер, например при AJAX запросах.</p> <!> <h2 id="decoding" class="svelte-c0j5xz">2. Декодирование</h2> <p class="svelte-c0j5xz">Функция <!> преобразует строку в объект:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Если добавить вторым аргументом true, то произойдёт преобразование в массив:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <h2 id="errors" class="svelte-c0j5xz">3. Получение ошибок и их исправление</h2> <p class="svelte-c0j5xz"><span style="color: var(--cds-support-03)">json_decode()</span> возвращает NULL, если в объекте есть ошибки, посмотреть их можно с помощью функции <span style="color: var(--cds-support-03)">json_last_error():</span></p> <!> <p class="svelte-c0j5xz">Посмотреть значения констант JSON:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Если вы хотите распарсить JS объект из HTML страницы или файла, то скорее всего json_decode вернет ошибку т.к. в коде будут <!> или BOM. Удалить их можно следующим образом:</p> <!> <h2 id="http" class="svelte-c0j5xz">4. HTTP-запросы в формате JSON</h2> <p class="svelte-c0j5xz">Некоторые сервисы требуют чтобы запросы к ним осуществлялись в формате JSON, такой запрос можно сформировать в CURL:</p> <!> <p class="svelte-c0j5xz">А также могут обратится к вашим скриптам в таком формате, чтение JSON запроса.</p> <!>',1);function Ot(z){var e=vt(),u=x(W(e),6),P=m(u);Ne(P,{visited:!0,href:"https://www.php.net/manual/ru/function.json-encode.php",children:(s,g)=>{E();var a=J("json_encode($value, $options)");i(s,a)},$$slots:{default:!0}}),E(),y(u);var o=x(u,2);B(o,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$array = array(
	'1' => 'Значение 1', 
	'2' => 'Значение 2', 
	'3' => 'Значение 3', 
	'4' => 'Значение 4', 
	'5' => 'Значение 5'
);
			 
$json = json_encode($array);
echo $json;`,i(s,a)},$$slots:{default:!0}});var h=x(o,4);B(h,{code:'<CodeSnippet code="{"1":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 1","2":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 2","3":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 3","4":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 4","5":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 5"}" hideCopyButton />',hideCopyButton:!0});var O=x(h,4);B(O,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$json = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json;
`,i(s,a)},$$slots:{default:!0}});var n=x(O,4);B(n,{code:'{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}',hideCopyButton:!0});var _=x(n,4);B(_,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`header('Content-Type: application/json');
echo $json;
exit();
`,i(s,a)},$$slots:{default:!0}});var T=x(_,4),p=x(m(T));Ne(p,{visited:!0,href:"https://www.php.net/manual/ru/function.json-decode.php",children:(s,g)=>{E();var a=J("json_decode($json)");i(s,a)},$$slots:{default:!0}}),E(),y(T);var c=x(T,2);B(c,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json);
print_r($array);
`,i(s,a)},$$slots:{default:!0}});var r=x(c,4);B(r,{type:"multi",hideCopyButton:!0,children:(s,g)=>{E();var a=J();a.nodeValue=`stdClass Object
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,i(s,a)},$$slots:{default:!0}});var S=x(r,4);B(S,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json, true);
print_r($array);
`,i(s,a)},$$slots:{default:!0}});var C=x(S,4);B(C,{type:"multi",hideCopyButton:!0,children:(s,g)=>{E();var a=J();a.nodeValue=`Array
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,i(s,a)},$$slots:{default:!0}});var M=x(C,6);B(M,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$json = '{"1:"Значение 1"}';
$array = json_decode($json, true);
			 
switch (json_last_error()) {
	case JSON_ERROR_NONE:
		echo 'Ошибок нет';
	break;
	case JSON_ERROR_DEPTH:
		echo 'Достигнута максимальная глубина стека';
	break;
	case JSON_ERROR_STATE_MISMATCH:
		echo 'Некорректные разряды или несоответствие режимов';
	break;
	case JSON_ERROR_CTRL_CHAR:
		echo 'Некорректный управляющий символ';
	break;
	case JSON_ERROR_SYNTAX:
		echo 'Синтаксическая ошибка, некорректный JSON';
	break;
	case JSON_ERROR_UTF8:
		echo 'Некорректные символы UTF-8, возможно неверно закодирован';
	break;
	default:
		echo 'Неизвестная ошибка';
	break;
}
`,i(s,a)},$$slots:{default:!0}});var U=x(M,4);B(U,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$constants = get_defined_constants(true);
foreach ($constants['json'] as $name => $value) {
	echo $name . ': ' . $value . '<br>';
}
`,i(s,a)},$$slots:{default:!0}});var l=x(U,4);B(l,{type:"multi",hideCopyButton:!0,children:(s,g)=>{E();var a=J();a.nodeValue=`JSON_HEX_TAG: 1
JSON_HEX_AMP: 2
JSON_HEX_APOS: 4
JSON_HEX_QUOT: 8
JSON_FORCE_OBJECT: 16
JSON_NUMERIC_CHECK: 32
JSON_UNESCAPED_SLASHES: 64
JSON_PRETTY_PRINT: 128
JSON_UNESCAPED_UNICODE: 256
JSON_PARTIAL_OUTPUT_ON_ERROR: 512
JSON_PRESERVE_ZERO_FRACTION: 1024
JSON_UNESCAPED_LINE_TERMINATORS: 2048
JSON_OBJECT_AS_ARRAY: 1
JSON_BIGINT_AS_STRING: 2
JSON_ERROR_NONE: 0
JSON_ERROR_DEPTH: 1
JSON_ERROR_STATE_MISMATCH: 2
JSON_ERROR_CTRL_CHAR: 3
JSON_ERROR_SYNTAX: 4
JSON_ERROR_UTF8: 5
JSON_ERROR_RECURSION: 6
JSON_ERROR_INF_OR_NAN: 7
JSON_ERROR_UNSUPPORTED_TYPE: 8
JSON_ERROR_INVALID_PROPERTY_NAME: 9
JSON_ERROR_UTF16: 10
`,i(s,a)},$$slots:{default:!0}});var V=x(l,2),K=x(m(V));Ne(K,{visited:!0,href:"https://snipp.ru/handbk/table-ascii#link-upravlyayuschie-simvoly",children:(s,g)=>{E();var a=J("управляющие символы");i(s,a)},$$slots:{default:!0}}),E(),y(V);var te=x(V,2);B(te,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$json = '{...}';

// Удаление управляющих символов
for ($i = 0; $i <= 31; ++$i) { 
	$json = str_replace(chr($i), '', $json); 
}
			 
// Удаление символа Delete
$json = str_replace(chr(127), '', $json);
			 
// Удаление BOM
if (0 === strpos(bin2hex($json), 'efbbbf')) {
	$json = substr($json, 3);
}
			 
$res = json_decode($json, true);
print_r($res);
`,i(s,a)},$$slots:{default:!0}});var ae=x(te,6);B(ae,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$data = array(
	'name' => 'snipp.ru'
	'text' => 'Отправка сообщения',
);
			 
$ch = curl_init('https://example.com');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 	
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
$res = curl_exec($ch);
curl_close($ch);
`,i(s,a)},$$slots:{default:!0}});var v=x(ae,4);B(v,{type:"multi",children:(s,g)=>{E();var a=J();a.nodeValue=`$data = file_get_contents('php://input');
$data = json_decode($data, true);
`,i(s,a)},$$slots:{default:!0}}),i(z,e)}export{Ot as component};
