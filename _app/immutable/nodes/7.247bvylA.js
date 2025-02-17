import{t as p,a as r,b as s}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{L as t,M as g,N as u}from"../chunks/TTrIPi8I.js";import{A as i}from"../chunks/5ZNi9sMP.js";import{C as a}from"../chunks/DTaq0LnW.js";var O=p("<h2>System.Text.Json</h2>"),D=p("<h2>C# JSON парсер</h2>"),E=p("<h2>C# JSON перечисление</h2>"),W=p("<h2>C# JSON сериализация</h2>"),w=p("<h1>С# JSON</h1> <p>В руководстве по C# JSON показано, как работать с данными JSON в C# с помощью классов стандартной библиотеки чекайте сами).</p> <p>Мы же рассмотрим одну из популярных сторонних библиотек под названием Json.NET</p> <!> <p>Пространство имён System.Text.Json предоставляет высокопроизводительные, не требующие больших ресурсов и соответствующие стандартам инструменты для работы с JSON. Классы позволяют сериализовать объекты в текст JSON и десериализовать текст JSON в объекты. Поддержка UTF-8 встроена.</p> <!> <p>JsonDocument.Parse анализирует поток как данные в кодировке UTF-8, представляющие одно значение JSON, и преобразует его в JsonDocument. Поток считывается до завершения.</p> <!> <p>В приведенном примере мы анализируем простую строку JSON.</p> <!> <p>Мы разбираем строку JSON на JsonDocument.</p> <!> <p>Мы получаем ссылку на корневой элемент со свойством RootElement.</p> <!> <p>С помощью оператора [] мы получаем первый и второй подэлементы документа JSON.</p> <!> <p>Мы получаем свойства элемента с помощью GetProperty.</p> <!> <!> <p>JsonElement.EnumerateArray Перечисляет значения в массиве JSON, представленном символом JsonElement.</p> <!> <p>В приведенном примере мы перечисляем содержимое корневого элемента.</p> <!> <p>Мы получаем массив подэлементов.</p> <!> <p>В цикле while мы перебираем массив элементов.</p> <!> <p>Во втором цикле while мы просматриваем свойства каждого элемента.</p> <!> <!>",1);function G(L){var l=w(),d=t(g(l),6);i(d,{id:"SystemTextJsonScarp",children:(o,n)=>{var e=O();r(o,e)},$$slots:{default:!0}});var c=t(d,4);i(c,{id:"ParserJsonScarp",children:(o,n)=>{var e=D();r(o,e)},$$slots:{default:!0}});var m=t(c,4);a(m,{type:"multi",children:(o,n)=>{u();var e=s();e.nodeValue=`using System.Text.Json;

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
`,r(o,e)},$$slots:{default:!0}});var v=t(m,4);a(v,{hideCopyButton:!0,code:"using JsonDocument doc = JsonDocument.Parse(data);"});var h=t(v,4);a(h,{hideCopyButton:!0,code:"JsonElement root = doc.RootElement;"});var $=t(h,4);a($,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,n)=>{u();var e=s();e.nodeValue=`var u1 = root[0];
var u2 = root[1];
Console.WriteLine(u1);
Console.WriteLine(u2);
`,r(o,e)},$$slots:{default:!0}});var J=t($,4);a(J,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,n)=>{u();var e=s();e.nodeValue=`Console.WriteLine(u1.GetProperty("name"));
Console.WriteLine(u1.GetProperty("occupation"));
`,r(o,e)},$$slots:{default:!0}});var C=t(J,4);a(C,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,n)=>{u();var e=s();e.nodeValue=`$ dotnet run
[ {"name": "John Doe", "occupation": "gardener"},
 {"name": "Peter Novak", "occupation": "driver"} ]
{"name": "John Doe", "occupation": "gardener"}
{"name": "Peter Novak", "occupation": "driver"}
John Doe
gardener
Peter Novak
driver
`,r(o,e)},$$slots:{default:!0}});var y=t(C,2);i(y,{id:"enumerateJsonScarp",children:(o,n)=>{var e=E();r(o,e)},$$slots:{default:!0}});var P=t(y,4);a(P,{type:"multi",children:(o,n)=>{u();var e=s();e.nodeValue=`using System.Text.Json;

string data = @" [ {""name"": ""John Doe"", ""occupation"": ""gardener""}, 
 {""name"": ""Peter Novak"", ""occupation"": ""driver""} ]";

using var doc = JsonDocument.Parse(data);
JsonElement root = doc.RootElement;

var users = root.EnumerateArray();

while (users.MoveNext())
{
 var user = users.Current;
 System.Console.WriteLine(user);

 var props = user.EnumerateObject();

 while (props.MoveNext())
 {
 var prop = props.Current;
 Console.WriteLine($"{prop.Name}: {prop.Value}");
 }
}
`,r(o,e)},$$slots:{default:!0}});var _=t(P,4);a(_,{hideCopyButton:!0,code:"var users = root.EnumerateArray();"});var N=t(_,4);a(N,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,n)=>{u();var e=s();e.nodeValue=`while (users.MoveNext())
{
 var user = users.Current;
 Console.WriteLine(user);
...
`,r(o,e)},$$slots:{default:!0}});var f=t(N,4);a(f,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,n)=>{u();var e=s();e.nodeValue=`var props = user.EnumerateObject();

while (props.MoveNext())
{
 var prop = props.Current;
 Console.WriteLine($"{prop.Name}: {prop.Value}");
}
`,r(o,e)},$$slots:{default:!0}});var S=t(f,4);a(S,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(o,n)=>{u();var e=s();e.nodeValue=`$ dotnet run
{"name": "John Doe", "occupation": "gardener"}
name: John Doe
occupation: gardener
{"name": "Peter Novak", "occupation": "driver"}
name: Peter Novak
occupation: driver
`,r(o,e)},$$slots:{default:!0}});var x=t(S,2);i(x,{id:"serializeJsonScarp",children:(o,n)=>{var e=W();r(o,e)},$$slots:{default:!0}}),r(L,l)}export{G as component};
