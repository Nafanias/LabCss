import{t as n,a as t,b as c}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{L as r,M as d,N as J}from"../chunks/TTrIPi8I.js";import{A as m}from"../chunks/5ZNi9sMP.js";import{C as S}from"../chunks/DTaq0LnW.js";var h=n("<h2>System.Text.Json</h2>"),v=n("<h2>C# JSON парсер</h2>"),$=n("<h1>С# JSON</h1> <p>В руководстве по C# JSON показано, как работать с данными JSON в C# с помощью классов стандартной библиотеки чекайте сами).</p> <p>Мы же рассмотрим одну из популярных сторонних библиотек под названием Json.NET</p> <!> <p>Пространство имён System.Text.Json предоставляет высокопроизводительные, не требующие больших ресурсов и соответствующие стандартам инструменты для работы с JSON. Классы позволяют сериализовать объекты в текст JSON и десериализовать текст JSON в объекты. Поддержка UTF-8 встроена.</p> <!> <p>JsonDocument.Parse анализирует поток как данные в кодировке UTF-8, представляющие одно значение JSON, и преобразует его в JsonDocument. Поток считывается до завершения.</p> <!>",1);function x(u){var s=$(),a=r(d(s),6);m(a,{id:"SystemTextJsonScarp",children:(e,p)=>{var o=h();t(e,o)},$$slots:{default:!0}});var i=r(a,4);m(i,{id:"ParserJsonScarp",children:(e,p)=>{var o=v();t(e,o)},$$slots:{default:!0}});var l=r(i,4);S(l,{type:"multi",children:(e,p)=>{J();var o=c();o.nodeValue=`using System.Text.Json;

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
`,t(e,o)},$$slots:{default:!0}}),t(u,s)}export{x as component};
