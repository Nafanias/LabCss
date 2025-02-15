import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{S as s,T as z,U as l,V as o,W as d}from"../chunks/DzN_8u2W.js";import{t as R,a as r,b as a}from"../chunks/Csmw85NY.js";import{O as p}from"../chunks/C1Zs-c0d.js";import{C as i}from"../chunks/DeHJi8eY.js";import{I as G}from"../chunks/ZS0o_b5W.js";var M=R('<h1 class="svelte-oir1bt">Json в Python</h1> <p class="svelte-oir1bt">Примечание: в Python данные JSON обычно представлены в виде строки.</p> <h2 id="importPython" class="svelte-oir1bt">Импортирование модуля</h2> <p class="svelte-oir1bt">Чтобы использовать любой модуль в Python, всегда необходимо импортировать этот модуль. Мы можем импортировать модуль json, используя оператор <!>.</p> <p class="svelte-oir1bt">Пример: Импортирование модуля JSON.</p> <!> <h2 id="parsingPython" class="svelte-oir1bt">Парсинг JSON – Конвертация из JSON в Python</h2> <p class="svelte-oir1bt">Функции <!> и <!> модуля json упрощают парсинг JSON-объектов.</p> <h2 class="svelte-oir1bt">Парсинг JSON-строки</h2> <p class="svelte-oir1bt">Метод <!> используется для парсинга JSON-строк в Python, и результатом будет словарь Python.</p> <p class="svelte-oir1bt">Синтаксис:</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>Преобразование JSON в словарь</p> <!> <p class="svelte-oir1bt">Результат</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Примечание:</span>Для получения более подробной информации <!></p> <h2 id="readFilePython" class="svelte-oir1bt">Чтение JSON-файла</h2> <p class="svelte-oir1bt"><!>. Метод может прочитать файл, который содержит JSON-объект. Предположим, у вас есть файл с именем student.json, содержащий данные о студенте, и мы хотим прочитать этот файл.</p> <p class="svelte-oir1bt">Синтаксис:</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>Чтение JSON-файла с использованием Python.</p> <p class="svelte-oir1bt">Предположим, файл выглядит следующим образом.</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>Преобразование JSON в словарь</p> <!> <p class="svelte-oir1bt">Результат</p> <div style="text-align: center; margin-top: 20px;"><div style="width: 60%; display: inline-block;"><!></div></div> <h2 id="FormattingPython" class="svelte-oir1bt">Форматирование JSON</h2> <p class="svelte-oir1bt">В приведенном выше примере вы, должно быть, заметили, что при конвертации объекта Python в JSON он не форматируется, а вывод идет по прямой линии. Мы можем отформатировать JSON, передав параметр indent методу dumps().</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>форматирование JSON</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Вывод</span></p> <!> <h2 id="sortPython" class="svelte-oir1bt">Сортировка JSON</h2> <p class="svelte-oir1bt">Мы можем сортировать данные JSON с помощью параметра sort_keys метода dumps(). Этот параметр принимает логическое значение и возвращает отсортированный JSON, если переданное значение равно True. По умолчанию переданное значение равно False.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>сортировка JSON</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Вывод</span></p> <!>',1);function X(C){var _=M(),v=s(z(_),6),F=s(l(v));p(F,{visited:!0,href:"https://www.geeksforgeeks.org/import-module-python/",children:(e,n)=>{o();var t=a("import");r(e,t)},$$slots:{default:!0}}),o(),d(v);var $=s(v,4);i($,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# importing json module
	import json`,r(e,t)},$$slots:{default:!0}});var u=s($,4),f=s(l(u));p(f,{visited:!0,href:"https://www.geeksforgeeks.org/json-load-in-python/",children:(e,n)=>{o();var t=a("load()");r(e,t)},$$slots:{default:!0}});var V=s(f,2);p(V,{visited:!0,href:"https://www.geeksforgeeks.org/json-loads-in-python/",children:(e,n)=>{o();var t=a("loads()");r(e,t)},$$slots:{default:!0}}),o(),d(u);var c=s(u,4),I=s(l(c));p(I,{visited:!0,href:"https://www.geeksforgeeks.org/json-loads-in-python/",children:(e,n)=>{o();var t=a("loads()");r(e,t)},$$slots:{default:!0}}),o(),d(c);var g=s(c,4);i(g,{type:"inline",code:"json.loads(json_string)"});var j=s(g,4);i(j,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Python program to convert JSON to Dict 
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
print(type(employee_dict))`,r(e,t)},$$slots:{default:!0}});var P=s(j,4);i(P,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(e,n)=>{o();var t=a();t.nodeValue=`Данные после конвертации
{'имя': 'Нитин', 'отдел': 'Финансы', 'компания': 'GFG'}
Финансы

Тип данных
<класс 'dict'>`,r(e,t)},$$slots:{default:!0}});var h=s(P,2),D=s(l(h),2);p(D,{visited:!0,href:"https://www.geeksforgeeks.org/how-to-parse-data-from-json-into-python/",children:(e,n)=>{o();var t=a("Parse Data From JSON into Python");r(e,t)},$$slots:{default:!0}}),d(h);var m=s(h,4),L=l(m);p(L,{visited:!0,href:"https://www.geeksforgeeks.org/json-load-in-python/",children:(e,n)=>{o();var t=a("load()");r(e,t)},$$slots:{default:!0}}),o(),d(m);var N=s(m,4);i(N,{type:"inline",code:"json.load(file_object)"});var y=s(N,6),S=l(y),T=l(S);G(T,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20210727210403/readjsonPython.png",style:"width: 100%;"}),d(S),d(y);var J=s(y,4);i(J,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Python program to read
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
f.close()`,r(e,t)},$$slots:{default:!0}});var b=s(J,4),O=l(b),B=l(O);G(B,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20210727210608/Pythonreadjson.png",style:"width: 100%;"}),d(O),d(b);var w=s(b,8);i(w,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Import required libraries
import json
 
# Initialize JSON data
json_data = '[ {"studentid": 1, "name": "Nikhil", "subjects": ["Python", "Data Structures"]},{"studentid": 2, "name": "Nisha", "subjects": ["Java", "C++", "R Lang"]} ]'
 
# Create Python object from JSON string 
# data
data = json.loads(json_data)
 
# Pretty Print JSON
json_formatted_str = json.dumps(data, indent=4)
print(json_formatted_str)`,r(e,t)},$$slots:{default:!0}});var k=s(w,4);i(k,{type:"multi",hideCopyButton:!0,children:(e,n)=>{o();var t=a();t.nodeValue=`[
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
]`,r(e,t)},$$slots:{default:!0}});var x=s(k,8);i(x,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Import required libraries
import json
 
# Initialize JSON data
json_data = '[ {"studentid": 1, "name": "Nikhil", "subjects":["Python", "Data Structures"], "company":"GFG"},{"studentid": 2, "name": "Nisha", "subjects":["Java", "C++", "R Lang"], "company":"GFG"} ]'
 
# Create Python object from JSON string 
# data
data = json.loads(json_data)
 
# Pretty Print JSON
json_formatted_str = json.dumps(data, indent=4, sort_keys=True)
print(json_formatted_str)`,r(e,t)},$$slots:{default:!0}});var q=s(x,4);i(q,{type:"multi",hideCopyButton:!0,children:(e,n)=>{o();var t=a();t.nodeValue=`[
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
]`,r(e,t)},$$slots:{default:!0}}),r(C,_)}export{X as component};
