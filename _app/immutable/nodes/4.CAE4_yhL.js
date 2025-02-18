import{t as p,a as o,b as n}from"../chunks/DfmwQWje.js";import"../chunks/Dj_7PSR_.js";import{s as t,f as b,c,n as s,r as $}from"../chunks/Dvl4aESe.js";import{A as u,C as l}from"../chunks/Bm4sU34b.js";import{O as d}from"../chunks/CZJ-uQMR.js";import{U as re}from"../chunks/Ckrl3c1B.js";import{L as f}from"../chunks/D3DoW5lt.js";var ve=p("<h2>1. Парсинг JSON в JavaScript</h2>"),ce=p("<!> <!>",1),$e=p("<h2>2. Stringifying JavaScript объектов</h2>"),ue=p("<h2>3. Модификация данных JSON</h2>"),he=p("<h2>4. Фильтрация и преобразование данных JSON</h2>"),fe=p("<h2>5. Сериализация объектов в формат JSON</h2>"),_e=p("<h2>6. Настройка сериализации JSON</h2>"),ge=p("<h2>7. Использование JSON с API</h2>"),Se=p('<span class="bold">Обработка ошибок:</span> Всегда используйте try...catch для обработки ошибок при парсинге JSON.',1),Je=p('<span class="bold">Используйте JSON Schema:</span> Валидируйте структуру JSON с помощью JSON Schema, чтобы обеспечить целостность данных.',1),me=p('<span class="bold">Минимизируйте данные:</span> Избегайте ненужных данных в JSON. Используйте функцию замены JSON.stringify() для исключения конфиденциальной информации, такой как пароли.',1),Oe=p('<span class="bold">Используйте библиотеки:</span> Для манипуляции с JSON в большом масштабе библиотеки, такие как Lodash, могут помочь упростить задачи, такие как глубокое клонирование или слияние объектов JSON.',1),Ne=p("<!> <!> <!> <!>",1),Pe=p('<h1>Json в JavaScript</h1> <p>Примечание: в Python данные JSON обычно представлены в виде строки.</p> <!> <p>Парсинг JSON — это процесс преобразования строки JSON в нативный <!>. JavaScript предоставляет метод <!> для этой цели.</p> <!> <p>Результат</p> <!> <p><!></p> <p><span class="bold">Обработка исключений при парсинге JSON</span></p> <!> <p>В этом примере отсутствующая фигурная скобка вызывает ошибку. Блок catch помогает вам элегантно обработать такие проблемы.</p> <!> <p>После того как вы распарсили JSON и преобразовали его в объект JavaScript, вы можете захотеть отправить его обратно в виде строки JSON. Это делается с помощью <!>.</p> <!> <p>Результат</p> <!> <p>Это преобразует объект user в строку, которую можно отправить по сети или сохранить в файл.</p> <!> <p>После того как вы распарсили <!> в <!>, вы можете легко изменить его свойства или добавить новые.</p> <!> <p>Результат</p> <!> <p>Здесь мы добавляем новое свойство (profession) к распарсенному объекту JSON и преобразуем его обратно в строку JSON с помощью JSON.stringify().</p> <!> <p>Вам часто может понадобиться фильтровать или преобразовывать данные, содержащиеся в объектах или массивах JSON. Методы массивов JavaScript, такие как <!> , <!> и <!>, идеально подходят для этой задачи.</p> <p><span class="bold">Фильтрация данных JSON</span></p> <p>Предположим, у вас есть массив объектов пользователей, и вы хотите отфильтровать пользователей, старше 30 лет.</p> <!> <p>В этом примере метод filter() используется для создания нового массива, который включает только пользователей старше 30 лет.</p> <!> <p>Сериализация — это процесс преобразования объекта JavaScript в строку JSON. Это обычно делается при отправке данных с клиента на сервер.</p> <!> <p>Результат</p> <!> <p>Это делает данные готовыми для передачи в формате JSON через HTTP-запросы или сохранения в системе хранения.</p> <!> <p><!> позволяет вам указать, какие свойства включать или исключать из строки JSON, используя функцию замены.</p> <!> <p>Результат</p> <!> <p>В этом примере поле пароля исключается из окончательной строки JSON.</p> <!> <p>JSON является стандартным форматом для обмена данными с веб-API. <!> в позволяет легко отправлять и получать данные JSON.</p> <p><span class="bold">Получение JSON из API:</span></p> <!> <p>Это получает данные из примера API и выводит их в консоль.</p> <p><span class="bold">Отправка JSON в API:</span></p> <!> <p>В этом примере мы отправляем данные JSON в API с использованием метода POST.</p> <p><span class="bold">Лучшие практики работы с JSON в JavaScript:</span></p> <!>',1);function Ce(te){var x=Pe(),k=t(b(x),4);u(k,{id:"parsingJavaScript",children:(r,a)=>{var e=ve();o(r,e)},$$slots:{default:!0}});var S=t(k,2),A=t(c(S));d(A,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(r,a)=>{s();var e=n("JavaScript объект");o(r,e)},$$slots:{default:!0}});var oe=t(A,2);d(oe,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-parse-method/",children:(r,a)=>{s();var e=n("JSON.parse()");o(r,e)},$$slots:{default:!0}}),s(),$(S);var C=t(S,2);l(C,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);
console.log(obj.name);`,o(r,e)},$$slots:{default:!0}});var R=t(C,4);l(R,{hideCopyButton:!0,code:"Ravi"});var J=t(R,2),se=c(J);re(se,{style:"margin-left: 3.5em;",children:(r,a)=>{var e=ce(),_=b(e);f(_,{children:(h,j)=>{s();var i=n("jsonData — это строка JSON.");o(h,i)},$$slots:{default:!0}});var g=t(_,2);f(g,{children:(h,j)=>{s();var i=n("Метод JSON.parse() преобразует её в объект JavaScript, и вы можете получить доступ к свойствам, таким как name и age.");o(h,i)},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}}),$(J);var V=t(J,4);l(V,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`const json = '{"name": "Ravi", "age": 25';

try {
    const obj = JSON.parse(json);
    console.log(obj.name);
} catch (error) {
    console.error("Error parsing JSON:", error);
}`,o(r,e)},$$slots:{default:!0}});var D=t(V,4);u(D,{id:"stringifyingJavaScript",children:(r,a)=>{var e=$e();o(r,e)},$$slots:{default:!0}});var m=t(D,2),ae=t(c(m));d(ae,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(r,a)=>{s();var e=n("JSON.stringify()");o(r,e)},$$slots:{default:!0}}),s(),$(m);var I=t(m,2);l(I,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`const user = {
    name: "Ravi",
    age: 25,
    profession: "Web Developer"
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,o(r,e)},$$slots:{default:!0}});var T=t(I,4);l(T,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var B=t(T,4);u(B,{id:"modifyingDataJavaScript",children:(r,a)=>{var e=ue();o(r,e)},$$slots:{default:!0}});var O=t(B,2),L=t(c(O));d(L,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-json-string/",children:(r,a)=>{s();var e=n("JSON строку");o(r,e)},$$slots:{default:!0}});var ne=t(L,2);d(ne,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(r,a)=>{s();var e=n("JavaScript объект");o(r,e)},$$slots:{default:!0}}),s(),$(O);var E=t(O,2);l(E,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);

obj.profession = "Web Developer";
console.log(JSON.stringify(obj));`,o(r,e)},$$slots:{default:!0}});var W=t(E,4);l(W,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var z=t(W,4);u(z,{id:"filteringATransformationJavaScript",children:(r,a)=>{var e=he();o(r,e)},$$slots:{default:!0}});var N=t(z,2),U=t(c(N));d(U,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-filter-method/",children:(r,a)=>{s();var e=n("filter()");o(r,e)},$$slots:{default:!0}});var H=t(U,2);d(H,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-map-method/",children:(r,a)=>{s();var e=n("map()");o(r,e)},$$slots:{default:!0}});var le=t(H,2);d(le,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-reduce-method/",children:(r,a)=>{s();var e=n("reduce()");o(r,e)},$$slots:{default:!0}}),s(),$(N);var q=t(N,6);l(q,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`const users = [
    { "name": "Amit", "age": 24 },
    { "name": "Rahul", "age": 45 },
    { "name": "Priya", "age": 30 }
];

const olderThan30 = users.filter(user => user.age > 30);
console.log(olderThan30);`,o(r,e)},$$slots:{default:!0}});var F=t(q,4);u(F,{id:"SerializationJavaScript",children:(r,a)=>{var e=fe();o(r,e)},$$slots:{default:!0}});var G=t(F,4);l(G,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`const user = {
    name: "Simran",
    age: 29
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,o(r,e)},$$slots:{default:!0}});var K=t(G,4);l(K,{hideCopyButton:!0,code:'{"name":"Simran","age":29}'});var M=t(K,4);u(M,{id:"CustomizingSerializationJavaScript",children:(r,a)=>{var e=_e();o(r,e)},$$slots:{default:!0}});var P=t(M,2),pe=c(P);d(pe,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(r,a)=>{s();var e=n("JSON.stringify()");o(r,e)},$$slots:{default:!0}}),s(),$(P);var Q=t(P,2);l(Q,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`const user = {
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
console.log(jsonS);`,o(r,e)},$$slots:{default:!0}});var X=t(Q,4);l(X,{hideCopyButton:!0,code:'{"name":"Jatin","age":32}'});var Y=t(X,4);u(Y,{id:"UsingApisJavaScript",children:(r,a)=>{var e=ge();o(r,e)},$$slots:{default:!0}});var y=t(Y,2),ie=t(c(y));d(ie,{visited:!0,href:"https://www.geeksforgeeks.org/how-to-master-json-in-javascript/",children:(r,a)=>{s();var e=n("JavaScript fetch() API");o(r,e)},$$slots:{default:!0}}),s(),$(y);var Z=t(y,4);l(Z,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`fetch('your-api-url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`,o(r,e)},$$slots:{default:!0}});var ee=t(Z,6);l(ee,{type:"multi",children:(r,a)=>{s();var e=n();e.nodeValue=`const pData = {
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
    .catch(error => console.error('Error:', error));`,o(r,e)},$$slots:{default:!0}});var de=t(ee,6);re(de,{style:"margin-left: 3.5em;",children:(r,a)=>{var e=Ne(),_=b(e);f(_,{children:(i,w)=>{var v=Se();s(),o(i,v)},$$slots:{default:!0}});var g=t(_,2);f(g,{children:(i,w)=>{var v=Je();s(),o(i,v)},$$slots:{default:!0}});var h=t(g,2);f(h,{children:(i,w)=>{var v=me();s(),o(i,v)},$$slots:{default:!0}});var j=t(h,2);f(j,{children:(i,w)=>{var v=Oe();s(),o(i,v)},$$slots:{default:!0}}),o(r,e)},$$slots:{default:!0}}),o(te,x)}export{Ce as component};
