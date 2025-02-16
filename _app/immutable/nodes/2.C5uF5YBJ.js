import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{T as e,U as y,J as p,V as r,K as v}from"../chunks/BHzwcRHV.js";import{t as m,a as s,b as a}from"../chunks/C3vxQsq0.js";import"../chunks/xq_XNeMB.js";import{O as x}from"../chunks/D2_OJww9.js";import{I as f}from"../chunks/DQUwKkOi.js";import{O as Ue}from"../chunks/Do0dBBFC.js";import{C as g}from"../chunks/DvCjHUHn.js";import{D as je}from"../chunks/CPySDG5x.js";import{L as c}from"../chunks/Dy8ygWLA.js";var De=m("<!> <!> <!> <!> <!>",1),Te=m("<!> <!>",1),Fe=m("<!> <!>",1),Ke=m("<!> <!>",1),Re=m("<!> <!>",1),ze=m("<!> <!>",1),He=m("<!> <!> <!> <!>",1),Qe=m("<!> <!> <!> <!> <!>",1),We=m("<!> <!> <!> <!> <!>",1),Xe=m('<h1 class="svelte-oir1bt">Что такое JSON</h1> <p class="svelte-oir1bt">JSON (англ. JavaScript Object Notation) — это формат данных, который в основном используется для хранения и передачи данных, в частности между сервером и веб-приложением. Он широко применяется для представления структурированных данных.</p> <h2 id="JSON" class="svelte-oir1bt">Как устроен JSON</h2> <p class="svelte-oir1bt">В качестве значений в JSON могут быть использованы:</p> <!> <p class="svelte-oir1bt">Я думаю, с простыми значениями вопросов не возникнет, поэтому разберем массивы и объекты.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <h2 id="JSON-object" class="svelte-oir1bt">JSON-объект</h2> <h3>Как устроен</h3> <p class="svelte-oir1bt">Возьмем пример из <!>.</p> <!> <p class="svelte-oir1bt">И разберемся, что означает эта запись.</p> <p class="svelte-oir1bt">Объект заключен в фигурные скобки &lbrace;&rbrace;</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">JSON-объект — это неупорядоченное множество пар «ключ:значение».</p> <p class="svelte-oir1bt">Ключ — это название параметра, который мы передаем серверу. Он служит маркером для принимающей запрос системы: «смотри, здесь у меня значение такого-то параметра!». А иначе как система поймет, где что? Ей нужна подсказка!</p> <p class="svelte-oir1bt">Вот, например, «Виктор Иван» — это что? Ищем описание параметра «query» в документации — ага, да это же запрос для подсказок!</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Это как если бы мы вбили строку «Виктор Иван» в GUI (графическом интерфейсе пользователя):</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Когда пользователь начинает вводить данные в формочку, то сразу видит результат — появляется список подсказок. Это значит, что разработчик прописал в коде условие — делать некое действие на каждый ввод символа в это поле. Какое действие? Можно увидеть через f12.</p> <p class="svelte-oir1bt">Открываем вкладку Network, вбиваем «Виктор Иван» и находим запрос, который при этом уходит на сервер. Ого, да это тот самый пример, что мы разбираем!</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Клиент передает серверу запрос в JSON-формате. Внутри два параметра, две пары «ключ-значение»:</p> <!> <p class="svelte-oir1bt">Пары «ключ-значение» разделены запятыми:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Строки берем в кавычки, числа нет:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Конечно, внутри может быть не только строка или число. Это может быть и другой объект! Или массив... Или объект в массиве, массив в объекте... Любое количество уровней вложенности =))</p> <p class="svelte-oir1bt">Объект, массив, число, булево значение (true / false) — если у нас НЕ строка, кавычки не нужны. Но в любом случае это будет значение какого-то ключа:</p> ТАБЛИЦА <p class="svelte-oir1bt">Переносы строк делать необязательно. Вообще пробелы и переносы строк нужны только человеку для читабельности, система поймет и без них:</p> ТАБЛИЦА <p class="svelte-oir1bt">Ключ — ВСЕГДА строка, но мы все равно берем его в кавычки. В JavaScript этого можно не делать, в JSON нельзя.</p> ТАБЛИЦА <p class="svelte-oir1bt">По крайней мере, если вы работаете с простыми значениями ключей, а несколько слов записываете в верблюжьемРегистре или в змеином_регистре. Если вы хотите написать в ключе несколько слов через пробел, ключ нужно взять в кавычки.</p> ТАБЛИЦА <p class="svelte-oir1bt">И все же я рекомендую использовать простые названия ключей, или использовать snake_case.</p> <p class="svelte-oir1bt">Писать ключи можно в любом порядке. Ведь JSON-объект — это <u>неупорядоченное</u> множество пар «ключ:значение».</p> <!> <p class="svelte-oir1bt">Очень важно это понимать, и тестировать! Принимающая запрос система должна ориентировать на название ключей в запросе, а не на порядок их следования. Ключевое слово «должна» )) Хотя знаю примеры, когда от перестановки ключей местами всё ломалось, ведь «первым должен идти запрос, а не count!».</p> <h3>Ключ или свойство?</h3> <p class="svelte-oir1bt">Вот у нас есть JSON-объект:</p> <!> <p class="svelte-oir1bt">Что такое «query»? Если я хочу к нему обратиться, как мне это сказать? Есть 2 варианта, и оба правильные:</p> <!> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">То есть «query» можно назвать как ключом, так и свойством. А как правильно то?</p> <div style="text-align: center;  margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Правильно и так, и так! Просто есть разные определения объекта:</p> <h3>Объект</h3> <p class="svelte-oir1bt">В JS объект — это именно объект. У которого есть набор свойств и методов:</p> <!> <p class="svelte-oir1bt">То есть если мы хотим создать машину, есть два пути:</p> <!> <p class="svelte-oir1bt">Аналогично с кошечкой, собачкой, другом из записной книжки...</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Объектно-ориентированное программирование (ООП) предлагает мыслить не набором переменных, а объектом. Хотя бы потому, что это логичнее. Переменных в коде будет много, как понять, какие из них взаимосвязаны?</p> <p class="svelte-oir1bt">Вот если я создаю машину, сколько переменных мне надо заполнить? А если меняю данные? А если удаляю? Когда переменные разбросаны по коду, можно забыть про какую-то и получить ошибку в интерфейсе. А если у нас есть цельный объект, всегда можно посмотреть, какие у него есть свойства и методы.</p> <p class="svelte-oir1bt">Например, создадим кошечку:</p> <!> <div style="text-align: center;  margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">В объекте cat есть:</p> <!> <p class="svelte-oir1bt">По коду сразу видно, что у кошечки есть имя и возраст, она умеет спать. Если разработчик решит добавить новые свойства или методы, он дополнит этот объект, и снова всё в одном месте.</p> <p class="svelte-oir1bt">Если потом нужно будет получить информацию по кошечке, разработчик сделает REST-метод getByID, searchKitty, или какой-то другой. А в нем будет возвращать свойства объекта.</p> <p class="svelte-oir1bt">То есть метод вернет</p> <!> <p class="svelte-oir1bt">И при использовании имени вполне уместно говорить «обратиться к свойству объекта». Это ведь объект (кошечка), и его свойства!</p> <h3>Объект</h3> <p class="svelte-oir1bt">Второе определение объекта — неупорядоченное множество пар ключ:значение, заключенное в фигурные скобки &lbrace;&rbrace;.</p> <p class="svelte-oir1bt">Оно применимо тогда, когда внутри фигурных скобок приходит не конкретный целостный объект, а просто набор полей. Они могут быть связаны между собой, а могут относится к совершенно разным объектам внутри кода:</p> <!> <p class="svelte-oir1bt">В таком случае логично называть эти параметры именно ключами — мы хотим получить значение по ключу.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Но в любом случае, и «ключ», и «свойство» будет правильно. Не пугайтесь, если в одной книге / статье / видео увидели одно, в другой другое... Это просто разные трактовки.</p> <h3>Итого</h3> <p class="svelte-oir1bt">Json-объект — это неупорядоченное множество пар «ключ:значение», заключённое в фигурные скобки «&lbrace;  &rbrace;». Ключ описывается строкой, между ним и значением стоит символ «:». Пары ключ-значение отделяются друг от друга запятыми.</p> <p class="svelte-oir1bt">Значения ключа могут быть любыми:</p> <!> <p class="svelte-oir1bt">И только строку мы берем в кавычки!</p> <h2 id="JSON-array" class="svelte-oir1bt">JSON-массив</h2> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Как устроен</span></p> <p class="svelte-oir1bt">Давайте снова начнем с примера. Это массив:</p> <!> <p class="svelte-oir1bt">Массив заключен в квадратные скобки []</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Внутри квадратных скобок идет набор значений. Тут нет ключей, как в объекте, поэтому обращаться к массиву можно только по номеру элемента. И поэтому в случае массива менять местами данные внутри <u>нельзя</u>. Это упорядоченное множество значений.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt">Значения разделены запятыми:</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Значения внутри</span></p> <p class="svelte-oir1bt">Внутри массива может быть все, что угодно:</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Цифры</span></p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Строки</span></p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Смесь</span></p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Объекты</span></p> <p class="svelte-oir1bt">Да, а почему бы и нет:</p> <!> <p class="svelte-oir1bt">Или даже что-то более сложное. Вот пример ответа подсказок из Дадаты:</p> <!> <p class="svelte-oir1bt">Система возвращает массив подсказок. Сколько запросили в параметре count, столько и получили. Каждая подсказка — объект, внутри которого еще один объект. И это далеко не самая сложная структура! Уровней вложенности может быть сколько угодно — массив в массиве, который внутри объекта, который внутри массива, который внутри объекта...</p> <p class="svelte-oir1bt">Ну и, конечно, можно и наоборот, передать массив в объекте. Вот пример запроса в подсказки:</p> <!> <h3>Итого</h3> <p class="svelte-oir1bt">Массив — это просто набор значений, разделенных запятыми. Находится внутри квадратных скобок [].</p> <p class="svelte-oir1bt">А вот внутри него может быть все, что угодно:</p> <!>',1);function pt(me){const xe=[{id:"a",name:"Виктор Иван",right:{query:"Виктор Иван",count:7}}];var G=Xe(),U=e(y(G),8);x(U,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=De(),u=y(t);c(u,{children:(o,$)=>{r();var n=a("JSON-объект");s(o,n)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(o,$)=>{r();var n=a("Массив");s(o,n)},$$slots:{default:!0}});var d=e(_,2);c(d,{children:(o,$)=>{r();var n=a("Число (целое или вещественное)");s(o,n)},$$slots:{default:!0}});var h=e(d,2);c(h,{children:(o,$)=>{r();var n=a("Литералы true (логическое значение «истина»), false (логическое значение «ложь») и null");s(o,n)},$$slots:{default:!0}});var l=e(h,2);c(l,{children:(o,$)=>{r();var n=a("Строка");s(o,n)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var w=e(U,4),j=p(w),we=p(j);f(we,{src:"https://images-cdn.9gag.com/photo/aGdOG6w_700b.jpg",style:"width: 100%;"}),v(j),v(w);var P=e(w,6),Pe=e(p(P));Ue(Pe,{visited:!0,href:"https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669115",children:(i,b)=>{r();var t=a("документации подсказок Дадаты по ФИО:");s(i,t)},$$slots:{default:!0}}),r(),v(P);var D=e(P,2);g(D,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(i,b)=>{r();var t=a();t.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7
}`,s(i,t)},$$slots:{default:!0}});var L=e(D,6),T=p(L),Le=p(T);f(Le,{src:"https://habrastorage.org/getpro/habr/upload_files/acd/1a0/b3e/acd1a0b3e42086178942fcc0c0fd8d1b.png",style:"width: 100%;"}),v(T),v(L);var k=e(L,8),F=p(k),ke=p(F);f(ke,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/876/d5f/5df/876d5f5df458e26a565517291b9c08f5.png",style:"width: 100%;"}),v(F),v(k);var O=e(k,4),K=p(O),Oe=p(K);f(Oe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/bfe/c50/765/bfec507654e0e328a5260abae1a63928.png",style:"width: 100%;"}),v(K),v(O);var S=e(O,6),R=p(S),Se=p(R);f(Se,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/2db/ef1/434/2dbef14341056172d3815e69b7f0772b.png",style:"width: 100%;"}),v(R),v(S);var z=e(S,4);x(z,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=Te(),u=y(t);c(u,{children:(d,h)=>{r();var l=a("query — строка, по которой ищем (то, что пользователь вбил в GUI);");s(d,l)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(d,h)=>{r();var l=a("count — количество подсказок в ответе (в Дадате этот параметр зашит в форму, всегда возвращается 7 подсказок. Но если дергать подсказки напрямую, значение можно менять!)");s(d,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var J=e(z,4),H=p(J),Je=p(H);f(Je,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/404/210/27a/40421027ad8962083a263742db86b2e2.png",style:"width: 100%;"}),v(H),v(J);var M=e(J,4),Q=p(M),Me=p(Q);f(Me,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/fe9/c45/523/fe9c45523dd56e5f240b7f1bdf267ecf.png",style:"width: 100%;"}),v(Q),v(M);var W=e(M,16);je(W,{zebra:!0,headers:[{key:"name",value:"Так правильно"},{key:"right",value:"Так тоже правильно"}],rows:xe});var X=e(W,8);g(X,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(i,b)=>{r();var t=a();t.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7
}`,s(i,t)},$$slots:{default:!0}});var Y=e(X,4);x(Y,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=Fe(),u=y(t);c(u,{children:(d,h)=>{r();var l=a("Обратиться к свойству объекта;");s(d,l)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(d,h)=>{r();var l=a("Получить значение по ключу.");s(d,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var N=e(Y,2),Z=p(N),Ne=p(Z);f(Ne,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/571/394/c65/571394c65e5f9992310a329cad1df6c3.png",style:"width: 100%;"}),v(Z),v(N);var C=e(N,4),ee=p(C),Ce=p(ee);f(Ce,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a17/d1f/8d3/a17d1f8d358046158dc484d8490eb993.png",style:"width: 100%;"}),v(ee),v(C);var te=e(C,8);x(te,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=Ke(),u=y(t);c(u,{children:(d,h)=>{r();var l=a("Свойства — описывают, ЧТО мы создаем.");s(d,l)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(d,h)=>{r();var l=a("Методы — что объект умеет ДЕЛАТЬ.");s(d,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var se=e(te,4);x(se,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=Re(),u=y(t);c(u,{children:(d,h)=>{r();var l=a("Перечислить 10 разных переменных — модель, номер, цвет, пробег...");s(d,l)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(d,h)=>{r();var l=a("Создать один объект, где будут все эти свойства.");s(d,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var B=e(se,4),re=p(B),Be=p(re);f(Be,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/74e/19e/aea/74e19eaea84e2ed0ca70a8dccd97c42b.png",style:"width: 100%;"}),v(re),v(B);var ae=e(B,8);g(ae,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(i,b)=>{r();var t=a();t.nodeValue=`var cat = {
name: “Pussy”,
year: 1,
sleep: function() {
// sleeping code
}
}`,s(i,t)},$$slots:{default:!0}});var E=e(ae,2),le=p(E),Ee=p(le);f(Ee,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/e54/411/117/e54411117536be81e8adbdc73a022897.png",style:"width: 100%;"}),v(le),v(E);var oe=e(E,4);x(oe,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=ze(),u=y(t);c(u,{children:(d,h)=>{r();var l=a("Свойства — name, year (что это за кошечка)");s(d,l)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(d,h)=>{r();var l=a("Функции — sleep (что она умеет делать, описание поведения)");s(d,l)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var ie=e(oe,8);g(ie,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(i,b)=>{r();var t=a();t.nodeValue=`{
name: “Pussy”,
year: 1,
}
`,s(i,t)},$$slots:{default:!0}});var de=e(ie,10);x(de,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=He(),u=y(t);c(u,{children:(l,o)=>{r();var $=a("client_fio (в коде это свойство fio объекта client)");s(l,$)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(l,o)=>{r();var $=a("kitty_name (в коде это свойство name объекта cat)");s(l,$)},$$slots:{default:!0}});var d=e(_,2);c(d,{children:(l,o)=>{r();var $=a("car_model (в коде это свойство model объекта car)");s(l,$)},$$slots:{default:!0}});var h=e(d,2);c(h,{children:(l,o)=>{r();var $=a("…");s(l,$)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var A=e(de,4),pe=p(A),Ae=p(pe);f(Ae,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a27/55f/745/a2755f74538cb927c9117a876c44232d.png",style:"width: 100%;"}),v(pe),v(A);var ve=e(A,10);x(ve,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=Qe(),u=y(t);c(u,{children:(o,$)=>{r();var n=a("Число");s(o,n)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(o,$)=>{r();var n=a("строка");s(o,n)},$$slots:{default:!0}});var d=e(_,2);c(d,{children:(o,$)=>{r();var n=a("массив");s(o,n)},$$slots:{default:!0}});var h=e(d,2);c(h,{children:(o,$)=>{r();var n=a("другой объект");s(o,n)},$$slots:{default:!0}});var l=e(h,2);c(l,{children:(o,$)=>{r();var n=a("…");s(o,n)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}});var ne=e(ve,10);g(ne,{code:'[ "MALE", "FEMALE" ]',hideCopyButton:!0,showMoreLess:!1});var q=e(ne,4),ce=p(q),qe=p(ce);f(qe,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/5b1/c5f/800/5b1c5f800d9c612a1b27e87be3cc0297.png",style:"width: 100%;"}),v(ce),v(q);var I=e(q,4),ue=p(I),Ie=p(ue);f(Ie,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/f7b/4b1/af8/f7b4b1af8f617aa9ca89fe15124863ed.png",style:"width: 100%;"}),v(ue),v(I);var V=e(I,4),$e=p(V),Ve=p($e);f(Ve,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/760/c8f/f7a/760c8ff7ab4e88155efae8faeb46b689.png",style:"width: 100%;"}),v($e),v(V);var _e=e(V,8);g(_e,{code:"[ 1, 5, 10, 33 ]",hideCopyButton:!0,showMoreLess:!1});var he=e(_e,4);g(he,{code:'[ "MALE", "FEMALE" ]',hideCopyButton:!0,showMoreLess:!1});var be=e(he,4);g(be,{code:'[ 1, "Андрюшка",  10, 33 ]',hideCopyButton:!0,showMoreLess:!1});var fe=e(be,6);g(fe,{code:'[1, {a:1, b:2}, "такой вот массивчик"]',hideCopyButton:!0,showMoreLess:!1});var ge=e(fe,4);g(ge,{type:"multi",hideCopyButton:!0,children:(i,b)=>{r();var t=a();t.nodeValue=`[
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
]`,s(i,t)},$$slots:{default:!0}});var ye=e(ge,6);g(ye,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(i,b)=>{r();var t=a();t.nodeValue=`{
"query": "Виктор Иван",
"count": 7,
"parts": ["NAME", "SURNAME"]
}`,s(i,t)},$$slots:{default:!0}});var Ge=e(ye,8);x(Ge,{style:"margin-left: 3.5em;",children:(i,b)=>{var t=We(),u=y(t);c(u,{children:(o,$)=>{r();var n=a("числа");s(o,n)},$$slots:{default:!0}});var _=e(u,2);c(_,{children:(o,$)=>{r();var n=a("строки");s(o,n)},$$slots:{default:!0}});var d=e(_,2);c(d,{children:(o,$)=>{r();var n=a("другие массивы");s(o,n)},$$slots:{default:!0}});var h=e(d,2);c(h,{children:(o,$)=>{r();var n=a("объекты");s(o,n)},$$slots:{default:!0}});var l=e(h,2);c(l,{children:(o,$)=>{r();var n=a("смесь из всего вышеназванного");s(o,n)},$$slots:{default:!0}}),s(i,t)},$$slots:{default:!0}}),s(me,G)}export{pt as component};
