import{t as l,a as o,b as a}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{L as t,M as G,N as i}from"../chunks/TTrIPi8I.js";import{A as u}from"../chunks/5ZNi9sMP.js";import{C as s}from"../chunks/DTaq0LnW.js";var F=l("<h2>System.Text.Json</h2>"),I=l("<h2>C# JSON парсер</h2>"),q=l("<h2>C# JSON перечисление</h2>"),H=l("<h2>C# JSON сериализация</h2>"),K=l("<h2>C# JSON десериализация</h2>"),Q=l("<h2>C# JsonSerializerOptions</h2>"),X=l("<h2>C# Utf8JsonWriter</h2>"),Y=l("<h2>C# Utf8JsonReader</h2>"),Z=l("<h1>С# JSON</h1> <p>В руководстве по C# JSON показано, как работать с данными JSON в C# с помощью классов стандартной библиотеки чекайте сами).</p> <p>Мы же рассмотрим одну из популярных сторонних библиотек под названием Json.NET</p> <!> <p>Пространство имён System.Text.Json предоставляет высокопроизводительные, не требующие больших ресурсов и соответствующие стандартам инструменты для работы с JSON. Классы позволяют сериализовать объекты в текст JSON и десериализовать текст JSON в объекты. Поддержка UTF-8 встроена.</p> <!> <p>JsonDocument.Parse анализирует поток как данные в кодировке UTF-8, представляющие одно значение JSON, и преобразует его в JsonDocument. Поток считывается до завершения.</p> <!> <p>В приведенном примере мы анализируем простую строку JSON.</p> <!> <p>Мы разбираем строку JSON на JsonDocument.</p> <!> <p>Мы получаем ссылку на корневой элемент со свойством RootElement.</p> <!> <p>С помощью оператора [] мы получаем первый и второй подэлементы документа JSON.</p> <!> <p>Мы получаем свойства элемента с помощью GetProperty.</p> <!> <!> <p>JsonElement.EnumerateArray Перечисляет значения в массиве JSON, представленном символом JsonElement.</p> <!> <p>В приведенном примере мы перечисляем содержимое корневого элемента.</p> <!> <p>Мы получаем массив подэлементов.</p> <!> <p>В цикле while мы перебираем массив элементов.</p> <!> <p>Во втором цикле while мы просматриваем свойства каждого элемента.</p> <!> <!> <p>JsonSerializer.Serialize преобразует значение указанного типа в строку JSON.</p> <!> <p>В приведенном примере мы преобразуем User объект в строку JSON.</p> <!> <!> <p>JsonSerializer.Deserialize преобразует текст, представляющий одно значение JSON, в экземпляр указанного типа.</p> <!> <p>В этом примере строка JSON преобразуется в экземпляр типа User .</p> <!> <p>С JsonSerializerOptions мы можем управлять процессом сериализации с помощью некоторых опций.</p> <!> <p>Установив опцию WriteIndented, мы включаем отступ для красивой печати.</p> <!> <!> <p>Utf8JsonWriter предоставляет высокопроизводительный API для прямой, не кэшируемой записи текста JSON в кодировке UTF-8.</p> <!> <p>В этом примере мы создаём новый объект и записываем его в строку JSON.</p> <!> <p>Мы можем установить параметр Indented на true для улучшения вывода JSON.</p> <!> <p>В этом примере мы записываем строку JSON в файл. Данные форматируются.</p> <!> <!> <p>Utf8JsonReader предоставляет высокопроизводительный API для одностороннего доступа только для чтения к тексту JSON в кодировке UTF-8.</p> <!> <p>В этом примере мы считываем данные JSON из файла с помощью Utf8JsonReader. Это низкоуровневый API для считывания данных JSON. Мы считываем данные по одному токену за раз.</p> <!> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <!> <!>",1);function se(A){var d=Z(),p=t(G(d),6);u(p,{id:"SystemTextJsonScarp",children:(r,n)=>{var e=F();o(r,e)},$$slots:{default:!0}});var c=t(p,4);u(c,{id:"ParserJsonScarp",children:(r,n)=>{var e=I();o(r,e)},$$slots:{default:!0}});var $=t(c,4);s($,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`using System.Text.Json;

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
`,o(r,e)},$$slots:{default:!0}});var m=t($,4);s(m,{hideCopyButton:!0,code:"using JsonDocument doc = JsonDocument.Parse(data);"});var v=t(m,4);s(v,{hideCopyButton:!0,code:"JsonElement root = doc.RootElement;"});var h=t(v,4);s(h,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`var u1 = root[0];
var u2 = root[1];
Console.WriteLine(u1);
Console.WriteLine(u2);
`,o(r,e)},$$slots:{default:!0}});var J=t(h,4);s(J,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`Console.WriteLine(u1.GetProperty("name"));
Console.WriteLine(u1.GetProperty("occupation"));
`,o(r,e)},$$slots:{default:!0}});var y=t(J,4);s(y,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`$ dotnet run
[ {"name": "John Doe", "occupation": "gardener"},
 {"name": "Peter Novak", "occupation": "driver"} ]
{"name": "John Doe", "occupation": "gardener"}
{"name": "Peter Novak", "occupation": "driver"}
John Doe
gardener
Peter Novak
driver
`,o(r,e)},$$slots:{default:!0}});var f=t(y,2);u(f,{id:"enumerateJsonScarp",children:(r,n)=>{var e=q();o(r,e)},$$slots:{default:!0}});var S=t(f,4);s(S,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`using System.Text.Json;

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
`,o(r,e)},$$slots:{default:!0}});var _=t(S,4);s(_,{hideCopyButton:!0,code:"var users = root.EnumerateArray();"});var C=t(_,4);s(C,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`while (users.MoveNext())
{
 var user = users.Current;
 Console.WriteLine(user);
...
`,o(r,e)},$$slots:{default:!0}});var P=t(C,4);s(P,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`var props = user.EnumerateObject();

while (props.MoveNext())
{
 var prop = props.Current;
 Console.WriteLine($"{prop.Name}: {prop.Value}");
}
`,o(r,e)},$$slots:{default:!0}});var g=t(P,4);s(g,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`$ dotnet run
{"name": "John Doe", "occupation": "gardener"}
name: John Doe
occupation: gardener
{"name": "Peter Novak", "occupation": "driver"}
name: Peter Novak
occupation: driver
`,o(r,e)},$$slots:{default:!0}});var N=t(g,2);u(N,{id:"serializeJsonScarp",children:(r,n)=>{var e=H();o(r,e)},$$slots:{default:!0}});var O=t(N,4);s(O,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`using System.Text.Json;

var user = new User("John Doe", "gardener", new MyDate(1995, 11, 30));

var json = JsonSerializer.Serialize(user);
Console.WriteLine(json);

record MyDate(int year, int month, int day);
record User(string Name, string Occupation, MyDate DateOfBirth);
`,o(r,e)},$$slots:{default:!0}});var w=t(O,4);s(w,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`$ dotnet run
{"Name":"John Doe","Occupation":"gardener",
 "DateOfBirth":{"year":1995,"month":11,"day":30}}
`,o(r,e)},$$slots:{default:!0}});var W=t(w,2);u(W,{id:"deserializeJsonScarp",children:(r,n)=>{var e=K();o(r,e)},$$slots:{default:!0}});var x=t(W,4);s(x,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`using System.Text.Json;

string json = @"{""Name"":""John Doe"", ""Occupation"":""gardener"",
 ""DateOfBirth"":{""year"":1995,""month"":11,""day"":30}}";

var user = JsonSerializer.Deserialize<User>(json);

Console.WriteLine(user);

Console.WriteLine(user?.Name);
Console.WriteLine(user?.Occupation);
Console.WriteLine(user?.DateOfBirth);

record MyDate(int year, int month, int day);
record User(string Name, string 
`,o(r,e)},$$slots:{default:!0}});var L=t(x,4);u(L,{id:"JsonSerializerOptionsJsonScarp",children:(r,n)=>{var e=Q();o(r,e)},$$slots:{default:!0}});var D=t(L,4);s(D,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`using System.Text.Json;

var words = new Dictionary<int, string>
{
 {1, "sky"},
 {2, "cup"},
 {3, "odd"},
 {4, "cloud"},
 {5, "forest"},
 {6, "warm"},
};

var r = JsonSerializer.Serialize(words, 
 new JsonSerializerOptions { WriteIndented = true });

Console.WriteLine(r);

Console.WriteLine("---------------------");

var d = JsonSerializer.Deserialize<Dictionary<int, string>>(r);

foreach (var (k, v) in d!)
{
 Console.WriteLine($"{k}: {v}");
}
`,o(r,e)},$$slots:{default:!0}});var T=t(D,4);s(T,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`$ dotnet run
{
 "1": "sky",
 "2": "cup",
 "3": "odd",
 "4": "cloud",
 "5": "forest",
 "6": "warm"
}
---------------------
1: sky
2: cup
3: odd
4: cloud
5: forest
6: warm
`,o(r,e)},$$slots:{default:!0}});var k=t(T,2);u(k,{id:"Utf8JsonWriterJsonScarp",children:(r,n)=>{var e=X();o(r,e)},$$slots:{default:!0}});var V=t(k,4);s(V,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`using System.Text.Json;
using System.Text;

using var ms = new MemoryStream();
using var writer = new Utf8JsonWriter(ms);

writer.WriteStartObject();
writer.WriteString("name", "John Doe");
writer.WriteString("occupation", "gardener");
writer.WriteNumber("age", 34);
writer.WriteEndObject();
writer.Flush();

string json = Encoding.UTF8.GetString(ms.ToArray());

Console.WriteLine(json);
`,o(r,e)},$$slots:{default:!0}});var M=t(V,4);s(M,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`$ dotnet run
{"name":"John Doe","occupation":"gardener","age":34}
`,o(r,e)},$$slots:{default:!0}});var U=t(M,4);s(U,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`using System.Text.Json;

string data = @" [ {""name"": ""John Doe"", ""occupation"": ""gardener""}, 
 {""name"": ""Peter Novak"", ""occupation"": ""driver""} ]";

JsonDocument jdoc = JsonDocument.Parse(data);

var fileName = @"data.json";
using FileStream fs = File.OpenWrite(fileName);

using var writer = new Utf8JsonWriter(fs, new JsonWriterOptions { Indented = true });
jdoc.WriteTo(writer);
`,o(r,e)},$$slots:{default:!0}});var B=t(U,4);s(B,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`$ cat data.json 
[
 {
 "name": "John Doe",
 "occupation": "gardener"
 },
 {
 "name": "Peter Novak",
 "occupation": "driver"
 }
]
`,o(r,e)},$$slots:{default:!0}});var E=t(B,2);u(E,{id:"Utf8JsonReaderJsonScarp",children:(r,n)=>{var e=Y();o(r,e)},$$slots:{default:!0}});var z=t(E,4);s(z,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`using System.Text.Json;

var fileName = @"/home/user7/data.json";
byte[] data = File.ReadAllBytes(fileName);
Utf8JsonReader reader = new Utf8JsonReader(data);

while (reader.Read())
{
 switch (reader.TokenType)
 {
 case JsonTokenType.StartObject:
 Console.WriteLine("-------------");
 break;
 case JsonTokenType.EndObject:
 break;
 case JsonTokenType.StartArray:
 case JsonTokenType.EndArray:
 break;
 case JsonTokenType.PropertyName:
 Console.Write($"{reader.GetString()}: ");
 break;
 case JsonTokenType.String:
 Console.WriteLine(reader.GetString());
 break;
 default:
 throw new ArgumentException();

 }
}
`,o(r,e)},$$slots:{default:!0}});var j=t(z,4);s(j,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`$ dotnet run
-------------
name: John Doe
occupation: gardener
-------------
name: Peter Novak
occupation: driver
`,o(r,e)},$$slots:{default:!0}});var b=t(j,22);s(b,{type:"multi",children:(r,n)=>{i();var e=a();e.nodeValue=`
`,o(r,e)},$$slots:{default:!0}});var R=t(b,2);s(R,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(r,n)=>{i();var e=a();e.nodeValue=`
`,o(r,e)},$$slots:{default:!0}}),o(A,d)}export{se as component};
