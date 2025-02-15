import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{S as s,T as u,U as i,V as o,W as d}from"../chunks/Dd7UJIo3.js";import{t as c,a as r,b as a}from"../chunks/C5vO97ZR.js";import{O as p}from"../chunks/wfHWEjdV.js";import{C as l}from"../chunks/CuEhIwxh.js";import{I as H,O as et,L as O}from"../chunks/C8s8nEyL.js";var st=c("В приведённом выше примере мы использовали функции open() и close() для открытия и закрытия JSON-файла. Если вы не знакомы с обработкой файлов в Python, пожалуйста, ознакомьтесь с разделом <!>.",1),ot=c("Для получения дополнительной информации о чтении JSON-файлов обратитесь к разделу <!>",1),rt=c("<!> <!> <!>",1),at=c('<h1 class="svelte-oir1bt">Json в Python</h1> <p class="svelte-oir1bt">Примечание: в Python данные JSON обычно представлены в виде строки.</p> <h2 id="importPython" class="svelte-oir1bt">Импортирование модуля</h2> <p class="svelte-oir1bt">Чтобы использовать любой модуль в Python, всегда необходимо импортировать этот модуль. Мы можем импортировать модуль json, используя оператор <!>.</p> <p class="svelte-oir1bt">Пример: Импортирование модуля JSON.</p> <!> <h2 id="parsingPython" class="svelte-oir1bt">Парсинг JSON – Конвертация из JSON в Python</h2> <p class="svelte-oir1bt">Функции <!> и <!> модуля json упрощают парсинг JSON-объектов.</p> <h2 class="svelte-oir1bt">Парсинг JSON-строки</h2> <p class="svelte-oir1bt">Метод <!> используется для парсинга JSON-строк в Python, и результатом будет словарь Python.</p> <p class="svelte-oir1bt">Синтаксис:</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>Преобразование JSON в словарь</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Примечание:</span>Для получения более подробной информации <!></p> <h2 id="readFilePython" class="svelte-oir1bt">Чтение JSON-файла</h2> <p class="svelte-oir1bt"><!>. Метод может прочитать файл, который содержит JSON-объект. Предположим, у вас есть файл с именем student.json, содержащий данные о студенте, и мы хотим прочитать этот файл.</p> <p class="svelte-oir1bt">Синтаксис:</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>Чтение JSON-файла с использованием Python.</p> <p class="svelte-oir1bt">Предположим, файл выглядит следующим образом.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>Преобразование JSON в словарь</p> <!> <p class="svelte-oir1bt">Результат</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <span class="bold svelte-oir1bt">Примечание</span> <!> <h2 id="convertPython" class="svelte-oir1bt">Преобразование из Python в JSON</h2> <h2 id="FormattingPython" class="svelte-oir1bt">Форматирование JSON</h2> <p class="svelte-oir1bt">В приведенном выше примере вы, должно быть, заметили, что при конвертации объекта Python в JSON он не форматируется, а вывод идет по прямой линии. Мы можем отформатировать JSON, передав параметр indent методу dumps().</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>форматирование JSON</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Вывод</span></p> <!> <h2 id="sortPython" class="svelte-oir1bt">Сортировка JSON</h2> <p class="svelte-oir1bt">Мы можем сортировать данные JSON с помощью параметра sort_keys метода dumps(). Этот параметр принимает логическое значение и возвращает отсортированный JSON, если переданное значение равно True. По умолчанию переданное значение равно False.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>сортировка JSON</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Вывод</span></p> <!>',1);function ut(M){var S=at(),$=s(u(S),6),U=s(i($));p(U,{visited:!0,href:"https://www.geeksforgeeks.org/import-module-python/",children:(e,n)=>{o();var t=a("import");r(e,t)},$$slots:{default:!0}}),o(),d($);var J=s($,4);l(J,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# importing json module
	import json`,r(e,t)},$$slots:{default:!0}});var m=s(J,4),w=s(i(m));p(w,{visited:!0,href:"https://www.geeksforgeeks.org/json-load-in-python/",children:(e,n)=>{o();var t=a("load()");r(e,t)},$$slots:{default:!0}});var W=s(w,2);p(W,{visited:!0,href:"https://www.geeksforgeeks.org/json-loads-in-python/",children:(e,n)=>{o();var t=a("loads()");r(e,t)},$$slots:{default:!0}}),o(),d(m);var y=s(m,4),A=s(i(y));p(A,{visited:!0,href:"https://www.geeksforgeeks.org/json-loads-in-python/",children:(e,n)=>{o();var t=a("loads()");r(e,t)},$$slots:{default:!0}}),o(),d(y);var k=s(y,4);l(k,{type:"inline",code:"json.loads(json_string)"});var x=s(k,4);l(x,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Python program to convert JSON to Dict 
import json
 
# JSON string
employee ='{"name": "Nitin", "department":"Finance","company":"GFG"}'
 
# Convert string to Python dict
employee_dict = json.loads(employee)
print("Data after conversion")
print(employee_dict)
print(employee_dict['department'])
 
print("
Type of data")
print(type(employee_dict))`,r(e,t)},$$slots:{default:!0}});var F=s(x,4);l(F,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(e,n)=>{o();var t=a();t.nodeValue=`Данные после конвертации
{'имя': 'Нитин', 'отдел': 'Финансы', 'компания': 'GFG'}
Финансы

Тип данных
<класс 'dict'>`,r(e,t)},$$slots:{default:!0}});var _=s(F,2),E=s(i(_),2);p(E,{visited:!0,href:"https://www.geeksforgeeks.org/how-to-parse-data-from-json-into-python/",children:(e,n)=>{o();var t=a("Parse Data From JSON into Python");r(e,t)},$$slots:{default:!0}}),d(_);var f=s(_,4),K=i(f);p(K,{visited:!0,href:"https://www.geeksforgeeks.org/json-load-in-python/",children:(e,n)=>{o();var t=a("load()");r(e,t)},$$slots:{default:!0}}),o(),d(f);var G=s(f,4);l(G,{type:"inline",code:"json.load(file_object)"});var g=s(G,6),C=i(g),Q=i(C);H(Q,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20210727210403/readjsonPython.png",style:"width: 100%;"}),d(C),d(g);var V=s(g,4);l(V,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Python program to read
# json file
 
 
import json
 
# Opening JSON file
f = open('data.json',)
 
# returns JSON object as
# a dictionary
data = json.load(f)
 
# Iterating through the json
# list
for i in data:
    print(i)
 
# Closing file
f.close()`,r(e,t)},$$slots:{default:!0}});var b=s(V,4),I=i(b),X=i(I);H(X,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20210727210608/Pythonreadjson.png",style:"width: 100%;"}),d(I),d(b);var L=s(b,4);et(L,{style:"margin-left: 3.5em;",children:(e,n)=>{var t=rt(),R=u(t);O(R,{children:(h,z)=>{o();var v=a("Данные JSON преобразуются в список словарей на Python.");r(h,v)},$$slots:{default:!0}});var q=s(R,2);O(q,{children:(h,z)=>{o();var v=st(),P=s(u(v));p(P,{visited:!0,href:"https://www.geeksforgeeks.org/file-handling-python/",children:(j,tt)=>{o();var N=a("File Handling in Python");r(j,N)},$$slots:{default:!0}}),o(),r(h,v)},$$slots:{default:!0}});var Z=s(q,2);O(Z,{children:(h,z)=>{o();var v=ot(),P=s(u(v));p(P,{visited:!0,href:"https://www.geeksforgeeks.org/read-json-file-using-python/",children:(j,tt)=>{o();var N=a("Read JSON file using Python");r(j,N)},$$slots:{default:!0}}),r(h,v)},$$slots:{default:!0}}),r(e,t)},$$slots:{default:!0}});var D=s(L,10);l(D,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Import required libraries
import json
 
# Initialize JSON data
json_data = '[ {"studentid": 1, "name": "Nikhil", "subjects": ["Python", "Data Structures"]},{"studentid": 2, "name": "Nisha", "subjects": ["Java", "C++", "R Lang"]} ]'
 
# Create Python object from JSON string 
# data
data = json.loads(json_data)
 
# Pretty Print JSON
json_formatted_str = json.dumps(data, indent=4)
print(json_formatted_str)`,r(e,t)},$$slots:{default:!0}});var T=s(D,4);l(T,{type:"multi",hideCopyButton:!0,children:(e,n)=>{o();var t=a();t.nodeValue=`[
    {
        "studentid": 1,
        "имя": "Нихил",
        "субъекты": [
            "Питон",
            «Структуры данных»
        ]
    },
    {
        "studentid": 2,
        "имя": "Ниша",
        "субъекты": [
            "Ява",
            "С++",
            "Р Ланг"
        ]
    }
]`,r(e,t)},$$slots:{default:!0}});var B=s(T,8);l(B,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Import required libraries
import json
 
# Initialize JSON data
json_data = '[ {"studentid": 1, "name": "Nikhil", "subjects":["Python", "Data Structures"], "company":"GFG"},{"studentid": 2, "name": "Nisha", "subjects":["Java", "C++", "R Lang"], "company":"GFG"} ]'
 
# Create Python object from JSON string 
# data
data = json.loads(json_data)
 
# Pretty Print JSON
json_formatted_str = json.dumps(data, indent=4, sort_keys=True)
print(json_formatted_str)`,r(e,t)},$$slots:{default:!0}});var Y=s(B,4);l(Y,{type:"multi",hideCopyButton:!0,children:(e,n)=>{o();var t=a();t.nodeValue=`[
    {
        "компания": "GFG",
        "имя": "Нихил",
        "studentid": 1,
        "субъекты": [
            "Питон",
            «Структуры данных»
        ]
    },
    {
        "компания": "GFG",
        "имя": "Ниша",
        "studentid": 2,
        "субъекты": [
            "Ява",
            "С++",
            "Р Ланг"
        ]
    }
]`,r(e,t)},$$slots:{default:!0}}),r(M,S)}export{ut as component};
