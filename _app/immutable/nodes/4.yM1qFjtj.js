import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{W as s,X as P,J as d,Z as r,K as c}from"../chunks/BLW39w_c.js";import{t as u,a as o,b as a}from"../chunks/Cv4kYyPD.js";import{O as p}from"../chunks/XM2WaJwn.js";import{C as i}from"../chunks/CRnu2a1D.js";import{U as Z}from"../chunks/3v8DlaWu.js";import{L as h}from"../chunks/BsjRrwzf.js";var re=u("<!> <!>",1),oe=u('<span class="bold svelte-oir1bt">Обработка ошибок:</span> Всегда используйте try...catch для обработки ошибок при парсинге JSON.',1),ae=u('<span class="bold svelte-oir1bt">Используйте JSON Schema:</span> Валидируйте структуру JSON с помощью JSON Schema, чтобы обеспечить целостность данных.',1),le=u('<span class="bold svelte-oir1bt">Минимизируйте данные:</span> Избегайте ненужных данных в JSON. Используйте функцию замены JSON.stringify() для исключения конфиденциальной информации, такой как пароли.',1),ie=u('<span class="bold svelte-oir1bt">Используйте библиотеки:</span> Для манипуляции с JSON в большом масштабе библиотеки, такие как Lodash, могут помочь упростить задачи, такие как глубокое клонирование или слияние объектов JSON.',1),ne=u("<!> <!> <!> <!>",1),pe=u('<h1 class="svelte-oir1bt">Json в JavaScript</h1> <p class="svelte-oir1bt">Примечание: в Python данные JSON обычно представлены в виде строки.</p> <h2 id="parsingJavaScript" class="svelte-oir1bt">1. Парсинг JSON в JavaScript</h2> <p class="svelte-oir1bt">Парсинг JSON — это процесс преобразования строки JSON в нативный <!>. JavaScript предоставляет метод <!> для этой цели.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt"><!></p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Обработка исключений при парсинге JSON</span></p> <!> <p class="svelte-oir1bt">В этом примере отсутствующая фигурная скобка вызывает ошибку. Блок catch помогает вам элегантно обработать такие проблемы.</p> <h2 id="stringifyingJavaScript" class="svelte-oir1bt">2. Stringifying JavaScript объектов</h2> <p class="svelte-oir1bt">После того как вы распарсили JSON и преобразовали его в объект JavaScript, вы можете захотеть отправить его обратно в виде строки JSON. Это делается с помощью <!>.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Это преобразует объект user в строку, которую можно отправить по сети или сохранить в файл.</p> <h2 id="modifyingDataJavaScript" class="svelte-oir1bt">3. Модификация данных JSON</h2> <p class="svelte-oir1bt">После того как вы распарсили <!> в <!>, вы можете легко изменить его свойства или добавить новые.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Здесь мы добавляем новое свойство (profession) к распарсенному объекту JSON и преобразуем его обратно в строку JSON с помощью JSON.stringify().</p> <h2 id="filteringATransformationJavaScript" class="svelte-oir1bt">4. Фильтрация и преобразование данных JSON</h2> <p class="svelte-oir1bt">Вам часто может понадобиться фильтровать или преобразовывать данные, содержащиеся в объектах или массивах JSON. Методы массивов JavaScript, такие как <!> , <!> и <!>, идеально подходят для этой задачи.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Фильтрация данных JSON</span></p> <p class="svelte-oir1bt">Предположим, у вас есть массив объектов пользователей, и вы хотите отфильтровать пользователей, старше 30 лет.</p> <!> <p class="svelte-oir1bt">В этом примере метод filter() используется для создания нового массива, который включает только пользователей старше 30 лет.</p> <h2 id="SerializationJavaScript" class="svelte-oir1bt">5. Сериализация объектов в формат JSON</h2> <p class="svelte-oir1bt">Сериализация — это процесс преобразования объекта JavaScript в строку JSON. Это обычно делается при отправке данных с клиента на сервер.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Это делает данные готовыми для передачи в формате JSON через HTTP-запросы или сохранения в системе хранения.</p> <h2 id="CustomizingSerializationJavaScript" class="svelte-oir1bt">6. Настройка сериализации JSON</h2> <p class="svelte-oir1bt"><!> позволяет вам указать, какие свойства включать или исключать из строки JSON, используя функцию замены.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">В этом примере поле пароля исключается из окончательной строки JSON.</p> <h2 id="UsingApisJavaScript" class="svelte-oir1bt">7. Использование JSON с API</h2> <p class="svelte-oir1bt">JSON является стандартным форматом для обмена данными с веб-API. <!> в позволяет легко отправлять и получать данные JSON.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Получение JSON из API:</span></p> <!> <p class="svelte-oir1bt">Это получает данные из примера API и выводит их в консоль.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Отправка JSON в API:</span></p> <!> <p class="svelte-oir1bt">В этом примере мы отправляем данные JSON в API с использованием метода POST.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Лучшие практики работы с JSON в JavaScript:</span></p> <!>',1);function Se(q){var w=pe(),S=s(P(w),6),x=s(d(S));p(x,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(t,l)=>{r();var e=a("JavaScript объект");o(t,e)},$$slots:{default:!0}});var F=s(x,2);p(F,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-parse-method/",children:(t,l)=>{r();var e=a("JSON.parse()");o(t,e)},$$slots:{default:!0}}),r(),c(S);var k=s(S,2);i(k,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);
console.log(obj.name);`,o(t,e)},$$slots:{default:!0}});var A=s(k,4);i(A,{hideCopyButton:!0,code:"Ravi"});var J=s(A,2),G=d(J);Z(G,{style:"margin-left: 3.5em;",children:(t,l)=>{var e=re(),f=P(e);h(f,{children:($,y)=>{r();var n=a("jsonData — это строка JSON.");o($,n)},$$slots:{default:!0}});var g=s(f,2);h(g,{children:($,y)=>{r();var n=a("Метод JSON.parse() преобразует её в объект JavaScript, и вы можете получить доступ к свойствам, таким как name и age.");o($,n)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),c(J);var C=s(J,4);i(C,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`const json = '{"name": "Ravi", "age": 25';

try {
    const obj = JSON.parse(json);
    console.log(obj.name);
} catch (error) {
    console.error("Error parsing JSON:", error);
}`,o(t,e)},$$slots:{default:!0}});var m=s(C,6),M=s(d(m));p(M,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(t,l)=>{r();var e=a("JSON.stringify()");o(t,e)},$$slots:{default:!0}}),r(),c(m);var R=s(m,2);i(R,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`const user = {
    name: "Ravi",
    age: 25,
    profession: "Web Developer"
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,o(t,e)},$$slots:{default:!0}});var V=s(R,4);i(V,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var b=s(V,6),D=s(d(b));p(D,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-json-string/",children:(t,l)=>{r();var e=a("JSON строку");o(t,e)},$$slots:{default:!0}});var Q=s(D,2);p(Q,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(t,l)=>{r();var e=a("JavaScript объект");o(t,e)},$$slots:{default:!0}}),r(),c(b);var I=s(b,2);i(I,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);

obj.profession = "Web Developer";
console.log(JSON.stringify(obj));`,o(t,e)},$$slots:{default:!0}});var T=s(I,4);i(T,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var _=s(T,6),B=s(d(_));p(B,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-filter-method/",children:(t,l)=>{r();var e=a("filter()");o(t,e)},$$slots:{default:!0}});var L=s(B,2);p(L,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-map-method/",children:(t,l)=>{r();var e=a("map()");o(t,e)},$$slots:{default:!0}});var Y=s(L,2);p(Y,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-reduce-method/",children:(t,l)=>{r();var e=a("reduce()");o(t,e)},$$slots:{default:!0}}),r(),c(_);var W=s(_,6);i(W,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`const users = [
    { "name": "Amit", "age": 24 },
    { "name": "Rahul", "age": 45 },
    { "name": "Priya", "age": 30 }
];

const olderThan30 = users.filter(user => user.age > 30);
console.log(olderThan30);`,o(t,e)},$$slots:{default:!0}});var E=s(W,8);i(E,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`const user = {
    name: "Simran",
    age: 29
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,o(t,e)},$$slots:{default:!0}});var z=s(E,4);i(z,{hideCopyButton:!0,code:'{"name":"Simran","age":29}'});var O=s(z,6),ee=d(O);p(ee,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(t,l)=>{r();var e=a("JSON.stringify()");o(t,e)},$$slots:{default:!0}}),r(),c(O);var U=s(O,2);i(U,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`const user = {
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
console.log(jsonS);`,o(t,e)},$$slots:{default:!0}});var H=s(U,4);i(H,{hideCopyButton:!0,code:'{"name":"Jatin","age":32}'});var N=s(H,6),te=s(d(N));p(te,{visited:!0,href:"https://www.geeksforgeeks.org/how-to-master-json-in-javascript/",children:(t,l)=>{r();var e=a("JavaScript fetch() API");o(t,e)},$$slots:{default:!0}}),r(),c(N);var K=s(N,4);i(K,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`fetch('your-api-url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`,o(t,e)},$$slots:{default:!0}});var X=s(K,6);i(X,{type:"multi",children:(t,l)=>{r();var e=a();e.nodeValue=`const pData = {
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
    .catch(error => console.error('Error:', error));`,o(t,e)},$$slots:{default:!0}});var se=s(X,6);Z(se,{style:"margin-left: 3.5em;",children:(t,l)=>{var e=ne(),f=P(e);h(f,{children:(n,j)=>{var v=oe();r(),o(n,v)},$$slots:{default:!0}});var g=s(f,2);h(g,{children:(n,j)=>{var v=ae();r(),o(n,v)},$$slots:{default:!0}});var $=s(g,2);h($,{children:(n,j)=>{var v=le();r(),o(n,v)},$$slots:{default:!0}});var y=s($,2);h(y,{children:(n,j)=>{var v=ie();r(),o(n,v)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),o(q,w)}export{Se as component};
