import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{T as t,U as m,J as v,K as i,G as x,g as b,d as w,V as n}from"../chunks/DwB3qp1y.js";import{t as g,a,s as P,c as T,b as p}from"../chunks/DhYkO-ht.js";import{i as F}from"../chunks/DzUmUmhz.js";import"../chunks/Gs66ZXo4.js";import{A as K}from"../chunks/C8x85miN.js";import{D as R}from"../chunks/BD47vfnQ.js";import{O as k}from"../chunks/DkdKJtbA.js";import{I as y}from"../chunks/DnjDcRZx.js";import{O as st}from"../chunks/DKnAL-hi.js";import{C as j}from"../chunks/CGardy9S.js";import{L as _}from"../chunks/DF4CoHH5.js";var rt=g('<pre class="json-block svelte-ap1jh6"> </pre>'),lt=g('<span class="header-text svelte-ap1jh6"> </span>'),ot=g('<h2 class="svelte-ap1jh6">Как устроен JSON</h2>'),pt=g("<!> <!> <!> <!> <!>",1),dt=g('<h2 class="svelte-ap1jh6">JSON-объект</h2>'),vt=g("<!> <!>",1),it=g('<pre class="json-block svelte-ap1jh6"> </pre>'),nt=g('<span class="header-text svelte-ap1jh6"> </span>'),ct=g('<pre class="json-block svelte-ap1jh6"> </pre>'),ht=g('<span class="header-text svelte-ap1jh6"> </span>'),ut=g("<!> <!>",1),_t=g("<!> <!>",1),$t=g("<!> <!>",1),ft=g("<!> <!>",1),gt=g("<!> <!> <!> <!>",1),yt=g("<!> <!> <!> <!> <!>",1),bt=g('<h2 class="svelte-ap1jh6">JSON-массив</h2>'),mt=g("<!> <!> <!> <!> <!>",1),jt=g('<h1 class="svelte-ap1jh6">Что такое JSON</h1> <!> <p class="svelte-ap1jh6">JSON (англ. JavaScript Object Notation) — это формат данных, который в основном используется для хранения и передачи данных, в частности между сервером и веб-приложением. Он широко применяется для представления структурированных данных.</p> <!> <p class="svelte-ap1jh6">В качестве значений в JSON могут быть использованы:</p> <!> <p class="svelte-ap1jh6">Я думаю, с простыми значениями вопросов не возникнет, поэтому разберем массивы и объекты.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <!> <h3>Как устроен</h3> <p class="svelte-ap1jh6">Возьмем пример из <!>.</p> <!> <p class="svelte-ap1jh6">И разберемся, что означает эта запись.</p> <p class="svelte-ap1jh6">Объект заключен в фигурные скобки &lbrace;&rbrace;</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">JSON-объект — это неупорядоченное множество пар «ключ:значение».</p> <p class="svelte-ap1jh6">Ключ — это название параметра, который мы передаем серверу. Он служит маркером для принимающей запрос системы: «смотри, здесь у меня значение такого-то параметра!». А иначе как система поймет, где что? Ей нужна подсказка!</p> <p class="svelte-ap1jh6">Вот, например, «Виктор Иван» — это что? Ищем описание параметра «query» в документации — ага, да это же запрос для подсказок!</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Это как если бы мы вбили строку «Виктор Иван» в GUI (графическом интерфейсе пользователя):</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Когда пользователь начинает вводить данные в формочку, то сразу видит результат — появляется список подсказок. Это значит, что разработчик прописал в коде условие — делать некое действие на каждый ввод символа в это поле. Какое действие? Можно увидеть через f12.</p> <p class="svelte-ap1jh6">Открываем вкладку Network, вбиваем «Виктор Иван» и находим запрос, который при этом уходит на сервер. Ого, да это тот самый пример, что мы разбираем!</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Клиент передает серверу запрос в JSON-формате. Внутри два параметра, две пары «ключ-значение»:</p> <!> <p class="svelte-ap1jh6">Пары «ключ-значение» разделены запятыми:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Строки берем в кавычки, числа нет:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Конечно, внутри может быть не только строка или число. Это может быть и другой объект! Или массив... Или объект в массиве, массив в объекте... Любое количество уровней вложенности =))</p> <p class="svelte-ap1jh6">Объект, массив, число, булево значение (true / false) — если у нас НЕ строка, кавычки не нужны. Но в любом случае это будет значение какого-то ключа:</p> ТАБЛИЦА <p class="svelte-ap1jh6">Переносы строк делать необязательно. Вообще пробелы и переносы строк нужны только человеку для читабельности, система поймет и без них:</p> ТАБЛИЦА <p class="svelte-ap1jh6">Ключ — ВСЕГДА строка, но мы все равно берем его в кавычки. В JavaScript этого можно не делать, в JSON нельзя.</p> <!> <p class="svelte-ap1jh6">По крайней мере, если вы работаете с простыми значениями ключей, а несколько слов записываете в верблюжьемРегистре или в змеином_регистре. Если вы хотите написать в ключе несколько слов через пробел, ключ нужно взять в кавычки.</p> ТАБЛИЦА <p class="svelte-ap1jh6">И все же я рекомендую использовать простые названия ключей, или использовать snake_case.</p> <p class="svelte-ap1jh6">Писать ключи можно в любом порядке. Ведь JSON-объект — это <u>неупорядоченное</u> множество пар «ключ:значение».</p> <!> <p class="svelte-ap1jh6">Очень важно это понимать, и тестировать! Принимающая запрос система должна ориентировать на название ключей в запросе, а не на порядок их следования. Ключевое слово «должна» )) Хотя знаю примеры, когда от перестановки ключей местами всё ломалось, ведь «первым должен идти запрос, а не count!».</p> <h3>Ключ или свойство?</h3> <p class="svelte-ap1jh6">Вот у нас есть JSON-объект:</p> <!> <p class="svelte-ap1jh6">Что такое «query»? Если я хочу к нему обратиться, как мне это сказать? Есть 2 варианта, и оба правильные:</p> <!> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">То есть «query» можно назвать как ключом, так и свойством. А как правильно то?</p> <div style="text-align: center;  margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Правильно и так, и так! Просто есть разные определения объекта:</p> <h3>Объект</h3> <p class="svelte-ap1jh6">В JS объект — это именно объект. У которого есть набор свойств и методов:</p> <!> <p class="svelte-ap1jh6">То есть если мы хотим создать машину, есть два пути:</p> <!> <p class="svelte-ap1jh6">Аналогично с кошечкой, собачкой, другом из записной книжки...</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Объектно-ориентированное программирование (ООП) предлагает мыслить не набором переменных, а объектом. Хотя бы потому, что это логичнее. Переменных в коде будет много, как понять, какие из них взаимосвязаны?</p> <p class="svelte-ap1jh6">Вот если я создаю машину, сколько переменных мне надо заполнить? А если меняю данные? А если удаляю? Когда переменные разбросаны по коду, можно забыть про какую-то и получить ошибку в интерфейсе. А если у нас есть цельный объект, всегда можно посмотреть, какие у него есть свойства и методы.</p> <p class="svelte-ap1jh6">Например, создадим кошечку:</p> <!> <div style="text-align: center;  margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">В объекте cat есть:</p> <!> <p class="svelte-ap1jh6">По коду сразу видно, что у кошечки есть имя и возраст, она умеет спать. Если разработчик решит добавить новые свойства или методы, он дополнит этот объект, и снова всё в одном месте.</p> <p class="svelte-ap1jh6">Если потом нужно будет получить информацию по кошечке, разработчик сделает REST-метод getByID, searchKitty, или какой-то другой. А в нем будет возвращать свойства объекта.</p> <p class="svelte-ap1jh6">То есть метод вернет</p> <!> <p class="svelte-ap1jh6">И при использовании имени вполне уместно говорить «обратиться к свойству объекта». Это ведь объект (кошечка), и его свойства!</p> <h3>Объект</h3> <p class="svelte-ap1jh6">Второе определение объекта — неупорядоченное множество пар ключ:значение, заключенное в фигурные скобки &lbrace;&rbrace;.</p> <p class="svelte-ap1jh6">Оно применимо тогда, когда внутри фигурных скобок приходит не конкретный целостный объект, а просто набор полей. Они могут быть связаны между собой, а могут относится к совершенно разным объектам внутри кода:</p> <!> <p class="svelte-ap1jh6">В таком случае логично называть эти параметры именно ключами — мы хотим получить значение по ключу.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Но в любом случае, и «ключ», и «свойство» будет правильно. Не пугайтесь, если в одной книге / статье / видео увидели одно, в другой другое... Это просто разные трактовки.</p> <h3>Итого</h3> <p class="svelte-ap1jh6">Json-объект — это неупорядоченное множество пар «ключ:значение», заключённое в фигурные скобки «&lbrace;  &rbrace;». Ключ описывается строкой, между ним и значением стоит символ «:». Пары ключ-значение отделяются друг от друга запятыми.</p> <p class="svelte-ap1jh6">Значения ключа могут быть любыми:</p> <!> <p class="svelte-ap1jh6">И только строку мы берем в кавычки!</p> <!> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Как устроен</span></p> <p class="svelte-ap1jh6">Давайте снова начнем с примера. Это массив:</p> <!> <p class="svelte-ap1jh6">Массив заключен в квадратные скобки []</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Внутри квадратных скобок идет набор значений. Тут нет ключей, как в объекте, поэтому обращаться к массиву можно только по номеру элемента. И поэтому в случае массива менять местами данные внутри <u>нельзя</u>. Это упорядоченное множество значений.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Значения разделены запятыми:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Значения внутри</span></p> <p class="svelte-ap1jh6">Внутри массива может быть все, что угодно:</p> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Цифры</span></p> <!> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Строки</span></p> <!> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Смесь</span></p> <!> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Объекты</span></p> <p class="svelte-ap1jh6">Да, а почему бы и нет:</p> <!> <p class="svelte-ap1jh6">Или даже что-то более сложное. Вот пример ответа подсказок из Дадаты:</p> <!> <p class="svelte-ap1jh6">Система возвращает массив подсказок. Сколько запросили в параметре count, столько и получили. Каждая подсказка — объект, внутри которого еще один объект. И это далеко не самая сложная структура! Уровней вложенности может быть сколько угодно — массив в массиве, который внутри объекта, который внутри массива, который внутри объекта...</p> <p class="svelte-ap1jh6">Ну и, конечно, можно и наоборот, передать массив в объекте. Вот пример запроса в подсказки:</p> <!> <h3>Итого</h3> <p class="svelte-ap1jh6">Массив — это просто набор значений, разделенных запятыми. Находится внутри квадратных скобок [].</p> <p class="svelte-ap1jh6">А вот внутри него может быть все, что угодно:</p> <!>',1);function Et(Ae){const H=[{key:"left",value:"Так правильно"},{key:"right",value:"Так тоже правильно"}],Q=[{id:1,left:{query:"Виктор Иван",count:7},right:{count:7,query:"Виктор Иван"}}],Ie=[{key:"description",value:"Так правильно"},{key:"json",value:"Так неправильно в JSON"}],Ve=[{id:2,description:"Так правильно",json:{query:"Виктор Иван",count:7}},{id:3,description:"Так неправильно в JSON",json:{query:"Виктор Иван",count:7}}],O=l=>JSON.stringify(l,null,2);var W=jt(),X=t(m(W),2);R(X,{headers2:Ie,rows2:Ve,zebra:!0,$$slots:{cell:(l,u)=>{const e=w(()=>u.cell);var o=T(),h=m(o);{var d=s=>{var r=rt(),$=v(r);i(r),x(c=>P($,`        ${c??""}
      `),[()=>O(b(e).value)],w),a(s,r)},f=s=>{var r=p();x(()=>P(r,b(e).value)),a(s,r)};F(h,s=>{b(e).key==="json"?s(d):s(f,!1)})}a(l,o)},"cell-header":(l,u)=>{const e=w(()=>u.header);var o=lt(),h=v(o,!0);i(o),x(()=>P(h,b(e).value)),a(l,o)}}});var Y=t(X,4);K(Y,{id:"JSON",children:(l,u)=>{var e=ot();a(l,e)},$$slots:{default:!0}});var Z=t(Y,4);k(Z,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=pt(),o=m(e);_(o,{children:(r,$)=>{n();var c=p("JSON-объект");a(r,c)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(r,$)=>{n();var c=p("Массив");a(r,c)},$$slots:{default:!0}});var d=t(h,2);_(d,{children:(r,$)=>{n();var c=p("Число (целое или вещественное)");a(r,c)},$$slots:{default:!0}});var f=t(d,2);_(f,{children:(r,$)=>{n();var c=p("Литералы true (логическое значение «истина»), false (логическое значение «ложь») и null");a(r,c)},$$slots:{default:!0}});var s=t(f,2);_(s,{children:(r,$)=>{n();var c=p("Строка");a(r,c)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}});var S=t(Z,4),ee=v(S),Ge=v(ee);y(Ge,{src:"https://images-cdn.9gag.com/photo/aGdOG6w_700b.jpg",style:"width: 100%;"}),i(ee),i(S);var te=t(S,2);K(te,{id:"JSON-object",children:(l,u)=>{var e=dt();a(l,e)},$$slots:{default:!0}});var J=t(te,4),Ue=t(v(J));st(Ue,{visited:!0,href:"https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669115",children:(l,u)=>{n();var e=p("документации подсказок Дадаты по ФИО:");a(l,e)},$$slots:{default:!0}}),n(),i(J);var ae=t(J,2);j(ae,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(l,u)=>{n();var e=p();e.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7
}`,a(l,e)},$$slots:{default:!0}});var N=t(ae,6),se=v(N),ze=v(se);y(ze,{src:"https://habrastorage.org/getpro/habr/upload_files/acd/1a0/b3e/acd1a0b3e42086178942fcc0c0fd8d1b.png",style:"width: 100%;"}),i(se),i(N);var L=t(N,8),re=v(L),De=v(re);y(De,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/876/d5f/5df/876d5f5df458e26a565517291b9c08f5.png",style:"width: 100%;"}),i(re),i(L);var M=t(L,4),le=v(M),Te=v(le);y(Te,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/bfe/c50/765/bfec507654e0e328a5260abae1a63928.png",style:"width: 100%;"}),i(le),i(M);var C=t(M,6),oe=v(C),Fe=v(oe);y(Fe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/2db/ef1/434/2dbef14341056172d3815e69b7f0772b.png",style:"width: 100%;"}),i(oe),i(C);var pe=t(C,4);k(pe,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=vt(),o=m(e);_(o,{children:(d,f)=>{n();var s=p("query — строка, по которой ищем (то, что пользователь вбил в GUI);");a(d,s)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(d,f)=>{n();var s=p("count — количество подсказок в ответе (в Дадате этот параметр зашит в форму, всегда возвращается 7 подсказок. Но если дергать подсказки напрямую, значение можно менять!)");a(d,s)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}});var q=t(pe,4),de=v(q),Ke=v(de);y(Ke,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/404/210/27a/40421027ad8962083a263742db86b2e2.png",style:"width: 100%;"}),i(de),i(q);var B=t(q,4),ve=v(B),Re=v(ve);y(Re,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/fe9/c45/523/fe9c45523dd56e5f240b7f1bdf267ecf.png",style:"width: 100%;"}),i(ve),i(B);var ie=t(B,10);R(ie,{headers:H,rows:Q,zebra:!0,$$slots:{cell:(l,u)=>{const e=w(()=>u.cell);var o=T(),h=m(o);{var d=s=>{var r=it(),$=v(r);i(r),x(c=>P($,`        ${c??""}
      `),[()=>O(b(e).value)],w),a(s,r)},f=s=>{var r=p();x(()=>P(r,b(e).value)),a(s,r)};F(h,s=>{b(e).key==="left"||b(e).key==="right"?s(d):s(f,!1)})}a(l,o)},"cell-header":(l,u)=>{const e=w(()=>u.header);var o=nt(),h=v(o,!0);i(o),x(()=>P(h,b(e).value)),a(l,o)}}});var ne=t(ie,8);R(ne,{headers:H,rows:Q,zebra:!0,$$slots:{cell:(l,u)=>{const e=w(()=>u.cell);var o=T(),h=m(o);{var d=s=>{var r=ct(),$=v(r);i(r),x(c=>P($,`        ${c??""}
      `),[()=>O(b(e).value)],w),a(s,r)},f=s=>{var r=p();x(()=>P(r,b(e).value)),a(s,r)};F(h,s=>{b(e).key==="left"||b(e).key==="right"?s(d):s(f,!1)})}a(l,o)},"cell-header":(l,u)=>{const e=w(()=>u.header);var o=ht(),h=v(o,!0);i(o),x(()=>P(h,b(e).value)),a(l,o)}}});var ce=t(ne,8);j(ce,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(l,u)=>{n();var e=p();e.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7
}`,a(l,e)},$$slots:{default:!0}});var he=t(ce,4);k(he,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=ut(),o=m(e);_(o,{children:(d,f)=>{n();var s=p("Обратиться к свойству объекта;");a(d,s)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(d,f)=>{n();var s=p("Получить значение по ключу.");a(d,s)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}});var E=t(he,2),ue=v(E),He=v(ue);y(He,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/571/394/c65/571394c65e5f9992310a329cad1df6c3.png",style:"width: 100%;"}),i(ue),i(E);var A=t(E,4),_e=v(A),Qe=v(_e);y(Qe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a17/d1f/8d3/a17d1f8d358046158dc484d8490eb993.png",style:"width: 100%;"}),i(_e),i(A);var $e=t(A,8);k($e,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=_t(),o=m(e);_(o,{children:(d,f)=>{n();var s=p("Свойства — описывают, ЧТО мы создаем.");a(d,s)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(d,f)=>{n();var s=p("Методы — что объект умеет ДЕЛАТЬ.");a(d,s)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}});var fe=t($e,4);k(fe,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=$t(),o=m(e);_(o,{children:(d,f)=>{n();var s=p("Перечислить 10 разных переменных — модель, номер, цвет, пробег...");a(d,s)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(d,f)=>{n();var s=p("Создать один объект, где будут все эти свойства.");a(d,s)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}});var I=t(fe,4),ge=v(I),We=v(ge);y(We,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/74e/19e/aea/74e19eaea84e2ed0ca70a8dccd97c42b.png",style:"width: 100%;"}),i(ge),i(I);var ye=t(I,8);j(ye,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(l,u)=>{n();var e=p();e.nodeValue=`var cat = {
name: “Pussy”,
year: 1,
sleep: function() {
// sleeping code
}
}`,a(l,e)},$$slots:{default:!0}});var V=t(ye,2),be=v(V),Xe=v(be);y(Xe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/e54/411/117/e54411117536be81e8adbdc73a022897.png",style:"width: 100%;"}),i(be),i(V);var me=t(V,4);k(me,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=ft(),o=m(e);_(o,{children:(d,f)=>{n();var s=p("Свойства — name, year (что это за кошечка)");a(d,s)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(d,f)=>{n();var s=p("Функции — sleep (что она умеет делать, описание поведения)");a(d,s)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}});var je=t(me,8);j(je,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(l,u)=>{n();var e=p();e.nodeValue=`{
name: “Pussy”,
year: 1,
}
`,a(l,e)},$$slots:{default:!0}});var xe=t(je,10);k(xe,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=gt(),o=m(e);_(o,{children:(s,r)=>{n();var $=p("client_fio (в коде это свойство fio объекта client)");a(s,$)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(s,r)=>{n();var $=p("kitty_name (в коде это свойство name объекта cat)");a(s,$)},$$slots:{default:!0}});var d=t(h,2);_(d,{children:(s,r)=>{n();var $=p("car_model (в коде это свойство model объекта car)");a(s,$)},$$slots:{default:!0}});var f=t(d,2);_(f,{children:(s,r)=>{n();var $=p("…");a(s,$)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}});var G=t(xe,4),we=v(G),Ye=v(we);y(Ye,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a27/55f/745/a2755f74538cb927c9117a876c44232d.png",style:"width: 100%;"}),i(we),i(G);var Pe=t(G,10);k(Pe,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=yt(),o=m(e);_(o,{children:(r,$)=>{n();var c=p("Число");a(r,c)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(r,$)=>{n();var c=p("строка");a(r,c)},$$slots:{default:!0}});var d=t(h,2);_(d,{children:(r,$)=>{n();var c=p("массив");a(r,c)},$$slots:{default:!0}});var f=t(d,2);_(f,{children:(r,$)=>{n();var c=p("другой объект");a(r,c)},$$slots:{default:!0}});var s=t(f,2);_(s,{children:(r,$)=>{n();var c=p("…");a(r,c)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}});var ke=t(Pe,4);K(ke,{id:"JSON-array",children:(l,u)=>{var e=bt();a(l,e)},$$slots:{default:!0}});var Oe=t(ke,6);j(Oe,{code:'[ "MALE", "FEMALE" ]',hideCopyButton:!0,showMoreLess:!1});var U=t(Oe,4),Se=v(U),Ze=v(Se);y(Ze,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/5b1/c5f/800/5b1c5f800d9c612a1b27e87be3cc0297.png",style:"width: 100%;"}),i(Se),i(U);var z=t(U,4),Je=v(z),et=v(Je);y(et,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/f7b/4b1/af8/f7b4b1af8f617aa9ca89fe15124863ed.png",style:"width: 100%;"}),i(Je),i(z);var D=t(z,4),Ne=v(D),tt=v(Ne);y(tt,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/760/c8f/f7a/760c8ff7ab4e88155efae8faeb46b689.png",style:"width: 100%;"}),i(Ne),i(D);var Le=t(D,8);j(Le,{code:"[ 1, 5, 10, 33 ]",hideCopyButton:!0,showMoreLess:!1});var Me=t(Le,4);j(Me,{code:'[ "MALE", "FEMALE" ]',hideCopyButton:!0,showMoreLess:!1});var Ce=t(Me,4);j(Ce,{code:'[ 1, "Андрюшка",  10, 33 ]',hideCopyButton:!0,showMoreLess:!1});var qe=t(Ce,6);j(qe,{code:'[1, {a:1, b:2}, "такой вот массивчик"]',hideCopyButton:!0,showMoreLess:!1});var Be=t(qe,4);j(Be,{type:"multi",hideCopyButton:!0,children:(l,u)=>{n();var e=p();e.nodeValue=`[
        {
            "value": "Иванов Виктор",
            "unrestricted_value": "Иванов Виктор",
            "data": {
                "surname": "Иванов",
                "name": "Виктор",
                "patronymic": null,
                "gender": "MALE"
            }
        },
        {
            "value": "Иванченко Виктор",
            "unrestricted_value": "Иванченко Виктор",
            "data": {
                "surname": "Иванченко",
                "name": "Виктор",
                "patronymic": null,
                "gender": "MALE"
            }
        },
        {
            "value": "Виктор Иванович",
            "unrestricted_value": "Виктор Иванович",
            "data": {
                "surname": null,
                "name": "Виктор",
                "patronymic": "Иванович",
                "gender": "MALE"
            }
        }
]`,a(l,e)},$$slots:{default:!0}});var Ee=t(Be,6);j(Ee,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(l,u)=>{n();var e=p();e.nodeValue=`{
"query": "Виктор Иван",
"count": 7,
"parts": ["NAME", "SURNAME"]
}`,a(l,e)},$$slots:{default:!0}});var at=t(Ee,8);k(at,{style:"margin-left: 3.5em;",children:(l,u)=>{var e=mt(),o=m(e);_(o,{children:(r,$)=>{n();var c=p("числа");a(r,c)},$$slots:{default:!0}});var h=t(o,2);_(h,{children:(r,$)=>{n();var c=p("строки");a(r,c)},$$slots:{default:!0}});var d=t(h,2);_(d,{children:(r,$)=>{n();var c=p("другие массивы");a(r,c)},$$slots:{default:!0}});var f=t(d,2);_(f,{children:(r,$)=>{n();var c=p("объекты");a(r,c)},$$slots:{default:!0}});var s=t(f,2);_(s,{children:(r,$)=>{n();var c=p("смесь из всего вышеназванного");a(r,c)},$$slots:{default:!0}}),a(l,e)},$$slots:{default:!0}}),a(Ae,W)}export{Et as component};
