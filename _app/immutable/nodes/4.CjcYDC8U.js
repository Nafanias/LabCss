import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{V as s,W as w,L as f,X as r,M as g}from"../chunks/J_uPI_2X.js";import{t as P,a as o,b as a}from"../chunks/BKDYYQra.js";import{O as n}from"../chunks/RnTPVsXl.js";import{C as l}from"../chunks/BwSacaDf.js";import{U}from"../chunks/BrLdt2Vd.js";import{L as x}from"../chunks/C159P-DO.js";var E=P("<!> <!>",1),I=P('<h1 class="svelte-oir1bt">Json в JavaScript</h1> <p class="svelte-oir1bt">Примечание: в Python данные JSON обычно представлены в виде строки.</p> <h2 id="parsingJavaScript" class="svelte-oir1bt">Парсинг JSON в JavaScript</h2> <p class="svelte-oir1bt">Парсинг JSON — это процесс преобразования строки JSON в нативный <!>. JavaScript предоставляет метод <!> для этой цели.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Обработка исключений при парсинге JSON</span></p> <!> <p class="svelte-oir1bt">В этом примере отсутствующая фигурная скобка вызывает ошибку. Блок catch помогает вам элегантно обработать такие проблемы.</p> <h2 id="stringifyingJavaScript" class="svelte-oir1bt">Stringifying JavaScript объектов</h2> <p class="svelte-oir1bt">После того как вы распарсили JSON и преобразовали его в объект JavaScript, вы можете захотеть отправить его обратно в виде строки JSON. Это делается с помощью <!>.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Это преобразует объект user в строку, которую можно отправить по сети или сохранить в файл.</p> <h2 id="modifyingDataJavaScript" class="svelte-oir1bt">Модификация данных JSON</h2> <p class="svelte-oir1bt">После того как вы распарсили <!> в <!>, вы можете легко изменить его свойства или добавить новые.</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt">Здесь мы добавляем новое свойство (profession) к распарсенному объекту JSON и преобразуем его обратно в строку JSON с помощью JSON.stringify().</p>',1);function H(k){var u=I(),p=s(w(u),6),h=s(f(p));n(h,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(t,i)=>{r();var e=a("JavaScript объект");o(t,e)},$$slots:{default:!0}});var R=s(h,2);n(R,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-parse-method/",children:(t,i)=>{r();var e=a("JSON.parse()");o(t,e)},$$slots:{default:!0}}),r(),g(p);var m=s(p,2);l(m,{type:"multi",children:(t,i)=>{r();var e=a();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);
console.log(obj.name);`,o(t,e)},$$slots:{default:!0}});var S=s(m,4);l(S,{type:"inline",code:"Ravi"});var J=s(S,2);U(J,{style:"margin-left: 3.5em;",children:(t,i)=>{var e=E(),y=w(e);x(y,{children:(d,C)=>{r();var $=a("jsonData — это строка JSON.");o(d,$)},$$slots:{default:!0}});var W=s(y,2);x(W,{children:(d,C)=>{r();var $=a("Метод JSON.parse() преобразует её в объект JavaScript, и вы можете получить доступ к свойствам, таким как name и age.");o(d,$)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var b=s(J,4);l(b,{type:"multi",children:(t,i)=>{r();var e=a();e.nodeValue=`const json = '{"name": "Ravi", "age": 25';

try {
    const obj = JSON.parse(json);
    console.log(obj.name);
} catch (error) {
    console.error("Error parsing JSON:", error);
}`,o(t,e)},$$slots:{default:!0}});var v=s(b,6),D=s(f(v));n(D,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-json-stringify-method/",children:(t,i)=>{r();var e=a("JSON.stringify()");o(t,e)},$$slots:{default:!0}}),r(),g(v);var _=s(v,2);l(_,{type:"multi",children:(t,i)=>{r();var e=a();e.nodeValue=`const user = {
    name: "Ravi",
    age: 25,
    profession: "Web Developer"
};

const jsonS = JSON.stringify(user);
console.log(jsonS);`,o(t,e)},$$slots:{default:!0}});var j=s(_,4);l(j,{type:"inline",code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'});var c=s(j,6),O=s(f(c));n(O,{visited:!0,href:"https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-json-string/",children:(t,i)=>{r();var e=a("JSON строку");o(t,e)},$$slots:{default:!0}});var L=s(O,2);n(L,{visited:!0,href:"https://www.geeksforgeeks.org/objects-in-javascript/",children:(t,i)=>{r();var e=a("JavaScript объект");o(t,e)},$$slots:{default:!0}}),r(),g(c);var N=s(c,2);l(N,{type:"multi",children:(t,i)=>{r();var e=a();e.nodeValue=`const json = '{"name": "Ravi", "age": 25}';
const obj = JSON.parse(json);

obj.profession = "Web Developer";
console.log(JSON.stringify(obj));`,o(t,e)},$$slots:{default:!0}});var V=s(N,4);l(V,{type:"inline",code:'{"name":"Ravi","age":25,"profession":"Web Developer"}'}),r(2),o(k,u)}export{H as component};
