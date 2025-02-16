import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{T as e,U as m,J as i,K as n,G,g as x,d as U,V as o}from"../chunks/DwB3qp1y.js";import{t as y,a,s as D,c as Ye,b as p}from"../chunks/DhYkO-ht.js";import{i as Ze}from"../chunks/DzUmUmhz.js";import"../chunks/CEYGJagV.js";import{A as T}from"../chunks/C8x85miN.js";import{D as Ne}from"../chunks/BD47vfnQ.js";import{O as j}from"../chunks/DkdKJtbA.js";import{I as g}from"../chunks/DnjDcRZx.js";import{O as et}from"../chunks/DKnAL-hi.js";import{C as b}from"../chunks/CGardy9S.js";import{L as h}from"../chunks/DF4CoHH5.js";var tt=y('<pre class="json-block svelte-ap1jh6"> </pre>'),at=y('<span class="header-text svelte-ap1jh6"> </span>'),st=y('<h2 class="svelte-ap1jh6">Как устроен JSON</h2>'),rt=y("<!> <!> <!> <!> <!>",1),lt=y('<h2 class="svelte-ap1jh6">JSON-объект</h2>'),ot=y("<!> <!>",1),pt=y("<!> <!>",1),dt=y("<!> <!>",1),vt=y("<!> <!>",1),it=y("<!> <!>",1),nt=y("<!> <!> <!> <!>",1),ct=y("<!> <!> <!> <!> <!>",1),ht=y('<h2 class="svelte-ap1jh6">JSON-массив</h2>'),ut=y("<!> <!> <!> <!> <!>",1),_t=y('<h1 class="svelte-ap1jh6">Что такое JSON</h1> <!> <p class="svelte-ap1jh6">JSON (англ. JavaScript Object Notation) — это формат данных, который в основном используется для хранения и передачи данных, в частности между сервером и веб-приложением. Он широко применяется для представления структурированных данных.</p> <!> <p class="svelte-ap1jh6">В качестве значений в JSON могут быть использованы:</p> <!> <p class="svelte-ap1jh6">Я думаю, с простыми значениями вопросов не возникнет, поэтому разберем массивы и объекты.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <!> <h3>Как устроен</h3> <p class="svelte-ap1jh6">Возьмем пример из <!>.</p> <!> <p class="svelte-ap1jh6">И разберемся, что означает эта запись.</p> <p class="svelte-ap1jh6">Объект заключен в фигурные скобки &lbrace;&rbrace;</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">JSON-объект — это неупорядоченное множество пар «ключ:значение».</p> <p class="svelte-ap1jh6">Ключ — это название параметра, который мы передаем серверу. Он служит маркером для принимающей запрос системы: «смотри, здесь у меня значение такого-то параметра!». А иначе как система поймет, где что? Ей нужна подсказка!</p> <p class="svelte-ap1jh6">Вот, например, «Виктор Иван» — это что? Ищем описание параметра «query» в документации — ага, да это же запрос для подсказок!</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Это как если бы мы вбили строку «Виктор Иван» в GUI (графическом интерфейсе пользователя):</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Когда пользователь начинает вводить данные в формочку, то сразу видит результат — появляется список подсказок. Это значит, что разработчик прописал в коде условие — делать некое действие на каждый ввод символа в это поле. Какое действие? Можно увидеть через f12.</p> <p class="svelte-ap1jh6">Открываем вкладку Network, вбиваем «Виктор Иван» и находим запрос, который при этом уходит на сервер. Ого, да это тот самый пример, что мы разбираем!</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Клиент передает серверу запрос в JSON-формате. Внутри два параметра, две пары «ключ-значение»:</p> <!> <p class="svelte-ap1jh6">Пары «ключ-значение» разделены запятыми:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Строки берем в кавычки, числа нет:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Конечно, внутри может быть не только строка или число. Это может быть и другой объект! Или массив... Или объект в массиве, массив в объекте... Любое количество уровней вложенности =))</p> <p class="svelte-ap1jh6">Объект, массив, число, булево значение (true / false) — если у нас НЕ строка, кавычки не нужны. Но в любом случае это будет значение какого-то ключа:</p> ТАБЛИЦА <p class="svelte-ap1jh6">Переносы строк делать необязательно. Вообще пробелы и переносы строк нужны только человеку для читабельности, система поймет и без них:</p> ТАБЛИЦА <p class="svelte-ap1jh6">Ключ — ВСЕГДА строка, но мы все равно берем его в кавычки. В JavaScript этого можно не делать, в JSON нельзя.</p> ТАБЛИЦА <p class="svelte-ap1jh6">По крайней мере, если вы работаете с простыми значениями ключей, а несколько слов записываете в верблюжьемРегистре или в змеином_регистре. Если вы хотите написать в ключе несколько слов через пробел, ключ нужно взять в кавычки.</p> ТАБЛИЦА <p class="svelte-ap1jh6">И все же я рекомендую использовать простые названия ключей, или использовать snake_case.</p> <p class="svelte-ap1jh6">Писать ключи можно в любом порядке. Ведь JSON-объект — это <u>неупорядоченное</u> множество пар «ключ:значение».</p> <!> <p class="svelte-ap1jh6">Очень важно это понимать, и тестировать! Принимающая запрос система должна ориентировать на название ключей в запросе, а не на порядок их следования. Ключевое слово «должна» )) Хотя знаю примеры, когда от перестановки ключей местами всё ломалось, ведь «первым должен идти запрос, а не count!».</p> <h3>Ключ или свойство?</h3> <p class="svelte-ap1jh6">Вот у нас есть JSON-объект:</p> <!> <p class="svelte-ap1jh6">Что такое «query»? Если я хочу к нему обратиться, как мне это сказать? Есть 2 варианта, и оба правильные:</p> <!> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">То есть «query» можно назвать как ключом, так и свойством. А как правильно то?</p> <div style="text-align: center;  margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Правильно и так, и так! Просто есть разные определения объекта:</p> <h3>Объект</h3> <p class="svelte-ap1jh6">В JS объект — это именно объект. У которого есть набор свойств и методов:</p> <!> <p class="svelte-ap1jh6">То есть если мы хотим создать машину, есть два пути:</p> <!> <p class="svelte-ap1jh6">Аналогично с кошечкой, собачкой, другом из записной книжки...</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Объектно-ориентированное программирование (ООП) предлагает мыслить не набором переменных, а объектом. Хотя бы потому, что это логичнее. Переменных в коде будет много, как понять, какие из них взаимосвязаны?</p> <p class="svelte-ap1jh6">Вот если я создаю машину, сколько переменных мне надо заполнить? А если меняю данные? А если удаляю? Когда переменные разбросаны по коду, можно забыть про какую-то и получить ошибку в интерфейсе. А если у нас есть цельный объект, всегда можно посмотреть, какие у него есть свойства и методы.</p> <p class="svelte-ap1jh6">Например, создадим кошечку:</p> <!> <div style="text-align: center;  margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">В объекте cat есть:</p> <!> <p class="svelte-ap1jh6">По коду сразу видно, что у кошечки есть имя и возраст, она умеет спать. Если разработчик решит добавить новые свойства или методы, он дополнит этот объект, и снова всё в одном месте.</p> <p class="svelte-ap1jh6">Если потом нужно будет получить информацию по кошечке, разработчик сделает REST-метод getByID, searchKitty, или какой-то другой. А в нем будет возвращать свойства объекта.</p> <p class="svelte-ap1jh6">То есть метод вернет</p> <!> <p class="svelte-ap1jh6">И при использовании имени вполне уместно говорить «обратиться к свойству объекта». Это ведь объект (кошечка), и его свойства!</p> <h3>Объект</h3> <p class="svelte-ap1jh6">Второе определение объекта — неупорядоченное множество пар ключ:значение, заключенное в фигурные скобки &lbrace;&rbrace;.</p> <p class="svelte-ap1jh6">Оно применимо тогда, когда внутри фигурных скобок приходит не конкретный целостный объект, а просто набор полей. Они могут быть связаны между собой, а могут относится к совершенно разным объектам внутри кода:</p> <!> <p class="svelte-ap1jh6">В таком случае логично называть эти параметры именно ключами — мы хотим получить значение по ключу.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Но в любом случае, и «ключ», и «свойство» будет правильно. Не пугайтесь, если в одной книге / статье / видео увидели одно, в другой другое... Это просто разные трактовки.</p> <h3>Итого</h3> <p class="svelte-ap1jh6">Json-объект — это неупорядоченное множество пар «ключ:значение», заключённое в фигурные скобки «&lbrace;  &rbrace;». Ключ описывается строкой, между ним и значением стоит символ «:». Пары ключ-значение отделяются друг от друга запятыми.</p> <p class="svelte-ap1jh6">Значения ключа могут быть любыми:</p> <!> <p class="svelte-ap1jh6">И только строку мы берем в кавычки!</p> <!> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Как устроен</span></p> <p class="svelte-ap1jh6">Давайте снова начнем с примера. Это массив:</p> <!> <p class="svelte-ap1jh6">Массив заключен в квадратные скобки []</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Внутри квадратных скобок идет набор значений. Тут нет ключей, как в объекте, поэтому обращаться к массиву можно только по номеру элемента. И поэтому в случае массива менять местами данные внутри <u>нельзя</u>. Это упорядоченное множество значений.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6">Значения разделены запятыми:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Значения внутри</span></p> <p class="svelte-ap1jh6">Внутри массива может быть все, что угодно:</p> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Цифры</span></p> <!> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Строки</span></p> <!> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Смесь</span></p> <!> <p class="svelte-ap1jh6"><span class="bold svelte-ap1jh6">Объекты</span></p> <p class="svelte-ap1jh6">Да, а почему бы и нет:</p> <!> <p class="svelte-ap1jh6">Или даже что-то более сложное. Вот пример ответа подсказок из Дадаты:</p> <!> <p class="svelte-ap1jh6">Система возвращает массив подсказок. Сколько запросили в параметре count, столько и получили. Каждая подсказка — объект, внутри которого еще один объект. И это далеко не самая сложная структура! Уровней вложенности может быть сколько угодно — массив в массиве, который внутри объекта, который внутри массива, который внутри объекта...</p> <p class="svelte-ap1jh6">Ну и, конечно, можно и наоборот, передать массив в объекте. Вот пример запроса в подсказки:</p> <!> <h3>Итого</h3> <p class="svelte-ap1jh6">Массив — это просто набор значений, разделенных запятыми. Находится внутри квадратных скобок [].</p> <p class="svelte-ap1jh6">А вот внутри него может быть все, что угодно:</p> <!>',1);function Jt(Me){const Ce=[{key:"left",value:"Так правильно"},{key:"right",value:"Так тоже правильно"}],z=[{id:1,left:{query:"Виктор Иван",count:7},right:{count:7,query:"Виктор Иван"}}],Be=s=>JSON.stringify(s,null,2);var F=_t(),K=e(m(F),2);Ne(K,{headers:Ce,rows:z,zebra:!0,$$slots:{cell:(s,$)=>{const t=U(()=>$.cell);var d=Ye(),u=m(d);{var v=r=>{var l=tt(),_=i(l);n(l),G(c=>D(_,`        ${c??""}
      `),[()=>Be(x(t).value)],U),a(r,l)},f=r=>{var l=p();G(()=>D(l,x(t).value)),a(r,l)};Ze(u,r=>{x(t).key==="left"||x(t).key==="right"?r(v):r(f,!1)})}a(s,d)},"cell-header":(s,$)=>{const t=U(()=>$.header);var d=at(),u=i(d,!0);n(d),G(()=>D(u,x(t).value)),a(s,d)}}});var R=e(K,4);T(R,{id:"JSON",children:(s,$)=>{var t=st();a(s,t)},$$slots:{default:!0}});var H=e(R,4);j(H,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=rt(),d=m(t);h(d,{children:(l,_)=>{o();var c=p("JSON-объект");a(l,c)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(l,_)=>{o();var c=p("Массив");a(l,c)},$$slots:{default:!0}});var v=e(u,2);h(v,{children:(l,_)=>{o();var c=p("Число (целое или вещественное)");a(l,c)},$$slots:{default:!0}});var f=e(v,2);h(f,{children:(l,_)=>{o();var c=p("Литералы true (логическое значение «истина»), false (логическое значение «ложь») и null");a(l,c)},$$slots:{default:!0}});var r=e(f,2);h(r,{children:(l,_)=>{o();var c=p("Строка");a(l,c)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}});var w=e(H,4),Q=i(w),Ee=i(Q);g(Ee,{src:"https://images-cdn.9gag.com/photo/aGdOG6w_700b.jpg",style:"width: 100%;"}),n(Q),n(w);var W=e(w,2);T(W,{id:"JSON-object",children:(s,$)=>{var t=lt();a(s,t)},$$slots:{default:!0}});var P=e(W,4),Ae=e(i(P));et(Ae,{visited:!0,href:"https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669115",children:(s,$)=>{o();var t=p("документации подсказок Дадаты по ФИО:");a(s,t)},$$slots:{default:!0}}),o(),n(P);var X=e(P,2);b(X,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,$)=>{o();var t=p();t.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7
}`,a(s,t)},$$slots:{default:!0}});var k=e(X,6),Y=i(k),qe=i(Y);g(qe,{src:"https://habrastorage.org/getpro/habr/upload_files/acd/1a0/b3e/acd1a0b3e42086178942fcc0c0fd8d1b.png",style:"width: 100%;"}),n(Y),n(k);var O=e(k,8),Z=i(O),Ie=i(Z);g(Ie,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/876/d5f/5df/876d5f5df458e26a565517291b9c08f5.png",style:"width: 100%;"}),n(Z),n(O);var S=e(O,4),ee=i(S),Ve=i(ee);g(Ve,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/bfe/c50/765/bfec507654e0e328a5260abae1a63928.png",style:"width: 100%;"}),n(ee),n(S);var J=e(S,6),te=i(J),Ge=i(te);g(Ge,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/2db/ef1/434/2dbef14341056172d3815e69b7f0772b.png",style:"width: 100%;"}),n(te),n(J);var ae=e(J,4);j(ae,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=ot(),d=m(t);h(d,{children:(v,f)=>{o();var r=p("query — строка, по которой ищем (то, что пользователь вбил в GUI);");a(v,r)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(v,f)=>{o();var r=p("count — количество подсказок в ответе (в Дадате этот параметр зашит в форму, всегда возвращается 7 подсказок. Но если дергать подсказки напрямую, значение можно менять!)");a(v,r)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}});var L=e(ae,4),se=i(L),Ue=i(se);g(Ue,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/404/210/27a/40421027ad8962083a263742db86b2e2.png",style:"width: 100%;"}),n(se),n(L);var N=e(L,4),re=i(N),De=i(re);g(De,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/fe9/c45/523/fe9c45523dd56e5f240b7f1bdf267ecf.png",style:"width: 100%;"}),n(re),n(N);var le=e(N,16);Ne(le,{zebra:!0,headers:[{key:"name",value:"Так правильно"},{key:"right",value:"Так тоже правильно"}],rows:z});var oe=e(le,8);b(oe,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,$)=>{o();var t=p();t.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7
}`,a(s,t)},$$slots:{default:!0}});var pe=e(oe,4);j(pe,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=pt(),d=m(t);h(d,{children:(v,f)=>{o();var r=p("Обратиться к свойству объекта;");a(v,r)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(v,f)=>{o();var r=p("Получить значение по ключу.");a(v,r)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}});var M=e(pe,2),de=i(M),Te=i(de);g(Te,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/571/394/c65/571394c65e5f9992310a329cad1df6c3.png",style:"width: 100%;"}),n(de),n(M);var C=e(M,4),ve=i(C),ze=i(ve);g(ze,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a17/d1f/8d3/a17d1f8d358046158dc484d8490eb993.png",style:"width: 100%;"}),n(ve),n(C);var ie=e(C,8);j(ie,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=dt(),d=m(t);h(d,{children:(v,f)=>{o();var r=p("Свойства — описывают, ЧТО мы создаем.");a(v,r)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(v,f)=>{o();var r=p("Методы — что объект умеет ДЕЛАТЬ.");a(v,r)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}});var ne=e(ie,4);j(ne,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=vt(),d=m(t);h(d,{children:(v,f)=>{o();var r=p("Перечислить 10 разных переменных — модель, номер, цвет, пробег...");a(v,r)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(v,f)=>{o();var r=p("Создать один объект, где будут все эти свойства.");a(v,r)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}});var B=e(ne,4),ce=i(B),Fe=i(ce);g(Fe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/74e/19e/aea/74e19eaea84e2ed0ca70a8dccd97c42b.png",style:"width: 100%;"}),n(ce),n(B);var he=e(B,8);b(he,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,$)=>{o();var t=p();t.nodeValue=`var cat = {
name: “Pussy”,
year: 1,
sleep: function() {
// sleeping code
}
}`,a(s,t)},$$slots:{default:!0}});var E=e(he,2),ue=i(E),Ke=i(ue);g(Ke,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/e54/411/117/e54411117536be81e8adbdc73a022897.png",style:"width: 100%;"}),n(ue),n(E);var _e=e(E,4);j(_e,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=it(),d=m(t);h(d,{children:(v,f)=>{o();var r=p("Свойства — name, year (что это за кошечка)");a(v,r)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(v,f)=>{o();var r=p("Функции — sleep (что она умеет делать, описание поведения)");a(v,r)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}});var $e=e(_e,8);b($e,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,$)=>{o();var t=p();t.nodeValue=`{
name: “Pussy”,
year: 1,
}
`,a(s,t)},$$slots:{default:!0}});var fe=e($e,10);j(fe,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=nt(),d=m(t);h(d,{children:(r,l)=>{o();var _=p("client_fio (в коде это свойство fio объекта client)");a(r,_)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(r,l)=>{o();var _=p("kitty_name (в коде это свойство name объекта cat)");a(r,_)},$$slots:{default:!0}});var v=e(u,2);h(v,{children:(r,l)=>{o();var _=p("car_model (в коде это свойство model объекта car)");a(r,_)},$$slots:{default:!0}});var f=e(v,2);h(f,{children:(r,l)=>{o();var _=p("…");a(r,_)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}});var A=e(fe,4),ge=i(A),Re=i(ge);g(Re,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a27/55f/745/a2755f74538cb927c9117a876c44232d.png",style:"width: 100%;"}),n(ge),n(A);var ye=e(A,10);j(ye,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=ct(),d=m(t);h(d,{children:(l,_)=>{o();var c=p("Число");a(l,c)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(l,_)=>{o();var c=p("строка");a(l,c)},$$slots:{default:!0}});var v=e(u,2);h(v,{children:(l,_)=>{o();var c=p("массив");a(l,c)},$$slots:{default:!0}});var f=e(v,2);h(f,{children:(l,_)=>{o();var c=p("другой объект");a(l,c)},$$slots:{default:!0}});var r=e(f,2);h(r,{children:(l,_)=>{o();var c=p("…");a(l,c)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}});var me=e(ye,4);T(me,{id:"JSON-array",children:(s,$)=>{var t=ht();a(s,t)},$$slots:{default:!0}});var be=e(me,6);b(be,{code:'[ "MALE", "FEMALE" ]',hideCopyButton:!0,showMoreLess:!1});var q=e(be,4),je=i(q),He=i(je);g(He,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/5b1/c5f/800/5b1c5f800d9c612a1b27e87be3cc0297.png",style:"width: 100%;"}),n(je),n(q);var I=e(q,4),xe=i(I),Qe=i(xe);g(Qe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/f7b/4b1/af8/f7b4b1af8f617aa9ca89fe15124863ed.png",style:"width: 100%;"}),n(xe),n(I);var V=e(I,4),we=i(V),We=i(we);g(We,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/760/c8f/f7a/760c8ff7ab4e88155efae8faeb46b689.png",style:"width: 100%;"}),n(we),n(V);var Pe=e(V,8);b(Pe,{code:"[ 1, 5, 10, 33 ]",hideCopyButton:!0,showMoreLess:!1});var ke=e(Pe,4);b(ke,{code:'[ "MALE", "FEMALE" ]',hideCopyButton:!0,showMoreLess:!1});var Oe=e(ke,4);b(Oe,{code:'[ 1, "Андрюшка",  10, 33 ]',hideCopyButton:!0,showMoreLess:!1});var Se=e(Oe,6);b(Se,{code:'[1, {a:1, b:2}, "такой вот массивчик"]',hideCopyButton:!0,showMoreLess:!1});var Je=e(Se,4);b(Je,{type:"multi",hideCopyButton:!0,children:(s,$)=>{o();var t=p();t.nodeValue=`[
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
]`,a(s,t)},$$slots:{default:!0}});var Le=e(Je,6);b(Le,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,$)=>{o();var t=p();t.nodeValue=`{
"query": "Виктор Иван",
"count": 7,
"parts": ["NAME", "SURNAME"]
}`,a(s,t)},$$slots:{default:!0}});var Xe=e(Le,8);j(Xe,{style:"margin-left: 3.5em;",children:(s,$)=>{var t=ut(),d=m(t);h(d,{children:(l,_)=>{o();var c=p("числа");a(l,c)},$$slots:{default:!0}});var u=e(d,2);h(u,{children:(l,_)=>{o();var c=p("строки");a(l,c)},$$slots:{default:!0}});var v=e(u,2);h(v,{children:(l,_)=>{o();var c=p("другие массивы");a(l,c)},$$slots:{default:!0}});var f=e(v,2);h(f,{children:(l,_)=>{o();var c=p("объекты");a(l,c)},$$slots:{default:!0}});var r=e(f,2);h(r,{children:(l,_)=>{o();var c=p("смесь из всего вышеназванного");a(l,c)},$$slots:{default:!0}}),a(s,t)},$$slots:{default:!0}}),a(Me,F)}export{Jt as component};
