import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{T as e,U as y,J as v,K as p,G as ze,d as Oe,g as He,V as r}from"../chunks/DwB3qp1y.js";import{t as x,a as s,s as Qe,b as l}from"../chunks/DhYkO-ht.js";import"../chunks/ZbgpAtp-.js";import{A as G}from"../chunks/C8x85miN.js";import{D as Se}from"../chunks/BD47vfnQ.js";import{O as b}from"../chunks/DkdKJtbA.js";import{I as f}from"../chunks/DnjDcRZx.js";import{O as We}from"../chunks/DKnAL-hi.js";import{C as g}from"../chunks/CGardy9S.js";import{L as u}from"../chunks/DF4CoHH5.js";var Xe=x("<pre> </pre>"),Ye=x('<h2 class="svelte-17xmtid">Как устроен JSON</h2>'),Ze=x("<!> <!> <!> <!> <!>",1),et=x('<h2 class="svelte-17xmtid">JSON-объект</h2>'),tt=x("<!> <!>",1),st=x("<!> <!>",1),at=x("<!> <!>",1),rt=x("<!> <!>",1),lt=x("<!> <!>",1),dt=x("<!> <!> <!> <!>",1),ot=x("<!> <!> <!> <!> <!>",1),it=x('<h2 class="svelte-17xmtid">JSON-массив</h2>'),vt=x("<!> <!> <!> <!> <!>",1),pt=x('<h1 class="svelte-17xmtid">Что такое JSON</h1> <!> <p class="svelte-17xmtid">JSON (англ. JavaScript Object Notation) — это формат данных, который в основном используется для хранения и передачи данных, в частности между сервером и веб-приложением. Он широко применяется для представления структурированных данных.</p> <!> <p class="svelte-17xmtid">В качестве значений в JSON могут быть использованы:</p> <!> <p class="svelte-17xmtid">Я думаю, с простыми значениями вопросов не возникнет, поэтому разберем массивы и объекты.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <!> <h3>Как устроен</h3> <p class="svelte-17xmtid">Возьмем пример из <!>.</p> <!> <p class="svelte-17xmtid">И разберемся, что означает эта запись.</p> <p class="svelte-17xmtid">Объект заключен в фигурные скобки &lbrace;&rbrace;</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">JSON-объект — это неупорядоченное множество пар «ключ:значение».</p> <p class="svelte-17xmtid">Ключ — это название параметра, который мы передаем серверу. Он служит маркером для принимающей запрос системы: «смотри, здесь у меня значение такого-то параметра!». А иначе как система поймет, где что? Ей нужна подсказка!</p> <p class="svelte-17xmtid">Вот, например, «Виктор Иван» — это что? Ищем описание параметра «query» в документации — ага, да это же запрос для подсказок!</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Это как если бы мы вбили строку «Виктор Иван» в GUI (графическом интерфейсе пользователя):</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Когда пользователь начинает вводить данные в формочку, то сразу видит результат — появляется список подсказок. Это значит, что разработчик прописал в коде условие — делать некое действие на каждый ввод символа в это поле. Какое действие? Можно увидеть через f12.</p> <p class="svelte-17xmtid">Открываем вкладку Network, вбиваем «Виктор Иван» и находим запрос, который при этом уходит на сервер. Ого, да это тот самый пример, что мы разбираем!</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Клиент передает серверу запрос в JSON-формате. Внутри два параметра, две пары «ключ-значение»:</p> <!> <p class="svelte-17xmtid">Пары «ключ-значение» разделены запятыми:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Строки берем в кавычки, числа нет:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Конечно, внутри может быть не только строка или число. Это может быть и другой объект! Или массив... Или объект в массиве, массив в объекте... Любое количество уровней вложенности =))</p> <p class="svelte-17xmtid">Объект, массив, число, булево значение (true / false) — если у нас НЕ строка, кавычки не нужны. Но в любом случае это будет значение какого-то ключа:</p> ТАБЛИЦА <p class="svelte-17xmtid">Переносы строк делать необязательно. Вообще пробелы и переносы строк нужны только человеку для читабельности, система поймет и без них:</p> ТАБЛИЦА <p class="svelte-17xmtid">Ключ — ВСЕГДА строка, но мы все равно берем его в кавычки. В JavaScript этого можно не делать, в JSON нельзя.</p> ТАБЛИЦА <p class="svelte-17xmtid">По крайней мере, если вы работаете с простыми значениями ключей, а несколько слов записываете в верблюжьемРегистре или в змеином_регистре. Если вы хотите написать в ключе несколько слов через пробел, ключ нужно взять в кавычки.</p> ТАБЛИЦА <p class="svelte-17xmtid">И все же я рекомендую использовать простые названия ключей, или использовать snake_case.</p> <p class="svelte-17xmtid">Писать ключи можно в любом порядке. Ведь JSON-объект — это <u>неупорядоченное</u> множество пар «ключ:значение».</p> <!> <p class="svelte-17xmtid">Очень важно это понимать, и тестировать! Принимающая запрос система должна ориентировать на название ключей в запросе, а не на порядок их следования. Ключевое слово «должна» )) Хотя знаю примеры, когда от перестановки ключей местами всё ломалось, ведь «первым должен идти запрос, а не count!».</p> <h3>Ключ или свойство?</h3> <p class="svelte-17xmtid">Вот у нас есть JSON-объект:</p> <!> <p class="svelte-17xmtid">Что такое «query»? Если я хочу к нему обратиться, как мне это сказать? Есть 2 варианта, и оба правильные:</p> <!> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">То есть «query» можно назвать как ключом, так и свойством. А как правильно то?</p> <div style="text-align: center;  margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Правильно и так, и так! Просто есть разные определения объекта:</p> <h3>Объект</h3> <p class="svelte-17xmtid">В JS объект — это именно объект. У которого есть набор свойств и методов:</p> <!> <p class="svelte-17xmtid">То есть если мы хотим создать машину, есть два пути:</p> <!> <p class="svelte-17xmtid">Аналогично с кошечкой, собачкой, другом из записной книжки...</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Объектно-ориентированное программирование (ООП) предлагает мыслить не набором переменных, а объектом. Хотя бы потому, что это логичнее. Переменных в коде будет много, как понять, какие из них взаимосвязаны?</p> <p class="svelte-17xmtid">Вот если я создаю машину, сколько переменных мне надо заполнить? А если меняю данные? А если удаляю? Когда переменные разбросаны по коду, можно забыть про какую-то и получить ошибку в интерфейсе. А если у нас есть цельный объект, всегда можно посмотреть, какие у него есть свойства и методы.</p> <p class="svelte-17xmtid">Например, создадим кошечку:</p> <!> <div style="text-align: center;  margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">В объекте cat есть:</p> <!> <p class="svelte-17xmtid">По коду сразу видно, что у кошечки есть имя и возраст, она умеет спать. Если разработчик решит добавить новые свойства или методы, он дополнит этот объект, и снова всё в одном месте.</p> <p class="svelte-17xmtid">Если потом нужно будет получить информацию по кошечке, разработчик сделает REST-метод getByID, searchKitty, или какой-то другой. А в нем будет возвращать свойства объекта.</p> <p class="svelte-17xmtid">То есть метод вернет</p> <!> <p class="svelte-17xmtid">И при использовании имени вполне уместно говорить «обратиться к свойству объекта». Это ведь объект (кошечка), и его свойства!</p> <h3>Объект</h3> <p class="svelte-17xmtid">Второе определение объекта — неупорядоченное множество пар ключ:значение, заключенное в фигурные скобки &lbrace;&rbrace;.</p> <p class="svelte-17xmtid">Оно применимо тогда, когда внутри фигурных скобок приходит не конкретный целостный объект, а просто набор полей. Они могут быть связаны между собой, а могут относится к совершенно разным объектам внутри кода:</p> <!> <p class="svelte-17xmtid">В таком случае логично называть эти параметры именно ключами — мы хотим получить значение по ключу.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Но в любом случае, и «ключ», и «свойство» будет правильно. Не пугайтесь, если в одной книге / статье / видео увидели одно, в другой другое... Это просто разные трактовки.</p> <h3>Итого</h3> <p class="svelte-17xmtid">Json-объект — это неупорядоченное множество пар «ключ:значение», заключённое в фигурные скобки «&lbrace;  &rbrace;». Ключ описывается строкой, между ним и значением стоит символ «:». Пары ключ-значение отделяются друг от друга запятыми.</p> <p class="svelte-17xmtid">Значения ключа могут быть любыми:</p> <!> <p class="svelte-17xmtid">И только строку мы берем в кавычки!</p> <!> <p class="svelte-17xmtid"><span class="bold svelte-17xmtid">Как устроен</span></p> <p class="svelte-17xmtid">Давайте снова начнем с примера. Это массив:</p> <!> <p class="svelte-17xmtid">Массив заключен в квадратные скобки []</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Внутри квадратных скобок идет набор значений. Тут нет ключей, как в объекте, поэтому обращаться к массиву можно только по номеру элемента. И поэтому в случае массива менять местами данные внутри <u>нельзя</u>. Это упорядоченное множество значений.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid">Значения разделены запятыми:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-17xmtid"><span class="bold svelte-17xmtid">Значения внутри</span></p> <p class="svelte-17xmtid">Внутри массива может быть все, что угодно:</p> <p class="svelte-17xmtid"><span class="bold svelte-17xmtid">Цифры</span></p> <!> <p class="svelte-17xmtid"><span class="bold svelte-17xmtid">Строки</span></p> <!> <p class="svelte-17xmtid"><span class="bold svelte-17xmtid">Смесь</span></p> <!> <p class="svelte-17xmtid"><span class="bold svelte-17xmtid">Объекты</span></p> <p class="svelte-17xmtid">Да, а почему бы и нет:</p> <!> <p class="svelte-17xmtid">Или даже что-то более сложное. Вот пример ответа подсказок из Дадаты:</p> <!> <p class="svelte-17xmtid">Система возвращает массив подсказок. Сколько запросили в параметре count, столько и получили. Каждая подсказка — объект, внутри которого еще один объект. И это далеко не самая сложная структура! Уровней вложенности может быть сколько угодно — массив в массиве, который внутри объекта, который внутри массива, который внутри объекта...</p> <p class="svelte-17xmtid">Ну и, конечно, можно и наоборот, передать массив в объекте. Вот пример запроса в подсказки:</p> <!> <h3>Итого</h3> <p class="svelte-17xmtid">Массив — это просто набор значений, разделенных запятыми. Находится внутри квадратных скобок [].</p> <p class="svelte-17xmtid">А вот внутри него может быть все, что угодно:</p> <!>',1);function wt(Je){const U=[{name:"Тест",right:{test:123}}];var j=pt(),D=e(y(j),2);Se(D,{headers:[{key:"name",value:"Name"},{key:"right",value:"Right"}],rows:U,$$slots:{"cell-right":(a,h)=>{const t=Oe(()=>h.cell);var n=Xe(),$=v(n,!0);p(n),ze(d=>Qe($,d),[()=>JSON.stringify(He(t).value,null,2)],Oe),s(a,n)}}});var R=e(D,4);G(R,{id:"JSON",children:(a,h)=>{var t=Ye();s(a,t)},$$slots:{default:!0}});var T=e(R,4);b(T,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=Ze(),n=y(t);u(n,{children:(i,_)=>{r();var c=l("JSON-объект");s(i,c)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(i,_)=>{r();var c=l("Массив");s(i,c)},$$slots:{default:!0}});var d=e($,2);u(d,{children:(i,_)=>{r();var c=l("Число (целое или вещественное)");s(i,c)},$$slots:{default:!0}});var m=e(d,2);u(m,{children:(i,_)=>{r();var c=l("Литералы true (логическое значение «истина»), false (логическое значение «ложь») и null");s(i,c)},$$slots:{default:!0}});var o=e(m,2);u(o,{children:(i,_)=>{r();var c=l("Строка");s(i,c)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}});var w=e(T,4),F=v(w),Ne=v(F);f(Ne,{src:"https://images-cdn.9gag.com/photo/aGdOG6w_700b.jpg",style:"width: 100%;"}),p(F),p(w);var K=e(w,2);G(K,{id:"JSON-object",children:(a,h)=>{var t=et();s(a,t)},$$slots:{default:!0}});var P=e(K,4),Me=e(v(P));We(Me,{visited:!0,href:"https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669115",children:(a,h)=>{r();var t=l("документации подсказок Дадаты по ФИО:");s(a,t)},$$slots:{default:!0}}),r(),p(P);var z=e(P,2);g(z,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(a,h)=>{r();var t=l();t.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7
}`,s(a,t)},$$slots:{default:!0}});var k=e(z,6),H=v(k),Ce=v(H);f(Ce,{src:"https://habrastorage.org/getpro/habr/upload_files/acd/1a0/b3e/acd1a0b3e42086178942fcc0c0fd8d1b.png",style:"width: 100%;"}),p(H),p(k);var L=e(k,8),Q=v(L),Be=v(Q);f(Be,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/876/d5f/5df/876d5f5df458e26a565517291b9c08f5.png",style:"width: 100%;"}),p(Q),p(L);var O=e(L,4),W=v(O),Ee=v(W);f(Ee,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/bfe/c50/765/bfec507654e0e328a5260abae1a63928.png",style:"width: 100%;"}),p(W),p(O);var S=e(O,6),X=v(S),Ae=v(X);f(Ae,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/2db/ef1/434/2dbef14341056172d3815e69b7f0772b.png",style:"width: 100%;"}),p(X),p(S);var Y=e(S,4);b(Y,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=tt(),n=y(t);u(n,{children:(d,m)=>{r();var o=l("query — строка, по которой ищем (то, что пользователь вбил в GUI);");s(d,o)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(d,m)=>{r();var o=l("count — количество подсказок в ответе (в Дадате этот параметр зашит в форму, всегда возвращается 7 подсказок. Но если дергать подсказки напрямую, значение можно менять!)");s(d,o)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}});var J=e(Y,4),Z=v(J),qe=v(Z);f(qe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/404/210/27a/40421027ad8962083a263742db86b2e2.png",style:"width: 100%;"}),p(Z),p(J);var N=e(J,4),ee=v(N),Ie=v(ee);f(Ie,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/fe9/c45/523/fe9c45523dd56e5f240b7f1bdf267ecf.png",style:"width: 100%;"}),p(ee),p(N);var te=e(N,16);Se(te,{zebra:!0,headers:[{key:"name",value:"Так правильно"},{key:"right",value:"Так тоже правильно"}],rows:U});var se=e(te,8);g(se,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(a,h)=>{r();var t=l();t.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7
}`,s(a,t)},$$slots:{default:!0}});var ae=e(se,4);b(ae,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=st(),n=y(t);u(n,{children:(d,m)=>{r();var o=l("Обратиться к свойству объекта;");s(d,o)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(d,m)=>{r();var o=l("Получить значение по ключу.");s(d,o)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}});var M=e(ae,2),re=v(M),Ve=v(re);f(Ve,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/571/394/c65/571394c65e5f9992310a329cad1df6c3.png",style:"width: 100%;"}),p(re),p(M);var C=e(M,4),le=v(C),Ge=v(le);f(Ge,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a17/d1f/8d3/a17d1f8d358046158dc484d8490eb993.png",style:"width: 100%;"}),p(le),p(C);var de=e(C,8);b(de,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=at(),n=y(t);u(n,{children:(d,m)=>{r();var o=l("Свойства — описывают, ЧТО мы создаем.");s(d,o)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(d,m)=>{r();var o=l("Методы — что объект умеет ДЕЛАТЬ.");s(d,o)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}});var oe=e(de,4);b(oe,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=rt(),n=y(t);u(n,{children:(d,m)=>{r();var o=l("Перечислить 10 разных переменных — модель, номер, цвет, пробег...");s(d,o)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(d,m)=>{r();var o=l("Создать один объект, где будут все эти свойства.");s(d,o)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}});var B=e(oe,4),ie=v(B),Ue=v(ie);f(Ue,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/74e/19e/aea/74e19eaea84e2ed0ca70a8dccd97c42b.png",style:"width: 100%;"}),p(ie),p(B);var ve=e(B,8);g(ve,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(a,h)=>{r();var t=l();t.nodeValue=`var cat = {
name: “Pussy”,
year: 1,
sleep: function() {
// sleeping code
}
}`,s(a,t)},$$slots:{default:!0}});var E=e(ve,2),pe=v(E),je=v(pe);f(je,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/e54/411/117/e54411117536be81e8adbdc73a022897.png",style:"width: 100%;"}),p(pe),p(E);var ne=e(E,4);b(ne,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=lt(),n=y(t);u(n,{children:(d,m)=>{r();var o=l("Свойства — name, year (что это за кошечка)");s(d,o)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(d,m)=>{r();var o=l("Функции — sleep (что она умеет делать, описание поведения)");s(d,o)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}});var ce=e(ne,8);g(ce,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(a,h)=>{r();var t=l();t.nodeValue=`{
name: “Pussy”,
year: 1,
}
`,s(a,t)},$$slots:{default:!0}});var ue=e(ce,10);b(ue,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=dt(),n=y(t);u(n,{children:(o,i)=>{r();var _=l("client_fio (в коде это свойство fio объекта client)");s(o,_)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(o,i)=>{r();var _=l("kitty_name (в коде это свойство name объекта cat)");s(o,_)},$$slots:{default:!0}});var d=e($,2);u(d,{children:(o,i)=>{r();var _=l("car_model (в коде это свойство model объекта car)");s(o,_)},$$slots:{default:!0}});var m=e(d,2);u(m,{children:(o,i)=>{r();var _=l("…");s(o,_)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}});var A=e(ue,4),$e=v(A),De=v($e);f(De,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a27/55f/745/a2755f74538cb927c9117a876c44232d.png",style:"width: 100%;"}),p($e),p(A);var _e=e(A,10);b(_e,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=ot(),n=y(t);u(n,{children:(i,_)=>{r();var c=l("Число");s(i,c)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(i,_)=>{r();var c=l("строка");s(i,c)},$$slots:{default:!0}});var d=e($,2);u(d,{children:(i,_)=>{r();var c=l("массив");s(i,c)},$$slots:{default:!0}});var m=e(d,2);u(m,{children:(i,_)=>{r();var c=l("другой объект");s(i,c)},$$slots:{default:!0}});var o=e(m,2);u(o,{children:(i,_)=>{r();var c=l("…");s(i,c)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}});var he=e(_e,4);G(he,{id:"JSON-array",children:(a,h)=>{var t=it();s(a,t)},$$slots:{default:!0}});var me=e(he,6);g(me,{code:'[ "MALE", "FEMALE" ]',hideCopyButton:!0,showMoreLess:!1});var q=e(me,4),fe=v(q),Re=v(fe);f(Re,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/5b1/c5f/800/5b1c5f800d9c612a1b27e87be3cc0297.png",style:"width: 100%;"}),p(fe),p(q);var I=e(q,4),xe=v(I),Te=v(xe);f(Te,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/f7b/4b1/af8/f7b4b1af8f617aa9ca89fe15124863ed.png",style:"width: 100%;"}),p(xe),p(I);var V=e(I,4),ge=v(V),Fe=v(ge);f(Fe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/760/c8f/f7a/760c8ff7ab4e88155efae8faeb46b689.png",style:"width: 100%;"}),p(ge),p(V);var ye=e(V,8);g(ye,{code:"[ 1, 5, 10, 33 ]",hideCopyButton:!0,showMoreLess:!1});var be=e(ye,4);g(be,{code:'[ "MALE", "FEMALE" ]',hideCopyButton:!0,showMoreLess:!1});var we=e(be,4);g(we,{code:'[ 1, "Андрюшка",  10, 33 ]',hideCopyButton:!0,showMoreLess:!1});var Pe=e(we,6);g(Pe,{code:'[1, {a:1, b:2}, "такой вот массивчик"]',hideCopyButton:!0,showMoreLess:!1});var ke=e(Pe,4);g(ke,{type:"multi",hideCopyButton:!0,children:(a,h)=>{r();var t=l();t.nodeValue=`[
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
]`,s(a,t)},$$slots:{default:!0}});var Le=e(ke,6);g(Le,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(a,h)=>{r();var t=l();t.nodeValue=`{
"query": "Виктор Иван",
"count": 7,
"parts": ["NAME", "SURNAME"]
}`,s(a,t)},$$slots:{default:!0}});var Ke=e(Le,8);b(Ke,{style:"margin-left: 3.5em;",children:(a,h)=>{var t=vt(),n=y(t);u(n,{children:(i,_)=>{r();var c=l("числа");s(i,c)},$$slots:{default:!0}});var $=e(n,2);u($,{children:(i,_)=>{r();var c=l("строки");s(i,c)},$$slots:{default:!0}});var d=e($,2);u(d,{children:(i,_)=>{r();var c=l("другие массивы");s(i,c)},$$slots:{default:!0}});var m=e(d,2);u(m,{children:(i,_)=>{r();var c=l("объекты");s(i,c)},$$slots:{default:!0}});var o=e(m,2);u(o,{children:(i,_)=>{r();var c=l("смесь из всего вышеназванного");s(i,c)},$$slots:{default:!0}}),s(a,t)},$$slots:{default:!0}}),s(Je,j)}export{wt as component};
