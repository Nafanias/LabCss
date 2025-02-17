import{t as n,a as s,f as l}from"../chunks/pqBE20XK.js";import"../chunks/DRYAVKB2.js";import{L as r,M as w,J as c,N as o,K as $}from"../chunks/BpE17Re9.js";import{A as u}from"../chunks/BEgXtm0b.js";import{O as v}from"../chunks/CuScahH1.js";import{C as i}from"../chunks/A9uckqTL.js";import{U as te}from"../chunks/DOIjGPps.js";import{L as f}from"../chunks/Byp4agzs.js";var de=n('<h2 class="svelte-oir1bt">1. Парсинг JSON в JavaScript</h2>'),ce=n("<!> <!>",1),$e=n('<h2 class="svelte-oir1bt">2. Stringifying JavaScript объектов</h2>'),ue=n('<h2 class="svelte-oir1bt">3. Модификация данных JSON</h2>'),he=n('<h2 class="svelte-oir1bt">4. Фильтрация и преобразование данных JSON</h2>'),fe=n('<h2 class="svelte-oir1bt">5. Сериализация объектов в формат JSON</h2>'),_e=n('<h2 class="svelte-oir1bt">6. Настройка сериализации JSON</h2>'),ge=n('<h2 class="svelte-oir1bt">7. Использование JSON с API</h2>'),Se=n('<span class="bold svelte-oir1bt">Обработка ошибок:</span> Всегда используйте try...catch для обработки ошибок при парсинге JSON.',1),Je=n('<span class="bold svelte-oir1bt">Используйте JSON Schema:</span> Валидируйте структуру JSON с помощью JSON Schema, чтобы обеспечить целостность данных.',1),me=n('<span class="bold svelte-oir1bt">Минимизируйте данные:</span> Избегайте ненужных данных в JSON. Используйте функцию замены JSON.stringify() для исключения конфиденциальной информации, такой как пароли.',1),be=n('<span class="bold svelte-oir1bt">Используйте библиотеки:</span> Для манипуляции с JSON в большом масштабе библиотеки, такие как Lodash, могут помочь упростить задачи, такие как глубокое клонирование или слияние объектов JSON.',1),Oe=n("<!> <!> <!> <!>",1),Ne=n('<h1 class="svelte-oir1bt">Json в JavaScript</h1> <p class="svelte-oir1bt">Примечание: в Python данные JSON обычно представлены в виде строки.</p> <!> <p class="svelte-oir1bt">Парсинг JSON — это процесс преобразования строки JSON в нативный <!>. JavaScript предоставляет метод <!> для этой цели.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt"><!></p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Обработка исключений при парсинге JSON</span></p> <!> <p class="svelte-oir1bt">В этом примере отсутствующая фигурная скобка вызывает ошибку. Блок catch помогает вам элегантно обработать такие проблемы.</p> <!> <p class="svelte-oir1bt">После того как вы распарсили JSON и преобразовали его в объект JavaScript, вы можете захотеть отправить его обратно в виде строки JSON. Это делается с помощью <!>.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Это преобразует объект user в строку, которую можно отправить по сети или сохранить в файл.</p> <!> <p class="svelte-oir1bt">После того как вы распарсили <!> в <!>, вы можете легко изменить его свойства или добавить новые.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Здесь мы добавляем новое свойство (profession) к распарсенному объекту JSON и преобразуем его обратно в строку JSON с помощью JSON.stringify().</p> <!> <p class="svelte-oir1bt">Вам часто может понадобиться фильтровать или преобразовывать данные, содержащиеся в объектах или массивах JSON. Методы массивов JavaScript, такие как <!> , <!> и <!>, идеально подходят для этой задачи.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Фильтрация данных JSON</span></p> <p class="svelte-oir1bt">Предположим, у вас есть массив объектов пользователей, и вы хотите отфильтровать пользователей, старше 30 лет.</p> <!> <p class="svelte-oir1bt">В этом примере метод filter() используется для создания нового массива, который включает только пользователей старше 30 лет.</p> <!> <p class="svelte-oir1bt">Сериализация — это процесс преобразования объекта JavaScript в строку JSON. Это обычно делается при отправке данных с клиента на сервер.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Это делает данные готовыми для передачи в формате JSON через HTTP-запросы или сохранения в системе хранения.</p> <!> <p class="svelte-oir1bt"><!> позволяет вам указать, какие свойства включать или исключать из строки JSON, используя функцию замены.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">В этом примере поле пароля исключается из окончательной строки JSON.</p> <!> <p class="svelte-oir1bt">JSON является стандартным форматом для обмена данными с веб-API. <!> в позволяет легко отправлять и получать данные JSON.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Получение JSON из API:</span></p> <!> <p class="svelte-oir1bt">Это получает данные из примера API и выводит их в консоль.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Отправка JSON в API:</span></p> <!> <p class="svelte-oir1bt">В этом примере мы отправляем данные JSON в API с использованием метода POST.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Лучшие практики работы с JSON в JavaScript:</span></p> <!>',1);function Re(re){var x=Ne(),k=r(w(x),4);u(k,{id:"parsingJavaScript",children:(t,a)=>{var e=de();s(t,e)},$$slots:{default:!0}});var S=r(k,2),A=r(c(S));v(A,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(t,a)=>{o();var e=l("JavaScript объект");s(t,e)},$$slots:{default:!0}});var se=r(A,2);v(se,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-parse-method/",children:(t,a)=>{o();var e=l("JSON.parse()");s(t,e)},$$slots:{default:!0}}),o(),$(S);var C=r(S,2);i(C,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);
console.log(obj.name);`,s(t,e)},$$slots:{default:!0}});var R=r(C,4);i(R,{hideCopyButton:!0,code:"Ravi"});var J=r(R,2),oe=c(J);te(oe,{style:"margin-left: 3.5em;",children:(t,a)=>{var e=ce(),_=w(e);f(_,{children:(h,y)=>{o();var p=l("jsonData — это строка JSON.");s(h,p)},$$slots:{default:!0}});var g=r(_,2);f(g,{children:(h,y)=>{o();var p=l("Метод JSON.parse() преобразует её в объект JavaScript, и вы можете получить доступ к свойствам, таким как name и age.");s(h,p)},$$slots:{default:!0}}),s(t,e)},$$slots:{default:!0}}),$(J);var V=r(J,4);i(V,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25';

try {
    const obj = JSON.parse(json);
    console.log(obj.name);
} catch (error) {
    console.error("Error parsing JSON:", error);
}`,s(t,e)},$$slots:{default:!0}});var D=r(V,4);u(D,{id:"stringifyingJavaScript",children:(t,a)=>{var e=$e();s(t,e)},$$slots:{default:!0}});var m=r(D,2),ae=r(c(m));v(ae,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(t,a)=>{o();var e=l("JSON.stringify()");s(t,e)},$$slots:{default:!0}}),o(),$(m);var I=r(m,2);i(I,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`const user = {
    name: "Ravi",
    age: 25,
    profession: "Web Developer"
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,s(t,e)},$$slots:{default:!0}});var T=r(I,4);i(T,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var L=r(T,4);u(L,{id:"modifyingDataJavaScript",children:(t,a)=>{var e=ue();s(t,e)},$$slots:{default:!0}});var b=r(L,2),B=r(c(b));v(B,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-json-string/",children:(t,a)=>{o();var e=l("JSON строку");s(t,e)},$$slots:{default:!0}});var le=r(B,2);v(le,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(t,a)=>{o();var e=l("JavaScript объект");s(t,e)},$$slots:{default:!0}}),o(),$(b);var E=r(b,2);i(E,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);

obj.profession = "Web Developer";
console.log(JSON.stringify(obj));`,s(t,e)},$$slots:{default:!0}});var W=r(E,4);i(W,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var z=r(W,4);u(z,{id:"filteringATransformationJavaScript",children:(t,a)=>{var e=he();s(t,e)},$$slots:{default:!0}});var O=r(z,2),U=r(c(O));v(U,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-filter-method/",children:(t,a)=>{o();var e=l("filter()");s(t,e)},$$slots:{default:!0}});var H=r(U,2);v(H,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-map-method/",children:(t,a)=>{o();var e=l("map()");s(t,e)},$$slots:{default:!0}});var ie=r(H,2);v(ie,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-reduce-method/",children:(t,a)=>{o();var e=l("reduce()");s(t,e)},$$slots:{default:!0}}),o(),$(O);var K=r(O,6);i(K,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`const users = [
    { "name": "Amit", "age": 24 },
    { "name": "Rahul", "age": 45 },
    { "name": "Priya", "age": 30 }
];

const olderThan30 = users.filter(user => user.age > 30);
console.log(olderThan30);`,s(t,e)},$$slots:{default:!0}});var M=r(K,4);u(M,{id:"SerializationJavaScript",children:(t,a)=>{var e=fe();s(t,e)},$$slots:{default:!0}});var q=r(M,4);i(q,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`const user = {
    name: "Simran",
    age: 29
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,s(t,e)},$$slots:{default:!0}});var F=r(q,4);i(F,{hideCopyButton:!0,code:'{"name":"Simran","age":29}'});var G=r(F,4);u(G,{id:"CustomizingSerializationJavaScript",children:(t,a)=>{var e=_e();s(t,e)},$$slots:{default:!0}});var N=r(G,2),ne=c(N);v(ne,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(t,a)=>{o();var e=l("JSON.stringify()");s(t,e)},$$slots:{default:!0}}),o(),$(N);var Q=r(N,2);i(Q,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`const user = {
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
console.log(jsonS);`,s(t,e)},$$slots:{default:!0}});var X=r(Q,4);i(X,{hideCopyButton:!0,code:'{"name":"Jatin","age":32}'});var Y=r(X,4);u(Y,{id:"UsingApisJavaScript",children:(t,a)=>{var e=ge();s(t,e)},$$slots:{default:!0}});var P=r(Y,2),pe=r(c(P));v(pe,{visited:!0,href:"https://www.geeksforgeeks.org/how-to-master-json-in-javascript/",children:(t,a)=>{o();var e=l("JavaScript fetch() API");s(t,e)},$$slots:{default:!0}}),o(),$(P);var Z=r(P,4);i(Z,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`fetch('your-api-url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`,s(t,e)},$$slots:{default:!0}});var ee=r(Z,6);i(ee,{type:"multi",children:(t,a)=>{o();var e=l();e.nodeValue=`const pData = {
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
    .catch(error => console.error('Error:', error));`,s(t,e)},$$slots:{default:!0}});var ve=r(ee,6);te(ve,{style:"margin-left: 3.5em;",children:(t,a)=>{var e=Oe(),_=w(e);f(_,{children:(p,j)=>{var d=Se();o(),s(p,d)},$$slots:{default:!0}});var g=r(_,2);f(g,{children:(p,j)=>{var d=Je();o(),s(p,d)},$$slots:{default:!0}});var h=r(g,2);f(h,{children:(p,j)=>{var d=me();o(),s(p,d)},$$slots:{default:!0}});var y=r(h,2);f(y,{children:(p,j)=>{var d=be();o(),s(p,d)},$$slots:{default:!0}}),s(t,e)},$$slots:{default:!0}}),s(re,x)}export{Re as component};
