import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{S as e,T as m,U as u,V as r,W as $}from"../chunks/DzN_8u2W.js";import{t as f,a as s,b as a}from"../chunks/Csmw85NY.js";import{A as P}from"../chunks/D7bYBdQZ.js";import{O as de}from"../chunks/C1Zs-c0d.js";import{O as x,L as v}from"../chunks/DQBO2hxt.js";import{I as b}from"../chunks/ZS0o_b5W.js";import{C as n}from"../chunks/DeHJi8eY.js";var fe=f("<!> <!> <!> <!>",1),ge=f('<h2 class="svelte-1gyo6pc">1. Данные написаны в виде пар «ключ:значение»</h2>'),me=f('<h2 class="svelte-1gyo6pc">2. Данные разделены запятыми</h2>'),Pe=f("<!> <!> <!> <!> <!>",1),be=f('<h2 class="svelte-1gyo6pc">3. Объект находится внутри фигурных скобок &lbrace;&rbrace;</h2>'),xe=f('<h2 class="svelte-1gyo6pc">4. Массив — внутри квадратных []</h2>'),we=f('<h2 class="svelte-1gyo6pc">Вывод</h2>'),Se=f("<!> <!> <!> <!> <!>",1),Le=f("<!> <!> <!> <!>",1),Oe=f('<h1 class="svelte-1gyo6pc">Well Formed JSON</h1> <p class="svelte-1gyo6pc">Разработчик сам решает, какой JSON будет считаться правильным, а какой нет. Но есть общие правила, которые нельзя нарушать. Наш JSON должен быть well formed, то есть синтаксически корректный.</p> <p class="svelte-1gyo6pc">Чтобы проверить JSON на синтаксис, можно использовать любой JSON Validator (так и гуглите). Я рекомендую сайт <!>. Там есть сам валидатор + описание типичных ошибок с примерами.</p> <p class="svelte-1gyo6pc">Но учтите, что парсеры внутри кода работают не по википедии или w3schools, а по RFC, стандарту. Так что если хотите изучить «каким должен быть JSON», то правильнее открывать RFC и искать там <!>. Однако простому тестировщику хватит набора типовых правил с w3schools, их и разберем.</p> <p class="svelte-1gyo6pc">Правила well formed JSON:</p> <!> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <!> <p class="svelte-1gyo6pc">Например, так:</p> <!> <p class="svelte-1gyo6pc">В JSON название ключа нужно брать в кавычки, в JavaScript не обязательно — он и так знает, что это строка. Если мы тестируем API, то там будет именно JSON, так что кавычки обычно нужны.</p> <p class="svelte-1gyo6pc">Но учтите, что это правило касается JSON-объекта. Потому что json может быть и числом, и строкой. То есть:</p> <!> <p class="svelte-1gyo6pc">Или</p> <!> <p class="svelte-1gyo6pc">Это тоже корректный json, хоть и не в виде пар «ключ:значение».</p> <p class="svelte-1gyo6pc">И вот если у вас по ТЗ именно json-объект на входе, попробуйте его сломать, не передав ключ. Ещё можно не передать значение, но это не совсем негативный тест — система может воспринимать это нормально, как пустой ввод.</p> <!> <p class="svelte-1gyo6pc">Пары «ключ:значение» в объекте разделяются запятыми. После последней пары запятая не нужна!</p> <p class="svelte-1gyo6pc"><b>Типичная ошибка:</b> поставили запятую в конце объекта:</p> <!> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-1gyo6pc">Это последствия копипасты. Взяли пример из документации, подставили в постман (ну или разработчик API подставил в код, который будет вызывать систему), а потом решили поменять поля местами.</p> <p class="svelte-1gyo6pc">В итоге было так:</p> <!> <p class="svelte-1gyo6pc">Смотрим на запрос — ну, query то важнее чем count, надо поменять их местами! Копипастим всю строку «"count": 7,», вставляем ниже. Перед ней запятую добавляем, а «лишнюю» убрать забываем. По крайней мере у меня это частая ошибка, когда я «кручу-верчу, местами поменять хочу».</p> <p class="svelte-1gyo6pc">Другой пример — когда мы добавляем в запрос новое поле. Примерный сценарий:</p> <!> <p class="svelte-1gyo6pc">Я на этот сценарий постоянно напарываюсь при тестировании перестановки полей. А ведь это нужно проверять! Хороший запрос должен быть как в математической присказке: «от перемены мест слагаемых сумма не меняется».</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-1gyo6pc">Не зря же определение json-объекта гласит, что «это <u>неупорядоченное</u> множество пар ключ:значение». Раз неупорядоченное — я могу передавать ключи в любом порядке. И сервер должен искать по запросу название ключа, а не обращаться к индексу элемента.</p> <p class="svelte-1gyo6pc">Разработчик, который будет взаимодействовать с API, тоже человек, который может ошибиться. И если система будет выдавать невразумительное сообщение об ошибке, можно долго думать, где конкретно ты налажал. Поэтому ошибки тоже тестируем.</p> <p class="svelte-1gyo6pc">Чтобы протестировать, как система обрабатывает «плохой json», замените запятую на точку с запятой:</p> <!> <p class="svelte-1gyo6pc">Или добавьте лишнюю запятую в конце запроса — эта ошибка будет встречаться чаще!</p> <!> <p class="svelte-1gyo6pc">Или пропустите запятую там, где она нужна:</p> <!> <p class="svelte-1gyo6pc">Аналогично с массивом. Данные внутри разделяются через запятую. Хотите попробовать сломать? Замените запятую на точку с запятой! Тогда система будет считать, что у вас не 5 значений, а 1 большое:</p> <!> <p class="svelte-1gyo6pc">*Я добавила комментарии внутри блока кода. Но учтите, что в JSON комментариев нет. Вообще. Так что если вы делаете запрос в Postman, не получится расставить комментарии у разных строчек в JSON-формате.</p> <!> <p class="svelte-1gyo6pc">Это объект:</p> <!> <p class="svelte-1gyo6pc">Чтобы сломать это условие, уберите одну фигурную скобку:</p> <!> <p class="svelte-1gyo6pc"></p> <!> <p class="svelte-1gyo6pc">Или попробуйте передать объект как массив:</p> <!> <p class="svelte-1gyo6pc">Ведь если система ждет от вас в запросе объект, то она будет искать фигурные скобки.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <!> <p class="svelte-1gyo6pc">Это массив:</p> <!> <p class="svelte-1gyo6pc">Чтобы сломать это условие, уберите одну квадратную скобку:</p> <!> <p class="svelte-1gyo6pc"></p> <!> <p class="svelte-1gyo6pc">Или попробуйте передать массив как объект, в фигурных скобках:</p> <!> <p class="svelte-1gyo6pc">Ведь если система ждет от вас в запросе массив, то она будет искать квадратные скобки.</p> <!> <p class="svelte-1gyo6pc">JSON (JavaScript Object Notation) — текстовый формат обмена данными, основанный на JavaScript. Легко читается человеком и машиной. Часто используется в REST API (чаще, чем XML).</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-1gyo6pc">Корректные значения JSON:</p> <!> <p class="svelte-1gyo6pc">При тестировании REST API чаще всего мы будем работать именно с объектами, что в запросе, что в ответе. Массивы тоже будут, но обычно внутри объектов.</p> <p class="svelte-1gyo6pc">Комментариев в JSON, увы, нет.</p> <p class="svelte-1gyo6pc">Правила well formed JSON:</p> <!>',1);function Ae(ce){var M=Oe(),w=e(m(M),4),ve=e(u(w));de(ve,{visited:!0,href:"https://www.w3schools.com/js/js_json_syntax.asp",children:(o,i)=>{r();var t=a("import");s(o,t)},$$slots:{default:!0}}),r(),$(w);var S=e(w,2),ne=e(u(S));de(ne,{visited:!0,href:"https://datatracker.ietf.org/doc/html/rfc7159#page-4",children:(o,i)=>{r();var t=a("JSON Grammar");s(o,t)},$$slots:{default:!0}}),r(),$(S);var B=e(S,4);x(B,{style:"margin-left: 3.5em;",children:(o,i)=>{var t=fe(),h=m(t);v(h,{children:(d,l)=>{r();var p=a("Данные написаны в виде пар «ключ:значение»");s(d,p)},$$slots:{default:!0}});var _=e(h,2);v(_,{children:(d,l)=>{r();var p=a("Данные разделены запятыми");s(d,p)},$$slots:{default:!0}});var y=e(_,2);v(y,{children:(d,l)=>{r();var p=a("Объект находится внутри фигурных скобок {}");s(d,p)},$$slots:{default:!0}});var g=e(y,2);v(g,{children:(d,l)=>{r();var p=a("Массив — внутри квадратных []");s(d,p)},$$slots:{default:!0}}),s(o,t)},$$slots:{default:!0}});var L=e(B,2),j=u(L),ie=u(j);b(ie,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/670/2bb/754/6702bb754535cfc309d67d148c12928c.png",style:"width: 100%;"}),$(j),$(L);var V=e(L,2);P(V,{id:"dataKeyValue",children:(o,i)=>{var t=ge();s(o,t)},$$slots:{default:!0}});var I=e(V,4);n(I,{code:'"name":"Ольга"',hideCopyButton:!0,showMoreLess:!1});var k=e(I,6);n(k,{code:"123",hideCopyButton:!0,showMoreLess:!1});var A=e(k,4);n(A,{code:'"Ольга"',hideCopyButton:!0,showMoreLess:!1});var q=e(A,6);P(q,{id:"Separation",children:(o,i)=>{var t=me();s(o,t)},$$slots:{default:!0}});var R=e(q,6);n(R,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,i)=>{r();var t=a();t.nodeValue=`{
  "query": "Виктор Иван",
  "count": 7,
}`,s(o,t)},$$slots:{default:!0}});var O=e(R,2),F=u(O),ue=u(F);b(ue,{src:"https://habrastorage.org/getpro/habr/upload_files/79f/1e6/28e/79f1e628e9052de5ca240b6f23e8c1b1.png",style:"width: 100%;"}),$(F),$(O);var T=e(O,6);n(T,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,i)=>{r();var t=a();t.nodeValue=`{
  "count": 7,
  "query": "Виктор Иван"
}`,s(o,t)},$$slots:{default:!0}});var E=e(T,6);x(E,{style:"margin-left: 3.5em;",children:(o,i)=>{var t=Pe(),h=m(t);v(h,{children:(l,p)=>{r();var c=a("У меня уже есть работающий запрос в Postman-е. Но в нем минимум полей.");s(l,c)},$$slots:{default:!0}});var _=e(h,2);v(_,{children:(l,p)=>{r();var c=a("Я его клонирую");s(l,c)},$$slots:{default:!0}});var y=e(_,2);v(y,{children:(l,p)=>{r();var c=a("Копирую из документации нужное мне поле. Оно в примере не последнее, так что идёт с запятой на конце.");s(l,c)},$$slots:{default:!0}});var g=e(y,2);v(g,{children:(l,p)=>{r();var c=a("Вставляю себе в конце запроса — в текущий конец добавляю запятую, потом вставляю новую строку.");s(l,c)},$$slots:{default:!0}});var d=e(g,2);v(d,{children:(l,p)=>{r();var c=a("Отправляю запрос — ой, ошибка! Из копипасты то запятую не убрала!");s(l,c)},$$slots:{default:!0}}),s(o,t)},$$slots:{default:!0}});var C=e(E,4),W=u(C),$e=u(W);b($e,{src:"https://habrastorage.org/getpro/habr/upload_files/5c8/324/d1d/5c8324d1d3a8e98eec2d14ea9b021acc.png",style:"width: 100%;"}),$(W),$(C);var G=e(C,8);n(G,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,i)=>{r();var t=a();t.nodeValue=`{
  "count": 7;
  "query": "Виктор Иван"
}`,s(o,t)},$$slots:{default:!0}});var K=e(G,4);n(K,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,i)=>{r();var t=a();t.nodeValue=`{
  "count": 7,
  "query": "Виктор Иван",
}`,s(o,t)},$$slots:{default:!0}});var U=e(K,4);n(U,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,i)=>{r();var t=a();t.nodeValue=`{
  "count": 7
  "query": "Виктор Иван"
}`,s(o,t)},$$slots:{default:!0}});var X=e(U,4);n(X,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,i)=>{r();var t=a();t.nodeValue=`
[1, 2, 3, 4, 5] <!-- корректный массив на 5 элементов* -->
[1; 2; 3; 4; 5] <!-- некорректный массив, так как такого разделителя быть не должно. Это может быть простой строкой, но тогда нужны кавычки -->!
`,s(o,t)},$$slots:{default:!0}});var z=e(X,4);P(z,{id:"object",children:(o,i)=>{var t=be();s(o,t)},$$slots:{default:!0}});var D=e(z,4);n(D,{code:"{a: 1, b: 2}",hideCopyButton:!0,showMoreLess:!1});var H=e(D,4);n(H,{code:"{a: 1, b: 2",hideCopyButton:!0,showMoreLess:!1});var Q=e(H,4);n(Q,{code:"a: 1, b: 2;}",hideCopyButton:!0,showMoreLess:!1});var Y=e(Q,4);n(Y,{code:"[ a: 1, b: 2 ]",hideCopyButton:!0,showMoreLess:!1});var J=e(Y,4),Z=u(J),he=u(Z);b(he,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/8d6/af6/6cc/8d6af66cc1822c72b050735bf0ab9c40.png",style:"width: 100%;"}),$(Z),$(J);var ee=e(J,2);P(ee,{id:"array",children:(o,i)=>{var t=xe();s(o,t)},$$slots:{default:!0}});var te=e(ee,4);n(te,{code:"[1, 2]",hideCopyButton:!0,showMoreLess:!1});var se=e(te,4);n(se,{code:"[1, 2",hideCopyButton:!0,showMoreLess:!1});var oe=e(se,4);n(oe,{code:"1, 2]",hideCopyButton:!0,showMoreLess:!1});var re=e(oe,4);n(re,{code:"{ 1, 2 }",hideCopyButton:!0,showMoreLess:!1});var le=e(re,4);P(le,{id:"output",children:(o,i)=>{var t=we();s(o,t)},$$slots:{default:!0}});var N=e(le,4),ae=u(N),_e=u(ae);b(_e,{src:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/c39/e9f/345/c39e9f3453f63e43c3f1b8d0a276f5b6.png",style:"width: 100%;"}),$(ae),$(N);var pe=e(N,4);x(pe,{style:"margin-left: 3.5em;",children:(o,i)=>{var t=Se(),h=m(t);v(h,{children:(l,p)=>{r();var c=a("JSON-объект — неупорядоченное множество пар «ключ:значение», заключённое в фигурные скобки «{ }».");s(l,c)},$$slots:{default:!0}});var _=e(h,2);v(_,{children:(l,p)=>{r();var c=a("Массив — упорядоченный набор значений, разделенных запятыми. Находится внутри квадратных скобок [].");s(l,c)},$$slots:{default:!0}});var y=e(_,2);v(y,{children:(l,p)=>{r();var c=a("Число (целое или вещественное).");s(l,c)},$$slots:{default:!0}});var g=e(y,2);v(g,{children:(l,p)=>{r();var c=a("Литералы true (логическое значение «истина»), false (логическое значение «ложь») и null.");s(l,c)},$$slots:{default:!0}});var d=e(g,2);v(d,{children:(l,p)=>{r();var c=a("Строка");s(l,c)},$$slots:{default:!0}}),s(o,t)},$$slots:{default:!0}});var ye=e(pe,8);x(ye,{style:"margin-left: 3.5em;",children:(o,i)=>{var t=Le(),h=m(t);v(h,{children:(d,l)=>{r();var p=a("Данные в объекте написаны в виде пар «ключ:значение»");s(d,p)},$$slots:{default:!0}});var _=e(h,2);v(_,{children:(d,l)=>{r();var p=a("Данные в объекте или массиве разделены запятыми");s(d,p)},$$slots:{default:!0}});var y=e(_,2);v(y,{children:(d,l)=>{r();var p=a("Объект находится внутри фигурных скобок {}");s(d,p)},$$slots:{default:!0}});var g=e(y,2);v(g,{children:(d,l)=>{r();var p=a("Массив — внутри квадратных []");s(d,p)},$$slots:{default:!0}}),s(o,t)},$$slots:{default:!0}}),s(ce,M)}export{Ae as component};
