import{t as i,a as o,b as a}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{L as r,M as Q,N as l}from"../chunks/TTrIPi8I.js";import{A as p}from"../chunks/5ZNi9sMP.js";import{C as n}from"../chunks/DTaq0LnW.js";var X=i('<h2 class="svelte-1gyo6pc">System.Text.Json</h2>'),Y=i('<h2 class="svelte-1gyo6pc">C# JSON парсер</h2>'),Z=i('<h2 class="svelte-1gyo6pc">C# JSON перечисление</h2>'),ee=i('<h2 class="svelte-1gyo6pc">C# JSON сериализация</h2>'),te=i('<h2 class="svelte-1gyo6pc">C# JSON десериализация</h2>'),re=i('<h2 class="svelte-1gyo6pc">C# JsonSerializerOptions</h2>'),oe=i('<h2 class="svelte-1gyo6pc">C# Utf8JsonWriter</h2>'),se=i('<h2 class="svelte-1gyo6pc">C# Utf8JsonReader</h2>'),ne=i('<h2 class="svelte-1gyo6pc">C# JSON Асинхронный парсер</h2>'),ae=i('<h2 class="svelte-1gyo6pc">C# HttpClient GetFromJsonAsync</h2>'),le=i('<h1 class="svelte-1gyo6pc">С# JSON</h1> <p class="svelte-1gyo6pc">В руководстве по C# JSON показано, как работать с данными JSON в C# с помощью классов стандартной библиотеки чекайте сами).</p> <p class="svelte-1gyo6pc">Мы же рассмотрим одну из популярных сторонних библиотек под названием Json.NET</p> <!> <p class="svelte-1gyo6pc">Пространство имён System.Text.Json предоставляет высокопроизводительные, не требующие больших ресурсов и соответствующие стандартам инструменты для работы с JSON. Классы позволяют сериализовать объекты в текст JSON и десериализовать текст JSON в объекты. Поддержка UTF-8 встроена.</p> <!> <p class="svelte-1gyo6pc">JsonDocument.Parse анализирует поток как данные в кодировке UTF-8, представляющие одно значение JSON, и преобразует его в JsonDocument. Поток считывается до завершения.</p> <!> <p class="svelte-1gyo6pc">В приведенном примере мы анализируем простую строку JSON.</p> <!> <p class="svelte-1gyo6pc">Мы разбираем строку JSON на JsonDocument.</p> <!> <p class="svelte-1gyo6pc">Мы получаем ссылку на корневой элемент со свойством RootElement.</p> <!> <p class="svelte-1gyo6pc">С помощью оператора [] мы получаем первый и второй подэлементы документа JSON.</p> <!> <p class="svelte-1gyo6pc">Мы получаем свойства элемента с помощью GetProperty.</p> <!> <!> <p class="svelte-1gyo6pc">JsonElement.EnumerateArray Перечисляет значения в массиве JSON, представленном символом JsonElement.</p> <!> <p class="svelte-1gyo6pc">В приведенном примере мы перечисляем содержимое корневого элемента.</p> <!> <p class="svelte-1gyo6pc">Мы получаем массив подэлементов.</p> <!> <p class="svelte-1gyo6pc">В цикле while мы перебираем массив элементов.</p> <!> <p class="svelte-1gyo6pc">Во втором цикле while мы просматриваем свойства каждого элемента.</p> <!> <!> <p class="svelte-1gyo6pc">JsonSerializer.Serialize преобразует значение указанного типа в строку JSON.</p> <!> <p class="svelte-1gyo6pc">В приведенном примере мы преобразуем User объект в строку JSON.</p> <!> <!> <p class="svelte-1gyo6pc">JsonSerializer.Deserialize преобразует текст, представляющий одно значение JSON, в экземпляр указанного типа.</p> <!> <p class="svelte-1gyo6pc">В этом примере строка JSON преобразуется в экземпляр типа User .</p> <!> <p class="svelte-1gyo6pc">С JsonSerializerOptions мы можем управлять процессом сериализации с помощью некоторых опций.</p> <!> <p class="svelte-1gyo6pc">Установив опцию WriteIndented, мы включаем отступ для красивой печати.</p> <!> <!> <p class="svelte-1gyo6pc">Utf8JsonWriter предоставляет высокопроизводительный API для прямой, не кэшируемой записи текста JSON в кодировке UTF-8.</p> <!> <p class="svelte-1gyo6pc">В этом примере мы создаём новый объект и записываем его в строку JSON.</p> <!> <p class="svelte-1gyo6pc">Мы можем установить параметр Indented на true для улучшения вывода JSON.</p> <!> <p class="svelte-1gyo6pc">В этом примере мы записываем строку JSON в файл. Данные форматируются.</p> <!> <!> <p class="svelte-1gyo6pc">Utf8JsonReader предоставляет высокопроизводительный API для одностороннего доступа только для чтения к тексту JSON в кодировке UTF-8.</p> <!> <p class="svelte-1gyo6pc">В этом примере мы считываем данные JSON из файла с помощью Utf8JsonReader. Это низкоуровневый API для считывания данных JSON. Мы считываем данные по одному токену за раз.</p> <!> <!> <p class="svelte-1gyo6pc">В следующем примере мы асинхронно считываем поток с помощью JsonDocument.ParseAsync.</p> <!> <p class="svelte-1gyo6pc">В этом примере считываются все версии фреймворка .NET Core, которые доступны в виде строки JSON в репозитории проекта на Github.</p> <!> <p class="svelte-1gyo6pc">Метод GetFromJsonAsync отправляет запрос GET на указанный URL-адрес и возвращает значение, полученное в результате асинхронной десериализации тела ответа в формате JSON.</p> <p class="svelte-1gyo6pc">Этот метод является методом расширения от System.Net.Http.Json.</p> <!> <p class="svelte-1gyo6pc">Мы создаём асинхронный HTTP-запрос к ресурсу JSON. Данные JSON сериализуются в список User объектов.</p> <!> <p class="svelte-1gyo6pc">GetFromJsonAsync — это удобный метод, который преобразует ресурс JSON в коллекции C#.</p> <!> <p class="svelte-1gyo6pc">Нам нужно создать определенный класс для List коллекции.</p> <!> <p class="svelte-1gyo6pc">The JSON fields are mapped to class attributes.</p> <!>',1);function ve(q){var u=le(),c=r(Q(u),6);p(c,{id:"SystemTextJsonScarp",children:(t,s)=>{var e=X();o(t,e)},$$slots:{default:!0}});var d=r(c,4);p(d,{id:"ParserJsonScarp",children:(t,s)=>{var e=Y();o(t,e)},$$slots:{default:!0}});var v=r(d,4);n(v,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;

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
`,o(t,e)},$$slots:{default:!0}});var m=r(v,4);n(m,{hideCopyButton:!0,code:"using JsonDocument doc = JsonDocument.Parse(data);"});var y=r(m,4);n(y,{hideCopyButton:!0,code:"JsonElement root = doc.RootElement;"});var $=r(y,4);n($,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`var u1 = root[0];
var u2 = root[1];
Console.WriteLine(u1);
Console.WriteLine(u2);
`,o(t,e)},$$slots:{default:!0}});var h=r($,4);n(h,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`Console.WriteLine(u1.GetProperty("name"));
Console.WriteLine(u1.GetProperty("occupation"));
`,o(t,e)},$$slots:{default:!0}});var g=r(h,4);n(g,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`$ dotnet run
[ {"name": "John Doe", "occupation": "gardener"},
 {"name": "Peter Novak", "occupation": "driver"} ]
{"name": "John Doe", "occupation": "gardener"}
{"name": "Peter Novak", "occupation": "driver"}
John Doe
gardener
Peter Novak
driver
`,o(t,e)},$$slots:{default:!0}});var J=r(g,2);p(J,{id:"enumerateJsonScarp",children:(t,s)=>{var e=Z();o(t,e)},$$slots:{default:!0}});var S=r(J,4);n(S,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;

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
`,o(t,e)},$$slots:{default:!0}});var f=r(S,4);n(f,{hideCopyButton:!0,code:"var users = root.EnumerateArray();"});var _=r(f,4);n(_,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`while (users.MoveNext())
{
 var user = users.Current;
 Console.WriteLine(user);
...
`,o(t,e)},$$slots:{default:!0}});var N=r(_,4);n(N,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`var props = user.EnumerateObject();

while (props.MoveNext())
{
 var prop = props.Current;
 Console.WriteLine($"{prop.Name}: {prop.Value}");
}
`,o(t,e)},$$slots:{default:!0}});var P=r(N,4);n(P,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`$ dotnet run
{"name": "John Doe", "occupation": "gardener"}
name: John Doe
occupation: gardener
{"name": "Peter Novak", "occupation": "driver"}
name: Peter Novak
occupation: driver
`,o(t,e)},$$slots:{default:!0}});var C=r(P,2);p(C,{id:"serializeJsonScarp",children:(t,s)=>{var e=ee();o(t,e)},$$slots:{default:!0}});var w=r(C,4);n(w,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;

var user = new User("John Doe", "gardener", new MyDate(1995, 11, 30));

var json = JsonSerializer.Serialize(user);
Console.WriteLine(json);

record MyDate(int year, int month, int day);
record User(string Name, string Occupation, MyDate DateOfBirth);
`,o(t,e)},$$slots:{default:!0}});var O=r(w,4);n(O,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`$ dotnet run
{"Name":"John Doe","Occupation":"gardener",
 "DateOfBirth":{"year":1995,"month":11,"day":30}}
`,o(t,e)},$$slots:{default:!0}});var L=r(O,2);p(L,{id:"deserializeJsonScarp",children:(t,s)=>{var e=te();o(t,e)},$$slots:{default:!0}});var x=r(L,4);n(x,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;

string json = @"{""Name"":""John Doe"", ""Occupation"":""gardener"",
 ""DateOfBirth"":{""year"":1995,""month"":11,""day"":30}}";

var user = JsonSerializer.Deserialize<User>(json);

Console.WriteLine(user);

Console.WriteLine(user?.Name);
Console.WriteLine(user?.Occupation);
Console.WriteLine(user?.DateOfBirth);

record MyDate(int year, int month, int day);
record User(string Name, string 
`,o(t,e)},$$slots:{default:!0}});var W=r(x,4);p(W,{id:"JsonSerializerOptionsJsonScarp",children:(t,s)=>{var e=re();o(t,e)},$$slots:{default:!0}});var T=r(W,4);n(T,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;

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
`,o(t,e)},$$slots:{default:!0}});var D=r(T,4);n(D,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`$ dotnet run
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
`,o(t,e)},$$slots:{default:!0}});var b=r(D,2);p(b,{id:"Utf8JsonWriterJsonScarp",children:(t,s)=>{var e=oe();o(t,e)},$$slots:{default:!0}});var U=r(b,4);n(U,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;
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
`,o(t,e)},$$slots:{default:!0}});var E=r(U,4);n(E,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`$ dotnet run
{"name":"John Doe","occupation":"gardener","age":34}
`,o(t,e)},$$slots:{default:!0}});var k=r(E,4);n(k,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;

string data = @" [ {""name"": ""John Doe"", ""occupation"": ""gardener""}, 
 {""name"": ""Peter Novak"", ""occupation"": ""driver""} ]";

JsonDocument jdoc = JsonDocument.Parse(data);

var fileName = @"data.json";
using FileStream fs = File.OpenWrite(fileName);

using var writer = new Utf8JsonWriter(fs, new JsonWriterOptions { Indented = true });
jdoc.WriteTo(writer);
`,o(t,e)},$$slots:{default:!0}});var V=r(k,4);n(V,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`$ cat data.json 
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
`,o(t,e)},$$slots:{default:!0}});var A=r(V,2);p(A,{id:"Utf8JsonReaderJsonScarp",children:(t,s)=>{var e=se();o(t,e)},$$slots:{default:!0}});var B=r(A,4);n(B,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;

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
`,o(t,e)},$$slots:{default:!0}});var M=r(B,4);n(M,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`$ dotnet run
-------------
name: John Doe
occupation: gardener
-------------
name: Peter Novak
occupation: driver
`,o(t,e)},$$slots:{default:!0}});var z=r(M,2);p(z,{id:"ParseAsyncJsonScarp",children:(t,s)=>{var e=ne();o(t,e)},$$slots:{default:!0}});var G=r(z,4);n(G,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json;

using var httpClient = new HttpClient();

var url = "https://raw.githubusercontent.com/dotnet/core/master/release-notes/releases-index.json";
var ts = await httpClient.GetStreamAsync(url);

using var resp = await JsonDocument.ParseAsync(ts);

var root = resp.RootElement.GetProperty("releases-index");

var elems = root.EnumerateArray();

while (elems.MoveNext())
{
 var node = elems.Current;
 Console.WriteLine(node);
}
`,o(t,e)},$$slots:{default:!0}});var j=r(G,4);p(j,{id:"GetFromJsonAsyncJsonScarp",children:(t,s)=>{var e=ae();o(t,e)},$$slots:{default:!0}});var F=r(j,6);n(F,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`using System.Text.Json.Serialization;
using System.Net.Http.Json;

using var client = new HttpClient();

var url = "http://webcode.me/users.json";
var data = await client.GetFromJsonAsync<Users>(url);

if (data != null)
{
 foreach (var user in data.users)
 {
 Console.WriteLine(user);
 }
}

class Users
{
 public List<User> users { get; set; } = new();
}

class User
{
 [JsonPropertyName("id")]
 public int Id { get; set; }

 [JsonPropertyName("first_name")]
 public string FirstName { get; set; } = string.Empty;

 [JsonPropertyName("last_name")]
 public string LastName { get; set; } = string.Empty;

 [JsonPropertyName("email")]
 public string Email { get; set; } = string.Empty;

 public override string ToString()
 {
 return $"User {{ {Id}| {FirstName} {LastName}| {Email} }}";
 }
}
`,o(t,e)},$$slots:{default:!0}});var R=r(F,4);n(R,{hideCopyButton:!0,code:"var data = await client.GetFromJsonAsync<Users>(url);"});var I=r(R,4);n(I,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`class Users
{
 public List<User> users { get; set; } = new();
}
`,o(t,e)},$$slots:{default:!0}});var H=r(I,4);n(H,{type:"multi",children:(t,s)=>{l();var e=a();e.nodeValue=`class User
{
 [JsonPropertyName("id")]
 public int Id { get; set; }

 [JsonPropertyName("first_name")]
 public string FirstName { get; set; } = string.Empty;

 [JsonPropertyName("last_name")]
 public string LastName { get; set; } = string.Empty;

 [JsonPropertyName("email")]
 public string Email { get; set; } = string.Empty;

 public override string ToString()
 {
 return $"User {{ {Id}| {FirstName} {LastName}| {Email} }}";
 }
}
`,o(t,e)},$$slots:{default:!0}});var K=r(H,4);n(K,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,s)=>{l();var e=a();e.nodeValue=`$ dotnet run
User { 1| Robert Schwartz| rob23@gmail.com }
User { 2| Lucy Ballmer| lucyb56@gmail.com }
User { 3| Anna Smith| annasmith23@gmail.com }
User { 4| Robert Brown| bobbrown432@yahoo.com }
User { 5| Roger Bacon| rogerbacon12@yahoo.com }
`,o(t,e)},$$slots:{default:!0}}),o(q,u)}export{ve as component};
