import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{T as s,U as j,J as c,V as r,K as u}from"../chunks/DwB3qp1y.js";import{t as v,a as o,b as l}from"../chunks/DhYkO-ht.js";import{A as M}from"../chunks/C8x85miN.js";import{O as p}from"../chunks/DKnAL-hi.js";import{C as i}from"../chunks/CGardy9S.js";import{U as Q}from"../chunks/B8uNzu4-.js";import{L as h}from"../chunks/DF4CoHH5.js";var le=v('<h2 class="svelte-oir1bt">1. Парсинг JSON в JavaScript</h2>'),ie=v("<!> <!>",1),ne=v('<h2 class="svelte-oir1bt">2. Stringifying JavaScript объектов</h2>'),pe=v('<span class="bold svelte-oir1bt">Обработка ошибок:</span> Всегда используйте try...catch для обработки ошибок при парсинге JSON.',1),ve=v('<span class="bold svelte-oir1bt">Используйте JSON Schema:</span> Валидируйте структуру JSON с помощью JSON Schema, чтобы обеспечить целостность данных.',1),de=v('<span class="bold svelte-oir1bt">Минимизируйте данные:</span> Избегайте ненужных данных в JSON. Используйте функцию замены JSON.stringify() для исключения конфиденциальной информации, такой как пароли.',1),ce=v('<span class="bold svelte-oir1bt">Используйте библиотеки:</span> Для манипуляции с JSON в большом масштабе библиотеки, такие как Lodash, могут помочь упростить задачи, такие как глубокое клонирование или слияние объектов JSON.',1),ue=v("<!> <!> <!> <!>",1),$e=v('<h1 class="svelte-oir1bt">Json в JavaScript</h1> <p class="svelte-oir1bt">Примечание: в Python данные JSON обычно представлены в виде строки.</p> <!> <p class="svelte-oir1bt">Парсинг JSON — это процесс преобразования строки JSON в нативный <!>. JavaScript предоставляет метод <!> для этой цели.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt"><!></p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Обработка исключений при парсинге JSON</span></p> <!> <p class="svelte-oir1bt">В этом примере отсутствующая фигурная скобка вызывает ошибку. Блок catch помогает вам элегантно обработать такие проблемы.</p> <!> <p class="svelte-oir1bt">После того как вы распарсили JSON и преобразовали его в объект JavaScript, вы можете захотеть отправить его обратно в виде строки JSON. Это делается с помощью <!>.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Это преобразует объект user в строку, которую можно отправить по сети или сохранить в файл.</p> <h2 id="modifyingDataJavaScript" class="svelte-oir1bt">3. Модификация данных JSON</h2> <p class="svelte-oir1bt">После того как вы распарсили <!> в <!>, вы можете легко изменить его свойства или добавить новые.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Здесь мы добавляем новое свойство (profession) к распарсенному объекту JSON и преобразуем его обратно в строку JSON с помощью JSON.stringify().</p> <h2 id="filteringATransformationJavaScript" class="svelte-oir1bt">4. Фильтрация и преобразование данных JSON</h2> <p class="svelte-oir1bt">Вам часто может понадобиться фильтровать или преобразовывать данные, содержащиеся в объектах или массивах JSON. Методы массивов JavaScript, такие как <!> , <!> и <!>, идеально подходят для этой задачи.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Фильтрация данных JSON</span></p> <p class="svelte-oir1bt">Предположим, у вас есть массив объектов пользователей, и вы хотите отфильтровать пользователей, старше 30 лет.</p> <!> <p class="svelte-oir1bt">В этом примере метод filter() используется для создания нового массива, который включает только пользователей старше 30 лет.</p> <h2 id="SerializationJavaScript" class="svelte-oir1bt">5. Сериализация объектов в формат JSON</h2> <p class="svelte-oir1bt">Сериализация — это процесс преобразования объекта JavaScript в строку JSON. Это обычно делается при отправке данных с клиента на сервер.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Это делает данные готовыми для передачи в формате JSON через HTTP-запросы или сохранения в системе хранения.</p> <h2 id="CustomizingSerializationJavaScript" class="svelte-oir1bt">6. Настройка сериализации JSON</h2> <p class="svelte-oir1bt"><!> позволяет вам указать, какие свойства включать или исключать из строки JSON, используя функцию замены.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">В этом примере поле пароля исключается из окончательной строки JSON.</p> <h2 id="UsingApisJavaScript" class="svelte-oir1bt">7. Использование JSON с API</h2> <p class="svelte-oir1bt">JSON является стандартным форматом для обмена данными с веб-API. <!> в позволяет легко отправлять и получать данные JSON.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Получение JSON из API:</span></p> <!> <p class="svelte-oir1bt">Это получает данные из примера API и выводит их в консоль.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Отправка JSON в API:</span></p> <!> <p class="svelte-oir1bt">В этом примере мы отправляем данные JSON в API с использованием метода POST.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Лучшие практики работы с JSON в JavaScript:</span></p> <!>',1);function Ne(X){var w=$e(),x=s(j(w),4);M(x,{id:"parsingJavaScript",children:(t,a)=>{var e=le();o(t,e)},$$slots:{default:!0}});var S=s(x,2),k=s(c(S));p(k,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(t,a)=>{r();var e=l("JavaScript объект");o(t,e)},$$slots:{default:!0}});var Y=s(k,2);p(Y,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-parse-method/",children:(t,a)=>{r();var e=l("JSON.parse()");o(t,e)},$$slots:{default:!0}}),r(),u(S);var A=s(S,2);i(A,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);
console.log(obj.name);`,o(t,e)},$$slots:{default:!0}});var V=s(A,4);i(V,{hideCopyButton:!0,code:"Ravi"});var _=s(V,2),Z=c(_);Q(Z,{style:"margin-left: 3.5em;",children:(t,a)=>{var e=ie(),f=j(e);h(f,{children:($,y)=>{r();var n=l("jsonData — это строка JSON.");o($,n)},$$slots:{default:!0}});var g=s(f,2);h(g,{children:($,y)=>{r();var n=l("Метод JSON.parse() преобразует её в объект JavaScript, и вы можете получить доступ к свойствам, таким как name и age.");o($,n)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),u(_);var C=s(_,4);i(C,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25';

try {
    const obj = JSON.parse(json);
    console.log(obj.name);
} catch (error) {
    console.error("Error parsing JSON:", error);
}`,o(t,e)},$$slots:{default:!0}});var R=s(C,4);M(R,{id:"stringifyingJavaScript",children:(t,a)=>{var e=ne();o(t,e)},$$slots:{default:!0}});var m=s(R,2),ee=s(c(m));p(ee,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(t,a)=>{r();var e=l("JSON.stringify()");o(t,e)},$$slots:{default:!0}}),r(),u(m);var T=s(m,2);i(T,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`const user = {
    name: "Ravi",
    age: 25,
    profession: "Web Developer"
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,o(t,e)},$$slots:{default:!0}});var D=s(T,4);i(D,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var J=s(D,6),I=s(c(J));p(I,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-json-string/",children:(t,a)=>{r();var e=l("JSON строку");o(t,e)},$$slots:{default:!0}});var te=s(I,2);p(te,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(t,a)=>{r();var e=l("JavaScript объект");o(t,e)},$$slots:{default:!0}}),r(),u(J);var B=s(J,2);i(B,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);

obj.profession = "Web Developer";
console.log(JSON.stringify(obj));`,o(t,e)},$$slots:{default:!0}});var L=s(B,4);i(L,{hideCopyButton:!0,code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var b=s(L,6),E=s(c(b));p(E,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-filter-method/",children:(t,a)=>{r();var e=l("filter()");o(t,e)},$$slots:{default:!0}});var U=s(E,2);p(U,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-map-method/",children:(t,a)=>{r();var e=l("map()");o(t,e)},$$slots:{default:!0}});var se=s(U,2);p(se,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-array-reduce-method/",children:(t,a)=>{r();var e=l("reduce()");o(t,e)},$$slots:{default:!0}}),r(),u(b);var W=s(b,6);i(W,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`const users = [
    { "name": "Amit", "age": 24 },
    { "name": "Rahul", "age": 45 },
    { "name": "Priya", "age": 30 }
];

const olderThan30 = users.filter(user => user.age > 30);
console.log(olderThan30);`,o(t,e)},$$slots:{default:!0}});var z=s(W,8);i(z,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`const user = {
    name: "Simran",
    age: 29
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,o(t,e)},$$slots:{default:!0}});var H=s(z,4);i(H,{hideCopyButton:!0,code:'{"name":"Simran","age":29}'});var O=s(H,6),re=c(O);p(re,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(t,a)=>{r();var e=l("JSON.stringify()");o(t,e)},$$slots:{default:!0}}),r(),u(O);var K=s(O,2);i(K,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`const user = {
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
console.log(jsonS);`,o(t,e)},$$slots:{default:!0}});var q=s(K,4);i(q,{hideCopyButton:!0,code:'{"name":"Jatin","age":32}'});var N=s(q,6),oe=s(c(N));p(oe,{visited:!0,href:"https://www.geeksforgeeks.org/how-to-master-json-in-javascript/",children:(t,a)=>{r();var e=l("JavaScript fetch() API");o(t,e)},$$slots:{default:!0}}),r(),u(N);var F=s(N,4);i(F,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`fetch('your-api-url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`,o(t,e)},$$slots:{default:!0}});var G=s(F,6);i(G,{type:"multi",children:(t,a)=>{r();var e=l();e.nodeValue=`const pData = {
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
    .catch(error => console.error('Error:', error));`,o(t,e)},$$slots:{default:!0}});var ae=s(G,6);Q(ae,{style:"margin-left: 3.5em;",children:(t,a)=>{var e=ue(),f=j(e);h(f,{children:(n,P)=>{var d=pe();r(),o(n,d)},$$slots:{default:!0}});var g=s(f,2);h(g,{children:(n,P)=>{var d=ve();r(),o(n,d)},$$slots:{default:!0}});var $=s(g,2);h($,{children:(n,P)=>{var d=de();r(),o(n,d)},$$slots:{default:!0}});var y=s($,2);h(y,{children:(n,P)=>{var d=ce();r(),o(n,d)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}}),o(X,w)}export{Ne as component};
