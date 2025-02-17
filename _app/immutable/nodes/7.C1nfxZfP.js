import{t as i,a as r,b as p}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{L as t,M as y,N as s}from"../chunks/TTrIPi8I.js";import{A as $}from"../chunks/5ZNi9sMP.js";import{C as n}from"../chunks/DTaq0LnW.js";var S=i("<h2>System.Text.Json</h2>"),N=i("<h2>C# JSON парсер</h2>"),f=i("<h1>С# JSON</h1> <p>В руководстве по C# JSON показано, как работать с данными JSON в C# с помощью классов стандартной библиотеки чекайте сами).</p> <p>Мы же рассмотрим одну из популярных сторонних библиотек под названием Json.NET</p> <!> <p>Пространство имён System.Text.Json предоставляет высокопроизводительные, не требующие больших ресурсов и соответствующие стандартам инструменты для работы с JSON. Классы позволяют сериализовать объекты в текст JSON и десериализовать текст JSON в объекты. Поддержка UTF-8 встроена.</p> <!> <p>JsonDocument.Parse анализирует поток как данные в кодировке UTF-8, представляющие одно значение JSON, и преобразует его в JsonDocument. Поток считывается до завершения.</p> <!> <p>В приведенном примере мы анализируем простую строку JSON.</p> <!> <p>Мы разбираем строку JSON на JsonDocument.</p> <!> <p>Мы получаем ссылку на корневой элемент со свойством RootElement.</p> <!> <p>С помощью оператора [] мы получаем первый и второй подэлементы документа JSON.</p> <!> <p>Мы получаем свойства элемента с помощью GetProperty.</p> <!> <p></p> <p></p> <p></p> <p></p>",1);function O(C){var u=f(),l=t(y(u),6);$(l,{id:"SystemTextJsonScarp",children:(o,a)=>{var e=S();r(o,e)},$$slots:{default:!0}});var d=t(l,4);$(d,{id:"ParserJsonScarp",children:(o,a)=>{var e=N();r(o,e)},$$slots:{default:!0}});var c=t(d,4);n(c,{type:"multi",children:(o,a)=>{s();var e=p();e.nodeValue=`using System.Text.Json;

string data = @" [ {""name"": ""John Doe"", ""occupation"": ""gardener""}, 
 {""name"": ""Peter Novak"", ""occupation"": ""driver""} ]";

using JsonDocument doc = JsonDocument.Parse(data);
JsonElement root = doc.RootElement;

Console.WriteLine(root);

var u1 = root[0];
var u2 = root[1];
Console.WriteLine(u1);
Console.WriteLine(u2);

Console.WriteLine(u1.GetProperty("name"));
Console.WriteLine(u1.GetProperty("occupation"));

Console.WriteLine(u2.GetProperty("name"));
Console.WriteLine(u2.GetProperty("occupation"));
`,r(o,e)},$$slots:{default:!0}});var m=t(c,4);n(m,{hideCopyButton:!0,code:"using JsonDocument doc = JsonDocument.Parse(data);"});var v=t(m,4);n(v,{hideCopyButton:!0,code:"JsonElement root = doc.RootElement;"});var J=t(v,4);n(J,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,a)=>{s();var e=p();e.nodeValue=`var u1 = root[0];
var u2 = root[1];
Console.WriteLine(u1);
Console.WriteLine(u2);
`,r(o,e)},$$slots:{default:!0}});var h=t(J,4);n(h,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,a)=>{s();var e=p();e.nodeValue=`Console.WriteLine(u1.GetProperty("name"));
Console.WriteLine(u1.GetProperty("occupation"));
`,r(o,e)},$$slots:{default:!0}});var P=t(h,4);n(P,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,a)=>{s();var e=p();e.nodeValue=`$ dotnet run
[ {"name": "John Doe", "occupation": "gardener"},
 {"name": "Peter Novak", "occupation": "driver"} ]
{"name": "John Doe", "occupation": "gardener"}
{"name": "Peter Novak", "occupation": "driver"}
John Doe
gardener
Peter Novak
driver
`,r(o,e)},$$slots:{default:!0}}),s(8),r(C,u)}export{O as component};
