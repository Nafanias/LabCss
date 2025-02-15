import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{S as s,T as x,U as c,V as o,W as v}from"../chunks/Dd7UJIo3.js";import{t as k,a as r,b as a}from"../chunks/C5vO97ZR.js";import{O as i}from"../chunks/wfHWEjdV.js";import{C as l}from"../chunks/CuEhIwxh.js";var w=k('<h1 class="svelte-oir1bt">Json в Python</h1> <p class="svelte-oir1bt">Примечание: в Python данные JSON обычно представлены в виде строки.</p> <h2 class="svelte-oir1bt">Импортирование модуля</h2> <p class="svelte-oir1bt">Чтобы использовать любой модуль в Python, всегда необходимо импортировать этот модуль. Мы можем импортировать модуль json, используя оператор <!>.</p> <p class="svelte-oir1bt">Пример: Импортирование модуля JSON.</p> <!> <h2 class="svelte-oir1bt">Парсинг JSON – Конвертация из JSON в Python</h2> <p class="svelte-oir1bt">Функции <!> и <!> модуля json упрощают парсинг JSON-объектов.</p> <h2 class="svelte-oir1bt">Парсинг JSON-строки</h2> <p class="svelte-oir1bt">Метод <!> используется для парсинга JSON-строк в Python, и результатом будет словарь Python.</p> <p class="svelte-oir1bt">Синтаксис:</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>Преобразование JSON в словарь</p> <!> <p class="svelte-oir1bt">Выход</p> <!> <h2 id="Formatting" class="svelte-oir1bt">Форматирование JSON</h2> <p class="svelte-oir1bt">В приведенном выше примере вы, должно быть, заметили, что при конвертации объекта Python в JSON он не форматируется, а вывод идет по прямой линии. Мы можем отформатировать JSON, передав параметр indent методу dumps().</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>форматирование JSON</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Вывод</span></p> <!> <h2 id="sort" class="svelte-oir1bt">Сортировка JSON</h2> <p class="svelte-oir1bt">Мы можем сортировать данные JSON с помощью параметра sort_keys метода dumps(). Этот параметр принимает логическое значение и возвращает отсортированный JSON, если переданное значение равно True. По умолчанию переданное значение равно False.</p> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Пример:</span>сортировка JSON</p> <!> <p class="svelte-oir1bt"><span class="bold svelte-oir1bt">Вывод</span></p> <!>',1);function L(P){var m=w(),d=s(x(m),6),S=s(c(d));i(S,{visited:!0,href:"https://www.geeksforgeeks.org/import-module-python/",children:(e,n)=>{o();var t=a("import");r(e,t)},$$slots:{default:!0}}),o(),v(d);var h=s(d,4);l(h,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# importing json module
	import json`,r(e,t)},$$slots:{default:!0}});var p=s(h,4),$=s(c(p));i($,{visited:!0,href:"https://www.geeksforgeeks.org/json-load-in-python/",children:(e,n)=>{o();var t=a("load()");r(e,t)},$$slots:{default:!0}});var J=s($,2);i(J,{visited:!0,href:"https://www.geeksforgeeks.org/json-loads-in-python/",children:(e,n)=>{o();var t=a("loads()");r(e,t)},$$slots:{default:!0}}),o(),v(p);var u=s(p,4),O=s(c(u));i(O,{visited:!0,href:"https://www.geeksforgeeks.org/json-loads-in-python/",children:(e,n)=>{o();var t=a("loads()");r(e,t)},$$slots:{default:!0}}),o(),v(u);var _=s(u,4);l(_,{type:"inline",code:"json.loads(json_string)"});var y=s(_,4);l(y,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Python program to convert JSON to Dict 
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
print(type(employee_dict))`,r(e,t)},$$slots:{default:!0}});var b=s(y,4);l(b,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(e,n)=>{o();var t=a();t.nodeValue=`Данные после конвертации
{'имя': 'Нитин', 'отдел': 'Финансы', 'компания': 'GFG'}
Финансы

Тип данных
<класс 'dict'>`,r(e,t)},$$slots:{default:!0}});var f=s(b,8);l(f,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Import required libraries
import json
 
# Initialize JSON data
json_data = '[ {"studentid": 1, "name": "Nikhil", "subjects": ["Python", "Data Structures"]},{"studentid": 2, "name": "Nisha", "subjects": ["Java", "C++", "R Lang"]} ]'
 
# Create Python object from JSON string 
# data
data = json.loads(json_data)
 
# Pretty Print JSON
json_formatted_str = json.dumps(data, indent=4)
print(json_formatted_str)`,r(e,t)},$$slots:{default:!0}});var j=s(f,4);l(j,{type:"multi",hideCopyButton:!0,children:(e,n)=>{o();var t=a();t.nodeValue=`[
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
]`,r(e,t)},$$slots:{default:!0}});var N=s(j,8);l(N,{type:"multi",children:(e,n)=>{o();var t=a();t.nodeValue=`# Import required libraries
import json
 
# Initialize JSON data
json_data = '[ {"studentid": 1, "name": "Nikhil", "subjects":["Python", "Data Structures"], "company":"GFG"},{"studentid": 2, "name": "Nisha", "subjects":["Java", "C++", "R Lang"], "company":"GFG"} ]'
 
# Create Python object from JSON string 
# data
data = json.loads(json_data)
 
# Pretty Print JSON
json_formatted_str = json.dumps(data, indent=4, sort_keys=True)
print(json_formatted_str)`,r(e,t)},$$slots:{default:!0}});var g=s(N,4);l(g,{type:"multi",hideCopyButton:!0,children:(e,n)=>{o();var t=a();t.nodeValue=`[
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
]`,r(e,t)},$$slots:{default:!0}}),r(P,m)}export{L as component};
