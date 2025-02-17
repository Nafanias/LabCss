import{t as d,a as r,b as l}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{L as t,M as j,J as c,N as a,K as $}from"../chunks/TTrIPi8I.js";import{A as u}from"../chunks/5ZNi9sMP.js";import{O as i}from"../chunks/-XsP_0nH.js";import{C as n}from"../chunks/DTaq0LnW.js";import{U as se}from"../chunks/DM70uAt2.js";import{L as h}from"../chunks/DF7_RIey.js";var ve=d('<h2 class="svelte-1dzqqg5">1. Парсинг JSON в JavaScript</h2>'),ce=d("<!> <!>",1),$e=d('<h2 class="svelte-1dzqqg5">2. Stringifying JavaScript объектов</h2>'),ue=d('<h2 class="svelte-1dzqqg5">3. Модификация данных JSON</h2>'),ge=d('<h2 class="svelte-1dzqqg5">4. Фильтрация и преобразование данных JSON</h2>'),he=d('<h2 class="svelte-1dzqqg5">5. Сериализация объектов в формат JSON</h2>'),fe=d('<h2 class="svelte-1dzqqg5">6. Настройка сериализации JSON</h2>'),_e=d('<h2 class="svelte-1dzqqg5">7. Использование JSON с API</h2>'),qe=d('<span class="bold svelte-1dzqqg5">Обработка ошибок:</span> Всегда используйте try...catch для обработки ошибок при парсинге JSON.',1),Se=d('<span class="bold svelte-1dzqqg5">Используйте JSON Schema:</span> Валидируйте структуру JSON с помощью JSON Schema, чтобы обеспечить целостность данных.',1),Je=d('<span class="bold svelte-1dzqqg5">Минимизируйте данные:</span> Избегайте ненужных данных в JSON. Используйте функцию замены JSON.stringify() для исключения конфиденциальной информации, такой как пароли.',1),me=d('<span class="bold svelte-1dzqqg5">Используйте библиотеки:</span> Для манипуляции с JSON в большом масштабе библиотеки, такие как Lodash, могут помочь упростить задачи, такие как глубокое клонирование или слияние объектов JSON.',1),Oe=d("<!> <!> <!> <!>",1),Ne=d('<h1 class="svelte-1dzqqg5">Json в JavaScript</h1> <p class="svelte-1dzqqg5">Примечание: в Python данные JSON обычно представлены в виде строки.</p> <!> <p class="svelte-1dzqqg5">Парсинг JSON — это процесс преобразования строки JSON в нативный <!>. JavaScript предоставляет метод <!> для этой цели.</p> <!> <p class="svelte-1dzqqg5">Результат</p> <!> <p class="svelte-1dzqqg5"><!></p> <p class="svelte-1dzqqg5"><span class="bold svelte-1dzqqg5">Обработка исключений при парсинге JSON</span></p> <!> <p class="svelte-1dzqqg5">В этом примере отсутствующая фигурная скобка вызывает ошибку. Блок catch помогает вам элегантно обработать такие проблемы.</p> <!> <p class="svelte-1dzqqg5">После того как вы распарсили JSON и преобразовали его в объект JavaScript, вы можете захотеть отправить его обратно в виде строки JSON. Это делается с помощью <!>.</p> <!> <p class="svelte-1dzqqg5">Результат</p> <!> <p class="svelte-1dzqqg5">Это преобразует объект user в строку, которую можно отправить по сети или сохранить в файл.</p> <!> <p class="svelte-1dzqqg5">После того как вы распарсили <!> в <!>, вы можете легко изменить его свойства или добавить новые.</p> <!> <p class="svelte-1dzqqg5">Результат</p> <!> <p class="svelte-1dzqqg5">Здесь мы добавляем новое свойство (profession) к распарсенному объекту JSON и преобразуем его обратно в строку JSON с помощью JSON.stringify().</p> <!> <p class="svelte-1dzqqg5">Вам часто может понадобиться фильтровать или преобразовывать данные, содержащиеся в объектах или массивах JSON. Методы массивов JavaScript, такие как <!> , <!> и <!>, идеально подходят для этой задачи.</p> <p class="svelte-1dzqqg5"><span class="bold svelte-1dzqqg5">Фильтрация данных JSON</span></p> <p class="svelte-1dzqqg5">Предположим, у вас есть массив объектов пользователей, и вы хотите отфильтровать пользователей, старше 30 лет.</p> <!> <p class="svelte-1dzqqg5">В этом примере метод filter() используется для создания нового массива, который включает только пользователей старше 30 лет.</p> <!> <p class="svelte-1dzqqg5">Сериализация — это процесс преобразования объекта JavaScript в строку JSON. Это обычно делается при отправке данных с клиента на сервер.</p> <!> <p class="svelte-1dzqqg5">Результат</p> <!> <p class="svelte-1dzqqg5">Это делает данные готовыми для передачи в формате JSON через HTTP-запросы или сохранения в системе хранения.</p> <!> <p class="svelte-1dzqqg5"><!> позволяет вам указать, какие свойства включать или исключать из строки JSON, используя функцию замены.</p> <!> <p class="svelte-1dzqqg5">Результат</p> <!> <p class="svelte-1dzqqg5">В этом примере поле пароля исключается из окончательной строки JSON.</p> <!> <p class="svelte-1dzqqg5">JSON является стандартным форматом для обмена данными с веб-API. <!> в позволяет легко отправлять и получать данные JSON.</p> <p class="svelte-1dzqqg5"><span class="bold svelte-1dzqqg5">Получение JSON из API:</span></p> <!> <p class="svelte-1dzqqg5">Это получает данные из примера API и выводит их в консоль.</p> <p class="svelte-1dzqqg5"><span class="bold svelte-1dzqqg5">Отправка JSON в API:</span></p> <!> <p class="svelte-1dzqqg5">В этом примере мы отправляем данные JSON в API с использованием метода POST.</p> <p class="svelte-1dzqqg5"><span class="bold svelte-1dzqqg5">Лучшие практики работы с JSON в JavaScript:</span></p> <!>',1);function Ae(te){var w=Ne(),b=t(j(w),4);u(b,{id:"parsingJavaScript",children:(s,o)=>{var e=ve();r(s,e)},$$slots:{default:!0}});var q=t(b,2),x=t(c(q));i(x,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(s,o)=>{a();var e=l("JavaScript объект");r(s,e)},$$slots:{default:!0}});var re=t(x,2);i(re,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-parse-method/",children:(s,o)=>{a();var e=l("JSON.parse()");r(s,e)},$$slots:{default:!0}}),a(),$(q);var k=t(q,2);n(k,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);
console.log(obj.name);`,r(s,e)},$$slots:{default:!0}});var A=t(k,4);n(A,{hideCopyButton:!0,code:"Ravi"});var S=t(A,2),ae=c(S);se(ae,{style:"margin-left: 3.5em;",children:(s,o)=>{var e=ce(),f=j(e);h(f,{children:(g,P)=>{a();var p=l("jsonData — это строка JSON.");r(g,p)},$$slots:{default:!0}});var _=t(f,2);h(_,{children:(g,P)=>{a();var p=l("Метод JSON.parse() преобразует её в объект JavaScript, и вы можете получить доступ к свойствам, таким как name и age.");r(g,p)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}}),$(S);var C=t(S,4);n(C,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25';

try {
    const obj = JSON.parse(json);
    console.log(obj.name);
} catch (error) {
    console.error("Error parsing JSON:", error);
}`,r(s,e)},$$slots:{default:!0}});var R=t(C,4);u(R,{id:"stringifyingJavaScript",children:(s,o)=>{var e=$e();r(s,e)},$$slots:{default:!0}});var J=t(R,2),oe=t(c(J));i(oe,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(s,o)=>{a();var e=l("JSON.stringify()");r(s,e)},$$slots:{default:!0}}),a(),$(J);var V=t(J,2);n(V,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`const user = {
    name: "Ravi",
    age: 25,
    profession: "Web Developer"
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,r(s,e)},$$slots:{default:!0}});var D=t(V,4);n(D,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var I=t(D,4);u(I,{id:"modifyingDataJavaScript",children:(s,o)=>{var e=ue();r(s,e)},$$slots:{default:!0}});var m=t(I,2),T=t(c(m));i(T,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-json-string/",children:(s,o)=>{a();var e=l("JSON строку");r(s,e)},$$slots:{default:!0}});var le=t(T,2);i(le,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(s,o)=>{a();var e=l("JavaScript объект");r(s,e)},$$slots:{default:!0}}),a(),$(m);var L=t(m,2);n(L,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);

obj.profession = "Web Developer";
console.log(JSON.stringify(obj));`,r(s,e)},$$slots:{default:!0}});var B=t(L,4);n(B,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var E=t(B,4);u(E,{id:"filteringATransformationJavaScript",children:(s,o)=>{var e=ge();r(s,e)},$$slots:{default:!0}});var O=t(E,2),W=t(c(O));i(W,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-filter-method/",children:(s,o)=>{a();var e=l("filter()");r(s,e)},$$slots:{default:!0}});var U=t(W,2);i(U,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-map-method/",children:(s,o)=>{a();var e=l("map()");r(s,e)},$$slots:{default:!0}});var ne=t(U,2);i(ne,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-reduce-method/",children:(s,o)=>{a();var e=l("reduce()");r(s,e)},$$slots:{default:!0}}),a(),$(O);var H=t(O,6);n(H,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`const users = [
    { "name": "Amit", "age": 24 },
    { "name": "Rahul", "age": 45 },
    { "name": "Priya", "age": 30 }
];

const olderThan30 = users.filter(user => user.age > 30);
console.log(olderThan30);`,r(s,e)},$$slots:{default:!0}});var K=t(H,4);u(K,{id:"SerializationJavaScript",children:(s,o)=>{var e=he();r(s,e)},$$slots:{default:!0}});var M=t(K,4);n(M,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`const user = {
    name: "Simran",
    age: 29
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,r(s,e)},$$slots:{default:!0}});var F=t(M,4);n(F,{hideCopyButton:!0,code:'{"name":"Simran","age":29}'});var G=t(F,4);u(G,{id:"CustomizingSerializationJavaScript",children:(s,o)=>{var e=fe();r(s,e)},$$slots:{default:!0}});var N=t(G,2),de=c(N);i(de,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(s,o)=>{a();var e=l("JSON.stringify()");r(s,e)},$$slots:{default:!0}}),a(),$(N);var Q=t(N,2);n(Q,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`const user = {
    name: "Jatin",
    age: 32,
    password: "123456"
};

const replacer = (key, value) => {
    if (key === "password") {
        return undefined; // Exclude password
    }
    return value;
};

const jsonS = JSON.stringify(user, replacer);
console.log(jsonS);`,r(s,e)},$$slots:{default:!0}});var X=t(Q,4);n(X,{hideCopyButton:!0,code:'{"name":"Jatin","age":32}'});var Y=t(X,4);u(Y,{id:"UsingApisJavaScript",children:(s,o)=>{var e=_e();r(s,e)},$$slots:{default:!0}});var z=t(Y,2),pe=t(c(z));i(pe,{visited:!0,href:"https://www.geeksforgeeks.org/how-to-master-json-in-javascript/",children:(s,o)=>{a();var e=l("JavaScript fetch() API");r(s,e)},$$slots:{default:!0}}),a(),$(z);var Z=t(z,4);n(Z,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`fetch('your-api-url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`,r(s,e)},$$slots:{default:!0}});var ee=t(Z,6);n(ee,{type:"multi",children:(s,o)=>{a();var e=l();e.nodeValue=`const pData = {
    name: "Ravi",
    age: 25
};

fetch('your-api-url', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(pData)  // Send JSON data
})
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));`,r(s,e)},$$slots:{default:!0}});var ie=t(ee,6);se(ie,{style:"margin-left: 3.5em;",children:(s,o)=>{var e=Oe(),f=j(e);h(f,{children:(p,y)=>{var v=qe();a(),r(p,v)},$$slots:{default:!0}});var _=t(f,2);h(_,{children:(p,y)=>{var v=Se();a(),r(p,v)},$$slots:{default:!0}});var g=t(_,2);h(g,{children:(p,y)=>{var v=Je();a(),r(p,v)},$$slots:{default:!0}});var P=t(g,2);h(P,{children:(p,y)=>{var v=me();a(),r(p,v)},$$slots:{default:!0}}),r(s,e)},$$slots:{default:!0}}),r(te,w)}export{Ae as component};
